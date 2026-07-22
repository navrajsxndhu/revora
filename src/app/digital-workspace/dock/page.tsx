import React from "react";
import { Menu, MousePointerClick, Star, Timer, Layout } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"item":"Incident Response Center","type":"System Dashboard","vel":"40ms","freq":"High (42/day)","status":"Docked","trace":"UED-EV-201"},{"item":"Q3 Budget Approval","type":"Active Approval","vel":"14ms","freq":"Medium","status":"Active","trace":"UED-EV-202"},{"item":"Search Graph","type":"Core Utility","vel":"5ms","freq":"Very High","status":"Docked","trace":"UED-EV-203"}];

const METRICS = [
    { label: "Dock Invocations", value: "412K", icon: MousePointerClick, iconColor: "text-indigo-500", desc: "Daily launches", descColor: "text-indigo-400" },
    { label: "Favorites Pinned", value: "9.4", icon: Star, iconColor: "text-yellow-500", desc: "Avg per user" },
    { label: "Nav Clicks Saved", value: "1.2M", icon: Timer, iconColor: "text-emerald-500", desc: "Compared to menus" },
    { label: "Dock Position", value: "Dynamic", icon: Layout, iconColor: "text-blue-500", desc: "Bottom / Left Edge" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Universal Enterprise Dock"
        description="Provides instant OS-style access to favorites, running modules, and active approvals."
        icon={Menu}
        iconColor="text-indigo-400"
        backHref="/digital-workspace"
        backLabel="REDWS Hub"
        searchPlaceholder="Search Workspace Canvas..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Spatial Productivity Metrics" headers={["Dock Item", "Item Type", "Launch Velocity", "Usage Frequency", "Status", "Execution ID"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.item}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.type}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.vel}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.freq}</td>
                <td className="py-4 px-5"><StatusBadge status={row.status} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Verified Workspace" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
