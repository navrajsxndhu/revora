/* eslint-disable */
const fs = require('fs');
const path = './prisma/schema.prisma';
let content = fs.readFileSync(path, 'utf8');

const workspaceEndIndex = content.indexOf('streamingIndices           StreamingIndex[]');
if (workspaceEndIndex !== -1) {
  const insertIndex = workspaceEndIndex + 'streamingIndices           StreamingIndex[]'.length;
  content = content.substring(0, insertIndex) + `
  telemetrySources           TelemetrySource[]
  telemetryMetrics           TelemetryMetric[]
  telemetrySeries            TelemetrySeries[]
  telemetryLogs              TelemetryLog[]
  telemetryTraces            TelemetryTrace[]
  telemetrySpans             TelemetrySpan[]
  telemetryCollectionPolicies TelemetryCollectionPolicy[]
  telemetryValidations       TelemetryValidation[]
  telemetryAlerts            TelemetryAlert[]
  alertRules                 AlertRule[]
  diagnosticSessions         DiagnosticSession[]
  diagnosticEvidences        DiagnosticEvidence[]
  healthIndicators           HealthIndicator[]
  observabilityAssessments   ObservabilityAssessment[]
  telemetryRetentions        TelemetryRetention[]
  telemetrySnapshots         TelemetrySnapshot[]
  telemetryTimelines         TelemetryTimeline[]
  telemetryCorrelations      TelemetryCorrelation[]
  telemetryReplays           TelemetryReplay[]
  telemetryLedgers           TelemetryLedger[]
  telemetryIndices           TelemetryIndex[]
  observabilityHealths       ObservabilityHealth[]
  executiveTelemetrySnapshots ExecutiveTelemetrySnapshot[]` + content.substring(insertIndex);
}

const newModels = `

model TelemetrySource {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  source      String
  createdAt   DateTime @default(now())
}

model TelemetryMetric {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  metric      String
  createdAt   DateTime @default(now())
}

model TelemetrySeries {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  series      String
  createdAt   DateTime @default(now())
}

model TelemetryLog {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  log         String
  createdAt   DateTime @default(now())
}

model TelemetryTrace {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  trace       String
  createdAt   DateTime @default(now())
}

model TelemetrySpan {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  span        String
  createdAt   DateTime @default(now())
}

model TelemetryCollectionPolicy {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  policy      String
  createdAt   DateTime @default(now())
}

model TelemetryValidation {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  validation  String
  createdAt   DateTime @default(now())
}

model TelemetryAlert {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  alert       String
  createdAt   DateTime @default(now())
}

model AlertRule {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  rule        String
  createdAt   DateTime @default(now())
}

model DiagnosticSession {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  session     String
  createdAt   DateTime @default(now())
}

model DiagnosticEvidence {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  evidence    String
  createdAt   DateTime @default(now())
}

model HealthIndicator {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  indicator   String
  createdAt   DateTime @default(now())
}

model ObservabilityAssessment {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  assessment  String
  createdAt   DateTime @default(now())
}

model TelemetryRetention {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  retention   String
  createdAt   DateTime @default(now())
}

model TelemetrySnapshot {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  snapshot    String
  createdAt   DateTime @default(now())
}

model TelemetryTimeline {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  timeline    String
  createdAt   DateTime @default(now())
}

model TelemetryCorrelation {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  correlation String
  createdAt   DateTime @default(now())
}

model TelemetryReplay {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  replay      String
  createdAt   DateTime @default(now())
}

model TelemetryLedger {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  ledger      String
  createdAt   DateTime @default(now())
}

model TelemetryIndex {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  score       Float
  createdAt   DateTime @default(now())
}

model ObservabilityHealth {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  health      String
  createdAt   DateTime @default(now())
}

model ExecutiveTelemetrySnapshot {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  snapshot    String
  createdAt   DateTime @default(now())
}
`;

content += newModels;

fs.writeFileSync(path, content);
