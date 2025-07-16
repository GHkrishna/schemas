export const sampleCredential = {
    "@context": [
        "https://www.w3.org/ns/credentials/v2",
        "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json",
        "https://w3id.org/security/data-integrity/v2"
    ],
    "id": "https://api.thesolo.network/api/platform/v3/achievementcredential/345eecc8-26f4-5c5d-920e-4fc33a181238",
    "type": [
        "VerifiableCredential",
        "OpenBadgeCredential"
    ],
    "validFrom": "2025-04-17T16:26:58.000Z",
    "issuer": "did:key:z6Mkpz1qHuoMamuHj8YXJNBDu2GrLz3LzinA5t4GiYtYKS8v",
    "issuanceDate": "2025-04-17T16:26:58.000Z",
    "expirationDate": "2028-12-31T18:30:00.000Z",
    "name": "The Problem-Slayer",
    "credentialSubject": {
        "id": "did:key:z6MkmjRGCWfD2qbswXcWhdpSZ5uzbDXth1cmEQ96Ecu894LC",
        "type": [
            "AchievementSubject"
        ],
        "image": {
            "id": "https://freshbox-dev.s3.amazonaws.com/users/587/Ak-1695713292007-lg.jpg",
            "type": "Image"
        },
        "achievement": {
            "id": "https://app.thesolo.network/my-credential-details/26",
            "type": [
                "Achievement"
            ],
            "criteria": {
                "id": "https://app.thesolo.network/my-credential-details/26"
            },
            "description": "Individual is the person for every tough challenge. They play a key role in successful implementation and always leads the way in solving complex coding problems across various projects.",
            "humanCode": "SPK25",
            "name": "The Problem-Slayer",
            "tag": [
                "Problem Solving Leadership",
                "Analyzed Problem Solution Implementation",
                "Analyze Complex Problems",
                "Complex Problem Solving",
                "Software Problem Diagnosis"
            ],
            "otherIdentifier": [
                {
                    "type": "IdentifierEntry",
                    "identifier": "ce-99febda3-28c0-5cc9-af17-501a7d972d84",
                    "identifierType": "identifier"
                }
            ]
        },
        "identifier": [
            {
                "hashed": false,
                "identityHash": "Akash Phadte",
                "identityType": "name",
                "type": "IdentityObject"
            },
            {
                "hashed": false,
                "identityHash": "akashphadte@sparkplustech.com",
                "identityType": "emailAddress",
                "type": "IdentityObject"
            },
            {
                "hashed": false,
                "identityHash": "587",
                "identityType": "accountId",
                "type": "IdentityObject"
            }
        ],
        "source": {
          id: "https://api.thesolo.network/api/platform/v3/achievementcredential/345eecc8-26f4-5c5d-920e-4fc33a181238",
          type: ["Profile"]
        }
    },
    "credentialStatus": {
        "id": "https://api.thesolo.network/api/platform/revocations/345eecc8-26f4-5c5d-920e-4fc33a181238",
        "type": "1EdTechRevocationList"
    },
    "image": {
        "id": "https://soloprod.s3.us-west-1.amazonaws.com/badgeImages/SOLO-Badge-345eecc8-26f4-5c5d-920e-4fc33a181238.png",
        "type": "Image"
    },
    "proof": [
        {
            "type": "DataIntegrityProof",
            "created": "2025-04-17T16:26:58Z",
            "verificationMethod": "did:key:z6MkrRGwwUWfGjyUnnkx3GTnpvrEMovdk841Cu3eJk24Vbrn#z6MkrRGwwUWfGjyUnnkx3GTnpvrEMovdk841Cu3eJk24Vbrn",
            "cryptosuite": "eddsa-2022",
            "proofPurpose": "assertionMethod",
            "proofValue": "zboAXwbqdYhbBemKR7CqTUBcKkZoRs6p5BrxdMbgH5cNnEShVjKgL6Y9mYf6UJyXxgiR1hdiqPYoC9doZkjPW67C"
        }
    ]
}

