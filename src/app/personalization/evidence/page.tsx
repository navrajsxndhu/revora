import React from "react";
import { History, Database, ShieldCheck, Zap, Search } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"id":"PER-E-1204","time":"2026-07-22T09:14:00Z","user":"U-8842","act":"Enabled Deep Focus Mode","gov":"Policy: Attention Mgmt","trace":"EV-P-1204"},{"id":"PER-E-1203","time":"2026-07-22T09:12:15Z","user":"U-1042","act":"Pinned \"Approvals\" Widget","gov":"Policy: Custom Layouts","trace":"EV-P-1203"},{"id":"PER-E-1202","time":"2026-07-22T09:05:00Z","user":"System","act":"Auto-Applied SecOps Template","gov":"Policy: Role Defaults","trace":"EV-P-1202"}];

const METRICS = [
    { label: "Adaptive Logs", value: "8.4M", icon: Database, iconColor: "text-cyan-500", desc: "Workspace mutations", descColor: "text-cyan-400" },
    { label: "Template Hashes", value: "Verified", icon: ShieldCheck, iconColor: "text-emerald-500", desc: "Integrity confirmed" },
    { label: "Sync Latency", value: "12ms", icon: Zap, iconColor: "text-blue-500", desc: "Cross-device state" },
    { label: "Audit Queries", value: "412", icon: Search, iconColor: "text-indigo-500", desc: "Compliance checks" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Personalization Evidence Ledger"
        description="Immutable cryptographic trails for all adaptive changes and workspace personalization actions."
        icon={History}
        iconColor="text-cyan-500"
        backHref="/personalization"
        backLabel="RPAWPOS Command Center"
        searchPlaceholder="Search Personalization Logs..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Personalization & Adaptability Metrics" headers={["Event ID", "Timestamp", "User Identity", "Personalization Action", "Constitutional Governance", "EvidenceBadge"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.id}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.time}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.user}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.act}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.gov}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.trace}</td>


            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
