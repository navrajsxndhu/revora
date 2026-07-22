const fs = require('fs');
const path = require('path');

const generatePage = (title, description, iconName, kpis, headers, tableData, additionalUI) => {
  const allIcons = ['ArrowLeft', 'Search', 'ShieldCheck', 'Activity', 'Target', 'Download', 'Settings', 'History', 'BrainCircuit', 'Layers', 'Eye', 'Smile', 'Move', 'Languages', 'Accessibility', 'Briefcase', 'Lock', 'LineChart', 'CheckCircle2', 'AlertTriangle', 'XCircle', 'ArrowRight', 'Image', 'Keyboard', 'Timer', 'TrendingUp', 'TrendingDown', 'BookOpen', 'MousePointerClick', 'Database', 'Users', 'FileCode', 'GraduationCap', 'Map', 'ClipboardList', 'Sparkles', 'HeartHandshake', 'Network', 'Award', 'BarChart2', 'FileSignature', 'Lightbulb', 'Compass', 'MessageSquare', 'FolderHeart', 'Tags', 'Fingerprint', 'Users2', 'Video', 'Megaphone', 'Inbox', 'Calendar', 'Globe', 'Handshake', 'MessageCircle', 'Zap', 'Wind', 'Cpu', 'Mouse', 'Monitor', 'EyeOff', 'Laptop', 'Smartphone', 'Box', 'Maximize', 'Gauge', 'Eye', 'Unlock', 'HelpCircle', 'Terminal', 'ThumbsUp'];
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
              <Link href="/trust" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to RTSTOS Command Center
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
                <input type="text" placeholder="Search Trust Logs..." className="bg-slate-900 border border-slate-700 rounded-md pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-cyan-500 w-64 transition-colors" />
             </div>
             <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-md text-sm font-medium transition-colors text-slate-200">
               <Download className="w-4 h-4" /> Export Ledger
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
            title="Trust & Transparency Metrics" 
            headers={[${headers.map(h => `"${h}"`).join(', ')}]}
          >
            {${JSON.stringify(tableData)}.map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group cursor-pointer border-b border-slate-800/50">
                ${headers.map((h, j) => {
                  const key = Object.keys(tableData[0])[j];
                  if (h === 'Status' || h === 'Confidence' || h === 'Governance' || h === 'Transparency') {
                    return `
                <td className="py-4 px-5">
                  <span className={\`px-2 py-1 rounded text-xs font-bold border flex items-center gap-1 w-max \${
                    row.${key} === 'Critical' || row.${key} === 'Denied' || row.${key} === 'Low' || row.${key} === 'Failed' ? 'bg-rose-900/20 text-rose-400 border-rose-900/50' : 
                    row.${key} === 'Warning' || row.${key} === 'Pending' || row.${key} === 'Review Required' || row.${key} === 'Medium' ? 'bg-amber-900/20 text-amber-400 border-amber-900/50' :
                    row.${key} === 'Optimal' || row.${key} === 'Granted' || row.${key} === 'Approved' || row.${key} === 'Verified' || row.${key} === 'High' ? 'bg-emerald-900/20 text-emerald-400 border-emerald-900/50' :
                    'bg-slate-800 text-slate-300 border-slate-700'
                  }\`}>
                    {row.${key}}
                  </span>
                </td>`;
                  }
                  if (h === 'Evidence' || h === 'Trace' || h === 'Execution ID') {
                    return `
                <td className="py-4 px-5">
                  <EvidenceBadge evidenceId={row.${key}} timestamp="Verified Runtime" />
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
  'explanations': {
    title: 'Explainable Decision Center',
    description: 'Deconstructing complex governance decisions into plain, understandable language.',
    icon: 'MessageSquare',
    kpis: [
      { label: 'Explained Actions', value: '14.2K', desc: 'Auto-generated context', icon: 'FileSignature', color: 'text-cyan-500', descColor: 'text-cyan-400' },
      { label: 'Unexplained Blocks', value: '0', desc: 'Zero black-box errors', icon: 'CheckCircle2', color: 'text-emerald-500' },
      { label: 'User Clarifications', value: '-84%', desc: 'Reduction in help tickets', icon: 'TrendingDown', color: 'text-blue-500' },
      { label: 'Avg Readability', value: '8th Grade', desc: 'Plain language score', icon: 'BookOpen', color: 'text-emerald-500' },
    ],
    headers: ['Blocked Action', 'Plain Language Explanation', 'Triggered Policy', 'Remediation Step', 'Status', 'Trace'],
    data: [
      { act: 'Production DB Access', exp: 'Requires Platform Admin role to execute.', pol: 'PRD-021 (Zero Trust)', rem: 'Request Temp Access', status: 'Denied', trace: 'EDC-EV-101' },
      { act: 'Push to Main Branch', exp: 'Failed CI/CD Quality Gate (Lint).', pol: 'ENG-114 (Quality)', rem: 'Fix Code & Retry', status: 'Denied', trace: 'EDC-EV-102' },
      { act: 'Expense Approval', exp: 'Amount exceeds L1 clearance limit.', pol: 'FIN-042 (Spend Limit)', rem: 'Escalated to VP', status: 'Pending', trace: 'EDC-EV-103' },
    ]
  },
  'permissions': {
    title: 'Permission Transparency Center',
    description: 'Visualizing enterprise access models so users always understand their boundaries.',
    icon: 'Unlock',
    kpis: [
      { label: 'Access Certainty', value: '98%', desc: 'Role comprehension', icon: 'BrainCircuit', color: 'text-cyan-500', descColor: 'text-cyan-400' },
      { label: 'Temp Grants', value: '412', desc: 'Active limited-time access', icon: 'Timer', color: 'text-emerald-500' },
      { label: 'Orphaned Roles', value: '0', desc: 'Continually audited', icon: 'ShieldCheck', color: 'text-blue-500' },
      { label: 'Mystery Denials', value: '-99%', desc: 'Hidden policies removed', icon: 'Eye', color: 'text-emerald-500' },
    ],
    headers: ['Resource', 'Your Current Access', 'Required Role', 'Expiration', 'Transparency', 'Evidence'],
    data: [
      { res: 'SOC2 Compliance Folder', access: 'View Only', req: 'Auditor (Write)', exp: 'Never (Base Role)', trans: 'High', trace: 'PTC-EV-201' },
      { res: 'AWS Production Cluster', access: 'Full Access (Temporary)', req: 'DevOps Lead', exp: 'In 4 Hours', trans: 'High', trace: 'PTC-EV-202' },
      { res: 'Executive Dashboards', access: 'None', req: 'VP or Above', exp: 'N/A', trans: 'High', trace: 'PTC-EV-203' },
    ]
  },
  'privacy': {
    title: 'Privacy & Data Transparency',
    description: 'Complete visibility into enterprise data retention, ownership, and classification.',
    icon: 'Eye',
    kpis: [
      { label: 'Data Mapped', value: '100%', desc: 'No shadow IT data', icon: 'Database', color: 'text-cyan-500', descColor: 'text-cyan-400' },
      { label: 'PII Elements', value: '42.8K', desc: 'Actively governed fields', icon: 'Fingerprint', color: 'text-emerald-500' },
      { label: 'Retention Compliance', value: 'Verified', desc: 'Automated pruning active', icon: 'CheckCircle2', color: 'text-blue-500' },
      { label: 'Unclassified DBs', value: '0', desc: 'All assets owned', icon: 'ShieldCheck', color: 'text-emerald-500' },
    ],
    headers: ['Data Asset', 'Classification', 'Primary Purpose', 'Retention Limit', 'Governance', 'Trace'],
    data: [
      { asset: 'Customer CRM Records', class: 'High Risk (PII)', purp: 'Sales & Marketing', limit: '7 Years', gov: 'Verified', trace: 'PDT-EV-301' },
      { asset: 'Application Error Logs', class: 'Low Risk', purp: 'Debugging / SRE', limit: '30 Days', gov: 'Verified', trace: 'PDT-EV-302' },
      { asset: 'Employee Salary Data', class: 'Critical (Restricted)', purp: 'Payroll', limit: 'Indefinite', gov: 'Verified', trace: 'PDT-EV-303' },
    ]
  },
  'policies': {
    title: 'Policy Intelligence Center',
    description: 'Translating complex governance code and YAML into approachable business logic.',
    icon: 'FileCode',
    kpis: [
      { label: 'Policies Translated', value: '142', desc: 'Human-readable formats', icon: 'Languages', color: 'text-cyan-500', descColor: 'text-cyan-400' },
      { label: 'Comprehension', value: '94%', desc: 'User understanding score', icon: 'BrainCircuit', color: 'text-emerald-500' },
      { label: 'Orphaned Rules', value: '0', desc: 'All policies have owners', icon: 'Users', color: 'text-blue-500' },
      { label: 'Jargon Removed', value: '8.4K', desc: 'Technical terms simplified', icon: 'CheckCircle2', color: 'text-emerald-500' },
    ],
    headers: ['Policy Name', 'Plain Language Summary', 'Affected Departments', 'Last Updated', 'Status', 'Evidence'],
    data: [
      { name: 'SEC-01: Zero Trust Auth', sum: 'Every login requires MFA. No exceptions.', dept: 'Global', upd: '2 days ago', status: 'Approved', trace: 'PIC-EV-401' },
      { name: 'FIN-14: Expense Limits', sum: 'Purchases >$500 require manager approval.', dept: 'Sales, Marketing', upd: '1 month ago', status: 'Approved', trace: 'PIC-EV-402' },
      { name: 'ENG-42: Code Reviews', sum: 'Two engineers must approve before merging.', dept: 'Engineering', upd: '6 months ago', status: 'Review Required', trace: 'PIC-EV-403' },
    ]
  },
  'timeline': {
    title: 'Security Activity Timeline',
    description: 'A chronological, narrative explanation of enterprise permission and security events.',
    icon: 'History',
    kpis: [
      { label: 'Events Tracked', value: '14.2M', desc: 'Security actions logged', icon: 'Database', color: 'text-cyan-500', descColor: 'text-cyan-400' },
      { label: 'Narrative Gen', value: '100%', desc: 'Machine to human text', icon: 'MessageSquare', color: 'text-emerald-500' },
      { label: 'Anomaly Detects', value: '12', desc: 'Suspicious timelines', icon: 'AlertTriangle', color: 'text-amber-500' },
      { label: 'Audit Readiness', value: 'Instant', desc: 'Time to generate report', icon: 'Zap', color: 'text-blue-500' },
    ],
    headers: ['Timestamp', 'Actor', 'Narrative Explanation', 'Risk Level', 'Governance', 'Trace'],
    data: [
      { time: '10:14 AM', actor: 'Sarah Jenkins', expl: 'Granted temp production access by Admin (INC-801).', risk: 'Low', gov: 'Verified', trace: 'SAT-EV-501' },
      { time: '09:42 AM', actor: 'System Worker', expl: 'Automatically rotated database credentials.', risk: 'Low', gov: 'Verified', trace: 'SAT-EV-502' },
      { time: '08:15 AM', actor: 'Unknown IP', expl: 'Failed login attempt. Blocked by Geo-Fence.', risk: 'High', gov: 'Verified', trace: 'SAT-EV-503' },
    ]
  },
  'confidence': {
    title: 'Organization Confidence Center',
    description: 'Measuring the psychological safety and transparency levels across the enterprise.',
    icon: 'HeartHandshake',
    kpis: [
      { label: 'Trust Index', value: '92.4', desc: 'Enterprise aggregate score', icon: 'ThumbsUp', color: 'text-cyan-500', descColor: 'text-cyan-400' },
      { label: 'Policy Clarity', value: '88%', desc: 'Users understanding rules', icon: 'BrainCircuit', color: 'text-emerald-500' },
      { label: 'Fear Reduction', value: '-42%', desc: 'Hesitation to act', icon: 'TrendingDown', color: 'text-blue-500' },
      { label: 'Shadow IT', value: 'Eliminated', desc: 'Trust removes workarounds', icon: 'ShieldCheck', color: 'text-emerald-500' },
    ],
    headers: ['Department', 'Transparency Score', 'Policy Comprehension', 'Reported Friction', 'Status', 'Execution ID'],
    data: [
      { dept: 'Engineering', trans: '96/100', comp: 'High', fric: 'Low', status: 'Optimal', trace: 'OCC-EV-601' },
      { dept: 'Sales', trans: '88/100', comp: 'Medium', fric: 'Medium', status: 'Optimal', trace: 'OCC-EV-602' },
      { dept: 'Finance', trans: '94/100', comp: 'High', fric: 'Low', status: 'Optimal', trace: 'OCC-EV-603' },
    ]
  },
  'analytics': {
    title: 'Enterprise Transparency Analytics',
    description: 'Executive intelligence correlating trust with operational speed and support reduction.',
    icon: 'BarChart2',
    kpis: [
      { label: 'Support Tickets', value: '-64%', desc: 'Fewer "Why is this blocked?"', icon: 'TrendingDown', color: 'text-cyan-500', descColor: 'text-cyan-400' },
      { label: 'Approval Speed', value: '+24%', desc: 'Due to clear explanations', icon: 'Timer', color: 'text-emerald-500' },
      { label: 'Onboarding Time', value: '-12 Days', desc: 'Faster contextual learning', icon: 'GraduationCap', color: 'text-blue-500' },
      { label: 'Data Requests', value: '-88%', desc: 'Users self-serve privacy info', icon: 'Database', color: 'text-emerald-500' },
    ],
    headers: ['Metric Category', 'Current State', 'Impact on Business', 'Trend (MoM)', 'Governance', 'Trace'],
    data: [
      { cat: 'Permission Confusion', state: 'Near Zero', imp: 'Saved 400 IT Hours', trend: '-14%', gov: 'Verified', trace: 'ETA-EV-701' },
      { cat: 'Policy Disputes', state: '14 Active', imp: 'Minor Friction', trend: '-2%', gov: 'Review Required', trace: 'ETA-EV-702' },
      { cat: 'Security Anxiety', state: 'Low', imp: 'Faster feature deployment', trend: '-8%', gov: 'Verified', trace: 'ETA-EV-703' },
    ]
  },
  'governance': {
    title: 'Trust Governance Board',
    description: 'Constitutional oversight managing transparency standards and security communication.',
    icon: 'ShieldCheck',
    kpis: [
      { label: 'Active Standards', value: '24', desc: 'Transparency requirements', icon: 'FileSignature', color: 'text-cyan-500', descColor: 'text-cyan-400' },
      { label: 'Pending Reviews', value: '2', desc: 'Awaiting board approval', icon: 'ClipboardList', color: 'text-amber-500' },
      { label: 'Compliance Rate', value: '100%', desc: 'All policies explained', icon: 'CheckCircle2', color: 'text-emerald-500' },
      { label: 'Opaque Systems', value: '0', desc: 'Zero black boxes permitted', icon: 'Eye', color: 'text-blue-500' },
    ],
    headers: ['Governance Rule', 'Target Domain', 'Enforcement Status', 'Primary Owner', 'Confidence', 'Evidence'],
    data: [
      { rule: 'No Silent Denials', dom: 'Platform UI', enf: 'Strict (Enforced)', owner: 'UX Team', conf: 'High', trace: 'TGB-EV-801' },
      { rule: 'Plain English Summaries', dom: 'All YAML Policies', enf: 'Enforced', owner: 'Legal & Sec', conf: 'High', trace: 'TGB-EV-802' },
      { rule: 'Visual Expiration Dates', dom: 'Temporary Access', enf: 'Pending Implementation', owner: 'IAM Team', conf: 'Medium', trace: 'TGB-EV-803' },
    ]
  },
  'simulator': {
    title: 'Enterprise Confidence Simulator',
    description: 'Predictive modeling to visualize how policy changes affect organizational trust and friction.',
    icon: 'Terminal',
    kpis: [
      { label: 'Simulations Run', value: '142', desc: 'Pre-deployment checks', icon: 'Activity', color: 'text-cyan-500', descColor: 'text-cyan-400' },
      { label: 'Friction Prevented', value: '8.4K', desc: 'Blocked workflows saved', icon: 'ShieldCheck', color: 'text-emerald-500' },
      { label: 'Accuracy', value: '99.2%', desc: 'Simulation vs Reality', icon: 'Target', color: 'text-blue-500' },
      { label: 'Active Drafts', value: '4', desc: 'Proposed governance changes', icon: 'FileCode', color: 'text-amber-500' },
    ],
    headers: ['Proposed Change', 'Simulated Impact (Friction)', 'Affected Users', 'Trust Impact', 'Status', 'Execution ID'],
    data: [
      { change: 'Enforce MFA on Intranet', imp: 'High Initial Friction', users: '2,400', trust: 'Neutral', status: 'Pending', trace: 'ECS-EV-901' },
      { change: 'Revoke standing DB access', imp: 'Moderate (SRE Team)', users: '45', trust: 'Positive (Secure)', status: 'Approved', trace: 'ECS-EV-902' },
      { change: 'Simplify Expense Policy', imp: 'Massive Friction Drop', users: '1,200', trust: 'Highly Positive', status: 'Approved', trace: 'ECS-EV-903' },
    ]
  },
  'evidence': {
    title: 'Trust Evidence Ledger',
    description: 'The cryptographic anchor backing every security explanation and transparency claim.',
    icon: 'History',
    kpis: [
      { label: 'Trust Records', value: '42.8M', desc: 'Immutable explanations', icon: 'Database', color: 'text-cyan-500', descColor: 'text-cyan-400' },
      { label: 'Chain Integrity', value: 'Verified', desc: 'Zero tampering', icon: 'ShieldCheck', color: 'text-emerald-500' },
      { label: 'Read Latency', value: '14ms', desc: 'Instant evidence retrieval', icon: 'Zap', color: 'text-blue-500' },
      { label: 'Auditor Queries', value: '8.4K', desc: 'External verification', icon: 'Search', color: 'text-indigo-500' },
    ],
    headers: ['Event ID', 'Timestamp', 'Transparency Action', 'Cryptographic Hash', 'Constitutional Governance', 'EvidenceBadge'],
    data: [
      { id: 'TRU-E-1104', time: '2026-07-22T09:14:00Z', act: 'Explained PRD-021 Denial', hash: '0x8f4...b2a', gov: 'Policy: Clear Denials', trace: 'EV-T-1104' },
      { id: 'TRU-E-1103', time: '2026-07-22T09:12:15Z', act: 'Generated Narrative Timeline', hash: '0x1c9...d4f', gov: 'Policy: Audit Logging', trace: 'EV-T-1103' },
      { id: 'TRU-E-1102', time: '2026-07-22T09:05:00Z', act: 'Simulated MFA Rollout', hash: '0x4a2...e1b', gov: 'Policy: Zero Friction', trace: 'EV-T-1102' },
    ]
  }
};

const pageTemplate = `import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, MessageSquare, Unlock, Eye, FileCode, History, HeartHandshake, BarChart2, Terminal } from "lucide-react";

export default function TrustCommandCenter() {
  const modules = [
    { name: "Explainable Decisions", path: "/trust/explanations", icon: MessageSquare, color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20" },
    { name: "Permission Transparency", path: "/trust/permissions", icon: Unlock, color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
    { name: "Privacy & Data", path: "/trust/privacy", icon: Eye, color: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/20" },
    { name: "Policy Intelligence", path: "/trust/policies", icon: FileCode, color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20" },
    { name: "Activity Timeline", path: "/trust/timeline", icon: History, color: "text-rose-400", bg: "bg-rose-500/10", border: "border-rose-500/20" },
    { name: "Confidence Center", path: "/trust/confidence", icon: HeartHandshake, color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
    { name: "Transparency Analytics", path: "/trust/analytics", icon: BarChart2, color: "text-yellow-500", bg: "bg-yellow-500/10", border: "border-yellow-500/20" },
    { name: "Governance Board", path: "/trust/governance", icon: ShieldCheck, color: "text-indigo-400", bg: "bg-indigo-500/10", border: "border-indigo-500/20" },
    { name: "Confidence Simulator", path: "/trust/simulator", icon: Terminal, color: "text-blue-500", bg: "bg-blue-500/10", border: "border-blue-500/20" },
    { name: "Evidence Ledger", path: "/trust/evidence", icon: History, color: "text-slate-400", bg: "bg-slate-500/10", border: "border-slate-500/20" },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2 flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-cyan-500" />
              Trust, Security & Transparency OS (RTSTOS)
            </h1>
            <p className="text-slate-400">Executive dashboard governing enterprise confidence, explainable security, and privacy transparency.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="px-4 py-2 bg-cyan-950/30 border border-cyan-900/50 rounded-md">
               <span className="text-xs text-cyan-500 font-bold uppercase tracking-wider block mb-1">Enterprise Trust Index</span>
               <div className="text-xl font-black text-cyan-400">92.4/100</div>
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
              <div className="text-xs text-slate-500 flex-1">Govern security transparency and explanations.</div>
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

const basePath = path.join(__dirname, 'src', 'app', 'trust');
fs.mkdirSync(basePath, { recursive: true });
fs.writeFileSync(path.join(basePath, 'page.tsx'), pageTemplate);

for (const [route, config] of Object.entries(routes)) {
  const routePath = path.join(basePath, route);
  fs.mkdirSync(routePath, { recursive: true });
  fs.writeFileSync(path.join(routePath, 'page.tsx'), generatePage(config.title, config.description, config.icon, config.kpis, config.headers, config.data));
  console.log('Generated route:', route);
}
