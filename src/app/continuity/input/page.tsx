import React from "react";
import { Keyboard, Layers, Zap, Accessibility, CheckCircle2 } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"task":"Bulk Approvals","prim":"Keyboard (Cmd+Enter)","fall":"Voice Command","time":"0.8s","gov":"Verified","trace":"UIE-EV-701"},{"task":"Architecture Drawing","prim":"Stylus","fall":"Trackpad Grid","time":"N/A","gov":"Verified","trace":"UIE-EV-702"},{"task":"Audit Review","prim":"Touch Swipe","fall":"Arrow Keys","time":"1.2s","gov":"Verified","trace":"UIE-EV-703"}];

const METRICS = [
    { label: "Input Modalities", value: "14", icon: Layers, iconColor: "text-indigo-500", desc: "Supported interaction types", descColor: "text-indigo-400" },
    { label: "Shortcut Usage", value: "14.2M", icon: Zap, iconColor: "text-emerald-500", desc: "Keyboard power users" },
    { label: "A11y Controllers", value: "412", icon: Accessibility, iconColor: "text-blue-500", desc: "Assistive devices active" },
    { label: "Error Rate", value: "0.01%", icon: CheckCircle2, iconColor: "text-emerald-500", desc: "Misclicks/Mis-taps" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Universal Input Experience"
        description="Standardizes enterprise interactions across keyboard, mouse, touch, trackpad, and voice modalities."
        icon={Keyboard}
        iconColor="text-indigo-500"
        backHref="/continuity"
        backLabel="RMDCOS Command Center"
        searchPlaceholder="Search Continuity Logs..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Multi-Device Continuity Metrics" headers={["Enterprise Task", "Primary Input Method", "Accessibility Fallback", "Average Speed", "Governance", "Trace"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.task}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.prim}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.fall}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.time}</td>
                <td className="py-4 px-5"><StatusBadge status={row.gov} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Verified Sync" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
