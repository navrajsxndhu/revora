const fs = require('fs');
const path = require('path');

const generatePage = (title, description, iconName, kpis, headers, tableData, additionalUI) => {
  const allIcons = ['ArrowLeft', 'Search', 'ShieldCheck', 'Activity', 'Target', 'Download', 'Settings', 'History', 'BrainCircuit', 'Layers', 'Eye', 'Smile', 'Move', 'Languages', 'Accessibility', 'Briefcase', 'Lock', 'LineChart', 'CheckCircle2', 'AlertTriangle', 'XCircle', 'ArrowRight', 'Image', 'Keyboard', 'Timer', 'TrendingUp', 'TrendingDown', 'BookOpen', 'MousePointerClick', 'Database', 'Users', 'FileCode', 'GraduationCap', 'Map', 'ClipboardList', 'Sparkles', 'HeartHandshake', 'Network', 'Award', 'BarChart2', 'FileSignature', 'Lightbulb', 'Compass', 'MessageSquare', 'FolderHeart', 'Tags', 'Fingerprint', 'Users2', 'Video', 'Megaphone', 'Inbox', 'Calendar', 'Globe', 'Handshake', 'MessageCircle', 'Zap', 'Wind', 'Cpu', 'Mouse', 'Monitor', 'EyeOff', 'Laptop', 'Smartphone', 'Box', 'Maximize', 'Gauge', 'Eye', 'Unlock', 'HelpCircle', 'Terminal', 'ThumbsUp', 'LayoutDashboard', 'Star', 'Bell', 'LineChart', 'UserCircle2', 'RefreshCw', 'Tablet', 'WifiOff', 'ServerCrash', 'MapPin', 'Cast', 'Clock', 'ActivitySquare', 'CheckSquare', 'AlertOctagon', 'HeartPulse', 'Bot', 'Navigation', 'BarChart3'];
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
              <Link href="/workspace" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to RECCOS Enterprise Workspace
              </Link>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2 flex items-center gap-3">
              <${iconName} className="w-8 h-8 text-fuchsia-500" />
              ${title}
            </h1>
            <p className="text-slate-400">${description}</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="relative">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input type="text" placeholder="Search Workspace Logs..." className="bg-slate-900 border border-slate-700 rounded-md pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-fuchsia-500 w-64 transition-colors" />
             </div>
             <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-md text-sm font-medium transition-colors text-slate-200">
               <Download className="w-4 h-4" /> Export Ledger
             </button>
          </div>
        </header>

        {/* KPIs */}
        <div className="grid grid-cols-4 gap-4 shrink-0">
          ${kpis.map((kpi, i) => `
          <div className="bg-slate-900/60 border ${i === 0 ? 'border-fuchsia-900/30 bg-fuchsia-950/10 shadow-[0_0_15px_rgba(217,70,239,0.05)]' : 'border-slate-800'} rounded-xl p-5">
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
            title="Enterprise Workspace Metrics" 
            headers={[${headers.map(h => `"${h}"`).join(', ')}]}
          >
            {${JSON.stringify(tableData)}.map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group cursor-pointer border-b border-slate-800/50">
                ${headers.map((h, j) => {
                  const key = Object.keys(tableData[0])[j];
                  if (h === 'Status' || h === 'Priority' || h === 'Urgency' || h === 'State' || h === 'Health') {
                    return `
                <td className="py-4 px-5">
                  <span className={\`px-2 py-1 rounded text-xs font-bold border flex items-center gap-1 w-max \${
                    row.${key} === 'Critical' || row.${key} === 'High' || row.${key} === 'Failed' || row.${key} === 'Overdue' ? 'bg-rose-900/20 text-rose-400 border-rose-900/50' : 
                    row.${key} === 'Warning' || row.${key} === 'Medium' || row.${key} === 'Pending' || row.${key} === 'Active' ? 'bg-amber-900/20 text-amber-400 border-amber-900/50' :
                    row.${key} === 'Optimal' || row.${key} === 'Low' || row.${key} === 'Approved' || row.${key} === 'Healthy' || row.${key} === 'Resolved' || row.${key} === 'Completed' ? 'bg-emerald-900/20 text-emerald-400 border-emerald-900/50' :
                    'bg-slate-800 text-slate-300 border-slate-700'
                  }\`}>
                    {row.${key}}
                  </span>
                </td>`;
                  }
                  if (h === 'Evidence' || h === 'Trace' || h === 'Execution ID') {
                    return `
                <td className="py-4 px-5">
                  <EvidenceBadge evidenceId={row.${key}} timestamp="Unified Ledger" />
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
  'timeline': {
    title: 'Unified Enterprise Timeline',
    description: 'A chronological operational story of the organization spanning all constitutional actions.',
    icon: 'Clock',
    kpis: [
      { label: 'Timeline Events', value: '8.4M', desc: 'Constitutional actions logged', icon: 'History', color: 'text-fuchsia-500', descColor: 'text-fuchsia-400' },
      { label: 'Event Correlation', value: '100%', desc: 'Cross-module linking', icon: 'Network', color: 'text-emerald-500' },
      { label: 'Audit Velocity', value: '1.2s', desc: 'Average query time', icon: 'Zap', color: 'text-blue-500' },
      { label: 'Missing Evidence', value: '0', desc: 'Perfect cryptographic seal', icon: 'ShieldCheck', color: 'text-emerald-500' },
    ],
    headers: ['Timestamp', 'Event Context', 'Initiator', 'Business Impact', 'Status', 'Trace'],
    data: [
      { time: '10:42 AM Today', ctx: 'Production Deployment (Frontend)', init: 'Release Engineering', imp: 'High (Customer Facing)', status: 'Completed', trace: 'UET-EV-101' },
      { time: '09:15 AM Today', ctx: 'Financial Ledger Reconciliation', init: 'Automated Job', imp: 'Critical (Compliance)', status: 'Failed', trace: 'UET-EV-102' },
      { time: '08:00 AM Today', ctx: 'C-Suite Access Granted', init: 'System Admin', imp: 'Medium (RBAC)', status: 'Approved', trace: 'UET-EV-103' },
    ]
  },
  'activity': {
    title: 'Enterprise Activity Feed',
    description: 'The real-time pulse of the organization prioritized by constitutional importance.',
    icon: 'ActivitySquare',
    kpis: [
      { label: 'Active Streams', value: '412', desc: 'Monitored systems', icon: 'Activity', color: 'text-fuchsia-500', descColor: 'text-fuchsia-400' },
      { label: 'Signal-to-Noise', value: '98%', desc: 'Irrelevant alerts filtered', icon: 'CheckCircle2', color: 'text-emerald-500' },
      { label: 'Processing Delay', value: '8ms', desc: 'Event evaluation time', icon: 'Timer', color: 'text-blue-500' },
      { label: 'Executive Handoff', value: '14.2K', desc: 'Escalations delivered', icon: 'ArrowRight', color: 'text-emerald-500' },
    ],
    headers: ['Activity Stream', 'Constitutional Urgency', 'Summary', 'Department', 'Status', 'Trace'],
    data: [
      { str: 'Infrastructure Reliability', urg: 'Critical', sum: 'Primary DB Latency Spike Detected', dept: 'SRE / Cloud', status: 'Active', trace: 'EAF-EV-201' },
      { str: 'AI Governance', urg: 'Medium', sum: 'New Model Version Evaluated', dept: 'Data Science', status: 'Pending', trace: 'EAF-EV-202' },
      { str: 'Marketplace Operations', urg: 'Low', sum: 'Weekly Plugin Sync Finished', dept: 'Platform', status: 'Completed', trace: 'EAF-EV-203' },
    ]
  },
  'approvals': {
    title: 'Unified Human Approval Center',
    description: 'Every pending approval across the enterprise coalesced into one prioritized interface.',
    icon: 'CheckSquare',
    kpis: [
      { label: 'Pending Approvals', value: '42', desc: 'Across 14 departments', icon: 'Inbox', color: 'text-fuchsia-500', descColor: 'text-fuchsia-400' },
      { label: 'SLA Compliance', value: '99.4%', desc: 'Decisions made on time', icon: 'Timer', color: 'text-emerald-500' },
      { label: 'Time-to-Approval', value: '14m', desc: 'Average organizational speed', icon: 'Zap', color: 'text-blue-500' },
      { label: 'Context Switching', value: '-88%', desc: 'Friction eliminated', icon: 'TrendingDown', color: 'text-emerald-500' },
    ],
    headers: ['Approval Request', 'Originating Module', 'Business Justification', 'SLA Deadline', 'Urgency', 'Execution ID'],
    data: [
      { req: 'Bypass Firewall Rule 4A', orig: 'Security Operations', just: 'Unblock emergency vendor access', sla: '15 Minutes', urg: 'Critical', trace: 'UHA-EV-301' },
      { req: 'Q3 Budget Allocation', orig: 'Finance Platform', just: 'Pre-approved annual spend', sla: '48 Hours', urg: 'Medium', trace: 'UHA-EV-302' },
      { req: 'New Employee Laptop', orig: 'IT Procurement', just: 'Standard Onboarding', sla: '7 Days', urg: 'Low', trace: 'UHA-EV-303' },
    ]
  },
  'situation': {
    title: 'Executive Situation Room',
    description: 'An adaptive operational war room that automatically assembles during major enterprise events.',
    icon: 'AlertOctagon',
    kpis: [
      { label: 'Active Incidents', value: '1', desc: 'Requiring executive oversight', icon: 'AlertTriangle', color: 'text-rose-500', descColor: 'text-rose-400' },
      { label: 'Data Assembly Time', value: '1.4s', desc: 'To build context', icon: 'Zap', color: 'text-emerald-500' },
      { label: 'Stakeholders', value: '14', desc: 'Leaders currently engaged', icon: 'Users', color: 'text-blue-500' },
      { label: 'War Rooms Held', value: '84', desc: 'Historical incidents managed', icon: 'History', color: 'text-emerald-500' },
    ],
    headers: ['Incident Domain', 'Primary Metric Affected', 'Lead Commander', 'Time Active', 'State', 'Trace'],
    data: [
      { dom: 'Data Privacy Breach (Simulated)', met: 'European Customer Data', lead: 'Chief Information Security Officer', time: '14m 20s', state: 'Active', trace: 'ESR-EV-401' },
      { dom: 'Core API Outage', met: 'Transaction Velocity', lead: 'VP Engineering', time: '4h 10m', state: 'Resolved', trace: 'ESR-EV-402' },
      { dom: 'Black Friday Readiness', met: 'Cloud Auto-Scaling', lead: 'Platform Architect', time: '14 Days', state: 'Completed', trace: 'ESR-EV-403' },
    ]
  },
  'health': {
    title: 'Organizational Health Center',
    description: 'A single constitutional health score for the enterprise across security, compliance, and infrastructure.',
    icon: 'HeartPulse',
    kpis: [
      { label: 'Enterprise Health', value: '98.4%', desc: 'Constitutional Index', icon: 'Activity', color: 'text-fuchsia-500', descColor: 'text-fuchsia-400' },
      { label: 'Security Score', value: '99.9%', desc: 'Zero-trust verification', icon: 'ShieldCheck', color: 'text-emerald-500' },
      { label: 'Platform Uptime', value: '99.99%', desc: 'Global infrastructure', icon: 'ServerCrash', color: 'text-emerald-500' },
      { label: 'Compliance Adherence', value: '100%', desc: 'Regulatory mappings', icon: 'CheckCircle2', color: 'text-emerald-500' },
    ],
    headers: ['Organizational Pillar', 'Primary Metric', 'Secondary Metric', 'Trend (30d)', 'Health', 'Trace'],
    data: [
      { pill: 'Engineering & Infrastructure', prim: '99.99% Availability', sec: '14ms Avg Latency', trend: '+0.01%', health: 'Optimal', trace: 'OHC-EV-501' },
      { pill: 'Security & Trust', prim: '0 Active Breaches', sec: '98% Policy Comprehension', trend: '+4%', health: 'Optimal', trace: 'OHC-EV-502' },
      { pill: 'Workforce Productivity', prim: '14h Nav Time Saved', sec: '82% Focus Mode Adoption', trend: '+14%', health: 'Healthy', trace: 'OHC-EV-503' },
    ]
  },
  'assistant': {
    title: 'Enterprise Assistant Workspace',
    description: 'A conversational interface to explain governance, summarize evidence, and recommend navigation.',
    icon: 'Bot',
    kpis: [
      { label: 'Queries Handled', value: '1.4M', desc: 'Enterprise questions answered', icon: 'MessageSquare', color: 'text-fuchsia-500', descColor: 'text-fuchsia-400' },
      { label: 'Explanation Accuracy', value: '100%', desc: 'Backed by evidence', icon: 'ShieldCheck', color: 'text-emerald-500' },
      { label: 'Autonomous Actions', value: '0', desc: 'Constitutional restriction', icon: 'Lock', color: 'text-blue-500' },
      { label: 'Time Saved', value: '142K Hrs', desc: 'Avoiding documentation hunts', icon: 'Timer', color: 'text-emerald-500' },
    ],
    headers: ['Query Context', 'Assistant Action', 'Evidence Reference', 'User Feedback', 'Status', 'Execution ID'],
    data: [
      { ctx: 'Why was my PR blocked?', act: 'Explained Security Policy 4.B', ref: 'Policy: Zero Trust Commit', feed: 'Helpful', status: 'Completed', trace: 'EAW-EV-601' },
      { ctx: 'Where is the Q3 Budget?', act: 'Recommended Navigation Route', ref: 'Module: Financial Planning', feed: 'Navigated', status: 'Completed', trace: 'EAW-EV-602' },
      { ctx: 'Approve all expenses', act: 'Blocked: Human Approval Required', ref: 'Constitutional Law #1', feed: 'Understood', status: 'Failed', trace: 'EAW-EV-603' },
    ]
  },
  'navigation': {
    title: 'Enterprise Navigation Intelligence',
    description: 'Intent-driven, context-aware module switching that predicts what the user needs next.',
    icon: 'Navigation',
    kpis: [
      { label: 'Predictive Accuracy', value: '94%', desc: 'Suggested correct next step', icon: 'Target', color: 'text-fuchsia-500', descColor: 'text-fuchsia-400' },
      { label: 'Dead Ends Hit', value: '0.01%', desc: 'User abandoned workflow', icon: 'XCircle', color: 'text-emerald-500' },
      { label: 'Clicks Saved', value: '8.4M', desc: 'Flattened hierarchy', icon: 'MousePointerClick', color: 'text-blue-500' },
      { label: 'Memory Retention', value: '100%', desc: 'Resumed exact state', icon: 'History', color: 'text-emerald-500' },
    ],
    headers: ['User Intent / Context', 'Current Module', 'Predicted Destination', 'Confidence', 'State', 'Trace'],
    data: [
      { int: 'Reviewing Security Alert', mod: 'Unified Activity Feed', dest: 'Incident Command Center', conf: '99%', state: 'Active', trace: 'ENI-EV-701' },
      { int: 'End of Month Approvals', mod: 'Human Approval Center', dest: 'Finance Reconciliation', conf: '88%', state: 'Pending', trace: 'ENI-EV-702' },
      { int: 'Reviewing PR #404', mod: 'Engineering Audit', dest: 'Architecture Governance', conf: '74%', state: 'Pending', trace: 'ENI-EV-703' },
    ]
  },
  'analytics': {
    title: 'Workspace Analytics',
    description: 'Proves the ROI of the unified operating experience by tracking efficiency and satisfaction.',
    icon: 'BarChart3',
    kpis: [
      { label: 'Unified ROI', value: '$12.4M', desc: 'Saved productivity capital', icon: 'LineChart', color: 'text-fuchsia-500', descColor: 'text-fuchsia-400' },
      { label: 'Dashboard Usage', value: '-64%', desc: 'Fewer disparate screens loaded', icon: 'TrendingDown', color: 'text-emerald-500' },
      { label: 'Executive Speed', value: '+42%', desc: 'Time-to-decision improved', icon: 'Zap', color: 'text-blue-500' },
      { label: 'User Satisfaction', value: '98%', desc: 'Workspace approval rating', icon: 'Smile', color: 'text-emerald-500' },
    ],
    headers: ['Workspace Metric', 'Previous Architecture (Disparate)', 'Current Architecture (Unified)', 'Net Improvement', 'Health', 'Evidence'],
    data: [
      { met: 'Daily Context Switches', prev: '42 per executive', curr: '4 per executive', net: '90.4% Reduction', health: 'Optimal', trace: 'WAN-EV-801' },
      { met: 'Incident Response Time', prev: '14 minutes to gather data', curr: '1.4 seconds to assemble', net: '99.9% Faster', health: 'Optimal', trace: 'WAN-EV-802' },
      { met: 'Approval Bottlenecks', prev: '3.4 days average', curr: '14 hours average', net: '82% Faster', health: 'Optimal', trace: 'WAN-EV-803' },
    ]
  },
  'governance': {
    title: 'Workspace Governance Board',
    description: 'Constitutional oversight ensuring the Enterprise Command Center complies with executive visual standards.',
    icon: 'ShieldCheck',
    kpis: [
      { label: 'Layout Compliance', value: '100%', desc: 'Mandatory widgets active', icon: 'Lock', color: 'text-fuchsia-500', descColor: 'text-fuchsia-400' },
      { label: 'Cognitive Load', value: 'Monitored', desc: 'Information density limits', icon: 'BrainCircuit', color: 'text-emerald-500' },
      { label: 'A11y Validations', value: '14.2K', desc: 'Accessibility checks', icon: 'Accessibility', color: 'text-blue-500' },
      { label: 'Policy Overrides', value: '0', desc: 'Zero unauthorized changes', icon: 'XCircle', color: 'text-emerald-500' },
    ],
    headers: ['Workspace Policy', 'Governed Component', 'Enforcement Rule', 'Violations Detected', 'Governance', 'Execution ID'],
    data: [
      { pol: '10-Second Executive Rule', comp: 'Enterprise Command Center', rule: 'Must render within 800ms', viol: '0', gov: 'Verified', trace: 'WGB-EV-901' },
      { pol: 'Approval Centralization', comp: 'Human Approval Center', rule: 'No scattered approval workflows', viol: '0', gov: 'Verified', trace: 'WGB-EV-902' },
      { pol: 'Mandatory Situational Intel', comp: 'Executive Situation Room', rule: 'Cannot be dismissed by user', viol: '0', gov: 'Verified', trace: 'WGB-EV-903' },
    ]
  },
  'evidence': {
    title: 'Workspace Evidence Ledger',
    description: 'Immutable constitutional ledger governing all operations and decisions made within the unified workspace.',
    icon: 'History',
    kpis: [
      { label: 'Workspace Logs', value: '84.2M', desc: 'Cryptographic state records', icon: 'Database', color: 'text-fuchsia-500', descColor: 'text-fuchsia-400' },
      { label: 'Ledger Integrity', value: 'Verified', desc: 'SHA-256 Validated', icon: 'ShieldCheck', color: 'text-emerald-500' },
      { label: 'Commit Velocity', value: '4ms', desc: 'State tracking speed', icon: 'Zap', color: 'text-blue-500' },
      { label: 'Audit Exports', value: '142', desc: 'Compliance reports pulled', icon: 'Download', color: 'text-indigo-500' },
    ],
    headers: ['Event ID', 'Timestamp', 'User Identity', 'Unified Workspace Action', 'Constitutional Governance', 'EvidenceBadge'],
    data: [
      { id: 'WS-E-5501', time: '2026-07-22T09:55:00Z', user: 'U-8842', act: 'Situation Room Assembled: DB Outage', gov: 'Policy: Incident Response', trace: 'EV-W-5501' },
      { id: 'WS-E-5502', time: '2026-07-22T09:52:15Z', user: 'U-1042', act: 'Approved Q3 Financials in Unified Hub', gov: 'Policy: Human Approval', trace: 'EV-W-5502' },
      { id: 'WS-E-5503', time: '2026-07-22T09:45:00Z', user: 'U-5042', act: 'Assistant Explained Audit Failure', gov: 'Policy: Explainable Governance', trace: 'EV-W-5503' },
    ]
  }
};

const pageTemplate = `import React from "react";
import Link from "next/link";
import { ArrowRight, LayoutDashboard, Clock, ActivitySquare, CheckSquare, AlertOctagon, HeartPulse, Bot, Navigation, BarChart3, ShieldCheck, History } from "lucide-react";

export default function WorkspaceCommandCenter() {
  const modules = [
    { name: "Unified Timeline", path: "/workspace/timeline", icon: Clock, color: "text-indigo-400", bg: "bg-indigo-500/10", border: "border-indigo-500/20" },
    { name: "Enterprise Activity", path: "/workspace/activity", icon: ActivitySquare, color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20" },
    { name: "Unified Approvals", path: "/workspace/approvals", icon: CheckSquare, color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
    { name: "Situation Room", path: "/workspace/situation", icon: AlertOctagon, color: "text-rose-400", bg: "bg-rose-500/10", border: "border-rose-500/20" },
    { name: "Organizational Health", path: "/workspace/health", icon: HeartPulse, color: "text-pink-400", bg: "bg-pink-500/10", border: "border-pink-500/20" },
    { name: "Enterprise Assistant", path: "/workspace/assistant", icon: Bot, color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20" },
    { name: "Navigation Intel", path: "/workspace/navigation", icon: Navigation, color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
    { name: "Workspace Analytics", path: "/workspace/analytics", icon: BarChart3, color: "text-yellow-500", bg: "bg-yellow-500/10", border: "border-yellow-500/20" },
    { name: "Governance Board", path: "/workspace/governance", icon: ShieldCheck, color: "text-blue-500", bg: "bg-blue-500/10", border: "border-blue-500/20" },
    { name: "Evidence Ledger", path: "/workspace/evidence", icon: History, color: "text-slate-400", bg: "bg-slate-500/10", border: "border-slate-500/20" },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2 flex items-center gap-3">
              <LayoutDashboard className="w-8 h-8 text-fuchsia-500" />
              Unified Enterprise Command Center (RECCOS)
            </h1>
            <p className="text-slate-400">The constitutional landing experience for the entire Enterprise Operating System.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="px-4 py-2 bg-fuchsia-950/30 border border-fuchsia-900/50 rounded-md">
               <span className="text-xs text-fuchsia-500 font-bold uppercase tracking-wider block mb-1">Executive Rule</span>
               <div className="text-xl font-black text-fuchsia-400">10-Second Intel</div>
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
              <div className="text-xs text-slate-500 flex-1">Govern unified enterprise intelligence.</div>
              <div className="mt-4 flex items-center text-xs font-medium text-slate-400 group-hover:text-fuchsia-400 transition-colors">
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

const basePath = path.join(__dirname, 'src', 'app', 'workspace');
fs.mkdirSync(basePath, { recursive: true });
fs.writeFileSync(path.join(basePath, 'page.tsx'), pageTemplate);

for (const [route, config] of Object.entries(routes)) {
  const routePath = path.join(basePath, route);
  fs.mkdirSync(routePath, { recursive: true });
  fs.writeFileSync(path.join(routePath, 'page.tsx'), generatePage(config.title, config.description, config.icon, config.kpis, config.headers, config.data));
  console.log('Generated route:', route);
}
