const fs = require('fs');
const path = require('path');

const generatePage = (title, description, iconName, kpis, headers, tableData, additionalUI) => `
import React from "react";
import Link from "next/link";
import { ArrowLeft, ${iconName}, Search, ShieldCheck, Activity, Target, Download, Settings, History, Palette, Box, LayoutTemplate, MousePointerClick, Accessibility, Move, MonitorSmartphone, LineChart, FileSignature, CheckCircle2, AlertTriangle, XCircle, FileCode } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        {/* Header */}
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <div className="mb-4">
              <Link href="/engineering/design" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Design Command Center
              </Link>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2 flex items-center gap-3">
              <${iconName} className="w-8 h-8 text-blue-500" />
              ${title}
            </h1>
            <p className="text-slate-400">${description}</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="relative">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input type="text" placeholder="Search Design Records..." className="bg-slate-900 border border-slate-700 rounded-md pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-blue-500 w-64 transition-colors" />
             </div>
             <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-md text-sm font-medium transition-colors text-slate-200">
               <Download className="w-4 h-4" /> Export Report
             </button>
          </div>
        </header>

        {/* KPIs */}
        <div className="grid grid-cols-4 gap-4 shrink-0">
          ${kpis.map((kpi, i) => `
          <div className="bg-slate-900/60 border ${i === 0 ? 'border-indigo-900/30 bg-indigo-950/10 shadow-[0_0_15px_rgba(99,102,241,0.05)]' : 'border-slate-800'} rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              ${kpi.label}
              <${kpi.icon} className="w-4 h-4 ${kpi.color || 'text-slate-500'}" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">${kpi.value}</div>
            <div className="text-xs ${kpi.descColor || 'text-slate-500'}">${kpi.desc}</div>
          </div>`).join('')}
        </div>

        {/* Content */}
        <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
          ${additionalUI ? additionalUI : ''}
          
          <PremiumTable 
            title="Governance Findings" 
            headers={[${headers.map(h => `"${h}"`).join(', ')}]}
          >
            {${JSON.stringify(tableData)}.map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group cursor-pointer border-b border-slate-800/50">
                ${headers.map((h, j) => {
                  const key = Object.keys(tableData[0])[j];
                  if (h === 'Status' || h === 'Approval Status' || h === 'Severity') {
                    return `
                <td className="py-4 px-5">
                  <span className={\`px-2 py-1 rounded text-xs font-bold border flex items-center gap-1 w-max \${
                    row.${key} === 'Critical' || row.${key} === 'Rejected' || row.${key} === 'Failed' ? 'bg-rose-900/20 text-rose-400 border-rose-900/50' : 
                    row.${key} === 'Warning' || row.${key} === 'Pending Review' || row.${key} === 'Pending' ? 'bg-amber-900/20 text-amber-400 border-amber-900/50' :
                    row.${key} === 'Passed' || row.${key} === 'Approved' || row.${key} === 'Compliant' ? 'bg-emerald-900/20 text-emerald-400 border-emerald-900/50' :
                    'bg-slate-800 text-slate-300 border-slate-700'
                  }\`}>
                    {row.${key}}
                  </span>
                </td>`;
                  }
                  if (h === 'Evidence' || h === 'RuntimeExecution' || h === 'Trace') {
                    return `
                <td className="py-4 px-5">
                  <EvidenceBadge evidenceId={row.${key}} timestamp="Record Audited" />
                </td>`;
                  }
                  return `
                <td className="py-4 px-5 text-sm \${j === 0 ? 'font-medium text-slate-200' : 'text-slate-400'}">
                  {row.${key}}
                </td>`;
                }).join('')}
              </tr>
            ))}
          </PremiumTable>
        </div>

      </div>
    </div>
  );
}
`;

const routes = {
  'system': {
    title: 'Enterprise Design System Registry',
    description: 'The constitutional registry for all design assets, tokens, colors, and typography.',
    icon: 'Palette',
    kpis: [
      { label: 'Token Standardization', value: '100%', desc: 'No hardcoded hex values', icon: 'CheckCircle2', color: 'text-indigo-500', descColor: 'text-indigo-400' },
      { label: 'Registered Tokens', value: '428', desc: 'Active design variables', icon: 'Box', color: 'text-blue-500' },
      { label: 'Pending Approvals', value: '3', desc: 'Design proposals', icon: 'AlertTriangle', color: 'text-amber-500' },
      { label: 'Version', value: 'v2.4.1', desc: 'Latest core update', icon: 'History', color: 'text-emerald-500' },
    ],
    headers: ['Asset Category', 'Token / Variable', 'Usage Instance', 'Approval Status', 'Evidence'],
    data: [
      { cat: 'Color Palette', token: '--tw-color-emerald-500', usage: 'High (4,291)', status: 'Approved', trace: 'DS-EV-1001' },
      { cat: 'Typography Scale', token: 'text-3xl font-bold', usage: 'Medium (84)', status: 'Approved', trace: 'DS-EV-1002' },
      { cat: 'Spacing System', token: 'px-5 py-4', usage: 'High (3,102)', status: 'Approved', trace: 'DS-EV-1003' },
      { cat: 'Motion Standards', token: 'transition-all duration-300', usage: 'Pending Audit', status: 'Pending Review', trace: 'DS-EV-1004' },
    ]
  },
  'components': {
    title: 'Component Standardization Center',
    description: 'Tracks the adoption and maturity of reusable enterprise UI components.',
    icon: 'Box',
    kpis: [
      { label: 'Component Reuse', value: '92%', desc: 'Adoption rate', icon: 'CheckCircle2', color: 'text-emerald-500', descColor: 'text-emerald-400' },
      { label: 'Premium Components', value: '48', desc: 'Certified assets', icon: 'ShieldCheck', color: 'text-blue-500' },
      { label: 'Deprecated Active', value: '5', desc: 'Pending migration', icon: 'AlertTriangle', color: 'text-rose-500' },
      { label: 'Design Violations', value: '0', desc: 'System is clean', icon: 'Target', color: 'text-emerald-500' },
    ],
    headers: ['Component Name', 'Category', 'Adoption Rate', 'Duplicate Instances', 'Status', 'Trace'],
    data: [
      { name: 'PremiumTable', cat: 'Data Display', adopt: '100% migrated', dupe: '0', status: 'Compliant', trace: 'CMP-EV-201' },
      { name: 'EvidenceBadge', cat: 'Governance', adopt: '100% migrated', dupe: '0', status: 'Compliant', trace: 'CMP-EV-202' },
      { name: 'LegacyModal', cat: 'Overlay', adopt: '12% remaining', dupe: '3', status: 'Warning', trace: 'CMP-EV-203' },
      { name: 'DataGrid (Old)', cat: 'Data Display', adopt: '0%', dupe: '1 (Archived)', status: 'Critical', trace: 'CMP-EV-204' },
    ]
  },
  'layouts': {
    title: 'Layout & Navigation Governance',
    description: 'Enterprise governance for application layouts, sidebars, headers, and grids.',
    icon: 'LayoutTemplate',
    kpis: [
      { label: 'Layout Consistency', value: '100%', desc: 'Zero fragmentation', icon: 'CheckCircle2', color: 'text-indigo-500', descColor: 'text-indigo-400' },
      { label: 'Nav Hierarchy', value: 'Verified', desc: 'Depth <= 3 levels', icon: 'ShieldCheck', color: 'text-emerald-500' },
      { label: 'Grid Standard', value: '12-Column', desc: 'Responsive compliance', icon: 'LayoutTemplate', color: 'text-blue-500' },
      { label: 'Anomalies', value: '0', desc: 'No deviations found', icon: 'Target', color: 'text-emerald-500' },
    ],
    headers: ['Layout Domain', 'Validation Rule', 'Checked Routes', 'Compliance Score', 'Status', 'RuntimeExecution'],
    data: [
      { dom: 'Executive Dashboards', rule: 'Header Alignment', routes: '14/14', score: '100%', status: 'Passed', trace: 'LYT-EV-301' },
      { dom: 'Command Centers', rule: 'Sidebar Integration', routes: '24/24', score: '100%', status: 'Passed', trace: 'LYT-EV-302' },
      { dom: 'Data Tables', rule: 'Pagination Position', routes: '86/86', score: '100%', status: 'Passed', trace: 'LYT-EV-303' },
    ]
  },
  'patterns': {
    title: 'UX Pattern Governance',
    description: 'Central governance for interaction design, forms, tables, and search experiences.',
    icon: 'MousePointerClick',
    kpis: [
      { label: 'Pattern Compliance', value: '98.4%', desc: 'Interaction consistency', icon: 'Activity', color: 'text-emerald-500', descColor: 'text-emerald-400' },
      { label: 'Forms Validated', value: '142', desc: 'PremiumForm adoption', icon: 'FileSignature', color: 'text-blue-500' },
      { label: 'Empty States', value: '100%', desc: 'Missing data handled', icon: 'CheckCircle2', color: 'text-indigo-500' },
      { label: 'Pattern Deviations', value: '2', desc: 'Pending executive review', icon: 'AlertTriangle', color: 'text-amber-500' },
    ],
    headers: ['UX Pattern', 'Context / Usage', 'Compliance Rule', 'Findings', 'Status', 'Trace'],
    data: [
      { pat: 'Destructive Action', ctx: 'Resource Deletion', rule: 'Double Confirmation required', find: 'Compliant across 42 locations', status: 'Passed', trace: 'UX-EV-401' },
      { pat: 'Empty State', ctx: 'No Results Found', rule: 'Must include Call-To-Action', find: 'Compliant across 89 locations', status: 'Passed', trace: 'UX-EV-402' },
      { pat: 'Search Input', ctx: 'Global Navigation', rule: 'Autofocus forbidden on mobile', find: 'Violation in /legacy-search', status: 'Warning', trace: 'UX-EV-403' },
    ]
  },
  'accessibility': {
    title: 'Accessibility Governance Center',
    description: 'Constitutional governance for WCAG compliance, contrast, and screen reader support.',
    icon: 'Accessibility',
    kpis: [
      { label: 'A11y Score', value: '99/100', desc: 'Enterprise Grade', icon: 'ShieldCheck', color: 'text-emerald-500', descColor: 'text-emerald-400' },
      { label: 'WCAG 2.1 AA', value: '100%', desc: 'Full Compliance', icon: 'CheckCircle2', color: 'text-blue-500' },
      { label: 'ARIA Attributes', value: 'Verified', desc: 'Semantic HTML pass', icon: 'FileCode', color: 'text-indigo-500' },
      { label: 'Contrast Violations', value: '0', desc: 'All colors accessible', icon: 'Target', color: 'text-emerald-500' },
    ],
    headers: ['WCAG Guideline', 'Audit Metric', 'Tested Elements', 'Pass Rate', 'Status', 'Evidence'],
    data: [
      { wcag: '1.4.3 Contrast (Minimum)', metric: 'Text-to-Background Ratio', elems: '14,291', pass: '100%', status: 'Passed', trace: 'A11Y-EV-501' },
      { wcag: '2.1.1 Keyboard', metric: 'Focus Trapping & Navigation', elems: '3,104', pass: '100%', status: 'Passed', trace: 'A11Y-EV-502' },
      { wcag: '4.1.2 Name, Role, Value', metric: 'Screen Reader Context', elems: '8,492', pass: '99.8%', status: 'Warning', trace: 'A11Y-EV-503' },
    ]
  },
  'motion': {
    title: 'Motion & Animation Governance',
    description: 'Governance for enterprise animations, transition smoothness, and performance.',
    icon: 'Move',
    kpis: [
      { label: 'Motion Standard', value: 'Strict', desc: 'Deterministic durations', icon: 'ShieldCheck', color: 'text-emerald-500', descColor: 'text-emerald-400' },
      { label: 'Reduced Motion', value: 'Supported', desc: 'Prefers-reduced-motion: reduce', icon: 'CheckCircle2', color: 'text-blue-500' },
      { label: 'Avg Transition', value: '250ms', desc: 'Enterprise baseline', icon: 'Activity', color: 'text-indigo-500' },
      { label: 'Jank Detected', value: '0', desc: 'Smooth 60fps rendering', icon: 'Target', color: 'text-emerald-500' },
    ],
    headers: ['Animation Type', 'CSS Standard', 'Performance Impact', 'Accessibility Support', 'Status', 'RuntimeExecution'],
    data: [
      { type: 'Page Transition', css: 'opacity 300ms ease-in-out', impact: 'Negligible (GPU Accelerated)', a11y: 'Disabled if requested', status: 'Compliant', trace: 'MOT-EV-601' },
      { type: 'Hover States', css: 'bg-color 150ms ease', impact: 'Negligible', a11y: 'Safe', status: 'Compliant', trace: 'MOT-EV-602' },
      { type: 'Loading Skeletons', css: 'pulse 2s cubic-bezier', impact: 'Low CPU overhead', a11y: 'Safe', status: 'Compliant', trace: 'MOT-EV-603' },
    ]
  },
  'responsive': {
    title: 'Responsive Experience Governance',
    description: 'Enterprise oversight for responsive design across all viewports and devices.',
    icon: 'MonitorSmartphone',
    kpis: [
      { label: 'Mobile Ready', value: '100%', desc: 'Responsive compliance', icon: 'CheckCircle2', color: 'text-emerald-500', descColor: 'text-emerald-400' },
      { label: 'Breakpoints', value: '5 Standard', desc: 'sm, md, lg, xl, 2xl', icon: 'LayoutTemplate', color: 'text-blue-500' },
      { label: 'Touch Targets', value: '44x44px', desc: 'Minimum interactive size', icon: 'MousePointerClick', color: 'text-indigo-500' },
      { label: 'Overflow Issues', value: '0', desc: 'No horizontal scrolling', icon: 'Target', color: 'text-emerald-500' },
    ],
    headers: ['Viewport Range', 'Layout Strategy', 'Navigation Adaptation', 'Typography Scaling', 'Status', 'Trace'],
    data: [
      { range: 'Mobile (< 640px)', strat: 'Single Column Stack', nav: 'Hamburger / Drawer', type: 'text-sm base', status: 'Passed', trace: 'RES-EV-701' },
      { range: 'Tablet (768px - 1024px)', strat: '2-Column Grid', nav: 'Collapsed Sidebar', type: 'text-base base', status: 'Passed', trace: 'RES-EV-702' },
      { range: 'Desktop (> 1024px)', strat: 'Multi-Column / Max-W', nav: 'Expanded Sidebar', type: 'text-base base', status: 'Passed', trace: 'RES-EV-703' },
    ]
  },
  'analytics': {
    title: 'Visual Quality Analytics',
    description: 'Executive intelligence for UI quality, component adoption, and design debt.',
    icon: 'LineChart',
    kpis: [
      { label: 'UI Maturity Index', value: '98.7', desc: 'Enterprise Grade A', icon: 'Target', color: 'text-emerald-500', descColor: 'text-emerald-400' },
      { label: 'Design Debt', value: 'Minimal', desc: 'Only 3 legacy routes remain', icon: 'CheckCircle2', color: 'text-blue-500' },
      { label: 'Adoption Rate', value: '99%', desc: 'Design System usage', icon: 'TrendingUp', color: 'text-indigo-500' },
      { label: 'Regressions', value: '0', desc: 'Visual tests passed', icon: 'Activity', color: 'text-emerald-500' },
    ],
    headers: ['Metric Category', 'Current Period', 'Previous Period', 'Trend', 'Status', 'Evidence'],
    data: [
      { cat: 'Premium Component Usage', cur: '99.2%', prev: '95.4%', trend: '+3.8%', status: 'Passed', trace: 'VAN-EV-801' },
      { cat: 'Inline Style Violations', cur: '0', prev: '12', trend: '-12', status: 'Passed', trace: 'VAN-EV-802' },
      { cat: 'Accessibility Defects', cur: '2', prev: '8', trend: '-6', status: 'Warning', trace: 'VAN-EV-803' },
    ]
  },
  'reviews': {
    title: 'Design Review Board',
    description: 'Constitutional governance for UI evolution. Critical deviations require Human Approval.',
    icon: 'FileSignature',
    kpis: [
      { label: 'Pending Reviews', value: '2', desc: 'Awaiting executive sign-off', icon: 'AlertTriangle', color: 'text-amber-500', descColor: 'text-amber-400' },
      { label: 'Approved Changes', value: '142', desc: 'This quarter', icon: 'CheckCircle2', color: 'text-emerald-500' },
      { label: 'Waivers Granted', value: '1', desc: 'Temporary exceptions', icon: 'History', color: 'text-blue-500' },
      { label: 'Rejections', value: '14', desc: 'Failed constitutional policy', icon: 'XCircle', color: 'text-rose-500' },
    ],
    headers: ['Proposal / Review Request', 'Submitter', 'Affected Domain', 'Review Board Status', 'Decision', 'Trace'],
    data: [
      { req: 'New "Data Grid Pro" Component', sub: 'Alice Chen (UX Lead)', dom: 'Component Library', status: 'Under Review', dec: 'Pending', trace: 'DRB-EV-901' },
      { req: 'Brand Color Update (Q3)', sub: 'Marketing Dept', dom: 'Design Tokens', status: 'Voting Complete', dec: 'Approved', trace: 'DRB-EV-902' },
      { req: 'Custom Animation Override', sub: 'Vendor Integration', dom: 'Motion Standard', status: 'Rejected', dec: 'Rejected', trace: 'DRB-EV-903' },
    ]
  },
  'evidence': {
    title: 'Enterprise Design Evidence Ledger',
    description: 'Immutable constitutional ledger for design governance. Nothing changes without evidence.',
    icon: 'History',
    kpis: [
      { label: 'Design Traces', value: '8,492', desc: 'Cryptographic UI records', icon: 'Database', color: 'text-blue-500', descColor: 'text-blue-400' },
      { label: 'Human Approvals', value: '1,420', desc: 'Executive decisions', icon: 'Users', color: 'text-purple-500' },
      { label: 'Ledger Integrity', value: 'Verified', desc: 'Hash chain valid', icon: 'ShieldCheck', color: 'text-emerald-500' },
      { label: 'Active Policies', value: '84', desc: 'UX rules enforced', icon: 'FileCode', color: 'text-amber-500' },
    ],
    headers: ['Execution ID', 'Timestamp', 'Actor / Source', 'Action Performed', 'Policy Decision', 'EvidenceBadge'],
    data: [
      { id: 'EXE-D-9014', time: '2026-07-22T08:14:00Z', actor: 'Automated A11y Audit', action: 'Accessibility Scan Completed', status: 'Passed', trace: 'EV-D-9014' },
      { id: 'EXE-D-9013', time: '2026-07-22T08:10:22Z', actor: 'System Governance', action: 'Layout Validation', status: 'Passed', trace: 'EV-D-9013' },
      { id: 'EXE-D-9012', time: '2026-07-21T16:45:00Z', actor: 'David Wright (VP Design)', action: 'Approved Token Migration', status: 'Approved', trace: 'EV-D-9012' },
    ]
  }
};

const pageTemplate = `
import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Palette, Box, LayoutTemplate, MousePointerClick, Accessibility, Move, MonitorSmartphone, LineChart, FileSignature, History } from "lucide-react";

