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
    content = content.replace(/export async function (GET|POST|PUT|DELETE|PATCH)\(\s*,\s*/g, 'export async function $1(');
    
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

    // Replace the specific import line completely with a hardcoded one without duplicates
    // since we know exactly what we generated
    const allIcons = ['ArrowLeft', 'Search', 'ShieldCheck', 'Activity', 'Target', 'Download', 'Settings', 'History', 'Database', 'Network', 'Key', 'Layout', 'Code2', 'Cpu', 'LineChart', 'FileCode', 'CheckCircle2', 'AlertTriangle', 'Zap', 'Server', 'FileCode2', 'Box'];
    const uniqueIconsStr = [...new Set(allIcons)].join(', ');
    
    // Just find any lucide-react import and replace it
    content = content.replace(/import \{[^}]+\}\s+from\s+"lucide-react";/g, \`import { \${uniqueIconsStr} } from "lucide-react";\`);

    if (content !== original) {
      fs.writeFileSync(file, content);
      console.log('Fixed Engineering Audit page:', file);
    }
  }
});

console.log('Fixes complete.');