export let signedRohitSir = {
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://w3id.org/security/data-integrity/v2",
    "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json"
  ],
  "type": [
    "VerifiableCredential",
    "OpenBadgeCredential"
  ],
  "issuer": "did:key:z6MkgcqmGmqNVsKqb2DqyLJ5s6vybL1Yp72YTj6APZHrqAUN",
  "issuanceDate": "2025-06-14T04:06:00.403Z",
  "validFrom": "2025-06-14T04:06:00.403Z",
  "name": "Sample badge-2",
  "id": "http://192.168.1.111:3002/credential/e59ea900-db26-4c21-a0f3-6a14334f912f",
  "credentialSubject": {
    "achievement": {
      "id": "id2",
      "Tag": [
        "fghfgh",
        "sdsafasf"
      ],
      "Type": [
        "Achievement"
      ],
      "name": "safasd",
      "image": {
        "id": "sdsd",
        "type": "dzgff"
      },
      "version": "2",
      "criteria": {
        "narrative": "Team members are nominated for this badge by their peers."
      },
      "humanCode": "sd",
      "description": "This badge recognizes the development of the capacity.",
      "fieldOfStudy": "sdsd",
      "specialization": "Technical Communication",
      "achievementType": "LearningProgram",
      "otherIdentifier": [
        {
          "type": "IdentifierEntry",
          "identifier": "a99a4121-e04e-477c-a890-15e9af789f73",
          "identifierType": "identifier"
        }
      ]
    },
    "identifier": [
      {
        "type": "IdentityObject",
        "hashed": "FALSE",
        "identityHash": "Amit",
        "identityType": "name"
      },
      {
        "type": "IdentityObject",
        "hashed": "FALSE",
        "identityHash": "amitsovio12345@yopmail.com",
        "identityType": "emailAddress"
      }
    ],
    "source": {
      "id": "http://192.168.1.111:3002/organization/issuer/profile/west-university",
      "type": [
        "Profile"
      ]
    },
    "type": [
      "AchievementSubject"
    ]
  },
  "description": "Sample badge issueances ",
  "credentialStatus": {
    "id": "http://192.168.1.111:3002/revocation/e59ea900-db26-4c21-a0f3-6a14334f912f",
    "type": "1EdTechRevocationList"
  },
  "expirationDate": "2025-07-01T18:30:00.000Z",
  "awardedDate": "2025-06-18T18:30:00.000Z",
  "image": {
    "id": "https://load-test-educred.s3.amazonaws.com/BadgeDesigns/e69e4308-54b4-4a87-b28b-559e7bbc0a32/693dfe7a-40d0-44bd-b2b3-d858e881cb98-Sample%20badge-2.png",
    "type": "Image"
  },
  "proof": {
    "verificationMethod": "did:key:z6MkgcqmGmqNVsKqb2DqyLJ5s6vybL1Yp72YTj6APZHrqAUN#z6MkgcqmGmqNVsKqb2DqyLJ5s6vybL1Yp72YTj6APZHrqAUN",
    "type": "Ed25519Signature2018",
    "created": "2025-06-14T04:16:22Z",
    "proofPurpose": "assertionMethod",
    "jws": "eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..kLuLcyNGmlcnsRlTIwBll9TojapqfP-SMyMZM61K-72T4E0Rg363mVFr2ouO0sYGwuScekJo_liJ1Zam2I3ICg"
  }
}

