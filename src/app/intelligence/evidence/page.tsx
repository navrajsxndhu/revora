import React from "react";
import { History, Database, FileCheck2, ShieldCheck, Brain } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"id":"REC-I-4092","time":"2026-07-22T08:14:00Z","trig":"SLA threshold reached","model":"Predictive Guidance V4","act":"Accepted","trace":"EV-I-4092"},{"id":"REC-I-4091","time":"2026-07-22T08:10:22Z","trig":"User Login","model":"Adaptive Workspace Engine","act":"Viewed","trace":"EV-I-4091"},{"id":"REC-I-4090","time":"2026-07-21T16:45:00Z","trig":"Deployment Initiated","model":"Decision Intelligence","act":"Rejected (Manual Override)","trace":"EV-I-4090"}];

const METRICS = [
    { label: "AI Traces", value: "8.4M", icon: Database, iconColor: "text-cyan-500", desc: "Cryptographic records", descColor: "text-cyan-400" },
    { label: "Explainability", value: "100%", icon: FileCheck2, iconColor: "text-emerald-500", desc: "All decisions documented" },
    { label: "Ledger Integrity", value: "Verified", icon: ShieldCheck, iconColor: "text-blue-500", desc: "Hash chain valid" },
    { label: "Model Fallbacks", value: "0", icon: Brain, iconColor: "text-indigo-500", desc: "No unverified predictions" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Intelligence Evidence Ledger"
        description="The immutable constitutional ledger tracking why every recommendation was made."
        icon={History}
        iconColor="text-cyan-500"
        backHref="/intelligence"
        backLabel="Intelligence Command Center"
        searchPlaceholder="Search Intelligence Logs..."
        exportLabel="Export Report"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Intelligence Insights & Recommendations" headers={["Recommendation ID", "Timestamp", "Trigger Event", "Prediction Model", "Human Action", "EvidenceBadge"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.id}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.time}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.trig}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.model}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.act}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.trace}</td>


            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
