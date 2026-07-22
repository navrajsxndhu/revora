const fs = require('fs');
const path = require('path');

const generatePage = (title, description, iconName, kpis, headers, tableData, additionalUI) => {
  const allIcons = ['ArrowLeft', 'Search', 'ShieldCheck', 'Activity', 'Target', 'Download', 'Settings', 'History', 'BrainCircuit', 'Layers', 'Eye', 'Smile', 'Move', 'Languages', 'Accessibility', 'Briefcase', 'Lock', 'LineChart', 'CheckCircle2', 'AlertTriangle', 'XCircle', 'ArrowRight', 'Image', 'Keyboard', 'Timer', 'TrendingUp', 'TrendingDown', 'BookOpen', 'MousePointerClick', 'Database', 'Users', 'FileCode', 'GraduationCap', 'Map', 'ClipboardList', 'Sparkles', 'HeartHandshake', 'Network', 'Award', 'BarChart2', 'FileSignature', 'Lightbulb', 'Compass', 'MessageSquare', 'FolderHeart', 'Tags', 'Fingerprint', 'Users2', 'Video', 'Megaphone', 'Inbox', 'Calendar', 'Globe', 'Handshake', 'MessageCircle', 'Zap', 'Wind', 'Cpu', 'Mouse', 'Monitor', 'EyeOff', 'Laptop', 'Smartphone', 'Box', 'Maximize', 'Gauge', 'Unlock', 'HelpCircle', 'Terminal', 'ThumbsUp', 'LayoutDashboard', 'Star', 'Bell', 'LineChart', 'UserCircle2', 'RefreshCw', 'Tablet', 'WifiOff', 'ServerCrash', 'MapPin', 'Cast', 'Clock', 'ActivitySquare', 'CheckSquare', 'AlertOctagon', 'HeartPulse', 'Bot', 'Navigation', 'BarChart3', 'Paintbrush', 'Type', 'Wand2', 'Palette', 'Component', 'Sparkle', 'Share2', 'Waypoints', 'GitMerge', 'Radar', 'Telescope', 'Binary', 'Workflow', 'Microscope'];
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
              <Link href="/intelligence-fabric" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to REIF Command Center
              </Link>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2 flex items-center gap-3">
              <${iconName} className="w-8 h-8 text-teal-500" />
              ${title}
            </h1>
            <p className="text-slate-400">${description}</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="relative">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input type="text" placeholder="Search Knowledge Graph..." className="bg-slate-900 border border-slate-700 rounded-md pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-teal-500 w-64 transition-colors" />
             </div>
             <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-md text-sm font-medium transition-colors text-slate-200">
               <Download className="w-4 h-4" /> Export Ledger
             </button>
          </div>
        </header>

        {/* KPIs */}
        <div className="grid grid-cols-4 gap-4 shrink-0">
          ${kpis.map((kpi, i) => `
          <div className="bg-slate-900/60 border ${i === 0 ? 'border-teal-900/30 bg-teal-950/10 shadow-[0_0_15px_rgba(20,184,166,0.05)]' : 'border-slate-800'} rounded-xl p-5">
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
            title="Enterprise Knowledge Metrics" 
            headers={[${headers.map(h => `"${h}"`).join(', ')}]}
          >
            {${JSON.stringify(tableData)}.map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group cursor-pointer border-b border-slate-800/50">
                ${headers.map((h, j) => {
                  const key = Object.keys(tableData[0])[j];
                  if (h === 'Status' || h === 'Correlation' || h === 'Impact' || h === 'Risk' || h === 'Governance') {
                    return `
                <td className="py-4 px-5">
                  <span className={\`px-2 py-1 rounded text-xs font-bold border flex items-center gap-1 w-max \${
                    row.${key} === 'Critical' || row.${key} === 'High' || row.${key} === 'Severe' || row.${key} === 'Blocked' ? 'bg-rose-900/20 text-rose-400 border-rose-900/50' : 
                    row.${key} === 'Warning' || row.${key} === 'Medium' || row.${key} === 'Pending' || row.${key} === 'Elevated' ? 'bg-amber-900/20 text-amber-400 border-amber-900/50' :
                    row.${key} === 'Optimal' || row.${key} === 'Low' || row.${key} === 'Approved' || row.${key} === 'Verified' || row.${key} === 'Strong' || row.${key} === 'Healthy' ? 'bg-emerald-900/20 text-emerald-400 border-emerald-900/50' :
                    'bg-slate-800 text-slate-300 border-slate-700'
                  }\`}>
                    {row.${key}}
                  </span>
                </td>`;
                  }
                  if (h === 'Evidence' || h === 'Trace' || h === 'Execution ID') {
                    return `
                <td className="py-4 px-5">
                  <EvidenceBadge evidenceId={row.${key}} timestamp="Verified Graph" />
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
  'relationships': {
    title: 'Enterprise Relationship Graph',
    description: 'The constitutional graph connecting every application, policy, incident, and business capability.',
    icon: 'Share2',
    kpis: [
      { label: 'Active Edges', value: '41.2M', desc: 'Constitutional connections', icon: 'Network', color: 'text-teal-500', descColor: 'text-teal-400' },
      { label: 'Graph Latency', value: '8ms', desc: 'Query response time', icon: 'Zap', color: 'text-emerald-500' },
      { label: 'Orphaned Assets', value: '0', desc: 'Fully mapped enterprise', icon: 'ShieldCheck', color: 'text-blue-500' },
      { label: 'Connected Nodes', value: '8.4M', desc: 'Governed resources', icon: 'Database', color: 'text-teal-500' },
    ],
    headers: ['Source Node', 'Relationship Type', 'Target Node', 'Business Domain', 'Correlation', 'Trace'],
    data: [
      { src: 'App: Customer Portal', rel: 'DEPENDS_ON', targ: 'DB: Primary Users (AWS)', dom: 'Infrastructure', corr: 'Strong', trace: 'ERG-EV-101' },
      { src: 'Policy: Zero Trust', rel: 'GOVERNS', targ: 'Role: Cloud Architect', dom: 'Security & HR', corr: 'Strong', trace: 'ERG-EV-102' },
      { src: 'Incident: SEV-1 Outage', rel: 'CAUSED_BY', targ: 'Deployment: PR #1042', dom: 'Engineering Operations', corr: 'Strong', trace: 'ERG-EV-103' },
    ]
  },
  'correlations': {
    title: 'Cross-Domain Correlation Engine',
    description: 'Automatically discovers meaningful enterprise relationships without manual intervention.',
    icon: 'GitMerge',
    kpis: [
      { label: 'Correlations Found', value: '142K', desc: 'In last 30 days', icon: 'Search', color: 'text-teal-500', descColor: 'text-teal-400' },
      { label: 'Accuracy Score', value: '99.4%', desc: 'Machine verified', icon: 'Target', color: 'text-emerald-500' },
      { label: 'Manual Links', value: '0', desc: 'Fully autonomous mapping', icon: 'Bot', color: 'text-blue-500' },
      { label: 'Cross-Department', value: '64%', desc: 'Silos eliminated', icon: 'Layers', color: 'text-teal-500' },
    ],
    headers: ['Trigger Event', 'Correlated Discovery', 'Confidence Score', 'Action Taken', 'Status', 'Execution ID'],
    data: [
      { trig: 'CPU Spike (Infrastructure)', corr: 'End-of-Month Financial Batch', conf: '99.8%', act: 'Auto-scaled cluster', status: 'Optimal', trace: 'CDE-EV-201' },
      { trig: 'Failed Security Audit', corr: 'New Marketplace Extension', conf: '94.2%', act: 'Quarantined Plugin', status: 'Warning', trace: 'CDE-EV-202' },
      { trig: 'High Attrition (HR)', corr: 'Elevated On-Call Pages (Eng)', conf: '88.4%', act: 'Alerted VP Engineering', status: 'Critical', trace: 'CDE-EV-203' },
    ]
  },
  'dependencies': {
    title: 'Enterprise Dependency Explorer',
    description: 'Provides a complete top-to-bottom dependency map for every governed object in the organization.',
    icon: 'Waypoints',
    kpis: [
      { label: 'Critical Paths', value: '14', desc: 'Tier-1 dependencies', icon: 'AlertTriangle', color: 'text-teal-500', descColor: 'text-teal-400' },
      { label: 'Single Points of Failure', value: '0', desc: 'Redundancy verified', icon: 'ShieldCheck', color: 'text-emerald-500' },
      { label: 'Dependency Depth', value: '12', desc: 'Average graph traversal', icon: 'Layers', color: 'text-blue-500' },
      { label: 'Circular Dep.', value: '0', desc: 'Architectural debt', icon: 'CheckCircle2', color: 'text-emerald-500' },
    ],
    headers: ['Asset Name', 'Upstream Dependencies', 'Downstream Consumers', 'Ownership', 'Risk', 'Trace'],
    data: [
      { name: 'Auth Service', up: '2 (Identity Provider, Cache)', down: '142 Internal Apps', own: 'Platform Security', risk: 'Critical', trace: 'EDE-EV-301' },
      { name: 'Financial Ledger', up: '4 (ERP, Billing, HRIS)', down: '14 Reporting Dashboards', own: 'Finance Tech', risk: 'High', trace: 'EDE-EV-302' },
      { name: 'Email Gateway', up: '1 (DNS Provider)', down: 'All Employees', own: 'IT Operations', risk: 'Medium', trace: 'EDE-EV-303' },
    ]
  },
  'context': {
    title: 'Unified Business Context Engine',
    description: 'Transforms isolated technical records into rich organizational and financial context.',
    icon: 'Network',
    kpis: [
      { label: 'Context Hydration', value: '4ms', desc: 'Real-time assembly', icon: 'Zap', color: 'text-teal-500', descColor: 'text-teal-400' },
      { label: 'Dimensions Added', value: '14', desc: 'Perspectives per asset', icon: 'Layers', color: 'text-blue-500' },
      { label: 'Context Misses', value: '0', desc: 'Perfect recall', icon: 'CheckCircle2', color: 'text-emerald-500' },
      { label: 'Time Saved', value: '4.2h/user', desc: 'No more searching', icon: 'Timer', color: 'text-emerald-500' },
    ],
    headers: ['Technical Asset', 'Financial Context', 'Security Context', 'Compliance Context', 'State', 'Execution ID'],
    data: [
      { ass: 'Redis Cache Cluster', fin: '$4,200/mo (Underutilized)', sec: 'VPC Bound, No Public IP', comp: 'SOC2 Compliant', state: 'Optimal', trace: 'UBC-EV-401' },
      { ass: 'User Profile DB', fin: '$14,500/mo (Optimized)', sec: 'AES-256 Encrypted at Rest', comp: 'GDPR / CCPA In Scope', state: 'Optimal', trace: 'UBC-EV-402' },
      { ass: 'Legacy CRM Export', fin: '$800/mo (Deprecated)', sec: 'Basic Auth (Flagged)', comp: 'Policy Violation', state: 'Warning', trace: 'UBC-EV-403' },
    ]
  },
  'impact': {
    title: 'Enterprise Impact Analyzer',
    description: 'Simulates organizational impact and risk propagation before a constitutional change is executed.',
    icon: 'Radar',
    kpis: [
      { label: 'Simulations Run', value: '14.2K', desc: 'Impact models tested', icon: 'Activity', color: 'text-teal-500', descColor: 'text-teal-400' },
      { label: 'Prediction Accuracy', value: '99.9%', desc: 'Against real outcomes', icon: 'Target', color: 'text-emerald-500' },
      { label: 'Catastrophes Averted', value: '42', desc: 'Blocked breaking changes', icon: 'ShieldCheck', color: 'text-emerald-500' },
      { label: 'Simulation Time', value: '800ms', desc: 'Average compute time', icon: 'Zap', color: 'text-blue-500' },
    ],
    headers: ['Proposed Change', 'Simulated Infrastructure Impact', 'Simulated Business Impact', 'Risk Level', 'Governance', 'Trace'],
    data: [
      { prop: 'Upgrade PostgreSQL to v16', inf: '30s Database Downtime', bus: 'Cart Checkout Pause', risk: 'Medium', gov: 'Review', trace: 'EIA-EV-501' },
      { prop: 'Revoke VPN Access for Vendors', inf: '0 Downtime', bus: 'Blocks 4 Active Contracts', risk: 'High', gov: 'Review', trace: 'EIA-EV-502' },
      { prop: 'Deploy Marketing Site', inf: 'CDN Cache Purge', bus: 'Zero Customer Impact', risk: 'Low', gov: 'Approved', trace: 'EIA-EV-503' },
    ]
  },
  'decisions': {
    title: 'Executive Decision Intelligence',
    description: 'Provides decision-ready enterprise summaries rather than raw fragmented data.',
    icon: 'BrainCircuit',
    kpis: [
      { label: 'Decisions Informed', value: '1,402', desc: 'By intelligence fabric', icon: 'CheckSquare', color: 'text-teal-500', descColor: 'text-teal-400' },
      { label: 'Evidence Attached', value: '100%', desc: 'No unbacked claims', icon: 'ShieldCheck', color: 'text-emerald-500' },
      { label: 'Decision Speed', value: '+84%', desc: 'Executive velocity', icon: 'TrendingUp', color: 'text-blue-500' },
      { label: 'Reversal Rate', value: '0.01%', desc: 'Incorrect decisions', icon: 'TrendingDown', color: 'text-emerald-500' },
    ],
    headers: ['Executive Decision Required', 'Primary Supporting Evidence', 'Identified Risks', 'Financial Implication', 'Status', 'Execution ID'],
    data: [
      { dec: 'Approve Cloud Expansion to EU', ev: 'GDPR Compliance Audit Passed', risk: 'Latency for APAC users', fin: '+$42K/MRR Est.', status: 'Pending', trace: 'EDI-EV-601' },
      { dec: 'Mandate 2FA for all Contractors', ev: '3 Phishing Attempts Blocked', risk: 'Onboarding Friction', fin: 'Zero Direct Cost', status: 'Approved', trace: 'EDI-EV-602' },
      { dec: 'Deprecate Legacy API v1', ev: 'Only 0.4% traffic remaining', risk: 'Breaks 2 internal tools', fin: 'Saves $4K/mo', status: 'Pending', trace: 'EDI-EV-603' },
    ]
  },
  'insights': {
    title: 'Enterprise Insight Discovery',
    description: 'Continuously discovers optimization opportunities across technical, financial, and HR domains.',
    icon: 'Telescope',
    kpis: [
      { label: 'Proactive Insights', value: '14.2K', desc: 'Auto-generated', icon: 'Sparkles', color: 'text-teal-500', descColor: 'text-teal-400' },
      { label: 'Insights Actioned', value: '82%', desc: 'Adopted by teams', icon: 'CheckCircle2', color: 'text-emerald-500' },
      { label: 'Cost Savings Found', value: '$2.4M', desc: 'Annualized optimization', icon: 'LineChart', color: 'text-blue-500' },
      { label: 'False Positives', value: '0.4%', desc: 'Noise ratio', icon: 'Wind', color: 'text-emerald-500' },
    ],
    headers: ['Insight Category', 'Discovery Summary', 'Recommended Action', 'Potential Value', 'Impact', 'Trace'],
    data: [
      { cat: 'Cost Optimization', sum: '3 Idle Database Clusters found in staging.', rec: 'Terminate clusters', val: 'Save $12,400/yr', imp: 'Low', trace: 'EID-EV-701' },
      { cat: 'Security Risk', sum: '4 users have admin rights but no activity for 90 days.', rec: 'Revoke Admin Role', val: 'Reduce attack surface', imp: 'High', trace: 'EID-EV-702' },
      { cat: 'Process Bottleneck', sum: 'QA approvals averaging 4.2 days latency.', rec: 'Automate Integration Tests', val: 'Increase deployment velocity', imp: 'Medium', trace: 'EID-EV-703' },
    ]
  },
  'analytics': {
    title: 'Intelligence Analytics',
    description: 'Measures the quantitative ROI of connected enterprise knowledge and graph traversal.',
    icon: 'BarChart3',
    kpis: [
      { label: 'Intelligence Index', value: '94/100', desc: 'Overall maturity', icon: 'Activity', color: 'text-teal-500', descColor: 'text-teal-400' },
      { label: 'Silos Eliminated', value: '14', desc: 'Legacy barriers removed', icon: 'XCircle', color: 'text-emerald-500' },
      { label: 'Search Reduction', value: '-82%', desc: 'Time saved finding context', icon: 'TrendingDown', color: 'text-blue-500' },
      { label: 'Graph Queries', value: '14.2M', desc: 'Daily fabric navigations', icon: 'Network', color: 'text-teal-500' },
    ],
    headers: ['Department', 'Graph Utilization', 'Time Saved (Monthly)', 'Decision Velocity Increase', 'Health', 'Evidence'],
    data: [
      { dept: 'Security Operations', util: '99.4%', time: '412 Hours', vel: '+84%', health: 'Optimal', trace: 'IAN-EV-801' },
      { dept: 'Cloud Infrastructure', util: '94.2%', time: '214 Hours', vel: '+62%', health: 'Optimal', trace: 'IAN-EV-802' },
      { dept: 'Finance & Legal', util: '88.4%', time: '142 Hours', vel: '+42%', health: 'Healthy', trace: 'IAN-EV-803' },
    ]
  },
  'governance': {
    title: 'Intelligence Governance Board',
    description: 'Constitutional oversight ensuring the intelligence fabric rules and correlation algorithms remain unbiased.',
    icon: 'ShieldCheck',
    kpis: [
      { label: 'Rules Audited', value: '100%', desc: 'Correlation integrity', icon: 'Search', color: 'text-teal-500', descColor: 'text-teal-400' },
      { label: 'Algorithm Bias', value: '0%', desc: 'Machine verified', icon: 'CheckCircle2', color: 'text-emerald-500' },
      { label: 'Privacy Violations', value: '0', desc: 'Data masked in graph', icon: 'Lock', color: 'text-emerald-500' },
      { label: 'Governance Reviews', value: '42', desc: 'Fabric updates', icon: 'ClipboardList', color: 'text-blue-500' },
    ],
    headers: ['Intelligence Policy', 'Governed AI/Graph Engine', 'Enforcement Rule', 'Violations Detected', 'Governance', 'Execution ID'],
    data: [
      { pol: 'No PII in Relationship Graph', eng: 'Cross-Domain Correlation Engine', rule: 'Mask all user strings', viol: '0', gov: 'Verified', trace: 'IGB-EV-901' },
      { pol: 'Impact Simulation Limits', eng: 'Enterprise Impact Analyzer', rule: 'Max 1000 nodes traversed per sim', viol: '0', gov: 'Verified', trace: 'IGB-EV-902' },
      { pol: 'Evidence Mandate', eng: 'Executive Decision Intelligence', rule: 'No insight without cryptographic backing', viol: '0', gov: 'Verified', trace: 'IGB-EV-903' },
    ]
  },
  'evidence': {
    title: 'Intelligence Evidence Ledger',
    description: 'Immutable ledger for Enterprise Intelligence, logging every new graph edge, correlation, and insight.',
    icon: 'History',
    kpis: [
      { label: 'Intelligence Logs', value: '4.2B', desc: 'Cryptographic state records', icon: 'Database', color: 'text-teal-500', descColor: 'text-teal-400' },
      { label: 'Ledger Integrity', value: 'Verified', desc: 'SHA-256 Validated', icon: 'ShieldCheck', color: 'text-emerald-500' },
      { label: 'Commit Velocity', value: '2ms', desc: 'Edge writing speed', icon: 'Zap', color: 'text-blue-500' },
      { label: 'Audit Exports', value: '14', desc: 'Compliance reports pulled', icon: 'Download', color: 'text-indigo-500' },
    ],
    headers: ['Event ID', 'Timestamp', 'System Initiator', 'Intelligence Action', 'Constitutional Governance', 'EvidenceBadge'],
    data: [
      { id: 'INT-E-7701', time: '2026-07-22T10:15:00Z', sys: 'Correlation Engine', act: 'Created Edge: PR #1042 -> CPU Spike', gov: 'Policy: Incident Mapping', trace: 'EV-I-7701' },
      { id: 'INT-E-7702', time: '2026-07-22T10:12:15Z', sys: 'Impact Analyzer', act: 'Simulated Network Policy Drop', gov: 'Policy: Change Management', trace: 'EV-I-7702' },
      { id: 'INT-E-7703', time: '2026-07-22T10:05:00Z', sys: 'Insight Discovery', act: 'Generated Cost Optimization Alert', gov: 'Policy: Financial Efficiency', trace: 'EV-I-7703' },
    ]
  }
};

const pageTemplate = `import React from "react";
import Link from "next/link";
import { ArrowRight, Share2, Waypoints, GitMerge, Radar, BrainCircuit, Telescope, Network, BarChart3, ShieldCheck, History } from "lucide-react";

export default function IntelligenceFabricCenter() {
  const modules = [
    { name: "Relationship Graph", path: "/intelligence-fabric/relationships", icon: Share2, color: "text-teal-400", bg: "bg-teal-500/10", border: "border-teal-500/20" },
    { name: "Correlation Engine", path: "/intelligence-fabric/correlations", icon: GitMerge, color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20" },
    { name: "Dependency Explorer", path: "/intelligence-fabric/dependencies", icon: Waypoints, color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
    { name: "Business Context", path: "/intelligence-fabric/context", icon: Network, color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
    { name: "Impact Analyzer", path: "/intelligence-fabric/impact", icon: Radar, color: "text-rose-400", bg: "bg-rose-500/10", border: "border-rose-500/20" },
    { name: "Decision Intel", path: "/intelligence-fabric/decisions", icon: BrainCircuit, color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20" },
    { name: "Insight Discovery", path: "/intelligence-fabric/insights", icon: Telescope, color: "text-fuchsia-400", bg: "bg-fuchsia-500/10", border: "border-fuchsia-500/20" },
    { name: "Intelligence Analytics", path: "/intelligence-fabric/analytics", icon: BarChart3, color: "text-yellow-400", bg: "bg-yellow-500/10", border: "border-yellow-500/20" },
    { name: "Governance Board", path: "/intelligence-fabric/governance", icon: ShieldCheck, color: "text-emerald-500", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
    { name: "Evidence Ledger", path: "/intelligence-fabric/evidence", icon: History, color: "text-slate-400", bg: "bg-slate-500/10", border: "border-slate-500/20" },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2 flex items-center gap-3">
              <Share2 className="w-8 h-8 text-teal-500" />
              Enterprise Intelligence Fabric (REIF)
            </h1>
            <p className="text-slate-400">The constitutional knowledge graph connecting every asset, policy, and workflow.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="px-4 py-2 bg-teal-950/30 border border-teal-900/50 rounded-md">
               <span className="text-xs text-teal-500 font-bold uppercase tracking-wider block mb-1">Knowledge State</span>
               <div className="text-xl font-black text-teal-400">Unified</div>
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
              <div className="text-xs text-slate-500 flex-1">Govern enterprise knowledge graph.</div>
              <div className="mt-4 flex items-center text-xs font-medium text-slate-400 group-hover:text-teal-400 transition-colors">
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

const basePath = path.join(__dirname, 'src', 'app', 'intelligence-fabric');
fs.mkdirSync(basePath, { recursive: true });
fs.writeFileSync(path.join(basePath, 'page.tsx'), pageTemplate);

for (const [route, config] of Object.entries(routes)) {
  const routePath = path.join(basePath, route);
  fs.mkdirSync(routePath, { recursive: true });
  fs.writeFileSync(path.join(routePath, 'page.tsx'), generatePage(config.title, config.description, config.icon, config.kpis, config.headers, config.data));
  console.log('Generated route:', route);
}