// OOB Offer
let offer ={
    "protocolVersion": "v2",
    "credentialFormats": {
        "jsonld": {
            "credential": {
                "@context": [
                    "https://www.w3.org/2018/credentials/v1",
                    "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json",
                    "https://w3id.org/security/data-integrity/v2",
                    "https://purl.imsglobal.org/spec/ob/v3p0/schema/json/ob_v3p0_achievementcredential_schema.json"
                ],
                "id": "https://api.thesolo.network/api/platform/v3/achievementcredential/345eecc8-26f4-5c5d-920e-4fc33a181238",
                "type": [
                    "VerifiableCredential",
                    "OpenBadgeCredential",
                    "AchievementCredential"
                ],
                "validFrom": "2025-04-17T16:26:58.000Z",
                "issuer": {
                    "id": "did:key:z6Mkpz1qHuoMamuHj8YXJNBDu2GrLz3LzinA5t4GiYtYKS8v"
                },
                "issuanceDate": "2025-04-17T16:26:58.000Z",
                "expirationDate": "2028-12-31T18:30:00.000Z",
                "name": "The Problem-Slayer",
                "credentialSubject": {
                    "id": "did:key:z6MkmjRGCWfD2qbswXcWhdpSZ5uzbDXth1cmEQ96Ecu894LC",
                    "type": [
                        "AchievementSubject"
                    ],
                    "image": {
                        "id": "https://freshbox-dev.s3.amazonaws.com/users/587/Ak-1695713292007-lg.jpg",
                        "type": "Image"
                    },
                    "achievement": {
                        "id": "https://app.thesolo.network/my-credential-details/26",
                        "type": [
                            "Achievement"
                        ],
                        "criteria": {
                            "id": "https://app.thesolo.network/my-credential-details/26"
                        },
                        "description": "Individual is the person for every tough challenge. They play a key role in successful implementation and always leads the way in solving complex coding problems across various projects.",
                        "humanCode": "SPK25",
                        "name": "The Problem-Slayer",
                        "tag": [
                            "Problem Solving Leadership",
                            "Analyzed Problem Solution Implementation",
                            "Analyze Complex Problems",
                            "Complex Problem Solving",
                            "Software Problem Diagnosis"
                        ],
                        "otherIdentifier": [
                            {
                                "type": "IdentifierEntry",
                                "identifier": "ce-99febda3-28c0-5cc9-af17-501a7d972d84",
                                "identifierType": "identifier"
                            }
                        ]
                    },
                    "identifier": [
                        {
                            "hashed": false,
                            "identityHash": "Akash Phadte",
                            "identityType": "name",
                            "type": "IdentityObject"
                        },
                        {
                            "hashed": false,
                            "identityHash": "akashphadte@sparkplustech.com",
                            "identityType": "emailAddress",
                            "type": "IdentityObject"
                        },
                        {
                            "hashed": false,
                            "identityHash": "587",
                            "identityType": "accountId",
                            "type": "IdentityObject"
                        }
                    ]
                },
                "image": {
                    "id": "https://soloprod.s3.us-west-1.amazonaws.com/badgeImages/SOLO-Badge-345eecc8-26f4-5c5d-920e-4fc33a181238.png",
                    "type": "Image"
                }
            },
            "options": {
                "proofType": "Ed25519Signature2018",
                "proofPurpose": "assertionMethod"
            }
        }
    },
    "autoAcceptCredential": "always"
}

