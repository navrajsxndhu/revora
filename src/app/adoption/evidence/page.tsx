import React from "react";
import { History, Database, Award, ShieldCheck, FileCode } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"id":"ADO-E-4092","time":"2026-07-22T08:14:00Z","actor":"New Hire: J. Smith","act":"Completed First-Run Setup","impact":"Platform Access Granted","trace":"EV-A-4092"},{"id":"ADO-E-4091","time":"2026-07-22T08:10:22Z","actor":"Automated Discovery","act":"Recommended Command Palette","impact":"None (Advisory)","trace":"EV-A-4091"},{"id":"ADO-E-4090","time":"2026-07-21T16:45:00Z","actor":"Compliance Officer","act":"Approved New Tutorial","impact":"Content Published","trace":"EV-A-4090"}];

const METRICS = [
    { label: "Learning Traces", value: "1.2M", icon: Database, iconColor: "text-cyan-500", desc: "Cryptographic records", descColor: "text-cyan-400" },
    { label: "Verified Certs", value: "842", icon: Award, iconColor: "text-emerald-500", desc: "Governance training passes" },
    { label: "Ledger Integrity", value: "Verified", icon: ShieldCheck, iconColor: "text-blue-500", desc: "Hash chain valid" },
    { label: "Active Policies", value: "14", icon: FileCode, iconColor: "text-indigo-500", desc: "RAOS rules enforced" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Adoption Evidence Ledger"
        description="The immutable constitutional ledger tracking all onboarding and learning events."
        icon={History}
        iconColor="text-cyan-500"
        backHref="/adoption"
        backLabel="Adoption Command Center"
        searchPlaceholder="Search Adoption Logs..."
        exportLabel="Export Report"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Learning & Adoption Activity" headers={["Adoption Event ID", "Timestamp", "User / Actor", "Learning Interaction", "Constitutional Impact", "EvidenceBadge"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.id}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.time}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.actor}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.act}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.impact}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.trace}</td>


            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
