import React from "react";
import { ShieldCheck, Accessibility, Lock, ClipboardList } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"pol":"C-Suite Info Security","widget":"Insider Risk Radar","logic":"Cannot be unpinned","inf":"0","gov":"Verified","trace":"PGB-EV-901"},{"pol":"Accessibility First","widget":"Global UI","logic":"High Contrast Override","inf":"0","gov":"Verified","trace":"PGB-EV-902"},{"pol":"Financial Compliance","widget":"Quarterly Ledger","logic":"Locked for Finance roles","inf":"2 (Auto-Reverted)","gov":"Verified","trace":"PGB-EV-903"}];

const METRICS = [
    { label: "Layout Breaches", value: "0", icon: ShieldCheck, iconColor: "text-cyan-500", desc: "Security widgets hidden", descColor: "text-cyan-400" },
    { label: "Mandatory Overrides", value: "1.4K", icon: Accessibility, iconColor: "text-emerald-500", desc: "A11y requirements" },
    { label: "Policy Enforcements", value: "14.2K", icon: Lock, iconColor: "text-blue-500", desc: "Restored locked views" },
    { label: "UI Exceptions", value: "4", icon: ClipboardList, iconColor: "text-amber-500", desc: "Board approved custom" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Personalization Governance Board"
        description="Constitutional oversight ensuring that personalized layouts never breach security or compliance rules."
        icon={ShieldCheck}
        iconColor="text-cyan-500"
        backHref="/personalization"
        backLabel="RPAWPOS Command Center"
        searchPlaceholder="Search Personalization Logs..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Personalization & Adaptability Metrics" headers={["Governance Policy", "Protected Widget/Layout", "Enforcement Logic", "Infractions", "Governance", "Execution ID"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.pol}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.widget}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.logic}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.inf}</td>
                <td className="py-4 px-5"><StatusBadge status={row.gov} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Verified Runtime" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
