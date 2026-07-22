import React from "react";
import { Brain, BrainCircuit, Undo, ShieldCheck, Target } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"act":"Drop Table: Users_2024","impact":"Breaks 3 downstream reports","req":"Data Gov VP","pol":"Data Retention A-12","status":"Rejected","trace":"DEC-EV-601"},{"act":"Deploy React 19 Upgrade","impact":"Increases bundle size by 12kb","req":"Frontend Lead","pol":"None","status":"Approved","trace":"DEC-EV-602"},{"act":"Scale Database +2 Nodes","impact":"Cost increases $400/mo","req":"FinOps Manager","pol":"Budget Cap Alert","status":"Warning","trace":"DEC-EV-603"}];

const METRICS = [
    { label: "Decisions Guided", value: "1,492", icon: BrainCircuit, iconColor: "text-cyan-500", desc: "In last 30 days", descColor: "text-cyan-400" },
    { label: "Rollbacks Saved", value: "12", icon: Undo, iconColor: "text-emerald-500", desc: "Prevented failures" },
    { label: "Policy Checks", value: "100%", icon: ShieldCheck, iconColor: "text-blue-500", desc: "Governance validation" },
    { label: "Simulation Acc.", value: "99.4%", icon: Target, iconColor: "text-indigo-500", desc: "Predictive precision" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Decision Intelligence"
        description="Simulates the business and technical impact of decisions before they execute."
        icon={Brain}
        iconColor="text-cyan-500"
        backHref="/intelligence"
        backLabel="Intelligence Command Center"
        searchPlaceholder="Search Intelligence Logs..."
        exportLabel="Export Report"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Intelligence Insights & Recommendations" headers={["Proposed Action", "Simulated Impact", "Required Approvers", "Policy Conflict", "Status", "Evidence"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.act}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.impact}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.req}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.pol}</td>
                <td className="py-4 px-5"><StatusBadge status={row.status} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Record Audited" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
