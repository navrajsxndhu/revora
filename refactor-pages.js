/**
 * refactor-pages.js
 * 
 * Phase T: Refactors all generated detail pages (Phases I-S) to use
 * the new REIIF primitives (PageShell, ExecutiveHeader, MetricGrid,
 * StatusBadge, EvidenceBadge).
 * 
 * Each generated page follows an identical template:
 * 1. Massive lucide-react import (120+ icons)
 * 2. PremiumTable + EvidenceBadge imports
 * 3. Page wrapper div
 * 4. Header block (back link, title, icon, description, search, export)
 * 5. KPI grid (4 metric cards)
 * 6. PremiumTable with inline .map()
 * 
 * This script extracts the data from each page and rewrites it using
 * the new shared components.
 */

const fs = require('fs');
const path = require('path');

// Directories containing generated detail pages from Phases I-S
const PHASE_DIRS = [
  'observability', 'business-intelligence', 'data-fabric', 'orchestration',
  'design-language', 'intelligence-fabric', 'digital-workspace',
  'trust', 'personalization', 'continuity', 'performance',
  'search', 'collaboration', 'adoption', 'workspace', 'intelligence'
];

let refactored = 0;
let skipped = 0;

function extractPageData(content, filePath) {
  // Extract back href
  const backHrefMatch = content.match(/href="(\/[^"]+?)"\s+className="inline-flex items-center gap-2/);
  if (!backHrefMatch) return null;
  const backHref = backHrefMatch[1];

  // Extract back label
  const backLabelMatch = content.match(/Back to ([^<]+)/);
  const backLabel = backLabelMatch ? backLabelMatch[1].trim() : 'Command Center';

  // Extract title
  const titleMatch = content.match(/<h1[^>]*>\s*<(\w+)\s+className="w-8 h-8[^"]*"[^/]*\/>\s*\n?\s*(.*?)\s*<\/h1>/s);
  if (!titleMatch) return null;
  const titleIcon = titleMatch[1];
  const title = titleMatch[2].trim();

  // Extract icon color
  const iconColorMatch = content.match(new RegExp('<' + titleIcon + '\\s+className="w-8 h-8 ([^"]+)"'));
  const iconColor = iconColorMatch ? iconColorMatch[1] : 'text-indigo-400';

  // Extract description
  const descMatch = content.match(/<p className="text-slate-400">([^<]+)<\/p>/);
  const description = descMatch ? descMatch[1].trim() : '';

  // Extract search placeholder
  const searchMatch = content.match(/placeholder="([^"]+?)"\s+className="bg-slate-900 border/);
  const searchPlaceholder = searchMatch ? searchMatch[1] : 'Search...';

  // Extract export label
  const exportMatch = content.match(/<Download className="w-4 h-4" \/>\s*([^<]+)<\/button>/);
  const exportLabel = exportMatch ? exportMatch[1].trim() : 'Export Report';

  // Extract KPI metrics (4 cards)
  const metrics = [];
  const kpiPattern = /<div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">\s*\n?\s*(.*?)\s*\n?\s*<(\w+)\s+className="w-4 h-4 ([^"]+)"[^/]*\/>\s*\n?\s*<\/div>\s*\n?\s*<div className="text-3xl font-bold text-white mb-2">([^<]+)<\/div>\s*\n?\s*<div className="text-xs ([^"]+)">([^<]+)<\/div>/gs;
  let kpiMatch;
  while ((kpiMatch = kpiPattern.exec(content)) !== null) {
    metrics.push({
      label: kpiMatch[1].trim(),
      icon: kpiMatch[2],
      iconColor: kpiMatch[3],
      value: kpiMatch[4],
      descColor: kpiMatch[5],
      desc: kpiMatch[6],
    });
  }

  // Extract table title
  const tableTitleMatch = content.match(/title="([^"]+?)"\s*\n?\s*headers=/);
  const tableTitle = tableTitleMatch ? tableTitleMatch[1] : 'Data';

  // Extract table headers
  const headersMatch = content.match(/headers=\{(\[[^\]]+\])\}/);
  const tableHeaders = headersMatch ? headersMatch[1] : '[]';

  // Extract table data
  const dataMatch = content.match(/\{(\[{[^]*?\}]).map\(\(row/);
  const tableData = dataMatch ? dataMatch[1] : null;

  // Extract the field keys used in the table rows
  const fieldKeys = [];
  const rowFieldPattern = /\{row\.(\w+)\}/g;
  let fieldMatch;
  const rowSection = content.match(/\.map\(\(row.*?\n([\s\S]*?)<\/PremiumTable>/);
  if (rowSection) {
    while ((fieldMatch = rowFieldPattern.exec(rowSection[1])) !== null) {
      if (!fieldKeys.includes(fieldMatch[1])) {
        fieldKeys.push(fieldMatch[1]);
      }
    }
  }

  // Find the status field (the one used in the ternary chain)
  const statusFieldMatch = content.match(/row\.(\w+) === 'Critical'/);
  const statusField = statusFieldMatch ? statusFieldMatch[1] : null;

  // Find the evidence field
  const evidenceFieldMatch = content.match(/evidenceId=\{row\.(\w+)\}/);
  const evidenceField = evidenceFieldMatch ? evidenceFieldMatch[1] : null;

  // Find the evidence timestamp text
  const evidenceTimestampMatch = content.match(/timestamp="([^"]+?)"\s*\/>\s*\n?\s*<\/td>/);
  const evidenceTimestamp = evidenceTimestampMatch ? evidenceTimestampMatch[1] : 'Record Audited';

  // Determine all icons actually used
  const usedIcons = new Set();
  usedIcons.add(titleIcon);
  metrics.forEach(m => usedIcons.add(m.icon));

  return {
    backHref, backLabel, title, titleIcon, iconColor, description,
    searchPlaceholder, exportLabel, metrics, tableTitle, tableHeaders,
    tableData, fieldKeys, statusField, evidenceField, evidenceTimestamp,
    usedIcons: [...usedIcons],
  };
}

function generateRefactoredPage(data) {
  if (!data || !data.tableData) return null;

  const iconImports = data.usedIcons.join(', ');

  // Build table field columns (excluding status and evidence fields)
  const regularFields = data.fieldKeys.filter(k => k !== data.statusField && k !== data.evidenceField);

  const regularFieldCells = regularFields.map(f => 
    `                <td className="py-4 px-5 text-sm text-slate-400">{row.${f}}</td>`
  ).join('\n');

  const statusCell = data.statusField ? 
    `                <td className="py-4 px-5"><StatusBadge status={row.${data.statusField}} /></td>` : '';

  const evidenceCell = data.evidenceField ?
    `                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.${data.evidenceField}} timestamp="${data.evidenceTimestamp}" /></td>` : '';

  const metricsArray = data.metrics.map(m => {
    const descColorPart = m.descColor && m.descColor !== 'text-slate-500' ? `, descColor: "${m.descColor}"` : '';
    // Escape any < or > in values
    const safeValue = m.value.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return `    { label: "${m.label}", value: "${safeValue}", icon: ${m.icon}, iconColor: "${m.iconColor}", desc: "${m.desc}"${descColorPart} },`;
  }).join('\n');

  return `import React from "react";
import { ${iconImports} } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = ${data.tableData};

const METRICS = [
${metricsArray}
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="${data.title}"
        description="${data.description}"
        icon={${data.titleIcon}}
        iconColor="${data.iconColor}"
        backHref="${data.backHref}"
        backLabel="${data.backLabel}"
        searchPlaceholder="${data.searchPlaceholder}"
        exportLabel="${data.exportLabel}"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="${data.tableTitle}" headers={${data.tableHeaders}}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
${regularFieldCells}
${statusCell}
${evidenceCell}
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
`;
}

// Process all directories
PHASE_DIRS.forEach(dir => {
  const appDir = path.join(__dirname, 'src', 'app', dir);
  if (!fs.existsSync(appDir)) return;

  const subdirs = fs.readdirSync(appDir).filter(f => {
    const fullPath = path.join(appDir, f);
    return fs.statSync(fullPath).isDirectory();
  });

  subdirs.forEach(sub => {
    const pagePath = path.join(appDir, sub, 'page.tsx');
    if (!fs.existsSync(pagePath)) return;

    const content = fs.readFileSync(pagePath, 'utf8');

    // Only refactor pages that match the generated template pattern
    if (!content.includes('PremiumTable') || !content.includes('EvidenceBadge') || !content.includes('ArrowLeft')) {
      skipped++;
      return;
    }

    const data = extractPageData(content, pagePath);
    if (!data || data.metrics.length < 2) {
      skipped++;
      console.log('Skipped (no parseable data):', path.relative(__dirname, pagePath));
      return;
    }

    const refactoredContent = generateRefactoredPage(data);
    if (!refactoredContent) {
      skipped++;
      return;
    }

    fs.writeFileSync(pagePath, refactoredContent);
    refactored++;
    console.log('Refactored:', path.relative(__dirname, pagePath));
  });
});

console.log('\n--- REIIF Page Refactoring Complete ---');
console.log('Refactored:', refactored, 'pages');
console.log('Skipped:', skipped, 'pages');
