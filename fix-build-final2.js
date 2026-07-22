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

const engDir = path.join(__dirname, 'src', 'app', 'engineering');
const engFiles = walkSync(engDir);
engFiles.forEach(file => {
  if (file.endsWith('.tsx')) {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    const lines = content.split('\\n');
    let newLines = [];
    let allImports = new Set();
    
    for (const line of lines) {
        if (line.includes('from "lucide-react"') || line.includes("from 'lucide-react'")) {
            // Extract everything between { and }
            const match = line.match(/\\{([^}]+)\\}/);
            if (match) {
                match[1].split(',').forEach(i => {
                    const trimmed = i.trim();
                    if (trimmed) allImports.add(trimmed);
                });
            }
        } else {
            newLines.push(line);
        }
    }

    if (allImports.size > 0) {
        const uniqueIconsStr = Array.from(allImports).join(', ');
        const newImport = \`import { \${uniqueIconsStr} } from "lucide-react";\`;
        
        // Find import React and insert after it
        let insertIndex = newLines.findIndex(l => l.includes('import React'));
        if (insertIndex === -1) insertIndex = 0;
        else insertIndex++;
        
        newLines.splice(insertIndex, 0, newImport);
    }

    content = newLines.join('\\n');

    if (content !== original) {
      fs.writeFileSync(file, content);
      console.log('Fixed Engineering page:', file);
    }
  }
});
console.log('Final fixes complete.');
