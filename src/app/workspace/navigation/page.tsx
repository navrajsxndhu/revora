import React from "react";
import { Navigation, Target, XCircle, MousePointerClick, History } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"int":"Reviewing Security Alert","mod":"Unified Activity Feed","dest":"Incident Command Center","conf":"99%","state":"Active","trace":"ENI-EV-701"},{"int":"End of Month Approvals","mod":"Human Approval Center","dest":"Finance Reconciliation","conf":"88%","state":"Pending","trace":"ENI-EV-702"},{"int":"Reviewing PR #404","mod":"Engineering Audit","dest":"Architecture Governance","conf":"74%","state":"Pending","trace":"ENI-EV-703"}];

const METRICS = [
    { label: "Predictive Accuracy", value: "94%", icon: Target, iconColor: "text-fuchsia-500", desc: "Suggested correct next step", descColor: "text-fuchsia-400" },
    { label: "Dead Ends Hit", value: "0.01%", icon: XCircle, iconColor: "text-emerald-500", desc: "User abandoned workflow" },
    { label: "Clicks Saved", value: "8.4M", icon: MousePointerClick, iconColor: "text-blue-500", desc: "Flattened hierarchy" },
    { label: "Memory Retention", value: "100%", icon: History, iconColor: "text-emerald-500", desc: "Resumed exact state" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Enterprise Navigation Intelligence"
        description="Intent-driven, context-aware module switching that predicts what the user needs next."
        icon={Navigation}
        iconColor="text-fuchsia-500"
        backHref="/workspace"
        backLabel="RECCOS Enterprise Workspace"
        searchPlaceholder="Search Workspace Logs..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Enterprise Workspace Metrics" headers={["User Intent / Context", "Current Module", "Predicted Destination", "Confidence", "State", "Trace"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.int}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.mod}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.dest}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.conf}</td>
                <td className="py-4 px-5"><StatusBadge status={row.state} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Unified Ledger" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
