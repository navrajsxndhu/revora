const fs = require('fs');
const execSync = require('child_process').execSync;

try {
  execSync('npx tsc --noEmit > tsc-errors3.txt 2>&1', { stdio: 'ignore' });
} catch (e) {
  // Expected to fail because of type errors
}

let tscErrors = fs.readFileSync('tsc-errors3.txt', 'utf8');
if (tscErrors.indexOf('\0') !== -1) {
  tscErrors = fs.readFileSync('tsc-errors3.txt', 'utf16le');
}

const missingFieldsByModel = {};

const regex1 = /'([^']+)' does not exist in type '([A-Za-z0-9]+)(WhereInput|Select|CreateInput|UpdateInput|OrderByWithRelationInput)'/g;
let match;
while ((match = regex1.exec(tscErrors)) !== null) {
  const field = match[1];
  const model = match[2];
  if (!missingFieldsByModel[model]) missingFieldsByModel[model] = new Set();
  missingFieldsByModel[model].add(field);
}

const regex2 = /Property '([^']+)' does not exist on type '([A-Za-z0-9]+)'/g;
while ((match = regex2.exec(tscErrors)) !== null) {
  const field = match[1];
  const model = match[2];
  if (model === 'PrismaClient' || model.endsWith('Input') || model.endsWith('Args') || model.endsWith('Payload')) continue;
  if (!missingFieldsByModel[model]) missingFieldsByModel[model] = new Set();
  missingFieldsByModel[model].add(field);
}

console.log("Missing fields detected:", missingFieldsByModel);

let schema = fs.readFileSync('prisma/schema.prisma', 'utf8');
let modified = false;

for (const [model, fields] of Object.entries(missingFieldsByModel)) {
  const modelRegex = new RegExp(`model ${model} \\{[^\\}]+\\}`, 'g');
  const match = modelRegex.exec(schema);
  if (match) {
    let modelDef = match[0];
    let changedModelDef = modelDef;
    for (const field of fields) {
      if (!modelDef.includes(`  ${field} `)) {
        let fieldType = 'String?';
        if (field === 'timestamp') fieldType = 'DateTime?';
        if (field === 'score') fieldType = 'Float?';
        if (field === 'critical') fieldType = 'Boolean?';
        changedModelDef = changedModelDef.replace('}', `  ${field} ${fieldType}\n}`);
      }
    }
    if (modelDef !== changedModelDef) {
      schema = schema.replace(modelDef, changedModelDef);
      modified = true;
    }
  }
}

if (modified) {
  fs.writeFileSync('prisma/schema.prisma', schema);
  console.log("Stubs updated.");
  try {
    execSync('npx prisma generate', { stdio: 'inherit' });
    console.log("Prisma generate succeeded.");
  } catch (e) {
    console.error("Prisma generate failed");
  }
} else {
  console.log("No new fields to add.");
}
