import React from "react";
import { Network, Zap, Layers, CheckCircle2, Timer } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"ass":"Redis Cache Cluster","fin":"$4,200/mo (Underutilized)","sec":"VPC Bound, No Public IP","comp":"SOC2 Compliant","state":"Optimal","trace":"UBC-EV-401"},{"ass":"User Profile DB","fin":"$14,500/mo (Optimized)","sec":"AES-256 Encrypted at Rest","comp":"GDPR / CCPA In Scope","state":"Optimal","trace":"UBC-EV-402"},{"ass":"Legacy CRM Export","fin":"$800/mo (Deprecated)","sec":"Basic Auth (Flagged)","comp":"Policy Violation","state":"Warning","trace":"UBC-EV-403"}];

const METRICS = [
    { label: "Context Hydration", value: "4ms", icon: Zap, iconColor: "text-teal-500", desc: "Real-time assembly", descColor: "text-teal-400" },
    { label: "Dimensions Added", value: "14", icon: Layers, iconColor: "text-blue-500", desc: "Perspectives per asset" },
    { label: "Context Misses", value: "0", icon: CheckCircle2, iconColor: "text-emerald-500", desc: "Perfect recall" },
    { label: "Time Saved", value: "4.2h/user", icon: Timer, iconColor: "text-emerald-500", desc: "No more searching" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Unified Business Context Engine"
        description="Transforms isolated technical records into rich organizational and financial context."
        icon={Network}
        iconColor="text-teal-500"
        backHref="/intelligence-fabric"
        backLabel="REIF Command Center"
        searchPlaceholder="Search Knowledge Graph..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Enterprise Knowledge Metrics" headers={["Technical Asset", "Financial Context", "Security Context", "Compliance Context", "State", "Execution ID"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.ass}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.fin}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.sec}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.comp}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.state}</td>

                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Verified Graph" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
