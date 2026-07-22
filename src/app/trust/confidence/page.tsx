import React from "react";
import { HeartHandshake, ThumbsUp, BrainCircuit, TrendingDown, ShieldCheck } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"dept":"Engineering","trans":"96/100","comp":"High","fric":"Low","status":"Optimal","trace":"OCC-EV-601"},{"dept":"Sales","trans":"88/100","comp":"Medium","fric":"Medium","status":"Optimal","trace":"OCC-EV-602"},{"dept":"Finance","trans":"94/100","comp":"High","fric":"Low","status":"Optimal","trace":"OCC-EV-603"}];

const METRICS = [
    { label: "Trust Index", value: "92.4", icon: ThumbsUp, iconColor: "text-cyan-500", desc: "Enterprise aggregate score", descColor: "text-cyan-400" },
    { label: "Policy Clarity", value: "88%", icon: BrainCircuit, iconColor: "text-emerald-500", desc: "Users understanding rules" },
    { label: "Fear Reduction", value: "-42%", icon: TrendingDown, iconColor: "text-blue-500", desc: "Hesitation to act" },
    { label: "Shadow IT", value: "Eliminated", icon: ShieldCheck, iconColor: "text-emerald-500", desc: "Trust removes workarounds" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Organization Confidence Center"
        description="Measuring the psychological safety and transparency levels across the enterprise."
        icon={HeartHandshake}
        iconColor="text-cyan-500"
        backHref="/trust"
        backLabel="RTSTOS Command Center"
        searchPlaceholder="Search Trust Logs..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Trust & Transparency Metrics" headers={["Department", "Transparency Score", "Policy Comprehension", "Reported Friction", "Status", "Execution ID"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.dept}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.trans}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.comp}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.fric}</td>
                <td className="py-4 px-5"><StatusBadge status={row.status} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Verified Runtime" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
