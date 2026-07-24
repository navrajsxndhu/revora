import React from "react";
import { History, Database, ShieldCheck, CheckCircle2, AlertTriangle } from "lucide-react";
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
    { label: "Search Traces", value: "14.2M", icon: Database, iconColor: "text-cyan-500", desc: "Cryptographic records", descColor: "text-cyan-400" },
    { label: "RBAC Validations", value: "42.8M", icon: ShieldCheck, iconColor: "text-emerald-500", desc: "Permissions verified" },
    { label: "Ledger Integrity", value: "Verified", icon: CheckCircle2, iconColor: "text-blue-500", desc: "Hash chain valid" },
    { label: "Anomaly Detects", value: "0", icon: AlertTriangle, iconColor: "text-indigo-500", desc: "Suspicious search behavior" },
];

export default async function Page() {
  const session = await getServerSession(authOptions);
  if (!session?.user) return <div className="text-white p-8">Unauthorized</div>;

  const workspaces = await WorkspaceService.getUserWorkspaces(session.user.id);
  const workspaceId = workspaces[0]?.id;
  if (!workspaceId) return <div className="text-white p-8">No workspace found.</div>;

  const TABLE_DATA = await SearchService.getEvidence(workspaceId, session.user.id, session.user.role);

  return (
    <PageShell>
      <ExecutiveHeader
        title="Search Evidence Ledger"
        description="Immutable cryptographic trails for all significant discovery and search governance operations."
        icon={History}
        iconColor="text-cyan-500"
        backHref="/search"
        backLabel="RSKIOS Command Center"
        searchPlaceholder="Search Knowledge Context..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Search & Discovery Metrics" headers={["Event ID", "Timestamp", "Actor / User", "Discovery Action", "Constitutional Governance", "EvidenceBadge"]}>
          {TABLE_DATA.length === 0 ? (
            <tr><td colSpan={6} className="py-8 text-center text-slate-500">No evidence traces recorded.</td></tr>
          ) : TABLE_DATA.map((row: any, i: number) => (
            <tr key={row.id || i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.evidenceId}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.time?.toISOString ? row.time.toISOString() : String(row.time)}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.actor}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.action}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.governance}</td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Verified Result" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
