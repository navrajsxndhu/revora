import React from "react";
import { History, Database, ShieldCheck, Download, FileSignature } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"id":"OR-E-7701","time":"2026-07-22T10:16:00Z","act":"jdoe@revora (Human)","acti":"Approved WF-SEC-099 step 2","gov":"Policy: Separation of Duties","trace":"EV-O-7701"},{"id":"OR-E-7702","time":"2026-07-22T10:15:42Z","act":"RAEOP Engine (System)","acti":"Executed Integration: Trust -> HR","gov":"Policy: Workflow Automation","trace":"EV-O-7702"},{"id":"OR-E-7703","time":"2026-07-22T10:14:10Z","act":"mchen@revora (Human)","acti":"Deployed new Workflow to Production","gov":"Policy: Change Management","trace":"EV-O-7703"}];

const METRICS = [
    { label: "Execution Logs", value: "142M", icon: Database, iconColor: "text-indigo-500", desc: "Cryptographic records", descColor: "text-indigo-400" },
    { label: "Ledger Integrity", value: "Verified", icon: ShieldCheck, iconColor: "text-emerald-500", desc: "SHA-256 Validated" },
    { label: "Audit Pull Latency", value: "1.2s", icon: Download, iconColor: "text-blue-500", desc: "Instant compliance" },
    { label: "Human Attestations", value: "412K", icon: FileSignature, iconColor: "text-emerald-500", desc: "Cryptographically signed" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Orchestration Evidence Ledger"
        description="Immutable ledger recording every workflow publication, human approval, and automated execution path."
        icon={History}
        iconColor="text-indigo-400"
        backHref="/orchestration"
        backLabel="Orchestration Hub"
        searchPlaceholder="Search Orchestrations..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Orchestration Metrics" headers={["Event ID", "Timestamp", "Actor (System/Human)", "Orchestration Action", "Constitutional Governance", "EvidenceBadge"]}>
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
