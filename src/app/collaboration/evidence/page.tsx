import React from "react";
import { History, Database, CheckCircle2, Search, FileCode } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"id":"COL-E-9042","time":"2026-07-22T08:14:00Z","actor":"Sarah Jenkins","act":"Approved Decision: GraphQL","impact":"Architecture Strategy","trace":"EV-C-9042"},{"id":"COL-E-9041","time":"2026-07-22T08:12:15Z","actor":"CISO Office","act":"Sent Enterprise Broadcast","impact":"Mandatory Policy Ack","trace":"EV-C-9041"},{"id":"COL-E-9040","time":"2026-07-22T08:05:00Z","actor":"Contractor","act":"Attempted to share Prod DB","impact":"Blocked (Zero-Trust)","trace":"EV-C-9040"}];

const METRICS = [
    { label: "Decisions Secured", value: "14.2M", icon: Database, iconColor: "text-cyan-500", desc: "Immutable records", descColor: "text-cyan-400" },
    { label: "Audit Trail Health", value: "Verified", icon: CheckCircle2, iconColor: "text-emerald-500", desc: "Hash chain valid" },
    { label: "E-Discovery Hits", value: "412", icon: Search, iconColor: "text-blue-500", desc: "Legal/Compliance searches" },
    { label: "Data Retention", value: "99.9%", icon: FileCode, iconColor: "text-indigo-500", desc: "Policy compliance" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Collaboration Evidence Ledger"
        description="Cryptographic auditing for every cross-functional decision, message interaction, and broadcast."
        icon={History}
        iconColor="text-cyan-500"
        backHref="/collaboration"
        backLabel="RCCOS Command Center"
        searchPlaceholder="Search Communications..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Collaboration & Communication Metrics" headers={["Event ID", "Timestamp", "Primary Actor", "Collaboration Event", "Constitutional Impact", "EvidenceBadge"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.id}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.time}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.actor}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.act}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.impact}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.trace}</td>


            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
