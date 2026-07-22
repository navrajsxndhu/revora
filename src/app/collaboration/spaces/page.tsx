import React from "react";
import { Layers, FolderHeart, CheckCircle2, Network, Timer } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"ws":"INC-8042 War Room","ent":"Incident Response","part":"14 (Eng, SRE)","status":"Active","arch":"Post-Mortem + 7d","trace":"CWS-EV-201"},{"ws":"Q3 Budget Planning","ent":"Financial Policy","part":"8 (Finance, Exec)","status":"Active","arch":"End of Q3","trace":"CWS-EV-202"},{"ws":"Legacy DB Migration","ent":"Architecture Project","part":"24 (DevOps, Eng)","status":"Completed","arch":"Archived","trace":"CWS-EV-203"}];

const METRICS = [
    { label: "Active Spaces", value: "142", icon: FolderHeart, iconColor: "text-cyan-500", desc: "Current hubs", descColor: "text-cyan-400" },
    { label: "Orphaned Spaces", value: "0", icon: CheckCircle2, iconColor: "text-emerald-500", desc: "Auto-archived properly" },
    { label: "Cross-Dept Linkage", value: "84%", icon: Network, iconColor: "text-blue-500", desc: "Silos broken" },
    { label: "Avg Lifespan", value: "14 Days", icon: Timer, iconColor: "text-amber-500", desc: "Ephemeral nature" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Contextual Workspaces"
        description="Ephemeral collaboration hubs mapped directly to incidents, policies, or strategic projects."
        icon={Layers}
        iconColor="text-cyan-500"
        backHref="/collaboration"
        backLabel="RCCOS Command Center"
        searchPlaceholder="Search Communications..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Collaboration & Communication Metrics" headers={["Workspace Name", "Associated Entity", "Participants", "Status", "Archival Policy", "Evidence"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.ws}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.ent}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.part}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.status}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.arch}</td>

                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Record Audited" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
