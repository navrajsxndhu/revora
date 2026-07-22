import React from "react";
import { GraduationCap, Eye, TrendingDown, BrainCircuit, Layers } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"ctx":"Command Palette","trig":"User clicks navigation 5x","type":"Interactive Hint","rat":"4.8/5","eng":"High","trace":"CLE-EV-301"},{"ctx":"Evidence Ledger","trig":"First time viewing trace","type":"Inline Explanation","rat":"4.9/5","eng":"High","trace":"CLE-EV-302"},{"ctx":"Data Retention Policy","trig":"Hover over Warning","type":"Smart Tooltip","rat":"4.2/5","eng":"Medium","trace":"CLE-EV-303"}];

const METRICS = [
    { label: "Learning Moments", value: "14.2K", icon: Eye, iconColor: "text-cyan-500", desc: "Tooltips & inline hints viewed", descColor: "text-cyan-400" },
    { label: "Documentation Views", value: "-82%", icon: TrendingDown, iconColor: "text-emerald-500", desc: "Shifted to inline learning" },
    { label: "Concept Retention", value: "High", icon: BrainCircuit, iconColor: "text-purple-500", desc: "Repeat mistakes prevented" },
    { label: "Active Tutorials", value: "24", icon: Layers, iconColor: "text-blue-500", desc: "Embedded across platform" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Contextual Learning Engine"
        description="Inline explanations, tutorials, and smart tooltips triggered exactly when needed."
        icon={GraduationCap}
        iconColor="text-cyan-500"
        backHref="/adoption"
        backLabel="Adoption Command Center"
        searchPlaceholder="Search Adoption Logs..."
        exportLabel="Export Report"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Learning & Adoption Activity" headers={["Learning Context", "Trigger Condition", "Content Type", "Helpfulness Rating", "Engagement", "Evidence"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.ctx}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.trig}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.type}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.rat}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.eng}</td>

                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Record Audited" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
