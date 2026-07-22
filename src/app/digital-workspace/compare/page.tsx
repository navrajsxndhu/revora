import React from "react";
import { GitCompare, Layers, ShieldCheck, Timer, Database } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"targ":"Firewall Policy (SOC2)","left":"v1.1.4 (Prod)","right":"v1.1.5 (Staging)","diff":"2 Rule Modifications","gov":"Verified","trace":"SVS-EV-401"},{"targ":"Kubernetes Blueprint","left":"Template v4","right":"Template v5","diff":"Added Resource Limits","gov":"Verified","trace":"SVS-EV-402"},{"targ":"Vendor Contract","left":"AWS Master Ag.","right":"GCP Master Ag.","diff":"Liability Clauses","gov":"Verified","trace":"SVS-EV-403"}];

const METRICS = [
    { label: "Active Comparisons", value: "4,210", icon: Layers, iconColor: "text-indigo-500", desc: "Concurrent diffs", descColor: "text-indigo-400" },
    { label: "Diff Accuracy", value: "100%", icon: ShieldCheck, iconColor: "text-emerald-500", desc: "Cryptographic hash compare" },
    { label: "Time Saved", value: "2.4h", icon: Timer, iconColor: "text-blue-500", desc: "Per complex review" },
    { label: "Supported Asset Types", value: "42", icon: Database, iconColor: "text-fuchsia-500", desc: "Governed primitives" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Split View & Comparison Studio"
        description="Allows side-by-side constitutional comparison of policies, architectures, and incident timelines."
        icon={GitCompare}
        iconColor="text-indigo-400"
        backHref="/digital-workspace"
        backLabel="REDWS Hub"
        searchPlaceholder="Search Workspace Canvas..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Spatial Productivity Metrics" headers={["Comparison Target", "Left Asset", "Right Asset", "Identified Differences", "Governance", "Execution ID"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.targ}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.left}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.right}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.diff}</td>
                <td className="py-4 px-5"><StatusBadge status={row.gov} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Verified Workspace" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
