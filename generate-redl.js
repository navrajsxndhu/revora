const fs = require('fs');
const path = require('path');

const generatePage = (title, description, iconName, kpis, headers, tableData, additionalUI) => {
  const allIcons = ['ArrowLeft', 'Search', 'ShieldCheck', 'Activity', 'Target', 'Download', 'Settings', 'History', 'BrainCircuit', 'Layers', 'Eye', 'Smile', 'Move', 'Languages', 'Accessibility', 'Briefcase', 'Lock', 'LineChart', 'CheckCircle2', 'AlertTriangle', 'XCircle', 'ArrowRight', 'Image', 'Keyboard', 'Timer', 'TrendingUp', 'TrendingDown', 'BookOpen', 'MousePointerClick', 'Database', 'Users', 'FileCode', 'GraduationCap', 'Map', 'ClipboardList', 'Sparkles', 'HeartHandshake', 'Network', 'Award', 'BarChart2', 'FileSignature', 'Lightbulb', 'Compass', 'MessageSquare', 'FolderHeart', 'Tags', 'Fingerprint', 'Users2', 'Video', 'Megaphone', 'Inbox', 'Calendar', 'Globe', 'Handshake', 'MessageCircle', 'Zap', 'Wind', 'Cpu', 'Mouse', 'Monitor', 'EyeOff', 'Laptop', 'Smartphone', 'Box', 'Maximize', 'Gauge', 'Unlock', 'HelpCircle', 'Terminal', 'ThumbsUp', 'LayoutDashboard', 'Star', 'Bell', 'LineChart', 'UserCircle2', 'RefreshCw', 'Tablet', 'WifiOff', 'ServerCrash', 'MapPin', 'Cast', 'Clock', 'ActivitySquare', 'CheckSquare', 'AlertOctagon', 'HeartPulse', 'Bot', 'Navigation', 'BarChart3', 'Paintbrush', 'Type', 'Wand2', 'Palette', 'Component', 'Sparkle'];
  if (!allIcons.includes(iconName)) allIcons.push(iconName);
  
  const uniqueIconsStr = [...new Set(allIcons)].join(', ');

  return `import React from "react";
import Link from "next/link";
import { ${uniqueIconsStr}, Link as LinkIcon } from "lucide-react";
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
              <Link href="/design-language" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to REDL Command Center
              </Link>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2 flex items-center gap-3">
              <${iconName} className="w-8 h-8 text-orange-500" />
              ${title}
            </h1>
            <p className="text-slate-400">${description}</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="relative">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input type="text" placeholder="Search Design Tokens..." className="bg-slate-900 border border-slate-700 rounded-md pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-orange-500 w-64 transition-colors" />
             </div>
             <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-md text-sm font-medium transition-colors text-slate-200">
               <Download className="w-4 h-4" /> Export Ledger
             </button>
          </div>
        </header>

        {/* KPIs */}
        <div className="grid grid-cols-4 gap-4 shrink-0">
          ${kpis.map((kpi, i) => `
          <div className="bg-slate-900/60 border ${i === 0 ? 'border-orange-900/30 bg-orange-950/10 shadow-[0_0_15px_rgba(249,115,22,0.05)]' : 'border-slate-800'} rounded-xl p-5">
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
            title="Design Governance Metrics" 
            headers={[${headers.map(h => `"${h}"`).join(', ')}]}
          >
            {${JSON.stringify(tableData)}.map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group cursor-pointer border-b border-slate-800/50">
                ${headers.map((h, j) => {
                  const key = Object.keys(tableData[0])[j];
                  if (h === 'Status' || h === 'Adoption' || h === 'Priority' || h === 'State' || h === 'Governance') {
                    return `
                <td className="py-4 px-5">
                  <span className={\`px-2 py-1 rounded text-xs font-bold border flex items-center gap-1 w-max \${
                    row.${key} === 'Critical' || row.${key} === 'High' || row.${key} === 'Deprecated' || row.${key} === 'Low' || row.${key} === 'Blocked' ? 'bg-rose-900/20 text-rose-400 border-rose-900/50' : 
                    row.${key} === 'Warning' || row.${key} === 'Medium' || row.${key} === 'Pending' || row.${key} === 'Transitional' || row.${key} === 'Review' ? 'bg-amber-900/20 text-amber-400 border-amber-900/50' :
                    row.${key} === 'Optimal' || row.${key} === 'Adopted' || row.${key} === 'Approved' || row.${key} === 'Verified' || row.${key} === 'Live' || row.${key} === 'Standard' ? 'bg-emerald-900/20 text-emerald-400 border-emerald-900/50' :
                    'bg-slate-800 text-slate-300 border-slate-700'
                  }\`}>
                    {row.${key}}
                  </span>
                </td>`;
                  }
                  if (h === 'Evidence' || h === 'Trace' || h === 'Execution ID') {
                    return `
                <td className="py-4 px-5">
                  <EvidenceBadge evidenceId={row.${key}} timestamp="Verified Design" />
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
}

const routes = {
  'tokens': {
    title: 'Global Design Token Registry',
    description: 'The constitutional source of truth for all visual primitives across the Enterprise OS.',
    icon: 'Layers',
    kpis: [
      { label: 'Active Tokens', value: '412', desc: 'Variables in production', icon: 'Database', color: 'text-orange-500', descColor: 'text-orange-400' },
      { label: 'Hardcoded Values', value: '0', desc: 'Zero visual tech debt', icon: 'CheckCircle2', color: 'text-emerald-500' },
      { label: 'Token Sync Latency', value: '14ms', desc: 'Propagation speed', icon: 'Zap', color: 'text-blue-500' },
      { label: 'Theme Overrides', value: '84', desc: 'Contextual exceptions', icon: 'Palette', color: 'text-fuchsia-500' },
    ],
    headers: ['Token Name', 'Category', 'Base Value', 'Semantic Role', 'Status', 'Trace'],
    data: [
      { name: '--color-emerald-500', cat: 'Color', base: '#10b981', sem: 'Success, Approved, Healthy', status: 'Standard', trace: 'DTR-EV-101' },
      { name: '--radius-premium', cat: 'Border Radius', base: '0.75rem', sem: 'Cards, Modals, Drawers', status: 'Standard', trace: 'DTR-EV-102' },
      { name: '--shadow-elevation-2', cat: 'Elevation', base: '0 4px 6px -1px rgb(0 0 0 / 0.1)', sem: 'Dropdowns, Hover States', status: 'Standard', trace: 'DTR-EV-103' },
    ]
  },
  'components': {
    title: 'Premium Component Library',
    description: 'The canonical registry for every governed UI component used to assemble the Enterprise OS.',
    icon: 'Component',
    kpis: [
      { label: 'Governed Components', value: '84', desc: 'Premium React components', icon: 'Box', color: 'text-orange-500', descColor: 'text-orange-400' },
      { label: 'Design System Usage', value: '100%', desc: 'Platform adherence', icon: 'ShieldCheck', color: 'text-emerald-500' },
      { label: 'A11y Coverage', value: '100%', desc: 'WCAG 2.1 AA certified', icon: 'Accessibility', color: 'text-blue-500' },
      { label: 'Component Variants', value: '412', desc: 'Pre-approved states', icon: 'Layers', color: 'text-indigo-500' },
    ],
    headers: ['Component Name', 'Primary Use Case', 'Motion Profile', 'Accessibility Rank', 'Adoption', 'Trace'],
    data: [
      { name: 'PremiumTable', use: 'High-density data grids', prof: 'Hover Highlight (150ms)', rank: 'AA (Full Keyboard)', status: 'Adopted', trace: 'PCL-EV-201' },
      { name: 'EvidenceBadge', use: 'Cryptographic UI signatures', prof: 'Subtle Pulse (Infinite)', rank: 'AA (Screen Reader)', status: 'Adopted', trace: 'PCL-EV-202' },
      { name: 'ExecutiveCard', use: 'KPI & Health Metrics', prof: 'Elevate on Hover', rank: 'AAA (Contrast)', status: 'Adopted', trace: 'PCL-EV-203' },
    ]
  },
  'motion': {
    title: 'Motion & Micro-Interaction Studio',
    description: 'Governance for every movement, ensuring motion communicates state, intent, and progress—never decoration.',
    icon: 'Wand2',
    kpis: [
      { label: 'Motion Tokens', value: '14', desc: 'Governed timing curves', icon: 'Timer', color: 'text-orange-500', descColor: 'text-orange-400' },
      { label: 'Reduced Motion', value: 'Active', desc: 'Accessibility compliance', icon: 'Accessibility', color: 'text-emerald-500' },
      { label: 'Avg Animation Time', value: '200ms', desc: 'Snappy responsiveness', icon: 'Zap', color: 'text-blue-500' },
      { label: 'Staggered Lists', value: '84', desc: 'Progressive loading UIs', icon: 'Layers', color: 'text-fuchsia-500' },
    ],
    headers: ['Interaction', 'CSS Transition', 'Timing Function', 'Purpose', 'Status', 'Execution ID'],
    data: [
      { int: 'Button Hover', trans: 'background-color, transform', time: '150ms ease-in-out', purp: 'Acknowledge interactivity', status: 'Standard', trace: 'MMS-EV-301' },
      { int: 'Modal Enter', trans: 'opacity, scale', time: '200ms cubic-bezier', purp: 'Focus user attention', status: 'Standard', trace: 'MMS-EV-302' },
      { int: 'Error Shake', trans: 'transform (keyframes)', time: '400ms linear', purp: 'Indicate invalid action', status: 'Standard', trace: 'MMS-EV-303' },
    ]
  },
  'themes': {
    title: 'Enterprise Theme System',
    description: 'Universal appearance governance supporting contrast modes, executive branding, and ambient light adjustments.',
    icon: 'Palette',
    kpis: [
      { label: 'Supported Themes', value: '8', desc: 'Active environment modes', icon: 'Image', color: 'text-orange-500', descColor: 'text-orange-400' },
      { label: 'Dark Mode Adoption', value: '72%', desc: 'User preference', icon: 'EyeOff', color: 'text-indigo-500' },
      { label: 'Contrast Compliance', value: '100%', desc: 'WCAG AAA in High Contrast', icon: 'Eye', color: 'text-emerald-500' },
      { label: 'Theme Switch Time', value: '0ms', desc: 'CSS Variables mapping', icon: 'Zap', color: 'text-blue-500' },
    ],
    headers: ['Theme Identity', 'Primary Contrast Ratio', 'Target Persona', 'Energy Impact', 'State', 'Trace'],
    data: [
      { id: 'Revora Dark (Default)', cont: '8.4:1', targ: 'Engineers, Analysts', eng: 'Low (OLED Optimized)', state: 'Active', trace: 'ETS-EV-401' },
      { id: 'Executive Light', cont: '7.2:1', targ: 'C-Suite, Daytime Ops', eng: 'Medium', state: 'Active', trace: 'ETS-EV-402' },
      { id: 'High Contrast Mode', cont: '21:1', targ: 'Accessibility Users', eng: 'Variable', state: 'Active', trace: 'ETS-EV-403' },
    ]
  },
  'typography': {
    title: 'Typography & Content Hierarchy',
    description: 'Standardizes the visual reading pattern to ensure enterprise information is immediately understandable.',
    icon: 'Type',
    kpis: [
      { label: 'Font Families', value: '2', desc: 'Primary & Monospace', icon: 'Type', color: 'text-orange-500', descColor: 'text-orange-400' },
      { label: 'Scale Steps', value: '12', desc: 'From xs to 9xl', icon: 'Layers', color: 'text-blue-500' },
      { label: 'Legibility Score', value: '99%', desc: 'Readability index', icon: 'Eye', color: 'text-emerald-500' },
      { label: 'Font Loading', value: 'Swap', desc: 'Zero layout shift (CLS)', icon: 'Move', color: 'text-fuchsia-500' },
    ],
    headers: ['Text Semantic', 'Font Size (rem)', 'Font Weight', 'Line Height', 'Governance', 'Trace'],
    data: [
      { sem: 'Executive Headline (H1)', size: '3.0rem (48px)', weight: '800 (ExtraBold)', height: '1.1', gov: 'Verified', trace: 'TCH-EV-501' },
      { sem: 'Data Grid Cell', size: '0.875rem (14px)', weight: '400 (Regular)', height: '1.25', gov: 'Verified', trace: 'TCH-EV-502' },
      { id: 'Cryptographic Hash', size: '0.75rem (12px)', weight: '500 (Medium)', height: '1.5', gov: 'Verified', trace: 'TCH-EV-503' },
    ]
  },
  'icons': {
    title: 'Iconography & Visual Language',
    description: 'Unified icon governance providing a universal, language-agnostic way to identify actions and status.',
    icon: 'Sparkle',
    kpis: [
      { label: 'Governed Icons', value: '1,420', desc: 'Lucide-React integration', icon: 'Image', color: 'text-orange-500', descColor: 'text-orange-400' },
      { label: 'Stroke Consistency', value: '2px', desc: 'Uniform visual weight', icon: 'Target', color: 'text-blue-500' },
      { label: 'Semantic Usage', value: '98%', desc: 'Correct icon application', icon: 'CheckCircle2', color: 'text-emerald-500' },
      { label: 'Aria Labels', value: '100%', desc: 'Screen reader accessible', icon: 'Accessibility', color: 'text-fuchsia-500' },
    ],
    headers: ['Icon Name', 'Visual Weight', 'Semantic Meaning', 'Usage Context', 'Status', 'Execution ID'],
    data: [
      { name: 'ShieldCheck', weight: '2px (Solid)', mean: 'Verified, Secure, Governed', ctx: 'Evidence Badges, Trust KPIs', status: 'Adopted', trace: 'IVL-EV-601' },
      { name: 'AlertOctagon', weight: '2px', mean: 'Critical Failure, Incident', ctx: 'Situation Room, High-Risk Modals', status: 'Adopted', trace: 'IVL-EV-602' },
      { name: 'ActivitySquare', weight: '2px', mean: 'Telemetry, Live Data', ctx: 'Performance Dashboards, Logs', status: 'Adopted', trace: 'IVL-EV-603' },
    ]
  },
  'polish': {
    title: 'Experience Polish Center',
    description: 'Measures the emotional and qualitative premium feel of the enterprise interface.',
    icon: 'Sparkles',
    kpis: [
      { label: 'Premium Index', value: '9.4/10', desc: 'Overall UX Quality', icon: 'Star', color: 'text-orange-500', descColor: 'text-orange-400' },
      { label: 'Layout Shifts (CLS)', value: '0.00', desc: 'Perfect visual stability', icon: 'CheckCircle2', color: 'text-emerald-500' },
      { label: 'Frame Drops', value: '0', desc: '60fps interactions', icon: 'Zap', color: 'text-blue-500' },
      { label: 'User Satisfaction', value: '99%', desc: 'Internal survey score', icon: 'Smile', color: 'text-emerald-500' },
    ],
    headers: ['Polish Metric', 'Target Baseline', 'Current Measurement', 'Impact Area', 'State', 'Trace'],
    data: [
      { met: 'Interaction Latency (INP)', targ: '< 100ms', curr: '42ms (Excellent)', imp: 'Button clicks, Dropdowns', state: 'Optimal', trace: 'EPC-EV-701' },
      { met: 'Empty State Delight', targ: 'Illustration + Action', curr: '100% Coverage', imp: 'First-time user experience', state: 'Optimal', trace: 'EPC-EV-702' },
      { met: 'Loading Skeleton Sync', targ: 'Matches Final UI Grid', curr: '98% Aligned', imp: 'Perceived performance', state: 'Optimal', trace: 'EPC-EV-703' },
    ]
  },
  'analytics': {
    title: 'Design Analytics',
    description: 'Executive intelligence demonstrating the ROI and adoption of the enterprise design language.',
    icon: 'BarChart2',
    kpis: [
      { label: 'Design System ROI', value: '$4.2M', desc: 'Saved engineering hours', icon: 'LineChart', color: 'text-orange-500', descColor: 'text-orange-400' },
      { label: 'Visual Debt', value: 'Near Zero', desc: 'Hardcoded styles removed', icon: 'CheckCircle2', color: 'text-emerald-500' },
      { label: 'Component Reuse', value: '94%', desc: 'Platform efficiency', icon: 'Layers', color: 'text-blue-500' },
      { label: 'Codebase Shrink', value: '-14%', desc: 'Removed custom CSS', icon: 'TrendingDown', color: 'text-emerald-500' },
    ],
    headers: ['Design Asset', 'Weekly Impressions', 'Adoption Rate', 'Orphaned Instances', 'Health', 'Evidence'],
    data: [
      { ass: 'PremiumTable (v2.4)', imp: '14.2M', adopt: '100% of Grids', orph: '0 Legacy Tables', health: 'Optimal', trace: 'DAN-EV-801' },
      { ass: 'Design Tokens (Color)', imp: '1.4B', adopt: '99.8% of UI', orph: '14 hex codes (Tech Debt)', health: 'Optimal', trace: 'DAN-EV-802' },
      { ass: 'Executive Modal', imp: '412K', adopt: '100% of Approvals', orph: '0 Custom Overlays', health: 'Optimal', trace: 'DAN-EV-803' },
    ]
  },
  'governance': {
    title: 'Design Governance Board',
    description: 'Constitutional oversight preventing visual drift and ensuring every addition meets premium standards.',
    icon: 'ShieldCheck',
    kpis: [
      { label: 'Visual Reviews', value: '142', desc: 'Pull requests analyzed', icon: 'Search', color: 'text-orange-500', descColor: 'text-orange-400' },
      { label: 'Design Drift', value: '0%', desc: 'Strict UI enforcement', icon: 'Lock', color: 'text-emerald-500' },
      { label: 'Exceptions Granted', value: '2', desc: 'Contextual overrides', icon: 'ClipboardList', color: 'text-amber-500' },
      { label: 'A11y Violations', value: '0', desc: 'Blocked at CI/CD', icon: 'XCircle', color: 'text-emerald-500' },
    ],
    headers: ['Governance Rule', 'Enforcement Mechanism', 'Violations Blocked', 'Approval Required', 'Governance', 'Execution ID'],
    data: [
      { rule: 'No custom HEX colors', enf: 'Linter (stylelint)', block: '42 Commits', req: 'Design System Lead', gov: 'Verified', trace: 'DGB-EV-901' },
      { rule: 'Interactive elements must have focus state', enf: 'CI/CD A11y Scanner', block: '14 Commits', req: 'Accessibility Auditor', gov: 'Verified', trace: 'DGB-EV-902' },
      { rule: 'Typography must use Rem scaling', enf: 'PR Review Bot', block: '12 Commits', req: 'Design Tokens Team', gov: 'Verified', trace: 'DGB-EV-903' },
    ]
  },
  'evidence': {
    title: 'Design Evidence Ledger',
    description: 'Immutable ledger for design evolution, proving that every visual change was constitutionally approved.',
    icon: 'History',
    kpis: [
      { label: 'Design Commits', value: '4.2K', desc: 'Cryptographically signed', icon: 'Database', color: 'text-orange-500', descColor: 'text-orange-400' },
      { label: 'Ledger Integrity', value: 'Verified', desc: 'SHA-256 Validated', icon: 'ShieldCheck', color: 'text-emerald-500' },
      { label: 'Token Updates', value: '14', desc: 'Global variable changes', icon: 'Zap', color: 'text-blue-500' },
      { label: 'Figma Syncs', value: '142', desc: 'Design-to-code imports', icon: 'Download', color: 'text-indigo-500' },
    ],
    headers: ['Event ID', 'Timestamp', 'Initiator', 'Design Action', 'Constitutional Governance', 'EvidenceBadge'],
    data: [
      { id: 'DES-E-6601', time: '2026-07-22T10:05:00Z', init: 'Lead Designer', act: 'Updated --color-emerald-500 contrast ratio', gov: 'Policy: WCAG AAA Contrast', trace: 'EV-D-6601' },
      { id: 'DES-E-6602', time: '2026-07-22T10:02:15Z', init: 'Frontend Architect', act: 'Released PremiumTable v2.4', gov: 'Policy: Component Versioning', trace: 'EV-D-6602' },
      { id: 'DES-E-6603', time: '2026-07-22T09:55:00Z', init: 'CI/CD Pipeline', act: 'Blocked PR: Hardcoded font-size (px)', gov: 'Policy: Token Enforcement', trace: 'EV-D-6603' },
    ]
  }
};

const pageTemplate = `import React from "react";
import Link from "next/link";
import { ArrowRight, Paintbrush, Layers, Component, Wand2, Palette, Type, Sparkle, Sparkles, BarChart2, ShieldCheck, History } from "lucide-react";

export default function DesignCommandCenter() {
  const modules = [
    { name: "Token Registry", path: "/design-language/tokens", icon: Layers, color: "text-indigo-400", bg: "bg-indigo-500/10", border: "border-indigo-500/20" },
    { name: "Component Library", path: "/design-language/components", icon: Component, color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20" },
    { name: "Motion Studio", path: "/design-language/motion", icon: Wand2, color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
    { name: "Theme System", path: "/design-language/themes", icon: Palette, color: "text-rose-400", bg: "bg-rose-500/10", border: "border-rose-500/20" },
    { name: "Typography", path: "/design-language/typography", icon: Type, color: "text-pink-400", bg: "bg-pink-500/10", border: "border-pink-500/20" },
    { name: "Iconography", path: "/design-language/icons", icon: Sparkle, color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20" },
    { name: "Experience Polish", path: "/design-language/polish", icon: Sparkles, color: "text-yellow-400", bg: "bg-yellow-500/10", border: "border-yellow-500/20" },
    { name: "Design Analytics", path: "/design-language/analytics", icon: BarChart2, color: "text-blue-500", bg: "bg-blue-500/10", border: "border-blue-500/20" },
    { name: "Governance Board", path: "/design-language/governance", icon: ShieldCheck, color: "text-emerald-500", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
    { name: "Evidence Ledger", path: "/design-language/evidence", icon: History, color: "text-slate-400", bg: "bg-slate-500/10", border: "border-slate-500/20" },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2 flex items-center gap-3">
              <Paintbrush className="w-8 h-8 text-orange-500" />
              Enterprise Design Language (REDL)
            </h1>
            <p className="text-slate-400">The constitutional visual system governing every pixel, token, and micro-interaction.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="px-4 py-2 bg-orange-950/30 border border-orange-900/50 rounded-md">
               <span className="text-xs text-orange-500 font-bold uppercase tracking-wider block mb-1">Visual Fidelity</span>
               <div className="text-xl font-black text-orange-400">Apple-Class</div>
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
              <div className="text-xs text-slate-500 flex-1">Govern UI component standards.</div>
              <div className="mt-4 flex items-center text-xs font-medium text-slate-400 group-hover:text-orange-400 transition-colors">
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

const basePath = path.join(__dirname, 'src', 'app', 'design-language');
fs.mkdirSync(basePath, { recursive: true });
fs.writeFileSync(path.join(basePath, 'page.tsx'), pageTemplate);

for (const [route, config] of Object.entries(routes)) {
  const routePath = path.join(basePath, route);
  fs.mkdirSync(routePath, { recursive: true });
  fs.writeFileSync(path.join(routePath, 'page.tsx'), generatePage(config.title, config.description, config.icon, config.kpis, config.headers, config.data));
  console.log('Generated route:', route);
}
