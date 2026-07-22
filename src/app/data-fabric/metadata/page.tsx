import React from "react";
import { FileJson, BookOpen, TableProperties, Bot, AlertTriangle } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"asset":"users_table_v2","fld":"ssn_hash","term":"Social Security Number","desc":"Cryptographically hashed SSN for tax purposes.","class":"Restricted","trace":"MIE-EV-401"},{"asset":"sales_q3_raw","fld":"mrr_calc","term":"Monthly Recurring Rev","desc":"Aggregated subscription revenue per account.","class":"Confidential","trace":"MIE-EV-402"},{"asset":"public_api_v1","fld":"server_status","term":"Uptime Indicator","desc":"Boolean indicating system availability.","class":"Public","trace":"MIE-EV-403"}];

const METRICS = [
    { label: "Business Glossary", value: "14.2K", icon: BookOpen, iconColor: "text-indigo-500", desc: "Defined terms", descColor: "text-indigo-400" },
    { label: "Schema Coverage", value: "98%", icon: TableProperties, iconColor: "text-emerald-500", desc: "Columns documented" },
    { label: "Auto-Discovery", value: "Active", icon: Bot, iconColor: "text-blue-500", desc: "AI classification" },
    { label: "Orphaned Columns", value: "12", icon: AlertTriangle, iconColor: "text-rose-500", desc: "Flagged for review" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Metadata Intelligence Engine"
        description="Translates technical schemas into understandable business intelligence and clear governance definitions."
        icon={FileJson}
        iconColor="text-indigo-400"
        backHref="/data-fabric"
        backLabel="Data Fabric Hub"
        searchPlaceholder="Search Data Assets..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Data Governance Records" headers={["Physical Asset", "Technical Field", "Business Term", "Description", "Classification", "Execution ID"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.asset}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.fld}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.term}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.desc}</td>
                <td className="py-4 px-5"><StatusBadge status={row.class} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Governed" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
