import React from "react";
import { Share2, Network, Zap, ShieldCheck, Database } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"src":"App: Customer Portal","rel":"DEPENDS_ON","targ":"DB: Primary Users (AWS)","dom":"Infrastructure","corr":"Strong","trace":"ERG-EV-101"},{"src":"Policy: Zero Trust","rel":"GOVERNS","targ":"Role: Cloud Architect","dom":"Security & HR","corr":"Strong","trace":"ERG-EV-102"},{"src":"Incident: SEV-1 Outage","rel":"CAUSED_BY","targ":"Deployment: PR #1042","dom":"Engineering Operations","corr":"Strong","trace":"ERG-EV-103"}];

const METRICS = [
    { label: "Active Edges", value: "41.2M", icon: Network, iconColor: "text-teal-500", desc: "Constitutional connections", descColor: "text-teal-400" },
    { label: "Graph Latency", value: "8ms", icon: Zap, iconColor: "text-emerald-500", desc: "Query response time" },
    { label: "Orphaned Assets", value: "0", icon: ShieldCheck, iconColor: "text-blue-500", desc: "Fully mapped enterprise" },
    { label: "Connected Nodes", value: "8.4M", icon: Database, iconColor: "text-teal-500", desc: "Governed resources" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Enterprise Relationship Graph"
        description="The constitutional graph connecting every application, policy, incident, and business capability."
        icon={Share2}
        iconColor="text-teal-500"
        backHref="/intelligence-fabric"
        backLabel="REIF Command Center"
        searchPlaceholder="Search Knowledge Graph..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Enterprise Knowledge Metrics" headers={["Source Node", "Relationship Type", "Target Node", "Business Domain", "Correlation", "Trace"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.src}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.rel}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.targ}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.dom}</td>
                <td className="py-4 px-5"><StatusBadge status={row.corr} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Verified Graph" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
