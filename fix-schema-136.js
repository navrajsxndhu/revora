const fs = require('fs');
const path = './prisma/schema.prisma';
let content = fs.readFileSync(path, 'utf8');

const workspaceEndIndex = content.indexOf('planningEvidences                    PlanningEvidence[]');
if (workspaceEndIndex !== -1) {
  const insertIndex = workspaceEndIndex + 'planningEvidences                    PlanningEvidence[]'.length;
  content = content.substring(0, insertIndex) + `
  enterprisePortfolios                 EnterprisePortfolio[]
  portfolioObjectives                  PortfolioObjective[]
  strategicThemes                      StrategicTheme[]
  transformationPrograms               TransformationProgram[]
  programIncrements                    ProgramIncrement[]
  strategicInitiatives                 StrategicInitiative[]
  initiativeMilestones                 InitiativeMilestone[]
  initiativeDependencies               InitiativeDependency[]
  valueStreams                         ValueStream[]
  businessCapabilityMappings           BusinessCapabilityMapping[]
  investmentAllocations                InvestmentAllocation[]
  strategicBudgets                     StrategicBudget[]
  benefitRealizations                  BenefitRealization[]
  strategicOutcomes                    StrategicOutcome[]
  portfolioRisks                       PortfolioRisk[]
  portfolioAssessments                 PortfolioAssessment[]
  portfolioApprovals                   PortfolioApproval[]
  portfolioEvidences                   PortfolioEvidence[]
  portfolioSnapshots                   PortfolioSnapshot[]
  portfolioTimelines                   PortfolioTimeline[]
  portfolioLedgers                     PortfolioLedger[]
  portfolioIndices                     PortfolioIndex[]
  executiveRoadmaps                    ExecutiveRoadmap[]` + content.substring(insertIndex);
}

const newModels = `

model EnterprisePortfolio {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  name                 String
  status               String
  createdAt            DateTime @default(now())
}

model PortfolioObjective {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  portfolioId          String
  title                String
  createdAt            DateTime @default(now())
}

model StrategicTheme {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  name                 String
  createdAt            DateTime @default(now())
}

model TransformationProgram {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  portfolioId          String
  name                 String
  status               String
  createdAt            DateTime @default(now())
}

model ProgramIncrement {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  programId            String
  name                 String
  createdAt            DateTime @default(now())
}

model StrategicInitiative {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  programId            String
  name                 String
  status               String
  createdAt            DateTime @default(now())
}

model InitiativeMilestone {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  initiativeId         String
  name                 String
  status               String
  createdAt            DateTime @default(now())
}

model InitiativeDependency {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  initiativeId         String
  dependencyId         String
  createdAt            DateTime @default(now())
}

model ValueStream {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  name                 String
  description          String
  createdAt            DateTime @default(now())
}

model BusinessCapabilityMapping {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  capabilityId         String
  targetId             String
  createdAt            DateTime @default(now())
}

model InvestmentAllocation {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  portfolioId          String
  amount               Float
  createdAt            DateTime @default(now())
}

model StrategicBudget {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  portfolioId          String
  amount               Float
  createdAt            DateTime @default(now())
}

model BenefitRealization {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  initiativeId         String
  benefit              String
  createdAt            DateTime @default(now())
}

model StrategicOutcome {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  objectiveId          String
  outcome              String
  createdAt            DateTime @default(now())
}

model PortfolioRisk {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  portfolioId          String
  risk                 String
  createdAt            DateTime @default(now())
}

model PortfolioAssessment {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  portfolioId          String
  assessment           String
  createdAt            DateTime @default(now())
}

model PortfolioApproval {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  portfolioId          String
  status               String
  createdAt            DateTime @default(now())
}

model PortfolioEvidence {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  portfolioId          String
  evidence             String
  createdAt            DateTime @default(now())
}

model PortfolioSnapshot {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  portfolioId          String
  snapshot             String
  createdAt            DateTime @default(now())
}

model PortfolioTimeline {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  portfolioId          String
  event                String
  createdAt            DateTime @default(now())
}

model PortfolioLedger {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  portfolioId          String
  transaction          String
  createdAt            DateTime @default(now())
}

model PortfolioIndex {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  score                Float
  createdAt            DateTime @default(now())
}

model ExecutiveRoadmap {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  name                 String
  roadmap              String
  createdAt            DateTime @default(now())
}
`;

content += newModels;

fs.writeFileSync(path, content);
