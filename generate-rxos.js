const fs = require('fs');
const path = require('path');

const generatePage = (title, description, iconName, kpis, headers, tableData, additionalUI) => {
  const allIcons = ['ArrowLeft', 'Search', 'ShieldCheck', 'Activity', 'Target', 'Download', 'Settings', 'History', 'BrainCircuit', 'Layers', 'Eye', 'Smile', 'Move', 'Languages', 'Accessibility', 'Briefcase', 'Lock', 'LineChart', 'CheckCircle2', 'AlertTriangle', 'XCircle', 'ArrowRight', 'Image', 'Keyboard', 'Timer', 'TrendingUp', 'TrendingDown', 'BookOpen', 'MousePointerClick', 'Database', 'Users', 'FileCode', 'Link'];
  if (!allIcons.includes(iconName)) allIcons.push(iconName);
  
  const uniqueIconsStr = [...new Set(allIcons)].join(', ');

  return `import React from "react";
import Link from "next/link";
import { ${uniqueIconsStr} } from "lucide-react";
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
              <Link href="/experience" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Experience Command Center
              </Link>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2 flex items-center gap-3">
              <${iconName} className="w-8 h-8 text-cyan-500" />
              ${title}
            </h1>
            <p className="text-slate-400">${description}</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="relative">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input type="text" placeholder="Search Experience Logs..." className="bg-slate-900 border border-slate-700 rounded-md pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-cyan-500 w-64 transition-colors" />
             </div>
             <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-md text-sm font-medium transition-colors text-slate-200">
               <Download className="w-4 h-4" /> Export Report
             </button>
          </div>
        </header>

        {/* KPIs */}
        <div className="grid grid-cols-4 gap-4 shrink-0">
          ${kpis.map((kpi, i) => `
          <div className="bg-slate-900/60 border ${i === 0 ? 'border-cyan-900/30 bg-cyan-950/10 shadow-[0_0_15px_rgba(6,182,212,0.05)]' : 'border-slate-800'} rounded-xl p-5">
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
            title="Experience Findings" 
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
}

