import React from "react";
import { Sparkles, Star, CheckCircle2, Zap, Smile } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"met":"Interaction Latency (INP)","targ":"< 100ms","curr":"42ms (Excellent)","imp":"Button clicks, Dropdowns","state":"Optimal","trace":"EPC-EV-701"},{"met":"Empty State Delight","targ":"Illustration + Action","curr":"100% Coverage","imp":"First-time user experience","state":"Optimal","trace":"EPC-EV-702"},{"met":"Loading Skeleton Sync","targ":"Matches Final UI Grid","curr":"98% Aligned","imp":"Perceived performance","state":"Optimal","trace":"EPC-EV-703"}];

const METRICS = [
    { label: "Premium Index", value: "9.4/10", icon: Star, iconColor: "text-orange-500", desc: "Overall UX Quality", descColor: "text-orange-400" },
    { label: "Layout Shifts (CLS)", value: "0.00", icon: CheckCircle2, iconColor: "text-emerald-500", desc: "Perfect visual stability" },
    { label: "Frame Drops", value: "0", icon: Zap, iconColor: "text-blue-500", desc: "60fps interactions" },
    { label: "User Satisfaction", value: "99%", icon: Smile, iconColor: "text-emerald-500", desc: "Internal survey score" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Experience Polish Center"
        description="Measures the emotional and qualitative premium feel of the enterprise interface."
        icon={Sparkles}
        iconColor="text-orange-500"
        backHref="/design-language"
        backLabel="REDL Command Center"
        searchPlaceholder="Search Design Tokens..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Design Governance Metrics" headers={["Polish Metric", "Target Baseline", "Current Measurement", "Impact Area", "State", "Trace"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">

                <td className="py-4 px-5"><StatusBadge status={row.state} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Verified Design" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
