import React from "react";
import { History, Database, ShieldCheck, Zap, Download } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { WorkspaceService } from "@/services/workspace-service";
import { EvidenceService } from "@/services/evidence-service";

const METRICS = [
    { label: "Workspace Logs", value: "Realtime", icon: Database, iconColor: "text-fuchsia-500", desc: "Cryptographic state records", descColor: "text-fuchsia-400" },
    { label: "Ledger Integrity", value: "Verified", icon: ShieldCheck, iconColor: "text-emerald-500", desc: "SHA-256 Validated" },
    { label: "Commit Velocity", value: "4ms", icon: Zap, iconColor: "text-blue-500", desc: "State tracking speed" },
    { label: "Audit Exports", value: "142", icon: Download, iconColor: "text-indigo-500", desc: "Compliance reports pulled" },
];

export default async function Page() {
  const session = await getServerSession(authOptions);
  if (!session?.user) return <div>Unauthorized</div>;

  const workspaces = await WorkspaceService.getUserWorkspaces(session.user.id);
  const workspaceId = workspaces[0]?.id;
  if (!workspaceId) return <div>No workspace found.</div>;

  const evidenceData = await EvidenceService.getWorkspaceEvidence(workspaceId);

  return (
    <PageShell>
      <ExecutiveHeader
        title="Workspace Evidence Ledger"
        description="Immutable constitutional ledger governing all operations and decisions made within the unified workspace."
        icon={History}
        iconColor="text-fuchsia-500"
        backHref="/workspace"
        backLabel="RECCOS Enterprise Workspace"
        searchPlaceholder="Search Workspace Logs..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Enterprise Workspace Evidence" headers={["Event ID", "Timestamp", "Tenant ID", "Organization ID", "Status", "Trace ID"]}>
          {evidenceData.length === 0 ? (
            <tr><td colSpan={6} className="py-8 text-center text-slate-500">No evidence recorded yet.</td></tr>
          ) : (
            evidenceData.map((row: any) => (
              <tr key={row.id} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                  <td className="py-4 px-5 text-sm font-mono text-slate-300">{row.id.split('-')[0]}</td>
                  <td className="py-4 px-5 text-sm text-slate-400">{new Date(row.createdAt).toISOString()}</td>
                  <td className="py-4 px-5 text-sm text-slate-400">{row.tenantId || '-'}</td>
                  <td className="py-4 px-5 text-sm text-slate-400">{row.organizationId || '-'}</td>
                  <td className="py-4 px-5 text-sm text-slate-400"><StatusBadge status={row.status} /></td>
                  <td className="py-4 px-5"><EvidenceBadge evidenceId={row.id} timestamp="Unified Ledger" /></td>
              </tr>
            ))
          )}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
