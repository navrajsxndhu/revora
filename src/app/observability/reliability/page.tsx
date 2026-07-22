import React from "react";
import { ShieldCheck, Award, Lock, Bot, TrendingUp } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"obj":"User Login Success","target":"99.99%","val":"99.995%","budget":"84% Remaining","status":"Optimal","trace":"REC-EV-401"},{"obj":"Payment Processing Latency","target":"&lt; 500ms (99%)","val":"94.2%","budget":"0% (Exhausted)","status":"Critical","trace":"REC-EV-402"},{"obj":"Dashboard Load Time","target":"&lt; 2s (95%)","val":"98.4%","budget":"42% Remaining","status":"Warning","trace":"REC-EV-403"}];

const METRICS = [
    { label: "SLO Compliance", value: "98.4%", icon: Award, iconColor: "text-indigo-500", desc: "Enterprise average", descColor: "text-indigo-400" },
    { label: "Budgets Exhausted", value: "1", icon: Lock, iconColor: "text-rose-500", desc: "Freeze deployment" },
    { label: "Automated Recovery", value: "84%", icon: Bot, iconColor: "text-blue-500", desc: "Self-healing events" },
    { label: "Resilience Score", value: "A-", icon: TrendingUp, iconColor: "text-emerald-500", desc: "Quarterly rating" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Reliability Engineering Center"
        description="Governance for enterprise resilience, measuring Service Level Objectives (SLOs) and Error Budgets."
        icon={ShieldCheck}
        iconColor="text-indigo-400"
        backHref="/observability"
        backLabel="Observability Command Center"
        searchPlaceholder="Search Operational Signals..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Operational Telemetry" headers={["Business Journey", "SLO Target", "Current Value", "Error Budget Remaining", "Status", "Execution ID"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">

                <td className="py-4 px-5"><StatusBadge status={row.status} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Observed" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
