const fs = require('fs');

const models = [
  "ComplianceFramework",
  "ComplianceControl",
  "ComplianceRequirement",
  "ComplianceAssessment",
  "ComplianceAssessmentEvidence",
  "ComplianceFinding",
  "ComplianceException",
  "ComplianceAttestation",
  "ComplianceSubmission",
  "ComplianceReview",
  "ComplianceReport",
  "ComplianceEvidenceCollection",
  "EvidenceCorrelation",
  "EvidenceValidation",
  "EvidenceIntegrity",
  "EvidenceRetention",
  "EvidencePackage",
  "ConsolidatedEvidenceLedger",
  "ComplianceAudit",
  "RegulatoryMapping",
  "GovernanceMapping",
  "ComplianceCheckpoint",
  "ComplianceMetrics"
];

let schema = fs.readFileSync('prisma/schema.prisma', 'utf8');

for (const model of models) {
  if (!schema.includes(`model ${model} {`)) {
    schema += `\n// Phase 215: Enterprise Compliance Evidence Consolidation Governance\n`;
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
console.log("Schema updated for Phase 215.");
