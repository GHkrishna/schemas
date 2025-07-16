import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { fetchSchema, validateOpenBadgeCredential } from './validator';
import { sampleCredential, signedRohitSir } from './sample-credential';
import { createOobJsonldIssuancePayload } from './credential-generator';
import { sample } from 'rxjs';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // @Get('validate/:url')
  // async fetchAndValidate(@Param('url') url: string): Promise<string> {
  @Get('validate')
  async fetchAndValidate(): Promise<{ status: string, errors: any[] }> {
    try {
      // const url = 'https://api.thesolo.network/api/platform/v3/achievementcredential/345eecc8-26f4-5c5d-920e-4fc33a181238';
      // const credential = await fetchSchema(url);
      // const credential = sampleCredential;
      const credential = signedRohitSir
      console.log('Fetched credential:', JSON.stringify(credential, null, 2));
      // const credential = await response.json();
      const result = await validateOpenBadgeCredential('https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json', credential);
      return { status: result.status, errors: result.errors || [] };
    } catch (error) {
      console.error('Error fetching or validating credential:', error);
      return { status: 'Validation failed', errors: ['Something went wrong during validation.'] };
    }
  }

  @Get('credential-payload')
  getCredentialPayload():  {credentialObject: any } {
    try {
      const result = createOobJsonldIssuancePayload(
        sampleCredential.credentialSubject.achievement,
        sampleCredential.credentialSubject.identifier,
        {
          schemaName: 'AchievementCredential',
          schemaLedgerId: 'https://purl.imsglobal.org/spec/ob/v3p0/schema/json/ob_v3p0_achievementcredential_schema.json',
          orgDid: sampleCredential.issuer,
          isReuseConnection: true,
          comment: 'Generated via utility',
          additionalCredentialSubject: {
            "id": sampleCredential.credentialSubject.id,
            "type": sampleCredential.credentialSubject.type,
            "image": sampleCredential.credentialSubject.image,
          },
          additionalCrdentialProperties: { "credentialStatus": sampleCredential.credentialStatus, "image": sampleCredential.image},
          issuerObject: sampleCredential.issuer
    });
      return { credentialObject: result };
    } catch (error) {
      console.error('Error fetching or validating credential:', error);
      return { credentialObject: 'Something went wrong during validation.' };
    }
  }
}
