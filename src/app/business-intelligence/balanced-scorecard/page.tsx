import React from "react";
import { Compass, Scale, PieChart, HeartHandshake, Activity } from "lucide-react";
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
    { label: "Enterprise Balance", value: "92/100", icon: Scale, iconColor: "text-indigo-500", desc: "Holistic performance", descColor: "text-indigo-400" },
    { label: "Financial Health", value: "96/100", icon: PieChart, iconColor: "text-emerald-500", desc: "Revenue & efficiency" },
    { label: "Customer Trust", value: "94/100", icon: HeartHandshake, iconColor: "text-blue-500", desc: "NPS & Retention" },
    { label: "Internal Process", value: "88/100", icon: Activity, iconColor: "text-yellow-500", desc: "Operational drag" },
];

export default async function Page() {
  const session = await getServerSession(authOptions);
  if (!session?.user) return <div className="text-white p-8">Unauthorized</div>;

  const workspaces = await WorkspaceService.getUserWorkspaces(session.user.id);
  const workspaceId = workspaces[0]?.id;
  if (!workspaceId) return <div className="text-white p-8">No workspace found.</div>;

  const TABLE_DATA = await BusinessIntelligenceService.getBalancedScorecards(workspaceId, session.user.id, session.user.role);

  return (
    <PageShell>
      <ExecutiveHeader
        title="Balanced Scorecard Governance"
        description="Measures organizational performance across Financial, Customer, Process, and Growth dimensions."
        icon={Compass}
        iconColor="text-indigo-400"
        backHref="/business-intelligence"
        backLabel="BI Command Center"
        searchPlaceholder="Search Executive KPIs..."
        exportLabel="Export Report"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Strategic Intelligence" headers={["Scorecard Perspective", "Key Indicator", "Current Measurement", "Strategic Target", "Status", "Trace"]}>
          {TABLE_DATA.length === 0 ? (
            <tr><td colSpan={6} className="py-8 text-center text-slate-500">No balanced scorecards available.</td></tr>
          ) : TABLE_DATA.map((row: any, i: number) => (
            <tr key={row.id || i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.per}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.ind}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.cur}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.tar}</td>
                <td className="py-4 px-5"><StatusBadge status={row.status} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Observed" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
