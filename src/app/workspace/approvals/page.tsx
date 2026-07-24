import React from "react";
import { CheckSquare, Inbox, Timer, Zap, TrendingDown } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { WorkspaceService } from "@/services/workspace-service";
import { ApprovalService } from "@/services/approval-service";

const METRICS = [
    { label: "Pending Approvals", value: "42", icon: Inbox, iconColor: "text-fuchsia-500", desc: "Across 14 departments", descColor: "text-fuchsia-400" },
    { label: "SLA Compliance", value: "99.4%", icon: Timer, iconColor: "text-emerald-500", desc: "Decisions made on time" },
    { label: "Time-to-Approval", value: "14m", icon: Zap, iconColor: "text-blue-500", desc: "Average organizational speed" },
    { label: "Context Switching", value: "-88%", icon: TrendingDown, iconColor: "text-emerald-500", desc: "Friction eliminated" },
];

export default async function Page() {
  const session = await getServerSession(authOptions);
  if (!session?.user) return <div className="text-white p-8">Unauthorized</div>;

  const workspaces = await WorkspaceService.getUserWorkspaces(session.user.id);
  const workspaceId = workspaces[0]?.id;
  if (!workspaceId) return <div className="text-white p-8">No workspace found.</div>;

  const approvals = await ApprovalService.getWorkspaceApprovals(workspaceId, session.user.id, session.user.role);

  return (
    <PageShell>
      <ExecutiveHeader
        title="Unified Human Approval Center"
        description="Every pending approval across the enterprise coalesced into one prioritized interface."
        icon={CheckSquare}
        iconColor="text-fuchsia-500"
        backHref="/workspace"
        backLabel="RECCOS Enterprise Workspace"
        searchPlaceholder="Search Workspace Logs..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Enterprise Workspace Metrics" headers={["Approval Request", "Originating Module", "Business Justification", "SLA Deadline", "Urgency", "Execution ID"]}>
          {approvals.map((row) => (
            <tr key={row.id} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.requestContext}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.originatingModule}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.justification}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.slaDeadline}</td>
                <td className="py-4 px-5"><StatusBadge status={row.urgency} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.traceId} timestamp="Unified Ledger" /></td>
            </tr>
          ))}
          {approvals.length === 0 && (
            <tr><td colSpan={6} className="py-8 text-center text-slate-500">No pending approvals.</td></tr>
          )}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
