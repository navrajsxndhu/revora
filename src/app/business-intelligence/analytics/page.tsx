import React from "react";
import { BarChart3, Award, Eye, Zap, Bot } from "lucide-react";
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
    { label: "Intelligence ROI", value: "$14.2M", icon: Award, iconColor: "text-indigo-500", desc: "Value of data decisions", descColor: "text-indigo-400" },
    { label: "Dashboard Usage", value: "412K", icon: Eye, iconColor: "text-blue-500", desc: "Monthly executive views" },
    { label: "Data Latency", value: "&lt; 2s", icon: Zap, iconColor: "text-emerald-500", desc: "Warehouse to UI" },
    { label: "Automated Briefs", value: "84%", icon: Bot, iconColor: "text-emerald-500", desc: "Zero manual reporting" },
];

export default async function Page() {
  const session = await getServerSession(authOptions);
  if (!session?.user) return <div className="text-white p-8">Unauthorized</div>;

  const workspaces = await WorkspaceService.getUserWorkspaces(session.user.id);
  const workspaceId = workspaces[0]?.id;
  if (!workspaceId) return <div className="text-white p-8">No workspace found.</div>;

  const TABLE_DATA = await BusinessIntelligenceService.getAnalytics(workspaceId, session.user.id, session.user.role);

  return (
    <PageShell>
      <ExecutiveHeader
        title="Business Intelligence Analytics"
        description="Measures enterprise performance improvement, decision velocity, and strategic outcome achievement."
        icon={BarChart3}
        iconColor="text-indigo-400"
        backHref="/business-intelligence"
        backLabel="BI Command Center"
        searchPlaceholder="Search Executive KPIs..."
        exportLabel="Export Report"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Strategic Intelligence" headers={["BI Capability", "Adoption Rate", "Decision Impact", "Time Saved", "State", "Trace"]}>
          {TABLE_DATA.length === 0 ? (
            <tr><td colSpan={6} className="py-8 text-center text-slate-500">No analytics data available.</td></tr>
          ) : TABLE_DATA.map((row: any, i: number) => (
            <tr key={row.id || i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.cap}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.adopt}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.imp}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.time}</td>
                <td className="py-4 px-5"><StatusBadge status={row.state} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Observed" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
