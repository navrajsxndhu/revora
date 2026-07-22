import React from "react";
import { ShieldAlert, Timer, Database, GraduationCap, Zap, BarChart2, TrendingDown } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"cat":"Permission Confusion","state":"Near Zero","imp":"Saved 400 IT Hours","trend":"-14%","gov":"Verified","trace":"ETA-EV-701"},{"cat":"Policy Disputes","state":"14 Active","imp":"Minor Friction","trend":"-2%","gov":"Review Required","trace":"ETA-EV-702"},{"cat":"Security Anxiety","state":"Low","imp":"Faster feature deployment","trend":"-8%","gov":"Verified","trace":"ETA-EV-703"}];

const METRICS = [
    { label: "Friction Reduction", value: "-42%", icon: Zap, iconColor: "text-cyan-500", desc: "Fewer 'Why is this blocked?'", descColor: "text-cyan-400" },
    { label: "Approval Speed", value: "+24%", icon: Timer, iconColor: "text-emerald-500", desc: "Due to clear explanations" },
    { label: "Onboarding Time", value: "-12 Days", icon: GraduationCap, iconColor: "text-blue-500", desc: "Faster contextual learning" },
    { label: "Data Requests", value: "-88%", icon: Database, iconColor: "text-emerald-500", desc: "Users self-serve privacy info" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Enterprise Transparency Analytics"
        description="Executive intelligence correlating trust with operational speed and support reduction."
        icon={BarChart2}
        iconColor="text-cyan-500"
        backHref="/trust"
        backLabel="RTSTOS Command Center"
        searchPlaceholder="Search Trust Logs..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Trust & Transparency Metrics" headers={["Metric Category", "Current State", "Impact on Business", "Trend (MoM)", "Governance", "Trace"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.cat}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.state}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.imp}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.trend}</td>
                <td className="py-4 px-5"><StatusBadge status={row.gov} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Verified Runtime" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
