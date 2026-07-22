import React from "react";
import { Activity, Users, BrainCircuit, TrendingDown, ShieldCheck } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"user":"Sarah Jenkins (VP Eng)","ctx":"Reviewing Architecture Plan","pres":"Focus Mode","avail":"14:30 EST","load":"High","trace":"EPI-EV-101"},{"user":"Marcus Chen (Data Sci)","ctx":"Idle / General Workspace","pres":"Available","avail":"Now","load":"Low","trace":"EPI-EV-102"},{"user":"Elena Rostova (Legal)","ctx":"Client Call (Zoom)","pres":"In Meeting","avail":"15:00 EST","load":"High","trace":"EPI-EV-103"}];

const METRICS = [
    { label: "Available Workforce", value: "42%", icon: Users, iconColor: "text-cyan-500", desc: "Ready for collaboration", descColor: "text-cyan-400" },
    { label: "In Focus Mode", value: "38%", icon: BrainCircuit, iconColor: "text-emerald-500", desc: "Deep work sessions" },
    { label: "Context Switching", value: "-24%", icon: TrendingDown, iconColor: "text-blue-500", desc: "Interruptions prevented" },
    { label: "SLA Violations", value: "0", icon: ShieldCheck, iconColor: "text-emerald-500", desc: "Due to unavailability" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Enterprise Presence Intelligence"
        description="Real-time human availability, cognitive load tracking, and Focus Mode synchronization."
        icon={Activity}
        iconColor="text-cyan-500"
        backHref="/collaboration"
        backLabel="RCCOS Command Center"
        searchPlaceholder="Search Communications..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Collaboration & Communication Metrics" headers={["Employee / Role", "Current Context", "Presence", "Est. Availability", "Cognitive Load", "Trace"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.user}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.ctx}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.pres}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.avail}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.load}</td>

                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Record Audited" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
