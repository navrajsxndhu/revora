import React from "react";
import { Component, Box, ShieldCheck, Accessibility, Layers } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"name":"PremiumTable","use":"High-density data grids","prof":"Hover Highlight (150ms)","rank":"AA (Full Keyboard)","status":"Adopted","trace":"PCL-EV-201"},{"name":"EvidenceBadge","use":"Cryptographic UI signatures","prof":"Subtle Pulse (Infinite)","rank":"AA (Screen Reader)","status":"Adopted","trace":"PCL-EV-202"},{"name":"ExecutiveCard","use":"KPI & Health Metrics","prof":"Elevate on Hover","rank":"AAA (Contrast)","status":"Adopted","trace":"PCL-EV-203"}];

const METRICS = [
    { label: "Governed Components", value: "84", icon: Box, iconColor: "text-orange-500", desc: "Premium React components", descColor: "text-orange-400" },
    { label: "Design System Usage", value: "100%", icon: ShieldCheck, iconColor: "text-emerald-500", desc: "Platform adherence" },
    { label: "A11y Coverage", value: "100%", icon: Accessibility, iconColor: "text-blue-500", desc: "WCAG 2.1 AA certified" },
    { label: "Component Variants", value: "412", icon: Layers, iconColor: "text-indigo-500", desc: "Pre-approved states" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Premium Component Library"
        description="The canonical registry for every governed UI component used to assemble the Enterprise OS."
        icon={Component}
        iconColor="text-orange-500"
        backHref="/design-language"
        backLabel="REDL Command Center"
        searchPlaceholder="Search Design Tokens..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Design Governance Metrics" headers={["Component Name", "Primary Use Case", "Motion Profile", "Accessibility Rank", "Adoption", "Trace"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.name}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.use}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.prof}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.rank}</td>
                <td className="py-4 px-5"><StatusBadge status={row.status} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Verified Design" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
