/* eslint-disable */
const fs = require('fs');

const models = [
  "InstallationManifest",
  "InstallationPackage",
  "InstallationBundle",
  "InstallationEvidence",
  "InstallationExecution",
  "BootstrapSession",
  "BootstrapManifest",
  "BootstrapEvidence",
  "ProvisioningPlan",
  "ProvisioningExecution",
  "ProvisioningEvidence",
  "EnvironmentRegistration",
  "EnvironmentInitialization",
  "InfrastructureRegistration",
  "PlatformInitialization",
  "DependencyValidation",
  "DependencyManifest",
  "InstallationPolicy",
  "BootstrapPolicy",
  "ProvisioningPolicy",
  "InstallationCheckpoint",
  "InitializationLedger",
  "InstallationAudit"
];

let schema = fs.readFileSync('prisma/schema.prisma', 'utf8');

for (const model of models) {
  if (!schema.includes(`model ${model} {`)) {
    schema += `\n// Phase 209: Enterprise Installation, Bootstrap & Provisioning Governance\n`;
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
console.log("Schema updated.");
