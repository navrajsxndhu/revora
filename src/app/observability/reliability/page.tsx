import React from "react";
import { ShieldCheck, Award, Lock, Bot, TrendingUp } from "lucide-react";
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
    { label: "SLO Compliance", value: "98.4%", icon: Award, iconColor: "text-indigo-500", desc: "Enterprise average", descColor: "text-indigo-400" },
    { label: "Budgets Exhausted", value: "1", icon: Lock, iconColor: "text-rose-500", desc: "Freeze deployment" },
    { label: "Automated Recovery", value: "84%", icon: Bot, iconColor: "text-blue-500", desc: "Self-healing events" },
    { label: "Resilience Score", value: "A-", icon: TrendingUp, iconColor: "text-emerald-500", desc: "Quarterly rating" },
];

export default async function Page() {
  const session = await getServerSession(authOptions);
  if (!session?.user) return <div className="text-white p-8">Unauthorized</div>;

  const workspaces = await WorkspaceService.getUserWorkspaces(session.user.id);
  const workspaceId = workspaces[0]?.id;
  if (!workspaceId) return <div className="text-white p-8">No workspace found.</div>;

  const TABLE_DATA = await ObservabilityService.getReliability(workspaceId, session.user.id, session.user.role);

  return (
    <PageShell>
      <ExecutiveHeader
        title="Reliability Engineering Center"
        description="Governance for enterprise resilience, measuring Service Level Objectives (SLOs) and Error Budgets."
        icon={ShieldCheck}
        iconColor="text-indigo-400"
        backHref="/observability"
        backLabel="Observability Command Center"
        searchPlaceholder="Search Operational Signals..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Operational Telemetry" headers={["Business Journey", "SLO Target", "Current Value", "Error Budget Remaining", "Status", "Execution ID"]}>
          {TABLE_DATA.length === 0 ? (
            <tr><td colSpan={6} className="py-8 text-center text-slate-500">No reliability data available.</td></tr>
          ) : TABLE_DATA.map((row: any, i: number) => (
            <tr key={row.id || i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.objective}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.target}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.value}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.budget}</td>
                <td className="py-4 px-5"><StatusBadge status={row.status} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Observed" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
