import React from "react";
import { Network, Waypoints, ShieldCheck, AlertTriangle, Globe } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"org":"Checkout Service","targ":"Stripe API Gateway","type":"Synchronous REST","imp":"Tier 0 (Revenue Block)","state":"Active","trace":"ODM-EV-601"},{"org":"User Profile Load","targ":"Redis Cache Cluster","type":"Asynchronous PubSub","imp":"Tier 2 (Latency Spikes)","state":"Active","trace":"ODM-EV-602"},{"org":"Reporting Engine","targ":"Legacy DB (Deprecating)","type":"Batch Query","imp":"Tier 3 (Delayed Reports)","state":"Warning","trace":"ODM-EV-603"}];

const METRICS = [
    { label: "Mapped Edges", value: "14.2K", icon: Waypoints, iconColor: "text-indigo-500", desc: "Service connections", descColor: "text-indigo-400" },
    { label: "Circular Dependencies", value: "0", icon: ShieldCheck, iconColor: "text-emerald-500", desc: "Constitutional block" },
    { label: "Critical Paths", value: "14", icon: AlertTriangle, iconColor: "text-rose-500", desc: "Zero redundancy" },
    { label: "External APIs", value: "42", icon: Globe, iconColor: "text-blue-500", desc: "3rd party reliance" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Operational Dependency Map"
        description="Visualizes real-time architectural dependencies to trace cascading failures across the enterprise ecosystem."
        icon={Network}
        iconColor="text-indigo-400"
        backHref="/observability"
        backLabel="Observability Command Center"
        searchPlaceholder="Search Operational Signals..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Operational Telemetry" headers={["Origin Service", "Dependent Target", "Interaction Type", "Failure Impact", "State", "Execution ID"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.org}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.targ}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.type}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.imp}</td>
                <td className="py-4 px-5"><StatusBadge status={row.state} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Observed" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
