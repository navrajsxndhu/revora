import React from "react";
import { ActivitySquare, Award, ShieldAlert, CheckSquare, Timer } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"set":"Payment Transactions","dim":"Accuracy","rule":"Must sum to Ledger Total","rate":"100%","status":"Optimal","trace":"DQG-EV-501"},{"set":"Marketing Leads","dim":"Completeness","rule":"Email field cannot be null","rate":"94%","status":"Warning","trace":"DQG-EV-502"},{"set":"Live Inventory API","dim":"Timeliness","rule":"Latency &lt; 500ms","rate":"99.9%","status":"Optimal","trace":"DQG-EV-503"}];

const METRICS = [
    { label: "Quality Score", value: "99.2%", icon: Award, iconColor: "text-indigo-500", desc: "Enterprise average", descColor: "text-indigo-400" },
    { label: "Anomalies Caught", value: "412", icon: ShieldAlert, iconColor: "text-emerald-500", desc: "Pre-ingestion" },
    { label: "Completeness", value: "99.9%", icon: CheckSquare, iconColor: "text-blue-500", desc: "Required fields present" },
    { label: "Timeliness", value: "&lt; 2s", icon: Timer, iconColor: "text-emerald-500", desc: "Data freshness" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Data Quality Governance"
        description="Continuously measures enterprise information quality against strict completeness and accuracy standards."
        icon={ActivitySquare}
        iconColor="text-indigo-400"
        backHref="/data-fabric"
        backLabel="Data Fabric Hub"
        searchPlaceholder="Search Data Assets..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Data Governance Records" headers={["Dataset", "Quality Dimension", "Validation Rule", "Pass Rate", "Status", "Trace"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">

                <td className="py-4 px-5"><StatusBadge status={row.status} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Governed" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