// Sign
let sign = {
    "format": "ldp_vc",
    "credential": {
        "context": [
            "https://www.w3.org/2018/credentials/v1",
            "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json",
            "https://w3id.org/security/data-integrity/v2",
            "https://purl.imsglobal.org/spec/ob/v3p0/schema/json/ob_v3p0_achievementcredential_schema.json"
        ],
        "id": "https://api.thesolo.network/api/platform/v3/achievementcredential/345eecc8-26f4-5c5d-920e-4fc33a181238",
        "type": [
            "VerifiableCredential",
            "OpenBadgeCredential",
            "AchievementCredential"
        ],
        "issuanceDate": "2025-06-10T17:20:29+05:30",
        "issuer": {
            "id": "did:key:z6Mkpz1qHuoMamuHj8YXJNBDu2GrLz3LzinA5t4GiYtYKS8v"
        },
        "name": "The Problem-Slayer",
        "credentialSubject": {
            "id": "did:key:z6MkmjRGCWfD2qbswXcWhdpSZ5uzbDXth1cmEQ96Ecu894LC",
            "type": [
                "AchievementSubject"
            ],
            "image": {
                "id": "https://freshbox-dev.s3.amazonaws.com/users/587/Ak-1695713292007-lg.jpg",
                "type": "Image"
            },
            "achievement": {
                "id": "https://app.thesolo.network/my-credential-details/26",
                "type": [
                    "Achievement"
                ],
                "criteria": {
                    "id": "https://app.thesolo.network/my-credential-details/26"
                },
                "description": "Individual is the person for every tough challenge. They play a key role in successful implementation and always leads the way in solving complex coding problems across various projects.",
                "humanCode": "SPK25",
                "name": "The Problem-Slayer",
                "tag": [
                    "Problem Solving Leadership",
                    "Analyzed Problem Solution Implementation",
                    "Analyze Complex Problems",
                    "Complex Problem Solving",
                    "Software Problem Diagnosis"
                ],
                "otherIdentifier": [
                    {
                        "type": "IdentifierEntry",
                        "identifier": "ce-99febda3-28c0-5cc9-af17-501a7d972d84",
                        "identifierType": "identifier"
                    }
                ]
            },
            "identifier": [
                {
                    "hashed": false,
                    "identityHash": "Akash Phadte",
                    "identityType": "name",
                    "type": "IdentityObject"
                },
                {
                    "hashed": false,
                    "identityHash": "akashphadte@sparkplustech.com",
                    "identityType": "emailAddress",
                    "type": "IdentityObject"
                },
                {
                    "hashed": false,
                    "identityHash": "587",
                    "identityType": "accountId",
                    "type": "IdentityObject"
                }
            ]
        },
        "image": {
            "id": "https://soloprod.s3.us-west-1.amazonaws.com/badgeImages/SOLO-Badge-345eecc8-26f4-5c5d-920e-4fc33a181238.png",
            "type": "Image"
        }
    },
    "proofType": "Ed25519Signature2018",
    "verificationMethod": "did:key:z6Mkpz1qHuoMamuHj8YXJNBDu2GrLz3LzinA5t4GiYtYKS8v#z6Mkpz1qHuoMamuHj8YXJNBDu2GrLz3LzinA5t4GiYtYKS8v"
}

