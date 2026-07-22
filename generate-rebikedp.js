const fs = require('fs');
const path = require('path');

const generatePage = (title, description, iconName, kpis, headers, tableData, additionalUI) => {
  const allIcons = ['ArrowLeft', 'Search', 'ShieldCheck', 'Activity', 'Target', 'Download', 'Settings', 'History', 'BrainCircuit', 'Layers', 'Eye', 'Smile', 'Move', 'Languages', 'Accessibility', 'Briefcase', 'Lock', 'LineChart', 'CheckCircle2', 'AlertTriangle', 'XCircle', 'ArrowRight', 'Image', 'Keyboard', 'Timer', 'TrendingUp', 'TrendingDown', 'BookOpen', 'MousePointerClick', 'Database', 'Users', 'FileCode', 'GraduationCap', 'Map', 'ClipboardList', 'Sparkles', 'HeartHandshake', 'Network', 'Award', 'BarChart2', 'FileSignature', 'Lightbulb', 'Compass', 'MessageSquare', 'FolderHeart', 'Tags', 'Fingerprint', 'Users2', 'Video', 'Megaphone', 'Inbox', 'Calendar', 'Globe', 'Handshake', 'MessageCircle', 'Zap', 'Wind', 'Cpu', 'Mouse', 'Monitor', 'EyeOff', 'Laptop', 'Smartphone', 'Box', 'Maximize', 'Gauge', 'Unlock', 'HelpCircle', 'Terminal', 'ThumbsUp', 'LayoutDashboard', 'Star', 'Bell', 'LineChart', 'UserCircle2', 'RefreshCw', 'Tablet', 'WifiOff', 'ServerCrash', 'MapPin', 'Cast', 'Clock', 'ActivitySquare', 'CheckSquare', 'AlertOctagon', 'HeartPulse', 'Bot', 'Navigation', 'BarChart3', 'Paintbrush', 'Type', 'Wand2', 'Palette', 'Component', 'Sparkle', 'Share2', 'Waypoints', 'GitMerge', 'Radar', 'Telescope', 'Binary', 'Workflow', 'Microscope', 'MonitorPlay', 'Columns', 'Menu', 'Save', 'GitCompare', 'Layout', 'SearchCode', 'LineChart', 'UsersRound', 'Scale', 'LinkIcon', 'PenTool', 'GitPullRequest', 'UserCheck', 'Library', 'Plug', 'PlayCircle', 'ListChecks', 'BookMarked', 'TableProperties', 'Network', 'DatabaseBackup', 'FileJson', 'ShieldAlert', 'ShoppingBag', 'PieChart', 'RadioTower', 'HardDrive', 'Cpu', 'Siren', 'HeartPulse', 'Scale', 'History', 'Flame', 'Presentation', 'Target', 'Crosshair', 'LayoutTemplate', 'TrendingUp', 'Compass', 'Lightbulb', 'FileText'];
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
              <Link href="/business-intelligence" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to BI Command Center
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
                <input type="text" placeholder="Search Executive KPIs..." className="bg-slate-900 border border-slate-700 rounded-md pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-indigo-400 w-64 transition-colors" />
             </div>
             <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-md text-sm font-medium transition-colors text-slate-200">
               <Download className="w-4 h-4" /> Export Report
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
            title="Strategic Intelligence" 
            headers={[${headers.map(h => `"${h}"`).join(', ')}]}
          >
            {${JSON.stringify(tableData)}.map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group cursor-pointer border-b border-slate-800/50">
                ${headers.map((h, j) => {
                  const key = Object.keys(tableData[0])[j];
                  if (h === 'Status' || h === 'State' || h === 'Condition' || h === 'Risk Level' || h === 'Confidence') {
                    return `
                <td className="py-4 px-5">
                  <span className={\`px-2 py-1 rounded text-xs font-bold border flex items-center gap-1 w-max \${
                    row.${key} === 'Critical' || row.${key} === 'At Risk' || row.${key} === 'High' || row.${key} === 'Off Track' || row.${key} === 'Low' ? 'bg-rose-900/20 text-rose-400 border-rose-900/50' : 
                    row.${key} === 'Warning' || row.${key} === 'Medium' || row.${key} === 'Behind' || row.${key} === 'Needs Review' ? 'bg-amber-900/20 text-amber-400 border-amber-900/50' :
                    row.${key} === 'Optimal' || row.${key} === 'On Track' || row.${key} === 'Low' || row.${key} === 'Verified' || row.${key} === 'Active' || row.${key} === 'High' ? 'bg-emerald-900/20 text-emerald-400 border-emerald-900/50' :
                    'bg-slate-800 text-slate-300 border-slate-700'
                  }\`}>
                    {row.${key}}
                  </span>
                </td>`;
                  }
                  if (h === 'Evidence' || h === 'Trace' || h === 'Execution ID') {
                    return `
                <td className="py-4 px-5">
                  <EvidenceBadge evidenceId={row.${key}} timestamp="Verified" />
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
  'kpis': {
    title: 'Enterprise KPI Registry',
    description: 'The constitutional registry for enterprise performance indicators with clear ownership and strategic alignment.',
    icon: 'Target',
    kpis: [
      { label: 'Governed KPIs', value: '412', desc: 'Across 14 departments', icon: 'Database', color: 'text-indigo-500', descColor: 'text-indigo-400' },
      { label: 'KPI Health', value: '84%', desc: 'Meeting or beating targets', icon: 'TrendingUp', color: 'text-emerald-500' },
      { label: 'Orphaned Metrics', value: '0', desc: 'Strict ownership enforced', icon: 'ShieldCheck', color: 'text-blue-500' },
      { label: 'Off Track', value: '14', desc: 'Require executive review', icon: 'AlertTriangle', color: 'text-rose-500' },
    ],
    headers: ['KPI Name', 'Business Owner', 'Current Value', 'Target Value', 'Status', 'Trace'],
    data: [
      { name: 'Net Revenue Retention', own: 'VP Customer Success', val: '114%', tar: '110%', status: 'Optimal', trace: 'KPI-EV-101' },
      { name: 'Infrastructure Cost / User', own: 'VP Engineering', val: '$0.42', tar: '< $0.50', status: 'Optimal', trace: 'KPI-EV-102' },
      { name: 'Enterprise Sales Cycle', own: 'VP Sales', val: '94 Days', tar: '60 Days', status: 'Critical', trace: 'KPI-EV-103' },
    ]
  },
  'objectives': {
    title: 'Strategic Objectives & OKR Center',
    description: 'Connects enterprise strategy with operational execution to ensure organizational alignment.',
    icon: 'Crosshair',
    kpis: [
      { label: 'Active Objectives', value: '14', desc: 'Corporate Tier 1', icon: 'Target', color: 'text-indigo-500', descColor: 'text-indigo-400' },
      { label: 'Overall Progress', value: '64%', desc: 'Q3 Completion', icon: 'PieChart', color: 'text-blue-500' },
      { label: 'Aligned Initiatives', value: '142', desc: 'Across business units', icon: 'Network', color: 'text-emerald-500' },
      { label: 'At Risk OKRs', value: '2', desc: 'Pending intervention', icon: 'AlertTriangle', color: 'text-rose-500' },
    ],
    headers: ['Strategic Objective', 'Executive Sponsor', 'Progress', 'Confidence', 'Status', 'Execution ID'],
    data: [
      { obj: 'Expand into EMEA Markets', spon: 'Chief Revenue Officer', prog: '42%', conf: 'High', status: 'On Track', trace: 'OKR-EV-201' },
      { obj: 'Zero-Trust Architecture', spon: 'Chief Information Security Officer', prog: '84%', conf: 'High', status: 'On Track', trace: 'OKR-EV-202' },
      { obj: 'Reduce Cloud Spend by 15%', spon: 'Chief Financial Officer', prog: '4%', conf: 'Low', status: 'Off Track', trace: 'OKR-EV-203' },
    ]
  },
  'scorecards': {
    title: 'Executive Scorecard Center',
    description: 'Unified executive scorecards for every organizational level, providing a single source of truth.',
    icon: 'LayoutTemplate',
    kpis: [
      { label: 'Executive Scorecards', value: '42', desc: 'Director & Above', icon: 'Users', color: 'text-indigo-500', descColor: 'text-indigo-400' },
      { label: 'Data Freshness', value: 'Real-time', desc: 'Constitutional sync', icon: 'Timer', color: 'text-emerald-500' },
      { label: 'Metric Alignment', value: '100%', desc: 'Cross-functional parity', icon: 'CheckCircle2', color: 'text-blue-500' },
      { label: 'Unread Briefings', value: '0', desc: 'Executive engagement', icon: 'Eye', color: 'text-emerald-500' },
    ],
    headers: ['Scorecard View', 'Primary Stakeholder', 'Core Metric 1', 'Core Metric 2', 'State', 'Trace'],
    data: [
      { card: 'CEO Global Overview', stake: 'Chief Executive Officer', m1: 'ARR: $412M', m2: 'EBITDA: 24%', state: 'Optimal', trace: 'ESC-EV-301' },
      { card: 'CISO Risk Profile', stake: 'Chief Info Security Officer', m1: 'Open Crit Vulns: 0', m2: 'Compliance Score: A+', state: 'Optimal', trace: 'ESC-EV-302' },
      { card: 'Engineering Velocity', stake: 'VP Engineering', m1: 'DORA: Elite', m2: 'MTTR: 14m', state: 'Optimal', trace: 'ESC-EV-303' },
    ]
  },
  'forecasting': {
    title: 'Forecasting & Trend Intelligence',
    description: 'Transforms historical performance into predictive insight for proactive executive decision making.',
    icon: 'TrendingUp',
    kpis: [
      { label: 'Forecast Accuracy', value: '94%', desc: 'Rolling 12 months', icon: 'Target', color: 'text-indigo-500', descColor: 'text-indigo-400' },
      { label: 'Active Models', value: '14', desc: 'AI-driven predictions', icon: 'BrainCircuit', color: 'text-blue-500' },
      { label: 'Revenue Variance', value: '< 2%', desc: 'Actual vs Forecast', icon: 'BarChart2', color: 'text-emerald-500' },
      { label: 'Risk Flags', value: '3', desc: 'Predicted anomalies', icon: 'AlertTriangle', color: 'text-rose-500' },
    ],
    headers: ['Prediction Model', 'Target Metric', 'Current Value', '90-Day Forecast', 'Confidence', 'Execution ID'],
    data: [
      { mod: 'Q4 Revenue Trajectory', targ: 'Net New ARR', cur: '$14.2M', next: '$18.4M (Expected)', conf: 'High', trace: 'FTI-EV-401' },
      { mod: 'Customer Churn Predictor', targ: 'Logo Churn Rate', cur: '2.1%', next: '2.4% (Risk Warning)', conf: 'Medium', trace: 'FTI-EV-402' },
      { mod: 'Infrastructure Capacity', targ: 'Compute Spend', cur: '$412K/mo', next: '$540K/mo', conf: 'High', trace: 'FTI-EV-403' },
    ]
  },
  'balanced-scorecard': {
    title: 'Balanced Scorecard Governance',
    description: 'Measures organizational performance across Financial, Customer, Process, and Growth dimensions.',
    icon: 'Compass',
    kpis: [
      { label: 'Enterprise Balance', value: '92/100', desc: 'Holistic performance', icon: 'Scale', color: 'text-indigo-500', descColor: 'text-indigo-400' },
      { label: 'Financial Health', value: '96/100', desc: 'Revenue & efficiency', icon: 'PieChart', color: 'text-emerald-500' },
      { label: 'Customer Trust', value: '94/100', desc: 'NPS & Retention', icon: 'HeartHandshake', color: 'text-blue-500' },
      { label: 'Internal Process', value: '88/100', desc: 'Operational drag', icon: 'Activity', color: 'text-yellow-500' },
    ],
    headers: ['Scorecard Perspective', 'Key Indicator', 'Current Measurement', 'Strategic Target', 'Status', 'Trace'],
    data: [
      { per: 'Financial', ind: 'Gross Margin', cur: '78.4%', tar: '80.0%', status: 'Warning', trace: 'BSC-EV-501' },
      { per: 'Customer', ind: 'Net Promoter Score', cur: '64', tar: '60', status: 'Optimal', trace: 'BSC-EV-502' },
      { per: 'Internal Process', ind: 'Deployment Frequency', cur: '14/day', tar: '10/day', status: 'Optimal', trace: 'BSC-EV-503' },
    ]
  },
  'decisions': {
    title: 'Executive Decision Center',
    description: 'Provides decision-ready executive briefings with supporting evidence, financial impact, and risk analysis.',
    icon: 'Lightbulb',
    kpis: [
      { label: 'Pending Decisions', value: '4', desc: 'Executive approvals', icon: 'Inbox', color: 'text-indigo-500', descColor: 'text-indigo-400' },
      { label: 'Decision Velocity', value: '1.2 Days', desc: 'Time to approve', icon: 'Timer', color: 'text-emerald-500' },
      { label: 'Evidence Coverage', value: '100%', desc: 'Data-backed briefs', icon: 'ShieldCheck', color: 'text-blue-500' },
      { label: 'Strategic Alignment', value: '98%', desc: 'Matches OKRs', icon: 'Target', color: 'text-emerald-500' },
    ],
    headers: ['Strategic Decision', 'Requested By', 'Financial Impact', 'Risk Level', 'Status', 'Execution ID'],
    data: [
      { dec: 'Acquire Competitor (Project Alpha)', req: 'Corp Dev', imp: '$42M Allocation', risk: 'High', status: 'Warning', trace: 'EDC-EV-601' },
      { dec: 'Open Tokyo Data Center', req: 'VP Infrastructure', imp: '$4.2M CAPEX', risk: 'Medium', status: 'Optimal', trace: 'EDC-EV-602' },
      { dec: 'Hiring Freeze (Q4)', req: 'CFO', imp: '$2.1M Savings', risk: 'Low', status: 'Critical', trace: 'EDC-EV-603' },
    ]
  },
  'analytics': {
    title: 'Business Intelligence Analytics',
    description: 'Measures enterprise performance improvement, decision velocity, and strategic outcome achievement.',
    icon: 'BarChart3',
    kpis: [
      { label: 'Intelligence ROI', value: '$14.2M', desc: 'Value of data decisions', icon: 'Award', color: 'text-indigo-500', descColor: 'text-indigo-400' },
      { label: 'Dashboard Usage', value: '412K', desc: 'Monthly executive views', icon: 'Eye', color: 'text-blue-500' },
      { label: 'Data Latency', value: '< 2s', desc: 'Warehouse to UI', icon: 'Zap', color: 'text-emerald-500' },
      { label: 'Automated Briefs', value: '84%', desc: 'Zero manual reporting', icon: 'Bot', color: 'text-emerald-500' },
    ],
    headers: ['BI Capability', 'Adoption Rate', 'Decision Impact', 'Time Saved', 'State', 'Trace'],
    data: [
      { cap: 'Executive Scorecards', adopt: '100% (C-Suite)', imp: 'High', time: '14 hours/week', state: 'Optimal', trace: 'BIA-EV-701' },
      { cap: 'Predictive Forecasting', adopt: '84% (VP Level)', imp: 'High', time: '22 hours/week', state: 'Optimal', trace: 'BIA-EV-702' },
      { cap: 'Automated Board Reports', adopt: '100%', imp: 'Critical', time: '40 hours/month', state: 'Optimal', trace: 'BIA-EV-703' },
    ]
  },
  'governance': {
    title: 'BI Governance Board',
    description: 'Constitutional governance ensuring executive reporting remains trusted, standardized, and evidence-based.',
    icon: 'Scale',
    kpis: [
      { label: 'Certified Reports', value: '142', desc: 'Board approved', icon: 'FileSignature', color: 'text-indigo-500', descColor: 'text-indigo-400' },
      { label: 'Shadow IT BI', value: '0', desc: 'Unsanctioned dashboards', icon: 'ShieldCheck', color: 'text-emerald-500' },
      { label: 'Definition Conflicts', value: '0', desc: 'Unified terminology', icon: 'BookOpen', color: 'text-blue-500' },
      { label: 'Governance Adherence', value: '100%', desc: 'Strict compliance', icon: 'CheckCircle2', color: 'text-emerald-500' },
    ],
    headers: ['Governance Policy', 'Target Domain', 'Enforcement Logic', 'Violations Blocked', 'Governance', 'Execution ID'],
    data: [
      { pol: 'No unofficial Revenue metrics', dom: 'Finance / Sales', enf: 'Must use Master Data', block: '14', gov: 'Verified', trace: 'BGB-EV-801' },
      { pol: 'Board Reports require C-Level signoff', dom: 'Executive Comms', enf: 'Approval Workflow', block: '2', gov: 'Verified', trace: 'BGB-EV-802' },
      { pol: 'Forecasts must publish confidence %', dom: 'Data Science', enf: 'Metadata requirement', block: '42', gov: 'Verified', trace: 'BGB-EV-803' },
    ]
  },
  'reports': {
    title: 'Executive Reporting Studio',
    description: 'Centralized governance for generating automated, constitutional Board Reports and QBRs.',
    icon: 'FileText',
    kpis: [
      { label: 'Automated Reports', value: '412', desc: 'Generated monthly', icon: 'Bot', color: 'text-indigo-500', descColor: 'text-indigo-400' },
      { label: 'Manual Effort', value: '0 hrs', desc: 'Zero spreadsheet copy-paste', icon: 'Timer', color: 'text-emerald-500' },
      { label: 'Data Accuracy', value: '100%', desc: 'Direct from fabric', icon: 'Target', color: 'text-blue-500' },
      { label: 'Distribution', value: 'Governed', desc: 'Strict access controls', icon: 'Lock', color: 'text-emerald-500' },
    ],
    headers: ['Report Portfolio', 'Frequency', 'Primary Audience', 'Data Certification', 'Status', 'Trace'],
    data: [
      { rep: 'Q3 Board of Directors Brief', freq: 'Quarterly', aud: 'Board Members', cert: 'Tier 0 (Audited)', status: 'Optimal', trace: 'ERS-EV-901' },
      { rep: 'Weekly Revenue Flash', freq: 'Weekly', aud: 'C-Suite', cert: 'Tier 1', status: 'Optimal', trace: 'ERS-EV-902' },
      { rep: 'Engineering DORA Metrics', freq: 'Monthly', aud: 'VP Engineering', cert: 'Tier 2', status: 'Optimal', trace: 'ERS-EV-903' },
    ]
  },
  'evidence': {
    title: 'Business Intelligence Evidence Ledger',
    description: 'Immutable ledger recording every KPI change, strategic objective update, and executive decision.',
    icon: 'History',
    kpis: [
      { label: 'BI Events Logged', value: '1.4M', desc: 'Cryptographic records', icon: 'Database', color: 'text-indigo-500', descColor: 'text-indigo-400' },
      { label: 'Ledger Integrity', value: 'Verified', desc: 'SHA-256 Validated', icon: 'ShieldCheck', color: 'text-emerald-500' },
      { label: 'Audit Pull Latency', value: '0.8s', desc: 'Instant compliance', icon: 'Download', color: 'text-blue-500' },
      { label: 'Exec Attestations', value: '4,102', desc: 'Cryptographically signed', icon: 'FileSignature', color: 'text-emerald-500' },
    ],
    headers: ['Event ID', 'Timestamp', 'Executive Actor', 'Intelligence Action', 'Constitutional Governance', 'EvidenceBadge'],
    data: [
      { id: 'BI-E-8801', time: '2026-07-22T10:25:00Z', act: 'CEO (Approved)', acti: 'Authorized Q4 Hiring Freeze', gov: 'Policy: Strategic Financial Decisions', trace: 'EV-BI-8801' },
      { id: 'BI-E-8802', time: '2026-07-22T10:24:42Z', act: 'System Generator', acti: 'Published Weekly Revenue Flash', gov: 'Policy: Automated Reporting', trace: 'EV-BI-8802' },
      { id: 'BI-E-8803', time: '2026-07-22T10:21:10Z', act: 'VP Sales (Updated)', acti: 'Changed KPI Target: EMEA Growth to 15%', gov: 'Policy: Target Governance', trace: 'EV-BI-8803' },
    ]
  }
};

const pageTemplate = `import React from "react";
import Link from "next/link";
import { ArrowRight, Presentation, Target, Crosshair, LayoutTemplate, TrendingUp, Compass, Lightbulb, BarChart3, Scale, FileText, History } from "lucide-react";

export default function BusinessIntelligenceHub() {
  const modules = [
    { name: "KPI Registry", path: "/business-intelligence/kpis", icon: Target, color: "text-indigo-400", bg: "bg-indigo-500/10", border: "border-indigo-500/20" },
    { name: "Strategic Objectives", path: "/business-intelligence/objectives", icon: Crosshair, color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20" },
    { name: "Executive Scorecards", path: "/business-intelligence/scorecards", icon: LayoutTemplate, color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
    { name: "Forecasting Insights", path: "/business-intelligence/forecasting", icon: TrendingUp, color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
    { name: "Balanced Scorecard", path: "/business-intelligence/balanced-scorecard", icon: Compass, color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20" },
    { name: "Decision Center", path: "/business-intelligence/decisions", icon: Lightbulb, color: "text-yellow-400", bg: "bg-yellow-500/10", border: "border-yellow-500/20" },
    { name: "BI Analytics", path: "/business-intelligence/analytics", icon: BarChart3, color: "text-rose-400", bg: "bg-rose-500/10", border: "border-rose-500/20" },
    { name: "Governance Board", path: "/business-intelligence/governance", icon: Scale, color: "text-fuchsia-400", bg: "bg-fuchsia-500/10", border: "border-fuchsia-500/20" },
    { name: "Reporting Studio", path: "/business-intelligence/reports", icon: FileText, color: "text-orange-400", bg: "bg-orange-500/10", border: "border-orange-500/20" },
    { name: "Evidence Ledger", path: "/business-intelligence/evidence", icon: History, color: "text-slate-400", bg: "bg-slate-500/10", border: "border-slate-500/20" },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2 flex items-center gap-3">
              <Presentation className="w-8 h-8 text-indigo-400" />
              Enterprise Business Intelligence (REBIKEDP)
            </h1>
            <p className="text-slate-400">The constitutional executive decision platform connecting strategy, KPIs, and forecasting with operational execution.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="px-4 py-2 bg-indigo-950/30 border border-indigo-900/50 rounded-md">
               <span className="text-xs text-indigo-400 font-bold uppercase tracking-wider block mb-1">Strategic Health</span>
               <div className="text-xl font-black text-indigo-300">Optimal (94%)</div>
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
              <div className="text-xs text-slate-500 flex-1">Configure executive reporting.</div>
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

const basePath = path.join(__dirname, 'src', 'app', 'business-intelligence');
fs.mkdirSync(basePath, { recursive: true });
fs.writeFileSync(path.join(basePath, 'page.tsx'), pageTemplate);

for (const [route, config] of Object.entries(routes)) {
  const routePath = path.join(basePath, route);
  fs.mkdirSync(routePath, { recursive: true });
  fs.writeFileSync(path.join(routePath, 'page.tsx'), generatePage(config.title, config.description, config.icon, config.kpis, config.headers, config.data));
  console.log('Generated route:', route);
}
