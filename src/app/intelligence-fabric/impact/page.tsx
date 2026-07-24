import React from "react";
import { Radar, Activity, Target, ShieldCheck, Zap } from "lucide-react";
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
    { label: "Simulations Run", value: "14.2K", icon: Activity, iconColor: "text-teal-500", desc: "Impact models tested", descColor: "text-teal-400" },
    { label: "Prediction Accuracy", value: "99.9%", icon: Target, iconColor: "text-emerald-500", desc: "Against real outcomes" },
    { label: "Catastrophes Averted", value: "42", icon: ShieldCheck, iconColor: "text-emerald-500", desc: "Blocked breaking changes" },
    { label: "Simulation Time", value: "800ms", icon: Zap, iconColor: "text-blue-500", desc: "Average compute time" },
];

export default async function Page() {
  const session = await getServerSession(authOptions);
  if (!session?.user) return <div className="text-white p-8">Unauthorized</div>;

  const workspaces = await WorkspaceService.getUserWorkspaces(session.user.id);
  const workspaceId = workspaces[0]?.id;
  if (!workspaceId) return <div className="text-white p-8">No workspace found.</div>;

  const TABLE_DATA = await IntelligenceFabricService.getImpact(workspaceId, session.user.id, session.user.role);

  return (
    <PageShell>
      <ExecutiveHeader
        title="Enterprise Impact Analyzer"
        description="Simulates organizational impact and risk propagation before a constitutional change is executed."
        icon={Radar}
        iconColor="text-teal-500"
        backHref="/intelligence-fabric"
        backLabel="REIF Command Center"
        searchPlaceholder="Search Knowledge Graph..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Enterprise Knowledge Metrics" headers={["Proposed Change", "Simulated Infrastructure Impact", "Simulated Business Impact", "Risk Level", "Governance", "Trace"]}>
          {TABLE_DATA.length === 0 ? (
            <tr><td colSpan={6} className="py-8 text-center text-slate-500">No impact data available.</td></tr>
          ) : TABLE_DATA.map((row: any, i: number) => (
            <tr key={row.id || i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.prop}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.inf}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.bus}</td>
                <td className="py-4 px-5"><StatusBadge status={row.risk} /></td>
                <td className="py-4 px-5"><StatusBadge status={row.gov} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Observed" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
