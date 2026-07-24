/**
 * refactor-hubs.js
 * 
 * Refactors hub pages (e.g. src/app/observability/page.tsx) to use ModuleGrid.
 */

const fs = require('fs');
const path = require('path');

const PHASE_DIRS = [
  'observability', 'business-intelligence', 'data-fabric', 'orchestration',
  'design-language', 'intelligence-fabric', 'digital-workspace',
  'trust', 'personalization', 'continuity', 'performance',
  'search', 'collaboration', 'adoption', 'workspace', 'intelligence'
];

let refactored = 0;
let skipped = 0;

function extractHubData(content) {
  // Extract Title
  const titleMatch = content.match(/<h1[^>]*>\s*<(\w+)\s+className="w-8 h-8([^"]*)"[^>]*\/>\s*(.*?)\s*<\/h1>/);
  if (!titleMatch) return null;
  const titleIcon = titleMatch[1];
  const iconColor = titleMatch[2].trim();
  const title = titleMatch[3].trim();

  // Extract Description
  const descMatch = content.match(/<p className="text-slate-400">([^<]+)<\/p>/);
  const description = descMatch ? descMatch[1].trim() : '';

  // Extract Status (optional)
  const statusLabelMatch = content.match(/<span className="text-xs[^"]*">([^<]+)<\/span>/);
  const statusLabel = statusLabelMatch ? statusLabelMatch[1].trim() : null;

  const statusValueMatch = content.match(/<div className="w-2 h-2[^>]+><\/div>\s*(.*?)\s*<\/div>/);
  const statusValue = statusValueMatch ? statusValueMatch[1].trim() : null;

  // Extract modules
  // The modules array is defined like: const modules = [ { name: "...", path: "...", icon: ..., color: "...", bg: "...", border: "..." }, ... ]
  const modulesMatch = content.match(/const modules = (\[[\s\S]*?\]);/);
  if (!modulesMatch) return null;
  
  // Try to find the raw array string
  const rawModulesString = modulesMatch[1];
  
  // Find all used icons in the modules
  const iconSet = new Set([titleIcon]);
  const iconRegex = /icon:\s*(\w+)/g;
  let match;
  while ((match = iconRegex.exec(rawModulesString)) !== null) {
    iconSet.add(match[1]);
  }

  return {
    titleIcon, iconColor, title, description, statusLabel, statusValue,
    rawModulesString, usedIcons: [...iconSet]
  };
}

PHASE_DIRS.forEach(dir => {
  const pagePath = path.join(__dirname, 'src', 'app', dir, 'page.tsx');
  if (!fs.existsSync(pagePath)) return;

  const content = fs.readFileSync(pagePath, 'utf8');

  // Ensure it's a hub page (has Link to children, defines modules)
  if (!content.includes('const modules = [')) {
    skipped++;
    return;
  }

  const data = extractHubData(content);
  if (!data) {
    skipped++;
    return;
  }

  const iconImports = data.usedIcons.join(', ');
  
  const statusProps = (data.statusLabel && data.statusValue) 
    ? `\n        statusLabel="${data.statusLabel}"\n        statusValue="${data.statusValue}"`
    : '';

  const refactoredContent = `import React from "react";
import { ${iconImports} } from "lucide-react";
import { ModuleGrid } from "@/components/ui/module-grid";

export default function HubPage() {
  ${data.rawModulesString}

  return (
    <ModuleGrid
      title="${data.title}"
      description="${data.description}"
      icon={${data.titleIcon}}
      iconColor="${data.iconColor}"${statusProps}
      modules={modules}
    />
  );
}
`;

  fs.writeFileSync(pagePath, refactoredContent);
  refactored++;
  console.log('Refactored Hub:', path.relative(__dirname, pagePath));
});

console.log('\\n--- Hub Refactoring Complete ---');
console.log('Refactored:', refactored, 'hubs');
console.log('Skipped:', skipped, 'hubs');
