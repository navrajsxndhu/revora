const fs = require('fs');
const path = require('path');

const generatePage = (title, description, iconName, kpis, headers, tableData, additionalUI) => {
  const allIcons = ['ArrowLeft', 'Search', 'ShieldCheck', 'Activity', 'Target', 'Download', 'Settings', 'History', 'BrainCircuit', 'Layers', 'Eye', 'Smile', 'Move', 'Languages', 'Accessibility', 'Briefcase', 'Lock', 'LineChart', 'CheckCircle2', 'AlertTriangle', 'XCircle', 'ArrowRight', 'Image', 'Keyboard', 'Timer', 'TrendingUp', 'TrendingDown', 'BookOpen', 'MousePointerClick', 'Database', 'Users', 'FileCode', 'GraduationCap', 'Map', 'ClipboardList', 'Sparkles', 'HeartHandshake', 'Network', 'Award', 'BarChart2', 'FileSignature', 'Lightbulb', 'Compass', 'MessageSquare', 'FolderHeart', 'Tags', 'Fingerprint', 'Users2', 'Video', 'Megaphone', 'Inbox', 'Calendar', 'Globe', 'Handshake', 'MessageCircle', 'Zap', 'Wind', 'Cpu', 'Mouse', 'Monitor', 'EyeOff', 'Laptop', 'Smartphone', 'Box', 'Maximize', 'Gauge', 'Unlock', 'HelpCircle', 'Terminal', 'ThumbsUp', 'LayoutDashboard', 'Star', 'Bell', 'LineChart', 'UserCircle2', 'RefreshCw', 'Tablet', 'WifiOff', 'ServerCrash', 'MapPin', 'Cast', 'Clock', 'ActivitySquare', 'CheckSquare', 'AlertOctagon', 'HeartPulse', 'Bot', 'Navigation', 'BarChart3', 'Paintbrush', 'Type', 'Wand2', 'Palette', 'Component', 'Sparkle', 'Share2', 'Waypoints', 'GitMerge', 'Radar', 'Telescope', 'Binary', 'Workflow', 'Microscope', 'MonitorPlay', 'Columns', 'Menu', 'Save', 'GitCompare', 'Layout', 'SearchCode', 'LineChart', 'UsersRound', 'Scale', 'LinkIcon', 'PenTool', 'GitPullRequest', 'UserCheck', 'Library', 'Plug', 'PlayCircle', 'ListChecks', 'BookMarked', 'TableProperties', 'Network', 'DatabaseBackup', 'FileJson', 'ShieldAlert', 'ShoppingBag', 'PieChart'];
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
              <Link href="/data-fabric" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Data Fabric Hub
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
                <input type="text" placeholder="Search Data Assets..." className="bg-slate-900 border border-slate-700 rounded-md pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-indigo-400 w-64 transition-colors" />
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
            title="Data Governance Records" 
            headers={[${headers.map(h => `"${h}"`).join(', ')}]}
          >
            {${JSON.stringify(tableData)}.map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group cursor-pointer border-b border-slate-800/50">
                ${headers.map((h, j) => {
                  const key = Object.keys(tableData[0])[j];
                  if (h === 'Status' || h === 'State' || h === 'Condition' || h === 'Priority' || h === 'Governance' || h === 'Classification') {
                    return `
                <td className="py-4 px-5">
                  <span className={\`px-2 py-1 rounded text-xs font-bold border flex items-center gap-1 w-max \${
                    row.${key} === 'Critical' || row.${key} === 'High' || row.${key} === 'Restricted' || row.${key} === 'Failed' || row.${key} === 'PII' ? 'bg-rose-900/20 text-rose-400 border-rose-900/50' : 
                    row.${key} === 'Warning' || row.${key} === 'Medium' || row.${key} === 'Confidential' || row.${key} === 'Internal' ? 'bg-amber-900/20 text-amber-400 border-amber-900/50' :
                    row.${key} === 'Optimal' || row.${key} === 'Active' || row.${key} === 'Public' || row.${key} === 'Verified' || row.${key} === 'Live' || row.${key} === 'Certified' ? 'bg-emerald-900/20 text-emerald-400 border-emerald-900/50' :
                    'bg-slate-800 text-slate-300 border-slate-700'
                  }\`}>
                    {row.${key}}
                  </span>
                </td>`;
                  }
                  if (h === 'Evidence' || h === 'Trace' || h === 'Execution ID') {
                    return `
                <td className="py-4 px-5">
                  <EvidenceBadge evidenceId={row.${key}} timestamp="Governed" />
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
  'catalog': {
    title: 'Enterprise Data Catalog',
    description: 'The constitutional registry for all enterprise databases, APIs, reports, and AI datasets.',
    icon: 'TableProperties',
    kpis: [
      { label: 'Registered Assets', value: '412K', desc: 'Across all platforms', icon: 'Database', color: 'text-indigo-500', descColor: 'text-indigo-400' },
      { label: 'Steward Coverage', value: '98%', desc: 'Assigned ownership', icon: 'UserCheck', color: 'text-emerald-500' },
      { label: 'Unclassified Data', value: '0', desc: 'Constitutional block', icon: 'ShieldCheck', color: 'text-blue-500' },
      { label: 'API Endpoints', value: '14K', desc: 'Documented & Governed', icon: 'Plug', color: 'text-emerald-500' },
    ],
    headers: ['Asset Name', 'Asset Type', 'Data Steward', 'Business Purpose', 'Classification', 'Execution ID'],
    data: [
      { asset: 'Customer_Profile_DB', type: 'PostgreSQL DB', steward: 'Jane Doe (CRM)', purp: 'Core Identity Auth', class: 'Restricted', trace: 'EDC-EV-101' },
      { asset: 'Q3_Financial_Summary', type: 'Tableau Dashboard', steward: 'Finance Dept', purp: 'Executive Reporting', class: 'Confidential', trace: 'EDC-EV-102' },
      { asset: 'Marketing_Site_Analytics', type: 'Data Warehouse', steward: 'Growth Team', purp: 'Web Traffic Trends', class: 'Internal', trace: 'EDC-EV-103' },
    ]
  },
  'lineage': {
    title: 'Data Lineage Explorer',
    description: 'Visualizes the flow of information across source systems, ETL pipelines, and downstream consumers.',
    icon: 'Network',
    kpis: [
      { label: 'Pipeline Nodes', value: '1.4M', desc: 'Tracked dependencies', icon: 'Waypoints', color: 'text-indigo-500', descColor: 'text-indigo-400' },
      { label: 'ETL Jobs Mapped', value: '100%', desc: 'Full traceability', icon: 'CheckCircle2', color: 'text-emerald-500' },
      { label: 'Orphaned Reports', value: '14', desc: 'Pending deprecation', icon: 'AlertTriangle', color: 'text-rose-500' },
      { label: 'Lineage Depth', value: '12 Tiers', desc: 'Avg upstream hops', icon: 'Layers', color: 'text-blue-500' },
    ],
    headers: ['Target Asset', 'Primary Source', 'Intermediate Transforms', 'Downstream Impact', 'Status', 'Trace'],
    data: [
      { targ: 'Executive Revenue Dashboard', src: 'Stripe API, SAP ERP', int: 'Airflow -> Snowflake', down: '14 Key Reports', status: 'Active', trace: 'DLE-EV-201' },
      { targ: 'ML Fraud Detection Model', src: 'User Events Stream', int: 'Kafka -> Spark ML', down: 'Payment Gateway', status: 'Active', trace: 'DLE-EV-202' },
      { targ: 'Legacy Support Portal', src: 'Zendesk Export (CSV)', int: 'Manual Upload (Flagged)', down: 'None', status: 'Warning', trace: 'DLE-EV-203' },
    ]
  },
  'master-data': {
    title: 'Master Data Governance Center',
    description: 'Maintains constitutional authority over core enterprise entities to prevent duplication and ambiguity.',
    icon: 'DatabaseBackup',
    kpis: [
      { label: 'Master Entities', value: '42', desc: 'Governed domains', icon: 'Box', color: 'text-indigo-500', descColor: 'text-indigo-400' },
      { label: 'Data Duplicates', value: '0.1%', desc: 'Automatic merging', icon: 'GitMerge', color: 'text-emerald-500' },
      { label: 'System of Record', value: 'Enforced', desc: 'For all entities', icon: 'Lock', color: 'text-blue-500' },
      { label: 'Data Consistency', value: '99.9%', desc: 'Across replicas', icon: 'CheckCircle2', color: 'text-emerald-500' },
    ],
    headers: ['Master Domain', 'System of Record', 'Data Owner', 'Sync Frequency', 'Governance', 'Trace'],
    data: [
      { dom: 'Customer Identity', sor: 'Auth0 / Okta', own: 'Identity Access Mgmt', sync: 'Real-time (Stream)', gov: 'Verified', trace: 'MDG-EV-301' },
      { dom: 'Employee Directory', sor: 'Workday', own: 'HR Systems', sync: 'Hourly', gov: 'Verified', trace: 'MDG-EV-302' },
      { dom: 'Product SKU Catalog', sor: 'Shopify Plus', own: 'E-commerce Ops', sync: 'Real-time', gov: 'Verified', trace: 'MDG-EV-303' },
    ]
  },
  'metadata': {
    title: 'Metadata Intelligence Engine',
    description: 'Translates technical schemas into understandable business intelligence and clear governance definitions.',
    icon: 'FileJson',
    kpis: [
      { label: 'Business Glossary', value: '14.2K', desc: 'Defined terms', icon: 'BookOpen', color: 'text-indigo-500', descColor: 'text-indigo-400' },
      { label: 'Schema Coverage', value: '98%', desc: 'Columns documented', icon: 'TableProperties', color: 'text-emerald-500' },
      { label: 'Auto-Discovery', value: 'Active', desc: 'AI classification', icon: 'Bot', color: 'text-blue-500' },
      { label: 'Orphaned Columns', value: '12', desc: 'Flagged for review', icon: 'AlertTriangle', color: 'text-rose-500' },
    ],
    headers: ['Physical Asset', 'Technical Field', 'Business Term', 'Description', 'Classification', 'Execution ID'],
    data: [
      { asset: 'users_table_v2', fld: 'ssn_hash', term: 'Social Security Number', desc: 'Cryptographically hashed SSN for tax purposes.', class: 'Restricted', trace: 'MIE-EV-401' },
      { asset: 'sales_q3_raw', fld: 'mrr_calc', term: 'Monthly Recurring Rev', desc: 'Aggregated subscription revenue per account.', class: 'Confidential', trace: 'MIE-EV-402' },
      { asset: 'public_api_v1', fld: 'server_status', term: 'Uptime Indicator', desc: 'Boolean indicating system availability.', class: 'Public', trace: 'MIE-EV-403' },
    ]
  },
  'quality': {
    title: 'Data Quality Governance',
    description: 'Continuously measures enterprise information quality against strict completeness and accuracy standards.',
    icon: 'ActivitySquare',
    kpis: [
      { label: 'Quality Score', value: '99.2%', desc: 'Enterprise average', icon: 'Award', color: 'text-indigo-500', descColor: 'text-indigo-400' },
      { label: 'Anomalies Caught', value: '412', desc: 'Pre-ingestion', icon: 'ShieldAlert', color: 'text-emerald-500' },
      { label: 'Completeness', value: '99.9%', desc: 'Required fields present', icon: 'CheckSquare', color: 'text-blue-500' },
      { label: 'Timeliness', value: '< 2s', desc: 'Data freshness', icon: 'Timer', color: 'text-emerald-500' },
    ],
    headers: ['Dataset', 'Quality Dimension', 'Validation Rule', 'Pass Rate', 'Status', 'Trace'],
    data: [
      { set: 'Payment Transactions', dim: 'Accuracy', rule: 'Must sum to Ledger Total', rate: '100%', status: 'Optimal', trace: 'DQG-EV-501' },
      { set: 'Marketing Leads', dim: 'Completeness', rule: 'Email field cannot be null', rate: '94%', status: 'Warning', trace: 'DQG-EV-502' },
      { set: 'Live Inventory API', dim: 'Timeliness', rule: 'Latency < 500ms', rate: '99.9%', status: 'Optimal', trace: 'DQG-EV-503' },
    ]
  },
  'privacy': {
    title: 'Privacy & Classification Center',
    description: 'Governs enterprise information security through strict data classification and retention policies.',
    icon: 'ShieldAlert',
    kpis: [
      { label: 'PII Elements', value: '1,402', desc: 'Actively governed', icon: 'Fingerprint', color: 'text-indigo-500', descColor: 'text-indigo-400' },
      { label: 'Retention Purges', value: '14M', desc: 'Records deleted (30d)', icon: 'Trash2', color: 'text-emerald-500' },
      { label: 'Encryption', value: '100%', desc: 'At rest & in transit', icon: 'Lock', color: 'text-blue-500' },
      { label: 'Policy Violations', value: '0', desc: 'Hard enforcement', icon: 'ShieldCheck', color: 'text-emerald-500' },
    ],
    headers: ['Data Domain', 'Classification Level', 'Access Control', 'Retention Policy', 'Governance', 'Execution ID'],
    data: [
      { dom: 'Employee Healthcare Data', class: 'Restricted (HIPAA)', ac: 'HR Benefits Team Only', ret: '7 Years post-termination', gov: 'Verified', trace: 'PCC-EV-601' },
      { dom: 'Customer Billing Addresses', class: 'PII (GDPR/CCPA)', ac: 'Billing & Support (Masked)', ret: 'User Request or 5 Years', gov: 'Verified', trace: 'PCC-EV-602' },
      { dom: 'Corporate Blog Content', class: 'Public', ac: 'Anyone', ret: 'Indefinite', gov: 'Verified', trace: 'PCC-EV-603' },
    ]
  },
  'marketplace': {
    title: 'Enterprise Data Marketplace',
    description: 'Allows secure, governed discovery and sharing of certified datasets across the organization.',
    icon: 'ShoppingBag',
    kpis: [
      { label: 'Certified Products', value: '412', desc: 'Ready for consumption', icon: 'Award', color: 'text-indigo-500', descColor: 'text-indigo-400' },
      { label: 'Data Requests', value: '14.2K', desc: 'Monthly API/Report pulls', icon: 'Download', color: 'text-emerald-500' },
      { label: 'Approval Latency', value: '4.2h', desc: 'Avg request fulfillment', icon: 'Timer', color: 'text-blue-500' },
      { label: 'Unauthorized Access', value: '0', desc: 'Governed delivery', icon: 'Lock', color: 'text-emerald-500' },
    ],
    headers: ['Data Product', 'Publisher', 'Consumer Requests', 'Certification', 'Status', 'Trace'],
    data: [
      { prod: 'Core User Demographics (Masked)', pub: 'Data Science Team', req: '1,420 Active Subscribers', cert: 'Tier 1 (Executive)', status: 'Certified', trace: 'EDM-EV-701' },
      { prod: 'Q2 Regional Sales Rollup', pub: 'Finance Dept', req: '84 Downloads', cert: 'Tier 2 (Internal)', status: 'Certified', trace: 'EDM-EV-702' },
      { prod: 'Raw Network Traffic Logs', pub: 'Security Ops', req: 'Denied (4)', cert: 'None (Restricted)', status: 'Restricted', trace: 'EDM-EV-703' },
    ]
  },
  'analytics': {
    title: 'Data Intelligence Analytics',
    description: 'Measures organizational data maturity, tracking the ROI of enterprise information governance.',
    icon: 'PieChart',
    kpis: [
      { label: 'Data Trust Index', value: '94/100', desc: 'Enterprise wide', icon: 'Activity', color: 'text-indigo-500', descColor: 'text-indigo-400' },
      { label: 'Duplication Drop', value: '-42%', desc: 'Storage costs saved', icon: 'TrendingDown', color: 'text-emerald-500' },
      { label: 'Search Success', value: '98%', desc: 'Time to data', icon: 'CheckCircle2', color: 'text-blue-500' },
      { label: 'Stale Assets', value: '< 1%', desc: 'Aggressive deprecation', icon: 'Trash', color: 'text-emerald-500' },
    ],
    headers: ['Department', 'Catalog Adoption', 'Quality Improvement', 'Orphaned Data Removed', 'State', 'Trace'],
    data: [
      { dept: 'Marketing & Sales', adopt: '100%', qual: '+14% (YoY)', orph: '14.2 TB', state: 'Optimal', trace: 'DIA-EV-801' },
      { dept: 'Engineering', adopt: '98%', qual: '+4% (YoY)', orph: '412 GB', state: 'Optimal', trace: 'DIA-EV-802' },
      { dept: 'Legal & Compliance', adopt: '100%', qual: 'Stable (99.9%)', orph: '0 GB', state: 'Optimal', trace: 'DIA-EV-803' },
    ]
  },
  'governance': {
    title: 'Data Governance Board',
    description: 'Constitutional oversight body that reviews dataset certification and strictly enforces privacy standards.',
    icon: 'Scale',
    kpis: [
      { label: 'Active Policies', value: '42', desc: 'Data governance rules', icon: 'FileSignature', color: 'text-indigo-500', descColor: 'text-indigo-400' },
      { label: 'Policy Coverage', value: '100%', desc: 'Across all assets', icon: 'ShieldCheck', color: 'text-emerald-500' },
      { label: 'Exceptions Granted', value: '0', desc: 'Zero tolerance', icon: 'Lock', color: 'text-blue-500' },
      { label: 'Audit Readiness', value: 'Immediate', desc: 'Real-time compliance', icon: 'Clock', color: 'text-emerald-500' },
    ],
    headers: ['Data Policy', 'Target Asset Class', 'Enforcement Logic', 'Violations Prevented', 'Governance', 'Trace'],
    data: [
      { pol: 'No unmasked PII in lower envs', class: 'Dev/Staging Databases', enf: 'Hard Block (CI/CD)', prev: '142', gov: 'Verified', trace: 'DGB-EV-901' },
      { pol: 'All APIs must have an Owner', class: 'Service Endpoints', enf: 'Deployment Reject', prev: '412', gov: 'Verified', trace: 'DGB-EV-902' },
      { pol: 'Financial data requires Tier 1 Cert', class: 'Executive Reports', enf: 'Read-Access Block', prev: '14', gov: 'Verified', trace: 'DGB-EV-903' },
    ]
  },
  'evidence': {
    title: 'Data Evidence Ledger',
    description: 'Immutable ledger recording every dataset registration, quality validation, and privacy classification change.',
    icon: 'History',
    kpis: [
      { label: 'Data Logs', value: '1.4B', desc: 'Cryptographic records', icon: 'Database', color: 'text-indigo-500', descColor: 'text-indigo-400' },
      { label: 'Ledger Integrity', value: 'Verified', desc: 'SHA-256 Validated', icon: 'ShieldCheck', color: 'text-emerald-500' },
      { label: 'Audit Pull Latency', value: '1.4s', desc: 'Instant compliance', icon: 'Download', color: 'text-blue-500' },
      { label: 'Classification Attests', value: '14.2K', desc: 'Steward signed', icon: 'FileSignature', color: 'text-emerald-500' },
    ],
    headers: ['Event ID', 'Timestamp', 'Actor / Steward', 'Data Governance Action', 'Constitutional Governance', 'EvidenceBadge'],
    data: [
      { id: 'DF-E-9901', time: '2026-07-22T10:19:00Z', act: 'AI Governance Engine', acti: 'Classified Dataset as PII', gov: 'Policy: Auto-Discovery', trace: 'EV-DF-9901' },
      { id: 'DF-E-9902', time: '2026-07-22T10:18:42Z', act: 'jdoe@revora', acti: 'Certified Q3 Financial Dashboard', gov: 'Policy: Asset Certification', trace: 'EV-DF-9902' },
      { id: 'DF-E-9903', time: '2026-07-22T10:15:10Z', act: 'Data Quality Service', acti: 'Flagged completeness drop (94%)', gov: 'Policy: Minimum Quality SLA', trace: 'EV-DF-9903' },
    ]
  }
};

const pageTemplate = `import React from "react";
import Link from "next/link";
import { ArrowRight, Database, TableProperties, Network, DatabaseBackup, FileJson, ActivitySquare, ShieldAlert, ShoppingBag, PieChart, Scale, History } from "lucide-react";

export default function DataFabricHub() {
  const modules = [
    { name: "Data Catalog", path: "/data-fabric/catalog", icon: TableProperties, color: "text-indigo-400", bg: "bg-indigo-500/10", border: "border-indigo-500/20" },
    { name: "Lineage Explorer", path: "/data-fabric/lineage", icon: Network, color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20" },
    { name: "Master Data", path: "/data-fabric/master-data", icon: DatabaseBackup, color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
    { name: "Metadata Engine", path: "/data-fabric/metadata", icon: FileJson, color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
    { name: "Quality Governance", path: "/data-fabric/quality", icon: ActivitySquare, color: "text-rose-400", bg: "bg-rose-500/10", border: "border-rose-500/20" },
    { name: "Privacy Center", path: "/data-fabric/privacy", icon: ShieldAlert, color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20" },
    { name: "Data Marketplace", path: "/data-fabric/marketplace", icon: ShoppingBag, color: "text-fuchsia-400", bg: "bg-fuchsia-500/10", border: "border-fuchsia-500/20" },
    { name: "Data Analytics", path: "/data-fabric/analytics", icon: PieChart, color: "text-yellow-400", bg: "bg-yellow-500/10", border: "border-yellow-500/20" },
    { name: "Governance Board", path: "/data-fabric/governance", icon: Scale, color: "text-emerald-500", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
    { name: "Evidence Ledger", path: "/data-fabric/evidence", icon: History, color: "text-slate-400", bg: "bg-slate-500/10", border: "border-slate-500/20" },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2 flex items-center gap-3">
              <Database className="w-8 h-8 text-indigo-400" />
              Enterprise Data Fabric (REDFIGP)
            </h1>
            <p className="text-slate-400">The constitutional foundation ensuring all enterprise information is discoverable, trusted, and governed.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="px-4 py-2 bg-indigo-950/30 border border-indigo-900/50 rounded-md">
               <span className="text-xs text-indigo-400 font-bold uppercase tracking-wider block mb-1">Fabric Status</span>
               <div className="text-xl font-black text-indigo-300">Synchronized</div>
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
              <div className="text-xs text-slate-500 flex-1">Configure data fabric controls.</div>
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

const basePath = path.join(__dirname, 'src', 'app', 'data-fabric');
fs.mkdirSync(basePath, { recursive: true });
fs.writeFileSync(path.join(basePath, 'page.tsx'), pageTemplate);

for (const [route, config] of Object.entries(routes)) {
  const routePath = path.join(basePath, route);
  fs.mkdirSync(routePath, { recursive: true });
  fs.writeFileSync(path.join(routePath, 'page.tsx'), generatePage(config.title, config.description, config.icon, config.kpis, config.headers, config.data));
  console.log('Generated route:', route);
}
