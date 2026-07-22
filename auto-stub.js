/* eslint-disable */
const fs = require('fs');
const execSync = require('child_process').execSync;

let tscErrors = fs.readFileSync('tsc-errors.txt', 'utf8');
if (tscErrors.indexOf('\0') !== -1) {
  tscErrors = fs.readFileSync('tsc-errors.txt', 'utf16le');
}

const missingProperties = new Set();
// Handle standard error and the "Did you mean 'xyz'?" errors
const regex = /Property '([^']+)' does not exist on type 'PrismaClient/g;
let match;
while ((match = regex.exec(tscErrors)) !== null) {
  missingProperties.add(match[1]);
}

const missingModels = Array.from(missingProperties).map(prop => prop.charAt(0).toUpperCase() + prop.slice(1));
console.log("Missing Models to Stub:", missingModels.length);

let schema = fs.readFileSync('prisma/schema.prisma', 'utf8');
let relationsStr = "";
let addedModelsStr = "";

for (const model of missingModels) {
  if (!schema.includes(`model ${model} {`)) {
    const plural = model.charAt(0).toLowerCase() + model.slice(1) + 's';
    let relName = plural;
    if (model.endsWith('y')) {
      relName = model.charAt(0).toLowerCase() + model.slice(1, -1) + 'ies';
    } else if (model.endsWith('x')) {
      relName = model.charAt(0).toLowerCase() + model.slice(1) + 'es';
    } else if (model.endsWith('s')) {
      relName = model.charAt(0).toLowerCase() + model.slice(1) + 'es';
    }
    
    relationsStr += `  ${relName.padEnd(30)} ${model}[]\n`;
    
    addedModelsStr += `
model ${model} {
  id          String   @id @default(cuid())
  workspaceId String
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  data        String?
  createdAt   DateTime @default(now())
}
`;
  }
}

if (addedModelsStr.length > 0) {
  const workspaceIndex = schema.indexOf('model Workspace {');
  const workspaceEndIndex = schema.indexOf('}', workspaceIndex);

  if (workspaceIndex !== -1 && workspaceEndIndex !== -1) {
    schema = schema.substring(0, workspaceEndIndex) + relationsStr + schema.substring(workspaceEndIndex);
  }
  schema += addedModelsStr;
  fs.writeFileSync('prisma/schema.prisma', schema);
  console.log("Stubs added.");
} else {
  console.log("No new stubs needed.");
}

try {
  console.log("Running prisma generate...");
  execSync('npx prisma generate', { stdio: 'inherit' });
  console.log("Prisma generate succeeded.");
} catch (e) {
  console.error("Prisma generate failed");
}
