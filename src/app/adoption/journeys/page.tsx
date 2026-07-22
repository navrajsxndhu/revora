import React from "react";
import { Network, TrendingUp, TrendingDown, Timer, Map } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"jour":"New Policy Creation","per":"Governance Lead","comp":"96%","fric":"None detected","conf":"High","trace":"UJA-EV-601"},{"jour":"Incident Triage","per":"SRE","comp":"92%","fric":"Log context gathering","conf":"High","trace":"UJA-EV-602"},{"jour":"Architecture Review","per":"Staff Engineer","comp":"74%","fric":"Dependency mapping","conf":"Medium","trace":"UJA-EV-603"}];

const METRICS = [
    { label: "Workflow Efficiency", value: "+34%", icon: TrendingUp, iconColor: "text-cyan-500", desc: "Reduction in clicks", descColor: "text-cyan-400" },
    { label: "Drop-off Rate", value: "4.2%", icon: TrendingDown, iconColor: "text-emerald-500", desc: "Across core workflows" },
    { label: "Avg Session", value: "14m", icon: Timer, iconColor: "text-blue-500", desc: "Intentional, focused usage" },
    { label: "Journeys Mapped", value: "124", icon: Map, iconColor: "text-indigo-500", desc: "Enterprise wide" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="User Journey Analytics"
        description="Maps organizational workflow paths, drop-off points, and learning progress."
        icon={Network}
        iconColor="text-cyan-500"
        backHref="/adoption"
        backLabel="Adoption Command Center"
        searchPlaceholder="Search Adoption Logs..."
        exportLabel="Export Report"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Learning & Adoption Activity" headers={["Enterprise Journey", "Primary Persona", "Completion Rate", "Major Friction Point", "Confidence", "Trace"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.jour}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.per}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.comp}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.fric}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.conf}</td>

                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Record Audited" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
