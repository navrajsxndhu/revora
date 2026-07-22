import React from "react";
import { BookOpen, CheckCircle2, FileSignature, Timer, Rocket } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"item":"Review production deployment: Frontend V2","cat":"Release Management","effort":"Low (~2m)","priority":"High","status":"Pending Review","trace":"EDB-EV-301"},{"item":"Approve 2 security policy exemptions","cat":"Security Governance","effort":"Medium (~10m)","priority":"Critical","status":"Pending Review","trace":"EDB-EV-302"},{"item":"Finance reporting closes in 4 hours","cat":"Compliance","effort":"High (~45m)","priority":"High","status":"Pending Review","trace":"EDB-EV-303"}];

const METRICS = [
    { label: "Briefing State", value: "Normal", icon: CheckCircle2, iconColor: "text-emerald-500", desc: "No critical incidents", descColor: "text-emerald-400" },
    { label: "Req. Approvals", value: "3", icon: FileSignature, iconColor: "text-amber-500", desc: "Pending signature" },
    { label: "Est. Completion", value: "18 min", icon: Timer, iconColor: "text-blue-500", desc: "Total time to clear queue" },
    { label: "Deployments", value: "1", icon: Rocket, iconColor: "text-indigo-500", desc: "Production release ready" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Executive Daily Briefing"
        description="Distills enterprise state into a prioritized, plain-language operational summary."
        icon={BookOpen}
        iconColor="text-cyan-500"
        backHref="/intelligence"
        backLabel="Intelligence Command Center"
        searchPlaceholder="Search Intelligence Logs..."
        exportLabel="Export Report"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Intelligence Insights & Recommendations" headers={["Briefing Item", "Category", "Required Effort", "Constitutional Priority", "Status", "Trace"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.item}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.cat}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.effort}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.priority}</td>
                <td className="py-4 px-5"><StatusBadge status={row.status} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Record Audited" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
