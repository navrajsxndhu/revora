import React from "react";
import { BarChart2, Activity, TrendingDown, Timer, Search } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"met":"Natural Language Adoption","val":"64%","trend":"+12%","driver":"Command Palette UI","status":"Verified","trace":"ESA-EV-801"},{"met":"Search Speed (P99)","val":"124ms","trend":"-8ms","driver":"Index Optimization","status":"Verified","trace":"ESA-EV-802"},{"met":"Knowledge Gaps (Zero Hits)","val":"412","trend":"-4%","driver":"Missing Documentation","status":"Review Required","trace":"ESA-EV-803"}];

const METRICS = [
    { label: "Discovery Index", value: "94.2", icon: Activity, iconColor: "text-cyan-500", desc: "Enterprise search health", descColor: "text-cyan-400" },
    { label: "Zero-Result Rate", value: "0.8%", icon: TrendingDown, iconColor: "text-emerald-500", desc: "Queries without hits" },
    { label: "Avg TTR", value: "4.2s", icon: Timer, iconColor: "text-blue-500", desc: "Time to result click" },
    { label: "Top Query", value: "'Policies'", icon: Search, iconColor: "text-indigo-500", desc: "32k searches/day" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Enterprise Search Analytics"
        description="Executive reporting on organizational knowledge accessibility and discovery efficiency."
        icon={BarChart2}
        iconColor="text-cyan-500"
        backHref="/search"
        backLabel="RSKIOS Command Center"
        searchPlaceholder="Search Knowledge Context..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Search & Discovery Metrics" headers={["Search Metric", "Current Value", "MoM Trend", "Primary Driver", "Status", "Evidence"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.met}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.val}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.trend}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.driver}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.status}</td>

                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Verified Result" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
