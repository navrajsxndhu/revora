import React from "react";
import { Sparkles, Target, TrendingUp, AlertTriangle, Map } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"cap":"Custom RXOS Rules","role":"UX Architect","pre":"10 standard reviews","meth":"Command Palette Hint","eng":"High","trace":"FDC-EV-401"},{"cap":"Automated Approvals","role":"Security Manager","pre":"50 manual approvals","meth":"End-of-flow Suggestion","eng":"High","trace":"FDC-EV-402"},{"cap":"Bulk Audit Export","role":"Compliance Officer","pre":"5 single exports","meth":"Smart Tooltip","eng":"Medium","trace":"FDC-EV-403"}];

const METRICS = [
    { label: "Feature Adoption", value: "88%", icon: Target, iconColor: "text-cyan-500", desc: "Discovery success rate", descColor: "text-cyan-400" },
    { label: "Advanced Users", value: "42%", icon: TrendingUp, iconColor: "text-emerald-500", desc: "Mastery of Pro features" },
    { label: "Ignored Features", value: "1.2%", icon: AlertTriangle, iconColor: "text-amber-500", desc: "Features requiring redesign" },
    { label: "Discovery Paths", value: "56", icon: Map, iconColor: "text-blue-500", desc: "Active capability tracks" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Feature Discovery Center"
        description="Gradually introduces advanced platform capabilities based on user maturity and role."
        icon={Sparkles}
        iconColor="text-cyan-500"
        backHref="/adoption"
        backLabel="Adoption Command Center"
        searchPlaceholder="Search Adoption Logs..."
        exportLabel="Export Report"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Learning & Adoption Activity" headers={["Advanced Capability", "Target Role", "Prerequisite Usage", "Discovery Method", "Engagement", "Trace"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.cap}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.role}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.pre}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.meth}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.eng}</td>

                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Record Audited" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
