import React from "react";
import { Bot, MessageSquare, ShieldCheck, Lock, Timer } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"ctx":"Why was my PR blocked?","act":"Explained Security Policy 4.B","ref":"Policy: Zero Trust Commit","feed":"Helpful","status":"Completed","trace":"EAW-EV-601"},{"ctx":"Where is the Q3 Budget?","act":"Recommended Navigation Route","ref":"Module: Financial Planning","feed":"Navigated","status":"Completed","trace":"EAW-EV-602"},{"ctx":"Approve all expenses","act":"Blocked: Human Approval Required","ref":"Constitutional Law #1","feed":"Understood","status":"Failed","trace":"EAW-EV-603"}];

const METRICS = [
    { label: "Queries Handled", value: "1.4M", icon: MessageSquare, iconColor: "text-fuchsia-500", desc: "Enterprise questions answered", descColor: "text-fuchsia-400" },
    { label: "Explanation Accuracy", value: "100%", icon: ShieldCheck, iconColor: "text-emerald-500", desc: "Backed by evidence" },
    { label: "Autonomous Actions", value: "0", icon: Lock, iconColor: "text-blue-500", desc: "Constitutional restriction" },
    { label: "Time Saved", value: "142K Hrs", icon: Timer, iconColor: "text-emerald-500", desc: "Avoiding documentation hunts" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Enterprise Assistant Workspace"
        description="A conversational interface to explain governance, summarize evidence, and recommend navigation."
        icon={Bot}
        iconColor="text-fuchsia-500"
        backHref="/workspace"
        backLabel="RECCOS Enterprise Workspace"
        searchPlaceholder="Search Workspace Logs..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Enterprise Workspace Metrics" headers={["Query Context", "Assistant Action", "Evidence Reference", "User Feedback", "Status", "Execution ID"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.ctx}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.act}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.ref}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.feed}</td>
                <td className="py-4 px-5"><StatusBadge status={row.status} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Unified Ledger" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
