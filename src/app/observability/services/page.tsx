import React from "react";
import { HeartPulse, CheckCircle2, AlertTriangle, Timer, Layers } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"srv":"Authentication Core","tier":"Tier 0","avail":"100.00%","lat":"42ms","health":"Healthy","trace":"ESH-EV-201"},{"srv":"Checkout Processing","tier":"Tier 1","avail":"99.92%","lat":"1.2s","health":"Degraded","trace":"ESH-EV-202"},{"srv":"Legacy Reporting DB","tier":"Tier 3","avail":"84.2%","lat":"14s","health":"Failed","trace":"ESH-EV-203"}];

const METRICS = [
    { label: "Global Availability", value: "99.99%", icon: CheckCircle2, iconColor: "text-indigo-500", desc: "Rolling 30 days", descColor: "text-indigo-400" },
    { label: "Degraded Services", value: "2", icon: AlertTriangle, iconColor: "text-rose-500", desc: "Active investigations" },
    { label: "Avg Latency (p95)", value: "142ms", icon: Timer, iconColor: "text-blue-500", desc: "Across core paths" },
    { label: "Services Mapped", value: "1,402", icon: Layers, iconColor: "text-emerald-500", desc: "Fully observable" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Enterprise Service Health"
        description="The operational inventory mapping availability, latency, and error rates to direct business impact."
        icon={HeartPulse}
        iconColor="text-indigo-400"
        backHref="/observability"
        backLabel="Observability Command Center"
        searchPlaceholder="Search Operational Signals..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Operational Telemetry" headers={["Service Name", "Tier", "Availability", "Current Latency", "Health", "Execution ID"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.srv}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.tier}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.avail}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.lat}</td>
                <td className="py-4 px-5"><StatusBadge status={row.health} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Observed" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
