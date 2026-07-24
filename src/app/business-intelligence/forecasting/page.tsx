import React from "react";
import { TrendingUp, Target, BrainCircuit, BarChart2, AlertTriangle } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { WorkspaceService } from "@/services/workspace-service";
import { BusinessIntelligenceService } from "@/services/bi-service";

const METRICS = [
    { label: "Forecast Accuracy", value: "94%", icon: Target, iconColor: "text-indigo-500", desc: "Rolling 12 months", descColor: "text-indigo-400" },
    { label: "Active Models", value: "14", icon: BrainCircuit, iconColor: "text-blue-500", desc: "AI-driven predictions" },
    { label: "Revenue Variance", value: "&lt; 2%", icon: BarChart2, iconColor: "text-emerald-500", desc: "Actual vs Forecast" },
    { label: "Risk Flags", value: "3", icon: AlertTriangle, iconColor: "text-rose-500", desc: "Predicted anomalies" },
];

export default async function Page() {
  const session = await getServerSession(authOptions);
  if (!session?.user) return <div className="text-white p-8">Unauthorized</div>;

  const workspaces = await WorkspaceService.getUserWorkspaces(session.user.id);
  const workspaceId = workspaces[0]?.id;
  if (!workspaceId) return <div className="text-white p-8">No workspace found.</div>;

  const TABLE_DATA = await BusinessIntelligenceService.getForecasting(workspaceId, session.user.id, session.user.role);

  return (
    <PageShell>
      <ExecutiveHeader
        title="Forecasting & Trend Intelligence"
        description="Transforms historical performance into predictive insight for proactive executive decision making."
        icon={TrendingUp}
        iconColor="text-indigo-400"
        backHref="/business-intelligence"
        backLabel="BI Command Center"
        searchPlaceholder="Search Executive KPIs..."
        exportLabel="Export Report"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Strategic Intelligence" headers={["Prediction Model", "Target Metric", "Current Value", "90-Day Forecast", "Confidence", "Execution ID"]}>
          {TABLE_DATA.length === 0 ? (
            <tr><td colSpan={6} className="py-8 text-center text-slate-500">No forecasting available.</td></tr>
          ) : TABLE_DATA.map((row: any, i: number) => (
            <tr key={row.id || i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.mod}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.targ}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.cur}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.next}</td>
                <td className="py-4 px-5"><StatusBadge status={row.conf} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Observed" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
