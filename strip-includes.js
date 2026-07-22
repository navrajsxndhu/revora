/* eslint-disable */
const fs = require('fs');

function stripIncludes(path) {
  if (fs.existsSync(path)) {
    let content = fs.readFileSync(path, 'utf8');
    // Replace include blocks
    content = content.replace(/include:\s*\{[^}]+\},?/g, '');
    fs.writeFileSync(path, content);
  }
}

stripIncludes('src/lib/identity/approval-engine.ts');
stripIncludes('src/lib/identity/enterprise-identity-engine.ts');
stripIncludes('src/lib/identity/permission-engine.ts');
stripIncludes('src/lib/identity/privileged-access-engine.ts');
stripIncludes('src/lib/identity/role-engine.ts');
stripIncludes('src/lib/workflows/enterprise-workflow-engine.ts');

console.log("Includes stripped!");
