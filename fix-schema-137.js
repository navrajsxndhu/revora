/* eslint-disable */
const fs = require('fs');
const path = './prisma/schema.prisma';
let content = fs.readFileSync(path, 'utf8');

const workspaceEndIndex = content.indexOf('executiveRoadmaps          ExecutiveRoadmap[]');
if (workspaceEndIndex !== -1) {
  const insertIndex = workspaceEndIndex + 'executiveRoadmaps          ExecutiveRoadmap[]'.length;
  content = content.substring(0, insertIndex) + `
  knowledgeDomains           KnowledgeDomain[]
  knowledgeCategories        KnowledgeCategory[]
  knowledgeArticles          KnowledgeArticle[]
  knowledgeArtifacts         KnowledgeArtifact[]
  knowledgeReferences        KnowledgeReference[]
  knowledgeRelationships     KnowledgeRelationship[]
  decisionMemories           DecisionMemory[]
  operationalLessons         OperationalLesson[]
  architectureDecisions      ArchitectureDecision[]
  runbookKnowledges          RunbookKnowledge[]
  playbookKnowledges         PlaybookKnowledge[]
  knowledgeEvidences         KnowledgeEvidence[]
  knowledgeRevisions         KnowledgeRevision[]
  knowledgeApprovals         KnowledgeApproval[]
  knowledgeReviews           KnowledgeReview[]
  knowledgeGaps              KnowledgeGap[]
  knowledgeCoverages         KnowledgeCoverage[]
  knowledgeSnapshots         KnowledgeSnapshot[]
  knowledgeTimelines         KnowledgeTimeline[]
  knowledgeLedgers           KnowledgeLedger[]
  knowledgeIndices           KnowledgeIndex[]
  knowledgeGraphNodes        KnowledgeGraphNode[]
  knowledgeGraphEdges        KnowledgeGraphEdge[]` + content.substring(insertIndex);
}

const newModels = `

model KnowledgeDomain {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  name        String
  createdAt   DateTime @default(now())
}

model KnowledgeCategory {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  name        String
  createdAt   DateTime @default(now())
}

model KnowledgeArticle {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  title       String
  status      String
  createdAt   DateTime @default(now())
}

model KnowledgeArtifact {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  name        String
  type        String
  createdAt   DateTime @default(now())
}

model KnowledgeReference {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  sourceId    String
  targetId    String
  createdAt   DateTime @default(now())
}

model KnowledgeRelationship {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  source      String
  target      String
  type        String
  createdAt   DateTime @default(now())
}

model DecisionMemory {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  decision    String
  context     String
  createdAt   DateTime @default(now())
}

model OperationalLesson {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  lesson      String
  createdAt   DateTime @default(now())
}

model ArchitectureDecision {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  adr         String
  status      String
  createdAt   DateTime @default(now())
}

model RunbookKnowledge {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  runbook     String
  status      String
  createdAt   DateTime @default(now())
}

model PlaybookKnowledge {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  playbook    String
  status      String
  createdAt   DateTime @default(now())
}

model KnowledgeEvidence {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  evidence    String
  createdAt   DateTime @default(now())
}

model KnowledgeRevision {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  revision    String
  createdAt   DateTime @default(now())
}

model KnowledgeApproval {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  approval    String
  status      String
  createdAt   DateTime @default(now())
}

model KnowledgeReview {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  review      String
  status      String
  createdAt   DateTime @default(now())
}

model KnowledgeGap {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  gap         String
  createdAt   DateTime @default(now())
}

model KnowledgeCoverage {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  coverage    String
  createdAt   DateTime @default(now())
}

model KnowledgeSnapshot {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  snapshot    String
  createdAt   DateTime @default(now())
}

model KnowledgeTimeline {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  event       String
  createdAt   DateTime @default(now())
}

model KnowledgeLedger {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  transaction String
  createdAt   DateTime @default(now())
}

model KnowledgeIndex {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  score       Float
  createdAt   DateTime @default(now())
}

model KnowledgeGraphNode {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  nodeId      String
  type        String
  createdAt   DateTime @default(now())
}

model KnowledgeGraphEdge {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  sourceId    String
  targetId    String
  relation    String
  createdAt   DateTime @default(now())
}
`;

content += newModels;

fs.writeFileSync(path, content);
