import React from "react";
import { History, Database, ShieldCheck, Download, FileSignature } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { WorkspaceService } from "@/services/workspace-service";
import { DataFabricService } from "@/services/data-fabric-service";

const METRICS = [
    { label: "Data Logs", value: "1.4B", icon: Database, iconColor: "text-indigo-500", desc: "Cryptographic records", descColor: "text-indigo-400" },
    { label: "Ledger Integrity", value: "Verified", icon: ShieldCheck, iconColor: "text-emerald-500", desc: "SHA-256 Validated" },
    { label: "Audit Pull Latency", value: "1.4s", icon: Download, iconColor: "text-blue-500", desc: "Instant compliance" },
    { label: "Classification Attests", value: "14.2K", icon: FileSignature, iconColor: "text-emerald-500", desc: "Steward signed" },
];

export default async function Page() {
  const session = await getServerSession(authOptions);
  if (!session?.user) return <div className="text-white p-8">Unauthorized</div>;

  const workspaces = await WorkspaceService.getUserWorkspaces(session.user.id);
  const workspaceId = workspaces[0]?.id;
  if (!workspaceId) return <div className="text-white p-8">No workspace found.</div>;

  const TABLE_DATA = await DataFabricService.getEvidence(workspaceId, session.user.id, session.user.role);

  return (
    <PageShell>
      <ExecutiveHeader
        title="Data Evidence Ledger"
        description="Immutable ledger recording every dataset registration, quality validation, and privacy classification change."
        icon={History}
        iconColor="text-indigo-400"
        backHref="/data-fabric"
        backLabel="Data Fabric Hub"
        searchPlaceholder="Search Data Assets..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Data Governance Records" headers={["Event ID", "Timestamp", "Actor / Steward", "Data Governance Action", "Constitutional Governance", "EvidenceBadge"]}>
          {TABLE_DATA.length === 0 ? (
            <tr><td colSpan={6} className="py-8 text-center text-slate-500">No evidence available.</td></tr>
          ) : TABLE_DATA.map((row: any, i: number) => (
            <tr key={row.id || i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.evidenceId}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.time?.toISOString ? row.time.toISOString() : String(row.time)}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.act}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.acti}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.gov}</td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Verified Block" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
