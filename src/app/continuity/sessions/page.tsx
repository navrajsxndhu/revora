import React from "react";
import { RefreshCw, Activity, CheckCircle2, Zap, ShieldCheck } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"user":"U-8214","orig":"MacBook Pro","targ":"iPhone 15","state":"Pending Approvals List","sync":"Live","trace":"CDS-EV-101"},{"user":"U-1192","orig":"iPad Pro","targ":"ThinkPad T14","state":"Architecture Review","sync":"Syncing","trace":"CDS-EV-102"},{"user":"U-5042","orig":"iPhone 14","targ":"Offline","state":"Draft Response","sync":"Cached","trace":"CDS-EV-103"}];

const METRICS = [
    { label: "Active Sessions", value: "412K", icon: Activity, iconColor: "text-indigo-500", desc: "Synchronized workspaces", descColor: "text-indigo-400" },
    { label: "Handoff Success", value: "99.9%", icon: CheckCircle2, iconColor: "text-emerald-500", desc: "Without data loss" },
    { label: "Average Sync Time", value: "14ms", icon: Zap, iconColor: "text-blue-500", desc: "Real-time capability" },
    { label: "Orphaned Sessions", value: "0", icon: ShieldCheck, iconColor: "text-emerald-500", desc: "Auto-pruned securely" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Cross-Device Session Continuity"
        description="Maintains uninterrupted enterprise workflows by synchronizing active workspaces across devices."
        icon={RefreshCw}
        iconColor="text-indigo-500"
        backHref="/continuity"
        backLabel="RMDCOS Command Center"
        searchPlaceholder="Search Continuity Logs..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Multi-Device Continuity Metrics" headers={["User Identity", "Origin Device", "Target Device", "Workspace State", "Sync State", "Execution ID"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.user}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.orig}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.targ}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.state}</td>
                <td className="py-4 px-5"><StatusBadge status={row.sync} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Verified Sync" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
