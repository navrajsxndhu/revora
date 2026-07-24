import React from "react";
import { LayoutTemplate, Users, Timer, CheckCircle2, Eye } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { WorkspaceService } from "@/services/workspace-service";
import { BusinessIntelligenceService } from "@/services/bi-service";

const METRICS = [
    { label: "Executive Scorecards", value: "42", icon: Users, iconColor: "text-indigo-500", desc: "Director & Above", descColor: "text-indigo-400" },
    { label: "Data Freshness", value: "Real-time", icon: Timer, iconColor: "text-emerald-500", desc: "Constitutional sync" },
    { label: "Metric Alignment", value: "100%", icon: CheckCircle2, iconColor: "text-blue-500", desc: "Cross-functional parity" },
    { label: "Unread Briefings", value: "0", icon: Eye, iconColor: "text-emerald-500", desc: "Executive engagement" },
];

export default async function Page() {
  const session = await getServerSession(authOptions);
  if (!session?.user) return <div className="text-white p-8">Unauthorized</div>;

  const workspaces = await WorkspaceService.getUserWorkspaces(session.user.id);
  const workspaceId = workspaces[0]?.id;
  if (!workspaceId) return <div className="text-white p-8">No workspace found.</div>;

  const TABLE_DATA = await BusinessIntelligenceService.getScorecards(workspaceId, session.user.id, session.user.role);

  return (
    <PageShell>
      <ExecutiveHeader
        title="Executive Scorecard Center"
        description="Unified executive scorecards for every organizational level, providing a single source of truth."
        icon={LayoutTemplate}
        iconColor="text-indigo-400"
        backHref="/business-intelligence"
        backLabel="BI Command Center"
        searchPlaceholder="Search Executive KPIs..."
        exportLabel="Export Report"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Strategic Intelligence" headers={["Scorecard View", "Primary Stakeholder", "Core Metric 1", "Core Metric 2", "State", "Trace"]}>
          {TABLE_DATA.length === 0 ? (
            <tr><td colSpan={6} className="py-8 text-center text-slate-500">No scorecards available.</td></tr>
          ) : TABLE_DATA.map((row: any, i: number) => (
            <tr key={row.id || i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.card}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.stake}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.m1}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.m2}</td>
                <td className="py-4 px-5"><StatusBadge status={row.state} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Observed" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
