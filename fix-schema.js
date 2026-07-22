/* eslint-disable */
const fs = require('fs');
const path = './prisma/schema.prisma';
let content = fs.readFileSync(path, 'utf8');
const snapshotIdx = content.indexOf('model TwinSnapshot');
if (snapshotIdx !== -1) {
  const newContent = content.substring(0, snapshotIdx) + `model TwinSnapshot {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  stateId              String
  hash                 String
  timestamp            DateTime @default(now())
}

model SimulationScenario {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  name                 String
  type                 String
  description          String
  preconditions        String
  createdAt            DateTime @default(now())
}

model TwinSimulationExecution {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  scenarioId           String
  operator             String
  status               String
  result               String
  durationMs           Int
  createdAt            DateTime @default(now())
}

model SimulationTimeline {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  executionId          String
  eventSequence        String
  createdAt            DateTime @default(now())
}

model SimulationCheckpoint {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  executionId          String
  stateHash            String
  rollbackAvailable    Boolean
  createdAt            DateTime @default(now())
}

model SimulationEvent {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  timelineId           String
  eventType            String
  data                 String
  timestamp            DateTime @default(now())
}

model StateTransition {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  fromStateId          String
  toStateId            String
  trigger              String
  createdAt            DateTime @default(now())
}

model ValidationRule {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  name                 String
  domain               String
  condition            String
  createdAt            DateTime @default(now())
}

model ValidationResult {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  executionId          String
  ruleId               String
  passed               Boolean
  evidence             String
  createdAt            DateTime @default(now())
}

model ImpactAssessment {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  executionId          String
  domain               String
  impactLevel          String
  financialExposure    Float
  createdAt            DateTime @default(now())
}

model OperationalScenario {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  name                 String
  targetSystem         String
  createdAt            DateTime @default(now())
}

model FailureScenario {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  name                 String
  component            String
  impact               String
  createdAt            DateTime @default(now())
}

model RecoveryScenario {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  failureId            String
  steps                String
  estimatedDuration    Int
  createdAt            DateTime @default(now())
}

model SimulationEvidence {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  executionId          String
  dataType             String
  content              String
  createdAt            DateTime @default(now())
}

model ReplaySession {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  targetId             String
  status               String
  createdAt            DateTime @default(now())
}

model ReplayEvent {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  sessionId            String
  sequence             Int
  eventData            String
  createdAt            DateTime @default(now())
}

model DigitalTwinLedger {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  action               String
  actor                String
  timestamp            DateTime @default(now())
}

model SimulationIndex {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  executionId          String
  score                Float
  createdAt            DateTime @default(now())
}

model TwinHealth {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  domain               String
  index                Float
  status               String
  createdAt            DateTime @default(now())
}
`;
  fs.writeFileSync(path, newContent);
}
