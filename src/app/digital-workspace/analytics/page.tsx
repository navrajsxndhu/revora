import React from "react";
import { LineChart, Activity, TrendingDown, Timer, BrainCircuit } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"dept":"Engineering Ops","trad":"14,204","ws":"412","time":"1,420","cond":"Optimal","trace":"WPA-EV-701"},{"dept":"Compliance & Audit","trad":"8,401","ws":"84","time":"840","cond":"Optimal","trace":"WPA-EV-702"},{"dept":"Executive Suite","trad":"1,420","ws":"14","time":"142","cond":"Optimal","trace":"WPA-EV-703"}];

const METRICS = [
    { label: "Productivity Index", value: "94/100", icon: Activity, iconColor: "text-indigo-500", desc: "Workspace efficiency", descColor: "text-indigo-400" },
    { label: "Nav Reductions", value: "4.2M", icon: TrendingDown, iconColor: "text-emerald-500", desc: "Fewer full-page loads" },
    { label: "Investigation Speed", value: "+42%", icon: Timer, iconColor: "text-blue-500", desc: "Faster resolution" },
    { label: "Context Loss", value: "Near 0", icon: BrainCircuit, iconColor: "text-emerald-500", desc: "Multi-panel benefit" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Workspace Productivity Analytics"
        description="Quantifies the exact time and cognitive load saved by eliminating traditional page-based navigation."
        icon={LineChart}
        iconColor="text-indigo-400"
        backHref="/digital-workspace"
        backLabel="REDWS Hub"
        searchPlaceholder="Search Workspace Canvas..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Spatial Productivity Metrics" headers={["Department", "Traditional Page Loads", "Workspace Context Shifts", "Time Saved (Hours)", "Condition", "Trace"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.dept}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.trad}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.ws}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.time}</td>
                <td className="py-4 px-5"><StatusBadge status={row.cond} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Verified Workspace" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
