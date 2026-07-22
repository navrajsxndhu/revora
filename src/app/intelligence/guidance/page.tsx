import React from "react";
import { Map, Target, ShieldCheck, Timer, Activity } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"event":"SLA Violation Risk (API)","conf":"92%","impact":"High Revenue Risk","act":"Scale read replicas","urgency":"Critical","trace":"PGE-EV-201"},{"event":"Compliance Audit Due","conf":"100%","impact":"Regulatory Fine","act":"Run SOC2 Governance Check","urgency":"High","trace":"PGE-EV-202"},{"event":"Storage Capacity Limit","conf":"74%","impact":"Degraded Performance","act":"Archive logs older than 90d","urgency":"Medium","trace":"PGE-EV-203"}];

const METRICS = [
    { label: "Guidance Accuracy", value: "96%", icon: Target, iconColor: "text-cyan-500", desc: "Accepted recommendations", descColor: "text-cyan-400" },
    { label: "Risk Preventions", value: "14", icon: ShieldCheck, iconColor: "text-emerald-500", desc: "In last 30 days" },
    { label: "Pending Deadlines", value: "2", icon: Timer, iconColor: "text-amber-500", desc: "Within 48 hours" },
    { label: "Resource Alerts", value: "0", icon: Activity, iconColor: "text-blue-500", desc: "Capacity is stable" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Predictive Guidance Engine"
        description="Anticipates enterprise bottlenecks, compliance deadlines, and operational risks."
        icon={Map}
        iconColor="text-cyan-500"
        backHref="/intelligence"
        backLabel="Intelligence Command Center"
        searchPlaceholder="Search Intelligence Logs..."
        exportLabel="Export Report"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Intelligence Insights & Recommendations" headers={["Predicted Event", "Confidence", "Business Impact", "Recommended Action", "Urgency", "Evidence"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.event}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.conf}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.impact}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.act}</td>
                <td className="py-4 px-5"><StatusBadge status={row.urgency} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Record Audited" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
