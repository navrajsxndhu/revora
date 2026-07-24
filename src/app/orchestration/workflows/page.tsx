import React from "react";
import { GitPullRequest, Activity, CheckCircle2, Timer, Lock } from "lucide-react";
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
    { label: "Active Executions", value: "412/s", icon: Activity, iconColor: "text-indigo-500", desc: "Global throughput", descColor: "text-indigo-400" },
    { label: "Execution Success", value: "99.99%", icon: CheckCircle2, iconColor: "text-emerald-500", desc: "SLA adherence" },
    { label: "Avg Execution Time", value: "1.2s", icon: Timer, iconColor: "text-blue-500", desc: "Excluding human wait" },
    { label: "Policy Blocks", value: "142", icon: Lock, iconColor: "text-rose-500", desc: "Unauthorized executions" },
];

export default async function Page() {
  const session = await getServerSession(authOptions);
  if (!session?.user) return <div className="text-white p-8">Unauthorized</div>;

  const workspaces = await WorkspaceService.getUserWorkspaces(session.user.id);
  const workspaceId = workspaces[0]?.id;
  if (!workspaceId) return <div className="text-white p-8">No workspace found.</div>;

  const TABLE_DATA = await WorkflowService.getWorkflows(workspaceId, session.user.id, session.user.role);

  return (
    <PageShell>
      <ExecutiveHeader
        title="Constitutional Workflow Engine"
        description="The governed registry executing enterprise workflows while ensuring absolute compliance to mapped policies."
        icon={GitPullRequest}
        iconColor="text-indigo-400"
        backHref="/orchestration"
        backLabel="Orchestration Hub"
        searchPlaceholder="Search Orchestrations..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Orchestration Metrics" headers={["Execution Instance", "Workflow Reference", "Started By", "Current Step", "Status", "Execution ID"]}>
          {TABLE_DATA.length === 0 ? (
            <tr><td colSpan={6} className="py-8 text-center text-slate-500">No workflows available.</td></tr>
          ) : TABLE_DATA.map((row: any, i: number) => (
            <tr key={row.id || i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.inst}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.ref}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.by}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.step}</td>
                <td className="py-4 px-5"><StatusBadge status={row.status} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Observed" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
