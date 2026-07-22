import React from "react";
import { ShieldCheck, FileSignature, ClipboardList, CheckCircle2, Eye } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"rule":"No Silent Denials","dom":"Platform UI","enf":"Strict (Enforced)","owner":"UX Team","conf":"High","trace":"TGB-EV-801"},{"rule":"Plain English Summaries","dom":"All YAML Policies","enf":"Enforced","owner":"Legal & Sec","conf":"High","trace":"TGB-EV-802"},{"rule":"Visual Expiration Dates","dom":"Temporary Access","enf":"Pending Implementation","owner":"IAM Team","conf":"Medium","trace":"TGB-EV-803"}];

const METRICS = [
    { label: "Active Standards", value: "24", icon: FileSignature, iconColor: "text-cyan-500", desc: "Transparency requirements", descColor: "text-cyan-400" },
    { label: "Pending Reviews", value: "2", icon: ClipboardList, iconColor: "text-amber-500", desc: "Awaiting board approval" },
    { label: "Compliance Rate", value: "100%", icon: CheckCircle2, iconColor: "text-emerald-500", desc: "All policies explained" },
    { label: "Opaque Systems", value: "0", icon: Eye, iconColor: "text-blue-500", desc: "Zero black boxes permitted" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Trust Governance Board"
        description="Constitutional oversight managing transparency standards and security communication."
        icon={ShieldCheck}
        iconColor="text-cyan-500"
        backHref="/trust"
        backLabel="RTSTOS Command Center"
        searchPlaceholder="Search Trust Logs..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Trust & Transparency Metrics" headers={["Governance Rule", "Target Domain", "Enforcement Status", "Primary Owner", "Confidence", "Evidence"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.rule}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.dom}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.enf}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.owner}</td>
                <td className="py-4 px-5"><StatusBadge status={row.conf} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Verified Runtime" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