export default function DesignGovernanceDashboard() {
  const modules = [
    { name: "Design System Registry", path: "/engineering/design/system", icon: Palette, color: "text-rose-400", bg: "bg-rose-500/10", border: "border-rose-500/20" },
    { name: "Component Standardization", path: "/engineering/design/components", icon: Box, color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
    { name: "Layout & Navigation", path: "/engineering/design/layouts", icon: LayoutTemplate, color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20" },
    { name: "UX Pattern Governance", path: "/engineering/design/patterns", icon: MousePointerClick, color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
    { name: "Accessibility Center", path: "/engineering/design/accessibility", icon: Accessibility, color: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/20" },
    { name: "Motion & Animation", path: "/engineering/design/motion", icon: Move, color: "text-indigo-400", bg: "bg-indigo-500/10", border: "border-indigo-500/20" },
    { name: "Responsive Governance", path: "/engineering/design/responsive", icon: MonitorSmartphone, color: "text-yellow-400", bg: "bg-yellow-500/10", border: "border-yellow-500/20" },
    { name: "Visual Analytics", path: "/engineering/design/analytics", icon: LineChart, color: "text-emerald-500", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
    { name: "Design Review Board", path: "/engineering/design/reviews", icon: FileSignature, color: "text-blue-500", bg: "bg-blue-500/10", border: "border-blue-500/20" },
    { name: "Design Evidence Ledger", path: "/engineering/design/evidence", icon: History, color: "text-slate-400", bg: "bg-slate-500/10", border: "border-slate-500/20" },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2 flex items-center gap-3">
              <Palette className="w-8 h-8 text-indigo-500" />
              Design Governance Command Center
            </h1>
            <p className="text-slate-400">Executive dashboard for enterprise design governance, consistency, and UI architecture.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="px-4 py-2 bg-indigo-950/30 border border-indigo-900/50 rounded-md">
               <span className="text-xs text-indigo-500 font-bold uppercase tracking-wider block mb-1">Consistency Score</span>
               <div className="text-xl font-black text-indigo-400">99.1 A+</div>
             </div>
          </div>
        </header>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 flex-1 overflow-y-auto pb-12 content-start">
          {modules.map((m, i) => (
            <Link key={i} href={m.path} className="bg-slate-900/40 border border-slate-800 rounded-xl p-5 hover:bg-slate-800/60 hover:border-slate-700 transition-all group flex flex-col h-full">
              <div className={\`w-10 h-10 rounded-lg \${m.bg} \${m.border} border flex items-center justify-center mb-4 shrink-0\`}>
                <m.icon className={\`w-5 h-5 \${m.color}\`} />
              </div>
              <div className="font-bold text-slate-200 mb-1">{m.name}</div>
              <div className="text-xs text-slate-500 flex-1">View comprehensive governance and audit trace data.</div>
              <div className="mt-4 flex items-center text-xs font-medium text-slate-400 group-hover:text-blue-400 transition-colors">
                Open Dashboard <ArrowRight className="w-3 h-3 ml-1" />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
`;

const engineeringPath = path.join(__dirname, 'src', 'app', 'engineering', 'design');
fs.mkdirSync(engineeringPath, { recursive: true });
fs.writeFileSync(path.join(engineeringPath, 'page.tsx'), pageTemplate);

for (const [route, config] of Object.entries(routes)) {
  const routePath = path.join(engineeringPath, route);
  fs.mkdirSync(routePath, { recursive: true });
  fs.writeFileSync(path.join(routePath, 'page.tsx'), generatePage(config.title, config.description, config.icon, config.kpis, config.headers, config.data));
  console.log('Generated route:', route);
}
