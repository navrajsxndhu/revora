import React from "react";
import { Globe, Handshake, Layers, ShieldCheck, Lock } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"ext":"Acme Corp (Vendor)","spon":"Procurement","scope":"Project Alpha (Read)","exp":"30 Days","status":"Active","trace":"SEC-EV-701"},{"ext":"Deloitte (Auditor)","spon":"Compliance","scope":"SOC2 Ledger (Read)","exp":"14 Days","status":"Active","trace":"SEC-EV-702"},{"ext":"Contractor (Jane Doe)","spon":"Engineering","scope":"Frontend Repo","exp":"Yesterday","status":"Restricted","trace":"SEC-EV-703"}];

const METRICS = [
    { label: "Active Guests", value: "412", icon: Handshake, iconColor: "text-cyan-500", desc: "Authenticated partners", descColor: "text-cyan-400" },
    { label: "Shared Workspaces", value: "24", icon: Layers, iconColor: "text-emerald-500", desc: "External enclaves" },
    { label: "Data Leakage", value: "0", icon: ShieldCheck, iconColor: "text-blue-500", desc: "Blocked sharing attempts" },
    { label: "Expired Access", value: "1.2K", icon: Lock, iconColor: "text-emerald-500", desc: "Auto-revoked securely" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Secure External Collaboration"
        description="Governing vendor, partner, and guest communication without violating enterprise zero-trust."
        icon={Globe}
        iconColor="text-cyan-500"
        backHref="/collaboration"
        backLabel="RCCOS Command Center"
        searchPlaceholder="Search Communications..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Collaboration & Communication Metrics" headers={["External Entity", "Sponsor", "Access Scope", "Expiration", "Status", "Evidence"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.ext}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.spon}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.scope}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.exp}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.status}</td>

                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Record Audited" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
