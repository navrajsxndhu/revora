import React from "react";
import { BarChart2, Activity, Timer, TrendingDown, Building2 } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"dept":"Engineering","score":"98%","active":"412","train":"100%","level":"Expert","trace":"OAA-EV-801"},{"dept":"Security & Compliance","score":"95%","active":"84","train":"100%","level":"Expert","trace":"OAA-EV-802"},{"dept":"Finance Operations","score":"82%","active":"142","train":"88%","level":"Intermediate","trace":"OAA-EV-803"}];

const METRICS = [
    { label: "Adoption Index", value: "94.8", icon: Activity, iconColor: "text-cyan-500", desc: "Enterprise wide score", descColor: "text-cyan-400" },
    { label: "Time to Prod.", value: "2 Days", icon: Timer, iconColor: "text-emerald-500", desc: "Avg onboarding speed" },
    { label: "Support Reduction", value: "-62%", icon: TrendingDown, iconColor: "text-indigo-500", desc: "Fewer IT tickets" },
    { label: "Active Departments", value: "14", icon: Building2, iconColor: "text-blue-500", desc: "Fully onboarded" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Organization Adoption Analytics"
        description="Executive intelligence providing insight into department readiness and time-to-productivity."
        icon={BarChart2}
        iconColor="text-cyan-500"
        backHref="/adoption"
        backLabel="Adoption Command Center"
        searchPlaceholder="Search Adoption Logs..."
        exportLabel="Export Report"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Learning & Adoption Activity" headers={["Department", "Adoption Score", "Active Users", "Training Completion", "Mastery Level", "Trace"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.dept}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.score}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.active}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.train}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.level}</td>

                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Record Audited" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
