const fs = require('fs');
const path = require('path');

const pages = [
  {
    name: 'incidents',
    title: 'Security Incidents',
    headers: ['Title', 'Severity', 'Status', 'Owner', 'Created At'],
    method: 'getIncidents',
    render: `
                <td className="py-4 px-5 text-sm text-slate-400">{row.title}</td>
                <td className="py-4 px-5"><StatusBadge status={row.severity} /></td>
                <td className="py-4 px-5"><StatusBadge status={row.status} /></td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.owner}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{new Date(row.createdAt).toLocaleString()}</td>
    `
  },
  {
    name: 'threats',
    title: 'Threat Intelligence',
    headers: ['Threat Name', 'Level', 'Source', 'Status', 'Created At'],
    method: 'getThreats',
    render: `
                <td className="py-4 px-5 text-sm text-slate-400">{row.threatName}</td>
                <td className="py-4 px-5"><StatusBadge status={row.level} /></td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.source}</td>
                <td className="py-4 px-5"><StatusBadge status={row.status} /></td>
                <td className="py-4 px-5 text-sm text-slate-400">{new Date(row.createdAt).toLocaleString()}</td>
    `
  },
  {
    name: 'risks',
    title: 'Risk Register',
    headers: ['Risk Name', 'Impact', 'Likelihood', 'Score', 'Created At'],
    method: 'getRisks',
    render: `
                <td className="py-4 px-5 text-sm text-slate-400">{row.riskName}</td>
                <td className="py-4 px-5"><StatusBadge status={row.impact} /></td>
                <td className="py-4 px-5"><StatusBadge status={row.likelihood} /></td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.score}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{new Date(row.createdAt).toLocaleString()}</td>
    `
  },
  {
    name: 'compliance',
    title: 'Compliance Findings',
    headers: ['Finding', 'Framework', 'Severity', 'Status', 'Created At'],
    method: 'getComplianceFindings',
    render: `
                <td className="py-4 px-5 text-sm text-slate-400">{row.finding}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.framework}</td>
                <td className="py-4 px-5"><StatusBadge status={row.severity} /></td>
                <td className="py-4 px-5"><StatusBadge status={row.status} /></td>
                <td className="py-4 px-5 text-sm text-slate-400">{new Date(row.createdAt).toLocaleString()}</td>
    `
  },
  {
    name: 'vulnerabilities',
    title: 'Vulnerability Management',
    headers: ['CVE', 'Severity', 'Asset', 'Status', 'Created At'],
    method: 'getVulnerabilities',
    render: `
                <td className="py-4 px-5 text-sm text-slate-400">{row.cve}</td>
                <td className="py-4 px-5"><StatusBadge status={row.severity} /></td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.asset}</td>
                <td className="py-4 px-5"><StatusBadge status={row.status} /></td>
                <td className="py-4 px-5 text-sm text-slate-400">{new Date(row.createdAt).toLocaleString()}</td>
    `
  },
  {
    name: 'access-reviews',
    title: 'Access Reviews',
    headers: ['Reviewer', 'System', 'Progress', 'Status', 'Created At'],
    method: 'getAccessReviews',
    render: `
                <td className="py-4 px-5 text-sm text-slate-400">{row.reviewer}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.system}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.progress}</td>
                <td className="py-4 px-5"><StatusBadge status={row.status} /></td>
                <td className="py-4 px-5 text-sm text-slate-400">{new Date(row.createdAt).toLocaleString()}</td>
    `
  },
  {
    name: 'policies',
    title: 'Security Policies',
    headers: ['Policy Name', 'Enforcement', 'Version', 'Status', 'Created At'],
    method: 'getSecurityPolicies',
    render: `
                <td className="py-4 px-5 text-sm text-slate-400">{row.policyName}</td>
                <td className="py-4 px-5"><StatusBadge status={row.enforcement} /></td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.version}</td>
                <td className="py-4 px-5"><StatusBadge status={row.status} /></td>
                <td className="py-4 px-5 text-sm text-slate-400">{new Date(row.createdAt).toLocaleString()}</td>
    `
  },
  {
    name: 'evidence',
    title: 'Security Evidence',
    headers: ['Evidence ID', 'Description', 'Hash', 'Timestamp'],
    method: 'getSecurityEvidence',
    render: `
                <td className="py-4 px-5 text-sm font-mono text-slate-300">{row.evidenceId}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.description}</td>
                <td className="py-4 px-5 text-sm font-mono text-slate-500">{row.hash}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{new Date(row.timestamp).toLocaleString()}</td>
    `
  },
  {
    name: 'analytics',
    title: 'Security Analytics',
    headers: ['Metric Name', 'Value', 'Trend', 'Period', 'Created At'],
    method: 'getSecurityAnalytics',
    render: `
                <td className="py-4 px-5 text-sm text-slate-400">{row.metricName}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.value}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.trend}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.period}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{new Date(row.createdAt).toLocaleString()}</td>
    `
  },
  {
    name: 'governance',
    title: 'Security Governance',
    headers: ['Control Name', 'Framework', 'Owner', 'Status', 'Created At'],
    method: 'getSecurityGovernance',
    render: `
                <td className="py-4 px-5 text-sm text-slate-400">{row.controlName}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.framework}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.owner}</td>
                <td className="py-4 px-5"><StatusBadge status={row.status} /></td>
                <td className="py-4 px-5 text-sm text-slate-400">{new Date(row.createdAt).toLocaleString()}</td>
    `
  }
];

