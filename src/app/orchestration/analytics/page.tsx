import React from "react";
import { LineChart, Activity, TrendingDown, CheckCircle2, AlertTriangle } from "lucide-react";
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
    { label: "Execution Index", value: "94/100", icon: Activity, iconColor: "text-indigo-500", desc: "Enterprise score", descColor: "text-indigo-400" },
    { label: "Hours Saved", value: "14.2K", icon: TrendingDown, iconColor: "text-emerald-500", desc: "Monthly automation ROI" },
    { label: "SLA Adherence", value: "98.4%", icon: CheckCircle2, iconColor: "text-emerald-500", desc: "Process timing" },
    { label: "Bottlenecks", value: "3", icon: AlertTriangle, iconColor: "text-rose-500", desc: "Departments lagging" },
];

export default async function Page() {
  const session = await getServerSession(authOptions);
  if (!session?.user) return <div className="text-white p-8">Unauthorized</div>;

  const workspaces = await WorkspaceService.getUserWorkspaces(session.user.id);
  const workspaceId = workspaces[0]?.id;
  if (!workspaceId) return <div className="text-white p-8">No workspace found.</div>;

  const TABLE_DATA = await WorkflowService.getAnalytics(workspaceId, session.user.id, session.user.role);

  return (
    <PageShell>
      <ExecutiveHeader
        title="Execution Analytics"
        description="Measures operational effectiveness, workflow latency, SLA adherence, and true ROI of automation."
        icon={LineChart}
        iconColor="text-indigo-400"
        backHref="/orchestration"
        backLabel="Orchestration Hub"
        searchPlaceholder="Search Orchestrations..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Orchestration Metrics" headers={["Workflow Category", "Total Executions", "Avg Human Latency", "Avg System Latency", "Condition", "Trace"]}>
          {TABLE_DATA.length === 0 ? (
            <tr><td colSpan={6} className="py-8 text-center text-slate-500">No analytics data available.</td></tr>
          ) : TABLE_DATA.map((row: any, i: number) => (
            <tr key={row.id || i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.cat}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.exec}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.human}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.sys}</td>
                <td className="py-4 px-5"><StatusBadge status={row.cond} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Observed" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
