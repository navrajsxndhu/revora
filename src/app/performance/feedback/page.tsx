import React from "react";
import { MousePointerClick, Zap, CheckCircle2, AlertTriangle, ShieldCheck } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"int":"Form Submission","feed":"Micro-animation + Toast","lat":"12ms","opt":"Yes","status":"Optimal","trace":"IFE-EV-301"},{"int":"Record Deletion","feed":"Strike-through + Fade","lat":"8ms","opt":"Yes","status":"Optimal","trace":"IFE-EV-302"},{"int":"Heavy Data Export","feed":"Progress Bar + Email Ack","lat":"120ms","opt":"No","status":"Optimal","trace":"IFE-EV-303"}];

const METRICS = [
    { label: "Feedback Latency", value: "45ms", icon: Zap, iconColor: "text-cyan-500", desc: "Visual response time", descColor: "text-cyan-400" },
    { label: "Optimistic Actions", value: "1.4K", icon: CheckCircle2, iconColor: "text-emerald-500", desc: "Immediate UI updates" },
    { label: "Missed Feedback", value: "0.2%", icon: AlertTriangle, iconColor: "text-amber-500", desc: "Silent interactions" },
    { label: "User Confidence", value: "98%", icon: ShieldCheck, iconColor: "text-blue-500", desc: "Certainty of action" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Interaction Feedback Engine"
        description="Ensuring every interaction produces satisfying, instantaneous confirmation."
        icon={MousePointerClick}
        iconColor="text-cyan-500"
        backHref="/performance"
        backLabel="RPMDOS Command Center"
        searchPlaceholder="Search Performance Logs..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Performance & Motion Metrics" headers={["Interaction Type", "Feedback Mechanism", "Latency", "Optimistic UI", "Status", "Trace"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.int}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.feed}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.lat}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.opt}</td>
                <td className="py-4 px-5"><StatusBadge status={row.status} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Verified Runtime" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
