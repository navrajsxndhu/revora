import React from "react";
import { DatabaseBackup, Box, GitMerge, Lock, CheckCircle2 } from "lucide-react";
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
    { label: "Master Entities", value: "42", icon: Box, iconColor: "text-indigo-500", desc: "Governed domains", descColor: "text-indigo-400" },
    { label: "Data Duplicates", value: "0.1%", icon: GitMerge, iconColor: "text-emerald-500", desc: "Automatic merging" },
    { label: "System of Record", value: "Enforced", icon: Lock, iconColor: "text-blue-500", desc: "For all entities" },
    { label: "Data Consistency", value: "99.9%", icon: CheckCircle2, iconColor: "text-emerald-500", desc: "Across replicas" },
];

export default async function Page() {
  const session = await getServerSession(authOptions);
  if (!session?.user) return <div className="text-white p-8">Unauthorized</div>;

  const workspaces = await WorkspaceService.getUserWorkspaces(session.user.id);
  const workspaceId = workspaces[0]?.id;
  if (!workspaceId) return <div className="text-white p-8">No workspace found.</div>;

  const TABLE_DATA = await DataFabricService.getMasterData(workspaceId, session.user.id, session.user.role);

  return (
    <PageShell>
      <ExecutiveHeader
        title="Master Data Governance Center"
        description="Maintains constitutional authority over core enterprise entities to prevent duplication and ambiguity."
        icon={DatabaseBackup}
        iconColor="text-indigo-400"
        backHref="/data-fabric"
        backLabel="Data Fabric Hub"
        searchPlaceholder="Search Data Assets..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Data Governance Records" headers={["Master Domain", "System of Record", "Data Owner", "Sync Frequency", "Governance", "Trace"]}>
          {TABLE_DATA.length === 0 ? (
            <tr><td colSpan={6} className="py-8 text-center text-slate-500">No master data available.</td></tr>
          ) : TABLE_DATA.map((row: any, i: number) => (
            <tr key={row.id || i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.dom}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.sor}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.own}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.sync}</td>
                <td className="py-4 px-5"><StatusBadge status={row.gov} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Observed" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
