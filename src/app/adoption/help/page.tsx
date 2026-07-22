import React from "react";
import { HeartHandshake, CheckCircle2, Timer, ShieldCheck, BookOpen } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"ctx":"Deployment Blocked","query":"Why did this fail?","meth":"Visual Policy Diff","speed":"30s","status":"Completed","trace":"EHI-EV-501"},{"ctx":"Access Denied","query":"How do I get permission?","meth":"1-Click Request Flow","speed":"15s","status":"Completed","trace":"EHI-EV-502"},{"ctx":"Data Sync Error","query":"What does error 503 mean?","meth":"Plain-Language Translation","speed":"45s","status":"Completed","trace":"EHI-EV-503"}];

const METRICS = [
    { label: "Resolution Rate", value: "96%", icon: CheckCircle2, iconColor: "text-cyan-500", desc: "Solved without IT ticket", descColor: "text-cyan-400" },
    { label: "Avg Time to Fix", value: "2m", icon: Timer, iconColor: "text-emerald-500", desc: "Speed of comprehension" },
    { label: "Jargon Detected", value: "0", icon: ShieldCheck, iconColor: "text-indigo-500", desc: "Plain-language compliant" },
    { label: "Active Articles", value: "1,492", icon: BookOpen, iconColor: "text-blue-500", desc: "Context-aware snippets" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Enterprise Help Intelligence"
        description="Context-aware, plain-language troubleshooting and governance explanations."
        icon={HeartHandshake}
        iconColor="text-cyan-500"
        backHref="/adoption"
        backLabel="Adoption Command Center"
        searchPlaceholder="Search Adoption Logs..."
        exportLabel="Export Report"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Learning & Adoption Activity" headers={["Help Context", "User Query Type", "Assistance Method", "Resolution Speed", "Status", "Evidence"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.ctx}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.query}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.meth}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.speed}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.status}</td>

                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Record Audited" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
