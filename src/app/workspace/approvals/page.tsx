import React from "react";
import { CheckSquare, Inbox, Timer, Zap, TrendingDown } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"req":"Bypass Firewall Rule 4A","orig":"Security Operations","just":"Unblock emergency vendor access","sla":"15 Minutes","urg":"Critical","trace":"UHA-EV-301"},{"req":"Q3 Budget Allocation","orig":"Finance Platform","just":"Pre-approved annual spend","sla":"48 Hours","urg":"Medium","trace":"UHA-EV-302"},{"req":"New Employee Laptop","orig":"IT Procurement","just":"Standard Onboarding","sla":"7 Days","urg":"Low","trace":"UHA-EV-303"}];

const METRICS = [
    { label: "Pending Approvals", value: "42", icon: Inbox, iconColor: "text-fuchsia-500", desc: "Across 14 departments", descColor: "text-fuchsia-400" },
    { label: "SLA Compliance", value: "99.4%", icon: Timer, iconColor: "text-emerald-500", desc: "Decisions made on time" },
    { label: "Time-to-Approval", value: "14m", icon: Zap, iconColor: "text-blue-500", desc: "Average organizational speed" },
    { label: "Context Switching", value: "-88%", icon: TrendingDown, iconColor: "text-emerald-500", desc: "Friction eliminated" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Unified Human Approval Center"
        description="Every pending approval across the enterprise coalesced into one prioritized interface."
        icon={CheckSquare}
        iconColor="text-fuchsia-500"
        backHref="/workspace"
        backLabel="RECCOS Enterprise Workspace"
        searchPlaceholder="Search Workspace Logs..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Enterprise Workspace Metrics" headers={["Approval Request", "Originating Module", "Business Justification", "SLA Deadline", "Urgency", "Execution ID"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.req}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.orig}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.just}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.sla}</td>
                <td className="py-4 px-5"><StatusBadge status={row.urg} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Unified Ledger" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
