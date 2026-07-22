import React from "react";
import { Siren, Clock, Timer, Target } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"id":"INC-2026-901","srv":"Checkout Processing API","cmd":"Jane Doe (SRE)","time":"14m","sev":"SEV-2","trace":"IIC-EV-301"},{"id":"INC-2026-900","srv":"Internal Search Index","cmd":"System Auto-Resolved","time":"Resolved","sev":"SEV-3","trace":"IIC-EV-302"},{"id":"INC-2026-899","srv":"EU Database Replica","cmd":"John Smith","time":"Resolved","sev":"SEV-1","trace":"IIC-EV-303"}];

const METRICS = [
    { label: "Active Incidents", value: "1", icon: Siren, iconColor: "text-rose-500", desc: "SEV-2 (Checkout)", descColor: "text-rose-400" },
    { label: "MTTA", value: "1.2m", icon: Clock, iconColor: "text-emerald-500", desc: "Mean Time to Acknowledge" },
    { label: "MTTR", value: "14m", icon: Timer, iconColor: "text-blue-500", desc: "Mean Time to Resolve" },
    { label: "Blast Radius", value: "Isolated", icon: Target, iconColor: "text-emerald-500", desc: "Current impact" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Incident Intelligence Center"
        description="The constitutional command center for active incidents, root cause tracing, and executive communication."
        icon={Siren}
        iconColor="text-indigo-400"
        backHref="/observability"
        backLabel="Observability Command Center"
        searchPlaceholder="Search Operational Signals..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Operational Telemetry" headers={["Incident ID", "Impacted Service", "Commander", "Time Open", "Severity", "Trace"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.id}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.srv}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.cmd}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.time}</td>
                <td className="py-4 px-5"><StatusBadge status={row.sev} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Observed" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
