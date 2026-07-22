import React from "react";
import { Flame, CheckCircle2, AlertTriangle, ShieldCheck } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"scen":"Region US-East Outage","targ":"Global DB Clusters","fail":"Total Datacenter Loss","res":"Failover to US-West (<2s)","cond":"Optimal","trace":"ERS-EV-901"},{"scen":"Stripe API 500 Errors","targ":"Checkout Pipeline","fail":"3rd Party Blackout","res":"Graceful Queueing","cond":"Optimal","trace":"ERS-EV-902"},{"scen":"Redis Cache Purge","targ":"User Sessions","fail":"Memory Exhaustion","res":"14% User Logout (Bug)","cond":"Warning","trace":"ERS-EV-903"}];

const METRICS = [
    { label: "Chaos Experiments", value: "142", icon: Flame, iconColor: "text-rose-500", desc: "Automated monthly", descColor: "text-rose-400" },
    { label: "Failover Success", value: "100%", icon: CheckCircle2, iconColor: "text-emerald-500", desc: "Simulated recovery" },
    { label: "Vulnerabilities", value: "3", icon: AlertTriangle, iconColor: "text-amber-500", desc: "Identified for fix" },
    { label: "DR Readiness", value: "Verified", icon: ShieldCheck, iconColor: "text-blue-500", desc: "Compliance status" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Enterprise Resilience Simulator"
        description="Predictive chaos engineering simulating disaster recovery and multi-region failovers before failures occur."
        icon={Flame}
        iconColor="text-indigo-400"
        backHref="/observability"
        backLabel="Observability Command Center"
        searchPlaceholder="Search Operational Signals..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Operational Telemetry" headers={["Simulation Scenario", "Target Subsystem", "Simulated Failure", "Recovery Result", "Condition", "Trace"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.scen}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.targ}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.fail}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.res}</td>
                <td className="py-4 px-5"><StatusBadge status={row.cond} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Observed" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
