const fs = require('fs');
const path = require('path');

const generatePage = (title, description, iconName, kpis, headers, tableData, additionalUI) => {
  const allIcons = ['ArrowLeft', 'Search', 'ShieldCheck', 'Activity', 'Target', 'Download', 'Settings', 'History', 'BrainCircuit', 'Layers', 'Eye', 'Smile', 'Move', 'Languages', 'Accessibility', 'Briefcase', 'Lock', 'LineChart', 'CheckCircle2', 'AlertTriangle', 'XCircle', 'ArrowRight', 'Image', 'Keyboard', 'Timer', 'TrendingUp', 'TrendingDown', 'BookOpen', 'MousePointerClick', 'Database', 'Users', 'FileCode', 'GraduationCap', 'Map', 'ClipboardList', 'Sparkles', 'HeartHandshake', 'Network', 'Award', 'BarChart2', 'FileSignature', 'Lightbulb', 'Compass', 'MessageSquare', 'FolderHeart', 'Tags', 'Fingerprint', 'Users2', 'Video', 'Megaphone', 'Inbox', 'Calendar', 'Globe', 'Handshake', 'MessageCircle', 'Zap', 'Wind', 'Cpu', 'Mouse', 'Monitor', 'EyeOff', 'Laptop', 'Smartphone', 'Box', 'Maximize', 'Gauge', 'Unlock', 'HelpCircle', 'Terminal', 'ThumbsUp', 'LayoutDashboard', 'Star', 'Bell', 'LineChart', 'UserCircle2', 'RefreshCw', 'Tablet', 'WifiOff', 'ServerCrash', 'MapPin', 'Cast', 'Clock', 'ActivitySquare', 'CheckSquare', 'AlertOctagon', 'HeartPulse', 'Bot', 'Navigation', 'BarChart3', 'Paintbrush', 'Type', 'Wand2', 'Palette', 'Component', 'Sparkle', 'Share2', 'Waypoints', 'GitMerge', 'Radar', 'Telescope', 'Binary', 'Workflow', 'Microscope', 'MonitorPlay', 'Columns', 'Menu', 'Save', 'GitCompare', 'Layout', 'SearchCode', 'LineChart', 'UsersRound', 'Scale', 'LinkIcon', 'PenTool', 'GitPullRequest', 'UserCheck', 'Library', 'Plug', 'PlayCircle', 'ListChecks', 'BookMarked'];
  if (!allIcons.includes(iconName)) allIcons.push(iconName);
  
  const uniqueIconsStr = [...new Set(allIcons)].join(', ');

  return `import React from "react";
import Link from "next/link";
import { ${uniqueIconsStr}, Link as LinkIconComponent } from "lucide-react";
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
              <Link href="/orchestration" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Orchestration Hub
              </Link>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2 flex items-center gap-3">
              <${iconName} className="w-8 h-8 text-indigo-400" />
              ${title}
            </h1>
            <p className="text-slate-400">${description}</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="relative">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input type="text" placeholder="Search Orchestrations..." className="bg-slate-900 border border-slate-700 rounded-md pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-indigo-400 w-64 transition-colors" />
             </div>
             <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-md text-sm font-medium transition-colors text-slate-200">
               <Download className="w-4 h-4" /> Export Ledger
             </button>
          </div>
        </header>

        {/* KPIs */}
        <div className="grid grid-cols-4 gap-4 shrink-0">
          ${kpis.map((kpi, i) => `
          <div className="bg-slate-900/60 border ${i === 0 ? 'border-indigo-900/30 bg-indigo-950/10 shadow-[0_0_15px_rgba(129,140,248,0.05)]' : 'border-slate-800'} rounded-xl p-5">
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
            title="Orchestration Metrics" 
            headers={[${headers.map(h => `"${h}"`).join(', ')}]}
          >
            {${JSON.stringify(tableData)}.map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group cursor-pointer border-b border-slate-800/50">
                ${headers.map((h, j) => {
                  const key = Object.keys(tableData[0])[j];
                  if (h === 'Status' || h === 'State' || h === 'Condition' || h === 'Priority' || h === 'Governance') {
                    return `
                <td className="py-4 px-5">
                  <span className={\`px-2 py-1 rounded text-xs font-bold border flex items-center gap-1 w-max \${
                    row.${key} === 'Critical' || row.${key} === 'High' || row.${key} === 'Blocked' || row.${key} === 'Failed' ? 'bg-rose-900/20 text-rose-400 border-rose-900/50' : 
                    row.${key} === 'Warning' || row.${key} === 'Medium' || row.${key} === 'Pending' || row.${key} === 'Simulating' ? 'bg-amber-900/20 text-amber-400 border-amber-900/50' :
                    row.${key} === 'Optimal' || row.${key} === 'Active' || row.${key} === 'Approved' || row.${key} === 'Verified' || row.${key} === 'Live' || row.${key} === 'Executed' ? 'bg-emerald-900/20 text-emerald-400 border-emerald-900/50' :
                    'bg-slate-800 text-slate-300 border-slate-700'
                  }\`}>
                    {row.${key}}
                  </span>
                </td>`;
                  }
                  if (h === 'Evidence' || h === 'Trace' || h === 'Execution ID') {
                    return `
                <td className="py-4 px-5">
                  <EvidenceBadge evidenceId={row.${key}} timestamp="Orchestrated" />
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
  'designer': {
    title: 'Visual Workflow Designer',
    description: 'A drag-and-drop constitutional workflow builder that models human approvals, policy checks, and execution paths.',
    icon: 'PenTool',
    kpis: [
      { label: 'Workflows Modeled', value: '1,402', desc: 'Enterprise wide', icon: 'Workflow', color: 'text-indigo-500', descColor: 'text-indigo-400' },
      { label: 'Avg Blocks', value: '8.4', desc: 'Per workflow', icon: 'Box', color: 'text-emerald-500' },
      { label: 'Validation Rate', value: '99.8%', desc: 'Policy compliance', icon: 'ShieldCheck', color: 'text-blue-500' },
      { label: 'Template Usage', value: '84%', desc: 'Derived from library', icon: 'Library', color: 'text-emerald-500' },
    ],
    headers: ['Workflow Name', 'Department', 'Complexity', 'Human Checkpoints', 'State', 'Trace'],
    data: [
      { wf: 'Incident Escalation T1->T2', dept: 'Security Ops', comp: 'Medium (6 nodes)', human: 'Required (SOC Lead)', state: 'Active', trace: 'DES-EV-101' },
      { wf: 'Vendor Marketplace Onboarding', dept: 'Procurement', comp: 'High (14 nodes)', human: 'Required (Legal, CISO)', state: 'Draft', trace: 'DES-EV-102' },
      { wf: 'Automated IAM De-provisioning', dept: 'IT', comp: 'Low (3 nodes)', human: 'Required (Manager)', state: 'Active', trace: 'DES-EV-103' },
    ]
  },
  'workflows': {
    title: 'Constitutional Workflow Engine',
    description: 'The governed registry executing enterprise workflows while ensuring absolute compliance to mapped policies.',
    icon: 'GitPullRequest',
    kpis: [
      { label: 'Active Executions', value: '412/s', desc: 'Global throughput', icon: 'Activity', color: 'text-indigo-500', descColor: 'text-indigo-400' },
      { label: 'Execution Success', value: '99.99%', desc: 'SLA adherence', icon: 'CheckCircle2', color: 'text-emerald-500' },
      { label: 'Avg Execution Time', value: '1.2s', desc: 'Excluding human wait', icon: 'Timer', color: 'text-blue-500' },
      { label: 'Policy Blocks', value: '142', desc: 'Unauthorized executions', icon: 'Lock', color: 'text-rose-500' },
    ],
    headers: ['Execution Instance', 'Workflow Reference', 'Started By', 'Current Step', 'Status', 'Execution ID'],
    data: [
      { inst: 'EX-9901-SEC', ref: 'Firewall Port Modification', by: 'jdoe@revora', step: 'Awaiting CISO Auth', status: 'Pending', trace: 'CWE-EV-201' },
      { inst: 'EX-9902-HR', ref: 'Contractor Offboarding', by: 'System Trigger', step: 'Revoking AWS Access', status: 'Active', trace: 'CWE-EV-202' },
      { inst: 'EX-9903-FIN', ref: 'Q3 Budget Reallocation', by: 'mchen@revora', step: 'Completed', status: 'Executed', trace: 'CWE-EV-203' },
    ]
  },
  'approvals': {
    title: 'Human Approval Orchestrator',
    description: 'Coordinates mandatory human decision points with escalations, overrides, and strict separation of duties.',
    icon: 'UserCheck',
    kpis: [
      { label: 'Pending Approvals', value: '42', desc: 'Across enterprise', icon: 'Inbox', color: 'text-indigo-500', descColor: 'text-indigo-400' },
      { label: 'Avg Approval Time', value: '4.2h', desc: 'Decision latency', icon: 'Clock', color: 'text-yellow-500' },
      { label: 'Escalations', value: '8', desc: 'SLA breached', icon: 'AlertTriangle', color: 'text-rose-500' },
      { label: 'Overrides', value: '1', desc: 'Executive emergency', icon: 'Zap', color: 'text-blue-500' },
    ],
    headers: ['Approval Request', 'Workflow', 'Required Persona', 'Time Waiting', 'Status', 'Trace'],
    data: [
      { req: 'Deploy Prod DB Cluster', wf: 'Infrastructure Change', reqp: 'Lead Architect', wait: '14m', status: 'Pending', trace: 'HAO-EV-301' },
      { req: 'Access to SOC2 Audit Logs', wf: 'Privileged Access', reqp: 'Compliance Officer', wait: '2h 10m', status: 'Pending', trace: 'HAO-EV-302' },
      { req: 'Emergency Security Patch', wf: 'Incident Response', reqp: 'CISO (Overridden)', wait: '2m', status: 'Approved', trace: 'HAO-EV-303' },
    ]
  },
  'library': {
    title: 'Enterprise Process Library',
    description: 'A centralized catalog of reusable, pre-governed workflow templates for standardized enterprise operations.',
    icon: 'Library',
    kpis: [
      { label: 'Governed Templates', value: '84', desc: 'Available for use', icon: 'BookMarked', color: 'text-indigo-500', descColor: 'text-indigo-400' },
      { label: 'Template Adoption', value: '92%', desc: 'Vs custom creation', icon: 'TrendingUp', color: 'text-emerald-500' },
      { label: 'Most Used', value: 'Access Req', desc: 'Top category', icon: 'Unlock', color: 'text-blue-500' },
      { label: 'Deprecations', value: '4', desc: 'Outdated policies', icon: 'XCircle', color: 'text-slate-500' },
    ],
    headers: ['Template Name', 'Category', 'Compliance Cert', 'Usage Count', 'Status', 'Execution ID'],
    data: [
      { tpl: 'Standard Employee Onboarding', cat: 'HR / IT', cert: 'ISO 27001, SOC2', count: '14,204', status: 'Active', trace: 'EPL-EV-401' },
      { tpl: 'Emergency Prod Rollback', cat: 'Engineering Ops', cert: 'SOC2', count: '412', status: 'Active', trace: 'EPL-EV-402' },
      { tpl: 'Legacy Vendor Approval', cat: 'Procurement', cert: 'None (Deprecated)', count: '0', status: 'Blocked', trace: 'EPL-EV-403' },
    ]
  },
  'integrations': {
    title: 'Cross-Platform Integration Hub',
    description: 'Coordinates deterministic execution across all Revora platforms (Security, Arch, HR, Commerce, etc.).',
    icon: 'Plug',
    kpis: [
      { label: 'Connected Modules', value: '14', desc: 'Full Revora suite', icon: 'Network', color: 'text-indigo-500', descColor: 'text-indigo-400' },
      { label: 'API Calls / Sec', value: '1,420', desc: 'Orchestration load', icon: 'Activity', color: 'text-emerald-500' },
      { label: 'Integration Errors', value: '0.01%', desc: 'Deterministic success', icon: 'ShieldCheck', color: 'text-blue-500' },
      { label: 'Zero-Trust Checks', value: '100%', desc: 'On every call', icon: 'Lock', color: 'text-emerald-500' },
    ],
    headers: ['Integration Path', 'Source Module', 'Target Module', 'Payload Type', 'State', 'Trace'],
    data: [
      { path: 'Auth -> Incident Creation', src: 'Trust Engine (RTSTOS)', targ: 'Security (RXOS)', ptype: 'JSON (Encrypted)', state: 'Active', trace: 'CPI-EV-501' },
      { path: 'Budget -> Cloud Provision', src: 'Commerce Platform', targ: 'Architecture Platform', ptype: 'JSON (Signed)', state: 'Active', trace: 'CPI-EV-502' },
      { path: 'Approval -> Policy Update', src: 'Orchestration (RAEOP)', targ: 'Governance Registry', ptype: 'Cryptographic Hash', state: 'Active', trace: 'CPI-EV-503' },
    ]
  },
  'simulation': {
    title: 'Process Simulation Studio',
    description: 'Safely simulates workflow execution against mock states before deploying to production.',
    icon: 'PlayCircle',
    kpis: [
      { label: 'Simulations Run', value: '4,102', desc: 'Past 30 days', icon: 'PlayCircle', color: 'text-indigo-500', descColor: 'text-indigo-400' },
      { label: 'Failures Caught', value: '840', desc: 'Pre-production blocks', icon: 'ShieldCheck', color: 'text-emerald-500' },
      { label: 'Avg Sim Latency', value: '45ms', desc: 'Execution speed', icon: 'Zap', color: 'text-blue-500' },
      { label: 'Mock Coverage', value: '100%', desc: 'All modules mapped', icon: 'Layers', color: 'text-emerald-500' },
    ],
    headers: ['Simulation Target', 'Simulated Condition', 'Predicted Outcome', 'Risk Level', 'Status', 'Execution ID'],
    data: [
      { targ: 'v2 Architecture Approval', cond: 'CISO on leave (escalation)', out: 'Delegates to Deputy CISO', risk: 'Low', status: 'Verified', trace: 'PSS-EV-601' },
      { targ: 'Mass Auth Revocation', cond: 'API limit exceeded', out: 'Workflow fails mid-execution', risk: 'High', status: 'Failed', trace: 'PSS-EV-602' },
      { targ: 'Vendor Renewal', cond: 'Budget exceeded by 10%', out: 'Routes to CFO for approval', risk: 'Medium', status: 'Simulating', trace: 'PSS-EV-603' },
    ]
  },
  'analytics': {
    title: 'Execution Analytics',
    description: 'Measures operational effectiveness, workflow latency, SLA adherence, and true ROI of automation.',
    icon: 'LineChart',
    kpis: [
      { label: 'Execution Index', value: '94/100', desc: 'Enterprise score', icon: 'Activity', color: 'text-indigo-500', descColor: 'text-indigo-400' },
      { label: 'Hours Saved', value: '14.2K', desc: 'Monthly automation ROI', icon: 'TrendingDown', color: 'text-emerald-500' },
      { label: 'SLA Adherence', value: '98.4%', desc: 'Process timing', icon: 'CheckCircle2', color: 'text-emerald-500' },
      { label: 'Bottlenecks', value: '3', desc: 'Departments lagging', icon: 'AlertTriangle', color: 'text-rose-500' },
    ],
    headers: ['Workflow Category', 'Total Executions', 'Avg Human Latency', 'Avg System Latency', 'Condition', 'Trace'],
    data: [
      { cat: 'Security Operations', exec: '14,204', human: '4.2m', sys: '0.8s', cond: 'Optimal', trace: 'EA-EV-701' },
      { cat: 'Procurement / Fin', exec: '842', human: '1.4d', sys: '1.2s', cond: 'Warning', trace: 'EA-EV-702' },
      { cat: 'IT Access Requests', exec: '8,410', human: '1.2h', sys: '0.4s', cond: 'Optimal', trace: 'EA-EV-703' },
    ]
  },
  'governance': {
    title: 'Orchestration Governance Board',
    description: 'Provides constitutional oversight over what can be automated and what strictly requires human intervention.',
    icon: 'Scale',
    kpis: [
      { label: 'Auto-Reject Rules', value: '42', desc: 'Constitutional blocks', icon: 'Lock', color: 'text-indigo-500', descColor: 'text-indigo-400' },
      { label: 'Mandatory Humans', value: '100%', desc: 'For all write actions', icon: 'UserCheck', color: 'text-emerald-500' },
      { label: 'Policy Coverage', value: '100%', desc: 'Workflows mapped', icon: 'FileSignature', color: 'text-emerald-500' },
      { label: 'Compliance Exceptions', value: '0', desc: 'Zero tolerance', icon: 'ShieldCheck', color: 'text-blue-500' },
    ],
    headers: ['Governance Policy', 'Target Domain', 'Enforcement Logic', 'Violations Blocked', 'Governance', 'Trace'],
    data: [
      { pol: 'No autonomous IAM creation', dom: 'Security / IT', enf: 'Requires L2 Human Approval', block: '142', gov: 'Verified', trace: 'OGB-EV-801' },
      { pol: 'Prod deployments require 2 approvals', dom: 'Engineering', enf: 'Requires Peer + Manager', block: '42', gov: 'Verified', trace: 'OGB-EV-802' },
      { pol: 'Financial routing above $50k', dom: 'Commerce', enf: 'Requires VP Finance Approval', block: '14', gov: 'Verified', trace: 'OGB-EV-803' },
    ]
  },
  'registry': {
    title: 'Enterprise Automation Registry',
    description: 'The immutable inventory of every active automation policy and workflow executing in the enterprise.',
    icon: 'ListChecks',
    kpis: [
      { label: 'Registered Workflows', value: '1,402', desc: 'Active in production', icon: 'Database', color: 'text-indigo-500', descColor: 'text-indigo-400' },
      { label: 'Total Steps', value: '11,776', desc: 'Across all workflows', icon: 'Layers', color: 'text-blue-500' },
      { label: 'Risk Ratings', value: 'Calculated', desc: 'Continuous scoring', icon: 'Gauge', color: 'text-emerald-500' },
      { label: 'Orphaned Workflows', value: '0', desc: 'Strict ownership', icon: 'UserCheck', color: 'text-emerald-500' },
    ],
    headers: ['Workflow ID', 'Business Owner', 'Risk Classification', 'Execution Frequency', 'State', 'Execution ID'],
    data: [
      { id: 'WF-SEC-099', own: 'Security Office', risk: 'Critical', freq: 'Daily', state: 'Active', trace: 'EAR-EV-901' },
      { id: 'WF-HR-042', own: 'HR Operations', risk: 'Medium', freq: 'Hourly', state: 'Active', trace: 'EAR-EV-902' },
      { id: 'WF-FIN-014', own: 'Finance Dept', risk: 'High', freq: 'Monthly', state: 'Active', trace: 'EAR-EV-903' },
    ]
  },
  'evidence': {
    title: 'Orchestration Evidence Ledger',
    description: 'Immutable ledger recording every workflow publication, human approval, and automated execution path.',
    icon: 'History',
    kpis: [
      { label: 'Execution Logs', value: '142M', desc: 'Cryptographic records', icon: 'Database', color: 'text-indigo-500', descColor: 'text-indigo-400' },
      { label: 'Ledger Integrity', value: 'Verified', desc: 'SHA-256 Validated', icon: 'ShieldCheck', color: 'text-emerald-500' },
      { label: 'Audit Pull Latency', value: '1.2s', desc: 'Instant compliance', icon: 'Download', color: 'text-blue-500' },
      { label: 'Human Attestations', value: '412K', desc: 'Cryptographically signed', icon: 'FileSignature', color: 'text-emerald-500' },
    ],
    headers: ['Event ID', 'Timestamp', 'Actor (System/Human)', 'Orchestration Action', 'Constitutional Governance', 'EvidenceBadge'],
    data: [
      { id: 'OR-E-7701', time: '2026-07-22T10:16:00Z', act: 'jdoe@revora (Human)', acti: 'Approved WF-SEC-099 step 2', gov: 'Policy: Separation of Duties', trace: 'EV-O-7701' },
      { id: 'OR-E-7702', time: '2026-07-22T10:15:42Z', act: 'RAEOP Engine (System)', acti: 'Executed Integration: Trust -> HR', gov: 'Policy: Workflow Automation', trace: 'EV-O-7702' },
      { id: 'OR-E-7703', time: '2026-07-22T10:14:10Z', act: 'mchen@revora (Human)', acti: 'Deployed new Workflow to Production', gov: 'Policy: Change Management', trace: 'EV-O-7703' },
    ]
  }
};

const pageTemplate = `import React from "react";
import Link from "next/link";
import { ArrowRight, Workflow, PenTool, GitPullRequest, UserCheck, Library, Plug, PlayCircle, LineChart, Scale, ListChecks, History } from "lucide-react";

export default function OrchestrationHub() {
  const modules = [
    { name: "Visual Workflow Designer", path: "/orchestration/designer", icon: PenTool, color: "text-indigo-400", bg: "bg-indigo-500/10", border: "border-indigo-500/20" },
    { name: "Constitutional Workflow Engine", path: "/orchestration/workflows", icon: GitPullRequest, color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20" },
    { name: "Human Approvals", path: "/orchestration/approvals", icon: UserCheck, color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
    { name: "Process Library", path: "/orchestration/library", icon: Library, color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
    { name: "Integration Hub", path: "/orchestration/integrations", icon: Plug, color: "text-rose-400", bg: "bg-rose-500/10", border: "border-rose-500/20" },
    { name: "Simulation Studio", path: "/orchestration/simulation", icon: PlayCircle, color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20" },
    { name: "Execution Analytics", path: "/orchestration/analytics", icon: LineChart, color: "text-fuchsia-400", bg: "bg-fuchsia-500/10", border: "border-fuchsia-500/20" },
    { name: "Governance Board", path: "/orchestration/governance", icon: Scale, color: "text-yellow-400", bg: "bg-yellow-500/10", border: "border-yellow-500/20" },
    { name: "Automation Registry", path: "/orchestration/registry", icon: ListChecks, color: "text-emerald-500", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
    { name: "Evidence Ledger", path: "/orchestration/evidence", icon: History, color: "text-slate-400", bg: "bg-slate-500/10", border: "border-slate-500/20" },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2 flex items-center gap-3">
              <Workflow className="w-8 h-8 text-indigo-400" />
              Autonomous Enterprise Orchestration (RAEOP)
            </h1>
            <p className="text-slate-400">The constitutional execution engine orchestrating cross-domain workflows with strict human-in-the-loop governance.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="px-4 py-2 bg-indigo-950/30 border border-indigo-900/50 rounded-md">
               <span className="text-xs text-indigo-400 font-bold uppercase tracking-wider block mb-1">Execution Status</span>
               <div className="text-xl font-black text-indigo-300">Active (Governed)</div>
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
              <div className="text-xs text-slate-500 flex-1">Configure orchestration environment.</div>
              <div className="mt-4 flex items-center text-xs font-medium text-slate-400 group-hover:text-indigo-400 transition-colors">
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

const basePath = path.join(__dirname, 'src', 'app', 'orchestration');
fs.mkdirSync(basePath, { recursive: true });
fs.writeFileSync(path.join(basePath, 'page.tsx'), pageTemplate);

for (const [route, config] of Object.entries(routes)) {
  const routePath = path.join(basePath, route);
  fs.mkdirSync(routePath, { recursive: true });
  fs.writeFileSync(path.join(routePath, 'page.tsx'), generatePage(config.title, config.description, config.icon, config.kpis, config.headers, config.data));
  console.log('Generated route:', route);
}
