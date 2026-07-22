import React from "react";
import { Smartphone, CheckCircle2, Move, Maximize, Smile } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"act":"Incident Escalation","rule":"Sticky Bottom Bar","req":"Swipe Right","time":"4.2s","gov":"Verified","trace":"MXG-EV-201"},{"act":"Policy Acknowledgment","rule":"Thumb-Reach Modal","req":"Double Tap","time":"12.4s","gov":"Verified","trace":"MXG-EV-202"},{"act":"Executive Dashboard","rule":"Single Column Stack","req":"Vertical Scroll","time":"45s","gov":"Verified","trace":"MXG-EV-203"}];

const METRICS = [
    { label: "Mobile Approvals", value: "84.2K", icon: CheckCircle2, iconColor: "text-indigo-500", desc: "Actions via smartphone", descColor: "text-indigo-400" },
    { label: "UX Compliance", value: "100%", icon: Move, iconColor: "text-emerald-500", desc: "One-handed capability" },
    { label: "Screen Real Estate", value: "Optimized", icon: Maximize, iconColor: "text-blue-500", desc: "Adaptive hiding" },
    { label: "Fatigue Metrics", value: "Low", icon: Smile, iconColor: "text-emerald-500", desc: "Gesture efficiency" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Mobile Experience Governance"
        description="Ensures complex enterprise tasks remain practical on mobile devices via thumb-reach optimization."
        icon={Smartphone}
        iconColor="text-indigo-500"
        backHref="/continuity"
        backLabel="RMDCOS Command Center"
        searchPlaceholder="Search Continuity Logs..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Multi-Device Continuity Metrics" headers={["Enterprise Action", "Mobile Layout Rule", "Required Gesture", "Average Completion Time", "Governance", "Execution ID"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.act}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.rule}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.req}</td>
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
