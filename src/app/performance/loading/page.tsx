import React from "react";
import { Loader2, Eye, Box, EyeOff, XCircle } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"route":"/engineering/audit","strat":"Streaming Skeleton","paint":"400ms","hyd":"1.2s","perf":"Optimal","trace":"ILE-EV-201"},{"route":"/intelligence/decisions","strat":"Progressive Hydration","paint":"300ms","hyd":"1.8s","perf":"Optimal","trace":"ILE-EV-202"},{"route":"/finance/ledger","strat":"Server Component Chunking","paint":"800ms","hyd":"2.4s","perf":"Sub-Optimal","trace":"ILE-EV-203"}];

const METRICS = [
    { label: "Perceived Load Time", value: "0.8s", icon: Eye, iconColor: "text-cyan-500", desc: "Visual completeness", descColor: "text-cyan-400" },
    { label: "Skeleton Coverage", value: "92%", icon: Box, iconColor: "text-emerald-500", desc: "Async data placeholders" },
    { label: "Blank Screen Time", value: "0ms", icon: EyeOff, iconColor: "text-blue-500", desc: "Always rendering UI" },
    { label: "Indefinite Spinners", value: "0", icon: XCircle, iconColor: "text-emerald-500", desc: "Banned pattern" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Intelligent Loading Experience"
        description="Transforms waiting into progress via progressive rendering and skeletal layouts."
        icon={Loader2}
        iconColor="text-cyan-500"
        backHref="/performance"
        backLabel="RPMDOS Command Center"
        searchPlaceholder="Search Performance Logs..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Performance & Motion Metrics" headers={["Route / Dashboard", "Loading Strategy", "Initial Paint", "Full Hydration", "Performance", "Evidence"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.route}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.strat}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.paint}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.hyd}</td>
                <td className="py-4 px-5"><StatusBadge status={row.perf} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Verified Runtime" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
