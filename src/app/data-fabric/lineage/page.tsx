import React from "react";
import { Network, Waypoints, CheckCircle2, AlertTriangle, Layers } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"targ":"Executive Revenue Dashboard","src":"Stripe API, SAP ERP","int":"Airflow -> Snowflake","down":"14 Key Reports","status":"Active","trace":"DLE-EV-201"},{"targ":"ML Fraud Detection Model","src":"User Events Stream","int":"Kafka -> Spark ML","down":"Payment Gateway","status":"Active","trace":"DLE-EV-202"},{"targ":"Legacy Support Portal","src":"Zendesk Export (CSV)","int":"Manual Upload (Flagged)","down":"None","status":"Warning","trace":"DLE-EV-203"}];

const METRICS = [
    { label: "Pipeline Nodes", value: "1.4M", icon: Waypoints, iconColor: "text-indigo-500", desc: "Tracked dependencies", descColor: "text-indigo-400" },
    { label: "ETL Jobs Mapped", value: "100%", icon: CheckCircle2, iconColor: "text-emerald-500", desc: "Full traceability" },
    { label: "Orphaned Reports", value: "14", icon: AlertTriangle, iconColor: "text-rose-500", desc: "Pending deprecation" },
    { label: "Lineage Depth", value: "12 Tiers", icon: Layers, iconColor: "text-blue-500", desc: "Avg upstream hops" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Data Lineage Explorer"
        description="Visualizes the flow of information across source systems, ETL pipelines, and downstream consumers."
        icon={Network}
        iconColor="text-indigo-400"
        backHref="/data-fabric"
        backLabel="Data Fabric Hub"
        searchPlaceholder="Search Data Assets..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Data Governance Records" headers={["Target Asset", "Primary Source", "Intermediate Transforms", "Downstream Impact", "Status", "Trace"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.targ}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.src}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.int}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.down}</td>
                <td className="py-4 px-5"><StatusBadge status={row.status} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Governed" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
