import React from "react";
import { Terminal, Activity, ShieldCheck, Target, FileCode } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"change":"Enforce MFA on Intranet","imp":"High Initial Friction","users":"2,400","trust":"Neutral","status":"Pending","trace":"ECS-EV-901"},{"change":"Revoke standing DB access","imp":"Moderate (SRE Team)","users":"45","trust":"Positive (Secure)","status":"Approved","trace":"ECS-EV-902"},{"change":"Simplify Expense Policy","imp":"Massive Friction Drop","users":"1,200","trust":"Highly Positive","status":"Approved","trace":"ECS-EV-903"}];

const METRICS = [
    { label: "Simulations Run", value: "142", icon: Activity, iconColor: "text-cyan-500", desc: "Pre-deployment checks", descColor: "text-cyan-400" },
    { label: "Friction Prevented", value: "8.4K", icon: ShieldCheck, iconColor: "text-emerald-500", desc: "Blocked workflows saved" },
    { label: "Accuracy", value: "99.2%", icon: Target, iconColor: "text-blue-500", desc: "Simulation vs Reality" },
    { label: "Active Drafts", value: "4", icon: FileCode, iconColor: "text-amber-500", desc: "Proposed governance changes" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Enterprise Confidence Simulator"
        description="Predictive modeling to visualize how policy changes affect organizational trust and friction."
        icon={Terminal}
        iconColor="text-cyan-500"
        backHref="/trust"
        backLabel="RTSTOS Command Center"
        searchPlaceholder="Search Trust Logs..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Trust & Transparency Metrics" headers={["Proposed Change", "Simulated Impact (Friction)", "Affected Users", "Trust Impact", "Status", "Execution ID"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.change}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.imp}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.users}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.trust}</td>
                <td className="py-4 px-5"><StatusBadge status={row.status} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Verified Runtime" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
