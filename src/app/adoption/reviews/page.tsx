import React from "react";
import { FileSignature, ShieldCheck, ClipboardList, CheckCircle2, Timer } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"cont":"Architecture Capability Tutorial","mod":"Enterprise Architecture","sub":"UX Team","rev":"Sarah Jenkins","status":"Approved","trace":"ARB-EV-901"},{"cont":"Security Exemption Guide","mod":"Trust Governance","sub":"Security Ops","rev":"Pending","status":"Pending Review","trace":"ARB-EV-902"},{"cont":"Legacy DB Migration Hint","mod":"Infrastructure","sub":"DevOps","rev":"Marcus Chen","status":"Rejected","trace":"ARB-EV-903"}];

const METRICS = [
    { label: "Content Accuracy", value: "100%", icon: ShieldCheck, iconColor: "text-cyan-500", desc: "Verified by Governance", descColor: "text-cyan-400" },
    { label: "Pending Reviews", value: "4", icon: ClipboardList, iconColor: "text-amber-500", desc: "Tutorials awaiting sign-off" },
    { label: "Approved Guides", value: "142", icon: CheckCircle2, iconColor: "text-emerald-500", desc: "Active in production" },
    { label: "Avg Review Time", value: "14h", icon: Timer, iconColor: "text-blue-500", desc: "Speed of approval" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Adoption Review Board"
        description="Constitutional governance ensuring all educational content aligns with enterprise standards."
        icon={FileSignature}
        iconColor="text-cyan-500"
        backHref="/adoption"
        backLabel="Adoption Command Center"
        searchPlaceholder="Search Adoption Logs..."
        exportLabel="Export Report"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Learning & Adoption Activity" headers={["Educational Content", "Target Module", "Submitted By", "Reviewer", "Approval Status", "Evidence"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.cont}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.mod}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.sub}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.rev}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.status}</td>

                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Record Audited" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