const routes = {
  'cognition': {
    title: 'Human Cognitive Architecture',
    description: 'The constitutional model for information hierarchy. Ensures users only see what they need, when they need it.',
    icon: 'BrainCircuit',
    kpis: [
      { label: 'Cognitive Score', value: '98%', desc: 'Information hierarchy compliance', icon: 'CheckCircle2', color: 'text-cyan-500', descColor: 'text-cyan-400' },
      { label: 'Avg Layer Depth', value: '2.4', desc: 'Optimal <= 3 layers', icon: 'Layers', color: 'text-blue-500' },
      { label: 'Information Overload', value: '0', desc: 'No dense screens detected', icon: 'ShieldCheck', color: 'text-emerald-500' },
      { label: 'Total Pages', value: '84', desc: 'Governed by RXOS', icon: 'Activity', color: 'text-indigo-500' },
    ],
    headers: ['Route Path', 'Max Depth Layer', 'Executive Summary', 'Immediate Actions', 'Status', 'Trace'],
    data: [
      { path: '/engineering/design', depth: 'Layer 3 (KPIs)', exec: 'Present', act: 'Export Report', status: 'Passed', trace: 'COG-EV-101' },
      { path: '/engineering/audit', depth: 'Layer 4 (Insights)', exec: 'Present', act: 'Export Report', status: 'Passed', trace: 'COG-EV-102' },
      { path: '/legacy/settings', depth: 'Layer 6 (Detail)', exec: 'Missing', act: 'Buried in scroll', status: 'Warning', trace: 'COG-EV-103' },
    ]
  },
  'disclosure': {
    title: 'Progressive Disclosure Governance',
    description: 'Validates dashboard complexity and context-aware navigation flows.',
    icon: 'Eye',
    kpis: [
      { label: 'Disclosure Score', value: '99%', desc: 'No overwhelming screens', icon: 'CheckCircle2', color: 'text-cyan-500', descColor: 'text-cyan-400' },
      { label: 'Nested Workflows', value: '14', desc: 'Drill-down depth > 2', icon: 'Layers', color: 'text-blue-500' },
      { label: 'Complexity Violations', value: '1', desc: 'Requires simplification', icon: 'AlertTriangle', color: 'text-amber-500' },
      { label: 'Focus Score', value: 'A+', desc: 'Action-to-Data Ratio', icon: 'Target', color: 'text-emerald-500' },
    ],
    headers: ['Module Context', 'Information Density', 'Drill-Down Depth', 'Context Aware Navigation', 'Status', 'Evidence'],
    data: [
      { ctx: 'Security Audit Center', dense: 'Low', depth: '1 Click', aware: 'Yes', status: 'Passed', trace: 'DIS-EV-201' },
      { ctx: 'Performance Metrics', dense: 'Medium', depth: '2 Clicks', aware: 'Yes', status: 'Passed', trace: 'DIS-EV-202' },
      { ctx: 'User Access Policies', dense: 'High', depth: '4 Clicks', aware: 'No', status: 'Warning', trace: 'DIS-EV-203' },
    ]
  },
  'feedback': {
    title: 'Dopamine & Feedback Engine',
    description: 'Constitutional governance for positive user reinforcement and completion feedback.',
    icon: 'Smile',
    kpis: [
      { label: 'Feedback Compliance', value: '100%', desc: 'All actions confirmed', icon: 'CheckCircle2', color: 'text-cyan-500', descColor: 'text-cyan-400' },
      { label: 'Micro-Rewards', value: '1,492', desc: 'Generated this week', icon: 'Target', color: 'text-blue-500' },
      { label: 'Generic Responses', value: '0', desc: 'No "Saved" messages', icon: 'ShieldCheck', color: 'text-emerald-500' },
      { label: 'Confidence Score', value: '98/100', desc: 'User certainty metric', icon: 'Activity', color: 'text-indigo-500' },
    ],
    headers: ['Action Context', 'Previous Response', 'RXOS Reinforced Response', 'Confidence Impact', 'Status', 'RuntimeExecution'],
    data: [
      { ctx: 'Save Policy', prev: 'Saved.', rxos: '✓ Policy Verified & Enterprise Synchronized', impact: '+45%', status: 'Compliant', trace: 'FDB-EV-301' },
      { ctx: 'User Access', prev: 'Success', rxos: '✓ Access Granted & Evidence Recorded', impact: '+38%', status: 'Compliant', trace: 'FDB-EV-302' },
      { ctx: 'Delete Record', prev: 'Deleted', rxos: '✓ Record securely archived in Ledger', impact: '+62%', status: 'Compliant', trace: 'FDB-EV-303' },
    ]
  },
  'motion': {
    title: 'Motion Experience Governance',
    description: 'Enterprise governance for motion to communicate system state rather than decorate.',
    icon: 'Move',
    kpis: [
      { label: 'Motion Standard', value: 'Strict', desc: 'State-driven animation', icon: 'ShieldCheck', color: 'text-cyan-500', descColor: 'text-cyan-400' },
      { label: 'Decorative Animation', value: '0%', desc: 'Zero wasted motion', icon: 'CheckCircle2', color: 'text-blue-500' },
      { label: 'Loading State', value: 'Skeleton', desc: 'Reduced perceived wait time', icon: 'Activity', color: 'text-indigo-500' },
      { label: 'Reduced Motion', value: 'Enabled', desc: 'A11Y compliance', icon: 'Accessibility', color: 'text-emerald-500' },
    ],
    headers: ['Interaction Type', 'Motion Purpose', 'Animation Policy', 'Performance', 'Status', 'Trace'],
    data: [
      { type: 'Page Transition', purp: 'Spatial context', pol: 'Opacity fade 200ms', perf: '60fps', status: 'Passed', trace: 'MOT-EV-401' },
      { type: 'Data Loading', purp: 'State awareness', pol: 'Shimmer skeleton', perf: '60fps', status: 'Passed', trace: 'MOT-EV-402' },
      { type: 'Success State', purp: 'Action confirmation', pol: 'Scale-in checkmark 150ms', perf: '60fps', status: 'Passed', trace: 'MOT-EV-403' },
    ]
  },
  'language': {
    title: 'Universal Language System',
    description: 'Ensures every screen communicates in plain, executive-friendly language.',
    icon: 'Languages',
    kpis: [
      { label: 'Language Score', value: '96%', desc: 'Plain language compliance', icon: 'CheckCircle2', color: 'text-cyan-500', descColor: 'text-cyan-400' },
      { label: 'Jargon Detected', value: '3', desc: 'Requires translation', icon: 'AlertTriangle', color: 'text-amber-500' },
      { label: 'Reading Level', value: 'Grade 8', desc: 'Accessible to all roles', icon: 'BookOpen', color: 'text-blue-500' },
      { label: 'Action Clarity', value: '99%', desc: 'Clear button labels', icon: 'MousePointerClick', color: 'text-indigo-500' },
    ],
    headers: ['System Context', 'Technical String', 'RXOS Translation', 'Reading Complexity', 'Status', 'Evidence'],
    data: [
      { ctx: 'Error State', tech: 'RuntimeExecution Failed: SigKill', rxos: 'Deployment stopped: Governance approval is pending.', rdx: 'Low', status: 'Compliant', trace: 'LNG-EV-501' },
      { ctx: 'Empty State', tech: 'Empty ResultSet (0 rows)', rxos: 'No records found matching your filters.', rdx: 'Low', status: 'Compliant', trace: 'LNG-EV-502' },
      { ctx: 'Server Error', tech: '503 Service Unavailable', rxos: 'System is temporarily offline for maintenance.', rdx: 'Low', status: 'Compliant', trace: 'LNG-EV-503' },
    ]
  },
  'accessibility': {
    title: 'Universal Accessibility Experience',
    description: 'Extends accessibility beyond WCAG to cognitive ease and visual learning support.',
    icon: 'Accessibility',
    kpis: [
      { label: 'Universal Score', value: '99/100', desc: 'Beyond WCAG compliance', icon: 'ShieldCheck', color: 'text-cyan-500', descColor: 'text-cyan-400' },
      { label: 'Icon Support', value: '100%', desc: 'Visual cognitive pairing', icon: 'Image', color: 'text-blue-500' },
      { label: 'Keyboard Flow', value: 'Seamless', desc: 'No mouse required', icon: 'Keyboard', color: 'text-indigo-500' },
      { label: 'Cognitive Load', value: 'Low', desc: 'Simplified interfaces', icon: 'BrainCircuit', color: 'text-emerald-500' },
    ],
    headers: ['Accessibility Domain', 'RXOS Requirement', 'Testing Method', 'Pass Rate', 'Status', 'Trace'],
    data: [
      { dom: 'Visual Learning', req: 'All primary actions must have icons', method: 'Automated Audit', pass: '100%', status: 'Passed', trace: 'UAX-EV-601' },
      { dom: 'Color Independence', req: 'Information cannot rely solely on color', method: 'Contrast Analyzer', pass: '100%', status: 'Passed', trace: 'UAX-EV-602' },
      { dom: 'Touch Targets', req: 'Min 44x44px for interactive elements', method: 'Layout Scanner', pass: '98%', status: 'Warning', trace: 'UAX-EV-603' },
    ]
  },
  'executive': {
    title: 'Executive Dashboard Psychology',
    description: 'Constitutional standards for 10-second executive comprehension.',
    icon: 'Briefcase',
    kpis: [
      { label: 'Comprehension Time', value: '< 8s', desc: 'Avg time to understand state', icon: 'Timer', color: 'text-cyan-500', descColor: 'text-cyan-400' },
      { label: 'Structure Match', value: '100%', desc: '7-part layout adhered', icon: 'LayoutTemplate', color: 'text-blue-500' },
      { label: 'KPI Prominence', value: 'High', desc: 'Top-level visibility', icon: 'TrendingUp', color: 'text-indigo-500' },
      { label: 'Dashboards Built', value: '24', desc: 'Enterprise wide', icon: 'Activity', color: 'text-emerald-500' },
    ],
    headers: ['Dashboard Route', 'Summary Present', 'Immediate Actions Clear', 'Evidence Available', 'Status', 'Evidence'],
    data: [
      { route: '/engineering/audit', sum: 'Yes', act: 'Yes (Export)', ev: 'Yes', status: 'Passed', trace: 'EXE-EV-701' },
      { route: '/engineering/design', sum: 'Yes', act: 'Yes (Consistency Score)', ev: 'Yes', status: 'Passed', trace: 'EXE-EV-702' },
      { route: '/experience', sum: 'Yes', act: 'Yes', ev: 'Yes', status: 'Passed', trace: 'EXE-EV-703' },
    ]
  },
  'trust': {
    title: 'Trust & Transparency Governance',
    description: 'Ensures every system decision is understandable and nothing is mysterious.',
    icon: 'Lock',
    kpis: [
      { label: 'Trust Index', value: '100%', desc: 'Full transparency', icon: 'ShieldCheck', color: 'text-cyan-500', descColor: 'text-cyan-400' },
      { label: 'Unexplained Actions', value: '0', desc: 'Zero mysterious events', icon: 'CheckCircle2', color: 'text-blue-500' },
      { label: 'Evidence Traces', value: '1.2M', desc: 'Immutable records linked', icon: 'History', color: 'text-indigo-500' },
      { label: 'Policy Links', value: '100%', desc: 'Every action cites a rule', icon: 'Link', color: 'text-emerald-500' },
    ],
    headers: ['System Decision', 'Context Provided', 'Approver Identified', 'Policy Cited', 'Status', 'RuntimeExecution'],
    data: [
      { dec: 'Access Denied', ctx: 'User lacks Admin Role', app: 'System RBAC', pol: 'Security Protocol Alpha', status: 'Compliant', trace: 'TRU-EV-801' },
      { dec: 'Deployment Blocked', ctx: 'Test coverage dropped 2%', app: 'CI/CD Pipeline', pol: 'Quality Standard V2', status: 'Compliant', trace: 'TRU-EV-802' },
      { dec: 'Data Retention Cleared', ctx: '90-day automated purge', app: 'Compliance Engine', pol: 'GDPR Article 17', status: 'Compliant', trace: 'TRU-EV-803' },
    ]
  },
  'analytics': {
    title: 'Emotional UX Analytics',
    description: 'Measures how the platform feels (friction, hesitation) rather than just how it performs.',
    icon: 'LineChart',
    kpis: [
      { label: 'Revora Experience', value: '94.2', desc: 'UX Maturity Index', icon: 'Target', color: 'text-cyan-500', descColor: 'text-cyan-400' },
      { label: 'Friction Events', value: '-12%', desc: 'Week over week drop', icon: 'TrendingDown', color: 'text-emerald-500' },
      { label: 'User Hesitation', value: 'Low', desc: 'Time-to-action is fast', icon: 'MousePointerClick', color: 'text-blue-500' },
      { label: 'Satisfaction', value: 'A+', desc: 'Executive feedback', icon: 'Smile', color: 'text-indigo-500' },
    ],
    headers: ['Metric Category', 'Current Period', 'Previous Period', 'Trend', 'Status', 'Trace'],
    data: [
      { cat: 'Avg Task Completion Time', cur: '14s', prev: '22s', trend: '-36%', status: 'Passed', trace: 'ANL-EV-901' },
      { cat: 'Form Abandonment Rate', cur: '1.2%', prev: '4.5%', trend: '-73%', status: 'Passed', trace: 'ANL-EV-902' },
      { cat: 'Navigation Back-tracking', cur: '4%', prev: '9%', trend: '-55%', status: 'Passed', trace: 'ANL-EV-903' },
    ]
  },
  'evidence': {
    title: 'Experience Evidence Ledger',
    description: 'Immutable constitutional ledger for experience governance. No UX change bypasses this.',
    icon: 'History',
    kpis: [
      { label: 'UX Traces', value: '4,291', desc: 'Cryptographic records', icon: 'Database', color: 'text-cyan-500', descColor: 'text-cyan-400' },
      { label: 'Human Approvals', value: '842', desc: 'Design sign-offs', icon: 'Users', color: 'text-purple-500' },
      { label: 'Ledger Integrity', value: 'Verified', desc: 'Hash chain valid', icon: 'ShieldCheck', color: 'text-emerald-500' },
      { label: 'Active Rules', value: '14', desc: 'RXOS policies enforced', icon: 'FileCode', color: 'text-amber-500' },
    ],
    headers: ['Execution ID', 'Timestamp', 'Actor / Source', 'Action Performed', 'Policy Decision', 'EvidenceBadge'],
    data: [
      { id: 'EXE-X-1014', time: '2026-07-22T08:14:00Z', actor: 'Automated Language Scan', action: 'Jargon Validation', status: 'Passed', trace: 'EV-X-1014' },
      { id: 'EXE-X-1013', time: '2026-07-22T08:10:22Z', actor: 'Experience Governance', action: 'Cognitive Hierarchy Check', status: 'Passed', trace: 'EV-X-1013' },
      { id: 'EXE-X-1012', time: '2026-07-21T16:45:00Z', actor: 'Sarah Jenkins (VP UX)', action: 'Approved Motion Standard', status: 'Approved', trace: 'EV-X-1012' },
    ]
  }
};

