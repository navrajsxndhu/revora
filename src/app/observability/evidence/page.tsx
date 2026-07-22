import React from "react";
import { History, Database, ShieldCheck, Download, FileSignature } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"id":"OB-E-9901","time":"2026-07-22T10:22:00Z","act":"Reliability Engine","acti":"Froze Deployment (Error Budget)","gov":"Policy: SLO Adherence","trace":"EV-OB-9901"},{"id":"OB-E-9902","time":"2026-07-22T10:20:42Z","act":"jdoe (Incident Commander)","acti":"Elevated incident to SEV-1","gov":"Policy: Escalation Procedures","trace":"EV-OB-9902"},{"id":"OB-E-9903","time":"2026-07-22T10:18:10Z","act":"Resilience Simulator","acti":"Completed Region Failover Test","gov":"Policy: DR Compliance","trace":"EV-OB-9903"}];

const METRICS = [
    { label: "Operational Logs", value: "412M", icon: Database, iconColor: "text-indigo-500", desc: "Cryptographic records", descColor: "text-indigo-400" },
    { label: "Ledger Integrity", value: "Verified", icon: ShieldCheck, iconColor: "text-emerald-500", desc: "SHA-256 Validated" },
    { label: "Audit Pull Latency", value: "1.2s", icon: Download, iconColor: "text-blue-500", desc: "Instant compliance" },
    { label: "SRE Attestations", value: "14K", icon: FileSignature, iconColor: "text-emerald-500", desc: "Post-mortem signatures" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Observability Evidence Ledger"
        description="Immutable ledger recording every incident escalation, SLO breach, and resilience simulation event."
        icon={History}
        iconColor="text-indigo-400"
        backHref="/observability"
        backLabel="Observability Command Center"
        searchPlaceholder="Search Operational Signals..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Operational Telemetry" headers={["Event ID", "Timestamp", "Actor / System", "Operational Action", "Constitutional Governance", "EvidenceBadge"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.id}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.time}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.act}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.acti}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.gov}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.trace}</td>


            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
