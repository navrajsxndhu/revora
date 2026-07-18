const fs = require('fs');
const execSync = require('child_process').execSync;

let success = false;
let iterations = 0;
const maxIterations = 10;

while (!success && iterations < maxIterations) {
  iterations++;
  console.log(`\nIteration ${iterations}...`);
  try {
    execSync('npx tsc --noEmit > tsc-errors-loop.txt 2>&1', { stdio: 'ignore' });
    console.log("TSC passed!");
    success = true;
    break;
  } catch (e) {
    // Has errors
  }

  let tscErrors = fs.readFileSync('tsc-errors-loop.txt', 'utf8');
  if (tscErrors.indexOf('\0') !== -1) {
    tscErrors = fs.readFileSync('tsc-errors-loop.txt', 'utf16le');
  }

  const missingFieldsByModel = {};
  let foundErrors = false;

  const regex1 = /'([^']+)' does not exist in type '([^']+)'/g;
  let match;
  while ((match = regex1.exec(tscErrors)) !== null) {
    const field = match[1];
    const typeStr = match[2];
    const modelMatch = typeStr.match(/([A-Z][a-zA-Z0-9]+)(CreateInput|UpdateInput|WhereInput|Select|OrderByWithRelationInput|UncheckedCreateInput)/);
    if (modelMatch) {
      const model = modelMatch[1];
      if (!missingFieldsByModel[model]) missingFieldsByModel[model] = new Set();
      missingFieldsByModel[model].add(field);
      foundErrors = true;
    }
  }

  const regex2 = /Property '([^']+)' does not exist on type '([A-Z][a-zA-Z0-9]+)'/g;
  while ((match = regex2.exec(tscErrors)) !== null) {
    const field = match[1];
    const model = match[2];
    if (model === 'PrismaClient' || model.endsWith('Input') || model.endsWith('Args') || model.endsWith('Payload')) continue;
    if (!missingFieldsByModel[model]) missingFieldsByModel[model] = new Set();
    missingFieldsByModel[model].add(field);
    foundErrors = true;
  }

  if (!foundErrors) {
    console.log("No missing property errors found but TSC failed. Exiting loop.");
    break;
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
          if (field === 'role' || field === 'decision' || field === 'priority' || field === 'severity') fieldType = 'String?';
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
    console.log("Stubs updated. Running prisma generate...");
    execSync('npx prisma generate', { stdio: 'ignore' });
  } else {
    console.log("Could not add missing fields (maybe model not found). Exiting loop.");
    break;
  }
}

if (success) {
  console.log("Successfully resolved all missing Prisma fields!");
} else {
  console.log("Failed to resolve all missing fields within limits.");
}
