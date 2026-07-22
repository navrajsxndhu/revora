const fs = require('fs');
const path = require('path');

const generatePage = (title, description, iconName, kpis, headers, tableData, additionalUI) => `
import React from "react";
import Link from "next/link";
import { ArrowLeft, ${iconName}, Search, ShieldCheck, Activity, Target, Download, Settings, History, Database, Network, Key, Layout, Code2, Cpu, LineChart, FileCode, CheckCircle2, AlertTriangle, Zap, Server } from "lucide-react";
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
              <Link href="/engineering/audit" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Repository Command Center
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
                <input type="text" placeholder="Search Audit Records..." className="bg-slate-900 border border-slate-700 rounded-md pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-blue-500 w-64 transition-colors" />
             </div>
             <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-md text-sm font-medium transition-colors text-slate-200">
               <Download className="w-4 h-4" /> Export Report
             </button>
          </div>
        </header>

        {/* KPIs */}
        <div className="grid grid-cols-4 gap-4 shrink-0">
          ${kpis.map((kpi, i) => `
          <div className="bg-slate-900/60 border ${i === 0 ? 'border-emerald-900/30 bg-emerald-950/10 shadow-[0_0_15px_rgba(16,185,129,0.05)]' : 'border-slate-800'} rounded-xl p-5">
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
                  if (h === 'Status' || h === 'Severity') {
                    return `
                <td className="py-4 px-5">
                  <span className={\`px-2 py-1 rounded text-xs font-bold border flex items-center gap-1 w-max \${
                    row.${key} === 'Critical' || row.${key} === 'High' || row.${key} === 'Failed' ? 'bg-rose-900/20 text-rose-400 border-rose-900/50' : 
                    row.${key} === 'Warning' || row.${key} === 'Pending' ? 'bg-amber-900/20 text-amber-400 border-amber-900/50' :
                    row.${key} === 'Passed' || row.${key} === 'Safe' ? 'bg-emerald-900/20 text-emerald-400 border-emerald-900/50' :
                    'bg-slate-800 text-slate-300 border-slate-700'
                  }\`}>
                    {row.${key}}
                  </span>
                </td>`;
                  }
                  if (h === 'Evidence' || h === 'Trace' || h === 'RuntimeExecution') {
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
  'dead-code': {
    title: 'Dead Code Governance',
    description: 'Constitutional governance for unused code. Human approval is mandatory for any deletion.',
    icon: 'FileCode',
    kpis: [
      { label: 'Unused Components', value: '14', desc: 'Identified for removal', icon: 'Layout', color: 'text-amber-500', descColor: 'text-amber-400' },
      { label: 'Obsolete Hooks', value: '3', desc: 'No references found', icon: 'Code2', color: 'text-rose-500' },
      { label: 'Legacy Services', value: '7', desc: 'Deprecated in v0.9', icon: 'Server', color: 'text-blue-500' },
      { label: 'Clearance Rate', value: '98%', desc: 'Repository cleanliness', icon: 'CheckCircle2', color: 'text-emerald-500' },
    ],
    headers: ['Asset Location', 'Type', 'Last Usage', 'Dependency Count', 'Status', 'Evidence'],
    data: [
      { loc: 'src/components/legacy/OldButton.tsx', type: 'Component', last: '2025-11-12', deps: '0', status: 'Pending', trace: 'DC-EV-1029' },
      { loc: 'src/hooks/useLegacyAuth.ts', type: 'Hook', last: '2026-01-05', deps: '0', status: 'Pending', trace: 'DC-EV-1030' },
      { loc: 'src/lib/services/v1-api.ts', type: 'Service', last: '2025-08-20', deps: '2 (Deprecated)', status: 'Warning', trace: 'DC-EV-1031' },
      { loc: 'src/app/archive/page.tsx', type: 'Page', last: 'Never', deps: '0', status: 'Critical', trace: 'DC-EV-1032' },
    ]
  },
  'imports': {
    title: 'Import & Dependency Governance',
    description: 'Central governance for project dependencies, circular imports, and version drift.',
    icon: 'Network',
    kpis: [
      { label: 'Circular Imports', value: '0', desc: 'System is healthy', icon: 'CheckCircle2', color: 'text-emerald-500', descColor: 'text-emerald-400' },
      { label: 'Unused Imports', value: '2', desc: 'Pending cleanup', icon: 'AlertTriangle', color: 'text-amber-500' },
      { label: 'Version Drift', value: '4', desc: 'Packages out of sync', icon: 'History', color: 'text-blue-500' },
      { label: 'Missing Peers', value: '0', desc: 'All peers satisfied', icon: 'ShieldCheck', color: 'text-emerald-500' },
    ],
    headers: ['Dependency / File', 'Issue Type', 'Impact', 'Suggested Resolution', 'Severity', 'Trace'],
    data: [
      { file: 'src/components/ui/button.tsx', type: 'Unused Import', impact: 'Bundle Size (+2kb)', res: 'Remove framer-motion import', status: 'Warning', trace: 'IMP-EV-401' },
      { file: 'package.json (lucide-react)', type: 'Version Drift', impact: 'Inconsistent Icons', res: 'Update to ^0.340.0', status: 'Pending', trace: 'IMP-EV-402' },
      { file: 'src/lib/utils/format.ts', type: 'Duplicate Import', impact: 'Maintainability', res: 'Merge import statements', status: 'Warning', trace: 'IMP-EV-403' },
    ]
  },
  'routes': {
    title: 'Route & Navigation Governance',
    description: 'Governance for Next.js routing architecture, ensuring metadata completeness and consistency.',
    icon: 'Layout',
    kpis: [
      { label: 'Total Routes', value: '248', desc: 'Active application routes', icon: 'Layout', color: 'text-blue-500' },
      { label: 'Missing Layouts', value: '0', desc: '100% Layout coverage', icon: 'CheckCircle2', color: 'text-emerald-500' },
      { label: 'Metadata Score', value: '99%', desc: 'SEO & Social tags', icon: 'Target', color: 'text-emerald-500', descColor: 'text-emerald-400' },
      { label: 'Broken Links', value: '1', desc: 'Internal navigation drift', icon: 'AlertTriangle', color: 'text-rose-500' },
    ],
    headers: ['Route Path', 'Validation Check', 'Command Palette', 'Metadata', 'Status', 'RuntimeExecution'],
    data: [
      { path: '/engineering/audit', check: 'Valid Layout & Page', cmd: 'Registered', meta: 'Complete', status: 'Passed', trace: 'RT-EV-501' },
      { path: '/legacy-dashboard', check: 'Orphaned Route', cmd: 'Unregistered', meta: 'Missing Title', status: 'Critical', trace: 'RT-EV-502' },
      { path: '/api/v1/health', check: 'API Route Valid', cmd: 'N/A', meta: 'N/A', status: 'Passed', trace: 'RT-EV-503' },
    ]
  },
  'components': {
    title: 'Component Quality Governance',
    description: 'Executive visibility into UI consistency, Tailwind compliance, and Premium component adoption.',
    icon: 'Box', // Using a standard icon
    kpis: [
      { label: 'Component Reuse', value: '87%', desc: 'High modularity score', icon: 'Network', color: 'text-emerald-500' },
      { label: 'Tailwind Compliance', value: '100%', desc: 'Zero inline styles', icon: 'CheckCircle2', color: 'text-blue-500' },
      { label: 'Premium Adoption', value: '92%', desc: 'Enterprise UI standard', icon: 'Activity', color: 'text-purple-500', descColor: 'text-purple-400' },
      { label: 'A11y Score', value: '98/100', desc: 'Accessibility rating', icon: 'Target', color: 'text-emerald-500' },
    ],
    headers: ['Component Name', 'Category', 'Usage Count', 'Design Compliance', 'Status', 'Trace'],
    data: [
      { name: 'PremiumTable', cat: 'Data Display', usage: '142', design: '100% Compliant', status: 'Passed', trace: 'UI-EV-601' },
      { name: 'EvidenceBadge', cat: 'Governance', usage: '380', design: '100% Compliant', status: 'Passed', trace: 'UI-EV-602' },
      { name: 'LegacyCard', cat: 'Container', usage: '12', design: 'Missing Dark Mode', status: 'Warning', trace: 'UI-EV-603' },
    ]
  },
  'types': {
    title: 'TypeScript Governance Center',
    description: 'Constitutional validation of type safety across the enterprise repository.',
    icon: 'Code2',
    kpis: [
      { label: 'Type Safety Index', value: '99.8%', desc: 'Enterprise wide coverage', icon: 'ShieldCheck', color: 'text-emerald-500', descColor: 'text-emerald-400' },
      { label: 'Any Types', value: '0', desc: 'Zero tolerance policy', icon: 'CheckCircle2', color: 'text-blue-500' },
      { label: 'Unknown Types', value: '45', desc: 'Safely cast variables', icon: 'AlertTriangle', color: 'text-amber-500' },
      { label: 'Type Drift', value: '0', desc: 'Schema sync verified', icon: 'Activity', color: 'text-emerald-500' },
    ],
    headers: ['File Location', 'Violation Type', 'Line Number', 'Suggestion', 'Status', 'Evidence'],
    data: [
      { loc: 'packages/revora-cli/src/index.ts', type: 'Unsafe Assignment', line: '42', sugg: 'Cast to unknown before type assertion', status: 'Pending', trace: 'TS-EV-701' },
      { loc: 'src/lib/api-client.ts', type: 'Missing Generic', line: '18', sugg: 'Provide <T> for ApiResponse', status: 'Warning', trace: 'TS-EV-702' },
      { loc: 'src/types/models.ts', type: 'Duplicate Interface', line: '104', sugg: 'Merge with IEnterpriseRecord', status: 'Warning', trace: 'TS-EV-703' },
    ]
  },
  'prisma': {
    title: 'Prisma & Data Layer Audit',
    description: 'Governance for the enterprise data layer. RuntimeKernel compatibility remains untouched.',
    icon: 'Database',
    kpis: [
      { label: 'Schema Integrity', value: '100%', desc: 'Cryptographically verified', icon: 'ShieldCheck', color: 'text-emerald-500', descColor: 'text-emerald-400' },
      { label: 'Duplicate Queries', value: '0', desc: 'Optimized access patterns', icon: 'CheckCircle2', color: 'text-blue-500' },
      { label: 'Unused Imports', value: '0', desc: 'Clean repository access', icon: 'CheckCircle2', color: 'text-emerald-500' },
      { label: 'Migration History', value: 'In Sync', desc: 'Database aligns with schema', icon: 'History', color: 'text-purple-500' },
    ],
    headers: ['Model / Query', 'Audit Metric', 'Performance Impact', 'Relations', 'Status', 'RuntimeExecution'],
    data: [
      { model: 'EvidenceLedger', metric: 'Index Coverage', impact: 'Optimal (O(1))', rel: '7 connections', status: 'Passed', trace: 'DB-EV-801' },
      { model: 'RuntimeKernel', metric: 'Mutation Safety', impact: 'Locked / Read-Only', rel: '12 connections', status: 'Passed', trace: 'DB-EV-802' },
      { model: 'getAgentExecutions()', metric: 'Query Optimization', impact: 'N+1 Detected', rel: 'Execution -> Policy', status: 'Warning', trace: 'DB-EV-803' },
    ]
  },
  'performance': {
    title: 'Performance Optimization Center',
    description: 'Executive visibility into repository performance. Deterministic behavior is preserved.',
    icon: 'Zap',
    kpis: [
      { label: 'Lighthouse Score', value: '98', desc: 'Global average', icon: 'Target', color: 'text-emerald-500', descColor: 'text-emerald-400' },
      { label: 'Static Ratio', value: '84%', desc: 'SSG vs SSR pages', icon: 'Layout', color: 'text-blue-500' },
      { label: 'Avg Route Size', value: '72kb', desc: 'JavaScript payload', icon: 'Download', color: 'text-purple-500' },
      { label: 'Build Time', value: '45s', desc: 'Turbopack optimized', icon: 'Zap', color: 'text-amber-500' },
    ],
    headers: ['Route / Asset', 'Metric', 'Current Value', 'Threshold', 'Status', 'Trace'],
    data: [
      { route: '/mission-control', metric: 'First Load JS', val: '84 kB', thresh: '< 100 kB', status: 'Passed', trace: 'PF-EV-901' },
      { route: '/engineering/audit', metric: 'First Load JS', val: '92 kB', thresh: '< 100 kB', status: 'Passed', trace: 'PF-EV-902' },
      { route: 'globals.css', metric: 'CSS Payload', val: '45 kB', thresh: '< 50 kB', status: 'Passed', trace: 'PF-EV-903' },
      { route: '/digital-twin', metric: 'Hydration Time', val: '320 ms', thresh: '< 200 ms', status: 'Warning', trace: 'PF-EV-904' },
    ]
  },
  'security': {
    title: 'Security & Compliance Audit',
    description: 'Constitutional governance for repository security. No exception can bypass Human Approval.',
    icon: 'ShieldCheck',
    kpis: [
      { label: 'Vulnerabilities', value: '0', desc: 'Zero known CVEs', icon: 'ShieldCheck', color: 'text-emerald-500', descColor: 'text-emerald-400' },
      { label: 'Secret Leaks', value: '0', desc: 'Repository is clean', icon: 'Key', color: 'text-emerald-500' },
      { label: 'CSP Compliance', value: '100%', desc: 'Strict headers enforced', icon: 'Lock', color: 'text-blue-500' },
      { label: 'Dependency Risk', value: 'Low', desc: 'Continuous scanning', icon: 'Activity', color: 'text-purple-500' },
    ],
    headers: ['Security Domain', 'Check Performed', 'Finding', 'Remediation', 'Severity', 'Evidence'],
    data: [
      { dom: 'Environment', check: 'Hardcoded Secrets Scan', find: 'No secrets found', rem: 'N/A', status: 'Safe', trace: 'SEC-EV-001' },
      { dom: 'Dependencies', check: 'NPM Audit', find: '2 low severity advisories', rem: 'npm audit fix', status: 'Warning', trace: 'SEC-EV-002' },
      { dom: 'Headers', check: 'Content Security Policy', find: 'Strict CSP Active', rem: 'N/A', status: 'Safe', trace: 'SEC-EV-003' },
      { dom: 'Authentication', check: 'Session Management', find: 'Secure cookies configured', rem: 'N/A', status: 'Safe', trace: 'SEC-EV-004' },
    ]
  },
  'analytics': {
    title: 'Enterprise Engineering Analytics',
    description: 'Executive engineering intelligence. Visualizes technical debt trends and engineering velocity.',
    icon: 'LineChart',
    kpis: [
      { label: 'Code Quality Score', value: '97.4', desc: 'Enterprise Grade A', icon: 'Target', color: 'text-emerald-500', descColor: 'text-emerald-400' },
      { label: 'Technical Debt', value: '-12%', desc: 'Reduction this quarter', icon: 'TrendingDown', color: 'text-blue-500' },
      { label: 'Build Stability', value: '99.9%', desc: 'CI/CD Success Rate', icon: 'CheckCircle2', color: 'text-emerald-500' },
      { label: 'Velocity', value: 'High', desc: 'Deployment frequency', icon: 'Activity', color: 'text-purple-500' },
    ],
    headers: ['Metric Category', 'Current Period', 'Previous Period', 'Trend', 'Status', 'RuntimeExecution'],
    data: [
      { cat: 'Test Coverage', cur: '92.4%', prev: '91.8%', trend: '+0.6%', status: 'Passed', trace: 'AN-EV-101' },
      { cat: 'Component Modularity', cur: '88%', prev: '82%', trend: '+6.0%', status: 'Passed', trace: 'AN-EV-102' },
      { cat: 'Mean Time to Recovery', cur: '14m', prev: '22m', trend: '-8m', status: 'Passed', trace: 'AN-EV-103' },
      { cat: 'Open Tech Debt Issues', cur: '24', prev: '18', trend: '+6', status: 'Warning', trace: 'AN-EV-104' },
    ]
  },
  'evidence': {
    title: 'Repository Evidence Ledger',
    description: 'Immutable constitutional ledger for repository governance. Nothing changes without evidence.',
    icon: 'History',
    kpis: [
      { label: 'Total Traces', value: '14,293', desc: 'Cryptographic records', icon: 'Database', color: 'text-blue-500' },
      { label: 'Human Approvals', value: '2,104', desc: 'Executive decisions', icon: 'Users', color: 'text-purple-500' },
      { label: 'Ledger Integrity', value: 'Verified', desc: 'Hash chain valid', icon: 'ShieldCheck', color: 'text-emerald-500', descColor: 'text-emerald-400' },
      { label: 'Active Policies', value: '142', desc: 'Governance rules enforced', icon: 'FileCode', color: 'text-amber-500' },
    ],
    headers: ['Execution ID', 'Timestamp', 'Actor / Source', 'Action Performed', 'Policy Decision', 'EvidenceBadge'],
    data: [
      { id: 'EXE-90142', time: '2026-07-22T08:14:00Z', actor: 'Automated Audit', action: 'Security Scan Completed', status: 'Passed', trace: 'EV-99014' },
      { id: 'EXE-90141', time: '2026-07-22T08:10:22Z', actor: 'System Governance', action: 'TypeScript Verification', status: 'Passed', trace: 'EV-99013' },
      { id: 'EXE-90140', time: '2026-07-21T16:45:00Z', actor: 'Sarah Jenkins (VP Eng)', action: 'Approved Dependency Update', status: 'Passed', trace: 'EV-99012' },
      { id: 'EXE-90139', time: '2026-07-21T14:20:00Z', actor: 'Automated Audit', action: 'Performance Degradation Detected', status: 'Warning', trace: 'EV-99011' },
    ]
  }
};

