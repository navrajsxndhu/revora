import React from "react";
import { FileJson, BookOpen, TableProperties, Bot, AlertTriangle } from "lucide-react";
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
    { label: "Business Glossary", value: "14.2K", icon: BookOpen, iconColor: "text-indigo-500", desc: "Defined terms", descColor: "text-indigo-400" },
    { label: "Schema Coverage", value: "98%", icon: TableProperties, iconColor: "text-emerald-500", desc: "Columns documented" },
    { label: "Auto-Discovery", value: "Active", icon: Bot, iconColor: "text-blue-500", desc: "AI classification" },
    { label: "Orphaned Columns", value: "12", icon: AlertTriangle, iconColor: "text-rose-500", desc: "Flagged for review" },
];

export default async function Page() {
  const session = await getServerSession(authOptions);
  if (!session?.user) return <div className="text-white p-8">Unauthorized</div>;

  const workspaces = await WorkspaceService.getUserWorkspaces(session.user.id);
  const workspaceId = workspaces[0]?.id;
  if (!workspaceId) return <div className="text-white p-8">No workspace found.</div>;

  const TABLE_DATA = await DataFabricService.getMetadata(workspaceId, session.user.id, session.user.role);

  return (
    <PageShell>
      <ExecutiveHeader
        title="Metadata Intelligence Engine"
        description="Translates technical schemas into understandable business intelligence and clear governance definitions."
        icon={FileJson}
        iconColor="text-indigo-400"
        backHref="/data-fabric"
        backLabel="Data Fabric Hub"
        searchPlaceholder="Search Data Assets..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Data Governance Records" headers={["Physical Asset", "Technical Field", "Business Term", "Description", "Classification", "Execution ID"]}>
          {TABLE_DATA.length === 0 ? (
            <tr><td colSpan={6} className="py-8 text-center text-slate-500">No metadata available.</td></tr>
          ) : TABLE_DATA.map((row: any, i: number) => (
            <tr key={row.id || i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.asset}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.fld}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.term}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.desc}</td>
                <td className="py-4 px-5"><StatusBadge status={row.class} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Observed" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
