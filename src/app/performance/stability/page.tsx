import React from "react";
import { Layers, CheckCircle2, Image, Type, TrendingDown } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"route":"/intelligence/analytics","cls":"0.01","src":"None","scroll":"60 FPS","status":"Optimal","trace":"VSG-EV-501"},{"route":"/engineering/audit","cls":"0.04","src":"Dynamic Table Load","scroll":"58 FPS","status":"Optimal","trace":"VSG-EV-502"},{"route":"/collaboration/spaces","cls":"0.12","src":"Late Image Hydration","scroll":"45 FPS","status":"Degraded","trace":"VSG-EV-503"}];

const METRICS = [
    { label: "Avg CLS Score", value: "0.02", icon: CheckCircle2, iconColor: "text-cyan-500", desc: "Near-zero layout shift", descColor: "text-cyan-400" },
    { label: "Image Reserves", value: "100%", icon: Image, iconColor: "text-emerald-500", desc: "Pre-allocated spaces" },
    { label: "Font Flash (FOUT)", value: "0ms", icon: Type, iconColor: "text-blue-500", desc: "Invisible font loading" },
    { label: "Scroll Jank", value: "0.4%", icon: TrendingDown, iconColor: "text-amber-500", desc: "Smooth rendering" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Visual Stability Governance"
        description="Preventing disruptive layout shifts and ensuring the interface never jumps unexpectedly."
        icon={Layers}
        iconColor="text-cyan-500"
        backHref="/performance"
        backLabel="RPMDOS Command Center"
        searchPlaceholder="Search Performance Logs..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Performance & Motion Metrics" headers={["Dashboard Route", "Cumulative Layout Shift", "Largest Shift Source", "Scroll Performance", "Status", "Trace"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.route}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.cls}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.src}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.scroll}</td>
                <td className="py-4 px-5"><StatusBadge status={row.status} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Verified Runtime" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
