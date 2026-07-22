import React from "react";
import { Clock, History, Network, Zap, ShieldCheck } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"time":"10:42 AM Today","ctx":"Production Deployment (Frontend)","init":"Release Engineering","imp":"High (Customer Facing)","status":"Completed","trace":"UET-EV-101"},{"time":"09:15 AM Today","ctx":"Financial Ledger Reconciliation","init":"Automated Job","imp":"Critical (Compliance)","status":"Failed","trace":"UET-EV-102"},{"time":"08:00 AM Today","ctx":"C-Suite Access Granted","init":"System Admin","imp":"Medium (RBAC)","status":"Approved","trace":"UET-EV-103"}];

const METRICS = [
    { label: "Timeline Events", value: "8.4M", icon: History, iconColor: "text-fuchsia-500", desc: "Constitutional actions logged", descColor: "text-fuchsia-400" },
    { label: "Event Correlation", value: "100%", icon: Network, iconColor: "text-emerald-500", desc: "Cross-module linking" },
    { label: "Audit Velocity", value: "1.2s", icon: Zap, iconColor: "text-blue-500", desc: "Average query time" },
    { label: "Missing Evidence", value: "0", icon: ShieldCheck, iconColor: "text-emerald-500", desc: "Perfect cryptographic seal" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Unified Enterprise Timeline"
        description="A chronological operational story of the organization spanning all constitutional actions."
        icon={Clock}
        iconColor="text-fuchsia-500"
        backHref="/workspace"
        backLabel="RECCOS Enterprise Workspace"
        searchPlaceholder="Search Workspace Logs..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Enterprise Workspace Metrics" headers={["Timestamp", "Event Context", "Initiator", "Business Impact", "Status", "Trace"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.time}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.ctx}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.init}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.imp}</td>
                <td className="py-4 px-5"><StatusBadge status={row.status} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Unified Ledger" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
