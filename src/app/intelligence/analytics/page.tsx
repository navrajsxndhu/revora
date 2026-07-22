import React from "react";
import { BarChart2, BrainCircuit, CheckCircle2, Timer, HeartHandshake } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"met":"Guidance Acceptance Rate","cur":"88%","prev":"74%","impact":"Higher compliance adherence","status":"Passed","trace":"INA-EV-901"},{"met":"Average Decision Time","cur":"45s","prev":"1m 20s","impact":"Reduced operational drag","status":"Passed","trace":"INA-EV-902"},{"met":"Ignored Recommendations","cur":"12%","prev":"26%","impact":"Needs context tuning","status":"Warning","trace":"INA-EV-903"}];

const METRICS = [
    { label: "Intelligence Index", value: "94.8", icon: BrainCircuit, iconColor: "text-cyan-500", desc: "Overall RIOS Effectiveness", descColor: "text-cyan-400" },
    { label: "Recommendation", value: "88%", icon: CheckCircle2, iconColor: "text-emerald-500", desc: "Acceptance Rate" },
    { label: "Time to Decision", value: "-22%", icon: Timer, iconColor: "text-blue-500", desc: "Faster approvals" },
    { label: "User Trust", value: "High", icon: HeartHandshake, iconColor: "text-indigo-500", desc: "Survey metrics" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Intelligence Analytics"
        description="Measures the enterprise effectiveness of AI-driven recommendations and user trust."
        icon={BarChart2}
        iconColor="text-cyan-500"
        backHref="/intelligence"
        backLabel="Intelligence Command Center"
        searchPlaceholder="Search Intelligence Logs..."
        exportLabel="Export Report"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Intelligence Insights & Recommendations" headers={["Intelligence Metric", "Current Value", "Previous Period", "Impact on Governance", "Status", "Trace"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.met}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.cur}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.prev}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.impact}</td>
                <td className="py-4 px-5"><StatusBadge status={row.status} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Record Audited" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
