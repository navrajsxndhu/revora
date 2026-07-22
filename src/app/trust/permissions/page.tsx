import React from "react";
import { Unlock, BrainCircuit, Timer, ShieldCheck, Eye } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"res":"SOC2 Compliance Folder","access":"View Only","req":"Auditor (Write)","exp":"Never (Base Role)","trans":"High","trace":"PTC-EV-201"},{"res":"AWS Production Cluster","access":"Full Access (Temporary)","req":"DevOps Lead","exp":"In 4 Hours","trans":"High","trace":"PTC-EV-202"},{"res":"Executive Dashboards","access":"None","req":"VP or Above","exp":"N/A","trans":"High","trace":"PTC-EV-203"}];

const METRICS = [
    { label: "Access Certainty", value: "98%", icon: BrainCircuit, iconColor: "text-cyan-500", desc: "Role comprehension", descColor: "text-cyan-400" },
    { label: "Temp Grants", value: "412", icon: Timer, iconColor: "text-emerald-500", desc: "Active limited-time access" },
    { label: "Orphaned Roles", value: "0", icon: ShieldCheck, iconColor: "text-blue-500", desc: "Continually audited" },
    { label: "Mystery Denials", value: "-99%", icon: Eye, iconColor: "text-emerald-500", desc: "Hidden policies removed" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Permission Transparency Center"
        description="Visualizing enterprise access models so users always understand their boundaries."
        icon={Unlock}
        iconColor="text-cyan-500"
        backHref="/trust"
        backLabel="RTSTOS Command Center"
        searchPlaceholder="Search Trust Logs..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Trust & Transparency Metrics" headers={["Resource", "Your Current Access", "Required Role", "Expiration", "Transparency", "Evidence"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.res}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.access}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.req}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.exp}</td>
                <td className="py-4 px-5"><StatusBadge status={row.trans} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Verified Runtime" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
