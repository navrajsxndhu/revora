const fs = require('fs');
const path = require('path');

const generatePage = (title, description, iconName, kpis, headers, tableData, additionalUI) => {
  const allIcons = ['ArrowLeft', 'Search', 'ShieldCheck', 'Activity', 'Target', 'Download', 'Settings', 'History', 'BrainCircuit', 'Layers', 'Eye', 'Smile', 'Move', 'Languages', 'Accessibility', 'Briefcase', 'Lock', 'LineChart', 'CheckCircle2', 'AlertTriangle', 'XCircle', 'ArrowRight', 'Image', 'Keyboard', 'Timer', 'TrendingUp', 'TrendingDown', 'BookOpen', 'MousePointerClick', 'Database', 'Users', 'FileCode', 'GraduationCap', 'Map', 'ClipboardList', 'Sparkles', 'HeartHandshake', 'Network', 'Award', 'BarChart2', 'FileSignature', 'Lightbulb', 'Compass', 'MessageSquare', 'FolderHeart', 'Tags', 'Fingerprint', 'Users2', 'Video', 'Megaphone', 'Inbox', 'Calendar', 'Globe', 'Handshake', 'MessageCircle', 'Zap', 'Wind', 'Cpu', 'Mouse', 'Monitor', 'EyeOff', 'Laptop', 'Smartphone', 'Box', 'Maximize', 'Gauge', 'Unlock', 'HelpCircle', 'Terminal', 'ThumbsUp', 'LayoutDashboard', 'Star', 'Bell', 'LineChart', 'UserCircle2', 'RefreshCw', 'Tablet', 'WifiOff', 'ServerCrash', 'MapPin', 'Cast', 'Clock', 'ActivitySquare', 'CheckSquare', 'AlertOctagon', 'HeartPulse', 'Bot', 'Navigation', 'BarChart3', 'Paintbrush', 'Type', 'Wand2', 'Palette', 'Component', 'Sparkle', 'Share2', 'Waypoints', 'GitMerge', 'Radar', 'Telescope', 'Binary', 'Workflow', 'Microscope', 'MonitorPlay', 'Columns', 'Menu', 'Save', 'GitCompare', 'Layout', 'SearchCode', 'LineChart', 'UsersRound', 'Scale'];
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
              <Link href="/digital-workspace" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to REDWS Hub
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
                <input type="text" placeholder="Search Workspace Canvas..." className="bg-slate-900 border border-slate-700 rounded-md pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-indigo-400 w-64 transition-colors" />
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
            title="Spatial Productivity Metrics" 
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
                    row.${key} === 'Critical' || row.${key} === 'High' || row.${key} === 'Offline' || row.${key} === 'Blocked' ? 'bg-rose-900/20 text-rose-400 border-rose-900/50' : 
                    row.${key} === 'Warning' || row.${key} === 'Medium' || row.${key} === 'Background' || row.${key} === 'Suspended' ? 'bg-amber-900/20 text-amber-400 border-amber-900/50' :
                    row.${key} === 'Optimal' || row.${key} === 'Active' || row.${key} === 'Foreground' || row.${key} === 'Verified' || row.${key} === 'Live' || row.${key} === 'Docked' ? 'bg-emerald-900/20 text-emerald-400 border-emerald-900/50' :
                    'bg-slate-800 text-slate-300 border-slate-700'
                  }\`}>
                    {row.${key}}
                  </span>
                </td>`;
                  }
                  if (h === 'Evidence' || h === 'Trace' || h === 'Execution ID') {
                    return `
                <td className="py-4 px-5">
                  <EvidenceBadge evidenceId={row.${key}} timestamp="Verified Workspace" />
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
  'panels': {
    title: 'Multi-Panel Workspace Engine',
    description: 'Transforms enterprise navigation into spatial multitasking, maintaining multiple synchronized views.',
    icon: 'Columns',
    kpis: [
      { label: 'Active Panels', value: '14,204', desc: 'Across all user sessions', icon: 'Layout', color: 'text-indigo-500', descColor: 'text-indigo-400' },
      { label: 'State Sync', value: 'True', desc: 'Cross-panel awareness', icon: 'RefreshCw', color: 'text-emerald-500' },
      { label: 'Avg Panels/User', value: '3.4', desc: 'Simultaneous views', icon: 'Maximize', color: 'text-blue-500' },
      { label: 'Panel Memory Limit', value: '32MB', desc: 'Max memory per view', icon: 'Cpu', color: 'text-rose-500' },
    ],
    headers: ['Panel Subject', 'Source Domain', 'Memory Usage', 'Last Interacted', 'State', 'Trace'],
    data: [
      { sub: 'Security Incident #104', dom: 'Security Operations', mem: '4.2 MB', interacted: '14s ago', state: 'Foreground', trace: 'MPE-EV-101' },
      { sub: 'Architecture Approval', dom: 'Enterprise Arch', mem: '1.4 MB', interacted: '2m ago', state: 'Background', trace: 'MPE-EV-102' },
      { sub: 'Vendor Audit Log', dom: 'Compliance', mem: '0 MB', interacted: '4h ago', state: 'Suspended', trace: 'MPE-EV-103' },
    ]
  },
  'dock': {
    title: 'Universal Enterprise Dock',
    description: 'Provides instant OS-style access to favorites, running modules, and active approvals.',
    icon: 'Menu',
    kpis: [
      { label: 'Dock Invocations', value: '412K', desc: 'Daily launches', icon: 'MousePointerClick', color: 'text-indigo-500', descColor: 'text-indigo-400' },
      { label: 'Favorites Pinned', value: '9.4', desc: 'Avg per user', icon: 'Star', color: 'text-yellow-500' },
      { label: 'Nav Clicks Saved', value: '1.2M', desc: 'Compared to menus', icon: 'Timer', color: 'text-emerald-500' },
      { label: 'Dock Position', value: 'Dynamic', desc: 'Bottom / Left Edge', icon: 'Layout', color: 'text-blue-500' },
    ],
    headers: ['Dock Item', 'Item Type', 'Launch Velocity', 'Usage Frequency', 'Status', 'Execution ID'],
    data: [
      { item: 'Incident Response Center', type: 'System Dashboard', vel: '40ms', freq: 'High (42/day)', status: 'Docked', trace: 'UED-EV-201' },
      { item: 'Q3 Budget Approval', type: 'Active Approval', vel: '14ms', freq: 'Medium', status: 'Active', trace: 'UED-EV-202' },
      { item: 'Search Graph', type: 'Core Utility', vel: '5ms', freq: 'Very High', status: 'Docked', trace: 'UED-EV-203' },
    ]
  },
  'memory': {
    title: 'Workspace Memory Engine',
    description: 'Persists complete workspace state—including panels, filters, and scroll position—across sessions.',
    icon: 'Save',
    kpis: [
      { label: 'State Snapshots', value: '1.4M', desc: 'Stored securely', icon: 'Database', color: 'text-indigo-500', descColor: 'text-indigo-400' },
      { label: 'Restore Latency', value: '84ms', desc: 'Session resume speed', icon: 'Zap', color: 'text-emerald-500' },
      { label: 'Data Retention', value: '30 Days', desc: 'Inactive workspaces', icon: 'Clock', color: 'text-blue-500' },
      { label: 'State Size', value: '14KB', desc: 'Average JSON payload', icon: 'FileCode', color: 'text-emerald-500' },
    ],
    headers: ['Workspace ID', 'Owner', 'Saved Elements', 'Last Restored', 'State', 'Trace'],
    data: [
      { id: 'WS-SEC-01', owner: 'jsmith@revora', elem: '4 Panels, 2 Filters', rest: '2026-07-22 09:00', state: 'Active', trace: 'WME-EV-301' },
      { id: 'WS-ARCH-42', owner: 'ajohnson@revora', elem: 'Diff View, Timeline', rest: '2026-07-21 18:30', state: 'Suspended', trace: 'WME-EV-302' },
      { id: 'WS-FIN-14', owner: 'mchen@revora', elem: 'Budget Canvas', rest: '2026-07-15 14:00', state: 'Offline', trace: 'WME-EV-303' },
    ]
  },
  'compare': {
    title: 'Split View & Comparison Studio',
    description: 'Allows side-by-side constitutional comparison of policies, architectures, and incident timelines.',
    icon: 'GitCompare',
    kpis: [
      { label: 'Active Comparisons', value: '4,210', desc: 'Concurrent diffs', icon: 'Layers', color: 'text-indigo-500', descColor: 'text-indigo-400' },
      { label: 'Diff Accuracy', value: '100%', desc: 'Cryptographic hash compare', icon: 'ShieldCheck', color: 'text-emerald-500' },
      { label: 'Time Saved', value: '2.4h', desc: 'Per complex review', icon: 'Timer', color: 'text-blue-500' },
      { label: 'Supported Asset Types', value: '42', desc: 'Governed primitives', icon: 'Database', color: 'text-fuchsia-500' },
    ],
    headers: ['Comparison Target', 'Left Asset', 'Right Asset', 'Identified Differences', 'Governance', 'Execution ID'],
    data: [
      { targ: 'Firewall Policy (SOC2)', left: 'v1.1.4 (Prod)', right: 'v1.1.5 (Staging)', diff: '2 Rule Modifications', gov: 'Verified', trace: 'SVS-EV-401' },
      { targ: 'Kubernetes Blueprint', left: 'Template v4', right: 'Template v5', diff: 'Added Resource Limits', gov: 'Verified', trace: 'SVS-EV-402' },
      { targ: 'Vendor Contract', left: 'AWS Master Ag.', right: 'GCP Master Ag.', diff: 'Liability Clauses', gov: 'Verified', trace: 'SVS-EV-403' },
    ]
  },
  'canvas': {
    title: 'Workspace Canvas Manager',
    description: 'Governs the spatial organization of enterprise components, creating movable, resizable dashboards.',
    icon: 'Layout',
    kpis: [
      { label: 'Canvas Views', value: '142K', desc: 'Custom layouts', icon: 'Map', color: 'text-indigo-500', descColor: 'text-indigo-400' },
      { label: 'Widget Constraint', value: 'Strict', desc: 'Snap-to-grid active', icon: 'Lock', color: 'text-emerald-500' },
      { label: 'Accessibility', value: 'AAA', desc: 'Keyboard navigatable', icon: 'Accessibility', color: 'text-emerald-500' },
      { label: 'Canvas Size', value: 'Infinite', desc: 'Zoom & Pan supported', icon: 'Maximize', color: 'text-blue-500' },
    ],
    headers: ['Canvas Instance', 'Primary Domain', 'Widgets Embedded', 'Zoom Level', 'Status', 'Trace'],
    data: [
      { inst: 'Executive Command Board', dom: 'Cross-Enterprise', wid: '14 Active Widgets', zoom: '100% (Default)', status: 'Active', trace: 'WCM-EV-501' },
      { inst: 'Incident War Room', dom: 'Security / DevOps', wid: '8 Active Widgets', zoom: '120% (Focus)', status: 'Active', trace: 'WCM-EV-502' },
      { inst: 'Quarterly Planning', dom: 'Finance / HR', wid: '4 Active Widgets', zoom: '80% (Overview)', status: 'Suspended', trace: 'WCM-EV-503' },
    ]
  },
  'search': {
    title: 'Universal Workspace Search',
    description: 'Instantly locates open panels, running reports, and active evidence within the user\'s local session.',
    icon: 'SearchCode',
    kpis: [
      { label: 'Local Index Size', value: '4MB', desc: 'Per user session', icon: 'Database', color: 'text-indigo-500', descColor: 'text-indigo-400' },
      { label: 'Search Latency', value: '< 2ms', desc: 'Client-side resolution', icon: 'Zap', color: 'text-emerald-500' },
      { label: 'Context Switching', value: '0', desc: 'Zero page reloads', icon: 'RefreshCw', color: 'text-blue-500' },
      { label: 'Memory Footprint', value: 'Minimal', desc: 'Garbage collected', icon: 'Cpu', color: 'text-emerald-500' },
    ],
    headers: ['Search Query', 'Target Found In', 'Match Confidence', 'User Action', 'State', 'Execution ID'],
    data: [
      { query: '"SOC2 Report"', targ: 'Background Panel 3', conf: '100% (Exact)', act: 'Focus Panel', state: 'Optimal', trace: 'UWS-EV-601' },
      { query: '"John Doe Auth"', targ: 'Evidence Badge metadata', conf: '94% (Fuzzy)', act: 'Extract Evidence', state: 'Optimal', trace: 'UWS-EV-602' },
      { query: '"Q3 Budget"', targ: 'Active Approval (Dock)', conf: '100% (Exact)', act: 'Sign Approval', state: 'Optimal', trace: 'UWS-EV-603' },
    ]
  },
  'analytics': {
    title: 'Workspace Productivity Analytics',
    description: 'Quantifies the exact time and cognitive load saved by eliminating traditional page-based navigation.',
    icon: 'LineChart',
    kpis: [
      { label: 'Productivity Index', value: '94/100', desc: 'Workspace efficiency', icon: 'Activity', color: 'text-indigo-500', descColor: 'text-indigo-400' },
      { label: 'Nav Reductions', value: '4.2M', desc: 'Fewer full-page loads', icon: 'TrendingDown', color: 'text-emerald-500' },
      { label: 'Investigation Speed', value: '+42%', desc: 'Faster resolution', icon: 'Timer', color: 'text-blue-500' },
      { label: 'Context Loss', value: 'Near 0', desc: 'Multi-panel benefit', icon: 'BrainCircuit', color: 'text-emerald-500' },
    ],
    headers: ['Department', 'Traditional Page Loads', 'Workspace Context Shifts', 'Time Saved (Hours)', 'Condition', 'Trace'],
    data: [
      { dept: 'Engineering Ops', trad: '14,204', ws: '412', time: '1,420', cond: 'Optimal', trace: 'WPA-EV-701' },
      { dept: 'Compliance & Audit', trad: '8,401', ws: '84', time: '840', cond: 'Optimal', trace: 'WPA-EV-702' },
      { dept: 'Executive Suite', trad: '1,420', ws: '14', time: '142', cond: 'Optimal', trace: 'WPA-EV-703' },
    ]
  },
  'collaboration': {
    title: 'Workspace Collaboration Layer',
    description: 'Enables real-time workspace awareness, shared session links, and live executive presentation modes.',
    icon: 'UsersRound',
    kpis: [
      { label: 'Shared Workspaces', value: '14.2K', desc: 'Active shared sessions', icon: 'Share2', color: 'text-indigo-500', descColor: 'text-indigo-400' },
      { label: 'Live Presenters', value: '412', desc: 'Executive mode', icon: 'Video', color: 'text-blue-500' },
      { label: 'Presence Sync', value: '14ms', desc: 'Cursor latency', icon: 'Zap', color: 'text-emerald-500' },
      { label: 'Data Leakage', value: '0', desc: 'Governed RBAC masks', icon: 'ShieldCheck', color: 'text-emerald-500' },
    ],
    headers: ['Workspace Instance', 'Owner', 'Active Participants', 'Session Mode', 'Status', 'Execution ID'],
    data: [
      { inst: 'SEV-1 Incident Board', owner: 'DevOps Lead', part: '14 (View Only)', mode: 'Broadcast', status: 'Active', trace: 'WCL-EV-801' },
      { inst: 'Architecture Council', owner: 'Chief Architect', part: '4 (Edit Access)', mode: 'Collaborative', status: 'Active', trace: 'WCL-EV-802' },
      { inst: 'Q3 Board Review', owner: 'CFO', part: '8 (View Only)', mode: 'Presentation', status: 'Suspended', trace: 'WCL-EV-803' },
    ]
  },
  'governance': {
    title: 'Workspace Governance Board',
    description: 'Maintains constitutional standards to ensure flexible spatial layouts never compromise enterprise consistency.',
    icon: 'Scale',
    kpis: [
      { label: 'Layout Policies', value: '14', desc: 'Constitutional rules', icon: 'FileSignature', color: 'text-indigo-500', descColor: 'text-indigo-400' },
      { label: 'Mandatory Panels', value: '1', desc: 'Security Alert Dock', icon: 'Lock', color: 'text-rose-500' },
      { label: 'Compliance Rate', value: '100%', desc: 'Layout adherence', icon: 'CheckCircle2', color: 'text-emerald-500' },
      { label: 'Focus Mode Blocks', value: '0', desc: 'Critical alerts bypass', icon: 'AlertTriangle', color: 'text-emerald-500' },
    ],
    headers: ['Workspace Rule', 'Target Persona', 'Enforcement Level', 'Violations Prevented', 'Governance', 'Trace'],
    data: [
      { rule: 'Security alerts always on top', targ: 'All Users', enf: 'Absolute (z-index lock)', prev: '14K', gov: 'Verified', trace: 'WGB-EV-901' },
      { rule: 'Max 6 concurrent data grids', targ: 'Analysts', enf: 'Warning (Memory)', prev: '412', gov: 'Verified', trace: 'WGB-EV-902' },
      { rule: 'Hide sensitive evidence in broadcast', targ: 'Executives', enf: 'Absolute (RBAC)', prev: '14', gov: 'Verified', trace: 'WGB-EV-903' },
    ]
  },
  'evidence': {
    title: 'Workspace Evidence Ledger',
    description: 'Immutable ledger recording all spatial interactions, template deployments, and shared session handoffs.',
    icon: 'History',
    kpis: [
      { label: 'Workspace Logs', value: '14.2M', desc: 'Cryptographic records', icon: 'Database', color: 'text-indigo-500', descColor: 'text-indigo-400' },
      { label: 'Ledger Integrity', value: 'Verified', desc: 'SHA-256 Validated', icon: 'ShieldCheck', color: 'text-emerald-500' },
      { label: 'State Replays', value: '412', desc: 'Audit reconstructions', icon: 'Video', color: 'text-blue-500' },
      { label: 'Export Speed', value: '1.4s', desc: 'Compliance pulls', icon: 'Download', color: 'text-emerald-500' },
    ],
    headers: ['Event ID', 'Timestamp', 'System Initiator', 'Workspace Action', 'Constitutional Governance', 'EvidenceBadge'],
    data: [
      { id: 'WS-E-8801', time: '2026-07-22T10:14:00Z', sys: 'Memory Engine', act: 'Saved Layout State', gov: 'Policy: Workspace Retention', trace: 'EV-W-8801' },
      { id: 'WS-E-8802', time: '2026-07-22T10:12:15Z', sys: 'Collab Layer', act: 'Shared Workspace to Guests', gov: 'Policy: External Sharing', trace: 'EV-W-8802' },
      { id: 'WS-E-8803', time: '2026-07-22T10:05:00Z', sys: 'Canvas Manager', act: 'Deployed Executive Template', gov: 'Policy: Standardized UX', trace: 'EV-W-8803' },
    ]
  }
};

const pageTemplate = `import React from "react";
import Link from "next/link";
import { ArrowRight, MonitorPlay, Columns, Menu, Save, GitCompare, Layout, SearchCode, LineChart, UsersRound, Scale, History } from "lucide-react";

export default function WorkspaceHub() {
  const modules = [
    { name: "Multi-Panel Engine", path: "/digital-workspace/panels", icon: Columns, color: "text-indigo-400", bg: "bg-indigo-500/10", border: "border-indigo-500/20" },
    { name: "Universal Dock", path: "/digital-workspace/dock", icon: Menu, color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20" },
    { name: "Memory Engine", path: "/digital-workspace/memory", icon: Save, color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
    { name: "Comparison Studio", path: "/digital-workspace/compare", icon: GitCompare, color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
    { name: "Canvas Manager", path: "/digital-workspace/canvas", icon: Layout, color: "text-rose-400", bg: "bg-rose-500/10", border: "border-rose-500/20" },
    { name: "Universal Search", path: "/digital-workspace/search", icon: SearchCode, color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20" },
    { name: "Workspace Analytics", path: "/digital-workspace/analytics", icon: LineChart, color: "text-fuchsia-400", bg: "bg-fuchsia-500/10", border: "border-fuchsia-500/20" },
    { name: "Collaboration Layer", path: "/digital-workspace/collaboration", icon: UsersRound, color: "text-yellow-400", bg: "bg-yellow-500/10", border: "border-yellow-500/20" },
    { name: "Governance Board", path: "/digital-workspace/governance", icon: Scale, color: "text-emerald-500", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
    { name: "Evidence Ledger", path: "/digital-workspace/evidence", icon: History, color: "text-slate-400", bg: "bg-slate-500/10", border: "border-slate-500/20" },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2 flex items-center gap-3">
              <MonitorPlay className="w-8 h-8 text-indigo-400" />
              Enterprise Digital Workspace (REDWS)
            </h1>
            <p className="text-slate-400">The spatial, multi-panel operating environment governing enterprise operations.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="px-4 py-2 bg-indigo-950/30 border border-indigo-900/50 rounded-md">
               <span className="text-xs text-indigo-400 font-bold uppercase tracking-wider block mb-1">Session Mode</span>
               <div className="text-xl font-black text-indigo-300">Spatial OS</div>
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
              <div className="text-xs text-slate-500 flex-1">Configure spatial workspace environment.</div>
              <div className="mt-4 flex items-center text-xs font-medium text-slate-400 group-hover:text-indigo-400 transition-colors">
                Open Workspace <ArrowRight className="w-3 h-3 ml-1" />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
`;

const basePath = path.join(__dirname, 'src', 'app', 'digital-workspace');
fs.mkdirSync(basePath, { recursive: true });
fs.writeFileSync(path.join(basePath, 'page.tsx'), pageTemplate);

for (const [route, config] of Object.entries(routes)) {
  const routePath = path.join(basePath, route);
  fs.mkdirSync(routePath, { recursive: true });
  fs.writeFileSync(path.join(routePath, 'page.tsx'), generatePage(config.title, config.description, config.icon, config.kpis, config.headers, config.data));
  console.log('Generated route:', route);
}
