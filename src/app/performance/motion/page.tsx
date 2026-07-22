import React from "react";
import { Wind, CheckCircle2, Timer, Activity, ShieldCheck } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"comp":"Modal Dialog","trans":"Fade + Slide Up","dur":"300ms","ease":"cubic-bezier(0.4, 0, 0.2, 1)","gov":"Approved","trace":"MDS-EV-101"},{"comp":"Navigation Drawer","trans":"Slide Horizontal","dur":"250ms","ease":"ease-out","gov":"Approved","trace":"MDS-EV-102"},{"comp":"Hover Button","trans":"Background Fill","dur":"150ms","ease":"linear","gov":"Approved","trace":"MDS-EV-103"}];

const METRICS = [
    { label: "Motion Consistency", value: "98%", icon: CheckCircle2, iconColor: "text-cyan-500", desc: "Adherence to design spec", descColor: "text-cyan-400" },
    { label: "Avg Animation Duration", value: "240ms", icon: Timer, iconColor: "text-emerald-500", desc: "Enterprise standard" },
    { label: "Frame Drops", value: "0.1%", icon: Activity, iconColor: "text-blue-500", desc: "Near-perfect 60FPS" },
    { label: "Rogue Animations", value: "0", icon: ShieldCheck, iconColor: "text-emerald-500", desc: "Unapproved CSS transitions" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Motion Design System"
        description="Constitutional governance ensuring all animations are purposeful, calm, and performant."
        icon={Wind}
        iconColor="text-cyan-500"
        backHref="/performance"
        backLabel="RPMDOS Command Center"
        searchPlaceholder="Search Performance Logs..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Performance & Motion Metrics" headers={["Component Type", "Transition Model", "Target Duration", "Easing Curve", "Governance", "Trace"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.comp}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.trans}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.dur}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.ease}</td>
                <td className="py-4 px-5"><StatusBadge status={row.gov} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Verified Runtime" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
