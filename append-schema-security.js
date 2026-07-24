const fs = require('fs');
const content = `

model WorkspaceSecurityIncident {
  id          String   @id @default(uuid())
  workspaceId String
  title       String
  severity    String
  status      String
  owner       String
  createdAt   DateTime @default(now())
}

model WorkspaceThreat {
  id          String   @id @default(uuid())
  workspaceId String
  threatName  String
  level       String
  source      String
  status      String
  createdAt   DateTime @default(now())
}

model WorkspaceRisk {
  id          String   @id @default(uuid())
  workspaceId String
  riskName    String
  impact      String
  likelihood  String
  score       Float
  createdAt   DateTime @default(now())
}

model WorkspaceComplianceFinding {
  id          String   @id @default(uuid())
  workspaceId String
  finding     String
  framework   String
  severity    String
  status      String
  createdAt   DateTime @default(now())
}

model WorkspaceVulnerability {
  id          String   @id @default(uuid())
  workspaceId String
  cve         String
  severity    String
  asset       String
  status      String
  createdAt   DateTime @default(now())
}

model WorkspaceAccessReview {
  id          String   @id @default(uuid())
  workspaceId String
  reviewer    String
  system      String
  progress    String
  status      String
  createdAt   DateTime @default(now())
}

model WorkspaceSecurityPolicy {
  id          String   @id @default(uuid())
  workspaceId String
  policyName  String
  enforcement String
  version     String
  status      String
  createdAt   DateTime @default(now())
}

model WorkspaceSecurityEvidence {
  id          String   @id @default(uuid())
  workspaceId String
  evidenceId  String
  description String
  hash        String
  timestamp   DateTime @default(now())
}

model WorkspaceSecurityAnalytics {
  id          String   @id @default(uuid())
  workspaceId String
  metricName  String
  value       String
  trend       String
  period      String
  createdAt   DateTime @default(now())
}

model WorkspaceSecurityGovernance {
  id          String   @id @default(uuid())
  workspaceId String
  controlName String
  framework   String
  owner       String
  status      String
  createdAt   DateTime @default(now())
}
`;
fs.appendFileSync('prisma/schema.prisma', content);
console.log('Appended successfully');
