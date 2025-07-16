import Ajv2019 from 'ajv/dist/2019';
import addFormats from 'ajv-formats';
// Tried with Obs but did not work, so using Ajv2019 instead

// We used Ajv2019 because it supports the Open Badges v3.0 schema and is compatible with the latest JSON Schema standards.
const ajv = new Ajv2019({ allErrors: true, strict: false }); // Need to explore more options for Ajv, like strict mode, etc.
addFormats(ajv);

let validate: ReturnType<typeof ajv.compile> | null = null;

export async function fetchSchema(url: string): Promise<any> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch schema from ${url}`);
  }
  return await response.json();
}

export async function validateOpenBadgeCredential(schemaUrl: string, credential: any): Promise<{status: string, errors?: any[]}> {
  try {
    if (!validate) {
      // const schemaUrl =
      // // This is the URL for the Open Badges v3.0 Achievement Credential schema
      // // We can also change this to a differet schema URL if needed
      //   'https://purl.imsglobal.org/spec/ob/v3p0/schema/json/ob_v3p0_achievementcredential_schema.json';
      console.log(`Fetching and compiling schema from: ${schemaUrl}`);
      const schema = await fetchSchema(schemaUrl);
      validate = ajv.compile(schema); // only compile once due to some error from ajv when using the same schema multiple times
    }

    const isValid = validate(credential);

    if (isValid) {
      console.log('Credential is valid.');
      return { status: 'Valid', errors: [] };
    } else {
      console.error('Credential validation failed:', validate.errors);
      return { status: 'Invalid', errors: validate.errors || [] };
    }
  } catch (error) {
    console.error('Error during validation:', error);
      return { status: 'Invalid', errors: [`Error during validation: ${error}`] };
  }
}
