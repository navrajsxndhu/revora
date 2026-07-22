import React from "react";
import { Layers, FileCode, TrendingUp, Move, Lock } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"temp":"SecOps Standard","dept":"Security","locked":"Threat Radar, Alerts","adopt":"100%","gov":"Verified","trace":"WTL-EV-701"},{"temp":"HR Generalist","dept":"Human Resources","locked":"Compliance News","adopt":"88%","gov":"Verified","trace":"WTL-EV-702"},{"temp":"Developer Base","dept":"Engineering","locked":"Sprint Burndown","adopt":"94%","gov":"Verified","trace":"WTL-EV-703"}];

const METRICS = [
    { label: "Active Templates", value: "42", icon: FileCode, iconColor: "text-cyan-500", desc: "Governed starting points", descColor: "text-cyan-400" },
    { label: "Onboarding Speed", value: "+40%", icon: TrendingUp, iconColor: "text-emerald-500", desc: "Faster time to value" },
    { label: "Template Drift", value: "12%", icon: Move, iconColor: "text-blue-500", desc: "Customizations made" },
    { label: "Compliance Lock", value: "100%", icon: Lock, iconColor: "text-emerald-500", desc: "Security widgets fixed" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Workspace Templates Library"
        description="Standardized organizational layouts that accelerate onboarding and maintain department consistency."
        icon={Layers}
        iconColor="text-cyan-500"
        backHref="/personalization"
        backLabel="RPAWPOS Command Center"
        searchPlaceholder="Search Personalization Logs..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Personalization & Adaptability Metrics" headers={["Template Name", "Target Department", "Locked Widgets", "User Adoption", "Governance", "Trace"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.temp}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.dept}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.locked}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.adopt}</td>
                <td className="py-4 px-5"><StatusBadge status={row.gov} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Verified Runtime" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
