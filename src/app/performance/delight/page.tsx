import React from "react";
import { Sparkles, Smile, MousePointerClick, BrainCircuit, CheckCircle2 } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"int":"Form Success","trig":"Submit Complete","resp":"Checkmark Draw + Glow","hap":"Light Tap","gov":"Approved","trace":"DME-EV-701"},{"int":"Delete Warning","trig":"Destructive Hover","resp":"Subtle Pulse (Red)","hap":"None","gov":"Approved","trace":"DME-EV-702"},{"int":"Navigation Switch","trig":"Tab Change","resp":"Sliding Underline Indicator","hap":"None","gov":"Approved","trace":"DME-EV-703"}];

const METRICS = [
    { label: "Delight Score", value: "96/100", icon: Smile, iconColor: "text-cyan-500", desc: "User experience index", descColor: "text-cyan-400" },
    { label: "Micro-Interactions", value: "42", icon: MousePointerClick, iconColor: "text-emerald-500", desc: "Governed subtle effects" },
    { label: "Cognitive Easing", value: "High", icon: BrainCircuit, iconColor: "text-blue-500", desc: "Stress reduction" },
    { label: "Distraction Level", value: "Zero", icon: CheckCircle2, iconColor: "text-emerald-500", desc: "Motion is purposeful" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Delight & Micro-Interaction Engine"
        description="Creating memorable, premium enterprise interactions that reduce software fatigue."
        icon={Sparkles}
        iconColor="text-cyan-500"
        backHref="/performance"
        backLabel="RPMDOS Command Center"
        searchPlaceholder="Search Performance Logs..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Performance & Motion Metrics" headers={["Interaction", "Trigger", "Visual Response", "Haptic Output", "Governance", "Trace"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.int}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.trig}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.resp}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.hap}</td>
                <td className="py-4 px-5"><StatusBadge status={row.gov} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Verified Runtime" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