const pageTemplate = `import React from "react";
import Link from "next/link";
import { ArrowRight, BrainCircuit, Eye, Smile, Move, Languages, Accessibility, Briefcase, Lock, LineChart, History } from "lucide-react";

export default function ExperienceCommandCenter() {
  const modules = [
    { name: "Cognitive Architecture", path: "/experience/cognition", icon: BrainCircuit, color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20" },
    { name: "Progressive Disclosure", path: "/experience/disclosure", icon: Eye, color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
    { name: "Dopamine & Feedback", path: "/experience/feedback", icon: Smile, color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20" },
    { name: "Motion Governance", path: "/experience/motion", icon: Move, color: "text-indigo-400", bg: "bg-indigo-500/10", border: "border-indigo-500/20" },
    { name: "Universal Language", path: "/experience/language", icon: Languages, color: "text-rose-400", bg: "bg-rose-500/10", border: "border-rose-500/20" },
    { name: "Accessibility Experience", path: "/experience/accessibility", icon: Accessibility, color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
    { name: "Executive Psychology", path: "/experience/executive", icon: Briefcase, color: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/20" },
    { name: "Trust & Transparency", path: "/experience/trust", icon: Lock, color: "text-blue-500", bg: "bg-blue-500/10", border: "border-blue-500/20" },
    { name: "Emotional UX Analytics", path: "/experience/analytics", icon: LineChart, color: "text-emerald-500", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
    { name: "Experience Evidence", path: "/experience/evidence", icon: History, color: "text-slate-400", bg: "bg-slate-500/10", border: "border-slate-500/20" },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2 flex items-center gap-3">
              <BrainCircuit className="w-8 h-8 text-cyan-500" />
              Revora Experience Operating System (RXOS)
            </h1>
            <p className="text-slate-400">Executive dashboard governing Human-Centered Interaction and Cognitive Architecture.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="px-4 py-2 bg-cyan-950/30 border border-cyan-900/50 rounded-md">
               <span className="text-xs text-cyan-500 font-bold uppercase tracking-wider block mb-1">RXOS Health Score</span>
               <div className="text-xl font-black text-cyan-400">98.4 A+</div>
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
              <div className="text-xs text-slate-500 flex-1">Govern experience rules and human-centered policies.</div>
              <div className="mt-4 flex items-center text-xs font-medium text-slate-400 group-hover:text-cyan-400 transition-colors">
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

const basePath = path.join(__dirname, 'src', 'app', 'experience');
fs.mkdirSync(basePath, { recursive: true });
fs.writeFileSync(path.join(basePath, 'page.tsx'), pageTemplate);

for (const [route, config] of Object.entries(routes)) {
  const routePath = path.join(basePath, route);
  fs.mkdirSync(routePath, { recursive: true });
  fs.writeFileSync(path.join(routePath, 'page.tsx'), generatePage(config.title, config.description, config.icon, config.kpis, config.headers, config.data));
  console.log('Generated route:', route);
}
