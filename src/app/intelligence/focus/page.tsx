import React from "react";
import { Target, Activity, Timer, ShieldCheck, TrendingUp } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"dist":"Chat / Mentions","rule":"Mute all except P1 Incidents","esc":"Manager Override","anal":"Saved 14 context switches","status":"Compliant","trace":"FOC-EV-801"},{"dist":"KPI Dashboards","rule":"Collapse secondary metrics","esc":"None","anal":"Reduced cognitive load 40%","status":"Compliant","trace":"FOC-EV-802"},{"dist":"Non-critical Approvals","rule":"Queue for batch review later","esc":"SLA < 1 Hour","anal":"Batched 6 requests","status":"Compliant","trace":"FOC-EV-803"}];

const METRICS = [
    { label: "Focus State", value: "Inactive", icon: Activity, iconColor: "text-slate-500", desc: "Currently operating normally", descColor: "text-slate-400" },
    { label: "Time in Focus", value: "4.2h", icon: Timer, iconColor: "text-cyan-500", desc: "This week" },
    { label: "Interventions", value: "42", icon: ShieldCheck, iconColor: "text-emerald-500", desc: "Notifications suppressed" },
    { label: "Task Completion", value: "+34%", icon: TrendingUp, iconColor: "text-blue-500", desc: "Speed during focus mode" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Enterprise Focus Mode"
        description="Temporarily suppresses non-critical metrics and notifications during high-priority tasks."
        icon={Target}
        iconColor="text-cyan-500"
        backHref="/intelligence"
        backLabel="Intelligence Command Center"
        searchPlaceholder="Search Intelligence Logs..."
        exportLabel="Export Report"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Intelligence Insights & Recommendations" headers={["Distraction Type", "Suppression Rule", "Escalation Override", "Focus Analytics", "Status", "Evidence"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">

                <td className="py-4 px-5"><StatusBadge status={row.status} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Record Audited" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
