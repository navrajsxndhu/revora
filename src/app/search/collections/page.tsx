import React from "react";
import { FolderHeart, Timer, Share2, History } from "lucide-react";
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
    { label: "Active Collections", value: "8.4K", icon: FolderHeart, iconColor: "text-cyan-500", desc: "Team & Personal spaces", descColor: "text-cyan-400" },
    { label: "Time Saved", value: "1.2M", icon: Timer, iconColor: "text-emerald-500", desc: "Hours recovered annually" },
    { label: "Most Shared", value: "142", icon: Share2, iconColor: "text-blue-500", desc: "Collections distributed" },
    { label: "Stale Collections", value: "4.2%", icon: History, iconColor: "text-amber-500", desc: "Unused &gt; 90 days" },
];

export default async function Page() {
  const session = await getServerSession(authOptions);
  if (!session?.user) return <div className="text-white p-8">Unauthorized</div>;

  const workspaces = await WorkspaceService.getUserWorkspaces(session.user.id);
  const workspaceId = workspaces[0]?.id;
  if (!workspaceId) return <div className="text-white p-8">No workspace found.</div>;

  const TABLE_DATA = await SearchService.getCollections(workspaceId, session.user.id, session.user.role);

  return (
    <PageShell>
      <ExecutiveHeader
        title="Saved Searches & Workspace Collections"
        description="Organizing complex search logic into reusable knowledge repositories."
        icon={FolderHeart}
        iconColor="text-cyan-500"
        backHref="/search"
        backLabel="RSKIOS Command Center"
        searchPlaceholder="Search Knowledge Context..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Search & Discovery Metrics" headers={["Collection Name", "Owner", "Contained Queries", "Access Level", "Governance", "Execution ID"]}>
          {TABLE_DATA.length === 0 ? (
            <tr><td colSpan={6} className="py-8 text-center text-slate-500">No collections saved.</td></tr>
          ) : TABLE_DATA.map((row: any, i: number) => (
            <tr key={row.id || i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.name}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.owner}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.queryCount}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.access}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.governance}</td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Verified Result" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
