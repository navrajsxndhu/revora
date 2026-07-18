const fs = require('fs');
const path = './prisma/schema.prisma';
let content = fs.readFileSync(path, 'utf8');

const workspaceEndIndex = content.indexOf('metadataIndices            MetadataIndex[]');
if (workspaceEndIndex !== -1) {
  const insertIndex = workspaceEndIndex + 'metadataIndices            MetadataIndex[]'.length;
  content = content.substring(0, insertIndex) + `
  enterpriseApis             EnterpriseApi[]
  apiVersions                ApiVersion[]
  apiContracts               ApiContract[]
  apiEndpoints               ApiEndpoint[]
  apiConsumers               ApiConsumer[]
  apiProviders               ApiProvider[]
  apiSubscriptions           ApiSubscription[]
  apiPolicies                ApiPolicy[]
  apiGatewayRoutes           ApiGatewayRoute[]
  webhookEndpoints           WebhookEndpoint[]
  integrationFlows           IntegrationFlow[]
  integrationDependencies    IntegrationDependency[]
  eventChannels              EventChannel[]
  messageContracts           MessageContract[]
  schemaRegistries           SchemaRegistry[]
  apiCredentialBindings      ApiCredentialBinding[]
  apiAssessments             ApiAssessment[]
  apiApprovals               ApiApproval[]
  apiEvidences               ApiEvidence[]
  apiSnapshots               ApiSnapshot[]
  apiTimelines               ApiTimeline[]
  apiLedgers                 ApiLedger[]
  apiIndices                 ApiIndex[]` + content.substring(insertIndex);
}

const newModels = `

model EnterpriseApi {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  name        String
  createdAt   DateTime @default(now())
}

model ApiVersion {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  version     String
  createdAt   DateTime @default(now())
}

model ApiContract {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  contract    String
  createdAt   DateTime @default(now())
}

model ApiEndpoint {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  endpoint    String
  createdAt   DateTime @default(now())
}

model ApiConsumer {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  consumer    String
  createdAt   DateTime @default(now())
}

model ApiProvider {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  provider    String
  createdAt   DateTime @default(now())
}

model ApiSubscription {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  subscription String
  createdAt   DateTime @default(now())
}

model ApiPolicy {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  policy      String
  createdAt   DateTime @default(now())
}

model ApiGatewayRoute {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  route       String
  createdAt   DateTime @default(now())
}

model WebhookEndpoint {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  webhook     String
  createdAt   DateTime @default(now())
}

model IntegrationFlow {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  flow        String
  createdAt   DateTime @default(now())
}

model IntegrationDependency {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  dependency  String
  createdAt   DateTime @default(now())
}

model EventChannel {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  channel     String
  createdAt   DateTime @default(now())
}

model MessageContract {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  contract    String
  createdAt   DateTime @default(now())
}

model SchemaRegistry {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  schema      String
  createdAt   DateTime @default(now())
}

model ApiCredentialBinding {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  binding     String
  createdAt   DateTime @default(now())
}

model ApiAssessment {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  assessment  String
  createdAt   DateTime @default(now())
}

model ApiApproval {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  approval    String
  createdAt   DateTime @default(now())
}

model ApiEvidence {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  evidence    String
  createdAt   DateTime @default(now())
}

model ApiSnapshot {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  snapshot    String
  createdAt   DateTime @default(now())
}

model ApiTimeline {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  timeline    String
  createdAt   DateTime @default(now())
}

model ApiLedger {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  ledger      String
  createdAt   DateTime @default(now())
}

model ApiIndex {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  score       Float
  createdAt   DateTime @default(now())
}
`;

content += newModels;

fs.writeFileSync(path, content);
