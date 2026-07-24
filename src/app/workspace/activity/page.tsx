import React from "react";
import { ActivitySquare, Activity, CheckCircle2, Timer, ArrowRight } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { WorkspaceService } from "@/services/workspace-service";
import { ActivityService } from "@/services/activity-service";

const METRICS = [
    { label: "Active Streams", value: "412", icon: Activity, iconColor: "text-fuchsia-500", desc: "Monitored systems", descColor: "text-fuchsia-400" },
    { label: "Signal-to-Noise", value: "98%", icon: CheckCircle2, iconColor: "text-emerald-500", desc: "Irrelevant alerts filtered" },
    { label: "Processing Delay", value: "8ms", icon: Timer, iconColor: "text-blue-500", desc: "Event evaluation time" },
    { label: "Executive Handoff", value: "14.2K", icon: ArrowRight, iconColor: "text-emerald-500", desc: "Escalations delivered" },
];

export default async function Page() {
  const session = await getServerSession(authOptions);
  if (!session?.user) return <div className="text-white p-8">Unauthorized</div>;

  const workspaces = await WorkspaceService.getUserWorkspaces(session.user.id);
  const workspaceId = workspaces[0]?.id;
  if (!workspaceId) return <div className="text-white p-8">No workspace found.</div>;

  const activities = await ActivityService.getWorkspaceActivities(workspaceId, session.user.id, session.user.role);

  return (
    <PageShell>
      <ExecutiveHeader
        title="Enterprise Activity Feed"
        description="The real-time pulse of the organization prioritized by constitutional importance."
        icon={ActivitySquare}
        iconColor="text-fuchsia-500"
        backHref="/workspace"
        backLabel="RECCOS Enterprise Workspace"
        searchPlaceholder="Search Workspace Logs..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Enterprise Workspace Metrics" headers={["Activity Stream", "Constitutional Urgency", "Summary", "Department", "Status", "Trace"]}>
          {activities.map((row) => (
            <tr key={row.id} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.activityStream}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.urgency}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.summary}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.department}</td>
                <td className="py-4 px-5"><StatusBadge status={row.status} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.traceId} timestamp="Unified Ledger" /></td>
            </tr>
          ))}
          {activities.length === 0 && (
            <tr><td colSpan={6} className="py-8 text-center text-slate-500">No active activities.</td></tr>
          )}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
