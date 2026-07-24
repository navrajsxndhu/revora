import React from "react";
import { HeartPulse, CheckCircle2, AlertTriangle, Timer, Layers } from "lucide-react";
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
    { label: "Global Availability", value: "99.99%", icon: CheckCircle2, iconColor: "text-indigo-500", desc: "Rolling 30 days", descColor: "text-indigo-400" },
    { label: "Degraded Services", value: "2", icon: AlertTriangle, iconColor: "text-rose-500", desc: "Active investigations" },
    { label: "Avg Latency (p95)", value: "142ms", icon: Timer, iconColor: "text-blue-500", desc: "Across core paths" },
    { label: "Services Mapped", value: "1,402", icon: Layers, iconColor: "text-emerald-500", desc: "Fully observable" },
];

export default async function Page() {
  const session = await getServerSession(authOptions);
  if (!session?.user) return <div className="text-white p-8">Unauthorized</div>;

  const workspaces = await WorkspaceService.getUserWorkspaces(session.user.id);
  const workspaceId = workspaces[0]?.id;
  if (!workspaceId) return <div className="text-white p-8">No workspace found.</div>;

  const TABLE_DATA = await ObservabilityService.getServices(workspaceId, session.user.id, session.user.role);

  return (
    <PageShell>
      <ExecutiveHeader
        title="Enterprise Service Health"
        description="The operational inventory mapping availability, latency, and error rates to direct business impact."
        icon={HeartPulse}
        iconColor="text-indigo-400"
        backHref="/observability"
        backLabel="Observability Command Center"
        searchPlaceholder="Search Operational Signals..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Operational Telemetry" headers={["Service Name", "Tier", "Availability", "Current Latency", "Health", "Execution ID"]}>
          {TABLE_DATA.length === 0 ? (
            <tr><td colSpan={6} className="py-8 text-center text-slate-500">No services active.</td></tr>
          ) : TABLE_DATA.map((row: any, i: number) => (
            <tr key={row.id || i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.service}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.tier}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.availability}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.latency}</td>
                <td className="py-4 px-5"><StatusBadge status={row.health} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Observed" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
