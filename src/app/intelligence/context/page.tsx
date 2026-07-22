import React from "react";
import { Network, Database, GitMerge, ShieldCheck, Layers } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"asset":"Auth Microservice","type":"Depends On","to":"Redis Cache Cluster","cap":"User Authentication","status":"Compliant","trace":"CTX-EV-501"},{"asset":"Payment Gateway","type":"Managed By","to":"Team FinTech Core","cap":"Revenue Processing","status":"Compliant","trace":"CTX-EV-502"},{"asset":"Legacy User DB","type":"Migrating To","to":"Global Postgres Ring","cap":"Data Storage","status":"Warning","trace":"CTX-EV-503"}];

const METRICS = [
    { label: "Context Nodes", value: "14.2K", icon: Database, iconColor: "text-cyan-500", desc: "Mapped relationships", descColor: "text-cyan-400" },
    { label: "Impact Vectors", value: "84", icon: GitMerge, iconColor: "text-blue-500", desc: "Current dependency chains" },
    { label: "Orphaned Assets", value: "0", icon: ShieldCheck, iconColor: "text-emerald-500", desc: "100% resource tracking" },
    { label: "Context Depth", value: "Level 6", icon: Layers, iconColor: "text-indigo-500", desc: "Max relational depth" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Enterprise Context Engine"
        description="Maps relationships between infrastructure, teams, and business outcomes."
        icon={Network}
        iconColor="text-cyan-500"
        backHref="/intelligence"
        backLabel="Intelligence Command Center"
        searchPlaceholder="Search Intelligence Logs..."
        exportLabel="Export Report"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Intelligence Insights & Recommendations" headers={["Asset / Entity", "Relationship Type", "Connected To", "Business Capability", "Status", "Trace"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.asset}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.type}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.to}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.cap}</td>
                <td className="py-4 px-5"><StatusBadge status={row.status} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Record Audited" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