let signed = {
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json",
    "https://w3id.org/security/data-integrity/v2",
    "https://purl.imsglobal.org/spec/ob/v3p0/schema/json/ob_v3p0_achievementcredential_schema.json"
  ],
  "id": "https://api.thesolo.network/api/platform/v3/achievementcredential/345eecc8-26f4-5c5d-920e-4fc33a181238",
  "type": [
    "VerifiableCredential",
    "OpenBadgeCredential",
    "AchievementCredential"
  ],
  "issuanceDate": "2025-06-10T17:20:29+05:30",
  "issuer": {
    "id": "did:key:z6Mkpz1qHuoMamuHj8YXJNBDu2GrLz3LzinA5t4GiYtYKS8v"
  },
  "name": "The Problem-Slayer",
  "credentialSubject": {
    "type": [
      "AchievementSubject"
    ],
    "image": {
      "id": "https://freshbox-dev.s3.amazonaws.com/users/587/Ak-1695713292007-lg.jpg",
      "type": "Image"
    },
    "achievement": {
      "id": "https://app.thesolo.network/my-credential-details/26",
      "type": [
        "Achievement"
      ],
      "criteria": {
        "id": "https://app.thesolo.network/my-credential-details/26"
      },
      "description": "Individual is the person for every tough challenge. They play a key role in successful implementation and always leads the way in solving complex coding problems across various projects.",
      "humanCode": "SPK25",
      "name": "The Problem-Slayer",
      "tag": [
        "Problem Solving Leadership",
        "Analyzed Problem Solution Implementation",
        "Analyze Complex Problems",
        "Complex Problem Solving",
        "Software Problem Diagnosis"
      ],
      "otherIdentifier": [
        {
          "type": "IdentifierEntry",
          "identifier": "ce-99febda3-28c0-5cc9-af17-501a7d972d84",
          "identifierType": "identifier"
        }
      ]
    },
    "identifier": [
      {
        "hashed": false,
        "identityHash": "Akash Phadte",
        "identityType": "name",
        "type": "IdentityObject"
      },
      {
        "hashed": false,
        "identityHash": "akashphadte@sparkplustech.com",
        "identityType": "emailAddress",
        "type": "IdentityObject"
      },
      {
        "hashed": false,
        "identityHash": "587",
        "identityType": "accountId",
        "type": "IdentityObject"
      }
    ],
    "id": "did:key:z6MkmjRGCWfD2qbswXcWhdpSZ5uzbDXth1cmEQ96Ecu894LC"
  },
  "image": {
    "id": "https://soloprod.s3.us-west-1.amazonaws.com/badgeImages/SOLO-Badge-345eecc8-26f4-5c5d-920e-4fc33a181238.png",
    "type": "Image"
  },
  "proof": {
    "verificationMethod": "did:key:z6Mkpz1qHuoMamuHj8YXJNBDu2GrLz3LzinA5t4GiYtYKS8v#z6Mkpz1qHuoMamuHj8YXJNBDu2GrLz3LzinA5t4GiYtYKS8v",
    "type": "Ed25519Signature2018",
    "created": "2025-06-11T08:52:10Z",
    "proofPurpose": "assertionMethod",
    "jws": "eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..zJs1sE25bLFoJlcgQx9VGw-gQkpWgblKl8tkwhG7-y7-MIBXFkZh38MK54HF6OUopockZRKAfrcgHG3qpKIWAQ"
  }
}

let toVerifyCred = {"credential":{
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json",
    "https://w3id.org/security/data-integrity/v2",
    "https://purl.imsglobal.org/spec/ob/v3p0/schema/json/ob_v3p0_achievementcredential_schema.json"
  ],
  "id": "https://api.thesolo.network/api/platform/v3/achievementcredential/345eecc8-26f4-5c5d-920e-4fc33a181238",
  "type": [
    "VerifiableCredential",
    "OpenBadgeCredential",
    "AchievementCredential"
  ],
  "issuanceDate": "2025-06-10T17:20:29+05:30",
  "issuer": {
    "id": "did:key:z6Mkpz1qHuoMamuHj8YXJNBDu2GrLz3LzinA5t4GiYtYKS8v"
  },
  "name": "The Problem-Slayer",
  "credentialSubject": {
    "type": [
      "AchievementSubject"
    ],
    "image": {
      "id": "https://freshbox-dev.s3.amazonaws.com/users/587/Ak-1695713292007-lg.jpg",
      "type": "Image"
    },
    "achievement": {
      "id": "https://app.thesolo.network/my-credential-details/26",
      "type": [
        "Achievement"
      ],
      "criteria": {
        "id": "https://app.thesolo.network/my-credential-details/26"
      },
      "description": "Individual is the person for every tough challenge. They play a key role in successful implementation and always leads the way in solving complex coding problems across various projects.",
      "humanCode": "SPK25",
      "name": "The Problem-Slayer",
      "tag": [
        "Problem Solving Leadership",
        "Analyzed Problem Solution Implementation",
        "Analyze Complex Problems",
        "Complex Problem Solving",
        "Software Problem Diagnosis"
      ],
      "otherIdentifier": [
        {
          "type": "IdentifierEntry",
          "identifier": "ce-99febda3-28c0-5cc9-af17-501a7d972d84",
          "identifierType": "identifier"
        }
      ]
    },
    "identifier": [
      {
        "hashed": false,
        "identityHash": "Akash Phadte",
        "identityType": "name",
        "type": "IdentityObject"
      },
      {
        "hashed": false,
        "identityHash": "akashphadte@sparkplustech.com",
        "identityType": "emailAddress",
        "type": "IdentityObject"
      },
      {
        "hashed": false,
        "identityHash": "587",
        "identityType": "accountId",
        "type": "IdentityObject"
      }
    ],
    "id": "did:key:z6MkmjRGCWfD2qbswXcWhdpSZ5uzbDXth1cmEQ96Ecu894LC"
  },
  "credentialStatus": {
    "id": "https://api.thesolo.network/api/platform/revocations/345eecc8-26f4-5c5d-920e-4fc33a181238",
    "type": "1EdTechRevocationList"
  },
  "image": {
    "id": "https://soloprod.s3.us-west-1.amazonaws.com/badgeImages/SOLO-Badge-345eecc8-26f4-5c5d-920e-4fc33a181238.png",
    "type": "Image"
  },
  "proof": {
    "verificationMethod": "did:key:z6Mkpz1qHuoMamuHj8YXJNBDu2GrLz3LzinA5t4GiYtYKS8v#z6Mkpz1qHuoMamuHj8YXJNBDu2GrLz3LzinA5t4GiYtYKS8v",
    "type": "Ed25519Signature2018",
    "created": "2025-06-11T13:22:32Z",
    "proofPurpose": "assertionMethod",
    "jws": "eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..RUKHBFUXWl2TA4CqYEEcTOUtZap_yhNc4gSeQPYY3kL9_0zvgMQ39MXChzDcIA-NfuQ1V9dbbai187nyP9vUCg"
  }
}
}

