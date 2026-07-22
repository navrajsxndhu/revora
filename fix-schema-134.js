/* eslint-disable */
const fs = require('fs');
const path = './prisma/schema.prisma';
let content = fs.readFileSync(path, 'utf8');

// Append workspace fields
const workspaceEndIndex = content.indexOf('executionLedgers                     ExecutionLedger[]');
if (workspaceEndIndex !== -1) {
  const insertIndex = workspaceEndIndex + 'executionLedgers                     ExecutionLedger[]'.length;
  content = content.substring(0, insertIndex) + `
  businessContinuityPlans              BusinessContinuityPlan[]
  recoveryPlans                        RecoveryPlan[]
  recoveryProcedures                   RecoveryProcedure[]
  recoverySteps                        RecoveryStep[]
  recoveryExecutions                   RecoveryExecution[]
  recoveryCheckpoints                  RecoveryCheckpoint[]
  recoveryEvidences                    RecoveryEvidence[]
  recoveryValidations                  RecoveryValidation[]
  recoveryApprovals                    RecoveryApproval[]
  recoveryWindows                      RecoveryWindow[]
  recoveryDependencies                 RecoveryDependency[]
  recoveryResources                    RecoveryResource[]
  recoveryObjectives                   RecoveryObjective[]
  recoveryExercises                    RecoveryExercise[]
  recoveryScenarios                    RecoveryScenario[]
  failoverPlans                        FailoverPlan[]
  failoverExecutions                   FailoverExecution[]
  failbackPlans                        FailbackPlan[]
  businessImpactAnalyses               BusinessImpactAnalysis[]
  recoveryReadinesses                  RecoveryReadiness[]
  resilienceAssessments                ResilienceAssessment[]
  continuityLedgers                    ContinuityLedger[]
  resilienceIndices                    ResilienceIndex[]` + content.substring(insertIndex);
}

const newModels = `

model BusinessContinuityPlan {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  name                 String
  status               String
  createdAt            DateTime @default(now())
}

model RecoveryPlan {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  name                 String
  scope                String
  status               String
  createdAt            DateTime @default(now())
}

model RecoveryProcedure {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  planId               String
  name                 String
  status               String
  createdAt            DateTime @default(now())
}

model RecoveryStep {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  procedureId          String
  name                 String
  order                Int
  createdAt            DateTime @default(now())
}

model RecoveryExecution {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  planId               String
  status               String
  createdAt            DateTime @default(now())
}

model RecoveryCheckpoint {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  executionId          String
  stateHash            String
  createdAt            DateTime @default(now())
}

model RecoveryEvidence {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  executionId          String
  content              String
  createdAt            DateTime @default(now())
}

model RecoveryValidation {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  executionId          String
  domain               String
  passed               Boolean
  createdAt            DateTime @default(now())
}

model RecoveryApproval {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  executionId          String
  approver             String
  decision             String
  createdAt            DateTime @default(now())
}

model RecoveryWindow {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  name                 String
  startTime            DateTime
  endTime              DateTime
  createdAt            DateTime @default(now())
}

model RecoveryDependency {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  planId               String
  dependsOnId          String
  createdAt            DateTime @default(now())
}

model RecoveryResource {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  planId               String
  resourceId           String
  createdAt            DateTime @default(now())
}

model RecoveryObjective {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  name                 String
  targetValue          String
  createdAt            DateTime @default(now())
}

model RecoveryExercise {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  name                 String
  status               String
  createdAt            DateTime @default(now())
}

model RecoveryScenario {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  name                 String
  type                 String
  createdAt            DateTime @default(now())
}

model FailoverPlan {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  name                 String
  status               String
  createdAt            DateTime @default(now())
}

model FailoverExecution {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  planId               String
  status               String
  createdAt            DateTime @default(now())
}

model FailbackPlan {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  name                 String
  status               String
  createdAt            DateTime @default(now())
}

model BusinessImpactAnalysis {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  serviceId            String
  impactLevel          String
  createdAt            DateTime @default(now())
}

model RecoveryReadiness {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  score                Float
  createdAt            DateTime @default(now())
}

model ResilienceAssessment {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  targetId             String
  score                Float
  createdAt            DateTime @default(now())
}

model ContinuityLedger {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  eventId              String
  type                 String
  data                 String
  createdAt            DateTime @default(now())
}

model ResilienceIndex {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  score                Float
  createdAt            DateTime @default(now())
}
`;

content += newModels;

fs.writeFileSync(path, content);
