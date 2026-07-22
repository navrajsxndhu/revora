import React from "react";
import { Target, Activity, Timer, Bell, TrendingUp } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"prof":"Incident Response Mode","supp":"Social, HR, Routine Tasks","esc":"P1 Alerts Only","act":"142","level":"Deep Focus","trace":"PFE-EV-401"},{"prof":"Executive Review","supp":"Chat, Minor Notifications","esc":"C-Suite Approvals","act":"18","level":"High","trace":"PFE-EV-402"},{"prof":"Standard Work","supp":"None","esc":"Standard SLA Rules","act":"14,020","level":"Medium","trace":"PFE-EV-403"}];

const METRICS = [
    { label: "Focus Sessions", value: "42K", icon: Activity, iconColor: "text-cyan-500", desc: "Weekly deep work", descColor: "text-cyan-400" },
    { label: "Avg Duration", value: "1h 14m", icon: Timer, iconColor: "text-emerald-500", desc: "Uninterrupted time" },
    { label: "Alerts Suppressed", value: "8.4M", icon: Bell, iconColor: "text-blue-500", desc: "Distractions blocked" },
    { label: "Task Completion", value: "+34%", icon: TrendingUp, iconColor: "text-emerald-500", desc: "Versus standard mode" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Productivity Focus Engine"
        description="Eliminates noise by adapting the entire Enterprise UI to match the user's current objective."
        icon={Target}
        iconColor="text-cyan-500"
        backHref="/personalization"
        backLabel="RPAWPOS Command Center"
        searchPlaceholder="Search Personalization Logs..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Personalization & Adaptability Metrics" headers={["Focus Profile", "Suppressed Modules", "Priority Escalation", "Active Users", "Focus Level", "Evidence"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.prof}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.supp}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.esc}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.act}</td>
                <td className="py-4 px-5"><StatusBadge status={row.level} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Verified Runtime" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
