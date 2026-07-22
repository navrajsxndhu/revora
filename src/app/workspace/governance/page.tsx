import React from "react";
import { ShieldCheck, Lock, BrainCircuit, Accessibility, XCircle } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"pol":"10-Second Executive Rule","comp":"Enterprise Command Center","rule":"Must render within 800ms","viol":"0","gov":"Verified","trace":"WGB-EV-901"},{"pol":"Approval Centralization","comp":"Human Approval Center","rule":"No scattered approval workflows","viol":"0","gov":"Verified","trace":"WGB-EV-902"},{"pol":"Mandatory Situational Intel","comp":"Executive Situation Room","rule":"Cannot be dismissed by user","viol":"0","gov":"Verified","trace":"WGB-EV-903"}];

const METRICS = [
    { label: "Layout Compliance", value: "100%", icon: Lock, iconColor: "text-fuchsia-500", desc: "Mandatory widgets active", descColor: "text-fuchsia-400" },
    { label: "Cognitive Load", value: "Monitored", icon: BrainCircuit, iconColor: "text-emerald-500", desc: "Information density limits" },
    { label: "A11y Validations", value: "14.2K", icon: Accessibility, iconColor: "text-blue-500", desc: "Accessibility checks" },
    { label: "Policy Overrides", value: "0", icon: XCircle, iconColor: "text-emerald-500", desc: "Zero unauthorized changes" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Workspace Governance Board"
        description="Constitutional oversight ensuring the Enterprise Command Center complies with executive visual standards."
        icon={ShieldCheck}
        iconColor="text-fuchsia-500"
        backHref="/workspace"
        backLabel="RECCOS Enterprise Workspace"
        searchPlaceholder="Search Workspace Logs..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Enterprise Workspace Metrics" headers={["Workspace Policy", "Governed Component", "Enforcement Rule", "Violations Detected", "Governance", "Execution ID"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.pol}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.comp}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.rule}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.viol}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.gov}</td>

                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Unified Ledger" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
