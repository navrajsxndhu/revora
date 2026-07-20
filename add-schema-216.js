const fs = require('fs');

const models = [
  "ExecutiveDashboard",
  "ExecutiveView",
  "ExecutiveWorkspace",
  "GovernanceSnapshot",
  "GovernanceKPI",
  "GovernanceMetric",
  "GovernanceIndicator",
  "ExecutiveWidget",
  "ExecutiveWidgetLayout",
  "DashboardFilter",
  "DashboardView",
  "DashboardSession",
  "DashboardEvidence",
  "DashboardLedger",
  "DashboardAudit",
  "ExecutiveAlert",
  "ExecutiveNotification",
  "EnterpriseHealthSnapshot",
  "GovernanceCoverage",
  "GovernanceSummary",
  "DashboardPolicy",
  "DashboardCheckpoint",
  "DashboardMetrics"
];

let schema = fs.readFileSync('prisma/schema.prisma', 'utf8');

for (const model of models) {
  if (!schema.includes(`model ${model} {`)) {
    schema += `\n// Phase 216: Enterprise Governance Intelligence Dashboard\n`;
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
console.log("Schema updated for Phase 216.");
