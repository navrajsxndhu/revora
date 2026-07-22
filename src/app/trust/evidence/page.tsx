import React from "react";
import { History, Database, ShieldCheck, Zap, Search } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"id":"TRU-E-1104","time":"2026-07-22T09:14:00Z","act":"Explained PRD-021 Denial","hash":"0x8f4...b2a","gov":"Policy: Clear Denials","trace":"EV-T-1104"},{"id":"TRU-E-1103","time":"2026-07-22T09:12:15Z","act":"Generated Narrative Timeline","hash":"0x1c9...d4f","gov":"Policy: Audit Logging","trace":"EV-T-1103"},{"id":"TRU-E-1102","time":"2026-07-22T09:05:00Z","act":"Simulated MFA Rollout","hash":"0x4a2...e1b","gov":"Policy: Zero Friction","trace":"EV-T-1102"}];

const METRICS = [
    { label: "Trust Records", value: "42.8M", icon: Database, iconColor: "text-cyan-500", desc: "Immutable explanations", descColor: "text-cyan-400" },
    { label: "Chain Integrity", value: "Verified", icon: ShieldCheck, iconColor: "text-emerald-500", desc: "Zero tampering" },
    { label: "Read Latency", value: "14ms", icon: Zap, iconColor: "text-blue-500", desc: "Instant evidence retrieval" },
    { label: "Auditor Queries", value: "8.4K", icon: Search, iconColor: "text-indigo-500", desc: "External verification" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Trust Evidence Ledger"
        description="The cryptographic anchor backing every security explanation and transparency claim."
        icon={History}
        iconColor="text-cyan-500"
        backHref="/trust"
        backLabel="RTSTOS Command Center"
        searchPlaceholder="Search Trust Logs..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Trust & Transparency Metrics" headers={["Event ID", "Timestamp", "Transparency Action", "Cryptographic Hash", "Constitutional Governance", "EvidenceBadge"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.id}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.time}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.act}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.hash}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.gov}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.trace}</td>


            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
