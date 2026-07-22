import React from "react";
import { Wand2, Timer, Accessibility, Zap, Layers } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"int":"Button Hover","trans":"background-color, transform","time":"150ms ease-in-out","purp":"Acknowledge interactivity","status":"Standard","trace":"MMS-EV-301"},{"int":"Modal Enter","trans":"opacity, scale","time":"200ms cubic-bezier","purp":"Focus user attention","status":"Standard","trace":"MMS-EV-302"},{"int":"Error Shake","trans":"transform (keyframes)","time":"400ms linear","purp":"Indicate invalid action","status":"Standard","trace":"MMS-EV-303"}];

const METRICS = [
    { label: "Motion Tokens", value: "14", icon: Timer, iconColor: "text-orange-500", desc: "Governed timing curves", descColor: "text-orange-400" },
    { label: "Reduced Motion", value: "Active", icon: Accessibility, iconColor: "text-emerald-500", desc: "Accessibility compliance" },
    { label: "Avg Animation Time", value: "200ms", icon: Zap, iconColor: "text-blue-500", desc: "Snappy responsiveness" },
    { label: "Staggered Lists", value: "84", icon: Layers, iconColor: "text-fuchsia-500", desc: "Progressive loading UIs" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Motion & Micro-Interaction Studio"
        description="Governance for every movement, ensuring motion communicates state, intent, and progress—never decoration."
        icon={Wand2}
        iconColor="text-orange-500"
        backHref="/design-language"
        backLabel="REDL Command Center"
        searchPlaceholder="Search Design Tokens..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Design Governance Metrics" headers={["Interaction", "CSS Transition", "Timing Function", "Purpose", "Status", "Execution ID"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.int}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.trans}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.time}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.purp}</td>
                <td className="py-4 px-5"><StatusBadge status={row.status} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Verified Design" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
