const fs = require('fs');

const models = [
  "ResiliencePolicy",
  "ContinuityPlan",
  "ContinuityExecution",
  "ContinuityEvidence",
  "RecoveryObjective",
  "ServiceDependency",
  "CriticalService",
  "CriticalAsset",
  "OperationalReadiness",
  "ReadinessAssessment",
  "CrisisScenario",
  "CrisisExercise",
  "ExerciseEvidence",
  "RecoveryWorkflow",
  "RestorationCheckpoint",
  "ResilienceValidation",
  "AvailabilityAssessment",
  "OperationalRiskRecord",
  "ContinuityLedger",
  "ResilienceAudit",
  "ContinuityCheckpoint",
  "ResilienceMetrics",
  "BusinessContinuityReview"
];

let schema = fs.readFileSync('prisma/schema.prisma', 'utf8');

for (const model of models) {
  if (!schema.includes(`model ${model} {`)) {
    schema += `\n// Phase 214: Enterprise Operational Resilience & Business Continuity Governance\n`;
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
console.log("Schema updated for Phase 214.");
