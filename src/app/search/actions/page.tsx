import React from "react";
import { MousePointerClick, Target, TrendingUp, BarChart2, ShieldCheck } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { WorkspaceService } from "@/services/workspace-service";
import { SearchService } from "@/services/search-service";

const METRICS = [
    { label: "Actionable Results", value: "8.4K", icon: Target, iconColor: "text-cyan-500", desc: "Direct UI triggers", descColor: "text-cyan-400" },
    { label: "Execution Speed", value: "+45%", icon: TrendingUp, iconColor: "text-emerald-500", desc: "Faster than navigation" },
    { label: "Popular Actions", value: "14", icon: BarChart2, iconColor: "text-blue-500", desc: "Represent 80% of volume" },
    { label: "Denied Actions", value: "124", icon: ShieldCheck, iconColor: "text-rose-500", desc: "Blocked by RBAC" },
];

export default async function Page() {
  const session = await getServerSession(authOptions);
  if (!session?.user) return <div className="text-white p-8">Unauthorized</div>;

  const workspaces = await WorkspaceService.getUserWorkspaces(session.user.id);
  const workspaceId = workspaces[0]?.id;
  if (!workspaceId) return <div className="text-white p-8">No workspace found.</div>;

  const TABLE_DATA = await SearchService.getQueries(workspaceId, session.user.id, session.user.role);

  return (
    <PageShell>
      <ExecutiveHeader
        title="Universal Command Search"
        description="Transforming search from discovery to immediate action execution."
        icon={MousePointerClick}
        iconColor="text-cyan-500"
        backHref="/search"
        backLabel="RSKIOS Command Center"
        searchPlaceholder="Search Knowledge Context..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Search & Discovery Metrics" headers={["Search Query", "Executed Action", "Target Module", "RBAC Status", "Confidence", "Evidence"]}>
          {TABLE_DATA.length === 0 ? (
            <tr><td colSpan={6} className="py-8 text-center text-slate-500">No actions recorded.</td></tr>
          ) : TABLE_DATA.map((row: any, i: number) => (
            <tr key={row.id || i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.query}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.action}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.module}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.rbac}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.confidence}</td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Verified Result" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
