import React from "react";
import { Waypoints, AlertTriangle, ShieldCheck, Layers, CheckCircle2 } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"name":"Auth Service","up":"2 (Identity Provider, Cache)","down":"142 Internal Apps","own":"Platform Security","risk":"Critical","trace":"EDE-EV-301"},{"name":"Financial Ledger","up":"4 (ERP, Billing, HRIS)","down":"14 Reporting Dashboards","own":"Finance Tech","risk":"High","trace":"EDE-EV-302"},{"name":"Email Gateway","up":"1 (DNS Provider)","down":"All Employees","own":"IT Operations","risk":"Medium","trace":"EDE-EV-303"}];

const METRICS = [
    { label: "Critical Paths", value: "14", icon: AlertTriangle, iconColor: "text-teal-500", desc: "Tier-1 dependencies", descColor: "text-teal-400" },
    { label: "Single Points of Failure", value: "0", icon: ShieldCheck, iconColor: "text-emerald-500", desc: "Redundancy verified" },
    { label: "Dependency Depth", value: "12", icon: Layers, iconColor: "text-blue-500", desc: "Average graph traversal" },
    { label: "Circular Dep.", value: "0", icon: CheckCircle2, iconColor: "text-emerald-500", desc: "Architectural debt" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Enterprise Dependency Explorer"
        description="Provides a complete top-to-bottom dependency map for every governed object in the organization."
        icon={Waypoints}
        iconColor="text-teal-500"
        backHref="/intelligence-fabric"
        backLabel="REIF Command Center"
        searchPlaceholder="Search Knowledge Graph..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Enterprise Knowledge Metrics" headers={["Asset Name", "Upstream Dependencies", "Downstream Consumers", "Ownership", "Risk", "Trace"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.name}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.up}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.down}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.own}</td>
                <td className="py-4 px-5"><StatusBadge status={row.risk} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Verified Graph" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
