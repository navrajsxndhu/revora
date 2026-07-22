import React from "react";
import { LayoutDashboard, Briefcase, Layers, AlertTriangle, ShieldCheck } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"module":"Security Audit","match":"98%","tod":"Morning Review","priority":"High","trace":"AWS-EV-101"},{"module":"Architecture Governance","match":"94%","tod":"Anytime","priority":"Medium","trace":"AWS-EV-102"},{"module":"Cost Optimization","match":"82%","tod":"End of Month","priority":"Low","trace":"AWS-EV-103"}];

const METRICS = [
    { label: "Role Context", value: "VP Eng", icon: Briefcase, iconColor: "text-cyan-500", desc: "Current adaptive state", descColor: "text-cyan-400" },
    { label: "Relevant Modules", value: "4", icon: Layers, iconColor: "text-blue-500", desc: "Auto-prioritized today" },
    { label: "Pending Actions", value: "12", icon: AlertTriangle, iconColor: "text-amber-500", desc: "Requires attention" },
    { label: "Focus Priority", value: "Security", icon: ShieldCheck, iconColor: "text-emerald-500", desc: "Immediate business objective" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Adaptive Workspace"
        description="Personalized dashboards driven by context, workload, and governance needs."
        icon={LayoutDashboard}
        iconColor="text-cyan-500"
        backHref="/intelligence"
        backLabel="Intelligence Command Center"
        searchPlaceholder="Search Intelligence Logs..."
        exportLabel="Export Report"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Intelligence Insights & Recommendations" headers={["Workspace Module", "Context Match", "Time-of-day Factor", "Priority", "Trace"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.module}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.match}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.tod}</td>
                <td className="py-4 px-5"><StatusBadge status={row.priority} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Record Audited" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
