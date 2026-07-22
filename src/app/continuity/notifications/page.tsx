import React from "react";
import { Bell, ShieldCheck, Cast, Timer, AlertTriangle } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"type":"P1 Server Crash","act":"Inactive (Night)","route":"All Devices + SMS Override","time":"1m 14s","del":"Routed","trace":"SNC-EV-601"},{"type":"Expense Approved","act":"Active on Desktop","route":"Desktop Only (Suppress Mobile)","time":"4s","del":"Routed","trace":"SNC-EV-602"},{"type":"Weekly Summary","act":"Offline","route":"Queue for next sync","time":"Pending","del":"Cached","trace":"SNC-EV-603"}];

const METRICS = [
    { label: "Duplicate Alerts", value: "0", icon: ShieldCheck, iconColor: "text-indigo-500", desc: "Perfect de-duplication", descColor: "text-indigo-400" },
    { label: "Intelligent Routes", value: "4.2M", icon: Cast, iconColor: "text-emerald-500", desc: "Delivered to active device" },
    { label: "Quiet Hours", value: "14%", icon: Timer, iconColor: "text-blue-500", desc: "Notifications held" },
    { label: "Escalations", value: "412", icon: AlertTriangle, iconColor: "text-amber-500", desc: "Broke through quiet hours" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Smart Notification Continuity"
        description="Ensures notifications follow the user intelligently, routing alerts to the active device."
        icon={Bell}
        iconColor="text-indigo-500"
        backHref="/continuity"
        backLabel="RMDCOS Command Center"
        searchPlaceholder="Search Continuity Logs..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Multi-Device Continuity Metrics" headers={["Notification Type", "Active Device Context", "Routing Decision", "Time to Action", "Delivery", "Execution ID"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.type}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.act}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.route}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.time}</td>
                <td className="py-4 px-5"><StatusBadge status={row.del} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Verified Sync" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
