import React from "react";
import { ShoppingBag, Award, Download, Timer, Lock } from "lucide-react";
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
    { label: "Certified Products", value: "412", icon: Award, iconColor: "text-indigo-500", desc: "Ready for consumption", descColor: "text-indigo-400" },
    { label: "Data Requests", value: "14.2K", icon: Download, iconColor: "text-emerald-500", desc: "Monthly API/Report pulls" },
    { label: "Approval Latency", value: "4.2h", icon: Timer, iconColor: "text-blue-500", desc: "Avg request fulfillment" },
    { label: "Unauthorized Access", value: "0", icon: Lock, iconColor: "text-emerald-500", desc: "Governed delivery" },
];

export default async function Page() {
  const session = await getServerSession(authOptions);
  if (!session?.user) return <div className="text-white p-8">Unauthorized</div>;

  const workspaces = await WorkspaceService.getUserWorkspaces(session.user.id);
  const workspaceId = workspaces[0]?.id;
  if (!workspaceId) return <div className="text-white p-8">No workspace found.</div>;

  const TABLE_DATA = await DataFabricService.getMarketplace(workspaceId, session.user.id, session.user.role);

  return (
    <PageShell>
      <ExecutiveHeader
        title="Enterprise Data Marketplace"
        description="Allows secure, governed discovery and sharing of certified datasets across the organization."
        icon={ShoppingBag}
        iconColor="text-indigo-400"
        backHref="/data-fabric"
        backLabel="Data Fabric Hub"
        searchPlaceholder="Search Data Assets..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Data Governance Records" headers={["Data Product", "Publisher", "Consumer Requests", "Certification", "Status", "Trace"]}>
          {TABLE_DATA.length === 0 ? (
            <tr><td colSpan={6} className="py-8 text-center text-slate-500">No marketplace data available.</td></tr>
          ) : TABLE_DATA.map((row: any, i: number) => (
            <tr key={row.id || i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.prod}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.pub}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.req}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.cert}</td>
                <td className="py-4 px-5"><StatusBadge status={row.status} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Observed" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
