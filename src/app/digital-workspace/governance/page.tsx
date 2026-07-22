import React from "react";
import { Scale, FileSignature, Lock, CheckCircle2, AlertTriangle } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"rule":"Security alerts always on top","targ":"All Users","enf":"Absolute (z-index lock)","prev":"14K","gov":"Verified","trace":"WGB-EV-901"},{"rule":"Max 6 concurrent data grids","targ":"Analysts","enf":"Warning (Memory)","prev":"412","gov":"Verified","trace":"WGB-EV-902"},{"rule":"Hide sensitive evidence in broadcast","targ":"Executives","enf":"Absolute (RBAC)","prev":"14","gov":"Verified","trace":"WGB-EV-903"}];

const METRICS = [
    { label: "Layout Policies", value: "14", icon: FileSignature, iconColor: "text-indigo-500", desc: "Constitutional rules", descColor: "text-indigo-400" },
    { label: "Mandatory Panels", value: "1", icon: Lock, iconColor: "text-rose-500", desc: "Security Alert Dock" },
    { label: "Compliance Rate", value: "100%", icon: CheckCircle2, iconColor: "text-emerald-500", desc: "Layout adherence" },
    { label: "Focus Mode Blocks", value: "0", icon: AlertTriangle, iconColor: "text-emerald-500", desc: "Critical alerts bypass" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Workspace Governance Board"
        description="Maintains constitutional standards to ensure flexible spatial layouts never compromise enterprise consistency."
        icon={Scale}
        iconColor="text-indigo-400"
        backHref="/digital-workspace"
        backLabel="REDWS Hub"
        searchPlaceholder="Search Workspace Canvas..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Spatial Productivity Metrics" headers={["Workspace Rule", "Target Persona", "Enforcement Level", "Violations Prevented", "Governance", "Trace"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.rule}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.targ}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.enf}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.prev}</td>
                <td className="py-4 px-5"><StatusBadge status={row.gov} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Verified Workspace" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
