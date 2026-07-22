const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'src/app/engineering/design/layouts/page.tsx');
let content = fs.readFileSync(file, 'utf8');

const importRegex = /import\s+\{([^}]+)\}\s+from\s+["']lucide-react["'];/g;
let allImports = new Set();
let hasMatch = false;

content = content.replace(importRegex, (match, p1) => {
    hasMatch = true;
    p1.split(',').forEach(i => {
        const trimmed = i.trim();
        if (trimmed) allImports.add(trimmed);
    });
    return ''; 
});

if (hasMatch && allImports.size > 0) {
    const uniqueIconsStr = Array.from(allImports).join(', ');
    const newImport = \`import { \${uniqueIconsStr} } from "lucide-react";\\n\`;
    if (content.includes('import React')) {
        content = content.replace(/(import React[^;]+;\\r?\\n)/, \`$1\${newImport}\`);
    } else {
        content = newImport + content;
    }
}

fs.writeFileSync(file, content);
console.log('Fixed file layout');
