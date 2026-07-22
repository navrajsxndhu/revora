import React from "react";
import { ListChecks, Database, Layers, Gauge, UserCheck } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"id":"WF-SEC-099","own":"Security Office","risk":"Critical","freq":"Daily","state":"Active","trace":"EAR-EV-901"},{"id":"WF-HR-042","own":"HR Operations","risk":"Medium","freq":"Hourly","state":"Active","trace":"EAR-EV-902"},{"id":"WF-FIN-014","own":"Finance Dept","risk":"High","freq":"Monthly","state":"Active","trace":"EAR-EV-903"}];

const METRICS = [
    { label: "Registered Workflows", value: "1,402", icon: Database, iconColor: "text-indigo-500", desc: "Active in production", descColor: "text-indigo-400" },
    { label: "Total Steps", value: "11,776", icon: Layers, iconColor: "text-blue-500", desc: "Across all workflows" },
    { label: "Risk Ratings", value: "Calculated", icon: Gauge, iconColor: "text-emerald-500", desc: "Continuous scoring" },
    { label: "Orphaned Workflows", value: "0", icon: UserCheck, iconColor: "text-emerald-500", desc: "Strict ownership" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Enterprise Automation Registry"
        description="The immutable inventory of every active automation policy and workflow executing in the enterprise."
        icon={ListChecks}
        iconColor="text-indigo-400"
        backHref="/orchestration"
        backLabel="Orchestration Hub"
        searchPlaceholder="Search Orchestrations..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Orchestration Metrics" headers={["Workflow ID", "Business Owner", "Risk Classification", "Execution Frequency", "State", "Execution ID"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.id}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.own}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.risk}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.freq}</td>
                <td className="py-4 px-5"><StatusBadge status={row.state} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Orchestrated" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
