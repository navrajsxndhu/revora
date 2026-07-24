import React from "react";
import { Compass, Layers, Users, Lightbulb, ShieldCheck } from "lucide-react";
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
    { label: "Exploration Paths", value: "412", icon: Layers, iconColor: "text-cyan-500", desc: "Faceted dimensions", descColor: "text-cyan-400" },
    { label: "Active Explorers", value: "1.4K", icon: Users, iconColor: "text-emerald-500", desc: "Users discovering assets" },
    { label: "Discovery Rate", value: "68%", icon: Lightbulb, iconColor: "text-amber-500", desc: "Found without searching" },
    { label: "Most Explored", value: "Security", icon: ShieldCheck, iconColor: "text-blue-500", desc: "Top knowledge facet" },
];

export default async function Page() {
  const session = await getServerSession(authOptions);
  if (!session?.user) return <div className="text-white p-8">Unauthorized</div>;

  const workspaces = await WorkspaceService.getUserWorkspaces(session.user.id);
  const workspaceId = workspaces[0]?.id;
  if (!workspaceId) return <div className="text-white p-8">No workspace found.</div>;

  const TABLE_DATA = await SearchService.getExplorer(workspaceId, session.user.id, session.user.role);

  return (
    <PageShell>
      <ExecutiveHeader
        title="Enterprise Knowledge Explorer"
        description="Faceted exploration for discovering knowledge without a specific starting query."
        icon={Compass}
        iconColor="text-cyan-500"
        backHref="/search"
        backLabel="RSKIOS Command Center"
        searchPlaceholder="Search Knowledge Context..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Search & Discovery Metrics" headers={["Explored Facet", "Sub-Categories", "Available Assets", "Last Updated", "Governance", "Execution ID"]}>
          {TABLE_DATA.length === 0 ? (
            <tr><td colSpan={6} className="py-8 text-center text-slate-500">No explorer facets available.</td></tr>
          ) : TABLE_DATA.map((row: any, i: number) => (
            <tr key={row.id || i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.facet}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.subFacet}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.assets}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.updated}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.governance}</td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Verified Result" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
