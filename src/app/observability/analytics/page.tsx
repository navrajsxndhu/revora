import React from "react";
import { LineChart, Activity, TrendingDown, ShieldCheck, Award } from "lucide-react";
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
    { label: "Reliability Index", value: "94/100", icon: Activity, iconColor: "text-indigo-500", desc: "Enterprise wide score", descColor: "text-indigo-400" },
    { label: "Alert Fatigue Drop", value: "-84%", icon: TrendingDown, iconColor: "text-emerald-500", desc: "Noise reduction YoY" },
    { label: "Incident Prevention", value: "142", icon: ShieldCheck, iconColor: "text-blue-500", desc: "Averted via AI" },
    { label: "Downtime Cost Saved", value: "$4.2M", icon: Award, iconColor: "text-emerald-500", desc: "Estimated ROI" },
];

export default async function Page() {
  const session = await getServerSession(authOptions);
  if (!session?.user) return <div className="text-white p-8">Unauthorized</div>;

  const workspaces = await WorkspaceService.getUserWorkspaces(session.user.id);
  const workspaceId = workspaces[0]?.id;
  if (!workspaceId) return <div className="text-white p-8">No workspace found.</div>;

  const TABLE_DATA = await ObservabilityService.getAnalytics(workspaceId, session.user.id, session.user.role);

  return (
    <PageShell>
      <ExecutiveHeader
        title="Operational Intelligence Analytics"
        description="Executive intelligence demonstrating the ROI of reliability engineering and monitoring maturity."
        icon={LineChart}
        iconColor="text-indigo-400"
        backHref="/observability"
        backLabel="Observability Command Center"
        searchPlaceholder="Search Operational Signals..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Operational Telemetry" headers={["Business Domain", "Uptime SLA", "Alerts / Month", "MTTR Trend", "State", "Trace"]}>
          {TABLE_DATA.length === 0 ? (
            <tr><td colSpan={6} className="py-8 text-center text-slate-500">No analytics data available.</td></tr>
          ) : TABLE_DATA.map((row: any, i: number) => (
            <tr key={row.id || i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.domain}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.sla}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.alerts}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.trend}</td>
                <td className="py-4 px-5"><StatusBadge status={row.state} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Verified Block" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
