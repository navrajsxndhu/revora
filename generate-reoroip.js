const fs = require('fs');
const path = require('path');

const generatePage = (title, description, iconName, kpis, headers, tableData, additionalUI) => {
  const allIcons = ['ArrowLeft', 'Search', 'ShieldCheck', 'Activity', 'Target', 'Download', 'Settings', 'History', 'BrainCircuit', 'Layers', 'Eye', 'Smile', 'Move', 'Languages', 'Accessibility', 'Briefcase', 'Lock', 'LineChart', 'CheckCircle2', 'AlertTriangle', 'XCircle', 'ArrowRight', 'Image', 'Keyboard', 'Timer', 'TrendingUp', 'TrendingDown', 'BookOpen', 'MousePointerClick', 'Database', 'Users', 'FileCode', 'GraduationCap', 'Map', 'ClipboardList', 'Sparkles', 'HeartHandshake', 'Network', 'Award', 'BarChart2', 'FileSignature', 'Lightbulb', 'Compass', 'MessageSquare', 'FolderHeart', 'Tags', 'Fingerprint', 'Users2', 'Video', 'Megaphone', 'Inbox', 'Calendar', 'Globe', 'Handshake', 'MessageCircle', 'Zap', 'Wind', 'Cpu', 'Mouse', 'Monitor', 'EyeOff', 'Laptop', 'Smartphone', 'Box', 'Maximize', 'Gauge', 'Unlock', 'HelpCircle', 'Terminal', 'ThumbsUp', 'LayoutDashboard', 'Star', 'Bell', 'LineChart', 'UserCircle2', 'RefreshCw', 'Tablet', 'WifiOff', 'ServerCrash', 'MapPin', 'Cast', 'Clock', 'ActivitySquare', 'CheckSquare', 'AlertOctagon', 'HeartPulse', 'Bot', 'Navigation', 'BarChart3', 'Paintbrush', 'Type', 'Wand2', 'Palette', 'Component', 'Sparkle', 'Share2', 'Waypoints', 'GitMerge', 'Radar', 'Telescope', 'Binary', 'Workflow', 'Microscope', 'MonitorPlay', 'Columns', 'Menu', 'Save', 'GitCompare', 'Layout', 'SearchCode', 'LineChart', 'UsersRound', 'Scale', 'LinkIcon', 'PenTool', 'GitPullRequest', 'UserCheck', 'Library', 'Plug', 'PlayCircle', 'ListChecks', 'BookMarked', 'TableProperties', 'Network', 'DatabaseBackup', 'FileJson', 'ShieldAlert', 'ShoppingBag', 'PieChart', 'RadioTower', 'HardDrive', 'Cpu', 'Siren', 'HeartPulse', 'Scale', 'History', 'Flame'];
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
              <Link href="/observability" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Observability Command Center
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
                <input type="text" placeholder="Search Operational Signals..." className="bg-slate-900 border border-slate-700 rounded-md pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-indigo-400 w-64 transition-colors" />
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
            title="Operational Telemetry" 
            headers={[${headers.map(h => `"${h}"`).join(', ')}]}
          >
            {${JSON.stringify(tableData)}.map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group cursor-pointer border-b border-slate-800/50">
                ${headers.map((h, j) => {
                  const key = Object.keys(tableData[0])[j];
                  if (h === 'Status' || h === 'State' || h === 'Condition' || h === 'Severity' || h === 'Health') {
                    return `
                <td className="py-4 px-5">
                  <span className={\`px-2 py-1 rounded text-xs font-bold border flex items-center gap-1 w-max \${
                    row.${key} === 'Critical' || row.${key} === 'SEV-1' || row.${key} === 'Down' || row.${key} === 'Failed' || row.${key} === 'Exhausted' ? 'bg-rose-900/20 text-rose-400 border-rose-900/50' : 
                    row.${key} === 'Warning' || row.${key} === 'SEV-2' || row.${key} === 'Degraded' || row.${key} === 'At Risk' ? 'bg-amber-900/20 text-amber-400 border-amber-900/50' :
                    row.${key} === 'Optimal' || row.${key} === 'SEV-3' || row.${key} === 'Healthy' || row.${key} === 'Verified' || row.${key} === 'Active' || row.${key} === 'Stable' ? 'bg-emerald-900/20 text-emerald-400 border-emerald-900/50' :
                    'bg-slate-800 text-slate-300 border-slate-700'
                  }\`}>
                    {row.${key}}
                  </span>
                </td>`;
                  }
                  if (h === 'Evidence' || h === 'Trace' || h === 'Execution ID') {
                    return `
                <td className="py-4 px-5">
                  <EvidenceBadge evidenceId={row.${key}} timestamp="Observed" />
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
  'telemetry': {
    title: 'Unified Telemetry Explorer',
    description: 'The constitutional registry for governed metrics, logs, traces, and synthetic operational signals.',
    icon: 'RadioTower',
    kpis: [
      { label: 'Ingestion Rate', value: '1.4M/s', desc: 'Enterprise wide signals', icon: 'Activity', color: 'text-indigo-500', descColor: 'text-indigo-400' },
      { label: 'Trace Completeness', value: '99.9%', desc: 'Distributed context', icon: 'Waypoints', color: 'text-emerald-500' },
      { label: 'Anomalies Detected', value: '42', desc: 'AI-flagged deviations', icon: 'Bot', color: 'text-blue-500' },
      { label: 'Retention Coverage', value: '100%', desc: 'Policy enforced', icon: 'ShieldCheck', color: 'text-emerald-500' },
    ],
    headers: ['Telemetry Source', 'Signal Type', 'Volume / Rate', 'Business Domain', 'State', 'Trace'],
    data: [
      { src: 'Payments API Cluster', type: 'Trace (OpenTelemetry)', vol: '14,204 spans/s', dom: 'Commerce', state: 'Optimal', trace: 'UTE-EV-101' },
      { src: 'Auth0 Identity Provider', type: 'Audit Logs', vol: '840 lines/s', dom: 'Security', state: 'Optimal', trace: 'UTE-EV-102' },
      { src: 'E-commerce Gateway', type: 'Metrics (Latency)', vol: 'p99 > 2.4s', dom: 'Commerce', state: 'Warning', trace: 'UTE-EV-103' },
    ]
  },
  'services': {
    title: 'Enterprise Service Health',
    description: 'The operational inventory mapping availability, latency, and error rates to direct business impact.',
    icon: 'HeartPulse',
    kpis: [
      { label: 'Global Availability', value: '99.99%', desc: 'Rolling 30 days', icon: 'CheckCircle2', color: 'text-indigo-500', descColor: 'text-indigo-400' },
      { label: 'Degraded Services', value: '2', desc: 'Active investigations', icon: 'AlertTriangle', color: 'text-rose-500' },
      { label: 'Avg Latency (p95)', value: '142ms', desc: 'Across core paths', icon: 'Timer', color: 'text-blue-500' },
      { label: 'Services Mapped', value: '1,402', desc: 'Fully observable', icon: 'Layers', color: 'text-emerald-500' },
    ],
    headers: ['Service Name', 'Tier', 'Availability', 'Current Latency', 'Health', 'Execution ID'],
    data: [
      { srv: 'Authentication Core', tier: 'Tier 0', avail: '100.00%', lat: '42ms', health: 'Healthy', trace: 'ESH-EV-201' },
      { srv: 'Checkout Processing', tier: 'Tier 1', avail: '99.92%', lat: '1.2s', health: 'Degraded', trace: 'ESH-EV-202' },
      { srv: 'Legacy Reporting DB', tier: 'Tier 3', avail: '84.2%', lat: '14s', health: 'Failed', trace: 'ESH-EV-203' },
    ]
  },
  'incidents': {
    title: 'Incident Intelligence Center',
    description: 'The constitutional command center for active incidents, root cause tracing, and executive communication.',
    icon: 'Siren',
    kpis: [
      { label: 'Active Incidents', value: '1', desc: 'SEV-2 (Checkout)', icon: 'Siren', color: 'text-rose-500', descColor: 'text-rose-400' },
      { label: 'MTTA', value: '1.2m', desc: 'Mean Time to Acknowledge', icon: 'Clock', color: 'text-emerald-500' },
      { label: 'MTTR', value: '14m', desc: 'Mean Time to Resolve', icon: 'Timer', color: 'text-blue-500' },
      { label: 'Blast Radius', value: 'Isolated', desc: 'Current impact', icon: 'Target', color: 'text-emerald-500' },
    ],
    headers: ['Incident ID', 'Impacted Service', 'Commander', 'Time Open', 'Severity', 'Trace'],
    data: [
      { id: 'INC-2026-901', srv: 'Checkout Processing API', cmd: 'Jane Doe (SRE)', time: '14m', sev: 'SEV-2', trace: 'IIC-EV-301' },
      { id: 'INC-2026-900', srv: 'Internal Search Index', cmd: 'System Auto-Resolved', time: 'Resolved', sev: 'SEV-3', trace: 'IIC-EV-302' },
      { id: 'INC-2026-899', srv: 'EU Database Replica', cmd: 'John Smith', time: 'Resolved', sev: 'SEV-1', trace: 'IIC-EV-303' },
    ]
  },
  'reliability': {
    title: 'Reliability Engineering Center',
    description: 'Governance for enterprise resilience, measuring Service Level Objectives (SLOs) and Error Budgets.',
    icon: 'ShieldCheck',
    kpis: [
      { label: 'SLO Compliance', value: '98.4%', desc: 'Enterprise average', icon: 'Award', color: 'text-indigo-500', descColor: 'text-indigo-400' },
      { label: 'Budgets Exhausted', value: '1', desc: 'Freeze deployment', icon: 'Lock', color: 'text-rose-500' },
      { label: 'Automated Recovery', value: '84%', desc: 'Self-healing events', icon: 'Bot', color: 'text-blue-500' },
      { label: 'Resilience Score', value: 'A-', desc: 'Quarterly rating', icon: 'TrendingUp', color: 'text-emerald-500' },
    ],
    headers: ['Business Journey', 'SLO Target', 'Current Value', 'Error Budget Remaining', 'Status', 'Execution ID'],
    data: [
      { obj: 'User Login Success', target: '99.99%', val: '99.995%', budget: '84% Remaining', status: 'Optimal', trace: 'REC-EV-401' },
      { obj: 'Payment Processing Latency', target: '< 500ms (99%)', val: '94.2%', budget: '0% (Exhausted)', status: 'Critical', trace: 'REC-EV-402' },
      { obj: 'Dashboard Load Time', target: '< 2s (95%)', val: '98.4%', budget: '42% Remaining', status: 'Warning', trace: 'REC-EV-403' },
    ]
  },
  'capacity': {
    title: 'Capacity & Performance Intelligence',
    description: 'Predictive governance forecasting infrastructure demands and preventing resource exhaustion.',
    icon: 'HardDrive',
    kpis: [
      { label: 'Compute Utilization', value: '64%', desc: 'Global average', icon: 'Cpu', color: 'text-indigo-500', descColor: 'text-indigo-400' },
      { label: 'Storage Runway', value: '14 Months', desc: 'Before exhaustion', icon: 'Database', color: 'text-emerald-500' },
      { label: 'Scaling Events', value: '412', desc: 'Past 24 hours', icon: 'Maximize', color: 'text-blue-500' },
      { label: 'Cost Efficiency', value: '92/100', desc: 'Resource optimization', icon: 'LineChart', color: 'text-emerald-500' },
    ],
    headers: ['Resource Pool', 'Current Load', 'Growth Velocity', 'Forecasted Exhaustion', 'Health', 'Trace'],
    data: [
      { pool: 'US-East Kubernetes Cluster', load: '82%', vel: '+4% / week', out: '4 Weeks', health: 'Warning', trace: 'CPI-EV-501' },
      { pool: 'Global Media CDN', load: '41%', vel: 'Stable', out: '> 2 Years', health: 'Healthy', trace: 'CPI-EV-502' },
      { pool: 'Archival Storage Tier', load: '98%', vel: '+1% / day', out: '2 Days', health: 'Critical', trace: 'CPI-EV-503' },
    ]
  },
  'dependencies': {
    title: 'Operational Dependency Map',
    description: 'Visualizes real-time architectural dependencies to trace cascading failures across the enterprise ecosystem.',
    icon: 'Network',
    kpis: [
      { label: 'Mapped Edges', value: '14.2K', desc: 'Service connections', icon: 'Waypoints', color: 'text-indigo-500', descColor: 'text-indigo-400' },
      { label: 'Circular Dependencies', value: '0', desc: 'Constitutional block', icon: 'ShieldCheck', color: 'text-emerald-500' },
      { label: 'Critical Paths', value: '14', desc: 'Zero redundancy', icon: 'AlertTriangle', color: 'text-rose-500' },
      { label: 'External APIs', value: '42', desc: '3rd party reliance', icon: 'Globe', color: 'text-blue-500' },
    ],
    headers: ['Origin Service', 'Dependent Target', 'Interaction Type', 'Failure Impact', 'State', 'Execution ID'],
    data: [
      { org: 'Checkout Service', targ: 'Stripe API Gateway', type: 'Synchronous REST', imp: 'Tier 0 (Revenue Block)', state: 'Active', trace: 'ODM-EV-601' },
      { org: 'User Profile Load', targ: 'Redis Cache Cluster', type: 'Asynchronous PubSub', imp: 'Tier 2 (Latency Spikes)', state: 'Active', trace: 'ODM-EV-602' },
      { org: 'Reporting Engine', targ: 'Legacy DB (Deprecating)', type: 'Batch Query', imp: 'Tier 3 (Delayed Reports)', state: 'Warning', trace: 'ODM-EV-603' },
    ]
  },
  'analytics': {
    title: 'Operational Intelligence Analytics',
    description: 'Executive intelligence demonstrating the ROI of reliability engineering and monitoring maturity.',
    icon: 'LineChart',
    kpis: [
      { label: 'Reliability Index', value: '94/100', desc: 'Enterprise wide score', icon: 'Activity', color: 'text-indigo-500', descColor: 'text-indigo-400' },
      { label: 'Alert Fatigue Drop', value: '-84%', desc: 'Noise reduction YoY', icon: 'TrendingDown', color: 'text-emerald-500' },
      { label: 'Incident Prevention', value: '142', desc: 'Averted via AI', icon: 'ShieldCheck', color: 'text-blue-500' },
      { label: 'Downtime Cost Saved', value: '$4.2M', desc: 'Estimated ROI', icon: 'Award', color: 'text-emerald-500' },
    ],
    headers: ['Business Domain', 'Uptime SLA', 'Alerts / Month', 'MTTR Trend', 'State', 'Trace'],
    data: [
      { dom: 'Commerce Platform', sla: '99.99%', alerts: '14 (Low Noise)', trend: '-14% (Improving)', state: 'Optimal', trace: 'OIA-EV-701' },
      { dom: 'Enterprise Search', sla: '99.9%', alerts: '2', trend: 'Stable', state: 'Optimal', trace: 'OIA-EV-702' },
      { dom: 'Legacy HR Portal', sla: '99.0%', alerts: '412 (High Noise)', trend: '+42% (Degrading)', state: 'Warning', trace: 'OIA-EV-703' },
    ]
  },
  'governance': {
    title: 'Observability Governance Board',
    description: 'Constitutional oversight enforcing strict monitoring standards, SLO adherence, and on-call policies.',
    icon: 'Scale',
    kpis: [
      { label: 'Monitoring Policies', value: '42', desc: 'Constitutional rules', icon: 'FileSignature', color: 'text-indigo-500', descColor: 'text-indigo-400' },
      { label: 'Coverage Compliance', value: '100%', desc: 'All Tier 1 mapped', icon: 'ShieldCheck', color: 'text-emerald-500' },
      { label: 'Deployment Blocks', value: '14', desc: 'Missing telemetry', icon: 'Lock', color: 'text-blue-500' },
      { label: 'Audit Readiness', value: 'Immediate', desc: 'Evidence backed', icon: 'Clock', color: 'text-emerald-500' },
    ],
    headers: ['Governance Rule', 'Target Domain', 'Enforcement Logic', 'Violations Blocked', 'Governance', 'Execution ID'],
    data: [
      { rule: 'All Tier 0 services require Tracing', dom: 'Core Architecture', enf: 'CI/CD Block', block: '142', gov: 'Verified', trace: 'OGB-EV-801' },
      { rule: 'Deployments freeze if Error Budget < 0', dom: 'Release Engineering', enf: 'Pipeline Reject', block: '12', gov: 'Verified', trace: 'OGB-EV-802' },
      { rule: 'P1 incidents require post-mortem within 48h', dom: 'SRE Operations', enf: 'Manager Escalation', block: '0 (Compliant)', gov: 'Verified', trace: 'OGB-EV-803' },
    ]
  },
  'resilience': {
    title: 'Enterprise Resilience Simulator',
    description: 'Predictive chaos engineering simulating disaster recovery and multi-region failovers before failures occur.',
    icon: 'Flame',
    kpis: [
      { label: 'Chaos Experiments', value: '142', desc: 'Automated monthly', icon: 'Flame', color: 'text-rose-500', descColor: 'text-rose-400' },
      { label: 'Failover Success', value: '100%', desc: 'Simulated recovery', icon: 'CheckCircle2', color: 'text-emerald-500' },
      { label: 'Vulnerabilities', value: '3', desc: 'Identified for fix', icon: 'AlertTriangle', color: 'text-amber-500' },
      { label: 'DR Readiness', value: 'Verified', desc: 'Compliance status', icon: 'ShieldCheck', color: 'text-blue-500' },
    ],
    headers: ['Simulation Scenario', 'Target Subsystem', 'Simulated Failure', 'Recovery Result', 'Condition', 'Trace'],
    data: [
      { scen: 'Region US-East Outage', targ: 'Global DB Clusters', fail: 'Total Datacenter Loss', res: 'Failover to US-West (<2s)', cond: 'Optimal', trace: 'ERS-EV-901' },
      { scen: 'Stripe API 500 Errors', targ: 'Checkout Pipeline', fail: '3rd Party Blackout', res: 'Graceful Queueing', cond: 'Optimal', trace: 'ERS-EV-902' },
      { scen: 'Redis Cache Purge', targ: 'User Sessions', fail: 'Memory Exhaustion', res: '14% User Logout (Bug)', cond: 'Warning', trace: 'ERS-EV-903' },
    ]
  },
  'evidence': {
    title: 'Observability Evidence Ledger',
    description: 'Immutable ledger recording every incident escalation, SLO breach, and resilience simulation event.',
    icon: 'History',
    kpis: [
      { label: 'Operational Logs', value: '412M', desc: 'Cryptographic records', icon: 'Database', color: 'text-indigo-500', descColor: 'text-indigo-400' },
      { label: 'Ledger Integrity', value: 'Verified', desc: 'SHA-256 Validated', icon: 'ShieldCheck', color: 'text-emerald-500' },
      { label: 'Audit Pull Latency', value: '1.2s', desc: 'Instant compliance', icon: 'Download', color: 'text-blue-500' },
      { label: 'SRE Attestations', value: '14K', desc: 'Post-mortem signatures', icon: 'FileSignature', color: 'text-emerald-500' },
    ],
    headers: ['Event ID', 'Timestamp', 'Actor / System', 'Operational Action', 'Constitutional Governance', 'EvidenceBadge'],
    data: [
      { id: 'OB-E-9901', time: '2026-07-22T10:22:00Z', act: 'Reliability Engine', acti: 'Froze Deployment (Error Budget)', gov: 'Policy: SLO Adherence', trace: 'EV-OB-9901' },
      { id: 'OB-E-9902', time: '2026-07-22T10:20:42Z', act: 'jdoe (Incident Commander)', acti: 'Elevated incident to SEV-1', gov: 'Policy: Escalation Procedures', trace: 'EV-OB-9902' },
      { id: 'OB-E-9903', time: '2026-07-22T10:18:10Z', act: 'Resilience Simulator', acti: 'Completed Region Failover Test', gov: 'Policy: DR Compliance', trace: 'EV-OB-9903' },
    ]
  }
};

const pageTemplate = `import React from "react";
import Link from "next/link";
import { ArrowRight, Activity, RadioTower, HeartPulse, Siren, ShieldCheck, HardDrive, Network, LineChart, Scale, Flame, History } from "lucide-react";

export default function ObservabilityHub() {
  const modules = [
    { name: "Telemetry Explorer", path: "/observability/telemetry", icon: RadioTower, color: "text-indigo-400", bg: "bg-indigo-500/10", border: "border-indigo-500/20" },
    { name: "Service Health", path: "/observability/services", icon: HeartPulse, color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20" },
    { name: "Incident Intelligence", path: "/observability/incidents", icon: Siren, color: "text-rose-400", bg: "bg-rose-500/10", border: "border-rose-500/20" },
    { name: "Reliability Center", path: "/observability/reliability", icon: ShieldCheck, color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
    { name: "Capacity Intelligence", path: "/observability/capacity", icon: HardDrive, color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
    { name: "Dependency Map", path: "/observability/dependencies", icon: Network, color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20" },
    { name: "Operational Analytics", path: "/observability/analytics", icon: LineChart, color: "text-fuchsia-400", bg: "bg-fuchsia-500/10", border: "border-fuchsia-500/20" },
    { name: "Governance Board", path: "/observability/governance", icon: Scale, color: "text-yellow-400", bg: "bg-yellow-500/10", border: "border-yellow-500/20" },
    { name: "Resilience Simulator", path: "/observability/resilience", icon: Flame, color: "text-orange-400", bg: "bg-orange-500/10", border: "border-orange-500/20" },
    { name: "Evidence Ledger", path: "/observability/evidence", icon: History, color: "text-slate-400", bg: "bg-slate-500/10", border: "border-slate-500/20" },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2 flex items-center gap-3">
              <Activity className="w-8 h-8 text-indigo-400" />
              Enterprise Observability (REOROIP)
            </h1>
            <p className="text-slate-400">The constitutional governance engine for operational health, reliability engineering, and capacity intelligence.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="px-4 py-2 bg-indigo-950/30 border border-indigo-900/50 rounded-md">
               <span className="text-xs text-indigo-400 font-bold uppercase tracking-wider block mb-1">Platform Status</span>
               <div className="text-xl font-black text-indigo-300 flex items-center gap-2">
                 <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                 All Systems Operational
               </div>
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
              <div className="text-xs text-slate-500 flex-1">Configure operational controls.</div>
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

const basePath = path.join(__dirname, 'src', 'app', 'observability');
fs.mkdirSync(basePath, { recursive: true });
fs.writeFileSync(path.join(basePath, 'page.tsx'), pageTemplate);

for (const [route, config] of Object.entries(routes)) {
  const routePath = path.join(basePath, route);
  fs.mkdirSync(routePath, { recursive: true });
  fs.writeFileSync(path.join(routePath, 'page.tsx'), generatePage(config.title, config.description, config.icon, config.kpis, config.headers, config.data));
  console.log('Generated route:', route);
}
