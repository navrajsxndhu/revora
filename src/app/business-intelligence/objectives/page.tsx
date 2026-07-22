import React from "react";
import { Crosshair, Target, PieChart, Network, AlertTriangle } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"obj":"Expand into EMEA Markets","spon":"Chief Revenue Officer","prog":"42%","conf":"High","status":"On Track","trace":"OKR-EV-201"},{"obj":"Zero-Trust Architecture","spon":"Chief Information Security Officer","prog":"84%","conf":"High","status":"On Track","trace":"OKR-EV-202"},{"obj":"Reduce Cloud Spend by 15%","spon":"Chief Financial Officer","prog":"4%","conf":"Low","status":"Off Track","trace":"OKR-EV-203"}];

const METRICS = [
    { label: "Active Objectives", value: "14", icon: Target, iconColor: "text-indigo-500", desc: "Corporate Tier 1", descColor: "text-indigo-400" },
    { label: "Overall Progress", value: "64%", icon: PieChart, iconColor: "text-blue-500", desc: "Q3 Completion" },
    { label: "Aligned Initiatives", value: "142", icon: Network, iconColor: "text-emerald-500", desc: "Across business units" },
    { label: "At Risk OKRs", value: "2", icon: AlertTriangle, iconColor: "text-rose-500", desc: "Pending intervention" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Strategic Objectives & OKR Center"
        description="Connects enterprise strategy with operational execution to ensure organizational alignment."
        icon={Crosshair}
        iconColor="text-indigo-400"
        backHref="/business-intelligence"
        backLabel="BI Command Center"
        searchPlaceholder="Search Executive KPIs..."
        exportLabel="Export Report"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Strategic Intelligence" headers={["Strategic Objective", "Executive Sponsor", "Progress", "Confidence", "Status", "Execution ID"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.obj}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.spon}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.prog}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.status}</td>
                <td className="py-4 px-5"><StatusBadge status={row.conf} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Verified" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
