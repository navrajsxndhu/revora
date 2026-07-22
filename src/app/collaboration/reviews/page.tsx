import React from "react";
import { ShieldCheck, ClipboardList, Timer, CheckCircle2 } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"req":"Share Q3 Financials with KPMG","reqs":"CFO Office","scope":"External Partner","risk":"High","status":"Approved","trace":"CGB-EV-901"},{"req":"Create cross-org public channel","reqs":"Social Committee","scope":"Global Internal","risk":"Low","status":"Approved","trace":"CGB-EV-902"},{"req":"Invite external dev to Prod DB","reqs":"Contractor","scope":"Production Infra","risk":"Critical","status":"Restricted","trace":"CGB-EV-903"}];

const METRICS = [
    { label: "Pending Reviews", value: "14", icon: ClipboardList, iconColor: "text-amber-500", desc: "Sharing & Access requests", descColor: "text-amber-400" },
    { label: "Approval Speed", value: "4.2h", icon: Timer, iconColor: "text-cyan-500", desc: "Average turnaround" },
    { label: "Auto-Rejected", value: "842", icon: ShieldCheck, iconColor: "text-emerald-500", desc: "Zero-trust violations" },
    { label: "Policy Coverage", value: "100%", icon: CheckCircle2, iconColor: "text-blue-500", desc: "Governance applied" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Collaboration Governance Board"
        description="Reviewing external sharing requests, broad communication policies, and collaboration exemptions."
        icon={ShieldCheck}
        iconColor="text-cyan-500"
        backHref="/collaboration"
        backLabel="RCCOS Command Center"
        searchPlaceholder="Search Communications..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Collaboration & Communication Metrics" headers={["Governance Request", "Requestor", "Target Scope", "Risk Level", "Status", "Execution ID"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.req}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.reqs}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.scope}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.risk}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.status}</td>

                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Record Audited" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
