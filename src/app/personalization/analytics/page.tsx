import React from "react";
import { LineChart, Target, Users, Smile, TrendingUp } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"dept":"Engineering","avg":"4.2 tweaks","foc":"82%","est":"2.4 Hours","status":"Optimal","trace":"PAN-EV-801"},{"dept":"Sales","avg":"1.4 tweaks","foc":"14%","est":"45 Minutes","status":"Warning","trace":"PAN-EV-802"},{"dept":"Leadership","avg":"2.8 tweaks","foc":"64%","est":"1.2 Hours","status":"Optimal","trace":"PAN-EV-803"}];

const METRICS = [
    { label: "Personalization ROI", value: "$2.4M", icon: Target, iconColor: "text-cyan-500", desc: "Est. time savings value", descColor: "text-cyan-400" },
    { label: "Active Customizers", value: "84%", icon: Users, iconColor: "text-emerald-500", desc: "Workforce engagement" },
    { label: "Fatigue Metrics", value: "Low", icon: Smile, iconColor: "text-blue-500", desc: "Navigation stress" },
    { label: "Focus ROI", value: "+14%", icon: TrendingUp, iconColor: "text-emerald-500", desc: "Throughput increase" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Personalization Analytics"
        description="Executive intelligence demonstrating the ROI of an adaptive, tailored workspace strategy."
        icon={LineChart}
        iconColor="text-cyan-500"
        backHref="/personalization"
        backLabel="RPAWPOS Command Center"
        searchPlaceholder="Search Personalization Logs..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Personalization & Adaptability Metrics" headers={["Department", "Avg Layout Customizations", "Focus Mode Adoption", "Est. Time Saved (Weekly)", "Status", "Evidence"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.dept}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.avg}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.foc}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.est}</td>
                <td className="py-4 px-5"><StatusBadge status={row.status} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Verified Runtime" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
