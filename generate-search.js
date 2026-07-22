const fs = require('fs');
const path = require('path');

const generatePage = (title, description, iconName, kpis, headers, tableData, additionalUI) => {
  const allIcons = ['ArrowLeft', 'Search', 'ShieldCheck', 'Activity', 'Target', 'Download', 'Settings', 'History', 'BrainCircuit', 'Layers', 'Eye', 'Smile', 'Move', 'Languages', 'Accessibility', 'Briefcase', 'Lock', 'LineChart', 'CheckCircle2', 'AlertTriangle', 'XCircle', 'ArrowRight', 'Image', 'Keyboard', 'Timer', 'TrendingUp', 'TrendingDown', 'BookOpen', 'MousePointerClick', 'Database', 'Users', 'FileCode', 'GraduationCap', 'Map', 'ClipboardList', 'Sparkles', 'HeartHandshake', 'Network', 'Award', 'BarChart2', 'FileSignature', 'Lightbulb', 'Compass', 'MessageSquare', 'FolderHeart', 'Tags', 'Fingerprint'];
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
              <Link href="/search" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to RSKIOS Command Center
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
                <input type="text" placeholder="Search Knowledge Context..." className="bg-slate-900 border border-slate-700 rounded-md pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-cyan-500 w-64 transition-colors" />
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
            title="Search & Discovery Metrics" 
            headers={[${headers.map(h => `"${h}"`).join(', ')}]}
          >
            {${JSON.stringify(tableData)}.map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group cursor-pointer border-b border-slate-800/50">
                ${headers.map((h, j) => {
                  const key = Object.keys(tableData[0])[j];
                  if (h === 'Status' || h === 'Confidence' || h === 'Governance') {
                    return `
                <td className="py-4 px-5">
                  <span className={\`px-2 py-1 rounded text-xs font-bold border flex items-center gap-1 w-max \${
                    row.${key} === 'High Risk' || row.${key} === 'Low' || row.${key} === 'Restricted' ? 'bg-rose-900/20 text-rose-400 border-rose-900/50' : 
                    row.${key} === 'Medium Risk' || row.${key} === 'Medium' || row.${key} === 'Review Required' ? 'bg-amber-900/20 text-amber-400 border-amber-900/50' :
                    row.${key} === 'Verified' || row.${key} === 'High' || row.${key} === 'Approved' ? 'bg-emerald-900/20 text-emerald-400 border-emerald-900/50' :
                    'bg-slate-800 text-slate-300 border-slate-700'
                  }\`}>
                    {row.${key}}
                  </span>
                </td>`;
                  }
                  if (h === 'Evidence' || h === 'Trace' || h === 'Execution ID') {
                    return `
                <td className="py-4 px-5">
                  <EvidenceBadge evidenceId={row.${key}} timestamp="Verified Result" />
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
  'knowledge': {
    title: 'Enterprise Knowledge Graph',
    description: 'Visual exploration of dependencies connecting applications, policies, and personnel.',
    icon: 'Network',
    kpis: [
      { label: 'Indexed Nodes', value: '4.2M', desc: 'Enterprise wide assets', icon: 'Database', color: 'text-cyan-500', descColor: 'text-cyan-400' },
      { label: 'Active Edges', value: '18.4M', desc: 'Resolved relationships', icon: 'LinkIcon', color: 'text-emerald-500' },
      { label: 'Graph Coverage', value: '98%', desc: 'Organization footprint', icon: 'Target', color: 'text-blue-500' },
      { label: 'Orphaned Assets', value: '1.2K', desc: 'Requires contextual mapping', icon: 'AlertTriangle', color: 'text-amber-500' },
    ],
    headers: ['Asset Type', 'Graph Node ID', 'Connections', 'Primary Owner', 'Governance', 'Trace'],
    data: [
      { type: 'Microservice (Billing)', id: 'NODE-APP-902', conn: '42 dependencies', owner: 'Finance Tech', gov: 'Verified', trace: 'EKG-EV-101' },
      { type: 'Compliance Policy', id: 'NODE-POL-114', conn: '18 applications', owner: 'Legal Board', gov: 'Approved', trace: 'EKG-EV-102' },
      { type: 'User (VP Sales)', id: 'NODE-USR-492', conn: '112 access grants', owner: 'Identity Mgmt', gov: 'Verified', trace: 'EKG-EV-103' },
    ]
  },
  'natural': {
    title: 'Natural Language Search',
    description: 'Intent-based discovery eliminating the need for exact keyword matching.',
    icon: 'MessageSquare',
    kpis: [
      { label: 'Intent Accuracy', value: '96%', desc: 'Successful interpretations', icon: 'CheckCircle2', color: 'text-cyan-500', descColor: 'text-cyan-400' },
      { label: 'Daily Queries', value: '42.1K', desc: 'Across 14 departments', icon: 'Activity', color: 'text-emerald-500' },
      { label: 'Avg Latency', value: '24ms', desc: 'Inference speed', icon: 'Zap', color: 'text-blue-500' },
      { label: 'Failed Matches', value: '1.4%', desc: 'Fallback to keywords', icon: 'TrendingDown', color: 'text-rose-500' },
    ],
    headers: ['Natural Query', 'Interpreted Intent', 'Top Result Category', 'Context Match', 'Confidence', 'Evidence'],
    data: [
      { q: 'Show apps with incidents', int: 'Filter: Application, Status: Incident', cat: 'Infrastructure', match: '98%', conf: 'High', trace: 'NLS-EV-201' },
      { q: 'Who owns CRM?', int: 'Entity: CRM, Field: Owner', cat: 'Directory', match: '100%', conf: 'High', trace: 'NLS-EV-202' },
      { q: 'Unapproved invoices', int: 'Filter: Finance, Status: Pending Approval', cat: 'Finance', match: '92%', conf: 'Medium', trace: 'NLS-EV-203' },
    ]
  },
  'actions': {
    title: 'Universal Command Search',
    description: 'Transforming search from discovery to immediate action execution.',
    icon: 'MousePointerClick',
    kpis: [
      { label: 'Actionable Results', value: '8.4K', desc: 'Direct UI triggers', icon: 'Target', color: 'text-cyan-500', descColor: 'text-cyan-400' },
      { label: 'Execution Speed', value: '+45%', desc: 'Faster than navigation', icon: 'TrendingUp', color: 'text-emerald-500' },
      { label: 'Popular Actions', value: '14', desc: 'Represent 80% of volume', icon: 'BarChart2', color: 'text-blue-500' },
      { label: 'Denied Actions', value: '124', desc: 'Blocked by RBAC', icon: 'ShieldCheck', color: 'text-rose-500' },
    ],
    headers: ['Search Query', 'Executed Action', 'Target Module', 'RBAC Status', 'Confidence', 'Evidence'],
    data: [
      { q: 'Audit logs', act: 'Navigate: /engineering/audit', mod: 'ECARGQAP', rbac: 'Permitted', conf: 'High', trace: 'UCS-EV-301' },
      { q: 'Approve expense req', act: 'Trigger: Finance Approval Flow', mod: 'Operations', rbac: 'Permitted', conf: 'High', trace: 'UCS-EV-302' },
      { q: 'Drop staging DB', act: 'Trigger: Infrastructure Destruct', mod: 'DevOps', rbac: 'Denied (RBAC)', conf: 'High Risk', trace: 'UCS-EV-303' },
    ]
  },
  'explorer': {
    title: 'Enterprise Knowledge Explorer',
    description: 'Faceted exploration for discovering knowledge without a specific starting query.',
    icon: 'Compass',
    kpis: [
      { label: 'Exploration Paths', value: '412', desc: 'Faceted dimensions', icon: 'Layers', color: 'text-cyan-500', descColor: 'text-cyan-400' },
      { label: 'Active Explorers', value: '1.4K', desc: 'Users discovering assets', icon: 'Users', color: 'text-emerald-500' },
      { label: 'Discovery Rate', value: '68%', desc: 'Found without searching', icon: 'Lightbulb', color: 'text-amber-500' },
      { label: 'Most Explored', value: 'Security', desc: 'Top knowledge facet', icon: 'ShieldCheck', color: 'text-blue-500' },
    ],
    headers: ['Explored Facet', 'Sub-Categories', 'Available Assets', 'Last Updated', 'Governance', 'Execution ID'],
    data: [
      { facet: 'Business Capabilities', sub: 'Finance, HR, Engineering', assets: '14,291', upd: '2 mins ago', gov: 'Verified', trace: 'EKE-EV-401' },
      { facet: 'Technology Stack', sub: 'Databases, APIs, UI', assets: '8,402', upd: '1 hour ago', gov: 'Verified', trace: 'EKE-EV-402' },
      { facet: 'Risk Register', sub: 'Security, Compliance, Financial', assets: '342', upd: '1 day ago', gov: 'Review Required', trace: 'EKE-EV-403' },
    ]
  },
  'context': {
    title: 'Smart Filters & Context Engine',
    description: 'Dynamic query adaptation based on user role, environment, and current workspace.',
    icon: 'Tags',
    kpis: [
      { label: 'Contextual Filters', value: '94', desc: 'Active environment flags', icon: 'Settings', color: 'text-cyan-500', descColor: 'text-cyan-400' },
      { label: 'Filter Accuracy', value: '99.8%', desc: 'Context match rate', icon: 'Target', color: 'text-emerald-500' },
      { label: 'Noised Reduced', value: '-64%', desc: 'Irrelevant results hidden', icon: 'TrendingDown', color: 'text-blue-500' },
      { label: 'RBAC Enforcement', value: 'Strict', desc: 'Zero data leakage', icon: 'Lock', color: 'text-rose-500' },
    ],
    headers: ['User Context', 'Applied Filters', 'Query Modification', 'Information Hidden', 'Status', 'Trace'],
    data: [
      { ctx: 'Developer (Staging)', fil: 'Env: Staging, Role: Eng', mod: 'Scoped to staging cluster', hid: 'Prod databases', status: 'Verified', trace: 'CTX-EV-501' },
      { ctx: 'HR Manager', fil: 'Dept: HR, Clearance: L2', mod: 'Prioritized employee records', hid: 'Technical architecture', status: 'Verified', trace: 'CTX-EV-502' },
      { ctx: 'Security Auditor', fil: 'Clearance: Global (Read)', mod: 'Bypassed department silos', hid: 'None', status: 'Verified', trace: 'CTX-EV-503' },
    ]
  },
  'recommendations': {
    title: 'Recommendation & Similarity Engine',
    description: 'Proactively suggesting related enterprise knowledge based on structural similarity.',
    icon: 'Sparkles',
    kpis: [
      { label: 'Acceptance Rate', value: '42%', desc: 'Users clicking suggestions', icon: 'CheckCircle2', color: 'text-cyan-500', descColor: 'text-cyan-400' },
      { label: 'Generated Daily', value: '1.2M', desc: 'Similarity vectors computed', icon: 'Cpu', color: 'text-emerald-500' },
      { label: 'Avg Relevance', value: '0.84', desc: 'Cosine similarity score', icon: 'BarChart2', color: 'text-blue-500' },
      { label: 'Knowledge Silos', value: '-14%', desc: 'Cross-dept discoveries', icon: 'Network', color: 'text-amber-500' },
    ],
    headers: ['Source Asset', 'Recommended Asset', 'Similarity Vector', 'Business Value', 'Confidence', 'Evidence'],
    data: [
      { src: 'Incident #8012 (DB Lock)', rec: 'Incident #7044 (DB Lock)', vec: 'Root Cause Match', val: 'Faster Resolution', conf: 'High', trace: 'RSE-EV-601' },
      { src: 'Data Retention Policy v2', rec: 'GDPR Compliance Check', vec: 'Regulatory Tagging', val: 'Audit Prevention', conf: 'High', trace: 'RSE-EV-602' },
      { src: 'React Component: Table', rec: 'Design System: Grid', vec: 'UI Architecture', val: 'Code Reuse', conf: 'Medium', trace: 'RSE-EV-603' },
    ]
  },
  'collections': {
    title: 'Saved Searches & Workspace Collections',
    description: 'Organizing complex search logic into reusable knowledge repositories.',
    icon: 'FolderHeart',
    kpis: [
      { label: 'Active Collections', value: '8.4K', desc: 'Team & Personal spaces', icon: 'FolderHeart', color: 'text-cyan-500', descColor: 'text-cyan-400' },
      { label: 'Time Saved', value: '1.2M', desc: 'Hours recovered annually', icon: 'Timer', color: 'text-emerald-500' },
      { label: 'Most Shared', value: '142', desc: 'Collections distributed', icon: 'Share2', color: 'text-blue-500' },
      { label: 'Stale Collections', value: '4.2%', desc: 'Unused &gt; 90 days', icon: 'History', color: 'text-amber-500' },
    ],
    headers: ['Collection Name', 'Owner', 'Contained Queries', 'Access Level', 'Governance', 'Execution ID'],
    data: [
      { name: 'SOC2 Compliance Audit', owner: 'Security Team', q: '14 saved queries', access: 'Restricted (Team)', gov: 'Approved', trace: 'COL-EV-701' },
      { name: 'Q3 Product Launch', owner: 'Marketing', q: '8 saved queries', access: 'Public (Internal)', gov: 'Verified', trace: 'COL-EV-702' },
      { name: 'P1 Incident Analysis', owner: 'SRE', q: '24 saved queries', access: 'Global (Read)', gov: 'Verified', trace: 'COL-EV-703' },
    ]
  },
  'analytics': {
    title: 'Enterprise Search Analytics',
    description: 'Executive reporting on organizational knowledge accessibility and discovery efficiency.',
    icon: 'BarChart2',
    kpis: [
      { label: 'Discovery Index', value: '94.2', desc: 'Enterprise search health', icon: 'Activity', color: 'text-cyan-500', descColor: 'text-cyan-400' },
      { label: 'Zero-Result Rate', value: '0.8%', desc: 'Queries without hits', icon: 'TrendingDown', color: 'text-emerald-500' },
      { label: 'Avg TTR', value: '4.2s', desc: 'Time to result click', icon: 'Timer', color: 'text-blue-500' },
      { label: 'Top Query', value: '"Policies"', desc: 'Most requested term', icon: 'Search', color: 'text-indigo-500' },
    ],
    headers: ['Search Metric', 'Current Value', 'MoM Trend', 'Primary Driver', 'Status', 'Evidence'],
    data: [
      { met: 'Natural Language Adoption', val: '64%', trend: '+12%', driver: 'Command Palette UI', status: 'Verified', trace: 'ESA-EV-801' },
      { met: 'Search Speed (P99)', val: '124ms', trend: '-8ms', driver: 'Index Optimization', status: 'Verified', trace: 'ESA-EV-802' },
      { met: 'Knowledge Gaps (Zero Hits)', val: '412', trend: '-4%', driver: 'Missing Documentation', status: 'Review Required', trace: 'ESA-EV-803' },
    ]
  },
  'governance': {
    title: 'Search Governance Board',
    description: 'Constitutional oversight managing search indices, exemptions, and sensitive knowledge visibility.',
    icon: 'ShieldCheck',
    kpis: [
      { label: 'Policy Adherence', value: '100%', desc: 'Zero data leakage', icon: 'Lock', color: 'text-cyan-500', descColor: 'text-cyan-400' },
      { label: 'Active Policies', value: '42', desc: 'Search restriction rules', icon: 'FileCode', color: 'text-blue-500' },
      { label: 'Pending Exemptions', value: '2', desc: 'Awaiting board approval', icon: 'ClipboardList', color: 'text-amber-500' },
      { label: 'Index Audits', value: 'Passed', desc: 'Daily cryptographic check', icon: 'CheckCircle2', color: 'text-emerald-500' },
    ],
    headers: ['Governance Policy', 'Target Asset Class', 'Restriction Type', 'Authorizer', 'Status', 'Trace'],
    data: [
      { pol: 'Executive Salary Masking', target: 'HR Records', rest: 'Exclude from Index', auth: 'VP HR', status: 'Approved', trace: 'SGB-EV-901' },
      { pol: 'M&A Project Sandbox', target: 'Project "Titan"', rest: 'Strict RBAC Whitelist', auth: 'Legal Board', status: 'Approved', trace: 'SGB-EV-902' },
      { pol: 'Log PII Sanitization', target: 'App Logs', rest: 'Regex Redaction', auth: 'Security Team', status: 'Review Required', trace: 'SGB-EV-903' },
    ]
  },
  'evidence': {
    title: 'Search Evidence Ledger',
    description: 'Immutable cryptographic trails for all significant discovery and search governance operations.',
    icon: 'History',
    kpis: [
      { label: 'Search Traces', value: '14.2M', desc: 'Cryptographic records', icon: 'Database', color: 'text-cyan-500', descColor: 'text-cyan-400' },
      { label: 'RBAC Validations', value: '42.8M', desc: 'Permissions verified', icon: 'ShieldCheck', color: 'text-emerald-500' },
      { label: 'Ledger Integrity', value: 'Verified', desc: 'Hash chain valid', icon: 'CheckCircle2', color: 'text-blue-500' },
      { label: 'Anomaly Detects', value: '0', desc: 'Suspicious search behavior', icon: 'AlertTriangle', color: 'text-indigo-500' },
    ],
    headers: ['Event ID', 'Timestamp', 'Actor / User', 'Discovery Action', 'Constitutional Governance', 'EvidenceBadge'],
    data: [
      { id: 'SRC-E-8044', time: '2026-07-22T08:14:00Z', actor: 'Sarah Jenkins', act: 'Saved Collection: SOC2', gov: 'Policy: Collab-Auth', trace: 'EV-S-8044' },
      { id: 'SRC-E-8043', time: '2026-07-22T08:12:15Z', actor: 'Automated Agent', act: 'Re-indexed HR Policies', gov: 'Policy: Mask-PII', trace: 'EV-S-8043' },
      { id: 'SRC-E-8042', time: '2026-07-22T08:05:00Z', actor: 'Marcus Chen', act: 'Searched "Staging DB Password"', gov: 'Blocked (RBAC/Policy)', trace: 'EV-S-8042' },
    ]
  }
};

const pageTemplate = `import React from "react";
import Link from "next/link";
import { ArrowRight, Search, Network, MessageSquare, MousePointerClick, Compass, Tags, Sparkles, FolderHeart, BarChart2, ShieldCheck, History } from "lucide-react";

export default function SearchCommandCenter() {
  const modules = [
    { name: "Knowledge Graph", path: "/search/knowledge", icon: Network, color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20" },
    { name: "Natural Language", path: "/search/natural", icon: MessageSquare, color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
    { name: "Universal Actions", path: "/search/actions", icon: MousePointerClick, color: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/20" },
    { name: "Knowledge Explorer", path: "/search/explorer", icon: Compass, color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20" },
    { name: "Context Filters", path: "/search/context", icon: Tags, color: "text-rose-400", bg: "bg-rose-500/10", border: "border-rose-500/20" },
    { name: "Recommendation Engine", path: "/search/recommendations", icon: Sparkles, color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
    { name: "Saved Collections", path: "/search/collections", icon: FolderHeart, color: "text-yellow-500", bg: "bg-yellow-500/10", border: "border-yellow-500/20" },
    { name: "Search Analytics", path: "/search/analytics", icon: BarChart2, color: "text-indigo-400", bg: "bg-indigo-500/10", border: "border-indigo-500/20" },
    { name: "Search Governance", path: "/search/governance", icon: ShieldCheck, color: "text-blue-500", bg: "bg-blue-500/10", border: "border-blue-500/20" },
    { name: "Search Evidence", path: "/search/evidence", icon: History, color: "text-slate-400", bg: "bg-slate-500/10", border: "border-slate-500/20" },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2 flex items-center gap-3">
              <Search className="w-8 h-8 text-cyan-500" />
              Universal Search & Knowledge OS (RSKIOS)
            </h1>
            <p className="text-slate-400">Executive dashboard governing enterprise knowledge discovery and semantic search.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="px-4 py-2 bg-cyan-950/30 border border-cyan-900/50 rounded-md">
               <span className="text-xs text-cyan-500 font-bold uppercase tracking-wider block mb-1">Discovery Index</span>
               <div className="text-xl font-black text-cyan-400">94.2/100</div>
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
              <div className="text-xs text-slate-500 flex-1">Govern search mechanics and knowledge graphs.</div>
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

const basePath = path.join(__dirname, 'src', 'app', 'search');
fs.mkdirSync(basePath, { recursive: true });
fs.writeFileSync(path.join(basePath, 'page.tsx'), pageTemplate);

for (const [route, config] of Object.entries(routes)) {
  const routePath = path.join(basePath, route);
  fs.mkdirSync(routePath, { recursive: true });
  fs.writeFileSync(path.join(routePath, 'page.tsx'), generatePage(config.title, config.description, config.icon, config.kpis, config.headers, config.data));
  console.log('Generated route:', route);
}