const template = (p) => 'import { PageShell } from "@/components/ui/page-shell";\n' +
'import { ExecutiveHeader } from "@/components/ui/executive-header";\n' +
'import { MetricGrid } from "@/components/ui/metric-grid";\n' +
'import { PremiumTable } from "@/components/ui/premium-table";\n' +
'import { StatusBadge } from "@/components/ui/status-badge";\n' +
'import { EvidenceBadge } from "@/components/ui/evidence-badge";\n' +
'import { Shield, Lock, AlertTriangle } from "lucide-react";\n' +
'\n' +
'import { getServerSession } from "next-auth";\n' +
'import { authOptions } from "@/app/api/auth/[...nextauth]/route";\n' +
'import { WorkspaceService } from "@/services/workspace-service";\n' +
'import { SecurityService } from "@/services/security-service";\n' +
'\n' +
'const METRICS = [\n' +
'    { label: "Active Threats", value: "0", icon: Shield, iconColor: "text-emerald-500", desc: "No critical threats", descColor: "text-emerald-400" },\n' +
'    { label: "Compliance Score", value: "98%", icon: Lock, iconColor: "text-teal-500", desc: "Top percentile" },\n' +
'    { label: "Risks Mitigated", value: "142", icon: AlertTriangle, iconColor: "text-teal-500", desc: "Last 30 days" },\n' +
'];\n' +
'\n' +
'export default async function Page() {\n' +
'  const session = await getServerSession(authOptions);\n' +
'  if (!session?.user) return <div className="text-white p-8">Unauthorized</div>;\n' +
'\n' +
'  const workspaces = await WorkspaceService.getUserWorkspaces(session.user.id);\n' +
'  const workspaceId = workspaces[0]?.id;\n' +
'  if (!workspaceId) return <div className="text-white p-8">No workspace found.</div>;\n' +
'\n' +
'  const TABLE_DATA = await SecurityService.' + p.method + '(workspaceId, session.user.id, session.user.role);\n' +
'\n' +
'  return (\n' +
'    <PageShell>\n' +
'      <ExecutiveHeader\n' +
'        title="' + p.title + '"\n' +
'        description="Enterprise Security Platform"\n' +
'        icon={Shield}\n' +
'        backHref="/security"\n' +
'        backLabel="Security Overview"\n' +
'      />\n' +
'      <div className="py-6">\n' +
'        <MetricGrid metrics={METRICS} />\n' +
'      </div>\n' +
'\n' +
'      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">\n' +
'        <PremiumTable title="' + p.title + '" headers={[' + p.headers.map(h => '"' + h + '"').join(', ') + ']}>\n' +
'          {TABLE_DATA.length === 0 ? (\n' +
'            <tr><td colSpan={6} className="py-8 text-center text-slate-500">No data available.</td></tr>\n' +
'          ) : TABLE_DATA.map((row: any, i: number) => (\n' +
'            <tr key={row.id || i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">\n' +
p.render + '\n' +
'            </tr>\n' +
'          ))}\n' +
'        </PremiumTable>\n' +
'      </div>\n' +
'    </PageShell>\n' +
'  );\n' +
'}\n';

pages.forEach(p => {
  const dir = path.join(__dirname, 'src', 'app', 'security', p.name);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'page.tsx'), template(p));
  console.log('Created', p.name);
});
