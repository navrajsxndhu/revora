import React from "react";
import { Tags, Settings, Target, TrendingDown, Lock } from "lucide-react";
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
    { label: "Contextual Filters", value: "94", icon: Settings, iconColor: "text-cyan-500", desc: "Active environment flags", descColor: "text-cyan-400" },
    { label: "Filter Accuracy", value: "99.8%", icon: Target, iconColor: "text-emerald-500", desc: "Context match rate" },
    { label: "Noised Reduced", value: "-64%", icon: TrendingDown, iconColor: "text-blue-500", desc: "Irrelevant results hidden" },
    { label: "RBAC Enforcement", value: "Strict", icon: Lock, iconColor: "text-rose-500", desc: "Zero data leakage" },
];

export default async function Page() {
  const session = await getServerSession(authOptions);
  if (!session?.user) return <div className="text-white p-8">Unauthorized</div>;

  const workspaces = await WorkspaceService.getUserWorkspaces(session.user.id);
  const workspaceId = workspaces[0]?.id;
  if (!workspaceId) return <div className="text-white p-8">No workspace found.</div>;

  const TABLE_DATA = await SearchService.getContexts(workspaceId, session.user.id, session.user.role);

  return (
    <PageShell>
      <ExecutiveHeader
        title="Smart Filters & Context Engine"
        description="Dynamic query adaptation based on user role, environment, and current workspace."
        icon={Tags}
        iconColor="text-cyan-500"
        backHref="/search"
        backLabel="RSKIOS Command Center"
        searchPlaceholder="Search Knowledge Context..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Search & Discovery Metrics" headers={["User Context", "Applied Filters", "Query Modification", "Information Hidden", "Status", "Trace"]}>
          {TABLE_DATA.length === 0 ? (
            <tr><td colSpan={6} className="py-8 text-center text-slate-500">No context filters configured.</td></tr>
          ) : TABLE_DATA.map((row: any, i: number) => (
            <tr key={row.id || i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.context}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.filters}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.modifiers}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.hidden}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.status}</td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Verified Result" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
