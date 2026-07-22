import React from "react";
import { BarChart3, LineChart, TrendingDown, Zap, Smile } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"met":"Daily Context Switches","prev":"42 per executive","curr":"4 per executive","net":"90.4% Reduction","health":"Optimal","trace":"WAN-EV-801"},{"met":"Incident Response Time","prev":"14 minutes to gather data","curr":"1.4 seconds to assemble","net":"99.9% Faster","health":"Optimal","trace":"WAN-EV-802"},{"met":"Approval Bottlenecks","prev":"3.4 days average","curr":"14 hours average","net":"82% Faster","health":"Optimal","trace":"WAN-EV-803"}];

const METRICS = [
    { label: "Unified ROI", value: "$12.4M", icon: LineChart, iconColor: "text-fuchsia-500", desc: "Saved productivity capital", descColor: "text-fuchsia-400" },
    { label: "Dashboard Usage", value: "-64%", icon: TrendingDown, iconColor: "text-emerald-500", desc: "Fewer disparate screens loaded" },
    { label: "Executive Speed", value: "+42%", icon: Zap, iconColor: "text-blue-500", desc: "Time-to-decision improved" },
    { label: "User Satisfaction", value: "98%", icon: Smile, iconColor: "text-emerald-500", desc: "Workspace approval rating" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Workspace Analytics"
        description="Proves the ROI of the unified operating experience by tracking efficiency and satisfaction."
        icon={BarChart3}
        iconColor="text-fuchsia-500"
        backHref="/workspace"
        backLabel="RECCOS Enterprise Workspace"
        searchPlaceholder="Search Workspace Logs..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Enterprise Workspace Metrics" headers={["Workspace Metric", "Previous Architecture (Disparate)", "Current Architecture (Unified)", "Net Improvement", "Health", "Evidence"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.met}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.prev}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.curr}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.net}</td>
                <td className="py-4 px-5"><StatusBadge status={row.health} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Unified Ledger" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
