import React from "react";
import { Tablet, Users, LayoutDashboard, FileSignature, RotateCw } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"role":"Field Auditor","orient":"Portrait","pat":"Checklist + Camera","input":"Touch + Stylus","gov":"Verified","trace":"TPS-EV-301"},{"role":"Financial Analyst","orient":"Landscape","pat":"Multi-column Data Grids","input":"Keyboard + Trackpad","gov":"Verified","trace":"TPS-EV-302"},{"role":"Executive","orient":"Landscape","pat":"Presentation Mode","input":"Touch","gov":"Verified","trace":"TPS-EV-303"}];

const METRICS = [
    { label: "Tablet Sessions", value: "12.4K", icon: Users, iconColor: "text-indigo-500", desc: "Active daily users", descColor: "text-indigo-400" },
    { label: "Split-View Usage", value: "68%", icon: LayoutDashboard, iconColor: "text-emerald-500", desc: "Multi-tasking adoption" },
    { label: "Stylus Interactions", value: "4.2M", icon: FileSignature, iconColor: "text-blue-500", desc: "Signatures & annotations" },
    { label: "Landscape Mode", value: "92%", icon: RotateCw, iconColor: "text-amber-500", desc: "Orientation preference" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Tablet Productivity Studio"
        description="Transforms tablets into full enterprise workstations with split-view and stylus interactions."
        icon={Tablet}
        iconColor="text-indigo-500"
        backHref="/continuity"
        backLabel="RMDCOS Command Center"
        searchPlaceholder="Search Continuity Logs..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Multi-Device Continuity Metrics" headers={["Role Context", "Primary Orientation", "Active UI Pattern", "Input Modality", "Governance", "Trace"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.role}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.orient}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.pat}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.input}</td>
                <td className="py-4 px-5"><StatusBadge status={row.gov} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Verified Sync" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
