import React from "react";
import { History, Database, ShieldCheck, CheckCircle2, AlertTriangle } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"id":"SRC-E-8044","time":"2026-07-22T08:14:00Z","actor":"Sarah Jenkins","act":"Saved Collection: SOC2","gov":"Policy: Collab-Auth","trace":"EV-S-8044"},{"id":"SRC-E-8043","time":"2026-07-22T08:12:15Z","actor":"Automated Agent","act":"Re-indexed HR Policies","gov":"Policy: Mask-PII","trace":"EV-S-8043"},{"id":"SRC-E-8042","time":"2026-07-22T08:05:00Z","actor":"Marcus Chen","act":"Searched \"Staging DB Password\"","gov":"Blocked (RBAC/Policy)","trace":"EV-S-8042"}];

const METRICS = [
    { label: "Search Traces", value: "14.2M", icon: Database, iconColor: "text-cyan-500", desc: "Cryptographic records", descColor: "text-cyan-400" },
    { label: "RBAC Validations", value: "42.8M", icon: ShieldCheck, iconColor: "text-emerald-500", desc: "Permissions verified" },
    { label: "Ledger Integrity", value: "Verified", icon: CheckCircle2, iconColor: "text-blue-500", desc: "Hash chain valid" },
    { label: "Anomaly Detects", value: "0", icon: AlertTriangle, iconColor: "text-indigo-500", desc: "Suspicious search behavior" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Search Evidence Ledger"
        description="Immutable cryptographic trails for all significant discovery and search governance operations."
        icon={History}
        iconColor="text-cyan-500"
        backHref="/search"
        backLabel="RSKIOS Command Center"
        searchPlaceholder="Search Knowledge Context..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Search & Discovery Metrics" headers={["Event ID", "Timestamp", "Actor / User", "Discovery Action", "Constitutional Governance", "EvidenceBadge"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.id}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.time}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.actor}</td>
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
