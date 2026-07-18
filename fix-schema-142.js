const fs = require('fs');
const path = './prisma/schema.prisma';
let content = fs.readFileSync(path, 'utf8');

const modelsToAdd = [
  "ReleaseVersion",
  "ReleaseArtifact",
  "DeploymentPlan",
  "DeploymentExecution",
  "DeploymentEnvironment",
  "DeploymentTarget",
  "DeploymentWindow",
  "DeploymentApproval",
  "DeploymentValidation",
  "ProgressiveRollout",
  "RolloutStage",
  "RollbackPlan",
  "RollbackExecution",
  "DeploymentCheckpoint",
  "ProductionVerification",
  "ReleaseEvidence",
  "ReleaseAssessment",
  "ReleaseSnapshot",
  "ReleaseTimeline",
  "ReleaseLedger",
  "ReleaseIndex",
  "DeploymentHealth",
  "EnterpriseRelease"
];

let addedModelsStr = "";
let relationsStr = "";

for (const model of modelsToAdd) {
  if (!content.includes(`model ${model} {`)) {
    const plural = model.charAt(0).toLowerCase() + model.slice(1) + 's';
    
    // some plural edge cases
    let relName = plural;
    if (model.endsWith('y')) {
      relName = model.charAt(0).toLowerCase() + model.slice(1, -1) + 'ies';
    } else if (model.endsWith('x')) {
      relName = model.charAt(0).toLowerCase() + model.slice(1) + 'es';
    }
    
    relationsStr += `  ${relName.padEnd(26)} ${model}[]\n`;
    
    addedModelsStr += `
model ${model} {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  ${model.toLowerCase().endsWith('index') ? 'score Float' : 'data String?'}
  createdAt   DateTime @default(now())
}
`;
  }
}

if (addedModelsStr.length > 0) {
  const workspaceEndIndex = content.indexOf('executiveTelemetrySnapshots ExecutiveTelemetrySnapshot[]');
  if (workspaceEndIndex !== -1) {
    const insertIndex = workspaceEndIndex + 'executiveTelemetrySnapshots ExecutiveTelemetrySnapshot[]'.length;
    content = content.substring(0, insertIndex) + '\n' + relationsStr + content.substring(insertIndex);
  }
  content += addedModelsStr;
  fs.writeFileSync(path, content);
  console.log("Added models to schema");
} else {
  console.log("No models to add");
}
