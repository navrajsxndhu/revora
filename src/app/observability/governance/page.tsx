import React from "react";
import { Scale, FileSignature, ShieldCheck, Lock, Clock } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"rule":"All Tier 0 services require Tracing","dom":"Core Architecture","enf":"CI/CD Block","block":"142","gov":"Verified","trace":"OGB-EV-801"},{"rule":"Deployments freeze if Error Budget < 0","dom":"Release Engineering","enf":"Pipeline Reject","block":"12","gov":"Verified","trace":"OGB-EV-802"},{"rule":"P1 incidents require post-mortem within 48h","dom":"SRE Operations","enf":"Manager Escalation","block":"0 (Compliant)","gov":"Verified","trace":"OGB-EV-803"}];

const METRICS = [
    { label: "Monitoring Policies", value: "42", icon: FileSignature, iconColor: "text-indigo-500", desc: "Constitutional rules", descColor: "text-indigo-400" },
    { label: "Coverage Compliance", value: "100%", icon: ShieldCheck, iconColor: "text-emerald-500", desc: "All Tier 1 mapped" },
    { label: "Deployment Blocks", value: "14", icon: Lock, iconColor: "text-blue-500", desc: "Missing telemetry" },
    { label: "Audit Readiness", value: "Immediate", icon: Clock, iconColor: "text-emerald-500", desc: "Evidence backed" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Observability Governance Board"
        description="Constitutional oversight enforcing strict monitoring standards, SLO adherence, and on-call policies."
        icon={Scale}
        iconColor="text-indigo-400"
        backHref="/observability"
        backLabel="Observability Command Center"
        searchPlaceholder="Search Operational Signals..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Operational Telemetry" headers={["Governance Rule", "Target Domain", "Enforcement Logic", "Violations Blocked", "Governance", "Execution ID"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">


                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Observed" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
