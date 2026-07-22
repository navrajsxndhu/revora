import React from "react";
import { MessageSquare, FileSignature, CheckCircle2, TrendingDown, BookOpen } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"act":"Production DB Access","exp":"Requires Platform Admin role to execute.","pol":"PRD-021 (Zero Trust)","rem":"Request Temp Access","status":"Denied","trace":"EDC-EV-101"},{"act":"Push to Main Branch","exp":"Failed CI/CD Quality Gate (Lint).","pol":"ENG-114 (Quality)","rem":"Fix Code & Retry","status":"Denied","trace":"EDC-EV-102"},{"act":"Expense Approval","exp":"Amount exceeds L1 clearance limit.","pol":"FIN-042 (Spend Limit)","rem":"Escalated to VP","status":"Pending","trace":"EDC-EV-103"}];

const METRICS = [
    { label: "Explained Actions", value: "14.2K", icon: FileSignature, iconColor: "text-cyan-500", desc: "Auto-generated context", descColor: "text-cyan-400" },
    { label: "Unexplained Blocks", value: "0", icon: CheckCircle2, iconColor: "text-emerald-500", desc: "Zero black-box errors" },
    { label: "User Clarifications", value: "-84%", icon: TrendingDown, iconColor: "text-blue-500", desc: "Reduction in help tickets" },
    { label: "Avg Readability", value: "8th Grade", icon: BookOpen, iconColor: "text-emerald-500", desc: "Plain language score" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Explainable Decision Center"
        description="Deconstructing complex governance decisions into plain, understandable language."
        icon={MessageSquare}
        iconColor="text-cyan-500"
        backHref="/trust"
        backLabel="RTSTOS Command Center"
        searchPlaceholder="Search Trust Logs..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Trust & Transparency Metrics" headers={["Blocked Action", "Plain Language Explanation", "Triggered Policy", "Remediation Step", "Status", "Trace"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.act}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.exp}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.pol}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.rem}</td>
                <td className="py-4 px-5"><StatusBadge status={row.status} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Verified Runtime" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
