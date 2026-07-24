import React from "react";
import { Clock, History, Network, Zap, ShieldCheck } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { WorkspaceService } from "@/services/workspace-service";
import { TimelineService } from "@/services/timeline-service";

const METRICS = [
    { label: "Timeline Events", value: "8.4M", icon: History, iconColor: "text-fuchsia-500", desc: "Constitutional actions logged", descColor: "text-fuchsia-400" },
    { label: "Event Correlation", value: "100%", icon: Network, iconColor: "text-emerald-500", desc: "Cross-module linking" },
    { label: "Audit Velocity", value: "1.2s", icon: Zap, iconColor: "text-blue-500", desc: "Average query time" },
    { label: "Missing Evidence", value: "0", icon: ShieldCheck, iconColor: "text-emerald-500", desc: "Perfect cryptographic seal" },
];

export default async function Page() {
  const session = await getServerSession(authOptions);
  if (!session?.user) return <div className="text-white p-8">Unauthorized</div>;

  const workspaces = await WorkspaceService.getUserWorkspaces(session.user.id);
  const workspaceId = workspaces[0]?.id;
  if (!workspaceId) return <div className="text-white p-8">No workspace found.</div>;

  const timelineEvents = await TimelineService.getWorkspaceTimeline(workspaceId, session.user.id, session.user.role);

  return (
    <PageShell>
      <ExecutiveHeader
        title="Unified Enterprise Timeline"
        description="A chronological operational story of the organization spanning all constitutional actions."
        icon={Clock}
        iconColor="text-fuchsia-500"
        backHref="/workspace"
        backLabel="RECCOS Enterprise Workspace"
        searchPlaceholder="Search Workspace Logs..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Enterprise Workspace Metrics" headers={["Timestamp", "Event Context", "Initiator", "Business Impact", "Status", "Trace"]}>
          {timelineEvents.map((row) => (
            <tr key={row.id} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.createdAt.toLocaleString()}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.eventContext}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.initiator}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.businessImpact}</td>
                <td className="py-4 px-5"><StatusBadge status={row.status} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.traceId} timestamp="Unified Ledger" /></td>
            </tr>
          ))}
          {timelineEvents.length === 0 && (
            <tr><td colSpan={6} className="py-8 text-center text-slate-500">No timeline events recorded.</td></tr>
          )}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
