import React from "react";
import { Bell, TrendingDown, CheckCircle2, Inbox, Smile } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"type":"Security Breach (P1)","rule":"Bypass Focus Mode","del":"Push, SMS, UI Modal","open":"100%","gov":"Verified","trace":"ANI-EV-501"},{"type":"Expense Approval","rule":"Batch Daily at 4PM","del":"Digest Email","open":"84%","gov":"Verified","trace":"ANI-EV-502"},{"type":"System Update","rule":"Suppress if working","del":"Silent Notification Center","open":"42%","gov":"Verified","trace":"ANI-EV-503"}];

const METRICS = [
    { label: "Noise Reduction", value: "82%", icon: TrendingDown, iconColor: "text-cyan-500", desc: "Filtered standard alerts", descColor: "text-cyan-400" },
    { label: "Critical SLAs Met", value: "99.9%", icon: CheckCircle2, iconColor: "text-emerald-500", desc: "No missed escalations" },
    { label: "Batched Digests", value: "1.4M", icon: Inbox, iconColor: "text-blue-500", desc: "Async summaries sent" },
    { label: "Notification Fatigue", value: "Low", icon: Smile, iconColor: "text-emerald-500", desc: "User sentiment score" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Adaptive Notification Intelligence"
        description="Categorizes and queues notifications so users only see what is critical right now."
        icon={Bell}
        iconColor="text-cyan-500"
        backHref="/personalization"
        backLabel="RPAWPOS Command Center"
        searchPlaceholder="Search Personalization Logs..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Personalization & Adaptability Metrics" headers={["Notification Type", "Adaptive Rule", "Delivery Method", "Average Open Rate", "Governance", "Trace"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.type}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.rule}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.del}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.open}</td>
                <td className="py-4 px-5"><StatusBadge status={row.gov} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Verified Runtime" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
