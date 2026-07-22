import React from "react";
import { History, Database, ShieldCheck, Zap, Search } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"id":"CON-E-4404","time":"2026-07-22T09:44:00Z","user":"U-8842","act":"Session transferred Mac -> iPad","gov":"Policy: Secure Handoff","trace":"EV-C-4404"},{"id":"CON-E-4403","time":"2026-07-22T09:42:15Z","user":"U-1042","act":"Notification routed to Apple Watch","gov":"Policy: Device Intelligence","trace":"EV-C-4403"},{"id":"CON-E-4402","time":"2026-07-22T09:35:00Z","user":"U-5042","act":"Offline draft synchronized","gov":"Policy: Merge Conflict Res","trace":"EV-C-4402"}];

const METRICS = [
    { label: "Continuity Logs", value: "42.8M", icon: Database, iconColor: "text-indigo-500", desc: "Cryptographic records", descColor: "text-indigo-400" },
    { label: "Sync Integrity", value: "Verified", icon: ShieldCheck, iconColor: "text-emerald-500", desc: "No data corruption" },
    { label: "Ledger Latency", value: "8ms", icon: Zap, iconColor: "text-blue-500", desc: "Commit speed" },
    { label: "Audit Queries", value: "1,402", icon: Search, iconColor: "text-indigo-500", desc: "Security reviews" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Continuity Evidence Ledger"
        description="Immutable cryptographic trails for all cross-device transfers, offline syncing, and routing."
        icon={History}
        iconColor="text-indigo-500"
        backHref="/continuity"
        backLabel="RMDCOS Command Center"
        searchPlaceholder="Search Continuity Logs..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Multi-Device Continuity Metrics" headers={["Event ID", "Timestamp", "User Identity", "Continuity Action", "Constitutional Governance", "EvidenceBadge"]}>
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