const pageTemplate = `
import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, FileCode2, Network, Layout, Box, Code2, Database, Zap, LineChart, History } from "lucide-react";

export default function EngineeringAuditDashboard() {
  const modules = [
    { name: "Dead Code Governance", path: "/engineering/audit/dead-code", icon: FileCode2, color: "text-rose-400", bg: "bg-rose-500/10", border: "border-rose-500/20" },
    { name: "Import & Dependency", path: "/engineering/audit/imports", icon: Network, color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
    { name: "Route & Navigation", path: "/engineering/audit/routes", icon: Layout, color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20" },
    { name: "Component Quality", path: "/engineering/audit/components", icon: Box, color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
    { name: "TypeScript Governance", path: "/engineering/audit/types", icon: Code2, color: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/20" },
    { name: "Prisma & Data Layer", path: "/engineering/audit/prisma", icon: Database, color: "text-indigo-400", bg: "bg-indigo-500/10", border: "border-indigo-500/20" },
    { name: "Performance Center", path: "/engineering/audit/performance", icon: Zap, color: "text-yellow-400", bg: "bg-yellow-500/10", border: "border-yellow-500/20" },
    { name: "Security & Compliance", path: "/engineering/audit/security", icon: ShieldCheck, color: "text-emerald-500", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
    { name: "Engineering Analytics", path: "/engineering/audit/analytics", icon: LineChart, color: "text-blue-500", bg: "bg-blue-500/10", border: "border-blue-500/20" },
    { name: "Repository Evidence Ledger", path: "/engineering/audit/evidence", icon: History, color: "text-slate-400", bg: "bg-slate-500/10", border: "border-slate-500/20" },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2 flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-emerald-500" />
              Enterprise Repository Command Center
            </h1>
            <p className="text-slate-400">Executive dashboard for repository governance, codebase auditing, and technical quality assurance.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="px-4 py-2 bg-emerald-950/30 border border-emerald-900/50 rounded-md">
               <span className="text-xs text-emerald-500 font-bold uppercase tracking-wider block mb-1">Engineering Health</span>
               <div className="text-xl font-black text-emerald-400">98.4 A+</div>
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

const engineeringPath = path.join(__dirname, 'src', 'app', 'engineering', 'audit');
fs.mkdirSync(engineeringPath, { recursive: true });
fs.writeFileSync(path.join(engineeringPath, 'page.tsx'), pageTemplate);

for (const [route, config] of Object.entries(routes)) {
  const routePath = path.join(engineeringPath, route);
  fs.mkdirSync(routePath, { recursive: true });
  fs.writeFileSync(path.join(routePath, 'page.tsx'), generatePage(config.title, config.description, config.icon, config.kpis, config.headers, config.data));
  console.log('Generated route:', route);
}
