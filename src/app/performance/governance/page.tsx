import React from "react";
import { ShieldCheck, Lock, Accessibility, CheckCircle2, XCircle } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"pol":"Initial JS Bundle Limit","metric":"Size (Gzipped)","max":"150kb","cur":"142kb","status":"Approved","trace":"PGB-EV-901"},{"pol":"Interaction Latency Cap","metric":"Time to Paint","max":"100ms","cur":"45ms","status":"Approved","trace":"PGB-EV-902"},{"pol":"Strict CLS Requirement","metric":"Layout Shift","max":"0.1","cur":"0.02","status":"Approved","trace":"PGB-EV-903"}];

const METRICS = [
    { label: "Budget Compliance", value: "100%", icon: Lock, iconColor: "text-cyan-500", desc: "Size & Speed limits", descColor: "text-cyan-400" },
    { label: "A11y Overrides", value: "14", icon: Accessibility, iconColor: "text-emerald-500", desc: "Motion reduced for users" },
    { label: "Policy Checks", value: "4.2K", icon: CheckCircle2, iconColor: "text-blue-500", desc: "Automated CI/CD gates" },
    { label: "Exemptions", value: "0", icon: XCircle, iconColor: "text-emerald-500", desc: "Strict enforcement" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Performance Governance Board"
        description="Constitutional oversight for performance budgets, accessibility rules, and rendering policies."
        icon={ShieldCheck}
        iconColor="text-cyan-500"
        backHref="/performance"
        backLabel="RPMDOS Command Center"
        searchPlaceholder="Search Performance Logs..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Performance & Motion Metrics" headers={["Governance Policy", "Target Metric", "Maximum Threshold", "Current Value", "Status", "Execution ID"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.pol}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.metric}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.max}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.cur}</td>
                <td className="py-4 px-5"><StatusBadge status={row.status} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Verified Runtime" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
