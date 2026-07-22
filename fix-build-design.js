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

// 2. Fix Duplicate Imports in Engineering Design
const engDir = path.join(__dirname, 'src', 'app', 'engineering', 'design');
const engFiles = walkSync(engDir);
engFiles.forEach(file => {
  if (file.endsWith('.tsx')) {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    const allIcons = ['ArrowLeft', 'Search', 'ShieldCheck', 'Activity', 'Target', 'Download', 'Settings', 'History', 'Palette', 'Box', 'LayoutTemplate', 'MousePointerClick', 'Accessibility', 'Move', 'MonitorSmartphone', 'LineChart', 'FileSignature', 'CheckCircle2', 'AlertTriangle', 'XCircle', 'FileCode', 'ArrowRight'];
    const uniqueIconsStr = [...new Set(allIcons)].join(', ');
    
    content = content.replace(/import \{[^}]+\}\s+from\s+"lucide-react";/g, \`import { \${uniqueIconsStr} } from "lucide-react";\`);

    if (content !== original) {
      fs.writeFileSync(file, content);
      console.log('Fixed Engineering Design page:', file);
    }
  }
});

// 3. Fix command-palette.tsx duplicate imports
const cpFile = path.join(__dirname, 'src', 'components', 'ui', 'command-palette.tsx');
let cpContent = fs.readFileSync(cpFile, 'utf8');
const cpImportRegex = /import\s+\{([^}]+)\}\s+from\s+'lucide-react';/g;
let newCpContent = cpContent.replace(cpImportRegex, (match, p1) => {
    const imports = p1.split(',').map(s => s.trim()).filter(s => s);
    const uniqueImports = [...new Set(imports)];
    return \`import { \${uniqueImports.join(', ')} } from 'lucide-react';\`;
});
// Handle double quotes as well
const cpImportRegex2 = /import\s+\{([^}]+)\}\s+from\s+"lucide-react";/g;
newCpContent = newCpContent.replace(cpImportRegex2, (match, p1) => {
    const imports = p1.split(',').map(s => s.trim()).filter(s => s);
    const uniqueImports = [...new Set(imports)];
    return \`import { \${uniqueImports.join(', ')} } from "lucide-react";\`;
});

// Since I added Palette, LayoutTemplate, MousePointerClick, Accessibility, Move, MonitorSmartphone, XCircle
// Let's just make sure they are in the import list.
const iconsToAdd = ['Palette', 'LayoutTemplate', 'MousePointerClick', 'Accessibility', 'Move', 'MonitorSmartphone', 'XCircle'];
iconsToAdd.forEach(icon => {
    if (!newCpContent.includes(\` \${icon}\`) && !newCpContent.includes(\`\${icon},\`)) {
        newCpContent = newCpContent.replace(/from\s+['"]lucide-react['"];/, \`, \${icon} } from 'lucide-react';\`);
    }
});

if (newCpContent !== cpContent) {
    fs.writeFileSync(cpFile, newCpContent);
    console.log('Fixed command palette imports');
}

console.log('Fixes complete.');
