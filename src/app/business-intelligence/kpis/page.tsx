import React from "react";
import { Target, Database, TrendingUp, ShieldCheck, AlertTriangle } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"name":"Net Revenue Retention","own":"VP Customer Success","val":"114%","tar":"110%","status":"Optimal","trace":"KPI-EV-101"},{"name":"Infrastructure Cost / User","own":"VP Engineering","val":"$0.42","tar":"< $0.50","status":"Optimal","trace":"KPI-EV-102"},{"name":"Enterprise Sales Cycle","own":"VP Sales","val":"94 Days","tar":"60 Days","status":"Critical","trace":"KPI-EV-103"}];

const METRICS = [
    { label: "Governed KPIs", value: "412", icon: Database, iconColor: "text-indigo-500", desc: "Across 14 departments", descColor: "text-indigo-400" },
    { label: "KPI Health", value: "84%", icon: TrendingUp, iconColor: "text-emerald-500", desc: "Meeting or beating targets" },
    { label: "Orphaned Metrics", value: "0", icon: ShieldCheck, iconColor: "text-blue-500", desc: "Strict ownership enforced" },
    { label: "Off Track", value: "14", icon: AlertTriangle, iconColor: "text-rose-500", desc: "Require executive review" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Enterprise KPI Registry"
        description="The constitutional registry for enterprise performance indicators with clear ownership and strategic alignment."
        icon={Target}
        iconColor="text-indigo-400"
        backHref="/business-intelligence"
        backLabel="BI Command Center"
        searchPlaceholder="Search Executive KPIs..."
        exportLabel="Export Report"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Strategic Intelligence" headers={["KPI Name", "Business Owner", "Current Value", "Target Value", "Status", "Trace"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">

                <td className="py-4 px-5"><StatusBadge status={row.status} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Verified" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