let verifiedResponse = {
  "isValid": true,
  "validations": {
    "vcJs": {
      "isValid": true,
      "results": [
        {
          "proof": {
            "@context": [
              "https://www.w3.org/2018/credentials/v1",
              "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json",
              "https://w3id.org/security/data-integrity/v2",
              "https://purl.imsglobal.org/spec/ob/v3p0/schema/json/ob_v3p0_achievementcredential_schema.json"
            ],
            "verificationMethod": "did:key:z6Mkpz1qHuoMamuHj8YXJNBDu2GrLz3LzinA5t4GiYtYKS8v#z6Mkpz1qHuoMamuHj8YXJNBDu2GrLz3LzinA5t4GiYtYKS8v",
            "type": "Ed25519Signature2018",
            "created": "2025-06-11T06:45:53Z",
            "proofPurpose": "assertionMethod",
            "jws": "eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..-qjx4azgwcMwgwG-8LQwkBqh-GBenSkM7UHBgxszCli8GVuzJW6YmpdDuphIEr-uuo4T1iWk5Lb6JM8ru7MqCw"
          },
          "verified": true,
          "verificationMethod": {
            "@context": [
              "https://w3id.org/did/v1",
              "https://w3id.org/security/suites/ed25519-2018/v1",
              "https://w3id.org/security/suites/x25519-2019/v1"
            ],
            "id": "did:key:z6Mkpz1qHuoMamuHj8YXJNBDu2GrLz3LzinA5t4GiYtYKS8v#z6Mkpz1qHuoMamuHj8YXJNBDu2GrLz3LzinA5t4GiYtYKS8v",
            "type": "Ed25519VerificationKey2018",
            "controller": "did:key:z6Mkpz1qHuoMamuHj8YXJNBDu2GrLz3LzinA5t4GiYtYKS8v",
            "publicKeyBase58": "BXknhfYvFEQpcdhpcoDP3virXQmVaqXoPs9LtGvXQDMY"
          },
          "purposeResult": {
            "valid": true
          },
          "log": [
            {
              "id": "expiration",
              "valid": true
            },
            {
              "id": "valid_signature",
              "valid": true
            },
            {
              "id": "issuer_did_resolves",
              "valid": true
            },
            {
              "id": "revocation_status",
              "valid": true
            }
          ]
        }
      ],
      "statusResult": {
        "verified": true
      },
      "log": [
        {
          "id": "expiration",
          "valid": true
        },
        {
          "id": "valid_signature",
          "valid": true
        },
        {
          "id": "issuer_did_resolves",
          "valid": true
        },
        {
          "id": "revocation_status",
          "valid": true
        }
      ]
    }
  }
}




