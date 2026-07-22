import React from "react";
import { MousePointerClick, Target, TrendingUp, BarChart2, ShieldCheck } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"q":"Audit logs","act":"Navigate: /engineering/audit","mod":"ECARGQAP","rbac":"Permitted","conf":"High","trace":"UCS-EV-301"},{"q":"Approve expense req","act":"Trigger: Finance Approval Flow","mod":"Operations","rbac":"Permitted","conf":"High","trace":"UCS-EV-302"},{"q":"Drop staging DB","act":"Trigger: Infrastructure Destruct","mod":"DevOps","rbac":"Denied (RBAC)","conf":"High Risk","trace":"UCS-EV-303"}];

const METRICS = [
    { label: "Actionable Results", value: "8.4K", icon: Target, iconColor: "text-cyan-500", desc: "Direct UI triggers", descColor: "text-cyan-400" },
    { label: "Execution Speed", value: "+45%", icon: TrendingUp, iconColor: "text-emerald-500", desc: "Faster than navigation" },
    { label: "Popular Actions", value: "14", icon: BarChart2, iconColor: "text-blue-500", desc: "Represent 80% of volume" },
    { label: "Denied Actions", value: "124", icon: ShieldCheck, iconColor: "text-rose-500", desc: "Blocked by RBAC" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Universal Command Search"
        description="Transforming search from discovery to immediate action execution."
        icon={MousePointerClick}
        iconColor="text-cyan-500"
        backHref="/search"
        backLabel="RSKIOS Command Center"
        searchPlaceholder="Search Knowledge Context..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Search & Discovery Metrics" headers={["Search Query", "Executed Action", "Target Module", "RBAC Status", "Confidence", "Evidence"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.q}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.act}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.mod}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.rbac}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.conf}</td>

                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Verified Result" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
