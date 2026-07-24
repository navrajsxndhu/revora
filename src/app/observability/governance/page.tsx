import React from "react";
import { Scale, FileSignature, ShieldCheck, Lock, Clock } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { WorkspaceService } from "@/services/workspace-service";
import { ObservabilityService } from "@/services/observability-service";

const METRICS = [
    { label: "Monitoring Policies", value: "42", icon: FileSignature, iconColor: "text-indigo-500", desc: "Constitutional rules", descColor: "text-indigo-400" },
    { label: "Coverage Compliance", value: "100%", icon: ShieldCheck, iconColor: "text-emerald-500", desc: "All Tier 1 mapped" },
    { label: "Deployment Blocks", value: "14", icon: Lock, iconColor: "text-blue-500", desc: "Missing telemetry" },
    { label: "Audit Readiness", value: "Immediate", icon: Clock, iconColor: "text-emerald-500", desc: "Evidence backed" },
];

export default async function Page() {
  const session = await getServerSession(authOptions);
  if (!session?.user) return <div className="text-white p-8">Unauthorized</div>;

  const workspaces = await WorkspaceService.getUserWorkspaces(session.user.id);
  const workspaceId = workspaces[0]?.id;
  if (!workspaceId) return <div className="text-white p-8">No workspace found.</div>;

  const TABLE_DATA = await ObservabilityService.getGovernance(workspaceId, session.user.id, session.user.role);

  return (
    <PageShell>
      <ExecutiveHeader
        title="Observability Governance Board"
        description="Constitutional oversight enforcing strict monitoring standards, SLO adherence, and on-call policies."
        icon={Scale}
        iconColor="text-indigo-400"
        backHref="/observability"
        backLabel="Observability Command Center"
        searchPlaceholder="Search Operational Signals..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Operational Telemetry" headers={["Governance Rule", "Target Domain", "Enforcement Logic", "Violations Blocked", "Governance", "Execution ID"]}>
          {TABLE_DATA.length === 0 ? (
            <tr><td colSpan={6} className="py-8 text-center text-slate-500">No governance data available.</td></tr>
          ) : TABLE_DATA.map((row: any, i: number) => (
            <tr key={row.id || i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.rule}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.domain}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.enforcement}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.blockedCount}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.governance}</td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Verified Block" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
