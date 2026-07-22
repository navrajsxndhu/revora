import React from "react";
import { GraduationCap, TrendingUp, Sparkles, CheckCircle2, Timer } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"mod":"Advanced Command Palette","ctx":"User clicks navigation frequently","time":"2 mins","prop":"Navigate 4x faster","status":"Pending","trace":"LRN-EV-701"},{"mod":"Automating Approvals","ctx":"User approves 10+ identical requests","time":"5 mins","prop":"Save 2 hours/week","status":"Pending","trace":"LRN-EV-702"},{"mod":"Intro to RXOS","ctx":"First login to Experience Command Center","time":"Completed","prop":"Understand UX Governance","status":"Passed","trace":"LRN-EV-703"}];

const METRICS = [
    { label: "User Proficiency", value: "Expert", icon: TrendingUp, iconColor: "text-cyan-500", desc: "Adaptive learning state", descColor: "text-cyan-400" },
    { label: "New Features", value: "2", icon: Sparkles, iconColor: "text-amber-500", desc: "Undiscovered capabilities" },
    { label: "Onboarding", value: "100%", icon: CheckCircle2, iconColor: "text-emerald-500", desc: "Core modules complete" },
    { label: "Time Saved", value: "14h", icon: Timer, iconColor: "text-blue-500", desc: "Through workflow tips" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Personalized Learning Center"
        description="Contextually adapts to the users experience to provide continuous workflow education."
        icon={GraduationCap}
        iconColor="text-cyan-500"
        backHref="/intelligence"
        backLabel="Intelligence Command Center"
        searchPlaceholder="Search Intelligence Logs..."
        exportLabel="Export Report"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Intelligence Insights & Recommendations" headers={["Learning Module", "Trigger Context", "Est. Time", "Value Proposition", "Status", "Trace"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.mod}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.ctx}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.time}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.prop}</td>
                <td className="py-4 px-5"><StatusBadge status={row.status} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Record Audited" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
