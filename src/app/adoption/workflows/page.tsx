import React from "react";
import { Map, Target, Activity, ShieldCheck, TrendingUp } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"wf":"Incident Response Protocol","aud":"SRE Team","time":"15 mins","cr":"98%","eng":"High","trace":"GWA-EV-201"},{"wf":"New Policy Creation","aud":"Governance Board","time":"8 mins","cr":"92%","eng":"High","trace":"GWA-EV-202"},{"wf":"Database Migration Prep","aud":"DevOps","time":"45 mins","cr":"74%","eng":"Medium","trace":"GWA-EV-203"}];

const METRICS = [
    { label: "Guidance Completion", value: "94%", icon: Target, iconColor: "text-cyan-500", desc: "Workflow success rate", descColor: "text-cyan-400" },
    { label: "Active Guides", value: "142", icon: Activity, iconColor: "text-blue-500", desc: "Running across platform" },
    { label: "Error Prevention", value: "8.4K", icon: ShieldCheck, iconColor: "text-emerald-500", desc: "Mistakes caught mid-flow" },
    { label: "Automation ROI", value: "320%", icon: TrendingUp, iconColor: "text-indigo-500", desc: "Reduction in 'How to' queries" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Guided Workflow Assistant"
        description="Contextual, step-by-step guidance embedded directly within complex enterprise operations."
        icon={Map}
        iconColor="text-cyan-500"
        backHref="/adoption"
        backLabel="Adoption Command Center"
        searchPlaceholder="Search Adoption Logs..."
        exportLabel="Export Report"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Learning & Adoption Activity" headers={["Workflow Name", "Target Audience", "Est. Time", "Completion Rate", "Engagement", "Trace"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.wf}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.aud}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.time}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.cr}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.eng}</td>

                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Record Audited" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
