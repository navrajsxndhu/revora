import React from "react";
import { ShieldCheck, Search, Lock, ClipboardList, XCircle } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"rule":"No custom HEX colors","enf":"Linter (stylelint)","block":"42 Commits","req":"Design System Lead","gov":"Verified","trace":"DGB-EV-901"},{"rule":"Interactive elements must have focus state","enf":"CI/CD A11y Scanner","block":"14 Commits","req":"Accessibility Auditor","gov":"Verified","trace":"DGB-EV-902"},{"rule":"Typography must use Rem scaling","enf":"PR Review Bot","block":"12 Commits","req":"Design Tokens Team","gov":"Verified","trace":"DGB-EV-903"}];

const METRICS = [
    { label: "Visual Reviews", value: "142", icon: Search, iconColor: "text-orange-500", desc: "Pull requests analyzed", descColor: "text-orange-400" },
    { label: "Design Drift", value: "0%", icon: Lock, iconColor: "text-emerald-500", desc: "Strict UI enforcement" },
    { label: "Exceptions Granted", value: "2", icon: ClipboardList, iconColor: "text-amber-500", desc: "Contextual overrides" },
    { label: "A11y Violations", value: "0", icon: XCircle, iconColor: "text-emerald-500", desc: "Blocked at CI/CD" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Design Governance Board"
        description="Constitutional oversight preventing visual drift and ensuring every addition meets premium standards."
        icon={ShieldCheck}
        iconColor="text-orange-500"
        backHref="/design-language"
        backLabel="REDL Command Center"
        searchPlaceholder="Search Design Tokens..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Design Governance Metrics" headers={["Governance Rule", "Enforcement Mechanism", "Violations Blocked", "Approval Required", "Governance", "Execution ID"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.rule}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.enf}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.block}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.req}</td>
                <td className="py-4 px-5"><StatusBadge status={row.gov} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Verified Design" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
