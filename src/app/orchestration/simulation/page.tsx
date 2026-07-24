import React from "react";
import { PlayCircle, ShieldCheck, Zap, Layers } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { WorkspaceService } from "@/services/workspace-service";
import { WorkflowService } from "@/services/workflow-service";

const METRICS = [
    { label: "Simulations Run", value: "4,102", icon: PlayCircle, iconColor: "text-indigo-500", desc: "Past 30 days", descColor: "text-indigo-400" },
    { label: "Failures Caught", value: "840", icon: ShieldCheck, iconColor: "text-emerald-500", desc: "Pre-production blocks" },
    { label: "Avg Sim Latency", value: "45ms", icon: Zap, iconColor: "text-blue-500", desc: "Execution speed" },
    { label: "Mock Coverage", value: "100%", icon: Layers, iconColor: "text-emerald-500", desc: "All modules mapped" },
];

export default async function Page() {
  const session = await getServerSession(authOptions);
  if (!session?.user) return <div className="text-white p-8">Unauthorized</div>;

  const workspaces = await WorkspaceService.getUserWorkspaces(session.user.id);
  const workspaceId = workspaces[0]?.id;
  if (!workspaceId) return <div className="text-white p-8">No workspace found.</div>;

  const TABLE_DATA = await WorkflowService.getSimulations(workspaceId, session.user.id, session.user.role);

  return (
    <PageShell>
      <ExecutiveHeader
        title="Process Simulation Studio"
        description="Safely simulates workflow execution against mock states before deploying to production."
        icon={PlayCircle}
        iconColor="text-indigo-400"
        backHref="/orchestration"
        backLabel="Orchestration Hub"
        searchPlaceholder="Search Orchestrations..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Orchestration Metrics" headers={["Simulation Target", "Simulated Condition", "Predicted Outcome", "Risk Level", "Status", "Execution ID"]}>
          {TABLE_DATA.length === 0 ? (
            <tr><td colSpan={6} className="py-8 text-center text-slate-500">No simulations available.</td></tr>
          ) : TABLE_DATA.map((row: any, i: number) => (
            <tr key={row.id || i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.targ}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.cond}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.out}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.risk}</td>
                <td className="py-4 px-5"><StatusBadge status={row.status} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Observed" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
