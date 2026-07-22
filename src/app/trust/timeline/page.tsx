import React from "react";
import { History, Database, MessageSquare, AlertTriangle, Zap } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"time":"10:14 AM","actor":"Sarah Jenkins","expl":"Granted temp production access by Admin (INC-801).","risk":"Low","gov":"Verified","trace":"SAT-EV-501"},{"time":"09:42 AM","actor":"System Worker","expl":"Automatically rotated database credentials.","risk":"Low","gov":"Verified","trace":"SAT-EV-502"},{"time":"08:15 AM","actor":"Unknown IP","expl":"Failed login attempt. Blocked by Geo-Fence.","risk":"High","gov":"Verified","trace":"SAT-EV-503"}];

const METRICS = [
    { label: "Events Tracked", value: "14.2M", icon: Database, iconColor: "text-cyan-500", desc: "Security actions logged", descColor: "text-cyan-400" },
    { label: "Narrative Gen", value: "100%", icon: MessageSquare, iconColor: "text-emerald-500", desc: "Machine to human text" },
    { label: "Anomaly Detects", value: "12", icon: AlertTriangle, iconColor: "text-amber-500", desc: "Suspicious timelines" },
    { label: "Audit Readiness", value: "Instant", icon: Zap, iconColor: "text-blue-500", desc: "Time to generate report" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Security Activity Timeline"
        description="A chronological, narrative explanation of enterprise permission and security events."
        icon={History}
        iconColor="text-cyan-500"
        backHref="/trust"
        backLabel="RTSTOS Command Center"
        searchPlaceholder="Search Trust Logs..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Trust & Transparency Metrics" headers={["Timestamp", "Actor", "Narrative Explanation", "Risk Level", "Governance", "Trace"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.time}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.actor}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.expl}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.risk}</td>
                <td className="py-4 px-5"><StatusBadge status={row.gov} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Verified Runtime" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
