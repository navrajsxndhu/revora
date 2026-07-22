import React from "react";
import { LineChart, Activity, TrendingUp, Users, TrendingDown } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"dept":"Executive Ops","mob":"94%","tab":"88%","trans":"14.2","status":"Optimal","trace":"CAN-EV-801"},{"dept":"Field Engineering","mob":"100%","tab":"100%","trans":"22.4","status":"Optimal","trace":"CAN-EV-802"},{"dept":"Finance Analytics","mob":"12%","tab":"4%","trans":"1.2","status":"Warning","trace":"CAN-EV-803"}];

const METRICS = [
    { label: "Continuity Index", value: "94/100", icon: Activity, iconColor: "text-indigo-500", desc: "Seamless workflow score", descColor: "text-indigo-400" },
    { label: "Mobility ROI", value: "$8.4M", icon: TrendingUp, iconColor: "text-emerald-500", desc: "Est. productivity gain" },
    { label: "Avg Devices/User", value: "2.8", icon: Users, iconColor: "text-blue-500", desc: "Enterprise ecosystem" },
    { label: "Handoff Delays", value: "-84%", icon: TrendingDown, iconColor: "text-emerald-500", desc: "Friction eliminated" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Continuity Analytics"
        description="Executive intelligence demonstrating the ROI of a seamless multi-device workforce strategy."
        icon={LineChart}
        iconColor="text-indigo-500"
        backHref="/continuity"
        backLabel="RMDCOS Command Center"
        searchPlaceholder="Search Continuity Logs..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Multi-Device Continuity Metrics" headers={["Department", "Mobile Adoption", "Tablet Usage", "Cross-Device Transitions (Daily)", "Status", "Evidence"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.dept}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.mob}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.tab}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.trans}</td>
                <td className="py-4 px-5"><StatusBadge status={row.status} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Verified Sync" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
