import React from "react";
import { History, Database, ShieldCheck, Download, FileSignature } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"id":"DF-E-9901","time":"2026-07-22T10:19:00Z","act":"AI Governance Engine","acti":"Classified Dataset as PII","gov":"Policy: Auto-Discovery","trace":"EV-DF-9901"},{"id":"DF-E-9902","time":"2026-07-22T10:18:42Z","act":"jdoe@revora","acti":"Certified Q3 Financial Dashboard","gov":"Policy: Asset Certification","trace":"EV-DF-9902"},{"id":"DF-E-9903","time":"2026-07-22T10:15:10Z","act":"Data Quality Service","acti":"Flagged completeness drop (94%)","gov":"Policy: Minimum Quality SLA","trace":"EV-DF-9903"}];

const METRICS = [
    { label: "Data Logs", value: "1.4B", icon: Database, iconColor: "text-indigo-500", desc: "Cryptographic records", descColor: "text-indigo-400" },
    { label: "Ledger Integrity", value: "Verified", icon: ShieldCheck, iconColor: "text-emerald-500", desc: "SHA-256 Validated" },
    { label: "Audit Pull Latency", value: "1.4s", icon: Download, iconColor: "text-blue-500", desc: "Instant compliance" },
    { label: "Classification Attests", value: "14.2K", icon: FileSignature, iconColor: "text-emerald-500", desc: "Steward signed" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Data Evidence Ledger"
        description="Immutable ledger recording every dataset registration, quality validation, and privacy classification change."
        icon={History}
        iconColor="text-indigo-400"
        backHref="/data-fabric"
        backLabel="Data Fabric Hub"
        searchPlaceholder="Search Data Assets..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Data Governance Records" headers={["Event ID", "Timestamp", "Actor / Steward", "Data Governance Action", "Constitutional Governance", "EvidenceBadge"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.id}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.time}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.act}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.acti}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.gov}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.trace}</td>


            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
