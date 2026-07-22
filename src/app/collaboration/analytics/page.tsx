import React from "react";
import { BarChart2, Activity, Network, Timer, TrendingDown } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"dept":"Engineering","health":"98/100","cross":"64%","async":"High","status":"Verified","trace":"COA-EV-801"},{"dept":"Sales & Marketing","health":"94/100","cross":"42%","async":"Medium","status":"Verified","trace":"COA-EV-802"},{"dept":"Legal & Compliance","health":"82/100","cross":"88%","async":"Low","status":"Review Required","trace":"COA-EV-803"}];

const METRICS = [
    { label: "Engagement Score", value: "92.4", icon: Activity, iconColor: "text-cyan-500", desc: "Enterprise wide index", descColor: "text-cyan-400" },
    { label: "Silo Breaking", value: "+14%", icon: Network, iconColor: "text-emerald-500", desc: "Cross-dept interactions" },
    { label: "Response Speed", value: "1.2h", icon: Timer, iconColor: "text-blue-500", desc: "Average internal reply" },
    { label: "Meeting Fatigue", value: "-8%", icon: TrendingDown, iconColor: "text-emerald-500", desc: "Reduction MoM" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Collaboration Analytics"
        description="Measuring response times, silo-breaking metrics, and organizational engagement."
        icon={BarChart2}
        iconColor="text-cyan-500"
        backHref="/collaboration"
        backLabel="RCCOS Command Center"
        searchPlaceholder="Search Communications..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Collaboration & Communication Metrics" headers={["Department", "Collaboration Health", "Cross-Team %", "Async Adoption", "Status", "Trace"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.dept}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.health}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.cross}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.async}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.status}</td>

                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Record Audited" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
