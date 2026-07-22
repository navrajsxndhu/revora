import React from "react";
import { Inbox, Calendar, MessageCircle, Timer, AlertTriangle } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"topic":"Review Q3 Marketing Copy","init":"Brand Team","req":"Legal, Compliance","ddl":"Friday (2d)","status":"In Progress","trace":"AAC-EV-401"},{"topic":"Vendor Security Questionnaire","init":"Procurement","req":"Security Ops","ddl":"Tomorrow (1d)","status":"Completed","trace":"AAC-EV-402"},{"topic":"UI Design System Update","init":"UX Design","req":"Frontend Leads","ddl":"Next Week (6d)","status":"In Progress","trace":"AAC-EV-403"}];

const METRICS = [
    { label: "Meetings Avoided", value: "8.4K", icon: Calendar, iconColor: "text-cyan-500", desc: "Hours saved monthly", descColor: "text-cyan-400" },
    { label: "Async Workflows", value: "1.2K", icon: MessageCircle, iconColor: "text-emerald-500", desc: "Active discussions" },
    { label: "Avg Response Time", value: "4.2h", icon: Timer, iconColor: "text-blue-500", desc: "Within SLA bounds" },
    { label: "Bottlenecks", value: "14", icon: AlertTriangle, iconColor: "text-rose-500", desc: "Threads requiring intervention" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Asynchronous Alignment Center"
        description="Managing non-urgent workflows to prevent meeting fatigue and notification overload."
        icon={Inbox}
        iconColor="text-cyan-500"
        backHref="/collaboration"
        backLabel="RCCOS Command Center"
        searchPlaceholder="Search Communications..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Collaboration & Communication Metrics" headers={["Alignment Topic", "Initiator", "Required Responders", "Deadline", "Status", "Evidence"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.topic}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.init}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.req}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.ddl}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.status}</td>

                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Record Audited" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
