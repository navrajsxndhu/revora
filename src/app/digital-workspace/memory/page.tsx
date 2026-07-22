import React from "react";
import { Save, Database, Zap, Clock, FileCode } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"id":"WS-SEC-01","owner":"jsmith@revora","elem":"4 Panels, 2 Filters","rest":"2026-07-22 09:00","state":"Active","trace":"WME-EV-301"},{"id":"WS-ARCH-42","owner":"ajohnson@revora","elem":"Diff View, Timeline","rest":"2026-07-21 18:30","state":"Suspended","trace":"WME-EV-302"},{"id":"WS-FIN-14","owner":"mchen@revora","elem":"Budget Canvas","rest":"2026-07-15 14:00","state":"Offline","trace":"WME-EV-303"}];

const METRICS = [
    { label: "State Snapshots", value: "1.4M", icon: Database, iconColor: "text-indigo-500", desc: "Stored securely", descColor: "text-indigo-400" },
    { label: "Restore Latency", value: "84ms", icon: Zap, iconColor: "text-emerald-500", desc: "Session resume speed" },
    { label: "Data Retention", value: "30 Days", icon: Clock, iconColor: "text-blue-500", desc: "Inactive workspaces" },
    { label: "State Size", value: "14KB", icon: FileCode, iconColor: "text-emerald-500", desc: "Average JSON payload" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Workspace Memory Engine"
        description="Persists complete workspace state—including panels, filters, and scroll position—across sessions."
        icon={Save}
        iconColor="text-indigo-400"
        backHref="/digital-workspace"
        backLabel="REDWS Hub"
        searchPlaceholder="Search Workspace Canvas..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Spatial Productivity Metrics" headers={["Workspace ID", "Owner", "Saved Elements", "Last Restored", "State", "Trace"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.id}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.owner}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.elem}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.rest}</td>
                <td className="py-4 px-5"><StatusBadge status={row.state} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Verified Workspace" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
