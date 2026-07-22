import React from "react";
import { GitPullRequest, Activity, CheckCircle2, Timer, Lock } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"inst":"EX-9901-SEC","ref":"Firewall Port Modification","by":"jdoe@revora","step":"Awaiting CISO Auth","status":"Pending","trace":"CWE-EV-201"},{"inst":"EX-9902-HR","ref":"Contractor Offboarding","by":"System Trigger","step":"Revoking AWS Access","status":"Active","trace":"CWE-EV-202"},{"inst":"EX-9903-FIN","ref":"Q3 Budget Reallocation","by":"mchen@revora","step":"Completed","status":"Executed","trace":"CWE-EV-203"}];

const METRICS = [
    { label: "Active Executions", value: "412/s", icon: Activity, iconColor: "text-indigo-500", desc: "Global throughput", descColor: "text-indigo-400" },
    { label: "Execution Success", value: "99.99%", icon: CheckCircle2, iconColor: "text-emerald-500", desc: "SLA adherence" },
    { label: "Avg Execution Time", value: "1.2s", icon: Timer, iconColor: "text-blue-500", desc: "Excluding human wait" },
    { label: "Policy Blocks", value: "142", icon: Lock, iconColor: "text-rose-500", desc: "Unauthorized executions" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Constitutional Workflow Engine"
        description="The governed registry executing enterprise workflows while ensuring absolute compliance to mapped policies."
        icon={GitPullRequest}
        iconColor="text-indigo-400"
        backHref="/orchestration"
        backLabel="Orchestration Hub"
        searchPlaceholder="Search Orchestrations..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Orchestration Metrics" headers={["Execution Instance", "Workflow Reference", "Started By", "Current Step", "Status", "Execution ID"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.inst}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.ref}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.by}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.step}</td>
                <td className="py-4 px-5"><StatusBadge status={row.status} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Orchestrated" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
