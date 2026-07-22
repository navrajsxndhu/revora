import React from "react";
import { LayoutDashboard, Users, Target, Eye, ShieldCheck } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"name":"Executive Overview","aud":"C-Suite","wids":"P&L, Risk Radar","allow":"Locked","gov":"Verified","trace":"AWD-EV-101"},{"name":"Security Console","aud":"SOC Analysts","wids":"Active Threats, Alerts","allow":"High (Draggable)","gov":"Verified","trace":"AWD-EV-102"},{"name":"Engineering Daily","aud":"Developers","wids":"PR Queue, Build Status","allow":"Medium","gov":"Verified","trace":"AWD-EV-103"}];

const METRICS = [
    { label: "Active Workspaces", value: "14.2K", icon: Users, iconColor: "text-cyan-500", desc: "Customized instances", descColor: "text-cyan-400" },
    { label: "Role Alignment", value: "98%", icon: Target, iconColor: "text-emerald-500", desc: "Matching primary duty" },
    { label: "Accessibility Modes", value: "8.4%", icon: Eye, iconColor: "text-blue-500", desc: "Specialized visual rules" },
    { label: "Orphaned Layouts", value: "0", icon: ShieldCheck, iconColor: "text-emerald-500", desc: "Auto-pruned unused views" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Adaptive Workspace Designer"
        description="Governs role-specific layouts, allowing the interface to intuitively match the user’s responsibilities."
        icon={LayoutDashboard}
        iconColor="text-cyan-500"
        backHref="/personalization"
        backLabel="RPAWPOS Command Center"
        searchPlaceholder="Search Personalization Logs..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Personalization & Adaptability Metrics" headers={["Workspace Name", "Primary Audience", "Mandatory Widgets", "Customization Allowance", "Governance", "Trace"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.name}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.aud}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.wids}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.allow}</td>
                <td className="py-4 px-5"><StatusBadge status={row.gov} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Verified Runtime" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
