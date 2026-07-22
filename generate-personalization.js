const fs = require('fs');
const path = require('path');

const generatePage = (title, description, iconName, kpis, headers, tableData, additionalUI) => {
  const allIcons = ['ArrowLeft', 'Search', 'ShieldCheck', 'Activity', 'Target', 'Download', 'Settings', 'History', 'BrainCircuit', 'Layers', 'Eye', 'Smile', 'Move', 'Languages', 'Accessibility', 'Briefcase', 'Lock', 'LineChart', 'CheckCircle2', 'AlertTriangle', 'XCircle', 'ArrowRight', 'Image', 'Keyboard', 'Timer', 'TrendingUp', 'TrendingDown', 'BookOpen', 'MousePointerClick', 'Database', 'Users', 'FileCode', 'GraduationCap', 'Map', 'ClipboardList', 'Sparkles', 'HeartHandshake', 'Network', 'Award', 'BarChart2', 'FileSignature', 'Lightbulb', 'Compass', 'MessageSquare', 'FolderHeart', 'Tags', 'Fingerprint', 'Users2', 'Video', 'Megaphone', 'Inbox', 'Calendar', 'Globe', 'Handshake', 'MessageCircle', 'Zap', 'Wind', 'Cpu', 'Mouse', 'Monitor', 'EyeOff', 'Laptop', 'Smartphone', 'Box', 'Maximize', 'Gauge', 'Eye', 'Unlock', 'HelpCircle', 'Terminal', 'ThumbsUp', 'LayoutDashboard', 'Star', 'Bell', 'LineChart', 'UserCircle2'];
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
              <Link href="/personalization" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to RPAWPOS Command Center
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
                <input type="text" placeholder="Search Personalization Logs..." className="bg-slate-900 border border-slate-700 rounded-md pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-cyan-500 w-64 transition-colors" />
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
            title="Personalization & Adaptability Metrics" 
            headers={[${headers.map(h => `"${h}"`).join(', ')}]}
          >
            {${JSON.stringify(tableData)}.map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group cursor-pointer border-b border-slate-800/50">
                ${headers.map((h, j) => {
                  const key = Object.keys(tableData[0])[j];
                  if (h === 'Status' || h === 'Efficiency' || h === 'Governance' || h === 'Focus Level') {
                    return `
                <td className="py-4 px-5">
                  <span className={\`px-2 py-1 rounded text-xs font-bold border flex items-center gap-1 w-max \${
                    row.${key} === 'Critical' || row.${key} === 'Low' || row.${key} === 'Blocked' || row.${key} === 'Failed' ? 'bg-rose-900/20 text-rose-400 border-rose-900/50' : 
                    row.${key} === 'Warning' || row.${key} === 'Medium' || row.${key} === 'Review Required' ? 'bg-amber-900/20 text-amber-400 border-amber-900/50' :
                    row.${key} === 'Optimal' || row.${key} === 'High' || row.${key} === 'Approved' || row.${key} === 'Verified' || row.${key} === 'Deep Focus' ? 'bg-emerald-900/20 text-emerald-400 border-emerald-900/50' :
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
  'workspaces': {
    title: 'Adaptive Workspace Designer',
    description: 'Governs role-specific layouts, allowing the interface to intuitively match the user’s responsibilities.',
    icon: 'LayoutDashboard',
    kpis: [
      { label: 'Active Workspaces', value: '14.2K', desc: 'Customized instances', icon: 'Users', color: 'text-cyan-500', descColor: 'text-cyan-400' },
      { label: 'Role Alignment', value: '98%', desc: 'Matching primary duty', icon: 'Target', color: 'text-emerald-500' },
      { label: 'Accessibility Modes', value: '8.4%', desc: 'Specialized visual rules', icon: 'Eye', color: 'text-blue-500' },
      { label: 'Orphaned Layouts', value: '0', desc: 'Auto-pruned unused views', icon: 'ShieldCheck', color: 'text-emerald-500' },
    ],
    headers: ['Workspace Name', 'Primary Audience', 'Mandatory Widgets', 'Customization Allowance', 'Governance', 'Trace'],
    data: [
      { name: 'Executive Overview', aud: 'C-Suite', wids: 'P&L, Risk Radar', allow: 'Locked', gov: 'Verified', trace: 'AWD-EV-101' },
      { name: 'Security Console', aud: 'SOC Analysts', wids: 'Active Threats, Alerts', allow: 'High (Draggable)', gov: 'Verified', trace: 'AWD-EV-102' },
      { name: 'Engineering Daily', aud: 'Developers', wids: 'PR Queue, Build Status', allow: 'Medium', gov: 'Verified', trace: 'AWD-EV-103' },
    ]
  },
  'widgets': {
    title: 'Smart Widget Manager',
    description: 'Tracks the composition and usage of modular UI components while enforcing core governance.',
    icon: 'Box',
    kpis: [
      { label: 'Widget Usage', value: '840K', desc: 'Daily widget interactions', icon: 'MousePointerClick', color: 'text-cyan-500', descColor: 'text-cyan-400' },
      { label: 'Avg Widgets / User', value: '6.4', desc: 'Cognitive load check', icon: 'Layers', color: 'text-emerald-500' },
      { label: 'Locked Core Widgets', value: '100%', desc: 'Governance preserved', icon: 'Lock', color: 'text-blue-500' },
      { label: 'Hidden (Unused)', value: '-14%', desc: 'Clutter reduction', icon: 'TrendingDown', color: 'text-emerald-500' },
    ],
    headers: ['Widget Component', 'Category', 'Engagement Rate', 'Constitutional Requirement', 'Status', 'Trace'],
    data: [
      { wid: 'Pending Approvals', cat: 'Workflow', eng: 'High', req: 'Mandatory (Managers)', status: 'Optimal', trace: 'SWM-EV-201' },
      { wid: 'System Health Status', cat: 'Observability', eng: 'Medium', req: 'Optional', status: 'Optimal', trace: 'SWM-EV-202' },
      { wid: 'Team Birthdays', cat: 'Social', eng: 'Low', req: 'Optional', status: 'Warning', trace: 'SWM-EV-203' },
    ]
  },
  'favorites': {
    title: 'Intelligent Favorites & Shortcuts',
    description: 'Machine learning suggestions that adapt navigation strictly based on actual workflow patterns.',
    icon: 'Star',
    kpis: [
      { label: 'Time Saved (MoM)', value: '14k Hrs', desc: 'Faster navigation', icon: 'Timer', color: 'text-cyan-500', descColor: 'text-cyan-400' },
      { label: 'AI Accuracy', value: '92%', desc: 'Predicted next action', icon: 'BrainCircuit', color: 'text-emerald-500' },
      { label: 'Clicks Reduced', value: '4.2M', desc: 'Efficiency metric', icon: 'Mouse', color: 'text-blue-500' },
      { label: 'Manual Overrides', value: '8%', desc: 'User pinned explicitly', icon: 'Settings', color: 'text-amber-500' },
    ],
    headers: ['User Role', 'Suggested Shortcut', 'Confidence Score', 'Automation Trigger', 'Efficiency', 'Trace'],
    data: [
      { role: 'Financial Controller', short: 'Q3 Ledger Audit', conf: '98%', trig: 'End of Month', eff: 'High', trace: 'IFS-EV-301' },
      { role: 'DevOps Engineer', short: 'AWS Cluster Logs', conf: '94%', trig: 'Active Incident', eff: 'High', trace: 'IFS-EV-302' },
      { role: 'HR Manager', short: 'Onboarding Queue', conf: '88%', trig: 'Monday Morning', eff: 'High', trace: 'IFS-EV-303' },
    ]
  },
  'focus': {
    title: 'Productivity Focus Engine',
    description: 'Eliminates noise by adapting the entire Enterprise UI to match the user\'s current objective.',
    icon: 'Target',
    kpis: [
      { label: 'Focus Sessions', value: '42K', desc: 'Weekly deep work', icon: 'Activity', color: 'text-cyan-500', descColor: 'text-cyan-400' },
      { label: 'Avg Duration', value: '1h 14m', desc: 'Uninterrupted time', icon: 'Timer', color: 'text-emerald-500' },
      { label: 'Alerts Suppressed', value: '8.4M', desc: 'Distractions blocked', icon: 'Bell', color: 'text-blue-500' },
      { label: 'Task Completion', value: '+34%', desc: 'Versus standard mode', icon: 'TrendingUp', color: 'text-emerald-500' },
    ],
    headers: ['Focus Profile', 'Suppressed Modules', 'Priority Escalation', 'Active Users', 'Focus Level', 'Evidence'],
    data: [
      { prof: 'Incident Response Mode', supp: 'Social, HR, Routine Tasks', esc: 'P1 Alerts Only', act: '142', level: 'Deep Focus', trace: 'PFE-EV-401' },
      { prof: 'Executive Review', supp: 'Chat, Minor Notifications', esc: 'C-Suite Approvals', act: '18', level: 'High', trace: 'PFE-EV-402' },
      { prof: 'Standard Work', supp: 'None', esc: 'Standard SLA Rules', act: '14,020', level: 'Medium', trace: 'PFE-EV-403' },
    ]
  },
  'notifications': {
    title: 'Adaptive Notification Intelligence',
    description: 'Categorizes and queues notifications so users only see what is critical right now.',
    icon: 'Bell',
    kpis: [
      { label: 'Noise Reduction', value: '82%', desc: 'Filtered standard alerts', icon: 'TrendingDown', color: 'text-cyan-500', descColor: 'text-cyan-400' },
      { label: 'Critical SLAs Met', value: '99.9%', desc: 'No missed escalations', icon: 'CheckCircle2', color: 'text-emerald-500' },
      { label: 'Batched Digests', value: '1.4M', desc: 'Async summaries sent', icon: 'Inbox', color: 'text-blue-500' },
      { label: 'Notification Fatigue', value: 'Low', desc: 'User sentiment score', icon: 'Smile', color: 'text-emerald-500' },
    ],
    headers: ['Notification Type', 'Adaptive Rule', 'Delivery Method', 'Average Open Rate', 'Governance', 'Trace'],
    data: [
      { type: 'Security Breach (P1)', rule: 'Bypass Focus Mode', del: 'Push, SMS, UI Modal', open: '100%', gov: 'Verified', trace: 'ANI-EV-501' },
      { type: 'Expense Approval', rule: 'Batch Daily at 4PM', del: 'Digest Email', open: '84%', gov: 'Verified', trace: 'ANI-EV-502' },
      { type: 'System Update', rule: 'Suppress if working', del: 'Silent Notification Center', open: '42%', gov: 'Verified', trace: 'ANI-EV-503' },
    ]
  },
  'insights': {
    title: 'Productivity Insights Center',
    description: 'Analyzes navigation efficiency, providing users with actionable metrics on their own workflow.',
    icon: 'BrainCircuit',
    kpis: [
      { label: 'Insights Generated', value: '1.2M', desc: 'Personalized tips', icon: 'Lightbulb', color: 'text-cyan-500', descColor: 'text-cyan-400' },
      { label: 'Tip Adoption Rate', value: '44%', desc: 'Users changed behavior', icon: 'MousePointerClick', color: 'text-emerald-500' },
      { label: 'Avg Time Saved', value: '14m / day', desc: 'Per user efficiency', icon: 'Timer', color: 'text-blue-500' },
      { label: 'Context Switches', value: '-22%', desc: 'Reduced workflow jumps', icon: 'TrendingDown', color: 'text-emerald-500' },
    ],
    headers: ['Insight Category', 'Recommendation Example', 'Detected Inefficiency', 'Global Adoption', 'Status', 'Execution ID'],
    data: [
      { cat: 'Navigation', rec: 'Pin "Approvals" to Sidebar', ineff: 'Searching for approvals daily', adopt: '68%', status: 'Optimal', trace: 'PIC-EV-601' },
      { cat: 'Meeting Habits', rec: 'Enable Auto-Decline under Focus', ineff: 'Context switching during coding', adopt: '41%', status: 'Optimal', trace: 'PIC-EV-602' },
      { cat: 'Search', rec: 'Use "is:open" shortcut', ineff: 'Manual filtering tickets', adopt: '22%', status: 'Warning', trace: 'PIC-EV-603' },
    ]
  },
  'templates': {
    title: 'Workspace Templates Library',
    description: 'Standardized organizational layouts that accelerate onboarding and maintain department consistency.',
    icon: 'Layers',
    kpis: [
      { label: 'Active Templates', value: '42', desc: 'Governed starting points', icon: 'FileCode', color: 'text-cyan-500', descColor: 'text-cyan-400' },
      { label: 'Onboarding Speed', value: '+40%', desc: 'Faster time to value', icon: 'TrendingUp', color: 'text-emerald-500' },
      { label: 'Template Drift', value: '12%', desc: 'Customizations made', icon: 'Move', color: 'text-blue-500' },
      { label: 'Compliance Lock', value: '100%', desc: 'Security widgets fixed', icon: 'Lock', color: 'text-emerald-500' },
    ],
    headers: ['Template Name', 'Target Department', 'Locked Widgets', 'User Adoption', 'Governance', 'Trace'],
    data: [
      { temp: 'SecOps Standard', dept: 'Security', locked: 'Threat Radar, Alerts', adopt: '100%', gov: 'Verified', trace: 'WTL-EV-701' },
      { temp: 'HR Generalist', dept: 'Human Resources', locked: 'Compliance News', adopt: '88%', gov: 'Verified', trace: 'WTL-EV-702' },
      { temp: 'Developer Base', dept: 'Engineering', locked: 'Sprint Burndown', adopt: '94%', gov: 'Verified', trace: 'WTL-EV-703' },
    ]
  },
  'analytics': {
    title: 'Personalization Analytics',
    description: 'Executive intelligence demonstrating the ROI of an adaptive, tailored workspace strategy.',
    icon: 'LineChart',
    kpis: [
      { label: 'Personalization ROI', value: '$2.4M', desc: 'Est. time savings value', icon: 'Target', color: 'text-cyan-500', descColor: 'text-cyan-400' },
      { label: 'Active Customizers', value: '84%', desc: 'Workforce engagement', icon: 'Users', color: 'text-emerald-500' },
      { label: 'Fatigue Metrics', value: 'Low', desc: 'Navigation stress', icon: 'Smile', color: 'text-blue-500' },
      { label: 'Focus ROI', value: '+14%', desc: 'Throughput increase', icon: 'TrendingUp', color: 'text-emerald-500' },
    ],
    headers: ['Department', 'Avg Layout Customizations', 'Focus Mode Adoption', 'Est. Time Saved (Weekly)', 'Status', 'Evidence'],
    data: [
      { dept: 'Engineering', avg: '4.2 tweaks', foc: '82%', est: '2.4 Hours', status: 'Optimal', trace: 'PAN-EV-801' },
      { dept: 'Sales', avg: '1.4 tweaks', foc: '14%', est: '45 Minutes', status: 'Warning', trace: 'PAN-EV-802' },
      { dept: 'Leadership', avg: '2.8 tweaks', foc: '64%', est: '1.2 Hours', status: 'Optimal', trace: 'PAN-EV-803' },
    ]
  },
  'governance': {
    title: 'Personalization Governance Board',
    description: 'Constitutional oversight ensuring that personalized layouts never breach security or compliance rules.',
    icon: 'ShieldCheck',
    kpis: [
      { label: 'Layout Breaches', value: '0', desc: 'Security widgets hidden', icon: 'ShieldCheck', color: 'text-cyan-500', descColor: 'text-cyan-400' },
      { label: 'Mandatory Overrides', value: '1.4K', desc: 'A11y requirements', icon: 'Accessibility', color: 'text-emerald-500' },
      { label: 'Policy Enforcements', value: '14.2K', desc: 'Restored locked views', icon: 'Lock', color: 'text-blue-500' },
      { label: 'UI Exceptions', value: '4', desc: 'Board approved custom', icon: 'ClipboardList', color: 'text-amber-500' },
    ],
    headers: ['Governance Policy', 'Protected Widget/Layout', 'Enforcement Logic', 'Infractions', 'Governance', 'Execution ID'],
    data: [
      { pol: 'C-Suite Info Security', widget: 'Insider Risk Radar', logic: 'Cannot be unpinned', inf: '0', gov: 'Verified', trace: 'PGB-EV-901' },
      { pol: 'Accessibility First', widget: 'Global UI', logic: 'High Contrast Override', inf: '0', gov: 'Verified', trace: 'PGB-EV-902' },
      { pol: 'Financial Compliance', widget: 'Quarterly Ledger', logic: 'Locked for Finance roles', inf: '2 (Auto-Reverted)', gov: 'Verified', trace: 'PGB-EV-903' },
    ]
  },
  'evidence': {
    title: 'Personalization Evidence Ledger',
    description: 'Immutable cryptographic trails for all adaptive changes and workspace personalization actions.',
    icon: 'History',
    kpis: [
      { label: 'Adaptive Logs', value: '8.4M', desc: 'Workspace mutations', icon: 'Database', color: 'text-cyan-500', descColor: 'text-cyan-400' },
      { label: 'Template Hashes', value: 'Verified', desc: 'Integrity confirmed', icon: 'ShieldCheck', color: 'text-emerald-500' },
      { label: 'Sync Latency', value: '12ms', desc: 'Cross-device state', icon: 'Zap', color: 'text-blue-500' },
      { label: 'Audit Queries', value: '412', desc: 'Compliance checks', icon: 'Search', color: 'text-indigo-500' },
    ],
    headers: ['Event ID', 'Timestamp', 'User Identity', 'Personalization Action', 'Constitutional Governance', 'EvidenceBadge'],
    data: [
      { id: 'PER-E-1204', time: '2026-07-22T09:14:00Z', user: 'U-8842', act: 'Enabled Deep Focus Mode', gov: 'Policy: Attention Mgmt', trace: 'EV-P-1204' },
      { id: 'PER-E-1203', time: '2026-07-22T09:12:15Z', user: 'U-1042', act: 'Pinned "Approvals" Widget', gov: 'Policy: Custom Layouts', trace: 'EV-P-1203' },
      { id: 'PER-E-1202', time: '2026-07-22T09:05:00Z', user: 'System', act: 'Auto-Applied SecOps Template', gov: 'Policy: Role Defaults', trace: 'EV-P-1202' },
    ]
  }
};

const pageTemplate = `import React from "react";
import Link from "next/link";
import { ArrowRight, UserCircle2, LayoutDashboard, Box, Star, Target, Bell, BrainCircuit, Layers, LineChart, ShieldCheck, History } from "lucide-react";

export default function PersonalizationCommandCenter() {
  const modules = [
    { name: "Adaptive Workspaces", path: "/personalization/workspaces", icon: LayoutDashboard, color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20" },
    { name: "Smart Widgets", path: "/personalization/widgets", icon: Box, color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
    { name: "Intelligent Favorites", path: "/personalization/favorites", icon: Star, color: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/20" },
    { name: "Productivity Focus", path: "/personalization/focus", icon: Target, color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20" },
    { name: "Adaptive Notifications", path: "/personalization/notifications", icon: Bell, color: "text-rose-400", bg: "bg-rose-500/10", border: "border-rose-500/20" },
    { name: "Productivity Insights", path: "/personalization/insights", icon: BrainCircuit, color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
    { name: "Workspace Templates", path: "/personalization/templates", icon: Layers, color: "text-indigo-400", bg: "bg-indigo-500/10", border: "border-indigo-500/20" },
    { name: "Personalization Analytics", path: "/personalization/analytics", icon: LineChart, color: "text-yellow-500", bg: "bg-yellow-500/10", border: "border-yellow-500/20" },
    { name: "Governance Board", path: "/personalization/governance", icon: ShieldCheck, color: "text-blue-500", bg: "bg-blue-500/10", border: "border-blue-500/20" },
    { name: "Evidence Ledger", path: "/personalization/evidence", icon: History, color: "text-slate-400", bg: "bg-slate-500/10", border: "border-slate-500/20" },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2 flex items-center gap-3">
              <UserCircle2 className="w-8 h-8 text-cyan-500" />
              Personalization & Adaptive OS (RPAWPOS)
            </h1>
            <p className="text-slate-400">Executive dashboard governing intelligent workspace adaptation, productivity, and focus states.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="px-4 py-2 bg-cyan-950/30 border border-cyan-900/50 rounded-md">
               <span className="text-xs text-cyan-500 font-bold uppercase tracking-wider block mb-1">Adaptive Experience</span>
               <div className="text-xl font-black text-cyan-400">Optimal</div>
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
              <div className="text-xs text-slate-500 flex-1">Govern personal layouts and focus settings.</div>
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

const basePath = path.join(__dirname, 'src', 'app', 'personalization');
fs.mkdirSync(basePath, { recursive: true });
fs.writeFileSync(path.join(basePath, 'page.tsx'), pageTemplate);

for (const [route, config] of Object.entries(routes)) {
  const routePath = path.join(basePath, route);
  fs.mkdirSync(routePath, { recursive: true });
  fs.writeFileSync(path.join(routePath, 'page.tsx'), generatePage(config.title, config.description, config.icon, config.kpis, config.headers, config.data));
  console.log('Generated route:', route);
}
