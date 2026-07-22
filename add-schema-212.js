/* eslint-disable */
const fs = require('fs');

const models = [
  "SecretVault",
  "SecretEntry",
  "SecretVersion",
  "SecretAccessPolicy",
  "SecretEvidence",
  "EncryptionKey",
  "KeyVersion",
  "KeyRotationPolicy",
  "KeyEvidence",
  "Certificate",
  "CertificateAuthority",
  "CertificateChain",
  "CertificatePolicy",
  "CertificateRenewalPlan",
  "TrustStore",
  "TrustRelationship",
  "SigningIdentity",
  "CryptographicPolicy",
  "CryptographicValidation",
  "CryptographicExecution",
  "CryptographicLedger",
  "CryptographicAudit",
  "CryptographicCheckpoint"
];

let schema = fs.readFileSync('prisma/schema.prisma', 'utf8');

for (const model of models) {
  if (!schema.includes(`model ${model} {`)) {
    schema += `\n// Phase 212: Enterprise Secrets, Certificates & Cryptographic Governance\n`;
    schema += `model ${model} {\n`;
    schema += `  id             String    @id @default(uuid())\n`;
    schema += `  workspaceId    String\n`;
    schema += `  tenantId       String?\n`;
    schema += `  organizationId String?\n`;
    schema += `  runtimeExecutionId String?\n`;
    schema += `  status         String    @default("PENDING")\n`;
    schema += `  createdAt      DateTime  @default(now())\n`;
    schema += `  updatedAt      DateTime  @updatedAt\n`;
    schema += `}\n`;
  }
}

fs.writeFileSync('prisma/schema.prisma', schema);
console.log("Schema updated for Phase 212.");
