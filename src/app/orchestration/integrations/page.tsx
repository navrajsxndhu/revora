import React from "react";
import { Plug, Network, Activity, ShieldCheck, Lock } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"path":"Auth -> Incident Creation","src":"Trust Engine (RTSTOS)","targ":"Security (RXOS)","ptype":"JSON (Encrypted)","state":"Active","trace":"CPI-EV-501"},{"path":"Budget -> Cloud Provision","src":"Commerce Platform","targ":"Architecture Platform","ptype":"JSON (Signed)","state":"Active","trace":"CPI-EV-502"},{"path":"Approval -> Policy Update","src":"Orchestration (RAEOP)","targ":"Governance Registry","ptype":"Cryptographic Hash","state":"Active","trace":"CPI-EV-503"}];

const METRICS = [
    { label: "Connected Modules", value: "14", icon: Network, iconColor: "text-indigo-500", desc: "Full Revora suite", descColor: "text-indigo-400" },
    { label: "API Calls / Sec", value: "1,420", icon: Activity, iconColor: "text-emerald-500", desc: "Orchestration load" },
    { label: "Integration Errors", value: "0.01%", icon: ShieldCheck, iconColor: "text-blue-500", desc: "Deterministic success" },
    { label: "Zero-Trust Checks", value: "100%", icon: Lock, iconColor: "text-emerald-500", desc: "On every call" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Cross-Platform Integration Hub"
        description="Coordinates deterministic execution across all Revora platforms (Security, Arch, HR, Commerce, etc.)."
        icon={Plug}
        iconColor="text-indigo-400"
        backHref="/orchestration"
        backLabel="Orchestration Hub"
        searchPlaceholder="Search Orchestrations..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Orchestration Metrics" headers={["Integration Path", "Source Module", "Target Module", "Payload Type", "State", "Trace"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.path}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.src}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.targ}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.ptype}</td>
                <td className="py-4 px-5"><StatusBadge status={row.state} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Orchestrated" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
