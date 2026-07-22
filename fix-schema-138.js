/* eslint-disable */
const fs = require('fs');
const path = './prisma/schema.prisma';
let content = fs.readFileSync(path, 'utf8');

const workspaceEndIndex = content.indexOf('knowledgeGraphEdges        KnowledgeGraphEdge[]');
if (workspaceEndIndex !== -1) {
  const insertIndex = workspaceEndIndex + 'knowledgeGraphEdges        KnowledgeGraphEdge[]'.length;
  content = content.substring(0, insertIndex) + `
  enterpriseDatasets         EnterpriseDataset[]
  datasetSchemas             DatasetSchema[]
  dataDomains                DataDomain[]
  dataOwners                 DataOwner[]
  dataStewards               DataSteward[]
  metadataCatalogs           MetadataCatalog[]
  metadataAttributes         MetadataAttribute[]
  dataClassifications        DataClassification[]
  dataLineages               DataLineage[]
  lineageRelationships       LineageRelationship[]
  dataQualityRules           DataQualityRule[]
  dataQualityAssessments     DataQualityAssessment[]
  dataIssues                 DataIssue[]
  dataRetentionPolicies      DataRetentionPolicy[]
  dataLifecycles             DataLifecycle[]
  dataAccessPolicies         DataAccessPolicy[]
  sensitiveDataRegisters     SensitiveDataRegister[]
  masterDataEntities         MasterDataEntity[]
  referenceDataEntities      ReferenceDataEntity[]
  metadataSnapshots          MetadataSnapshot[]
  metadataTimelines          MetadataTimeline[]
  metadataLedgers            MetadataLedger[]
  metadataIndices            MetadataIndex[]` + content.substring(insertIndex);
}

const newModels = `

model EnterpriseDataset {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  name        String
  createdAt   DateTime @default(now())
}

model DatasetSchema {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  schema      String
  createdAt   DateTime @default(now())
}

model DataDomain {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  domain      String
  createdAt   DateTime @default(now())
}

model DataOwner {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  owner       String
  createdAt   DateTime @default(now())
}

model DataSteward {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  steward     String
  createdAt   DateTime @default(now())
}

model MetadataCatalog {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  catalog     String
  createdAt   DateTime @default(now())
}

model MetadataAttribute {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  attribute   String
  createdAt   DateTime @default(now())
}

model DataClassification {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  classification String
  createdAt   DateTime @default(now())
}

model DataLineage {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  lineage     String
  createdAt   DateTime @default(now())
}

model LineageRelationship {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  source      String
  target      String
  createdAt   DateTime @default(now())
}

model DataQualityRule {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  rule        String
  createdAt   DateTime @default(now())
}

model DataQualityAssessment {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  assessment  String
  createdAt   DateTime @default(now())
}

model DataIssue {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  issue       String
  createdAt   DateTime @default(now())
}

model DataRetentionPolicy {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  policy      String
  createdAt   DateTime @default(now())
}

model DataLifecycle {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  lifecycle   String
  createdAt   DateTime @default(now())
}

model DataAccessPolicy {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  policy      String
  createdAt   DateTime @default(now())
}

model SensitiveDataRegister {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  register    String
  createdAt   DateTime @default(now())
}

model MasterDataEntity {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  entity      String
  createdAt   DateTime @default(now())
}

model ReferenceDataEntity {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  entity      String
  createdAt   DateTime @default(now())
}

model MetadataSnapshot {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  snapshot    String
  createdAt   DateTime @default(now())
}

model MetadataTimeline {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  timeline    String
  createdAt   DateTime @default(now())
}

model MetadataLedger {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  ledger      String
  createdAt   DateTime @default(now())
}

model MetadataIndex {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  score       Float
  createdAt   DateTime @default(now())
}
`;

content += newModels;

fs.writeFileSync(path, content);
