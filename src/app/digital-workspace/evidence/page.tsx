import React from "react";
import { History, Database, ShieldCheck, Video, Download } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"id":"WS-E-8801","time":"2026-07-22T10:14:00Z","sys":"Memory Engine","act":"Saved Layout State","gov":"Policy: Workspace Retention","trace":"EV-W-8801"},{"id":"WS-E-8802","time":"2026-07-22T10:12:15Z","sys":"Collab Layer","act":"Shared Workspace to Guests","gov":"Policy: External Sharing","trace":"EV-W-8802"},{"id":"WS-E-8803","time":"2026-07-22T10:05:00Z","sys":"Canvas Manager","act":"Deployed Executive Template","gov":"Policy: Standardized UX","trace":"EV-W-8803"}];

const METRICS = [
    { label: "Workspace Logs", value: "14.2M", icon: Database, iconColor: "text-indigo-500", desc: "Cryptographic records", descColor: "text-indigo-400" },
    { label: "Ledger Integrity", value: "Verified", icon: ShieldCheck, iconColor: "text-emerald-500", desc: "SHA-256 Validated" },
    { label: "State Replays", value: "412", icon: Video, iconColor: "text-blue-500", desc: "Audit reconstructions" },
    { label: "Export Speed", value: "1.4s", icon: Download, iconColor: "text-emerald-500", desc: "Compliance pulls" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Workspace Evidence Ledger"
        description="Immutable ledger recording all spatial interactions, template deployments, and shared session handoffs."
        icon={History}
        iconColor="text-indigo-400"
        backHref="/digital-workspace"
        backLabel="REDWS Hub"
        searchPlaceholder="Search Workspace Canvas..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Spatial Productivity Metrics" headers={["Event ID", "Timestamp", "System Initiator", "Workspace Action", "Constitutional Governance", "EvidenceBadge"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.id}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.time}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.sys}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.act}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.gov}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.trace}</td>


            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
