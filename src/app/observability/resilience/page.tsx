import React from "react";
import { Flame, CheckCircle2, AlertTriangle, ShieldCheck } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { WorkspaceService } from "@/services/workspace-service";
import { ObservabilityService } from "@/services/observability-service";

const METRICS = [
    { label: "Chaos Experiments", value: "142", icon: Flame, iconColor: "text-rose-500", desc: "Automated monthly", descColor: "text-rose-400" },
    { label: "Failover Success", value: "100%", icon: CheckCircle2, iconColor: "text-emerald-500", desc: "Simulated recovery" },
    { label: "Vulnerabilities", value: "3", icon: AlertTriangle, iconColor: "text-amber-500", desc: "Identified for fix" },
    { label: "DR Readiness", value: "Verified", icon: ShieldCheck, iconColor: "text-blue-500", desc: "Compliance status" },
];

export default async function Page() {
  const session = await getServerSession(authOptions);
  if (!session?.user) return <div className="text-white p-8">Unauthorized</div>;

  const workspaces = await WorkspaceService.getUserWorkspaces(session.user.id);
  const workspaceId = workspaces[0]?.id;
  if (!workspaceId) return <div className="text-white p-8">No workspace found.</div>;

  const TABLE_DATA = await ObservabilityService.getResilience(workspaceId, session.user.id, session.user.role);

  return (
    <PageShell>
      <ExecutiveHeader
        title="Enterprise Resilience Simulator"
        description="Predictive chaos engineering simulating disaster recovery and multi-region failovers before failures occur."
        icon={Flame}
        iconColor="text-indigo-400"
        backHref="/observability"
        backLabel="Observability Command Center"
        searchPlaceholder="Search Operational Signals..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Operational Telemetry" headers={["Simulation Scenario", "Target Subsystem", "Simulated Failure", "Recovery Result", "Condition", "Trace"]}>
          {TABLE_DATA.length === 0 ? (
            <tr><td colSpan={6} className="py-8 text-center text-slate-500">No resilience tests run.</td></tr>
          ) : TABLE_DATA.map((row: any, i: number) => (
            <tr key={row.id || i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.scenario}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.target}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.failureType}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.resolution}</td>
                <td className="py-4 px-5"><StatusBadge status={row.condition} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Observed" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
