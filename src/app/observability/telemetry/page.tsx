import React from "react";
import { RadioTower, Activity, Waypoints, Bot, ShieldCheck } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"src":"Payments API Cluster","type":"Trace (OpenTelemetry)","vol":"14,204 spans/s","dom":"Commerce","state":"Optimal","trace":"UTE-EV-101"},{"src":"Auth0 Identity Provider","type":"Audit Logs","vol":"840 lines/s","dom":"Security","state":"Optimal","trace":"UTE-EV-102"},{"src":"E-commerce Gateway","type":"Metrics (Latency)","vol":"p99 &gt; 2.4s","dom":"Commerce","state":"Warning","trace":"UTE-EV-103"}];

const METRICS = [
    { label: "Ingestion Rate", value: "1.4M/s", icon: Activity, iconColor: "text-indigo-500", desc: "Enterprise wide signals", descColor: "text-indigo-400" },
    { label: "Trace Completeness", value: "99.9%", icon: Waypoints, iconColor: "text-emerald-500", desc: "Distributed context" },
    { label: "Anomalies Detected", value: "42", icon: Bot, iconColor: "text-blue-500", desc: "AI-flagged deviations" },
    { label: "Retention Coverage", value: "100%", icon: ShieldCheck, iconColor: "text-emerald-500", desc: "Policy enforced" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Unified Telemetry Explorer"
        description="The constitutional registry for governed metrics, logs, traces, and synthetic operational signals."
        icon={RadioTower}
        iconColor="text-indigo-400"
        backHref="/observability"
        backLabel="Observability Command Center"
        searchPlaceholder="Search Operational Signals..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Operational Telemetry" headers={["Telemetry Source", "Signal Type", "Volume / Rate", "Business Domain", "State", "Trace"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.src}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.type}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.vol}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.dom}</td>
                <td className="py-4 px-5"><StatusBadge status={row.state} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Observed" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
