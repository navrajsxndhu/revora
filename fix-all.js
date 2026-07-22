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

const dirsToFix = [
  path.join(__dirname, 'src', 'app', 'engineering'),
  path.join(__dirname, 'src', 'app', 'experience')
];

dirsToFix.forEach(dir => {
  const files = walkSync(dir);
  files.forEach(file => {
    if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      let content = fs.readFileSync(file, 'utf8');
      const original = content;

      // Extract all lucide-react imports
      let allIcons = new Set();
      
      const importRegex = /import\s+\{([^}]+)\}\s+from\s+['"]lucide-react['"];?/g;
      
      let match;
      while ((match = importRegex.exec(content)) !== null) {
        match[1].split(',').forEach(icon => {
          const trimmed = icon.trim();
          if (trimmed) allIcons.add(trimmed);
        });
      }
      
      if (allIcons.size > 0) {
        // Remove all old lucide-react imports
        content = content.replace(importRegex, '');
        
        // Handle 'Link' clashing with 'next/link'
        if (allIcons.has('Link') && content.includes('next/link')) {
          allIcons.delete('Link');
          allIcons.add('Link as LinkIcon');
          // Update JSX references from <Link /> to <LinkIcon /> but only where it's a lucide icon
          // This is tricky, but in my generation script, the icon is used as <Link className=... />
          // Wait, the KPI icon is dynamically rendered <kpi.icon />. Since kpi.icon is just the variable name, I should just rename it in the data config.
          // For now, I'll just change 'Link' to 'Link as LinkIcon' and hope it works if it's referenced directly. But in the generated files, 'Link' is in the allIcons array.
          // Wait! In generate-rxos.js, the variable is passed to the kpis array as 'Link'.
          // I will just replace `icon: 'Link'` with `icon: 'LinkIcon'` inside the content.
          content = content.replace(/icon:\s*['"]Link['"]/g, "icon: 'LinkIcon'");
          content = content.replace(/<Link\s+className=/g, "<LinkIcon className=");
        }

        const newImport = `import { ${Array.from(allIcons).join(', ')} } from "lucide-react";\n`;
        
        // Insert after 'import React...' or at top
        if (content.includes('import React')) {
          content = content.replace(/(import React[^;]+;)/, `$1\n${newImport}`);
        } else {
          content = newImport + content;
        }
      }

      if (content !== original) {
        fs.writeFileSync(file, content);
        console.log('Fixed file:', file);
      }
    }
  });
});
