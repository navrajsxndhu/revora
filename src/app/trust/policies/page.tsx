import React from "react";
import { FileCode, Languages, BrainCircuit, Users, CheckCircle2 } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"name":"SEC-01: Zero Trust Auth","sum":"Every login requires MFA. No exceptions.","dept":"Global","upd":"2 days ago","status":"Approved","trace":"PIC-EV-401"},{"name":"FIN-14: Expense Limits","sum":"Purchases >$500 require manager approval.","dept":"Sales, Marketing","upd":"1 month ago","status":"Approved","trace":"PIC-EV-402"},{"name":"ENG-42: Code Reviews","sum":"Two engineers must approve before merging.","dept":"Engineering","upd":"6 months ago","status":"Review Required","trace":"PIC-EV-403"}];

const METRICS = [
    { label: "Policies Translated", value: "142", icon: Languages, iconColor: "text-cyan-500", desc: "Human-readable formats", descColor: "text-cyan-400" },
    { label: "Comprehension", value: "94%", icon: BrainCircuit, iconColor: "text-emerald-500", desc: "User understanding score" },
    { label: "Orphaned Rules", value: "0", icon: Users, iconColor: "text-blue-500", desc: "All policies have owners" },
    { label: "Jargon Removed", value: "8.4K", icon: CheckCircle2, iconColor: "text-emerald-500", desc: "Technical terms simplified" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Policy Intelligence Center"
        description="Translating complex governance code and YAML into approachable business logic."
        icon={FileCode}
        iconColor="text-cyan-500"
        backHref="/trust"
        backLabel="RTSTOS Command Center"
        searchPlaceholder="Search Trust Logs..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Trust & Transparency Metrics" headers={["Policy Name", "Plain Language Summary", "Affected Departments", "Last Updated", "Status", "Evidence"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.name}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.sum}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.dept}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.upd}</td>
                <td className="py-4 px-5"><StatusBadge status={row.status} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Verified Runtime" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
