import React from "react";
import { HeartPulse, Activity, ShieldCheck, ServerCrash, CheckCircle2 } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"pill":"Engineering & Infrastructure","prim":"99.99% Availability","sec":"14ms Avg Latency","trend":"+0.01%","health":"Optimal","trace":"OHC-EV-501"},{"pill":"Security & Trust","prim":"0 Active Breaches","sec":"98% Policy Comprehension","trend":"+4%","health":"Optimal","trace":"OHC-EV-502"},{"pill":"Workforce Productivity","prim":"14h Nav Time Saved","sec":"82% Focus Mode Adoption","trend":"+14%","health":"Healthy","trace":"OHC-EV-503"}];

const METRICS = [
    { label: "Enterprise Health", value: "98.4%", icon: Activity, iconColor: "text-fuchsia-500", desc: "Constitutional Index", descColor: "text-fuchsia-400" },
    { label: "Security Score", value: "99.9%", icon: ShieldCheck, iconColor: "text-emerald-500", desc: "Zero-trust verification" },
    { label: "Platform Uptime", value: "99.99%", icon: ServerCrash, iconColor: "text-emerald-500", desc: "Global infrastructure" },
    { label: "Compliance Adherence", value: "100%", icon: CheckCircle2, iconColor: "text-emerald-500", desc: "Regulatory mappings" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Organizational Health Center"
        description="A single constitutional health score for the enterprise across security, compliance, and infrastructure."
        icon={HeartPulse}
        iconColor="text-fuchsia-500"
        backHref="/workspace"
        backLabel="RECCOS Enterprise Workspace"
        searchPlaceholder="Search Workspace Logs..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Enterprise Workspace Metrics" headers={["Organizational Pillar", "Primary Metric", "Secondary Metric", "Trend (30d)", "Health", "Trace"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.pill}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.prim}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.sec}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.trend}</td>
                <td className="py-4 px-5"><StatusBadge status={row.health} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Unified Ledger" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
