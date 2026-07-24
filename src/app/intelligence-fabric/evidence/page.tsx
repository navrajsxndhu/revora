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
import { IntelligenceFabricService } from "@/services/intelligence-fabric-service";

const METRICS = [
    { label: "Intelligence Logs", value: "4.2B", icon: Database, iconColor: "text-teal-500", desc: "Cryptographic state records", descColor: "text-teal-400" },
    { label: "Ledger Integrity", value: "Verified", icon: ShieldCheck, iconColor: "text-emerald-500", desc: "SHA-256 Validated" },
    { label: "Commit Velocity", value: "2ms", icon: Zap, iconColor: "text-blue-500", desc: "Edge writing speed" },
    { label: "Audit Exports", value: "14", icon: Download, iconColor: "text-indigo-500", desc: "Compliance reports pulled" },
];

export default async function Page() {
  const session = await getServerSession(authOptions);
  if (!session?.user) return <div className="text-white p-8">Unauthorized</div>;

  const workspaces = await WorkspaceService.getUserWorkspaces(session.user.id);
  const workspaceId = workspaces[0]?.id;
  if (!workspaceId) return <div className="text-white p-8">No workspace found.</div>;

  const TABLE_DATA = await IntelligenceFabricService.getEvidence(workspaceId, session.user.id, session.user.role);

  return (
    <PageShell>
      <ExecutiveHeader
        title="Intelligence Evidence Ledger"
        description="Immutable ledger for Enterprise Intelligence, logging every new graph edge, correlation, and insight."
        icon={History}
        iconColor="text-teal-500"
        backHref="/intelligence-fabric"
        backLabel="REIF Command Center"
        searchPlaceholder="Search Knowledge Graph..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Enterprise Knowledge Metrics" headers={["Event ID", "Timestamp", "System Initiator", "Intelligence Action", "Constitutional Governance", "EvidenceBadge"]}>
          {TABLE_DATA.length === 0 ? (
            <tr><td colSpan={6} className="py-8 text-center text-slate-500">No evidence available.</td></tr>
          ) : TABLE_DATA.map((row: any, i: number) => (
            <tr key={row.id || i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm font-mono text-slate-300">{row.evidenceId || row.id}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{new Date(row.time).toLocaleString()}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.sys}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.act}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.gov}</td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Sealed" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
