const fs = require('fs');
const path = require('path');

const generatePage = (title, description, iconName, kpis, headers, tableData, additionalUI) => {
  const allIcons = ['ArrowLeft', 'Search', 'ShieldCheck', 'Activity', 'Target', 'Download', 'Settings', 'History', 'BrainCircuit', 'Layers', 'Eye', 'Smile', 'Move', 'Languages', 'Accessibility', 'Briefcase', 'Lock', 'LineChart', 'CheckCircle2', 'AlertTriangle', 'XCircle', 'ArrowRight', 'Image', 'Keyboard', 'Timer', 'TrendingUp', 'TrendingDown', 'BookOpen', 'MousePointerClick', 'Database', 'Users', 'FileCode'];
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
              <Link href="/intelligence" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Intelligence Command Center
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
                <input type="text" placeholder="Search Intelligence Logs..." className="bg-slate-900 border border-slate-700 rounded-md pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-cyan-500 w-64 transition-colors" />
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
            title="Intelligence Insights & Recommendations" 
            headers={[${headers.map(h => `"${h}"`).join(', ')}]}
          >
            {${JSON.stringify(tableData)}.map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group cursor-pointer border-b border-slate-800/50">
                ${headers.map((h, j) => {
                  const key = Object.keys(tableData[0])[j];
                  if (h === 'Urgency' || h === 'Priority' || h === 'Status' || h === 'Approval Status') {
                    return `
                <td className="py-4 px-5">
                  <span className={\`px-2 py-1 rounded text-xs font-bold border flex items-center gap-1 w-max \${
                    row.${key} === 'Critical' || row.${key} === 'High' || row.${key} === 'Rejected' || row.${key} === 'Failed' ? 'bg-rose-900/20 text-rose-400 border-rose-900/50' : 
                    row.${key} === 'Warning' || row.${key} === 'Medium' || row.${key} === 'Pending Review' || row.${key} === 'Pending' ? 'bg-amber-900/20 text-amber-400 border-amber-900/50' :
                    row.${key} === 'Low' || row.${key} === 'Normal' || row.${key} === 'Passed' || row.${key} === 'Approved' || row.${key} === 'Compliant' ? 'bg-emerald-900/20 text-emerald-400 border-emerald-900/50' :
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
  'workspace': {
    title: 'Adaptive Workspace',
    description: 'Personalized dashboards driven by context, workload, and governance needs.',
    icon: 'LayoutDashboard',
    kpis: [
      { label: 'Role Context', value: 'VP Eng', desc: 'Current adaptive state', icon: 'Briefcase', color: 'text-cyan-500', descColor: 'text-cyan-400' },
      { label: 'Relevant Modules', value: '4', desc: 'Auto-prioritized today', icon: 'Layers', color: 'text-blue-500' },
      { label: 'Pending Actions', value: '12', desc: 'Requires attention', icon: 'AlertTriangle', color: 'text-amber-500' },
      { label: 'Focus Priority', value: 'Security', desc: 'Immediate business objective', icon: 'ShieldCheck', color: 'text-emerald-500' },
    ],
    headers: ['Workspace Module', 'Context Match', 'Time-of-day Factor', 'Priority', 'Trace'],
    data: [
      { module: 'Security Audit', match: '98%', tod: 'Morning Review', priority: 'High', trace: 'AWS-EV-101' },
      { module: 'Architecture Governance', match: '94%', tod: 'Anytime', priority: 'Medium', trace: 'AWS-EV-102' },
      { module: 'Cost Optimization', match: '82%', tod: 'End of Month', priority: 'Low', trace: 'AWS-EV-103' },
    ]
  },
  'guidance': {
    title: 'Predictive Guidance Engine',
    description: 'Anticipates enterprise bottlenecks, compliance deadlines, and operational risks.',
    icon: 'Map',
    kpis: [
      { label: 'Guidance Accuracy', value: '96%', desc: 'Accepted recommendations', icon: 'Target', color: 'text-cyan-500', descColor: 'text-cyan-400' },
      { label: 'Risk Preventions', value: '14', desc: 'In last 30 days', icon: 'ShieldCheck', color: 'text-emerald-500' },
      { label: 'Pending Deadlines', value: '2', desc: 'Within 48 hours', icon: 'Timer', color: 'text-amber-500' },
      { label: 'Resource Alerts', value: '0', desc: 'Capacity is stable', icon: 'Activity', color: 'text-blue-500' },
    ],
    headers: ['Predicted Event', 'Confidence', 'Business Impact', 'Recommended Action', 'Urgency', 'Evidence'],
    data: [
      { event: 'SLA Violation Risk (API)', conf: '92%', impact: 'High Revenue Risk', act: 'Scale read replicas', urgency: 'Critical', trace: 'PGE-EV-201' },
      { event: 'Compliance Audit Due', conf: '100%', impact: 'Regulatory Fine', act: 'Run SOC2 Governance Check', urgency: 'High', trace: 'PGE-EV-202' },
      { event: 'Storage Capacity Limit', conf: '74%', impact: 'Degraded Performance', act: 'Archive logs older than 90d', urgency: 'Medium', trace: 'PGE-EV-203' },
    ]
  },
  'briefing': {
    title: 'Executive Daily Briefing',
    description: 'Distills enterprise state into a prioritized, plain-language operational summary.',
    icon: 'BookOpen',
    kpis: [
      { label: 'Briefing State', value: 'Normal', desc: 'No critical incidents', icon: 'CheckCircle2', color: 'text-emerald-500', descColor: 'text-emerald-400' },
      { label: 'Req. Approvals', value: '3', desc: 'Pending signature', icon: 'FileSignature', color: 'text-amber-500' },
      { label: 'Est. Completion', value: '18 min', desc: 'Total time to clear queue', icon: 'Timer', color: 'text-blue-500' },
      { label: 'Deployments', value: '1', desc: 'Production release ready', icon: 'Rocket', color: 'text-indigo-500' },
    ],
    headers: ['Briefing Item', 'Category', 'Required Effort', 'Constitutional Priority', 'Status', 'Trace'],
    data: [
      { item: 'Review production deployment: Frontend V2', cat: 'Release Management', effort: 'Low (~2m)', priority: 'High', status: 'Pending Review', trace: 'EDB-EV-301' },
      { item: 'Approve 2 security policy exemptions', cat: 'Security Governance', effort: 'Medium (~10m)', priority: 'Critical', status: 'Pending Review', trace: 'EDB-EV-302' },
      { item: 'Finance reporting closes in 4 hours', cat: 'Compliance', effort: 'High (~45m)', priority: 'High', status: 'Pending Review', trace: 'EDB-EV-303' },
    ]
  },
  'work': {
    title: 'Smart Work Queue',
    description: 'Intelligently sorts approvals, reviews, and tasks based on constitutional urgency.',
    icon: 'ClipboardList',
    kpis: [
      { label: 'Queue Depth', value: '12', desc: 'Total pending tasks', icon: 'Layers', color: 'text-cyan-500', descColor: 'text-cyan-400' },
      { label: 'Critical Items', value: '2', desc: 'Immediate attention required', icon: 'AlertTriangle', color: 'text-rose-500' },
      { label: 'Avg Clear Time', value: '4.2h', desc: 'Task lifecycle speed', icon: 'Timer', color: 'text-emerald-500' },
      { label: 'Delegated Tasks', value: '5', desc: 'Assigned to others', icon: 'Users', color: 'text-blue-500' },
    ],
    headers: ['Task Description', 'Source Module', 'SLA Remaining', 'Assigned Priority', 'Urgency', 'RuntimeExecution'],
    data: [
      { task: 'Approve IAM Role Expansion', src: 'Security Governance', sla: '2h 15m', ap: 'Tier 1 Security', urgency: 'Critical', trace: 'SWQ-EV-401' },
      { task: 'Review Architectural PR #4192', src: 'Engineering Audit', sla: '14h 20m', ap: 'Core Infrastructure', urgency: 'High', trace: 'SWQ-EV-402' },
      { task: 'Acknowledge Q3 Budget Adjustments', src: 'Finance Ops', sla: '3 Days', ap: 'Quarterly Planning', urgency: 'Medium', trace: 'SWQ-EV-403' },
    ]
  },
  'context': {
    title: 'Enterprise Context Engine',
    description: 'Maps relationships between infrastructure, teams, and business outcomes.',
    icon: 'Network',
    kpis: [
      { label: 'Context Nodes', value: '14.2K', desc: 'Mapped relationships', icon: 'Database', color: 'text-cyan-500', descColor: 'text-cyan-400' },
      { label: 'Impact Vectors', value: '84', desc: 'Current dependency chains', icon: 'GitMerge', color: 'text-blue-500' },
      { label: 'Orphaned Assets', value: '0', desc: '100% resource tracking', icon: 'ShieldCheck', color: 'text-emerald-500' },
      { label: 'Context Depth', value: 'Level 6', desc: 'Max relational depth', icon: 'Layers', color: 'text-indigo-500' },
    ],
    headers: ['Asset / Entity', 'Relationship Type', 'Connected To', 'Business Capability', 'Status', 'Trace'],
    data: [
      { asset: 'Auth Microservice', type: 'Depends On', to: 'Redis Cache Cluster', cap: 'User Authentication', status: 'Compliant', trace: 'CTX-EV-501' },
      { asset: 'Payment Gateway', type: 'Managed By', to: 'Team FinTech Core', cap: 'Revenue Processing', status: 'Compliant', trace: 'CTX-EV-502' },
      { asset: 'Legacy User DB', type: 'Migrating To', to: 'Global Postgres Ring', cap: 'Data Storage', status: 'Warning', trace: 'CTX-EV-503' },
    ]
  },
  'decisions': {
    title: 'Decision Intelligence',
    description: 'Simulates the business and technical impact of decisions before they execute.',
    icon: 'Brain',
    kpis: [
      { label: 'Decisions Guided', value: '1,492', desc: 'In last 30 days', icon: 'BrainCircuit', color: 'text-cyan-500', descColor: 'text-cyan-400' },
      { label: 'Rollbacks Saved', value: '12', desc: 'Prevented failures', icon: 'Undo', color: 'text-emerald-500' },
      { label: 'Policy Checks', value: '100%', desc: 'Governance validation', icon: 'ShieldCheck', color: 'text-blue-500' },
      { label: 'Simulation Acc.', value: '99.4%', desc: 'Predictive precision', icon: 'Target', color: 'text-indigo-500' },
    ],
    headers: ['Proposed Action', 'Simulated Impact', 'Required Approvers', 'Policy Conflict', 'Status', 'Evidence'],
    data: [
      { act: 'Drop Table: Users_2024', impact: 'Breaks 3 downstream reports', req: 'Data Gov VP', pol: 'Data Retention A-12', status: 'Rejected', trace: 'DEC-EV-601' },
      { act: 'Deploy React 19 Upgrade', impact: 'Increases bundle size by 12kb', req: 'Frontend Lead', pol: 'None', status: 'Approved', trace: 'DEC-EV-602' },
      { act: 'Scale Database +2 Nodes', impact: 'Cost increases $400/mo', req: 'FinOps Manager', pol: 'Budget Cap Alert', status: 'Warning', trace: 'DEC-EV-603' },
    ]
  },
  'learning': {
    title: 'Personalized Learning Center',
    description: 'Contextually adapts to the users experience to provide continuous workflow education.',
    icon: 'GraduationCap',
    kpis: [
      { label: 'User Proficiency', value: 'Expert', desc: 'Adaptive learning state', icon: 'TrendingUp', color: 'text-cyan-500', descColor: 'text-cyan-400' },
      { label: 'New Features', value: '2', desc: 'Undiscovered capabilities', icon: 'Sparkles', color: 'text-amber-500' },
      { label: 'Onboarding', value: '100%', desc: 'Core modules complete', icon: 'CheckCircle2', color: 'text-emerald-500' },
      { label: 'Time Saved', value: '14h', desc: 'Through workflow tips', icon: 'Timer', color: 'text-blue-500' },
    ],
    headers: ['Learning Module', 'Trigger Context', 'Est. Time', 'Value Proposition', 'Status', 'Trace'],
    data: [
      { mod: 'Advanced Command Palette', ctx: 'User clicks navigation frequently', time: '2 mins', prop: 'Navigate 4x faster', status: 'Pending', trace: 'LRN-EV-701' },
      { mod: 'Automating Approvals', ctx: 'User approves 10+ identical requests', time: '5 mins', prop: 'Save 2 hours/week', status: 'Pending', trace: 'LRN-EV-702' },
      { mod: 'Intro to RXOS', ctx: 'First login to Experience Command Center', time: 'Completed', prop: 'Understand UX Governance', status: 'Passed', trace: 'LRN-EV-703' },
    ]
  },
  'focus': {
    title: 'Enterprise Focus Mode',
    description: 'Temporarily suppresses non-critical metrics and notifications during high-priority tasks.',
    icon: 'Target',
    kpis: [
      { label: 'Focus State', value: 'Inactive', desc: 'Currently operating normally', icon: 'Activity', color: 'text-slate-500', descColor: 'text-slate-400' },
      { label: 'Time in Focus', value: '4.2h', desc: 'This week', icon: 'Timer', color: 'text-cyan-500' },
      { label: 'Interventions', value: '42', desc: 'Notifications suppressed', icon: 'ShieldCheck', color: 'text-emerald-500' },
      { label: 'Task Completion', value: '+34%', desc: 'Speed during focus mode', icon: 'TrendingUp', color: 'text-blue-500' },
    ],
    headers: ['Distraction Type', 'Suppression Rule', 'Escalation Override', 'Focus Analytics', 'Status', 'Evidence'],
    data: [
      { dist: 'Chat / Mentions', rule: 'Mute all except P1 Incidents', esc: 'Manager Override', anal: 'Saved 14 context switches', status: 'Compliant', trace: 'FOC-EV-801' },
      { dist: 'KPI Dashboards', rule: 'Collapse secondary metrics', esc: 'None', anal: 'Reduced cognitive load 40%', status: 'Compliant', trace: 'FOC-EV-802' },
      { dist: 'Non-critical Approvals', rule: 'Queue for batch review later', esc: 'SLA < 1 Hour', anal: 'Batched 6 requests', status: 'Compliant', trace: 'FOC-EV-803' },
    ]
  },
  'analytics': {
    title: 'Intelligence Analytics',
    description: 'Measures the enterprise effectiveness of AI-driven recommendations and user trust.',
    icon: 'BarChart2',
    kpis: [
      { label: 'Intelligence Index', value: '94.8', desc: 'Overall RIOS Effectiveness', icon: 'BrainCircuit', color: 'text-cyan-500', descColor: 'text-cyan-400' },
      { label: 'Recommendation', value: '88%', desc: 'Acceptance Rate', icon: 'CheckCircle2', color: 'text-emerald-500' },
      { label: 'Time to Decision', value: '-22%', desc: 'Faster approvals', icon: 'Timer', color: 'text-blue-500' },
      { label: 'User Trust', value: 'High', desc: 'Survey metrics', icon: 'HeartHandshake', color: 'text-indigo-500' },
    ],
    headers: ['Intelligence Metric', 'Current Value', 'Previous Period', 'Impact on Governance', 'Status', 'Trace'],
    data: [
      { met: 'Guidance Acceptance Rate', cur: '88%', prev: '74%', impact: 'Higher compliance adherence', status: 'Passed', trace: 'INA-EV-901' },
      { met: 'Average Decision Time', cur: '45s', prev: '1m 20s', impact: 'Reduced operational drag', status: 'Passed', trace: 'INA-EV-902' },
      { met: 'Ignored Recommendations', cur: '12%', prev: '26%', impact: 'Needs context tuning', status: 'Warning', trace: 'INA-EV-903' },
    ]
  },
  'evidence': {
    title: 'Intelligence Evidence Ledger',
    description: 'The immutable constitutional ledger tracking why every recommendation was made.',
    icon: 'History',
    kpis: [
      { label: 'AI Traces', value: '8.4M', desc: 'Cryptographic records', icon: 'Database', color: 'text-cyan-500', descColor: 'text-cyan-400' },
      { label: 'Explainability', value: '100%', desc: 'All decisions documented', icon: 'FileCheck2', color: 'text-emerald-500' },
      { label: 'Ledger Integrity', value: 'Verified', desc: 'Hash chain valid', icon: 'ShieldCheck', color: 'text-blue-500' },
      { label: 'Model Fallbacks', value: '0', desc: 'No unverified predictions', icon: 'Brain', color: 'text-indigo-500' },
    ],
    headers: ['Recommendation ID', 'Timestamp', 'Trigger Event', 'Prediction Model', 'Human Action', 'EvidenceBadge'],
    data: [
      { id: 'REC-I-4092', time: '2026-07-22T08:14:00Z', trig: 'SLA threshold reached', model: 'Predictive Guidance V4', act: 'Accepted', trace: 'EV-I-4092' },
      { id: 'REC-I-4091', time: '2026-07-22T08:10:22Z', trig: 'User Login', model: 'Adaptive Workspace Engine', act: 'Viewed', trace: 'EV-I-4091' },
      { id: 'REC-I-4090', time: '2026-07-21T16:45:00Z', trig: 'Deployment Initiated', model: 'Decision Intelligence', act: 'Rejected (Manual Override)', trace: 'EV-I-4090' },
    ]
  }
};

const pageTemplate = `import React from "react";
import Link from "next/link";
import { ArrowRight, BrainCircuit, LayoutDashboard, Map, BookOpen, ClipboardList, Network, Brain, GraduationCap, Target, BarChart2, History } from "lucide-react";

export default function IntelligenceCommandCenter() {
  const modules = [
    { name: "Adaptive Workspace", path: "/intelligence/workspace", icon: LayoutDashboard, color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20" },
    { name: "Predictive Guidance", path: "/intelligence/guidance", icon: Map, color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
    { name: "Executive Briefing", path: "/intelligence/briefing", icon: BookOpen, color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20" },
    { name: "Smart Work Queue", path: "/intelligence/work", icon: ClipboardList, color: "text-indigo-400", bg: "bg-indigo-500/10", border: "border-indigo-500/20" },
    { name: "Enterprise Context", path: "/intelligence/context", icon: Network, color: "text-rose-400", bg: "bg-rose-500/10", border: "border-rose-500/20" },
    { name: "Decision Intelligence", path: "/intelligence/decisions", icon: Brain, color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
    { name: "Learning Center", path: "/intelligence/learning", icon: GraduationCap, color: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/20" },
    { name: "Enterprise Focus Mode", path: "/intelligence/focus", icon: Target, color: "text-red-500", bg: "bg-red-500/10", border: "border-red-500/20" },
    { name: "Intelligence Analytics", path: "/intelligence/analytics", icon: BarChart2, color: "text-emerald-500", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
    { name: "Intelligence Evidence", path: "/intelligence/evidence", icon: History, color: "text-slate-400", bg: "bg-slate-500/10", border: "border-slate-500/20" },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2 flex items-center gap-3">
              <BrainCircuit className="w-8 h-8 text-cyan-500" />
              Revora Intelligence Operating System (RIOS)
            </h1>
            <p className="text-slate-400">Executive dashboard for predictive guidance and adaptive enterprise experience.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="px-4 py-2 bg-cyan-950/30 border border-cyan-900/50 rounded-md">
               <span className="text-xs text-cyan-500 font-bold uppercase tracking-wider block mb-1">Intelligence Index</span>
               <div className="text-xl font-black text-cyan-400">94.8 A</div>
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
              <div className="text-xs text-slate-500 flex-1">Constitutional intelligence and workflow governance.</div>
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

const basePath = path.join(__dirname, 'src', 'app', 'intelligence');
fs.mkdirSync(basePath, { recursive: true });
fs.writeFileSync(path.join(basePath, 'page.tsx'), pageTemplate);

for (const [route, config] of Object.entries(routes)) {
  const routePath = path.join(basePath, route);
  fs.mkdirSync(routePath, { recursive: true });
  fs.writeFileSync(path.join(routePath, 'page.tsx'), generatePage(config.title, config.description, config.icon, config.kpis, config.headers, config.data));
  console.log('Generated route:', route);
}
