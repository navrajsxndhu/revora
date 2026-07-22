import React from "react";
import { Lightbulb, Inbox, Timer, ShieldCheck, Target } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"dec":"Acquire Competitor (Project Alpha)","req":"Corp Dev","imp":"$42M Allocation","risk":"High","status":"Warning","trace":"EDC-EV-601"},{"dec":"Open Tokyo Data Center","req":"VP Infrastructure","imp":"$4.2M CAPEX","risk":"Medium","status":"Optimal","trace":"EDC-EV-602"},{"dec":"Hiring Freeze (Q4)","req":"CFO","imp":"$2.1M Savings","risk":"Low","status":"Critical","trace":"EDC-EV-603"}];

const METRICS = [
    { label: "Pending Decisions", value: "4", icon: Inbox, iconColor: "text-indigo-500", desc: "Executive approvals", descColor: "text-indigo-400" },
    { label: "Decision Velocity", value: "1.2 Days", icon: Timer, iconColor: "text-emerald-500", desc: "Time to approve" },
    { label: "Evidence Coverage", value: "100%", icon: ShieldCheck, iconColor: "text-blue-500", desc: "Data-backed briefs" },
    { label: "Strategic Alignment", value: "98%", icon: Target, iconColor: "text-emerald-500", desc: "Matches OKRs" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Executive Decision Center"
        description="Provides decision-ready executive briefings with supporting evidence, financial impact, and risk analysis."
        icon={Lightbulb}
        iconColor="text-indigo-400"
        backHref="/business-intelligence"
        backLabel="BI Command Center"
        searchPlaceholder="Search Executive KPIs..."
        exportLabel="Export Report"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Strategic Intelligence" headers={["Strategic Decision", "Requested By", "Financial Impact", "Risk Level", "Status", "Execution ID"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.dec}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.req}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.imp}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.status}</td>
                <td className="py-4 px-5"><StatusBadge status={row.risk} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Verified" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
