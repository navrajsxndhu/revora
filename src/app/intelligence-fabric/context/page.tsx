import React from "react";
import { Network, Zap, Layers, CheckCircle2, Timer } from "lucide-react";
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
    { label: "Context Hydration", value: "4ms", icon: Zap, iconColor: "text-teal-500", desc: "Real-time assembly", descColor: "text-teal-400" },
    { label: "Dimensions Added", value: "14", icon: Layers, iconColor: "text-blue-500", desc: "Perspectives per asset" },
    { label: "Context Misses", value: "0", icon: CheckCircle2, iconColor: "text-emerald-500", desc: "Perfect recall" },
    { label: "Time Saved", value: "4.2h/user", icon: Timer, iconColor: "text-emerald-500", desc: "No more searching" },
];

export default async function Page() {
  const session = await getServerSession(authOptions);
  if (!session?.user) return <div className="text-white p-8">Unauthorized</div>;

  const workspaces = await WorkspaceService.getUserWorkspaces(session.user.id);
  const workspaceId = workspaces[0]?.id;
  if (!workspaceId) return <div className="text-white p-8">No workspace found.</div>;

  const TABLE_DATA = await IntelligenceFabricService.getContext(workspaceId, session.user.id, session.user.role);

  return (
    <PageShell>
      <ExecutiveHeader
        title="Unified Business Context Engine"
        description="Transforms isolated technical records into rich organizational and financial context."
        icon={Network}
        iconColor="text-teal-500"
        backHref="/intelligence-fabric"
        backLabel="REIF Command Center"
        searchPlaceholder="Search Knowledge Graph..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Enterprise Knowledge Metrics" headers={["Technical Asset", "Financial Context", "Security Context", "Compliance Context", "State", "Execution ID"]}>
          {TABLE_DATA.length === 0 ? (
            <tr><td colSpan={6} className="py-8 text-center text-slate-500">No context available.</td></tr>
          ) : TABLE_DATA.map((row: any, i: number) => (
            <tr key={row.id || i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.ass}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.fin}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.sec}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.comp}</td>
                <td className="py-4 px-5"><StatusBadge status={row.state} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Observed" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
