import React from "react";
import { Sparkles, CheckCircle2, Cpu, BarChart2, Network } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"src":"Incident #8012 (DB Lock)","rec":"Incident #7044 (DB Lock)","vec":"Root Cause Match","val":"Faster Resolution","conf":"High","trace":"RSE-EV-601"},{"src":"Data Retention Policy v2","rec":"GDPR Compliance Check","vec":"Regulatory Tagging","val":"Audit Prevention","conf":"High","trace":"RSE-EV-602"},{"src":"React Component: Table","rec":"Design System: Grid","vec":"UI Architecture","val":"Code Reuse","conf":"Medium","trace":"RSE-EV-603"}];

const METRICS = [
    { label: "Acceptance Rate", value: "42%", icon: CheckCircle2, iconColor: "text-cyan-500", desc: "Users clicking suggestions", descColor: "text-cyan-400" },
    { label: "Generated Daily", value: "1.2M", icon: Cpu, iconColor: "text-emerald-500", desc: "Similarity vectors computed" },
    { label: "Avg Relevance", value: "0.84", icon: BarChart2, iconColor: "text-blue-500", desc: "Cosine similarity score" },
    { label: "Knowledge Silos", value: "-14%", icon: Network, iconColor: "text-amber-500", desc: "Cross-dept discoveries" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Recommendation & Similarity Engine"
        description="Proactively suggesting related enterprise knowledge based on structural similarity."
        icon={Sparkles}
        iconColor="text-cyan-500"
        backHref="/search"
        backLabel="RSKIOS Command Center"
        searchPlaceholder="Search Knowledge Context..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Search & Discovery Metrics" headers={["Source Asset", "Recommended Asset", "Similarity Vector", "Business Value", "Confidence", "Evidence"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.src}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.rec}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.vec}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.val}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.conf}</td>

                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Verified Result" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
