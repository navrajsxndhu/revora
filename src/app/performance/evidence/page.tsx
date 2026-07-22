import React from "react";
import { History, Database, Zap, ShieldCheck, GitCommit } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"id":"PRF-E-1044","time":"2026-07-22T09:14:00Z","opt":"Lazy Loaded Chart.js","imp":"Bundle Size -145kb","gov":"Policy: Asset Splitting","trace":"EV-P-1044"},{"id":"PRF-E-1043","time":"2026-07-22T09:12:15Z","opt":"Implemented Skeletons","imp":"Blank Screen -100%","gov":"Policy: Progressive UI","trace":"EV-P-1043"},{"id":"PRF-E-1042","time":"2026-07-22T09:05:00Z","opt":"Optimistic UI on Submit","imp":"Feedback Latency -400ms","gov":"Policy: 100ms Response","trace":"EV-P-1042"}];

const METRICS = [
    { label: "Audit Records", value: "8.4M", icon: Database, iconColor: "text-cyan-500", desc: "Performance snapshots", descColor: "text-cyan-400" },
    { label: "Optimization Events", value: "412", icon: Zap, iconColor: "text-emerald-500", desc: "Engineered improvements" },
    { label: "Ledger Health", value: "Verified", icon: ShieldCheck, iconColor: "text-blue-500", desc: "Hashes matching" },
    { label: "CI/CD Traces", value: "100%", icon: GitCommit, iconColor: "text-indigo-500", desc: "Linked to deployments" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Performance Evidence Ledger"
        description="Immutable cryptographic trails for all performance optimizations and architectural speed improvements."
        icon={History}
        iconColor="text-cyan-500"
        backHref="/performance"
        backLabel="RPMDOS Command Center"
        searchPlaceholder="Search Performance Logs..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Performance & Motion Metrics" headers={["Event ID", "Timestamp", "Optimization Applied", "Impact Metric", "Constitutional Governance", "EvidenceBadge"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.id}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.time}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.opt}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.imp}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.gov}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.trace}</td>


            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
