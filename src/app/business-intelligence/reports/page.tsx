import React from "react";
import { FileText, Bot, Timer, Target, Lock } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"rep":"Q3 Board of Directors Brief","freq":"Quarterly","aud":"Board Members","cert":"Tier 0 (Audited)","status":"Optimal","trace":"ERS-EV-901"},{"rep":"Weekly Revenue Flash","freq":"Weekly","aud":"C-Suite","cert":"Tier 1","status":"Optimal","trace":"ERS-EV-902"},{"rep":"Engineering DORA Metrics","freq":"Monthly","aud":"VP Engineering","cert":"Tier 2","status":"Optimal","trace":"ERS-EV-903"}];

const METRICS = [
    { label: "Automated Reports", value: "412", icon: Bot, iconColor: "text-indigo-500", desc: "Generated monthly", descColor: "text-indigo-400" },
    { label: "Manual Effort", value: "0 hrs", icon: Timer, iconColor: "text-emerald-500", desc: "Zero spreadsheet copy-paste" },
    { label: "Data Accuracy", value: "100%", icon: Target, iconColor: "text-blue-500", desc: "Direct from fabric" },
    { label: "Distribution", value: "Governed", icon: Lock, iconColor: "text-emerald-500", desc: "Strict access controls" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Executive Reporting Studio"
        description="Centralized governance for generating automated, constitutional Board Reports and QBRs."
        icon={FileText}
        iconColor="text-indigo-400"
        backHref="/business-intelligence"
        backLabel="BI Command Center"
        searchPlaceholder="Search Executive KPIs..."
        exportLabel="Export Report"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Strategic Intelligence" headers={["Report Portfolio", "Frequency", "Primary Audience", "Data Certification", "Status", "Trace"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.rep}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.freq}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.aud}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.cert}</td>
                <td className="py-4 px-5"><StatusBadge status={row.status} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Verified" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
