import React from "react";
import { Calendar, BarChart2, CheckCircle2, Target, Timer } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"mtg":"Weekly Architecture Review","org":"Sarah Jenkins","cost":"12 ($4,200)","act":"4 Generated","status":"Completed","trace":"IMG-EV-601"},{"mtg":"Q3 Earnings Prep","org":"CFO Office","cost":"4 ($1,800)","act":"0 Generated","status":"In Progress","trace":"IMG-EV-602"},{"mtg":"Daily Standup (SRE)","org":"Marcus Chen","cost":"8 ($400)","act":"2 Generated","status":"Completed","trace":"IMG-EV-603"}];

const METRICS = [
    { label: "Total Meeting Cost", value: "$1.4M", icon: BarChart2, iconColor: "text-rose-500", desc: "Estimated monthly OPEX", descColor: "text-rose-400" },
    { label: "Meetings w/ Agenda", value: "94%", icon: CheckCircle2, iconColor: "text-emerald-500", desc: "Constitutional compliance" },
    { label: "Action Items", value: "14.2K", icon: Target, iconColor: "text-blue-500", desc: "Automatically extracted" },
    { label: "Meeting Load", value: "14h/wk", icon: Timer, iconColor: "text-amber-500", desc: "Average per employee" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Intelligent Meeting Governance"
        description="Tracking meeting value, cost efficiency, and automatically integrating action items."
        icon={Calendar}
        iconColor="text-cyan-500"
        backHref="/collaboration"
        backLabel="RCCOS Command Center"
        searchPlaceholder="Search Communications..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Collaboration & Communication Metrics" headers={["Meeting Instance", "Organizer", "Attendees (Cost)", "Action Items", "Status", "Trace"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.mtg}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.org}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.cost}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.act}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.status}</td>

                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Record Audited" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