let signedAndTransformed = {
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json",
    "https://w3id.org/security/data-integrity/v2",
    "https://purl.imsglobal.org/spec/ob/v3p0/schema/json/ob_v3p0_achievementcredential_schema.json"
  ],
  "id": "https://api.thesolo.network/api/platform/v3/achievementcredential/345eecc8-26f4-5c5d-920e-4fc33a181238",
  "type": [
    "VerifiableCredential",
    "OpenBadgeCredential",
    "AchievementCredential"
  ],
  "issuanceDate": "2025-06-10T17:20:29+05:30",
  "issuer": {
    "id": "did:key:z6Mkpz1qHuoMamuHj8YXJNBDu2GrLz3LzinA5t4GiYtYKS8v"
  },
  "name": "The Problem-Slayer",
  "credentialSubject": {
    "type": [
      "AchievementSubject"
    ],
    "image": {
      "id": "https://freshbox-dev.s3.amazonaws.com/users/587/Ak-1695713292007-lg.jpg",
      "type": "Image"
    },
    "achievement": {
      "id": "https://app.thesolo.network/my-credential-details/26",
      "type": [
        "Achievement"
      ],
      "criteria": {
        "id": "https://app.thesolo.network/my-credential-details/26"
      },
      "description": "Individual is the person for every tough challenge. They play a key role in successful implementation and always leads the way in solving complex coding problems across various projects.",
      "humanCode": "SPK25",
      "name": "The Problem-Slayer",
      "tag": [
        "Problem Solving Leadership",
        "Analyzed Problem Solution Implementation",
        "Analyze Complex Problems",
        "Complex Problem Solving",
        "Software Problem Diagnosis"
      ],
      "otherIdentifier": [
        {
          "type": "IdentifierEntry",
          "identifier": "ce-99febda3-28c0-5cc9-af17-501a7d972d84",
          "identifierType": "identifier"
        }
      ]
    },
    "identifier": [
      {
        "hashed": false,
        "identityHash": "Akash Phadte",
        "identityType": "name",
        "type": "IdentityObject"
      },
      {
        "hashed": false,
        "identityHash": "akashphadte@sparkplustech.com",
        "identityType": "emailAddress",
        "type": "IdentityObject"
      },
      {
        "hashed": false,
        "identityHash": "587",
        "identityType": "accountId",
        "type": "IdentityObject"
      }
    ],
    "id": "did:key:z6MkmjRGCWfD2qbswXcWhdpSZ5uzbDXth1cmEQ96Ecu894LC"
  },
  "image": {
    "id": "https://soloprod.s3.us-west-1.amazonaws.com/badgeImages/SOLO-Badge-345eecc8-26f4-5c5d-920e-4fc33a181238.png",
    "type": "Image"
  },
  "proof": {
    "verificationMethod": "did:key:z6Mkpz1qHuoMamuHj8YXJNBDu2GrLz3LzinA5t4GiYtYKS8v#z6Mkpz1qHuoMamuHj8YXJNBDu2GrLz3LzinA5t4GiYtYKS8v",
    "type": "Ed25519Signature2018",
    "created": "2025-06-11T06:45:53Z",
    "proofPurpose": "assertionMethod",
    "jws": "eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..-qjx4azgwcMwgwG-8LQwkBqh-GBenSkM7UHBgxszCli8GVuzJW6YmpdDuphIEr-uuo4T1iWk5Lb6JM8ru7MqCw"
  }
}