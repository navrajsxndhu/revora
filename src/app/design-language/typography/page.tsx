import React from "react";
import { Type, Layers, Eye, Move } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"sem":"Executive Headline (H1)","size":"3.0rem (48px)","weight":"800 (ExtraBold)","height":"1.1","gov":"Verified","trace":"TCH-EV-501"},{"sem":"Data Grid Cell","size":"0.875rem (14px)","weight":"400 (Regular)","height":"1.25","gov":"Verified","trace":"TCH-EV-502"},{"id":"Cryptographic Hash","size":"0.75rem (12px)","weight":"500 (Medium)","height":"1.5","gov":"Verified","trace":"TCH-EV-503"}];

const METRICS = [
    { label: "Font Families", value: "2", icon: Type, iconColor: "text-orange-500", desc: "Primary & Monospace", descColor: "text-orange-400" },
    { label: "Scale Steps", value: "12", icon: Layers, iconColor: "text-blue-500", desc: "From xs to 9xl" },
    { label: "Legibility Score", value: "99%", icon: Eye, iconColor: "text-emerald-500", desc: "Readability index" },
    { label: "Font Loading", value: "Swap", icon: Move, iconColor: "text-fuchsia-500", desc: "Zero layout shift (CLS)" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Typography & Content Hierarchy"
        description="Standardizes the visual reading pattern to ensure enterprise information is immediately understandable."
        icon={Type}
        iconColor="text-orange-500"
        backHref="/design-language"
        backLabel="REDL Command Center"
        searchPlaceholder="Search Design Tokens..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Design Governance Metrics" headers={["Text Semantic", "Font Size (rem)", "Font Weight", "Line Height", "Governance", "Trace"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.sem}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.size}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.weight}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.height}</td>
                <td className="py-4 px-5"><StatusBadge status={row.gov} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Verified Design" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
