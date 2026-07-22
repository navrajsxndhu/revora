import React from "react";
import { PlayCircle, ShieldCheck, Zap, Layers } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"targ":"v2 Architecture Approval","cond":"CISO on leave (escalation)","out":"Delegates to Deputy CISO","risk":"Low","status":"Verified","trace":"PSS-EV-601"},{"targ":"Mass Auth Revocation","cond":"API limit exceeded","out":"Workflow fails mid-execution","risk":"High","status":"Failed","trace":"PSS-EV-602"},{"targ":"Vendor Renewal","cond":"Budget exceeded by 10%","out":"Routes to CFO for approval","risk":"Medium","status":"Simulating","trace":"PSS-EV-603"}];

const METRICS = [
    { label: "Simulations Run", value: "4,102", icon: PlayCircle, iconColor: "text-indigo-500", desc: "Past 30 days", descColor: "text-indigo-400" },
    { label: "Failures Caught", value: "840", icon: ShieldCheck, iconColor: "text-emerald-500", desc: "Pre-production blocks" },
    { label: "Avg Sim Latency", value: "45ms", icon: Zap, iconColor: "text-blue-500", desc: "Execution speed" },
    { label: "Mock Coverage", value: "100%", icon: Layers, iconColor: "text-emerald-500", desc: "All modules mapped" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Process Simulation Studio"
        description="Safely simulates workflow execution against mock states before deploying to production."
        icon={PlayCircle}
        iconColor="text-indigo-400"
        backHref="/orchestration"
        backLabel="Orchestration Hub"
        searchPlaceholder="Search Orchestrations..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Orchestration Metrics" headers={["Simulation Target", "Simulated Condition", "Predicted Outcome", "Risk Level", "Status", "Execution ID"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.targ}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.cond}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.out}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.risk}</td>
                <td className="py-4 px-5"><StatusBadge status={row.status} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Orchestrated" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
