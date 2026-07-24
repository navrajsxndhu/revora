import React from "react";
import { Sparkles, CheckCircle2, Cpu, BarChart2, Network } from "lucide-react";
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
    { label: "Acceptance Rate", value: "42%", icon: CheckCircle2, iconColor: "text-cyan-500", desc: "Users clicking suggestions", descColor: "text-cyan-400" },
    { label: "Generated Daily", value: "1.2M", icon: Cpu, iconColor: "text-emerald-500", desc: "Similarity vectors computed" },
    { label: "Avg Relevance", value: "0.84", icon: BarChart2, iconColor: "text-blue-500", desc: "Cosine similarity score" },
    { label: "Knowledge Silos", value: "-14%", icon: Network, iconColor: "text-amber-500", desc: "Cross-dept discoveries" },
];

export default async function Page() {
  const session = await getServerSession(authOptions);
  if (!session?.user) return <div className="text-white p-8">Unauthorized</div>;

  const workspaces = await WorkspaceService.getUserWorkspaces(session.user.id);
  const workspaceId = workspaces[0]?.id;
  if (!workspaceId) return <div className="text-white p-8">No workspace found.</div>;

  const TABLE_DATA = await SearchService.getRecommendations(workspaceId, session.user.id, session.user.role);

  return (
    <PageShell>
      <ExecutiveHeader
        title="Recommendation & Similarity Engine"
        description="Proactively suggesting related enterprise knowledge based on structural similarity."
        icon={Sparkles}
        iconColor="text-cyan-500"
        backHref="/search"
        backLabel="RSKIOS Command Center"
        searchPlaceholder="Search Knowledge Context..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Search & Discovery Metrics" headers={["Source Asset", "Recommended Asset", "Similarity Vector", "Business Value", "Confidence", "Evidence"]}>
          {TABLE_DATA.length === 0 ? (
            <tr><td colSpan={6} className="py-8 text-center text-slate-500">No recommendations available.</td></tr>
          ) : TABLE_DATA.map((row: any, i: number) => (
            <tr key={row.id || i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.source}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.recommendation}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.vector}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.value}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.confidence}</td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Verified Result" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
