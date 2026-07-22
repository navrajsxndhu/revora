/* eslint-disable */
const fs = require('fs');
const path = './prisma/schema.prisma';
let content = fs.readFileSync(path, 'utf8');

const relationsStr = `  deploymentTargets DeploymentTarget[]\n`;

const workspaceIndex = content.indexOf('model Workspace {');
const workspaceEndIndex = content.indexOf('}', workspaceIndex);

if (workspaceIndex !== -1 && workspaceEndIndex !== -1) {
  content = content.substring(0, workspaceEndIndex) + relationsStr + content.substring(workspaceEndIndex);
  fs.writeFileSync(path, content);
  console.log("Added DeploymentTarget relations.");
}
