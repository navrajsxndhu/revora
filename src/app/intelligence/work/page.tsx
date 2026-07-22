import React from "react";
import { ClipboardList, Layers, AlertTriangle, Timer, Users } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"task":"Approve IAM Role Expansion","src":"Security Governance","sla":"2h 15m","ap":"Tier 1 Security","urgency":"Critical","trace":"SWQ-EV-401"},{"task":"Review Architectural PR #4192","src":"Engineering Audit","sla":"14h 20m","ap":"Core Infrastructure","urgency":"High","trace":"SWQ-EV-402"},{"task":"Acknowledge Q3 Budget Adjustments","src":"Finance Ops","sla":"3 Days","ap":"Quarterly Planning","urgency":"Medium","trace":"SWQ-EV-403"}];

const METRICS = [
    { label: "Queue Depth", value: "12", icon: Layers, iconColor: "text-cyan-500", desc: "Total pending tasks", descColor: "text-cyan-400" },
    { label: "Critical Items", value: "2", icon: AlertTriangle, iconColor: "text-rose-500", desc: "Immediate attention required" },
    { label: "Avg Clear Time", value: "4.2h", icon: Timer, iconColor: "text-emerald-500", desc: "Task lifecycle speed" },
    { label: "Delegated Tasks", value: "5", icon: Users, iconColor: "text-blue-500", desc: "Assigned to others" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Smart Work Queue"
        description="Intelligently sorts approvals, reviews, and tasks based on constitutional urgency."
        icon={ClipboardList}
        iconColor="text-cyan-500"
        backHref="/intelligence"
        backLabel="Intelligence Command Center"
        searchPlaceholder="Search Intelligence Logs..."
        exportLabel="Export Report"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Intelligence Insights & Recommendations" headers={["Task Description", "Source Module", "SLA Remaining", "Assigned Priority", "Urgency", "RuntimeExecution"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.task}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.src}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.sla}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.ap}</td>
                <td className="py-4 px-5"><StatusBadge status={row.urgency} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Record Audited" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
