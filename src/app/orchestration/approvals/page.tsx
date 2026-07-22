import React from "react";
import { UserCheck, Inbox, Clock, AlertTriangle, Zap } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"req":"Deploy Prod DB Cluster","wf":"Infrastructure Change","reqp":"Lead Architect","wait":"14m","status":"Pending","trace":"HAO-EV-301"},{"req":"Access to SOC2 Audit Logs","wf":"Privileged Access","reqp":"Compliance Officer","wait":"2h 10m","status":"Pending","trace":"HAO-EV-302"},{"req":"Emergency Security Patch","wf":"Incident Response","reqp":"CISO (Overridden)","wait":"2m","status":"Approved","trace":"HAO-EV-303"}];

const METRICS = [
    { label: "Pending Approvals", value: "42", icon: Inbox, iconColor: "text-indigo-500", desc: "Across enterprise", descColor: "text-indigo-400" },
    { label: "Avg Approval Time", value: "4.2h", icon: Clock, iconColor: "text-yellow-500", desc: "Decision latency" },
    { label: "Escalations", value: "8", icon: AlertTriangle, iconColor: "text-rose-500", desc: "SLA breached" },
    { label: "Overrides", value: "1", icon: Zap, iconColor: "text-blue-500", desc: "Executive emergency" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Human Approval Orchestrator"
        description="Coordinates mandatory human decision points with escalations, overrides, and strict separation of duties."
        icon={UserCheck}
        iconColor="text-indigo-400"
        backHref="/orchestration"
        backLabel="Orchestration Hub"
        searchPlaceholder="Search Orchestrations..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Orchestration Metrics" headers={["Approval Request", "Workflow", "Required Persona", "Time Waiting", "Status", "Trace"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.req}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.wf}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.reqp}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.wait}</td>
                <td className="py-4 px-5"><StatusBadge status={row.status} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Orchestrated" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
