const fs = require('fs');
const path = require('path');

const generatePage = (title, description, iconName, kpis, headers, tableData, additionalUI) => {
  const allIcons = ['ArrowLeft', 'Search', 'ShieldCheck', 'Activity', 'Target', 'Download', 'Settings', 'History', 'BrainCircuit', 'Layers', 'Eye', 'Smile', 'Move', 'Languages', 'Accessibility', 'Briefcase', 'Lock', 'LineChart', 'CheckCircle2', 'AlertTriangle', 'XCircle', 'ArrowRight', 'Image', 'Keyboard', 'Timer', 'TrendingUp', 'TrendingDown', 'BookOpen', 'MousePointerClick', 'Database', 'Users', 'FileCode', 'GraduationCap', 'Map', 'ClipboardList', 'Sparkles', 'HeartHandshake', 'Network', 'Award', 'BarChart2', 'FileSignature', 'Lightbulb', 'Compass', 'MessageSquare', 'FolderHeart', 'Tags', 'Fingerprint', 'Users2', 'Video', 'Megaphone', 'Inbox', 'Calendar', 'Globe', 'Handshake', 'MessageCircle', 'Zap', 'Wind', 'Cpu', 'Mouse', 'Monitor', 'EyeOff', 'Laptop', 'Smartphone', 'Box', 'Maximize', 'Gauge', 'Eye', 'Unlock', 'HelpCircle', 'Terminal', 'ThumbsUp', 'LayoutDashboard', 'Star', 'Bell', 'LineChart', 'UserCircle2', 'RefreshCw', 'Tablet', 'WifiOff', 'ServerCrash', 'MapPin', 'Cast'];
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
              <Link href="/continuity" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to RMDCOS Command Center
              </Link>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2 flex items-center gap-3">
              <${iconName} className="w-8 h-8 text-indigo-500" />
              ${title}
            </h1>
            <p className="text-slate-400">${description}</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="relative">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input type="text" placeholder="Search Continuity Logs..." className="bg-slate-900 border border-slate-700 rounded-md pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-indigo-500 w-64 transition-colors" />
             </div>
             <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-md text-sm font-medium transition-colors text-slate-200">
               <Download className="w-4 h-4" /> Export Ledger
             </button>
          </div>
        </header>

        {/* KPIs */}
        <div className="grid grid-cols-4 gap-4 shrink-0">
          ${kpis.map((kpi, i) => `
          <div className="bg-slate-900/60 border ${i === 0 ? 'border-indigo-900/30 bg-indigo-950/10 shadow-[0_0_15px_rgba(99,102,241,0.05)]' : 'border-slate-800'} rounded-xl p-5">
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
            title="Multi-Device Continuity Metrics" 
            headers={[${headers.map(h => `"${h}"`).join(', ')}]}
          >
            {${JSON.stringify(tableData)}.map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group cursor-pointer border-b border-slate-800/50">
                ${headers.map((h, j) => {
                  const key = Object.keys(tableData[0])[j];
                  if (h === 'Status' || h === 'Sync State' || h === 'Governance' || h === 'Continuity' || h === 'Delivery') {
                    return `
                <td className="py-4 px-5">
                  <span className={\`px-2 py-1 rounded text-xs font-bold border flex items-center gap-1 w-max \${
                    row.${key} === 'Critical' || row.${key} === 'Offline' || row.${key} === 'Blocked' || row.${key} === 'Failed' ? 'bg-rose-900/20 text-rose-400 border-rose-900/50' : 
                    row.${key} === 'Syncing' || row.${key} === 'Medium' || row.${key} === 'Pending validation' || row.${key} === 'Cached' ? 'bg-amber-900/20 text-amber-400 border-amber-900/50' :
                    row.${key} === 'Optimal' || row.${key} === 'Live' || row.${key} === 'Approved' || row.${key} === 'Verified' || row.${key} === 'Seamless' || row.${key} === 'Routed' ? 'bg-emerald-900/20 text-emerald-400 border-emerald-900/50' :
                    'bg-slate-800 text-slate-300 border-slate-700'
                  }\`}>
                    {row.${key}}
                  </span>
                </td>`;
                  }
                  if (h === 'Evidence' || h === 'Trace' || h === 'Execution ID') {
                    return `
                <td className="py-4 px-5">
                  <EvidenceBadge evidenceId={row.${key}} timestamp="Verified Sync" />
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
  'sessions': {
    title: 'Cross-Device Session Continuity',
    description: 'Maintains uninterrupted enterprise workflows by synchronizing active workspaces across devices.',
    icon: 'RefreshCw',
    kpis: [
      { label: 'Active Sessions', value: '412K', desc: 'Synchronized workspaces', icon: 'Activity', color: 'text-indigo-500', descColor: 'text-indigo-400' },
      { label: 'Handoff Success', value: '99.9%', desc: 'Without data loss', icon: 'CheckCircle2', color: 'text-emerald-500' },
      { label: 'Average Sync Time', value: '14ms', desc: 'Real-time capability', icon: 'Zap', color: 'text-blue-500' },
      { label: 'Orphaned Sessions', value: '0', desc: 'Auto-pruned securely', icon: 'ShieldCheck', color: 'text-emerald-500' },
    ],
    headers: ['User Identity', 'Origin Device', 'Target Device', 'Workspace State', 'Sync State', 'Execution ID'],
    data: [
      { user: 'U-8214', orig: 'MacBook Pro', targ: 'iPhone 15', state: 'Pending Approvals List', sync: 'Live', trace: 'CDS-EV-101' },
      { user: 'U-1192', orig: 'iPad Pro', targ: 'ThinkPad T14', state: 'Architecture Review', sync: 'Syncing', trace: 'CDS-EV-102' },
      { user: 'U-5042', orig: 'iPhone 14', targ: 'Offline', state: 'Draft Response', sync: 'Cached', trace: 'CDS-EV-103' },
    ]
  },
  'mobile': {
    title: 'Mobile Experience Governance',
    description: 'Ensures complex enterprise tasks remain practical on mobile devices via thumb-reach optimization.',
    icon: 'Smartphone',
    kpis: [
      { label: 'Mobile Approvals', value: '84.2K', desc: 'Actions via smartphone', icon: 'CheckCircle2', color: 'text-indigo-500', descColor: 'text-indigo-400' },
      { label: 'UX Compliance', value: '100%', desc: 'One-handed capability', icon: 'Move', color: 'text-emerald-500' },
      { label: 'Screen Real Estate', value: 'Optimized', desc: 'Adaptive hiding', icon: 'Maximize', color: 'text-blue-500' },
      { label: 'Fatigue Metrics', value: 'Low', desc: 'Gesture efficiency', icon: 'Smile', color: 'text-emerald-500' },
    ],
    headers: ['Enterprise Action', 'Mobile Layout Rule', 'Required Gesture', 'Average Completion Time', 'Governance', 'Execution ID'],
    data: [
      { act: 'Incident Escalation', rule: 'Sticky Bottom Bar', req: 'Swipe Right', time: '4.2s', gov: 'Verified', trace: 'MXG-EV-201' },
      { act: 'Policy Acknowledgment', rule: 'Thumb-Reach Modal', req: 'Double Tap', time: '12.4s', gov: 'Verified', trace: 'MXG-EV-202' },
      { act: 'Executive Dashboard', rule: 'Single Column Stack', req: 'Vertical Scroll', time: '45s', gov: 'Verified', trace: 'MXG-EV-203' },
    ]
  },
  'tablets': {
    title: 'Tablet Productivity Studio',
    description: 'Transforms tablets into full enterprise workstations with split-view and stylus interactions.',
    icon: 'Tablet',
    kpis: [
      { label: 'Tablet Sessions', value: '12.4K', desc: 'Active daily users', icon: 'Users', color: 'text-indigo-500', descColor: 'text-indigo-400' },
      { label: 'Split-View Usage', value: '68%', desc: 'Multi-tasking adoption', icon: 'LayoutDashboard', color: 'text-emerald-500' },
      { label: 'Stylus Interactions', value: '4.2M', desc: 'Signatures & annotations', icon: 'FileSignature', color: 'text-blue-500' },
      { label: 'Landscape Mode', value: '92%', desc: 'Orientation preference', icon: 'RotateCw', color: 'text-amber-500' },
    ],
    headers: ['Role Context', 'Primary Orientation', 'Active UI Pattern', 'Input Modality', 'Governance', 'Trace'],
    data: [
      { role: 'Field Auditor', orient: 'Portrait', pat: 'Checklist + Camera', input: 'Touch + Stylus', gov: 'Verified', trace: 'TPS-EV-301' },
      { role: 'Financial Analyst', orient: 'Landscape', pat: 'Multi-column Data Grids', input: 'Keyboard + Trackpad', gov: 'Verified', trace: 'TPS-EV-302' },
      { role: 'Executive', orient: 'Landscape', pat: 'Presentation Mode', input: 'Touch', gov: 'Verified', trace: 'TPS-EV-303' },
    ]
  },
  'offline': {
    title: 'Offline Operations Center',
    description: 'Governance for disconnected work, ensuring users understand cached versus live enterprise data.',
    icon: 'WifiOff',
    kpis: [
      { label: 'Offline Edits', value: '14.2K', desc: 'Pending synchronization', icon: 'Database', color: 'text-indigo-500', descColor: 'text-indigo-400' },
      { label: 'Conflict Rate', value: '0.04%', desc: 'Auto-resolved merges', icon: 'CheckCircle2', color: 'text-emerald-500' },
      { label: 'Data Encryption', value: 'AES-256', desc: 'Local device cache', icon: 'Lock', color: 'text-blue-500' },
      { label: 'Sync Failures', value: '0', desc: 'Robust retry queue', icon: 'ShieldCheck', color: 'text-emerald-500' },
    ],
    headers: ['Workspace Module', 'Cache Policy', 'Pending Mutations', 'Last Sync', 'Sync State', 'Execution ID'],
    data: [
      { mod: 'Architecture Drafts', pol: 'Aggressive (Full Offline)', mut: '14 Drafts', sync: '2 hours ago', state: 'Cached', trace: 'OOC-EV-401' },
      { mod: 'Incident Alerts', pol: 'Strict (No Cache)', mut: 'None allowed', sync: 'Live', state: 'Live', trace: 'OOC-EV-402' },
      { mod: 'Employee Directory', pol: 'Background (7 days)', mut: '2 Contact updates', sync: '14 mins ago', state: 'Syncing', trace: 'OOC-EV-403' },
    ]
  },
  'devices': {
    title: 'Device Intelligence Center',
    description: 'Provides insight into enterprise device usage, ensuring mobility remains transparent and secure.',
    icon: 'Monitor',
    kpis: [
      { label: 'Active Devices', value: '142K', desc: 'Enrolled endpoints', icon: 'Laptop', color: 'text-indigo-500', descColor: 'text-indigo-400' },
      { label: 'Trusted Devices', value: '99.8%', desc: 'MDM compliant', icon: 'ShieldCheck', color: 'text-emerald-500' },
      { label: 'Average / User', value: '2.4', desc: 'Multi-device density', icon: 'Users2', color: 'text-blue-500' },
      { label: 'Revoked Access', value: '14', desc: 'Lost/Stolen devices', icon: 'XCircle', color: 'text-rose-500' },
    ],
    headers: ['Device Identity', 'Platform OS', 'Owner Role', 'Security Posture', 'Status', 'Trace'],
    data: [
      { id: 'MacBook-Pro-US84', plat: 'macOS 15', role: 'Engineering Lead', post: 'Encrypted, EDR Active', status: 'Optimal', trace: 'DIC-EV-501' },
      { id: 'iPhone-15-US84', plat: 'iOS 18', role: 'Engineering Lead', post: 'MDM Managed', status: 'Optimal', trace: 'DIC-EV-502' },
      { id: 'Unknown-Android', plat: 'Android 14', role: 'Contractor', post: 'Missing VPN', status: 'Blocked', trace: 'DIC-EV-503' },
    ]
  },
  'notifications': {
    title: 'Smart Notification Continuity',
    description: 'Ensures notifications follow the user intelligently, routing alerts to the active device.',
    icon: 'Bell',
    kpis: [
      { label: 'Duplicate Alerts', value: '0', desc: 'Perfect de-duplication', icon: 'ShieldCheck', color: 'text-indigo-500', descColor: 'text-indigo-400' },
      { label: 'Intelligent Routes', value: '4.2M', desc: 'Delivered to active device', icon: 'Cast', color: 'text-emerald-500' },
      { label: 'Quiet Hours', value: '14%', desc: 'Notifications held', icon: 'Timer', color: 'text-blue-500' },
      { label: 'Escalations', value: '412', desc: 'Broke through quiet hours', icon: 'AlertTriangle', color: 'text-amber-500' },
    ],
    headers: ['Notification Type', 'Active Device Context', 'Routing Decision', 'Time to Action', 'Delivery', 'Execution ID'],
    data: [
      { type: 'P1 Server Crash', act: 'Inactive (Night)', route: 'All Devices + SMS Override', time: '1m 14s', del: 'Routed', trace: 'SNC-EV-601' },
      { type: 'Expense Approved', act: 'Active on Desktop', route: 'Desktop Only (Suppress Mobile)', time: '4s', del: 'Routed', trace: 'SNC-EV-602' },
      { type: 'Weekly Summary', act: 'Offline', route: 'Queue for next sync', time: 'Pending', del: 'Cached', trace: 'SNC-EV-603' },
    ]
  },
  'input': {
    title: 'Universal Input Experience',
    description: 'Standardizes enterprise interactions across keyboard, mouse, touch, trackpad, and voice modalities.',
    icon: 'Keyboard',
    kpis: [
      { label: 'Input Modalities', value: '14', desc: 'Supported interaction types', icon: 'Layers', color: 'text-indigo-500', descColor: 'text-indigo-400' },
      { label: 'Shortcut Usage', value: '14.2M', desc: 'Keyboard power users', icon: 'Zap', color: 'text-emerald-500' },
      { label: 'A11y Controllers', value: '412', desc: 'Assistive devices active', icon: 'Accessibility', color: 'text-blue-500' },
      { label: 'Error Rate', value: '0.01%', desc: 'Misclicks/Mis-taps', icon: 'CheckCircle2', color: 'text-emerald-500' },
    ],
    headers: ['Enterprise Task', 'Primary Input Method', 'Accessibility Fallback', 'Average Speed', 'Governance', 'Trace'],
    data: [
      { task: 'Bulk Approvals', prim: 'Keyboard (Cmd+Enter)', fall: 'Voice Command', time: '0.8s', gov: 'Verified', trace: 'UIE-EV-701' },
      { task: 'Architecture Drawing', prim: 'Stylus', fall: 'Trackpad Grid', time: 'N/A', gov: 'Verified', trace: 'UIE-EV-702' },
      { task: 'Audit Review', prim: 'Touch Swipe', fall: 'Arrow Keys', time: '1.2s', gov: 'Verified', trace: 'UIE-EV-703' },
    ]
  },
  'analytics': {
    title: 'Continuity Analytics',
    description: 'Executive intelligence demonstrating the ROI of a seamless multi-device workforce strategy.',
    icon: 'LineChart',
    kpis: [
      { label: 'Continuity Index', value: '94/100', desc: 'Seamless workflow score', icon: 'Activity', color: 'text-indigo-500', descColor: 'text-indigo-400' },
      { label: 'Mobility ROI', value: '$8.4M', desc: 'Est. productivity gain', icon: 'TrendingUp', color: 'text-emerald-500' },
      { label: 'Avg Devices/User', value: '2.8', desc: 'Enterprise ecosystem', icon: 'Users', color: 'text-blue-500' },
      { label: 'Handoff Delays', value: '-84%', desc: 'Friction eliminated', icon: 'TrendingDown', color: 'text-emerald-500' },
    ],
    headers: ['Department', 'Mobile Adoption', 'Tablet Usage', 'Cross-Device Transitions (Daily)', 'Status', 'Evidence'],
    data: [
      { dept: 'Executive Ops', mob: '94%', tab: '88%', trans: '14.2', status: 'Optimal', trace: 'CAN-EV-801' },
      { dept: 'Field Engineering', mob: '100%', tab: '100%', trans: '22.4', status: 'Optimal', trace: 'CAN-EV-802' },
      { dept: 'Finance Analytics', mob: '12%', tab: '4%', trans: '1.2', status: 'Warning', trace: 'CAN-EV-803' },
    ]
  },
  'governance': {
    title: 'Continuity Governance Board',
    description: 'Constitutional oversight ensuring that device transitions never bypass enterprise security policies.',
    icon: 'ShieldCheck',
    kpis: [
      { label: 'Policy Checks', value: '14.2M', desc: 'Device verifications', icon: 'Search', color: 'text-indigo-500', descColor: 'text-indigo-400' },
      { label: 'Blocked Handoffs', value: '142', desc: 'Security overrides', icon: 'XCircle', color: 'text-rose-500' },
      { label: 'Compliance', value: '100%', desc: 'MDM alignment', icon: 'CheckCircle2', color: 'text-emerald-500' },
      { label: 'Exceptions', value: '2', desc: 'Board approved offline use', icon: 'ClipboardList', color: 'text-amber-500' },
    ],
    headers: ['Continuity Policy', 'Target Scenario', 'Enforcement Action', 'Infractions', 'Governance', 'Execution ID'],
    data: [
      { pol: 'No PII on Unmanaged Devices', scen: 'Handoff to personal phone', act: 'Block session transfer', inf: '42 (Auto-Blocked)', gov: 'Verified', trace: 'CGB-EV-901' },
      { pol: 'Require Biometrics', scen: 'Resume executive dashboard', act: 'FaceID/TouchID prompt', inf: '0', gov: 'Verified', trace: 'CGB-EV-902' },
      { pol: 'Maximum Offline Time', scen: '7+ days without sync', act: 'Purge local cache', inf: '4', gov: 'Verified', trace: 'CGB-EV-903' },
    ]
  },
  'evidence': {
    title: 'Continuity Evidence Ledger',
    description: 'Immutable cryptographic trails for all cross-device transfers, offline syncing, and routing.',
    icon: 'History',
    kpis: [
      { label: 'Continuity Logs', value: '42.8M', desc: 'Cryptographic records', icon: 'Database', color: 'text-indigo-500', descColor: 'text-indigo-400' },
      { label: 'Sync Integrity', value: 'Verified', desc: 'No data corruption', icon: 'ShieldCheck', color: 'text-emerald-500' },
      { label: 'Ledger Latency', value: '8ms', desc: 'Commit speed', icon: 'Zap', color: 'text-blue-500' },
      { label: 'Audit Queries', value: '1,402', desc: 'Security reviews', icon: 'Search', color: 'text-indigo-500' },
    ],
    headers: ['Event ID', 'Timestamp', 'User Identity', 'Continuity Action', 'Constitutional Governance', 'EvidenceBadge'],
    data: [
      { id: 'CON-E-4404', time: '2026-07-22T09:44:00Z', user: 'U-8842', act: 'Session transferred Mac -> iPad', gov: 'Policy: Secure Handoff', trace: 'EV-C-4404' },
      { id: 'CON-E-4403', time: '2026-07-22T09:42:15Z', user: 'U-1042', act: 'Notification routed to Apple Watch', gov: 'Policy: Device Intelligence', trace: 'EV-C-4403' },
      { id: 'CON-E-4402', time: '2026-07-22T09:35:00Z', user: 'U-5042', act: 'Offline draft synchronized', gov: 'Policy: Merge Conflict Res', trace: 'EV-C-4402' },
    ]
  }
};

const pageTemplate = `import React from "react";
import Link from "next/link";
import { ArrowRight, Monitor, RefreshCw, Smartphone, Tablet, WifiOff, Bell, Keyboard, LineChart, ShieldCheck, History } from "lucide-react";

export default function ContinuityCommandCenter() {
  const modules = [
    { name: "Cross-Device Sessions", path: "/continuity/sessions", icon: RefreshCw, color: "text-indigo-400", bg: "bg-indigo-500/10", border: "border-indigo-500/20" },
    { name: "Mobile Experience", path: "/continuity/mobile", icon: Smartphone, color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20" },
    { name: "Tablet Productivity", path: "/continuity/tablets", icon: Tablet, color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
    { name: "Offline Operations", path: "/continuity/offline", icon: WifiOff, color: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/20" },
    { name: "Device Intelligence", path: "/continuity/devices", icon: Monitor, color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
    { name: "Smart Notifications", path: "/continuity/notifications", icon: Bell, color: "text-rose-400", bg: "bg-rose-500/10", border: "border-rose-500/20" },
    { name: "Universal Input", path: "/continuity/input", icon: Keyboard, color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20" },
    { name: "Continuity Analytics", path: "/continuity/analytics", icon: LineChart, color: "text-yellow-500", bg: "bg-yellow-500/10", border: "border-yellow-500/20" },
    { name: "Governance Board", path: "/continuity/governance", icon: ShieldCheck, color: "text-blue-500", bg: "bg-blue-500/10", border: "border-blue-500/20" },
    { name: "Evidence Ledger", path: "/continuity/evidence", icon: History, color: "text-slate-400", bg: "bg-slate-500/10", border: "border-slate-500/20" },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2 flex items-center gap-3">
              <RefreshCw className="w-8 h-8 text-indigo-500" />
              Continuity & Multi-Device OS (RMDCOS)
            </h1>
            <p className="text-slate-400">Executive dashboard governing cross-device workflows, offline syncing, and mobile accessibility.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="px-4 py-2 bg-indigo-950/30 border border-indigo-900/50 rounded-md">
               <span className="text-xs text-indigo-500 font-bold uppercase tracking-wider block mb-1">Device Continuity</span>
               <div className="text-xl font-black text-indigo-400">Seamless</div>
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
              <div className="text-xs text-slate-500 flex-1">Govern multi-device continuity.</div>
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

const basePath = path.join(__dirname, 'src', 'app', 'continuity');
fs.mkdirSync(basePath, { recursive: true });
fs.writeFileSync(path.join(basePath, 'page.tsx'), pageTemplate);

for (const [route, config] of Object.entries(routes)) {
  const routePath = path.join(basePath, route);
  fs.mkdirSync(routePath, { recursive: true });
  fs.writeFileSync(path.join(routePath, 'page.tsx'), generatePage(config.title, config.description, config.icon, config.kpis, config.headers, config.data));
  console.log('Generated route:', route);
}
