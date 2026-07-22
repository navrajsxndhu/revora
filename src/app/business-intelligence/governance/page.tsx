import React from "react";
import { Scale, FileSignature, ShieldCheck, BookOpen, CheckCircle2 } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"pol":"No unofficial Revenue metrics","dom":"Finance / Sales","enf":"Must use Master Data","block":"14","gov":"Verified","trace":"BGB-EV-801"},{"pol":"Board Reports require C-Level signoff","dom":"Executive Comms","enf":"Approval Workflow","block":"2","gov":"Verified","trace":"BGB-EV-802"},{"pol":"Forecasts must publish confidence %","dom":"Data Science","enf":"Metadata requirement","block":"42","gov":"Verified","trace":"BGB-EV-803"}];

const METRICS = [
    { label: "Certified Reports", value: "142", icon: FileSignature, iconColor: "text-indigo-500", desc: "Board approved", descColor: "text-indigo-400" },
    { label: "Shadow IT BI", value: "0", icon: ShieldCheck, iconColor: "text-emerald-500", desc: "Unsanctioned dashboards" },
    { label: "Definition Conflicts", value: "0", icon: BookOpen, iconColor: "text-blue-500", desc: "Unified terminology" },
    { label: "Governance Adherence", value: "100%", icon: CheckCircle2, iconColor: "text-emerald-500", desc: "Strict compliance" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="BI Governance Board"
        description="Constitutional governance ensuring executive reporting remains trusted, standardized, and evidence-based."
        icon={Scale}
        iconColor="text-indigo-400"
        backHref="/business-intelligence"
        backLabel="BI Command Center"
        searchPlaceholder="Search Executive KPIs..."
        exportLabel="Export Report"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Strategic Intelligence" headers={["Governance Policy", "Target Domain", "Enforcement Logic", "Violations Blocked", "Governance", "Execution ID"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.pol}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.dom}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.enf}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.block}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.gov}</td>

                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Verified" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
