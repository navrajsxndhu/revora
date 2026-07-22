import React from "react";
import { BarChart2, LineChart, CheckCircle2, Layers, TrendingDown } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"ass":"PremiumTable (v2.4)","imp":"14.2M","adopt":"100% of Grids","orph":"0 Legacy Tables","health":"Optimal","trace":"DAN-EV-801"},{"ass":"Design Tokens (Color)","imp":"1.4B","adopt":"99.8% of UI","orph":"14 hex codes (Tech Debt)","health":"Optimal","trace":"DAN-EV-802"},{"ass":"Executive Modal","imp":"412K","adopt":"100% of Approvals","orph":"0 Custom Overlays","health":"Optimal","trace":"DAN-EV-803"}];

const METRICS = [
    { label: "Design System ROI", value: "$4.2M", icon: LineChart, iconColor: "text-orange-500", desc: "Saved engineering hours", descColor: "text-orange-400" },
    { label: "Visual Debt", value: "Near Zero", icon: CheckCircle2, iconColor: "text-emerald-500", desc: "Hardcoded styles removed" },
    { label: "Component Reuse", value: "94%", icon: Layers, iconColor: "text-blue-500", desc: "Platform efficiency" },
    { label: "Codebase Shrink", value: "-14%", icon: TrendingDown, iconColor: "text-emerald-500", desc: "Removed custom CSS" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Design Analytics"
        description="Executive intelligence demonstrating the ROI and adoption of the enterprise design language."
        icon={BarChart2}
        iconColor="text-orange-500"
        backHref="/design-language"
        backLabel="REDL Command Center"
        searchPlaceholder="Search Design Tokens..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Design Governance Metrics" headers={["Design Asset", "Weekly Impressions", "Adoption Rate", "Orphaned Instances", "Health", "Evidence"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.ass}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.imp}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.adopt}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.orph}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.health}</td>

                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Verified Design" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
