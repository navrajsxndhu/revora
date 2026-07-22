import React from "react";
import { BarChart3, Activity, XCircle, TrendingDown, Network } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"dept":"Security Operations","util":"99.4%","time":"412 Hours","vel":"+84%","health":"Optimal","trace":"IAN-EV-801"},{"dept":"Cloud Infrastructure","util":"94.2%","time":"214 Hours","vel":"+62%","health":"Optimal","trace":"IAN-EV-802"},{"dept":"Finance & Legal","util":"88.4%","time":"142 Hours","vel":"+42%","health":"Healthy","trace":"IAN-EV-803"}];

const METRICS = [
    { label: "Intelligence Index", value: "94/100", icon: Activity, iconColor: "text-teal-500", desc: "Overall maturity", descColor: "text-teal-400" },
    { label: "Silos Eliminated", value: "14", icon: XCircle, iconColor: "text-emerald-500", desc: "Legacy barriers removed" },
    { label: "Search Reduction", value: "-82%", icon: TrendingDown, iconColor: "text-blue-500", desc: "Time saved finding context" },
    { label: "Graph Queries", value: "14.2M", icon: Network, iconColor: "text-teal-500", desc: "Daily fabric navigations" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Intelligence Analytics"
        description="Measures the quantitative ROI of connected enterprise knowledge and graph traversal."
        icon={BarChart3}
        iconColor="text-teal-500"
        backHref="/intelligence-fabric"
        backLabel="REIF Command Center"
        searchPlaceholder="Search Knowledge Graph..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Enterprise Knowledge Metrics" headers={["Department", "Graph Utilization", "Time Saved (Monthly)", "Decision Velocity Increase", "Health", "Evidence"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.dept}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.util}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.time}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.vel}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.health}</td>

                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Verified Graph" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
