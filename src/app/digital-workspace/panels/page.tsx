import React from "react";
import { Columns, Layout, RefreshCw, Maximize, Cpu } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"sub":"Security Incident #104","dom":"Security Operations","mem":"4.2 MB","interacted":"14s ago","state":"Foreground","trace":"MPE-EV-101"},{"sub":"Architecture Approval","dom":"Enterprise Arch","mem":"1.4 MB","interacted":"2m ago","state":"Background","trace":"MPE-EV-102"},{"sub":"Vendor Audit Log","dom":"Compliance","mem":"0 MB","interacted":"4h ago","state":"Suspended","trace":"MPE-EV-103"}];

const METRICS = [
    { label: "Active Panels", value: "14,204", icon: Layout, iconColor: "text-indigo-500", desc: "Across all user sessions", descColor: "text-indigo-400" },
    { label: "State Sync", value: "True", icon: RefreshCw, iconColor: "text-emerald-500", desc: "Cross-panel awareness" },
    { label: "Avg Panels/User", value: "3.4", icon: Maximize, iconColor: "text-blue-500", desc: "Simultaneous views" },
    { label: "Panel Memory Limit", value: "32MB", icon: Cpu, iconColor: "text-rose-500", desc: "Max memory per view" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Multi-Panel Workspace Engine"
        description="Transforms enterprise navigation into spatial multitasking, maintaining multiple synchronized views."
        icon={Columns}
        iconColor="text-indigo-400"
        backHref="/digital-workspace"
        backLabel="REDWS Hub"
        searchPlaceholder="Search Workspace Canvas..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Spatial Productivity Metrics" headers={["Panel Subject", "Source Domain", "Memory Usage", "Last Interacted", "State", "Trace"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.sub}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.dom}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.mem}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.interacted}</td>
                <td className="py-4 px-5"><StatusBadge status={row.state} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Verified Workspace" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
