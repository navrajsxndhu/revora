import React from "react";
import { Network, Database, LinkIcon, Target, AlertTriangle } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"type":"Microservice (Billing)","id":"NODE-APP-902","conn":"42 dependencies","owner":"Finance Tech","gov":"Verified","trace":"EKG-EV-101"},{"type":"Compliance Policy","id":"NODE-POL-114","conn":"18 applications","owner":"Legal Board","gov":"Approved","trace":"EKG-EV-102"},{"type":"User (VP Sales)","id":"NODE-USR-492","conn":"112 access grants","owner":"Identity Mgmt","gov":"Verified","trace":"EKG-EV-103"}];

const METRICS = [
    { label: "Indexed Nodes", value: "4.2M", icon: Database, iconColor: "text-cyan-500", desc: "Enterprise wide assets", descColor: "text-cyan-400" },
    { label: "Active Edges", value: "18.4M", icon: LinkIcon, iconColor: "text-emerald-500", desc: "Resolved relationships" },
    { label: "Graph Coverage", value: "98%", icon: Target, iconColor: "text-blue-500", desc: "Organization footprint" },
    { label: "Orphaned Assets", value: "1.2K", icon: AlertTriangle, iconColor: "text-amber-500", desc: "Requires contextual mapping" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Enterprise Knowledge Graph"
        description="Visual exploration of dependencies connecting applications, policies, and personnel."
        icon={Network}
        iconColor="text-cyan-500"
        backHref="/search"
        backLabel="RSKIOS Command Center"
        searchPlaceholder="Search Knowledge Context..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Search & Discovery Metrics" headers={["Asset Type", "Graph Node ID", "Connections", "Primary Owner", "Governance", "Trace"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.type}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.id}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.conn}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.owner}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.gov}</td>

                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Verified Result" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
