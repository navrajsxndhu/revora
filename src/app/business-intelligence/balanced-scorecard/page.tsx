import React from "react";
import { Compass, Scale, PieChart, HeartHandshake, Activity } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"per":"Financial","ind":"Gross Margin","cur":"78.4%","tar":"80.0%","status":"Warning","trace":"BSC-EV-501"},{"per":"Customer","ind":"Net Promoter Score","cur":"64","tar":"60","status":"Optimal","trace":"BSC-EV-502"},{"per":"Internal Process","ind":"Deployment Frequency","cur":"14/day","tar":"10/day","status":"Optimal","trace":"BSC-EV-503"}];

const METRICS = [
    { label: "Enterprise Balance", value: "92/100", icon: Scale, iconColor: "text-indigo-500", desc: "Holistic performance", descColor: "text-indigo-400" },
    { label: "Financial Health", value: "96/100", icon: PieChart, iconColor: "text-emerald-500", desc: "Revenue & efficiency" },
    { label: "Customer Trust", value: "94/100", icon: HeartHandshake, iconColor: "text-blue-500", desc: "NPS & Retention" },
    { label: "Internal Process", value: "88/100", icon: Activity, iconColor: "text-yellow-500", desc: "Operational drag" },
];

export default function Page() {
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
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.per}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.ind}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.cur}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.tar}</td>
                <td className="py-4 px-5"><StatusBadge status={row.status} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Verified" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
