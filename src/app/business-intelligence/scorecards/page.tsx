import React from "react";
import { LayoutTemplate, Users, Timer, CheckCircle2, Eye } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"card":"CEO Global Overview","stake":"Chief Executive Officer","m1":"ARR: $412M","m2":"EBITDA: 24%","state":"Optimal","trace":"ESC-EV-301"},{"card":"CISO Risk Profile","stake":"Chief Info Security Officer","m1":"Open Crit Vulns: 0","m2":"Compliance Score: A+","state":"Optimal","trace":"ESC-EV-302"},{"card":"Engineering Velocity","stake":"VP Engineering","m1":"DORA: Elite","m2":"MTTR: 14m","state":"Optimal","trace":"ESC-EV-303"}];

const METRICS = [
    { label: "Executive Scorecards", value: "42", icon: Users, iconColor: "text-indigo-500", desc: "Director & Above", descColor: "text-indigo-400" },
    { label: "Data Freshness", value: "Real-time", icon: Timer, iconColor: "text-emerald-500", desc: "Constitutional sync" },
    { label: "Metric Alignment", value: "100%", icon: CheckCircle2, iconColor: "text-blue-500", desc: "Cross-functional parity" },
    { label: "Unread Briefings", value: "0", icon: Eye, iconColor: "text-emerald-500", desc: "Executive engagement" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Executive Scorecard Center"
        description="Unified executive scorecards for every organizational level, providing a single source of truth."
        icon={LayoutTemplate}
        iconColor="text-indigo-400"
        backHref="/business-intelligence"
        backLabel="BI Command Center"
        searchPlaceholder="Search Executive KPIs..."
        exportLabel="Export Report"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Strategic Intelligence" headers={["Scorecard View", "Primary Stakeholder", "Core Metric 1", "Core Metric 2", "State", "Trace"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.card}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.stake}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.m1}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.m2}</td>
                <td className="py-4 px-5"><StatusBadge status={row.state} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Verified" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
