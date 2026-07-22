import React from "react";
import { BrainCircuit, Lightbulb, MousePointerClick, Timer, TrendingDown } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"cat":"Navigation","rec":"Pin \"Approvals\" to Sidebar","ineff":"Searching for approvals daily","adopt":"68%","status":"Optimal","trace":"PIC-EV-601"},{"cat":"Meeting Habits","rec":"Enable Auto-Decline under Focus","ineff":"Context switching during coding","adopt":"41%","status":"Optimal","trace":"PIC-EV-602"},{"cat":"Search","rec":"Use \"is:open\" shortcut","ineff":"Manual filtering tickets","adopt":"22%","status":"Warning","trace":"PIC-EV-603"}];

const METRICS = [
    { label: "Insights Generated", value: "1.2M", icon: Lightbulb, iconColor: "text-cyan-500", desc: "Personalized tips", descColor: "text-cyan-400" },
    { label: "Tip Adoption Rate", value: "44%", icon: MousePointerClick, iconColor: "text-emerald-500", desc: "Users changed behavior" },
    { label: "Avg Time Saved", value: "14m / day", icon: Timer, iconColor: "text-blue-500", desc: "Per user efficiency" },
    { label: "Context Switches", value: "-22%", icon: TrendingDown, iconColor: "text-emerald-500", desc: "Reduced workflow jumps" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Productivity Insights Center"
        description="Analyzes navigation efficiency, providing users with actionable metrics on their own workflow."
        icon={BrainCircuit}
        iconColor="text-cyan-500"
        backHref="/personalization"
        backLabel="RPAWPOS Command Center"
        searchPlaceholder="Search Personalization Logs..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Personalization & Adaptability Metrics" headers={["Insight Category", "Recommendation Example", "Detected Inefficiency", "Global Adoption", "Status", "Execution ID"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.cat}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.rec}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.ineff}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.adopt}</td>
                <td className="py-4 px-5"><StatusBadge status={row.status} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Verified Runtime" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
