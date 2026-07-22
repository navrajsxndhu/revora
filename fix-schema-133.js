/* eslint-disable */
const fs = require('fs');
const path = './prisma/schema.prisma';
let content = fs.readFileSync(path, 'utf8');

// Append workspace fields
const workspaceEndIndex = content.indexOf('twinHealths                          TwinHealth[]');
if (workspaceEndIndex !== -1) {
  const insertIndex = workspaceEndIndex + 'twinHealths                          TwinHealth[]'.length;
  content = content.substring(0, insertIndex) + `
  enterpriseOrchestrations             EnterpriseOrchestration[]
  executionPlans                       ExecutionPlan[]
  executionStages                      ExecutionStage[]
  executionTasks                       ExecutionTask[]
  taskDependencies                     TaskDependency[]
  executionPipelines                   ExecutionPipeline[]
  pipelineTemplates                    PipelineTemplate[]
  pipelineExecutions                   PipelineExecution[]
  orchestrationWorkflows               OrchestrationWorkflow[]
  executionQueues                      ExecutionQueue[]
  executionReservations                ExecutionReservation[]
  executionLocks                       ExecutionLock[]
  executionWindows                     ExecutionWindow[]
  executionConstraints                 ExecutionConstraint[]
  executionCheckpoints                 ExecutionCheckpoint[]
  executionApprovals                   ExecutionApproval[]
  executionValidations                 ExecutionValidation[]
  executionEvidences                   ExecutionEvidence[]
  executionSnapshots                   ExecutionSnapshot[]
  executionMetrics                     ExecutionMetrics[]
  executionAudits                      ExecutionAudit[]
  executionReplays                     ExecutionReplay[]
  executionLedgers                     ExecutionLedger[]` + content.substring(insertIndex);
}

const newModels = `

model EnterpriseOrchestration {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  status               String
  activeExecutions     Int
  healthIndex          Float
  createdAt            DateTime @default(now())
}

model ExecutionPlan {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  name                 String
  version              Int
  status               String
  createdAt            DateTime @default(now())
}

model ExecutionStage {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  planId               String
  name                 String
  order                Int
  status               String
  createdAt            DateTime @default(now())
}

model ExecutionTask {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  stageId              String
  name                 String
  status               String
  result               String?
  createdAt            DateTime @default(now())
}

model TaskDependency {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  taskId               String
  dependsOnId          String
  status               String
  createdAt            DateTime @default(now())
}

model ExecutionPipeline {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  name                 String
  owner                String
  health               String
  createdAt            DateTime @default(now())
}

model PipelineTemplate {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  pipelineId           String
  definition           String
  version              Int
  createdAt            DateTime @default(now())
}

model PipelineExecution {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  pipelineId           String
  status               String
  startTime            DateTime?
  endTime              DateTime?
  createdAt            DateTime @default(now())
}

model OrchestrationWorkflow {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  name                 String
  type                 String
  status               String
  createdAt            DateTime @default(now())
}

model ExecutionQueue {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  name                 String
  depth                Int
  status               String
  createdAt            DateTime @default(now())
}

model ExecutionReservation {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  targetId             String
  reservedBy           String
  status               String
  createdAt            DateTime @default(now())
}

model ExecutionLock {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  targetId             String
  type                 String
  status               String
  createdAt            DateTime @default(now())
}

model ExecutionWindow {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  name                 String
  startTime            DateTime
  endTime              DateTime
  createdAt            DateTime @default(now())
}

model ExecutionConstraint {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  name                 String
  rule                 String
  enforced             Boolean
  createdAt            DateTime @default(now())
}

model ExecutionCheckpoint {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  executionId          String
  stateHash            String
  createdAt            DateTime @default(now())
}

model ExecutionApproval {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  executionId          String
  approver             String
  decision             String
  createdAt            DateTime @default(now())
}

model ExecutionValidation {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  executionId          String
  domain               String
  passed               Boolean
  createdAt            DateTime @default(now())
}

model ExecutionEvidence {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  executionId          String
  type                 String
  content              String
  createdAt            DateTime @default(now())
}

model ExecutionSnapshot {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  executionId          String
  data                 String
  createdAt            DateTime @default(now())
}

model ExecutionMetrics {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  executionId          String
  throughput           Float
  latencyMs            Int
  createdAt            DateTime @default(now())
}

model ExecutionAudit {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  executionId          String
  action               String
  actor                String
  createdAt            DateTime @default(now())
}

model ExecutionReplay {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  executionId          String
  status               String
  createdAt            DateTime @default(now())
}

model ExecutionLedger {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  eventId              String
  type                 String
  data                 String
  createdAt            DateTime @default(now())
}
`;

content += newModels;

fs.writeFileSync(path, content);
