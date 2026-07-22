import React from "react";
import { Box, MousePointerClick, Layers, Lock, TrendingDown } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"wid":"Pending Approvals","cat":"Workflow","eng":"High","req":"Mandatory (Managers)","status":"Optimal","trace":"SWM-EV-201"},{"wid":"System Health Status","cat":"Observability","eng":"Medium","req":"Optional","status":"Optimal","trace":"SWM-EV-202"},{"wid":"Team Birthdays","cat":"Social","eng":"Low","req":"Optional","status":"Warning","trace":"SWM-EV-203"}];

const METRICS = [
    { label: "Widget Usage", value: "840K", icon: MousePointerClick, iconColor: "text-cyan-500", desc: "Daily widget interactions", descColor: "text-cyan-400" },
    { label: "Avg Widgets / User", value: "6.4", icon: Layers, iconColor: "text-emerald-500", desc: "Cognitive load check" },
    { label: "Locked Core Widgets", value: "100%", icon: Lock, iconColor: "text-blue-500", desc: "Governance preserved" },
    { label: "Hidden (Unused)", value: "-14%", icon: TrendingDown, iconColor: "text-emerald-500", desc: "Clutter reduction" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Smart Widget Manager"
        description="Tracks the composition and usage of modular UI components while enforcing core governance."
        icon={Box}
        iconColor="text-cyan-500"
        backHref="/personalization"
        backLabel="RPAWPOS Command Center"
        searchPlaceholder="Search Personalization Logs..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Personalization & Adaptability Metrics" headers={["Widget Component", "Category", "Engagement Rate", "Constitutional Requirement", "Status", "Trace"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.wid}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.cat}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.eng}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.req}</td>
                <td className="py-4 px-5"><StatusBadge status={row.status} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Verified Runtime" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
