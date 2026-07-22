import React from "react";
import { Library, BookMarked, TrendingUp, Unlock, XCircle } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"tpl":"Standard Employee Onboarding","cat":"HR / IT","cert":"ISO 27001, SOC2","count":"14,204","status":"Active","trace":"EPL-EV-401"},{"tpl":"Emergency Prod Rollback","cat":"Engineering Ops","cert":"SOC2","count":"412","status":"Active","trace":"EPL-EV-402"},{"tpl":"Legacy Vendor Approval","cat":"Procurement","cert":"None (Deprecated)","count":"0","status":"Blocked","trace":"EPL-EV-403"}];

const METRICS = [
    { label: "Governed Templates", value: "84", icon: BookMarked, iconColor: "text-indigo-500", desc: "Available for use", descColor: "text-indigo-400" },
    { label: "Template Adoption", value: "92%", icon: TrendingUp, iconColor: "text-emerald-500", desc: "Vs custom creation" },
    { label: "Most Used", value: "Access Req", icon: Unlock, iconColor: "text-blue-500", desc: "Top category" },
    { label: "Deprecations", value: "4", icon: XCircle, iconColor: "text-slate-500", desc: "Outdated policies" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Enterprise Process Library"
        description="A centralized catalog of reusable, pre-governed workflow templates for standardized enterprise operations."
        icon={Library}
        iconColor="text-indigo-400"
        backHref="/orchestration"
        backLabel="Orchestration Hub"
        searchPlaceholder="Search Orchestrations..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Orchestration Metrics" headers={["Template Name", "Category", "Compliance Cert", "Usage Count", "Status", "Execution ID"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.tpl}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.cat}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.cert}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.count}</td>
                <td className="py-4 px-5"><StatusBadge status={row.status} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Orchestrated" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
