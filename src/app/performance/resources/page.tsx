import React from "react";
import { Cpu, FileCode, Network, Database, ShieldCheck } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"res":"Core Framework (Next.js)","load":"78kb (gz)","strat":"Turbopack + Minify","net":"Edge CDN","perf":"Optimal","trace":"ROC-EV-601"},{"res":"Lucide Icons","load":"12kb (gz)","strat":"Tree-shaking","net":"Edge CDN","perf":"Optimal","trace":"ROC-EV-602"},{"res":"Chart.js Render Library","load":"145kb (gz)","strat":"Dynamic Lazy Import","net":"Client Request","perf":"Optimal","trace":"ROC-EV-603"}];

const METRICS = [
    { label: "JS Bundle Size", value: "142kb", icon: FileCode, iconColor: "text-cyan-500", desc: "Initial Gzip payload", descColor: "text-cyan-400" },
    { label: "Code Splitting", value: "98%", icon: Network, iconColor: "text-emerald-500", desc: "Route-based chunks" },
    { label: "Asset Cache Hit", value: "94%", icon: Database, iconColor: "text-blue-500", desc: "Edge CDN efficiency" },
    { label: "Memory Leaks", value: "0", icon: ShieldCheck, iconColor: "text-emerald-500", desc: "Client stability verified" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Resource Optimization Center"
        description="Enterprise governance for frontend efficiency, bundle size, and memory utilization."
        icon={Cpu}
        iconColor="text-cyan-500"
        backHref="/performance"
        backLabel="RPMDOS Command Center"
        searchPlaceholder="Search Performance Logs..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Performance & Motion Metrics" headers={["Resource Type", "Total Payload", "Optimization Strat", "Delivery Network", "Performance", "Execution ID"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.res}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.load}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.strat}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.net}</td>
                <td className="py-4 px-5"><StatusBadge status={row.perf} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Verified Runtime" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
