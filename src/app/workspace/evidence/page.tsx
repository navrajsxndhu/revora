import React from "react";
import { History, Database, ShieldCheck, Zap, Download } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"id":"WS-E-5501","time":"2026-07-22T09:55:00Z","user":"U-8842","act":"Situation Room Assembled: DB Outage","gov":"Policy: Incident Response","trace":"EV-W-5501"},{"id":"WS-E-5502","time":"2026-07-22T09:52:15Z","user":"U-1042","act":"Approved Q3 Financials in Unified Hub","gov":"Policy: Human Approval","trace":"EV-W-5502"},{"id":"WS-E-5503","time":"2026-07-22T09:45:00Z","user":"U-5042","act":"Assistant Explained Audit Failure","gov":"Policy: Explainable Governance","trace":"EV-W-5503"}];

const METRICS = [
    { label: "Workspace Logs", value: "84.2M", icon: Database, iconColor: "text-fuchsia-500", desc: "Cryptographic state records", descColor: "text-fuchsia-400" },
    { label: "Ledger Integrity", value: "Verified", icon: ShieldCheck, iconColor: "text-emerald-500", desc: "SHA-256 Validated" },
    { label: "Commit Velocity", value: "4ms", icon: Zap, iconColor: "text-blue-500", desc: "State tracking speed" },
    { label: "Audit Exports", value: "142", icon: Download, iconColor: "text-indigo-500", desc: "Compliance reports pulled" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Workspace Evidence Ledger"
        description="Immutable constitutional ledger governing all operations and decisions made within the unified workspace."
        icon={History}
        iconColor="text-fuchsia-500"
        backHref="/workspace"
        backLabel="RECCOS Enterprise Workspace"
        searchPlaceholder="Search Workspace Logs..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Enterprise Workspace Metrics" headers={["Event ID", "Timestamp", "User Identity", "Unified Workspace Action", "Constitutional Governance", "EvidenceBadge"]}>
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
