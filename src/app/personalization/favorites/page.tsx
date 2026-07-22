import React from "react";
import { Star, Timer, BrainCircuit, Mouse, Settings } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"role":"Financial Controller","short":"Q3 Ledger Audit","conf":"98%","trig":"End of Month","eff":"High","trace":"IFS-EV-301"},{"role":"DevOps Engineer","short":"AWS Cluster Logs","conf":"94%","trig":"Active Incident","eff":"High","trace":"IFS-EV-302"},{"role":"HR Manager","short":"Onboarding Queue","conf":"88%","trig":"Monday Morning","eff":"High","trace":"IFS-EV-303"}];

const METRICS = [
    { label: "Time Saved (MoM)", value: "14k Hrs", icon: Timer, iconColor: "text-cyan-500", desc: "Faster navigation", descColor: "text-cyan-400" },
    { label: "AI Accuracy", value: "92%", icon: BrainCircuit, iconColor: "text-emerald-500", desc: "Predicted next action" },
    { label: "Clicks Reduced", value: "4.2M", icon: Mouse, iconColor: "text-blue-500", desc: "Efficiency metric" },
    { label: "Manual Overrides", value: "8%", icon: Settings, iconColor: "text-amber-500", desc: "User pinned explicitly" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Intelligent Favorites & Shortcuts"
        description="Machine learning suggestions that adapt navigation strictly based on actual workflow patterns."
        icon={Star}
        iconColor="text-cyan-500"
        backHref="/personalization"
        backLabel="RPAWPOS Command Center"
        searchPlaceholder="Search Personalization Logs..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Personalization & Adaptability Metrics" headers={["User Role", "Suggested Shortcut", "Confidence Score", "Automation Trigger", "Efficiency", "Trace"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.role}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.short}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.conf}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.trig}</td>
                <td className="py-4 px-5"><StatusBadge status={row.eff} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Verified Runtime" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
