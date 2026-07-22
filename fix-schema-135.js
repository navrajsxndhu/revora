/* eslint-disable */
const fs = require('fs');
const path = './prisma/schema.prisma';
let content = fs.readFileSync(path, 'utf8');

const workspaceEndIndex = content.indexOf('resilienceIndices                    ResilienceIndex[]');
if (workspaceEndIndex !== -1) {
  const insertIndex = workspaceEndIndex + 'resilienceIndices                    ResilienceIndex[]'.length;
  content = content.substring(0, insertIndex) + `
  enterpriseCapacities                 EnterpriseCapacity[]
  capacityPools                        CapacityPool[]
  capacityResources                    CapacityResource[]
  capacityAllocations                  CapacityAllocation[]
  capacityReservations                 CapacityReservation[]
  capacityConstraints                  CapacityConstraint[]
  capacityWindows                      CapacityWindow[]
  demandRequests                       DemandRequest[]
  demandForecasts                      DemandForecast[]
  demandScenarios                      DemandScenario[]
  resourceRequirements                 ResourceRequirement[]
  infrastructureCapacities             InfrastructureCapacity[]
  serviceCapacities                    ServiceCapacity[]
  workloadProfiles                     WorkloadProfile[]
  operationalDemands                   OperationalDemand[]
  planningScenarios                    PlanningScenario[]
  planningAssessments                  PlanningAssessment[]
  capacitySnapshots                    CapacitySnapshot[]
  capacityUtilizations                 CapacityUtilization[]
  planningLedgers                      PlanningLedger[]
  planningIndices                      PlanningIndex[]
  planningApprovals                    PlanningApproval[]
  planningEvidences                    PlanningEvidence[]` + content.substring(insertIndex);
}

const newModels = `

model EnterpriseCapacity {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  name                 String
  status               String
  createdAt            DateTime @default(now())
}

model CapacityPool {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  name                 String
  status               String
  createdAt            DateTime @default(now())
}

model CapacityResource {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  name                 String
  type                 String
  createdAt            DateTime @default(now())
}

model CapacityAllocation {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  resourceId           String
  targetId             String
  createdAt            DateTime @default(now())
}

model CapacityReservation {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  resourceId           String
  targetId             String
  createdAt            DateTime @default(now())
}

model CapacityConstraint {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  name                 String
  description          String
  createdAt            DateTime @default(now())
}

model CapacityWindow {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  name                 String
  startTime            DateTime
  endTime              DateTime
  createdAt            DateTime @default(now())
}

model DemandRequest {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  title                String
  status               String
  createdAt            DateTime @default(now())
}

model DemandForecast {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  targetId             String
  forecastData         String
  createdAt            DateTime @default(now())
}

model DemandScenario {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  name                 String
  description          String
  createdAt            DateTime @default(now())
}

model ResourceRequirement {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  demandId             String
  resourceType         String
  createdAt            DateTime @default(now())
}

model InfrastructureCapacity {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  componentId          String
  totalCapacity        Float
  createdAt            DateTime @default(now())
}

model ServiceCapacity {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  serviceId            String
  totalCapacity        Float
  createdAt            DateTime @default(now())
}

model WorkloadProfile {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  name                 String
  characteristics      String
  createdAt            DateTime @default(now())
}

model OperationalDemand {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  name                 String
  volume               Float
  createdAt            DateTime @default(now())
}

model PlanningScenario {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  name                 String
  status               String
  createdAt            DateTime @default(now())
}

model PlanningAssessment {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  scenarioId           String
  result               String
  createdAt            DateTime @default(now())
}

model CapacitySnapshot {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  dataHash             String
  createdAt            DateTime @default(now())
}

model CapacityUtilization {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  resourceId           String
  utilizationPercent   Float
  createdAt            DateTime @default(now())
}

model PlanningLedger {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  eventId              String
  type                 String
  data                 String
  createdAt            DateTime @default(now())
}

model PlanningIndex {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  score                Float
  createdAt            DateTime @default(now())
}

model PlanningApproval {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  targetId             String
  approver             String
  decision             String
  createdAt            DateTime @default(now())
}

model PlanningEvidence {
  id                   String   @id @default(cuid())
  workspaceId          String
  workspace            Workspace @relation(fields: [workspaceId], references: [id])
  targetId             String
  content              String
  createdAt            DateTime @default(now())
}
`;

content += newModels;

fs.writeFileSync(path, content);
