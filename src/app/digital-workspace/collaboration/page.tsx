import React from "react";
import { UsersRound, Share2, Video, Zap, ShieldCheck } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"inst":"SEV-1 Incident Board","owner":"DevOps Lead","part":"14 (View Only)","mode":"Broadcast","status":"Active","trace":"WCL-EV-801"},{"inst":"Architecture Council","owner":"Chief Architect","part":"4 (Edit Access)","mode":"Collaborative","status":"Active","trace":"WCL-EV-802"},{"inst":"Q3 Board Review","owner":"CFO","part":"8 (View Only)","mode":"Presentation","status":"Suspended","trace":"WCL-EV-803"}];

const METRICS = [
    { label: "Shared Workspaces", value: "14.2K", icon: Share2, iconColor: "text-indigo-500", desc: "Active shared sessions", descColor: "text-indigo-400" },
    { label: "Live Presenters", value: "412", icon: Video, iconColor: "text-blue-500", desc: "Executive mode" },
    { label: "Presence Sync", value: "14ms", icon: Zap, iconColor: "text-emerald-500", desc: "Cursor latency" },
    { label: "Data Leakage", value: "0", icon: ShieldCheck, iconColor: "text-emerald-500", desc: "Governed RBAC masks" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Workspace Collaboration Layer"
        description="Enables real-time workspace awareness, shared session links, and live executive presentation modes."
        icon={UsersRound}
        iconColor="text-indigo-400"
        backHref="/digital-workspace"
        backLabel="REDWS Hub"
        searchPlaceholder="Search Workspace Canvas..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Spatial Productivity Metrics" headers={["Workspace Instance", "Owner", "Active Participants", "Session Mode", "Status", "Execution ID"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.inst}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.owner}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.part}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.mode}</td>
                <td className="py-4 px-5"><StatusBadge status={row.status} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Verified Workspace" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
