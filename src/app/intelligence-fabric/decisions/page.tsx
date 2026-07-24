import React from "react";
import { BrainCircuit, CheckSquare, ShieldCheck, TrendingUp, TrendingDown } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { WorkspaceService } from "@/services/workspace-service";
import { IntelligenceFabricService } from "@/services/intelligence-fabric-service";

const METRICS = [
    { label: "Decisions Informed", value: "1,402", icon: CheckSquare, iconColor: "text-teal-500", desc: "By intelligence fabric", descColor: "text-teal-400" },
    { label: "Evidence Attached", value: "100%", icon: ShieldCheck, iconColor: "text-emerald-500", desc: "No unbacked claims" },
    { label: "Decision Speed", value: "+84%", icon: TrendingUp, iconColor: "text-blue-500", desc: "Executive velocity" },
    { label: "Reversal Rate", value: "0.01%", icon: TrendingDown, iconColor: "text-emerald-500", desc: "Incorrect decisions" },
];

export default async function Page() {
  const session = await getServerSession(authOptions);
  if (!session?.user) return <div className="text-white p-8">Unauthorized</div>;

  const workspaces = await WorkspaceService.getUserWorkspaces(session.user.id);
  const workspaceId = workspaces[0]?.id;
  if (!workspaceId) return <div className="text-white p-8">No workspace found.</div>;

  const TABLE_DATA = await IntelligenceFabricService.getDecisions(workspaceId, session.user.id, session.user.role);

  return (
    <PageShell>
      <ExecutiveHeader
        title="Executive Decision Intelligence"
        description="Provides decision-ready enterprise summaries rather than raw fragmented data."
        icon={BrainCircuit}
        iconColor="text-teal-500"
        backHref="/intelligence-fabric"
        backLabel="REIF Command Center"
        searchPlaceholder="Search Knowledge Graph..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Enterprise Knowledge Metrics" headers={["Executive Decision Required", "Primary Supporting Evidence", "Identified Risks", "Financial Implication", "Status", "Execution ID"]}>
          {TABLE_DATA.length === 0 ? (
            <tr><td colSpan={6} className="py-8 text-center text-slate-500">No decisions available.</td></tr>
          ) : TABLE_DATA.map((row: any, i: number) => (
            <tr key={row.id || i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.dec}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.ev}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.risk}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.fin}</td>
                <td className="py-4 px-5"><StatusBadge status={row.status} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Observed" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
