import React from "react";
import { Telescope, Sparkles, CheckCircle2, LineChart, Wind } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { WorkspaceService } from "@/services/workspace-service";
import { IntelligenceFabricService } from "@/services/intelligence-fabric-service";

const METRICS = [
    { label: "Proactive Insights", value: "14.2K", icon: Sparkles, iconColor: "text-teal-500", desc: "Auto-generated", descColor: "text-teal-400" },
    { label: "Insights Actioned", value: "82%", icon: CheckCircle2, iconColor: "text-emerald-500", desc: "Adopted by teams" },
    { label: "Cost Savings Found", value: "$2.4M", icon: LineChart, iconColor: "text-blue-500", desc: "Annualized optimization" },
    { label: "False Positives", value: "0.4%", icon: Wind, iconColor: "text-emerald-500", desc: "Noise ratio" },
];

export default async function Page() {
  const session = await getServerSession(authOptions);
  if (!session?.user) return <div className="text-white p-8">Unauthorized</div>;

  const workspaces = await WorkspaceService.getUserWorkspaces(session.user.id);
  const workspaceId = workspaces[0]?.id;
  if (!workspaceId) return <div className="text-white p-8">No workspace found.</div>;

  const TABLE_DATA = await IntelligenceFabricService.getInsights(workspaceId, session.user.id, session.user.role);

  return (
    <PageShell>
      <ExecutiveHeader
        title="Enterprise Insight Discovery"
        description="Continuously discovers optimization opportunities across technical, financial, and HR domains."
        icon={Telescope}
        iconColor="text-teal-500"
        backHref="/intelligence-fabric"
        backLabel="REIF Command Center"
        searchPlaceholder="Search Knowledge Graph..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Enterprise Knowledge Metrics" headers={["Insight Category", "Discovery Summary", "Recommended Action", "Potential Value", "Impact", "Trace"]}>
          {TABLE_DATA.length === 0 ? (
            <tr><td colSpan={6} className="py-8 text-center text-slate-500">No insights available.</td></tr>
          ) : TABLE_DATA.map((row: any, i: number) => (
            <tr key={row.id || i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.cat}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.sum}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.rec}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.val}</td>
                <td className="py-4 px-5"><StatusBadge status={row.imp} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Observed" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
