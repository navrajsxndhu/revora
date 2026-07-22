import React from "react";
import { PieChart, Activity, TrendingDown, CheckCircle2, Trash } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"dept":"Marketing & Sales","adopt":"100%","qual":"+14% (YoY)","orph":"14.2 TB","state":"Optimal","trace":"DIA-EV-801"},{"dept":"Engineering","adopt":"98%","qual":"+4% (YoY)","orph":"412 GB","state":"Optimal","trace":"DIA-EV-802"},{"dept":"Legal & Compliance","adopt":"100%","qual":"Stable (99.9%)","orph":"0 GB","state":"Optimal","trace":"DIA-EV-803"}];

const METRICS = [
    { label: "Data Trust Index", value: "94/100", icon: Activity, iconColor: "text-indigo-500", desc: "Enterprise wide", descColor: "text-indigo-400" },
    { label: "Duplication Drop", value: "-42%", icon: TrendingDown, iconColor: "text-emerald-500", desc: "Storage costs saved" },
    { label: "Search Success", value: "98%", icon: CheckCircle2, iconColor: "text-blue-500", desc: "Time to data" },
    { label: "Stale Assets", value: "&lt; 1%", icon: Trash, iconColor: "text-emerald-500", desc: "Aggressive deprecation" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Data Intelligence Analytics"
        description="Measures organizational data maturity, tracking the ROI of enterprise information governance."
        icon={PieChart}
        iconColor="text-indigo-400"
        backHref="/data-fabric"
        backLabel="Data Fabric Hub"
        searchPlaceholder="Search Data Assets..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Data Governance Records" headers={["Department", "Catalog Adoption", "Quality Improvement", "Orphaned Data Removed", "State", "Trace"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">

                <td className="py-4 px-5"><StatusBadge status={row.state} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Governed" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
