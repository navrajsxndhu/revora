const fs = require('fs');
let file = 'src/components/ui/command-palette.tsx';
let c = fs.readFileSync(file, 'utf8');
let importsMatch = c.match(/import\s+\{([^}]+)\}\s+from\s+['"]lucide-react['"]/);
if (importsMatch) {
  let imports = importsMatch[1].split(',').map(s => s.trim()).filter(Boolean);
  let components = new Set();
  let regex = /<([A-Z][a-zA-Z0-9]+)/g;
  let match;
  while ((match = regex.exec(c)) !== null) {
    components.add(match[1]);
  }
  // Exclude non-lucide components
  ['Command', 'CommandPalette', 'Dialog', 'CommandList', 'CommandInput', 'CommandEmpty', 'CommandGroup', 'CommandItem', 'CommandSeparator', 'CommandShortcut', 'CommandDialog'].forEach(item => components.delete(item));
  
  let missing = Array.from(components).filter(comp => !imports.includes(comp));
  if (missing.length > 0) {
    console.log('Missing icons:', missing);
    let newImports = [...imports, ...missing];
    c = c.replace(importsMatch[0], 'import { ' + newImports.join(', ') + ' } from "lucide-react"');
    fs.writeFileSync(file, c);
    console.log('Added missing imports to', file);
  } else {
    console.log('No missing imports found.');
  }
}
