import React from "react";
import { Smile, CheckCircle2, Timer, Map, TrendingDown } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"user":"Sarah Jenkins (VP Eng)","dept":"Engineering","time":"8 mins","fw":"Architecture Review","status":"Completed","trace":"WEL-EV-101"},{"user":"Marcus Chen (Data Sci)","dept":"Machine Learning","time":"12 mins","fw":"Dataset Registration","status":"Completed","trace":"WEL-EV-102"},{"user":"Elena Rostova (Legal)","dept":"Compliance","time":"45 mins","fw":"Policy Audit","status":"In Progress","trace":"WEL-EV-103"}];

const METRICS = [
    { label: "Onboarding Success", value: "98%", icon: CheckCircle2, iconColor: "text-cyan-500", desc: "First-day completion", descColor: "text-cyan-400" },
    { label: "Time to Value", value: "14m", icon: Timer, iconColor: "text-emerald-500", desc: "Avg first workflow execution" },
    { label: "Guided Steps", value: "4.2", icon: Map, iconColor: "text-blue-500", desc: "Average steps per user" },
    { label: "Drop-off Rate", value: "1.2%", icon: TrendingDown, iconColor: "text-rose-500", desc: "Users abandoning setup" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Intelligent First-Run Experience"
        description="Personalized onboarding journeys that replace generic tutorials with role-aware guidance."
        icon={Smile}
        iconColor="text-cyan-500"
        backHref="/adoption"
        backLabel="Adoption Command Center"
        searchPlaceholder="Search Adoption Logs..."
        exportLabel="Export Report"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Learning & Adoption Activity" headers={["User / Role", "Department", "Initial Setup Time", "First Workflow", "Status", "Evidence"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.user}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.dept}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.time}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.fw}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.status}</td>

                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Record Audited" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
