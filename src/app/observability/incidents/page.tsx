import React from "react";
import { Siren, Clock, Timer, Target } from "lucide-react";
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
    { label: "Active Incidents", value: "1", icon: Siren, iconColor: "text-rose-500", desc: "SEV-2 (Checkout)", descColor: "text-rose-400" },
    { label: "MTTA", value: "1.2m", icon: Clock, iconColor: "text-emerald-500", desc: "Mean Time to Acknowledge" },
    { label: "MTTR", value: "14m", icon: Timer, iconColor: "text-blue-500", desc: "Mean Time to Resolve" },
    { label: "Blast Radius", value: "Isolated", icon: Target, iconColor: "text-emerald-500", desc: "Current impact" },
];

export default async function Page() {
  const session = await getServerSession(authOptions);
  if (!session?.user) return <div className="text-white p-8">Unauthorized</div>;

  const workspaces = await WorkspaceService.getUserWorkspaces(session.user.id);
  const workspaceId = workspaces[0]?.id;
  if (!workspaceId) return <div className="text-white p-8">No workspace found.</div>;

  const TABLE_DATA = await ObservabilityService.getIncidents(workspaceId, session.user.id, session.user.role);

  return (
    <PageShell>
      <ExecutiveHeader
        title="Incident Intelligence Center"
        description="The constitutional command center for active incidents, root cause tracing, and executive communication."
        icon={Siren}
        iconColor="text-indigo-400"
        backHref="/observability"
        backLabel="Observability Command Center"
        searchPlaceholder="Search Operational Signals..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Operational Telemetry" headers={["Incident ID", "Impacted Service", "Commander", "Time Open", "Severity", "Trace"]}>
          {TABLE_DATA.length === 0 ? (
            <tr><td colSpan={6} className="py-8 text-center text-slate-500">No incidents active.</td></tr>
          ) : TABLE_DATA.map((row: any, i: number) => (
            <tr key={row.id || i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.incidentId}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.service}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.commander}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.timeToResolve}</td>
                <td className="py-4 px-5"><StatusBadge status={row.severity} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Observed" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
