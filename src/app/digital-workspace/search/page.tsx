import React from "react";
import { SearchCode, Database, Zap, RefreshCw, Cpu } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"query":"\"SOC2 Report\"","targ":"Background Panel 3","conf":"100% (Exact)","act":"Focus Panel","state":"Optimal","trace":"UWS-EV-601"},{"query":"\"John Doe Auth\"","targ":"Evidence Badge metadata","conf":"94% (Fuzzy)","act":"Extract Evidence","state":"Optimal","trace":"UWS-EV-602"},{"query":"\"Q3 Budget\"","targ":"Active Approval (Dock)","conf":"100% (Exact)","act":"Sign Approval","state":"Optimal","trace":"UWS-EV-603"}];

const METRICS = [
    { label: "Local Index Size", value: "4MB", icon: Database, iconColor: "text-indigo-500", desc: "Per user session", descColor: "text-indigo-400" },
    { label: "Search Latency", value: "&lt; 2ms", icon: Zap, iconColor: "text-emerald-500", desc: "Client-side resolution" },
    { label: "Context Switching", value: "0", icon: RefreshCw, iconColor: "text-blue-500", desc: "Zero page reloads" },
    { label: "Memory Footprint", value: "Minimal", icon: Cpu, iconColor: "text-emerald-500", desc: "Garbage collected" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Universal Workspace Search"
        description="Instantly locates open panels, running reports, and active evidence within the user's local session."
        icon={SearchCode}
        iconColor="text-indigo-400"
        backHref="/digital-workspace"
        backLabel="REDWS Hub"
        searchPlaceholder="Search Workspace Canvas..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Spatial Productivity Metrics" headers={["Search Query", "Target Found In", "Match Confidence", "User Action", "State", "Execution ID"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.query}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.targ}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.conf}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.act}</td>
                <td className="py-4 px-5"><StatusBadge status={row.state} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Verified Workspace" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
