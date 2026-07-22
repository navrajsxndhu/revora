import React from "react";
import { GitMerge, Search, Target, Bot, Layers } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"trig":"CPU Spike (Infrastructure)","corr":"End-of-Month Financial Batch","conf":"99.8%","act":"Auto-scaled cluster","status":"Optimal","trace":"CDE-EV-201"},{"trig":"Failed Security Audit","corr":"New Marketplace Extension","conf":"94.2%","act":"Quarantined Plugin","status":"Warning","trace":"CDE-EV-202"},{"trig":"High Attrition (HR)","corr":"Elevated On-Call Pages (Eng)","conf":"88.4%","act":"Alerted VP Engineering","status":"Critical","trace":"CDE-EV-203"}];

const METRICS = [
    { label: "Correlations Found", value: "142K", icon: Search, iconColor: "text-teal-500", desc: "In last 30 days", descColor: "text-teal-400" },
    { label: "Accuracy Score", value: "99.4%", icon: Target, iconColor: "text-emerald-500", desc: "Machine verified" },
    { label: "Manual Links", value: "0", icon: Bot, iconColor: "text-blue-500", desc: "Fully autonomous mapping" },
    { label: "Cross-Department", value: "64%", icon: Layers, iconColor: "text-teal-500", desc: "Silos eliminated" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Cross-Domain Correlation Engine"
        description="Automatically discovers meaningful enterprise relationships without manual intervention."
        icon={GitMerge}
        iconColor="text-teal-500"
        backHref="/intelligence-fabric"
        backLabel="REIF Command Center"
        searchPlaceholder="Search Knowledge Graph..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Enterprise Knowledge Metrics" headers={["Trigger Event", "Correlated Discovery", "Confidence Score", "Action Taken", "Status", "Execution ID"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.trig}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.corr}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.conf}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.act}</td>
                <td className="py-4 px-5"><StatusBadge status={row.status} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Verified Graph" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
