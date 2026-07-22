import React from "react";
import { TrendingUp, Target, BrainCircuit, BarChart2, AlertTriangle } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"mod":"Q4 Revenue Trajectory","targ":"Net New ARR","cur":"$14.2M","next":"$18.4M (Expected)","conf":"High","trace":"FTI-EV-401"},{"mod":"Customer Churn Predictor","targ":"Logo Churn Rate","cur":"2.1%","next":"2.4% (Risk Warning)","conf":"Medium","trace":"FTI-EV-402"},{"mod":"Infrastructure Capacity","targ":"Compute Spend","cur":"$412K/mo","next":"$540K/mo","conf":"High","trace":"FTI-EV-403"}];

const METRICS = [
    { label: "Forecast Accuracy", value: "94%", icon: Target, iconColor: "text-indigo-500", desc: "Rolling 12 months", descColor: "text-indigo-400" },
    { label: "Active Models", value: "14", icon: BrainCircuit, iconColor: "text-blue-500", desc: "AI-driven predictions" },
    { label: "Revenue Variance", value: "&lt; 2%", icon: BarChart2, iconColor: "text-emerald-500", desc: "Actual vs Forecast" },
    { label: "Risk Flags", value: "3", icon: AlertTriangle, iconColor: "text-rose-500", desc: "Predicted anomalies" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Forecasting & Trend Intelligence"
        description="Transforms historical performance into predictive insight for proactive executive decision making."
        icon={TrendingUp}
        iconColor="text-indigo-400"
        backHref="/business-intelligence"
        backLabel="BI Command Center"
        searchPlaceholder="Search Executive KPIs..."
        exportLabel="Export Report"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Strategic Intelligence" headers={["Prediction Model", "Target Metric", "Current Value", "90-Day Forecast", "Confidence", "Execution ID"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.mod}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.targ}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.cur}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.next}</td>
                <td className="py-4 px-5"><StatusBadge status={row.conf} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Verified" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
