import React from "react";
import { FileSignature, MessageSquare, AlertTriangle, Timer, CheckCircle2 } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"topic":"Adopt GraphQL API standard","sh":"Architecture Board","score":"8/10 Approvals","status":"Approved","speed":"4 Days","trace":"CDL-EV-301"},{"topic":"Q4 Hiring Freeze Exemption","sh":"Finance & HR","score":"2/4 Approvals","status":"In Progress","speed":"N/A","trace":"CDL-EV-302"},{"topic":"Deprecate Legacy Auth Service","sh":"Security Ops","score":"5/5 Approvals","status":"Approved","speed":"1 Day","trace":"CDL-EV-303"}];

const METRICS = [
    { label: "Decisions Logged", value: "14.2K", icon: MessageSquare, iconColor: "text-cyan-500", desc: "With conversational context", descColor: "text-cyan-400" },
    { label: "Dissenting Votes", value: "412", icon: AlertTriangle, iconColor: "text-amber-500", desc: "Constructive challenges" },
    { label: "Avg Consensus Time", value: "2.4 Days", icon: Timer, iconColor: "text-blue-500", desc: "Speed to decision" },
    { label: "Reverted Decisions", value: "1.2%", icon: CheckCircle2, iconColor: "text-emerald-500", desc: "Long-term accuracy" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Collaborative Decision Ledgers"
        description="Storing the rationale, debate, and conversational history behind enterprise approvals."
        icon={FileSignature}
        iconColor="text-cyan-500"
        backHref="/collaboration"
        backLabel="RCCOS Command Center"
        searchPlaceholder="Search Communications..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Collaboration & Communication Metrics" headers={["Decision Topic", "Primary Stakeholder", "Consensus Score", "Status", "Resolution Speed", "Trace"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.topic}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.sh}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.score}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.status}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.speed}</td>

                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Record Audited" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
