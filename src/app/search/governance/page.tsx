import React from "react";
import { ShieldCheck, Lock, FileCode, ClipboardList, CheckCircle2 } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { WorkspaceService } from "@/services/workspace-service";
import { SearchService } from "@/services/search-service";

const METRICS = [
    { label: "Policy Adherence", value: "100%", icon: Lock, iconColor: "text-cyan-500", desc: "Zero data leakage", descColor: "text-cyan-400" },
    { label: "Active Policies", value: "42", icon: FileCode, iconColor: "text-blue-500", desc: "Search restriction rules" },
    { label: "Pending Exemptions", value: "2", icon: ClipboardList, iconColor: "text-amber-500", desc: "Awaiting board approval" },
    { label: "Index Audits", value: "Passed", icon: CheckCircle2, iconColor: "text-emerald-500", desc: "Daily cryptographic check" },
];

export default async function Page() {
  const session = await getServerSession(authOptions);
  if (!session?.user) return <div className="text-white p-8">Unauthorized</div>;

  const workspaces = await WorkspaceService.getUserWorkspaces(session.user.id);
  const workspaceId = workspaces[0]?.id;
  if (!workspaceId) return <div className="text-white p-8">No workspace found.</div>;

  const TABLE_DATA = await SearchService.getGovernance(workspaceId, session.user.id, session.user.role);

  return (
    <PageShell>
      <ExecutiveHeader
        title="Search Governance Board"
        description="Constitutional oversight managing search indices, exemptions, and sensitive knowledge visibility."
        icon={ShieldCheck}
        iconColor="text-cyan-500"
        backHref="/search"
        backLabel="RSKIOS Command Center"
        searchPlaceholder="Search Knowledge Context..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Search & Discovery Metrics" headers={["Governance Policy", "Target Asset Class", "Restriction Type", "Authorizer", "Status", "Trace"]}>
          {TABLE_DATA.length === 0 ? (
            <tr><td colSpan={6} className="py-8 text-center text-slate-500">No governance policies recorded.</td></tr>
          ) : TABLE_DATA.map((row: any, i: number) => (
            <tr key={row.id || i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.policy}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.target}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.restriction}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.authority}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.status}</td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Verified Result" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
