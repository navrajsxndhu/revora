const fs = require('fs');
const path = './prisma/schema.prisma';
let content = fs.readFileSync(path, 'utf8');

const workspaceEndIndex = content.indexOf('apiIndices                 ApiIndex[]');
if (workspaceEndIndex !== -1) {
  const insertIndex = workspaceEndIndex + 'apiIndices                 ApiIndex[]'.length;
  content = content.substring(0, insertIndex) + `
  enterpriseEvents           EnterpriseEvent[]
  eventTopics                EventTopic[]
  eventQueues                EventQueue[]
  eventStreams               EventStream[]
  messageEnvelopes           MessageEnvelope[]
  messagePayloads            MessagePayload[]
  eventProducers             EventProducer[]
  eventConsumers             EventConsumer[]
  eventSubscriptions         EventSubscription[]
  routingPolicies            RoutingPolicy[]
  deliveryPolicies           DeliveryPolicy[]
  retryPolicies              RetryPolicy[]
  deadLetterQueues           DeadLetterQueue[]
  eventReplays               EventReplay[]
  eventCheckpoints           EventCheckpoint[]
  eventBatches               EventBatch[]
  eventSnapshots             EventSnapshot[]
  streamingAssessments       StreamingAssessment[]
  streamingApprovals         StreamingApproval[]
  streamingEvidences         StreamingEvidence[]
  streamingTimelines         StreamingTimeline[]
  streamingLedgers           StreamingLedger[]
  streamingIndices           StreamingIndex[]` + content.substring(insertIndex);
}

const newModels = `

model EnterpriseEvent {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  name        String
  createdAt   DateTime @default(now())
}

model EventTopic {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  topic       String
  createdAt   DateTime @default(now())
}

model EventQueue {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  queue       String
  createdAt   DateTime @default(now())
}

model EventStream {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  stream      String
  createdAt   DateTime @default(now())
}

model MessageEnvelope {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  envelope    String
  createdAt   DateTime @default(now())
}

model MessagePayload {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  payload     String
  createdAt   DateTime @default(now())
}

model EventProducer {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  producer    String
  createdAt   DateTime @default(now())
}

model EventConsumer {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  consumer    String
  createdAt   DateTime @default(now())
}

model EventSubscription {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  subscription String
  createdAt   DateTime @default(now())
}

model RoutingPolicy {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  policy      String
  createdAt   DateTime @default(now())
}

model DeliveryPolicy {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  policy      String
  createdAt   DateTime @default(now())
}

model RetryPolicy {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  policy      String
  createdAt   DateTime @default(now())
}

model DeadLetterQueue {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  dlq         String
  createdAt   DateTime @default(now())
}

model EventReplay {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  replay      String
  createdAt   DateTime @default(now())
}

model EventCheckpoint {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  checkpoint  String
  createdAt   DateTime @default(now())
}

model EventBatch {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  batch       String
  createdAt   DateTime @default(now())
}

model EventSnapshot {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  snapshot    String
  createdAt   DateTime @default(now())
}

model StreamingAssessment {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  assessment  String
  createdAt   DateTime @default(now())
}

model StreamingApproval {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  approval    String
  createdAt   DateTime @default(now())
}

model StreamingEvidence {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  evidence    String
  createdAt   DateTime @default(now())
}

model StreamingTimeline {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  timeline    String
  createdAt   DateTime @default(now())
}

model StreamingLedger {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  ledger      String
  createdAt   DateTime @default(now())
}

model StreamingIndex {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  score       Float
  createdAt   DateTime @default(now())
}
`;

content += newModels;

fs.writeFileSync(path, content);
