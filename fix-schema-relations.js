/* eslint-disable */
const fs = require('fs');
const path = './prisma/schema.prisma';
let content = fs.readFileSync(path, 'utf8');

const relationsStr = `
  releaseVersions            ReleaseVersion[]
  releaseArtifacts           ReleaseArtifact[]
  deploymentPlans            DeploymentPlan[]
  deploymentExecutions       DeploymentExecution[]
  deploymentEnvironments     DeploymentEnvironment[]
  deploymentWindows          DeploymentWindow[]
  deploymentApprovals        DeploymentApproval[]
  deploymentValidations      DeploymentValidation[]
  progressiveRollouts        ProgressiveRollout[]
  rolloutStages              RolloutStage[]
  deploymentCheckpoints      DeploymentCheckpoint[]
  productionVerifications    ProductionVerification[]
  releaseAssessments         ReleaseAssessment[]
  releaseSnapshots           ReleaseSnapshot[]
  releaseTimelines           ReleaseTimeline[]
  releaseLedgers             ReleaseLedger[]
  releaseIndices             ReleaseIndex[]
  deploymentHealths          DeploymentHealth[]
`;

// Find where Workspace ends
const workspaceIndex = content.indexOf('model Workspace {');
const workspaceEndIndex = content.indexOf('}', workspaceIndex);

if (workspaceIndex !== -1 && workspaceEndIndex !== -1) {
  content = content.substring(0, workspaceEndIndex) + relationsStr + content.substring(workspaceEndIndex);
  fs.writeFileSync(path, content);
  console.log("Added Workspace relations.");
} else {
  console.log("Workspace model not found.");
}
