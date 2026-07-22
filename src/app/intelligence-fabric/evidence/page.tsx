import React from "react";
import { History, Database, ShieldCheck, Zap, Download } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"id":"INT-E-7701","time":"2026-07-22T10:15:00Z","sys":"Correlation Engine","act":"Created Edge: PR #1042 -> CPU Spike","gov":"Policy: Incident Mapping","trace":"EV-I-7701"},{"id":"INT-E-7702","time":"2026-07-22T10:12:15Z","sys":"Impact Analyzer","act":"Simulated Network Policy Drop","gov":"Policy: Change Management","trace":"EV-I-7702"},{"id":"INT-E-7703","time":"2026-07-22T10:05:00Z","sys":"Insight Discovery","act":"Generated Cost Optimization Alert","gov":"Policy: Financial Efficiency","trace":"EV-I-7703"}];

const METRICS = [
    { label: "Intelligence Logs", value: "4.2B", icon: Database, iconColor: "text-teal-500", desc: "Cryptographic state records", descColor: "text-teal-400" },
    { label: "Ledger Integrity", value: "Verified", icon: ShieldCheck, iconColor: "text-emerald-500", desc: "SHA-256 Validated" },
    { label: "Commit Velocity", value: "2ms", icon: Zap, iconColor: "text-blue-500", desc: "Edge writing speed" },
    { label: "Audit Exports", value: "14", icon: Download, iconColor: "text-indigo-500", desc: "Compliance reports pulled" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Intelligence Evidence Ledger"
        description="Immutable ledger for Enterprise Intelligence, logging every new graph edge, correlation, and insight."
        icon={History}
        iconColor="text-teal-500"
        backHref="/intelligence-fabric"
        backLabel="REIF Command Center"
        searchPlaceholder="Search Knowledge Graph..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Enterprise Knowledge Metrics" headers={["Event ID", "Timestamp", "System Initiator", "Intelligence Action", "Constitutional Governance", "EvidenceBadge"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.id}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.time}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.sys}</td>
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
