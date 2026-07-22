import React from "react";
import { AlertOctagon, AlertTriangle, Zap, Users, History } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"dom":"Data Privacy Breach (Simulated)","met":"European Customer Data","lead":"Chief Information Security Officer","time":"14m 20s","state":"Active","trace":"ESR-EV-401"},{"dom":"Core API Outage","met":"Transaction Velocity","lead":"VP Engineering","time":"4h 10m","state":"Resolved","trace":"ESR-EV-402"},{"dom":"Black Friday Readiness","met":"Cloud Auto-Scaling","lead":"Platform Architect","time":"14 Days","state":"Completed","trace":"ESR-EV-403"}];

const METRICS = [
    { label: "Active Incidents", value: "1", icon: AlertTriangle, iconColor: "text-rose-500", desc: "Requiring executive oversight", descColor: "text-rose-400" },
    { label: "Data Assembly Time", value: "1.4s", icon: Zap, iconColor: "text-emerald-500", desc: "To build context" },
    { label: "Stakeholders", value: "14", icon: Users, iconColor: "text-blue-500", desc: "Leaders currently engaged" },
    { label: "War Rooms Held", value: "84", icon: History, iconColor: "text-emerald-500", desc: "Historical incidents managed" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Executive Situation Room"
        description="An adaptive operational war room that automatically assembles during major enterprise events."
        icon={AlertOctagon}
        iconColor="text-fuchsia-500"
        backHref="/workspace"
        backLabel="RECCOS Enterprise Workspace"
        searchPlaceholder="Search Workspace Logs..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Enterprise Workspace Metrics" headers={["Incident Domain", "Primary Metric Affected", "Lead Commander", "Time Active", "State", "Trace"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.dom}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.met}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.lead}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.time}</td>
                <td className="py-4 px-5"><StatusBadge status={row.state} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Unified Ledger" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
