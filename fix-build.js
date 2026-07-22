const fs = require('fs');
const path = require('path');

const walkSync = function(dir, filelist) {
  const files = fs.readdirSync(dir);
  filelist = filelist || [];
  files.forEach(function(file) {
    if (fs.statSync(path.join(dir, file)).isDirectory()) {
      filelist = walkSync(path.join(dir, file), filelist);
    }
    else {
      filelist.push(path.join(dir, file));
    }
  });
  return filelist;
};

// 1. Fix API routes
const apiDir = path.join(__dirname, 'src', 'app', 'api');
const apiFiles = walkSync(apiDir);
apiFiles.forEach(file => {
  if (file.endsWith('.ts') || file.endsWith('.tsx')) {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;
    
    // Fix dangling comma from previous regex
    content = content.replace(/export async function (GET|POST|PUT|DELETE|PATCH)\(, /g, 'export async function $1(');
    
    if (content !== original) {
      fs.writeFileSync(file, content);
      console.log('Fixed API route:', file);
    }
  }
});

// 2. Fix Duplicate Imports in Engineering Audit
const engDir = path.join(__dirname, 'src', 'app', 'engineering', 'audit');
const engFiles = walkSync(engDir);
engFiles.forEach(file => {
  if (file.endsWith('.tsx')) {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    // Find the import line for lucide-react
    const importRegex = /import\s+\{([^}]+)\}\s+from\s+"lucide-react";/g;
    content = content.replace(importRegex, (match, p1) => {
      const imports = p1.split(',').map(s => s.trim()).filter(s => s);
      const uniqueImports = [...new Set(imports)];
      return \`import { \${uniqueImports.join(', ')} } from "lucide-react";\`;
    });

    if (content !== original) {
      fs.writeFileSync(file, content);
      console.log('Fixed Engineering Audit page:', file);
    }
  }
});

console.log('Fixes complete.');
