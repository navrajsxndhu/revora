import React from "react";
import { WifiOff, Database, CheckCircle2, Lock, ShieldCheck } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"mod":"Architecture Drafts","pol":"Aggressive (Full Offline)","mut":"14 Drafts","sync":"2 hours ago","state":"Cached","trace":"OOC-EV-401"},{"mod":"Incident Alerts","pol":"Strict (No Cache)","mut":"None allowed","sync":"Live","state":"Live","trace":"OOC-EV-402"},{"mod":"Employee Directory","pol":"Background (7 days)","mut":"2 Contact updates","sync":"14 mins ago","state":"Syncing","trace":"OOC-EV-403"}];

const METRICS = [
    { label: "Offline Edits", value: "14.2K", icon: Database, iconColor: "text-indigo-500", desc: "Pending synchronization", descColor: "text-indigo-400" },
    { label: "Conflict Rate", value: "0.04%", icon: CheckCircle2, iconColor: "text-emerald-500", desc: "Auto-resolved merges" },
    { label: "Data Encryption", value: "AES-256", icon: Lock, iconColor: "text-blue-500", desc: "Local device cache" },
    { label: "Sync Failures", value: "0", icon: ShieldCheck, iconColor: "text-emerald-500", desc: "Robust retry queue" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Offline Operations Center"
        description="Governance for disconnected work, ensuring users understand cached versus live enterprise data."
        icon={WifiOff}
        iconColor="text-indigo-500"
        backHref="/continuity"
        backLabel="RMDCOS Command Center"
        searchPlaceholder="Search Continuity Logs..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Multi-Device Continuity Metrics" headers={["Workspace Module", "Cache Policy", "Pending Mutations", "Last Sync", "Sync State", "Execution ID"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.mod}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.pol}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.mut}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.sync}</td>
                <td className="py-4 px-5"><StatusBadge status={row.state} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Verified Sync" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
