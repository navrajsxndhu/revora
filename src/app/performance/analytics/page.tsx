import React from "react";
import { BarChart2, Gauge, Image, MousePointerClick, TrendingUp } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"mod":"/engineering","lcp":"1.1s","tti":"1.3s","lat":"45ms","status":"Optimal","trace":"PAN-EV-801"},{"mod":"/search","lcp":"0.8s","tti":"1.0s","lat":"24ms","status":"Instant","trace":"PAN-EV-802"},{"mod":"/collaboration","lcp":"1.8s","tti":"2.1s","lat":"120ms","status":"Degraded","trace":"PAN-EV-803"}];

const METRICS = [
    { label: "Performance Index", value: "98.2", icon: Gauge, iconColor: "text-cyan-500", desc: "Overall enterprise score", descColor: "text-cyan-400" },
    { label: "LCP (Largest Paint)", value: "1.2s", icon: Image, iconColor: "text-emerald-500", desc: "Core Web Vitals" },
    { label: "TTI (Interactive)", value: "1.4s", icon: MousePointerClick, iconColor: "text-blue-500", desc: "Ready for human input" },
    { label: "Task Speed", value: "+42%", icon: TrendingUp, iconColor: "text-emerald-500", desc: "Workflow completion" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Performance Analytics"
        description="Executive intelligence aggregating technical speeds with perceived human experience metrics."
        icon={BarChart2}
        iconColor="text-cyan-500"
        backHref="/performance"
        backLabel="RPMDOS Command Center"
        searchPlaceholder="Search Performance Logs..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Performance & Motion Metrics" headers={["Enterprise Module", "LCP", "TTI", "Interaction Latency", "Status", "Evidence"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.mod}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.lcp}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.tti}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.lat}</td>
                <td className="py-4 px-5"><StatusBadge status={row.status} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Verified Runtime" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
