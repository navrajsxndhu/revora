const fs = require('fs');
const path = require('path');

const walkSync = function(dir, filelist) {
  if (!fs.existsSync(dir)) return filelist || [];
  const files = fs.readdirSync(dir);
  filelist = filelist || [];
  files.forEach(function(file) {
    if (fs.statSync(path.join(dir, file)).isDirectory()) {
      filelist = walkSync(path.join(dir, file), filelist);
    } else {
      filelist.push(path.join(dir, file));
    }
  });
  return filelist;
};

// 1. Fix API routes
const apiDir = path.join(__dirname, 'src', 'app', 'api');
const apiFiles = walkSync(apiDir);
let fixedApiCount = 0;
apiFiles.forEach(file => {
  if (file.endsWith('.ts') || file.endsWith('.tsx')) {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;
    
    // Hardcode all methods just to be extremely safe
    ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'].forEach(method => {
      content = content.split(\`export async function \${method}(, \`).join(\`export async function \${method}(\`);
      content = content.split(\`export async function \${method}( , \`).join(\`export async function \${method}(\`);
    });
    
    if (content !== original) {
      fs.writeFileSync(file, content);
      fixedApiCount++;
    }
  }
});
console.log('Fixed API routes:', fixedApiCount);

// 2. Fix Duplicate Imports in ALL engineering pages
const engDir = path.join(__dirname, 'src', 'app', 'engineering');
const engFiles = walkSync(engDir);
let fixedEngCount = 0;
engFiles.forEach(file => {
  if (file.endsWith('.tsx')) {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    // Find all lucide-react imports and combine them
    const importRegex = /import\s+\{([^}]+)\}\s+from\s+["']lucide-react["'];/g;
    let allImports = new Set();
    let hasMatch = false;

    // First collect all imported icons and remove the lines
    content = content.replace(importRegex, (match, p1) => {
        hasMatch = true;
        p1.split(',').forEach(i => {
            const trimmed = i.trim();
            if (trimmed) allImports.add(trimmed);
        });
        return ''; // Remove the old import statement completely
    });

    // Then insert a single unique import statement at the top of the file
    if (hasMatch && allImports.size > 0) {
        const uniqueIconsStr = Array.from(allImports).join(', ');
        const newImport = \`import { \${uniqueIconsStr} } from "lucide-react";\\n\`;
        
        // Insert after 'import React...' or at top
        if (content.includes('import React')) {
            content = content.replace(/(import React[^;]+;\\r?\\n)/, \`$1\${newImport}\`);
        } else {
            content = newImport + content;
        }
    }

    if (content !== original) {
      fs.writeFileSync(file, content);
      fixedEngCount++;
    }
  }
});
console.log('Fixed Engineering pages:', fixedEngCount);

console.log('Final fixes complete.');
