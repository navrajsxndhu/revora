const fs = require('fs');
const path = require('path');

const generatePage = (title, description, iconName, kpis, headers, tableData, additionalUI) => {
  const allIcons = ['ArrowLeft', 'Search', 'ShieldCheck', 'Activity', 'Target', 'Download', 'Settings', 'History', 'BrainCircuit', 'Layers', 'Eye', 'Smile', 'Move', 'Languages', 'Accessibility', 'Briefcase', 'Lock', 'LineChart', 'CheckCircle2', 'AlertTriangle', 'XCircle', 'ArrowRight', 'Image', 'Keyboard', 'Timer', 'TrendingUp', 'TrendingDown', 'BookOpen', 'MousePointerClick', 'Database', 'Users', 'FileCode', 'GraduationCap', 'Map', 'ClipboardList', 'Sparkles', 'HeartHandshake', 'Network', 'Award', 'BarChart2', 'FileSignature', 'Lightbulb', 'Compass', 'MessageSquare', 'FolderHeart', 'Tags', 'Fingerprint', 'Users2', 'Video', 'Megaphone', 'Inbox', 'Calendar', 'Globe', 'Handshake', 'MessageCircle'];
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
              <Link href="/collaboration" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to RCCOS Command Center
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
                <input type="text" placeholder="Search Communications..." className="bg-slate-900 border border-slate-700 rounded-md pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-cyan-500 w-64 transition-colors" />
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
            title="Collaboration & Communication Metrics" 
            headers={[${headers.map(h => `"${h}"`).join(', ')}]}
          >
            {${JSON.stringify(tableData)}.map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group cursor-pointer border-b border-slate-800/50">
                ${headers.map((h, j) => {
                  const key = Object.keys(tableData[0])[j];
                  if (h === 'Status' || h === 'Presence' || h === 'Governance') {
                    return `
                <td className="py-4 px-5">
                  <span className={\`px-2 py-1 rounded text-xs font-bold border flex items-center gap-1 w-max \${
                    row.${key} === 'Offline' || row.${key} === 'Do Not Disturb' || row.${key} === 'Restricted' || row.${key} === 'Declined' ? 'bg-rose-900/20 text-rose-400 border-rose-900/50' : 
                    row.${key} === 'Focus Mode' || row.${key} === 'In Meeting' || row.${key} === 'Pending Review' || row.${key} === 'In Progress' ? 'bg-amber-900/20 text-amber-400 border-amber-900/50' :
                    row.${key} === 'Available' || row.${key} === 'Active' || row.${key} === 'Approved' || row.${key} === 'Completed' ? 'bg-emerald-900/20 text-emerald-400 border-emerald-900/50' :
                    'bg-slate-800 text-slate-300 border-slate-700'
                  }\`}>
                    {row.${key}}
                  </span>
                </td>`;
                  }
                  if (h === 'Evidence' || h === 'Trace' || h === 'Execution ID') {
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
  'presence': {
    title: 'Enterprise Presence Intelligence',
    description: 'Real-time human availability, cognitive load tracking, and Focus Mode synchronization.',
    icon: 'Activity',
    kpis: [
      { label: 'Available Workforce', value: '42%', desc: 'Ready for collaboration', icon: 'Users', color: 'text-cyan-500', descColor: 'text-cyan-400' },
      { label: 'In Focus Mode', value: '38%', desc: 'Deep work sessions', icon: 'BrainCircuit', color: 'text-emerald-500' },
      { label: 'Context Switching', value: '-24%', desc: 'Interruptions prevented', icon: 'TrendingDown', color: 'text-blue-500' },
      { label: 'SLA Violations', value: '0', desc: 'Due to unavailability', icon: 'ShieldCheck', color: 'text-emerald-500' },
    ],
    headers: ['Employee / Role', 'Current Context', 'Presence', 'Est. Availability', 'Cognitive Load', 'Trace'],
    data: [
      { user: 'Sarah Jenkins (VP Eng)', ctx: 'Reviewing Architecture Plan', pres: 'Focus Mode', avail: '14:30 EST', load: 'High', trace: 'EPI-EV-101' },
      { user: 'Marcus Chen (Data Sci)', ctx: 'Idle / General Workspace', pres: 'Available', avail: 'Now', load: 'Low', trace: 'EPI-EV-102' },
      { user: 'Elena Rostova (Legal)', ctx: 'Client Call (Zoom)', pres: 'In Meeting', avail: '15:00 EST', load: 'High', trace: 'EPI-EV-103' },
    ]
  },
  'spaces': {
    title: 'Contextual Workspaces',
    description: 'Ephemeral collaboration hubs mapped directly to incidents, policies, or strategic projects.',
    icon: 'Layers',
    kpis: [
      { label: 'Active Spaces', value: '142', desc: 'Current hubs', icon: 'FolderHeart', color: 'text-cyan-500', descColor: 'text-cyan-400' },
      { label: 'Orphaned Spaces', value: '0', desc: 'Auto-archived properly', icon: 'CheckCircle2', color: 'text-emerald-500' },
      { label: 'Cross-Dept Linkage', value: '84%', desc: 'Silos broken', icon: 'Network', color: 'text-blue-500' },
      { label: 'Avg Lifespan', value: '14 Days', desc: 'Ephemeral nature', icon: 'Timer', color: 'text-amber-500' },
    ],
    headers: ['Workspace Name', 'Associated Entity', 'Participants', 'Status', 'Archival Policy', 'Evidence'],
    data: [
      { ws: 'INC-8042 War Room', ent: 'Incident Response', part: '14 (Eng, SRE)', status: 'Active', arch: 'Post-Mortem + 7d', trace: 'CWS-EV-201' },
      { ws: 'Q3 Budget Planning', ent: 'Financial Policy', part: '8 (Finance, Exec)', status: 'Active', arch: 'End of Q3', trace: 'CWS-EV-202' },
      { ws: 'Legacy DB Migration', ent: 'Architecture Project', part: '24 (DevOps, Eng)', status: 'Completed', arch: 'Archived', trace: 'CWS-EV-203' },
    ]
  },
  'decisions': {
    title: 'Collaborative Decision Ledgers',
    description: 'Storing the rationale, debate, and conversational history behind enterprise approvals.',
    icon: 'FileSignature',
    kpis: [
      { label: 'Decisions Logged', value: '14.2K', desc: 'With conversational context', icon: 'MessageSquare', color: 'text-cyan-500', descColor: 'text-cyan-400' },
      { label: 'Dissenting Votes', value: '412', desc: 'Constructive challenges', icon: 'AlertTriangle', color: 'text-amber-500' },
      { label: 'Avg Consensus Time', value: '2.4 Days', desc: 'Speed to decision', icon: 'Timer', color: 'text-blue-500' },
      { label: 'Reverted Decisions', value: '1.2%', desc: 'Long-term accuracy', icon: 'CheckCircle2', color: 'text-emerald-500' },
    ],
    headers: ['Decision Topic', 'Primary Stakeholder', 'Consensus Score', 'Status', 'Resolution Speed', 'Trace'],
    data: [
      { topic: 'Adopt GraphQL API standard', sh: 'Architecture Board', score: '8/10 Approvals', status: 'Approved', speed: '4 Days', trace: 'CDL-EV-301' },
      { topic: 'Q4 Hiring Freeze Exemption', sh: 'Finance & HR', score: '2/4 Approvals', status: 'In Progress', speed: 'N/A', trace: 'CDL-EV-302' },
      { topic: 'Deprecate Legacy Auth Service', sh: 'Security Ops', score: '5/5 Approvals', status: 'Approved', speed: '1 Day', trace: 'CDL-EV-303' },
    ]
  },
  'async': {
    title: 'Asynchronous Alignment Center',
    description: 'Managing non-urgent workflows to prevent meeting fatigue and notification overload.',
    icon: 'Inbox',
    kpis: [
      { label: 'Meetings Avoided', value: '8.4K', desc: 'Hours saved monthly', icon: 'Calendar', color: 'text-cyan-500', descColor: 'text-cyan-400' },
      { label: 'Async Workflows', value: '1.2K', desc: 'Active discussions', icon: 'MessageCircle', color: 'text-emerald-500' },
      { label: 'Avg Response Time', value: '4.2h', desc: 'Within SLA bounds', icon: 'Timer', color: 'text-blue-500' },
      { label: 'Bottlenecks', value: '14', desc: 'Threads requiring intervention', icon: 'AlertTriangle', color: 'text-rose-500' },
    ],
    headers: ['Alignment Topic', 'Initiator', 'Required Responders', 'Deadline', 'Status', 'Evidence'],
    data: [
      { topic: 'Review Q3 Marketing Copy', init: 'Brand Team', req: 'Legal, Compliance', ddl: 'Friday (2d)', status: 'In Progress', trace: 'AAC-EV-401' },
      { topic: 'Vendor Security Questionnaire', init: 'Procurement', req: 'Security Ops', ddl: 'Tomorrow (1d)', status: 'Completed', trace: 'AAC-EV-402' },
      { topic: 'UI Design System Update', init: 'UX Design', req: 'Frontend Leads', ddl: 'Next Week (6d)', status: 'In Progress', trace: 'AAC-EV-403' },
    ]
  },
  'broadcast': {
    title: 'Enterprise Broadcast Governance',
    description: 'High-priority organizational announcements with verifiable delivery tracking and acknowledgement.',
    icon: 'Megaphone',
    kpis: [
      { label: 'Active Broadcasts', value: '3', desc: 'Enterprise wide announcements', icon: 'Megaphone', color: 'text-cyan-500', descColor: 'text-cyan-400' },
      { label: 'Ack Rate', value: '98%', desc: 'Verified reading completion', icon: 'CheckCircle2', color: 'text-emerald-500' },
      { label: 'Noise Reduction', value: '-84%', desc: 'Compared to email blasts', icon: 'TrendingDown', color: 'text-blue-500' },
      { label: 'Mandatory Reads', value: '1', desc: 'Requires signature', icon: 'FileSignature', color: 'text-rose-500' },
    ],
    headers: ['Broadcast Title', 'Authorizer', 'Target Audience', 'Ack Rate', 'Governance', 'Execution ID'],
    data: [
      { title: 'Critical Security Patch: Mandatory Restart', auth: 'CISO', aud: 'Global (All)', ack: '94%', gov: 'Approved', trace: 'EBG-EV-501' },
      { title: 'Updated PTO Policy 2027', auth: 'VP HR', aud: 'Global (All)', ack: '88%', gov: 'Approved', trace: 'EBG-EV-502' },
      { title: 'New CRM Vendor Evaluation', auth: 'Sales Ops', aud: 'Sales Dept', ack: '100%', gov: 'Completed', trace: 'EBG-EV-503' },
    ]
  },
  'meetings': {
    title: 'Intelligent Meeting Governance',
    description: 'Tracking meeting value, cost efficiency, and automatically integrating action items.',
    icon: 'Calendar',
    kpis: [
      { label: 'Total Meeting Cost', value: '$1.4M', desc: 'Estimated monthly OPEX', icon: 'BarChart2', color: 'text-rose-500', descColor: 'text-rose-400' },
      { label: 'Meetings w/ Agenda', value: '94%', desc: 'Constitutional compliance', icon: 'CheckCircle2', color: 'text-emerald-500' },
      { label: 'Action Items', value: '14.2K', desc: 'Automatically extracted', icon: 'Target', color: 'text-blue-500' },
      { label: 'Meeting Load', value: '14h/wk', desc: 'Average per employee', icon: 'Timer', color: 'text-amber-500' },
    ],
    headers: ['Meeting Instance', 'Organizer', 'Attendees (Cost)', 'Action Items', 'Status', 'Trace'],
    data: [
      { mtg: 'Weekly Architecture Review', org: 'Sarah Jenkins', cost: '12 ($4,200)', act: '4 Generated', status: 'Completed', trace: 'IMG-EV-601' },
      { mtg: 'Q3 Earnings Prep', org: 'CFO Office', cost: '4 ($1,800)', act: '0 Generated', status: 'In Progress', trace: 'IMG-EV-602' },
      { mtg: 'Daily Standup (SRE)', org: 'Marcus Chen', cost: '8 ($400)', act: '2 Generated', status: 'Completed', trace: 'IMG-EV-603' },
    ]
  },
  'external': {
    title: 'Secure External Collaboration',
    description: 'Governing vendor, partner, and guest communication without violating enterprise zero-trust.',
    icon: 'Globe',
    kpis: [
      { label: 'Active Guests', value: '412', desc: 'Authenticated partners', icon: 'Handshake', color: 'text-cyan-500', descColor: 'text-cyan-400' },
      { label: 'Shared Workspaces', value: '24', desc: 'External enclaves', icon: 'Layers', color: 'text-emerald-500' },
      { label: 'Data Leakage', value: '0', desc: 'Blocked sharing attempts', icon: 'ShieldCheck', color: 'text-blue-500' },
      { label: 'Expired Access', value: '1.2K', desc: 'Auto-revoked securely', icon: 'Lock', color: 'text-emerald-500' },
    ],
    headers: ['External Entity', 'Sponsor', 'Access Scope', 'Expiration', 'Status', 'Evidence'],
    data: [
      { ext: 'Acme Corp (Vendor)', spon: 'Procurement', scope: 'Project Alpha (Read)', exp: '30 Days', status: 'Active', trace: 'SEC-EV-701' },
      { ext: 'Deloitte (Auditor)', spon: 'Compliance', scope: 'SOC2 Ledger (Read)', exp: '14 Days', status: 'Active', trace: 'SEC-EV-702' },
      { ext: 'Contractor (Jane Doe)', spon: 'Engineering', scope: 'Frontend Repo', exp: 'Yesterday', status: 'Restricted', trace: 'SEC-EV-703' },
    ]
  },
  'analytics': {
    title: 'Collaboration Analytics',
    description: 'Measuring response times, silo-breaking metrics, and organizational engagement.',
    icon: 'BarChart2',
    kpis: [
      { label: 'Engagement Score', value: '92.4', desc: 'Enterprise wide index', icon: 'Activity', color: 'text-cyan-500', descColor: 'text-cyan-400' },
      { label: 'Silo Breaking', value: '+14%', desc: 'Cross-dept interactions', icon: 'Network', color: 'text-emerald-500' },
      { label: 'Response Speed', value: '1.2h', desc: 'Average internal reply', icon: 'Timer', color: 'text-blue-500' },
      { label: 'Meeting Fatigue', value: '-8%', desc: 'Reduction MoM', icon: 'TrendingDown', color: 'text-emerald-500' },
    ],
    headers: ['Department', 'Collaboration Health', 'Cross-Team %', 'Async Adoption', 'Status', 'Trace'],
    data: [
      { dept: 'Engineering', health: '98/100', cross: '64%', async: 'High', status: 'Verified', trace: 'COA-EV-801' },
      { dept: 'Sales & Marketing', health: '94/100', cross: '42%', async: 'Medium', status: 'Verified', trace: 'COA-EV-802' },
      { dept: 'Legal & Compliance', health: '82/100', cross: '88%', async: 'Low', status: 'Review Required', trace: 'COA-EV-803' },
    ]
  },
  'reviews': {
    title: 'Collaboration Governance Board',
    description: 'Reviewing external sharing requests, broad communication policies, and collaboration exemptions.',
    icon: 'ShieldCheck',
    kpis: [
      { label: 'Pending Reviews', value: '14', desc: 'Sharing & Access requests', icon: 'ClipboardList', color: 'text-amber-500', descColor: 'text-amber-400' },
      { label: 'Approval Speed', value: '4.2h', desc: 'Average turnaround', icon: 'Timer', color: 'text-cyan-500' },
      { label: 'Auto-Rejected', value: '842', desc: 'Zero-trust violations', icon: 'ShieldCheck', color: 'text-emerald-500' },
      { label: 'Policy Coverage', value: '100%', desc: 'Governance applied', icon: 'CheckCircle2', color: 'text-blue-500' },
    ],
    headers: ['Governance Request', 'Requestor', 'Target Scope', 'Risk Level', 'Status', 'Execution ID'],
    data: [
      { req: 'Share Q3 Financials with KPMG', reqs: 'CFO Office', scope: 'External Partner', risk: 'High', status: 'Approved', trace: 'CGB-EV-901' },
      { req: 'Create cross-org public channel', reqs: 'Social Committee', scope: 'Global Internal', risk: 'Low', status: 'Approved', trace: 'CGB-EV-902' },
      { req: 'Invite external dev to Prod DB', reqs: 'Contractor', scope: 'Production Infra', risk: 'Critical', status: 'Restricted', trace: 'CGB-EV-903' },
    ]
  },
  'evidence': {
    title: 'Collaboration Evidence Ledger',
    description: 'Cryptographic auditing for every cross-functional decision, message interaction, and broadcast.',
    icon: 'History',
    kpis: [
      { label: 'Decisions Secured', value: '14.2M', desc: 'Immutable records', icon: 'Database', color: 'text-cyan-500', descColor: 'text-cyan-400' },
      { label: 'Audit Trail Health', value: 'Verified', desc: 'Hash chain valid', icon: 'CheckCircle2', color: 'text-emerald-500' },
      { label: 'E-Discovery Hits', value: '412', desc: 'Legal/Compliance searches', icon: 'Search', color: 'text-blue-500' },
      { label: 'Data Retention', value: '99.9%', desc: 'Policy compliance', icon: 'FileCode', color: 'text-indigo-500' },
    ],
    headers: ['Event ID', 'Timestamp', 'Primary Actor', 'Collaboration Event', 'Constitutional Impact', 'EvidenceBadge'],
    data: [
      { id: 'COL-E-9042', time: '2026-07-22T08:14:00Z', actor: 'Sarah Jenkins', act: 'Approved Decision: GraphQL', impact: 'Architecture Strategy', trace: 'EV-C-9042' },
      { id: 'COL-E-9041', time: '2026-07-22T08:12:15Z', actor: 'CISO Office', act: 'Sent Enterprise Broadcast', impact: 'Mandatory Policy Ack', trace: 'EV-C-9041' },
      { id: 'COL-E-9040', time: '2026-07-22T08:05:00Z', actor: 'Contractor', act: 'Attempted to share Prod DB', impact: 'Blocked (Zero-Trust)', trace: 'EV-C-9040' },
    ]
  }
};

const pageTemplate = `import React from "react";
import Link from "next/link";
import { ArrowRight, Users2, Activity, Layers, FileSignature, Inbox, Megaphone, Calendar, Globe, BarChart2, ShieldCheck, History } from "lucide-react";

export default function CollaborationCommandCenter() {
  const modules = [
    { name: "Presence Intelligence", path: "/collaboration/presence", icon: Activity, color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20" },
    { name: "Contextual Workspaces", path: "/collaboration/spaces", icon: Layers, color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
    { name: "Collaborative Decisions", path: "/collaboration/decisions", icon: FileSignature, color: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/20" },
    { name: "Async Alignment", path: "/collaboration/async", icon: Inbox, color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20" },
    { name: "Enterprise Broadcast", path: "/collaboration/broadcast", icon: Megaphone, color: "text-rose-400", bg: "bg-rose-500/10", border: "border-rose-500/20" },
    { name: "Meeting Governance", path: "/collaboration/meetings", icon: Calendar, color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
    { name: "Secure External Ops", path: "/collaboration/external", icon: Globe, color: "text-yellow-500", bg: "bg-yellow-500/10", border: "border-yellow-500/20" },
    { name: "Collaboration Analytics", path: "/collaboration/analytics", icon: BarChart2, color: "text-indigo-400", bg: "bg-indigo-500/10", border: "border-indigo-500/20" },
    { name: "Governance Board", path: "/collaboration/reviews", icon: ShieldCheck, color: "text-blue-500", bg: "bg-blue-500/10", border: "border-blue-500/20" },
    { name: "Evidence Ledger", path: "/collaboration/evidence", icon: History, color: "text-slate-400", bg: "bg-slate-500/10", border: "border-slate-500/20" },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2 flex items-center gap-3">
              <Users2 className="w-8 h-8 text-cyan-500" />
              Collaboration & Communication OS (RCCOS)
            </h1>
            <p className="text-slate-400">Executive dashboard governing real-time presence, async alignment, and human workflow connectivity.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="px-4 py-2 bg-cyan-950/30 border border-cyan-900/50 rounded-md">
               <span className="text-xs text-cyan-500 font-bold uppercase tracking-wider block mb-1">Collaboration Health</span>
               <div className="text-xl font-black text-cyan-400">96.4 A+</div>
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
              <div className="text-xs text-slate-500 flex-1">Govern communication protocols and alignment.</div>
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

const basePath = path.join(__dirname, 'src', 'app', 'collaboration');
fs.mkdirSync(basePath, { recursive: true });
fs.writeFileSync(path.join(basePath, 'page.tsx'), pageTemplate);

for (const [route, config] of Object.entries(routes)) {
  const routePath = path.join(basePath, route);
  fs.mkdirSync(routePath, { recursive: true });
  fs.writeFileSync(path.join(routePath, 'page.tsx'), generatePage(config.title, config.description, config.icon, config.kpis, config.headers, config.data));
  console.log('Generated route:', route);
}
