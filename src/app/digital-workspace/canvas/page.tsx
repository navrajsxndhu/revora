import React from "react";
import { Layout, Map, Lock, Accessibility, Maximize } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"inst":"Executive Command Board","dom":"Cross-Enterprise","wid":"14 Active Widgets","zoom":"100% (Default)","status":"Active","trace":"WCM-EV-501"},{"inst":"Incident War Room","dom":"Security / DevOps","wid":"8 Active Widgets","zoom":"120% (Focus)","status":"Active","trace":"WCM-EV-502"},{"inst":"Quarterly Planning","dom":"Finance / HR","wid":"4 Active Widgets","zoom":"80% (Overview)","status":"Suspended","trace":"WCM-EV-503"}];

const METRICS = [
    { label: "Canvas Views", value: "142K", icon: Map, iconColor: "text-indigo-500", desc: "Custom layouts", descColor: "text-indigo-400" },
    { label: "Widget Constraint", value: "Strict", icon: Lock, iconColor: "text-emerald-500", desc: "Snap-to-grid active" },
    { label: "Accessibility", value: "AAA", icon: Accessibility, iconColor: "text-emerald-500", desc: "Keyboard navigatable" },
    { label: "Canvas Size", value: "Infinite", icon: Maximize, iconColor: "text-blue-500", desc: "Zoom & Pan supported" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Workspace Canvas Manager"
        description="Governs the spatial organization of enterprise components, creating movable, resizable dashboards."
        icon={Layout}
        iconColor="text-indigo-400"
        backHref="/digital-workspace"
        backLabel="REDWS Hub"
        searchPlaceholder="Search Workspace Canvas..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Spatial Productivity Metrics" headers={["Canvas Instance", "Primary Domain", "Widgets Embedded", "Zoom Level", "Status", "Trace"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.inst}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.dom}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.wid}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.zoom}</td>
                <td className="py-4 px-5"><StatusBadge status={row.status} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Verified Workspace" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
