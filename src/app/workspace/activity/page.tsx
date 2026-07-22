import React from "react";
import { ActivitySquare, Activity, CheckCircle2, Timer, ArrowRight } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"str":"Infrastructure Reliability","urg":"Critical","sum":"Primary DB Latency Spike Detected","dept":"SRE / Cloud","status":"Active","trace":"EAF-EV-201"},{"str":"AI Governance","urg":"Medium","sum":"New Model Version Evaluated","dept":"Data Science","status":"Pending","trace":"EAF-EV-202"},{"str":"Marketplace Operations","urg":"Low","sum":"Weekly Plugin Sync Finished","dept":"Platform","status":"Completed","trace":"EAF-EV-203"}];

const METRICS = [
    { label: "Active Streams", value: "412", icon: Activity, iconColor: "text-fuchsia-500", desc: "Monitored systems", descColor: "text-fuchsia-400" },
    { label: "Signal-to-Noise", value: "98%", icon: CheckCircle2, iconColor: "text-emerald-500", desc: "Irrelevant alerts filtered" },
    { label: "Processing Delay", value: "8ms", icon: Timer, iconColor: "text-blue-500", desc: "Event evaluation time" },
    { label: "Executive Handoff", value: "14.2K", icon: ArrowRight, iconColor: "text-emerald-500", desc: "Escalations delivered" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Enterprise Activity Feed"
        description="The real-time pulse of the organization prioritized by constitutional importance."
        icon={ActivitySquare}
        iconColor="text-fuchsia-500"
        backHref="/workspace"
        backLabel="RECCOS Enterprise Workspace"
        searchPlaceholder="Search Workspace Logs..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Enterprise Workspace Metrics" headers={["Activity Stream", "Constitutional Urgency", "Summary", "Department", "Status", "Trace"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.str}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.urg}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.sum}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.dept}</td>
                <td className="py-4 px-5"><StatusBadge status={row.status} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Unified Ledger" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
