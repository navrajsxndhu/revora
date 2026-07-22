import React from "react";
import { BarChart3, Award, Eye, Zap, Bot } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"cap":"Executive Scorecards","adopt":"100% (C-Suite)","imp":"High","time":"14 hours/week","state":"Optimal","trace":"BIA-EV-701"},{"cap":"Predictive Forecasting","adopt":"84% (VP Level)","imp":"High","time":"22 hours/week","state":"Optimal","trace":"BIA-EV-702"},{"cap":"Automated Board Reports","adopt":"100%","imp":"Critical","time":"40 hours/month","state":"Optimal","trace":"BIA-EV-703"}];

const METRICS = [
    { label: "Intelligence ROI", value: "$14.2M", icon: Award, iconColor: "text-indigo-500", desc: "Value of data decisions", descColor: "text-indigo-400" },
    { label: "Dashboard Usage", value: "412K", icon: Eye, iconColor: "text-blue-500", desc: "Monthly executive views" },
    { label: "Data Latency", value: "&lt; 2s", icon: Zap, iconColor: "text-emerald-500", desc: "Warehouse to UI" },
    { label: "Automated Briefs", value: "84%", icon: Bot, iconColor: "text-emerald-500", desc: "Zero manual reporting" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Business Intelligence Analytics"
        description="Measures enterprise performance improvement, decision velocity, and strategic outcome achievement."
        icon={BarChart3}
        iconColor="text-indigo-400"
        backHref="/business-intelligence"
        backLabel="BI Command Center"
        searchPlaceholder="Search Executive KPIs..."
        exportLabel="Export Report"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Strategic Intelligence" headers={["BI Capability", "Adoption Rate", "Decision Impact", "Time Saved", "State", "Trace"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.cap}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.adopt}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.imp}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.time}</td>
                <td className="py-4 px-5"><StatusBadge status={row.state} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Verified" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
