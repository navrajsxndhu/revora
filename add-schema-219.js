const fs = require('fs');

const models = [
  "ProductionReadinessAssessment",
  "ProductionCertification",
  "HardeningPolicy",
  "HardeningValidation",
  "SecurityBaseline",
  "ConfigurationBaseline",
  "DependencyBaseline",
  "PerformanceBaseline",
  "OperationalBaseline",
  "ReadinessChecklist",
  "CertificationEvidence",
  "PlatformVerification",
  "VerificationCheckpoint",
  "ReadinessGate",
  "ReleaseCertification",
  "EnvironmentCertification",
  "ProductionLedger",
  "ProductionAudit",
  "ProductionMetrics",
  "ReadinessException",
  "HardeningEvidence",
  "CertificationPolicy",
  "ProductionApproval"
];

let schema = fs.readFileSync('prisma/schema.prisma', 'utf8');

for (const model of models) {
  if (!schema.includes(`model ${model} {`)) {
    schema += `\n// Phase 219: Enterprise Platform Hardening & Production Readiness Governance\n`;
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
console.log("Schema updated for Phase 219.");
