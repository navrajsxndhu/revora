import React from "react";
import { Scale, Lock, UserCheck, FileSignature, ShieldCheck } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"pol":"No autonomous IAM creation","dom":"Security / IT","enf":"Requires L2 Human Approval","block":"142","gov":"Verified","trace":"OGB-EV-801"},{"pol":"Prod deployments require 2 approvals","dom":"Engineering","enf":"Requires Peer + Manager","block":"42","gov":"Verified","trace":"OGB-EV-802"},{"pol":"Financial routing above $50k","dom":"Commerce","enf":"Requires VP Finance Approval","block":"14","gov":"Verified","trace":"OGB-EV-803"}];

const METRICS = [
    { label: "Auto-Reject Rules", value: "42", icon: Lock, iconColor: "text-indigo-500", desc: "Constitutional blocks", descColor: "text-indigo-400" },
    { label: "Mandatory Humans", value: "100%", icon: UserCheck, iconColor: "text-emerald-500", desc: "For all write actions" },
    { label: "Policy Coverage", value: "100%", icon: FileSignature, iconColor: "text-emerald-500", desc: "Workflows mapped" },
    { label: "Compliance Exceptions", value: "0", icon: ShieldCheck, iconColor: "text-blue-500", desc: "Zero tolerance" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Orchestration Governance Board"
        description="Provides constitutional oversight over what can be automated and what strictly requires human intervention."
        icon={Scale}
        iconColor="text-indigo-400"
        backHref="/orchestration"
        backLabel="Orchestration Hub"
        searchPlaceholder="Search Orchestrations..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Orchestration Metrics" headers={["Governance Policy", "Target Domain", "Enforcement Logic", "Violations Blocked", "Governance", "Trace"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.pol}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.dom}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.enf}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.block}</td>
                <td className="py-4 px-5"><StatusBadge status={row.gov} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Orchestrated" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
