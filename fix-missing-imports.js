const fs = require('fs');
const path = require('path');

const walk = (dir, list = []) => {
  if (!fs.existsSync(dir)) return list;
  fs.readdirSync(dir).forEach(f => {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) walk(p, list);
    else if (p.endsWith('.tsx')) list.push(p);
  });
  return list;
};

const files = walk(path.join(__dirname, 'src', 'app'));
let totalFixed = 0;

files.forEach(f => {
  let c = fs.readFileSync(f, 'utf8');
  
  // Find the lucide-react import block
  const importMatch = c.match(/import\s*\{([^}]+)\}\s*from\s*["']lucide-react["'];?/);
  if (!importMatch) return;
  
  const importedRaw = importMatch[1];
  const importedNames = new Set(
    importedRaw.split(',').map(s => s.trim().split(/\s+as\s+/)[0].trim()).filter(Boolean)
  );
  
  // Find all <ComponentName used in JSX (capitalized names)
  const usedIcons = new Set();
  const iconRegex = /<([A-Z][A-Za-z0-9]+)\s/g;
  let m;
  while ((m = iconRegex.exec(c)) !== null) {
    const name = m[1];
    // Skip non-icon components
    if (['Link', 'PremiumTable', 'EvidenceBadge', 'Page', 'Command'].includes(name)) continue;
    usedIcons.add(name);
  }
  
  // Also check for icon usage in className patterns like: <IconName className=
  const iconRegex2 = /<([A-Z][A-Za-z0-9]+)\s+className/g;
  while ((m = iconRegex2.exec(c)) !== null) {
    const name = m[1];
    if (['Link', 'PremiumTable', 'EvidenceBadge', 'Page', 'Command'].includes(name)) continue;
    usedIcons.add(name);
  }
  
  // Find missing imports
  const missing = [];
  usedIcons.forEach(u => {
    if (!importedNames.has(u)) {
      missing.push(u);
    }
  });
  
  if (missing.length > 0) {
    // Build new import line
    const allNames = [...importedNames, ...missing];
    // Preserve "Link as LinkIcon" or "Link as LinkIconComponent" alias if present
    const hasLinkAlias = importedRaw.includes('Link as');
    const linkAliasMatch = importedRaw.match(/Link\s+as\s+(\w+)/);
    
    const nonLinkNames = allNames.filter(n => n !== 'Link');
    let newImportList = nonLinkNames.join(', ');
    if (hasLinkAlias && linkAliasMatch) {
      newImportList += ', Link as ' + linkAliasMatch[1];
    }
    
    const newImportLine = 'import { ' + newImportList + ' } from "lucide-react";';
    c = c.replace(importMatch[0], newImportLine);
    fs.writeFileSync(f, c);
    console.log('Fixed:', path.relative(__dirname, f), '->', missing.join(', '));
    totalFixed++;
  }
});

console.log('\nTotal files fixed:', totalFixed);
