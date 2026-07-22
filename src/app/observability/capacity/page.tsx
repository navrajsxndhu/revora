import React from "react";
import { HardDrive, Cpu, Database, Maximize, LineChart } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"pool":"US-East Kubernetes Cluster","load":"82%","vel":"+4% / week","out":"4 Weeks","health":"Warning","trace":"CPI-EV-501"},{"pool":"Global Media CDN","load":"41%","vel":"Stable","out":"&gt; 2 Years","health":"Healthy","trace":"CPI-EV-502"},{"pool":"Archival Storage Tier","load":"98%","vel":"+1% / day","out":"2 Days","health":"Critical","trace":"CPI-EV-503"}];

const METRICS = [
    { label: "Compute Utilization", value: "64%", icon: Cpu, iconColor: "text-indigo-500", desc: "Global average", descColor: "text-indigo-400" },
    { label: "Storage Runway", value: "14 Months", icon: Database, iconColor: "text-emerald-500", desc: "Before exhaustion" },
    { label: "Scaling Events", value: "412", icon: Maximize, iconColor: "text-blue-500", desc: "Past 24 hours" },
    { label: "Cost Efficiency", value: "92/100", icon: LineChart, iconColor: "text-emerald-500", desc: "Resource optimization" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Capacity & Performance Intelligence"
        description="Predictive governance forecasting infrastructure demands and preventing resource exhaustion."
        icon={HardDrive}
        iconColor="text-indigo-400"
        backHref="/observability"
        backLabel="Observability Command Center"
        searchPlaceholder="Search Operational Signals..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Operational Telemetry" headers={["Resource Pool", "Current Load", "Growth Velocity", "Forecasted Exhaustion", "Health", "Trace"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.pool}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.load}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.vel}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.out}</td>
                <td className="py-4 px-5"><StatusBadge status={row.health} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Observed" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
