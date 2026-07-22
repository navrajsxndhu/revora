import React from "react";
import { Sparkle, Image, Target, CheckCircle2, Accessibility } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"name":"ShieldCheck","weight":"2px (Solid)","mean":"Verified, Secure, Governed","ctx":"Evidence Badges, Trust KPIs","status":"Adopted","trace":"IVL-EV-601"},{"name":"AlertOctagon","weight":"2px","mean":"Critical Failure, Incident","ctx":"Situation Room, High-Risk Modals","status":"Adopted","trace":"IVL-EV-602"},{"name":"ActivitySquare","weight":"2px","mean":"Telemetry, Live Data","ctx":"Performance Dashboards, Logs","status":"Adopted","trace":"IVL-EV-603"}];

const METRICS = [
    { label: "Governed Icons", value: "1,420", icon: Image, iconColor: "text-orange-500", desc: "Lucide-React integration", descColor: "text-orange-400" },
    { label: "Stroke Consistency", value: "2px", icon: Target, iconColor: "text-blue-500", desc: "Uniform visual weight" },
    { label: "Semantic Usage", value: "98%", icon: CheckCircle2, iconColor: "text-emerald-500", desc: "Correct icon application" },
    { label: "Aria Labels", value: "100%", icon: Accessibility, iconColor: "text-fuchsia-500", desc: "Screen reader accessible" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Iconography & Visual Language"
        description="Unified icon governance providing a universal, language-agnostic way to identify actions and status."
        icon={Sparkle}
        iconColor="text-orange-500"
        backHref="/design-language"
        backLabel="REDL Command Center"
        searchPlaceholder="Search Design Tokens..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Design Governance Metrics" headers={["Icon Name", "Visual Weight", "Semantic Meaning", "Usage Context", "Status", "Execution ID"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.name}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.weight}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.mean}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.ctx}</td>
                <td className="py-4 px-5"><StatusBadge status={row.status} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Verified Design" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
