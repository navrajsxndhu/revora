import React from "react";
import { PieChart, Activity, TrendingDown, CheckCircle2, Trash } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { WorkspaceService } from "@/services/workspace-service";
import { DataFabricService } from "@/services/data-fabric-service";

const METRICS = [
    { label: "Data Trust Index", value: "94/100", icon: Activity, iconColor: "text-indigo-500", desc: "Enterprise wide", descColor: "text-indigo-400" },
    { label: "Duplication Drop", value: "-42%", icon: TrendingDown, iconColor: "text-emerald-500", desc: "Storage costs saved" },
    { label: "Search Success", value: "98%", icon: CheckCircle2, iconColor: "text-blue-500", desc: "Time to data" },
    { label: "Stale Assets", value: "&lt; 1%", icon: Trash, iconColor: "text-emerald-500", desc: "Aggressive deprecation" },
];

export default async function Page() {
  const session = await getServerSession(authOptions);
  if (!session?.user) return <div className="text-white p-8">Unauthorized</div>;

  const workspaces = await WorkspaceService.getUserWorkspaces(session.user.id);
  const workspaceId = workspaces[0]?.id;
  if (!workspaceId) return <div className="text-white p-8">No workspace found.</div>;

  const TABLE_DATA = await DataFabricService.getAnalytics(workspaceId, session.user.id, session.user.role);

  return (
    <PageShell>
      <ExecutiveHeader
        title="Data Intelligence Analytics"
        description="Measures organizational data maturity, tracking the ROI of enterprise information governance."
        icon={PieChart}
        iconColor="text-indigo-400"
        backHref="/data-fabric"
        backLabel="Data Fabric Hub"
        searchPlaceholder="Search Data Assets..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Data Governance Records" headers={["Department", "Catalog Adoption", "Quality Improvement", "Orphaned Data Removed", "State", "Trace"]}>
          {TABLE_DATA.length === 0 ? (
            <tr><td colSpan={6} className="py-8 text-center text-slate-500">No analytics data available.</td></tr>
          ) : TABLE_DATA.map((row: any, i: number) => (
            <tr key={row.id || i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.dept}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.adopt}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.qual}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.orph}</td>
                <td className="py-4 px-5"><StatusBadge status={row.state} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Observed" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
