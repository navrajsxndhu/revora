import React from "react";
import { Tags, Settings, Target, TrendingDown, Lock } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"ctx":"Developer (Staging)","fil":"Env: Staging, Role: Eng","mod":"Scoped to staging cluster","hid":"Prod databases","status":"Verified","trace":"CTX-EV-501"},{"ctx":"HR Manager","fil":"Dept: HR, Clearance: L2","mod":"Prioritized employee records","hid":"Technical architecture","status":"Verified","trace":"CTX-EV-502"},{"ctx":"Security Auditor","fil":"Clearance: Global (Read)","mod":"Bypassed department silos","hid":"None","status":"Verified","trace":"CTX-EV-503"}];

const METRICS = [
    { label: "Contextual Filters", value: "94", icon: Settings, iconColor: "text-cyan-500", desc: "Active environment flags", descColor: "text-cyan-400" },
    { label: "Filter Accuracy", value: "99.8%", icon: Target, iconColor: "text-emerald-500", desc: "Context match rate" },
    { label: "Noised Reduced", value: "-64%", icon: TrendingDown, iconColor: "text-blue-500", desc: "Irrelevant results hidden" },
    { label: "RBAC Enforcement", value: "Strict", icon: Lock, iconColor: "text-rose-500", desc: "Zero data leakage" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Smart Filters & Context Engine"
        description="Dynamic query adaptation based on user role, environment, and current workspace."
        icon={Tags}
        iconColor="text-cyan-500"
        backHref="/search"
        backLabel="RSKIOS Command Center"
        searchPlaceholder="Search Knowledge Context..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Search & Discovery Metrics" headers={["User Context", "Applied Filters", "Query Modification", "Information Hidden", "Status", "Trace"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.ctx}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.fil}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.mod}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.hid}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.status}</td>

                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Verified Result" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
