import React from "react";
import { Maximize, Smartphone, Monitor, Mouse, CheckCircle2 } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"comp":"Premium Table","brk":"All (sm to 4xl)","touch":"Yes","integ":"Perfect","gov":"Verified","trace":"ERC-EV-401"},{"comp":"Evidence Badge","brk":"All (sm to 4xl)","touch":"Yes","integ":"Perfect","gov":"Verified","trace":"ERC-EV-402"},{"comp":"Command Palette","brk":"Desktop/Tablet Only","touch":"Partial","integ":"Needs Mobile Adjust","gov":"Review Required","trace":"ERC-EV-403"}];

const METRICS = [
    { label: "Mobile Parity", value: "100%", icon: Smartphone, iconColor: "text-cyan-500", desc: "Feature complete", descColor: "text-cyan-400" },
    { label: "Desktop Layouts", value: "Verified", icon: Monitor, iconColor: "text-emerald-500", desc: "Ultrawide support" },
    { label: "Touch Targets", value: "44px", icon: Mouse, iconColor: "text-blue-500", desc: "Minimum hit area" },
    { label: "Overflow Errors", value: "0", icon: CheckCircle2, iconColor: "text-emerald-500", desc: "Horizontal scroll broken" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Enterprise Responsiveness Center"
        description="Governance ensuring pristine layout integrity across all form factors."
        icon={Maximize}
        iconColor="text-cyan-500"
        backHref="/performance"
        backLabel="RPMDOS Command Center"
        searchPlaceholder="Search Performance Logs..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Performance & Motion Metrics" headers={["Component Category", "Breakpoint Matrix", "Touch Optimized", "Visual Integrity", "Governance", "Evidence"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.comp}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.brk}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.touch}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.integ}</td>
                <td className="py-4 px-5"><StatusBadge status={row.gov} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Verified Runtime" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
