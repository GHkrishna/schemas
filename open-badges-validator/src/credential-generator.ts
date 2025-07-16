export const createOobJsonldIssuancePayload = (
  achievement: any,
  identifiers: any[],
  config: {
    schemaName: string
    schemaLedgerId: string
    orgDid: string
    isReuseConnection?: boolean
    comment?: string
    additionalCredentialSubject?: Record<string, any>
    additionalCrdentialProperties?: Record<string, any>
    issuerObject?: any
  }
) => {
  const {
    schemaName,
    schemaLedgerId,
    orgDid,
    isReuseConnection = true,
    comment = 'Generated via utility',
    additionalCredentialSubject = {},
    issuerObject = null,
    additionalCrdentialProperties = {} // Will contain additional properties for the credential like image, credentialStatus, etc.
  } = config;

  const proofType = orgDid.toLowerCase().includes('polygon')
    ? 'Ed25519Signature2020' // Need to check signature for key and web
    : 'Ed25519Signature2020';

  const credentialSubject: Record<string, any> = {
    achievement,
    identifier: identifiers,
    ...additionalCredentialSubject
  };

  const credential: Record<string, any> = {
    '@context': [
      'https://www.w3.org/ns/credentials/v2',
      'https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json',
      'https://w3id.org/security/data-integrity/v2',
      schemaLedgerId,
    ],
    type: ['VerifiableCredential', 'OpenBadgeCredential', schemaName],
    issuer: issuerObject ? {id:orgDid, ...issuerObject} : { id: orgDid },
    issuanceDate: new Date().toISOString(),
    validFrom: new Date().toISOString(),
    expirationDate: '2028-12-31T18:30:00.000Z',
    name: achievement.name || 'Untitled Badge',
    id: `something-randeom`,
    credentialSubject,
    ...additionalCrdentialProperties,
  };

  const emailId =
    identifiers.find((i) => i.identityType === 'emailAddress')?.identityHash || '';

  return {
    credentialOffer: [
      {
        emailId,
        credential,
        options: {
          proofType,
          proofPurpose: 'assertionMethod',
        },
      },
    ],
    comment,
    protocolVersion: 'v2',
    credentialType: 'jsonld',
    isReuseConnection,
  };
};
