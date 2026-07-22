import React from "react";
import { ShieldCheck, Search, CheckCircle2, Lock, ClipboardList } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"pol":"No PII in Relationship Graph","eng":"Cross-Domain Correlation Engine","rule":"Mask all user strings","viol":"0","gov":"Verified","trace":"IGB-EV-901"},{"pol":"Impact Simulation Limits","eng":"Enterprise Impact Analyzer","rule":"Max 1000 nodes traversed per sim","viol":"0","gov":"Verified","trace":"IGB-EV-902"},{"pol":"Evidence Mandate","eng":"Executive Decision Intelligence","rule":"No insight without cryptographic backing","viol":"0","gov":"Verified","trace":"IGB-EV-903"}];

const METRICS = [
    { label: "Rules Audited", value: "100%", icon: Search, iconColor: "text-teal-500", desc: "Correlation integrity", descColor: "text-teal-400" },
    { label: "Algorithm Bias", value: "0%", icon: CheckCircle2, iconColor: "text-emerald-500", desc: "Machine verified" },
    { label: "Privacy Violations", value: "0", icon: Lock, iconColor: "text-emerald-500", desc: "Data masked in graph" },
    { label: "Governance Reviews", value: "42", icon: ClipboardList, iconColor: "text-blue-500", desc: "Fabric updates" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Intelligence Governance Board"
        description="Constitutional oversight ensuring the intelligence fabric rules and correlation algorithms remain unbiased."
        icon={ShieldCheck}
        iconColor="text-teal-500"
        backHref="/intelligence-fabric"
        backLabel="REIF Command Center"
        searchPlaceholder="Search Knowledge Graph..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Enterprise Knowledge Metrics" headers={["Intelligence Policy", "Governed AI/Graph Engine", "Enforcement Rule", "Violations Detected", "Governance", "Execution ID"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.pol}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.eng}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.rule}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.viol}</td>
                <td className="py-4 px-5"><StatusBadge status={row.gov} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Verified Graph" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
