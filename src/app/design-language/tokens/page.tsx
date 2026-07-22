import React from "react";
import { Layers, Database, CheckCircle2, Zap, Palette } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"name":"--color-emerald-500","cat":"Color","base":"#10b981","sem":"Success, Approved, Healthy","status":"Standard","trace":"DTR-EV-101"},{"name":"--radius-premium","cat":"Border Radius","base":"0.75rem","sem":"Cards, Modals, Drawers","status":"Standard","trace":"DTR-EV-102"},{"name":"--shadow-elevation-2","cat":"Elevation","base":"0 4px 6px -1px rgb(0 0 0 / 0.1)","sem":"Dropdowns, Hover States","status":"Standard","trace":"DTR-EV-103"}];

const METRICS = [
    { label: "Active Tokens", value: "412", icon: Database, iconColor: "text-orange-500", desc: "Variables in production", descColor: "text-orange-400" },
    { label: "Hardcoded Values", value: "0", icon: CheckCircle2, iconColor: "text-emerald-500", desc: "Zero visual tech debt" },
    { label: "Token Sync Latency", value: "14ms", icon: Zap, iconColor: "text-blue-500", desc: "Propagation speed" },
    { label: "Theme Overrides", value: "84", icon: Palette, iconColor: "text-fuchsia-500", desc: "Contextual exceptions" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Global Design Token Registry"
        description="The constitutional source of truth for all visual primitives across the Enterprise OS."
        icon={Layers}
        iconColor="text-orange-500"
        backHref="/design-language"
        backLabel="REDL Command Center"
        searchPlaceholder="Search Design Tokens..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Design Governance Metrics" headers={["Token Name", "Category", "Base Value", "Semantic Role", "Status", "Trace"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.name}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.cat}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.base}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.sem}</td>
                <td className="py-4 px-5"><StatusBadge status={row.status} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Verified Design" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
