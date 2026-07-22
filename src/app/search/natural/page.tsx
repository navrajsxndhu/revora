import React from "react";
import { MessageSquare, CheckCircle2, Activity, Zap, TrendingDown } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"q":"Show apps with incidents","int":"Filter: Application, Status: Incident","cat":"Infrastructure","match":"98%","conf":"High","trace":"NLS-EV-201"},{"q":"Who owns CRM?","int":"Entity: CRM, Field: Owner","cat":"Directory","match":"100%","conf":"High","trace":"NLS-EV-202"},{"q":"Unapproved invoices","int":"Filter: Finance, Status: Pending Approval","cat":"Finance","match":"92%","conf":"Medium","trace":"NLS-EV-203"}];

const METRICS = [
    { label: "Intent Accuracy", value: "96%", icon: CheckCircle2, iconColor: "text-cyan-500", desc: "Successful interpretations", descColor: "text-cyan-400" },
    { label: "Daily Queries", value: "42.1K", icon: Activity, iconColor: "text-emerald-500", desc: "Across 14 departments" },
    { label: "Avg Latency", value: "24ms", icon: Zap, iconColor: "text-blue-500", desc: "Inference speed" },
    { label: "Failed Matches", value: "1.4%", icon: TrendingDown, iconColor: "text-rose-500", desc: "Fallback to keywords" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Natural Language Search"
        description="Intent-based discovery eliminating the need for exact keyword matching."
        icon={MessageSquare}
        iconColor="text-cyan-500"
        backHref="/search"
        backLabel="RSKIOS Command Center"
        searchPlaceholder="Search Knowledge Context..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Search & Discovery Metrics" headers={["Natural Query", "Interpreted Intent", "Top Result Category", "Context Match", "Confidence", "Evidence"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.q}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.int}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.cat}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.match}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.conf}</td>

                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Verified Result" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
