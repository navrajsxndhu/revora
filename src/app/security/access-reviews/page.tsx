import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";
import { Shield, Lock, AlertTriangle } from "lucide-react";

import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { WorkspaceService } from "@/services/workspace-service";
import { SecurityService } from "@/services/security-service";

const METRICS = [
    { label: "Active Threats", value: "0", icon: Shield, iconColor: "text-emerald-500", desc: "No critical threats", descColor: "text-emerald-400" },
    { label: "Compliance Score", value: "98%", icon: Lock, iconColor: "text-teal-500", desc: "Top percentile" },
    { label: "Risks Mitigated", value: "142", icon: AlertTriangle, iconColor: "text-teal-500", desc: "Last 30 days" },
];

export default async function Page() {
  const session = await getServerSession(authOptions);
  if (!session?.user) return <div className="text-white p-8">Unauthorized</div>;

  const workspaces = await WorkspaceService.getUserWorkspaces(session.user.id);
  const workspaceId = workspaces[0]?.id;
  if (!workspaceId) return <div className="text-white p-8">No workspace found.</div>;

  const TABLE_DATA = await SecurityService.getAccessReviews(workspaceId, session.user.id, session.user.role);

  return (
    <PageShell>
      <ExecutiveHeader
        title="Access Reviews"
        description="Enterprise Security Platform"
        icon={Shield}
        backHref="/security"
        backLabel="Security Overview"
      />
      <div className="py-6">
        <MetricGrid metrics={METRICS} />
      </div>

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Access Reviews" headers={["Reviewer", "System", "Progress", "Status", "Created At"]}>
          {TABLE_DATA.length === 0 ? (
            <tr><td colSpan={6} className="py-8 text-center text-slate-500">No data available.</td></tr>
          ) : TABLE_DATA.map((row: any, i: number) => (
            <tr key={row.id || i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">

                <td className="py-4 px-5 text-sm text-slate-400">{row.reviewer}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.system}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.progress}</td>
                <td className="py-4 px-5"><StatusBadge status={row.status} /></td>
                <td className="py-4 px-5 text-sm text-slate-400">{new Date(row.createdAt).toLocaleString()}</td>
    
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
