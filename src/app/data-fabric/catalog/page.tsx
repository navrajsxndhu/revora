import React from "react";
import { TableProperties, Database, UserCheck, ShieldCheck, Plug } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"asset":"Customer_Profile_DB","type":"PostgreSQL DB","steward":"Jane Doe (CRM)","purp":"Core Identity Auth","class":"Restricted","trace":"EDC-EV-101"},{"asset":"Q3_Financial_Summary","type":"Tableau Dashboard","steward":"Finance Dept","purp":"Executive Reporting","class":"Confidential","trace":"EDC-EV-102"},{"asset":"Marketing_Site_Analytics","type":"Data Warehouse","steward":"Growth Team","purp":"Web Traffic Trends","class":"Internal","trace":"EDC-EV-103"}];

const METRICS = [
    { label: "Registered Assets", value: "412K", icon: Database, iconColor: "text-indigo-500", desc: "Across all platforms", descColor: "text-indigo-400" },
    { label: "Steward Coverage", value: "98%", icon: UserCheck, iconColor: "text-emerald-500", desc: "Assigned ownership" },
    { label: "Unclassified Data", value: "0", icon: ShieldCheck, iconColor: "text-blue-500", desc: "Constitutional block" },
    { label: "API Endpoints", value: "14K", icon: Plug, iconColor: "text-emerald-500", desc: "Documented & Governed" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Enterprise Data Catalog"
        description="The constitutional registry for all enterprise databases, APIs, reports, and AI datasets."
        icon={TableProperties}
        iconColor="text-indigo-400"
        backHref="/data-fabric"
        backLabel="Data Fabric Hub"
        searchPlaceholder="Search Data Assets..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Data Governance Records" headers={["Asset Name", "Asset Type", "Data Steward", "Business Purpose", "Classification", "Execution ID"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.asset}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.type}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.steward}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.purp}</td>
                <td className="py-4 px-5"><StatusBadge status={row.class} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Governed" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
