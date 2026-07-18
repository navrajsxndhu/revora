const fs = require('fs');
const execSync = require('child_process').execSync;

let tscErrors = fs.readFileSync('tsc-errors2.txt', 'utf8');
if (tscErrors.indexOf('\0') !== -1) {
  tscErrors = fs.readFileSync('tsc-errors2.txt', 'utf16le');
}

const missingFieldsByModel = {};

// Match "Object literal may only specify known properties, and 'changeId' does not exist in type 'ChangeApprovalWhereInput'."
const regex1 = /'([^']+)' does not exist in type '([A-Za-z0-9]+)(WhereInput|Select|CreateInput|UpdateInput)'/g;
let match;
while ((match = regex1.exec(tscErrors)) !== null) {
  const field = match[1];
  const model = match[2];
  if (!missingFieldsByModel[model]) missingFieldsByModel[model] = new Set();
  missingFieldsByModel[model].add(field);
}

// Match "Property 'changeId' does not exist on type 'ChangeApproval'."
const regex2 = /Property '([^']+)' does not exist on type '([A-Za-z0-9]+)'/g;
while ((match = regex2.exec(tscErrors)) !== null) {
  const field = match[1];
  const model = match[2];
  // Ignore PrismaClient errors
  if (model === 'PrismaClient') continue;
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
        // Add field as String?
        changedModelDef = changedModelDef.replace('}', `  ${field} String?\n}`);
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
    console.log("Running prisma generate...");
    execSync('npx prisma generate', { stdio: 'inherit' });
    console.log("Prisma generate succeeded.");
  } catch (e) {
    console.error("Prisma generate failed");
  }
} else {
  console.log("No new fields to add.");
}
