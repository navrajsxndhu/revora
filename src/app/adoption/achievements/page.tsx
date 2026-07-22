import React from "react";
import { Award, GraduationCap, Trophy, Zap, Smile } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"title":"Governance Guardian","cat":"Compliance","crit":"100 Policies Audited","users":"42","level":"Expert","trace":"PAC-EV-701"},{"title":"Keyboard Warrior","cat":"Productivity","crit":"Used Cmd Palette 500x","users":"142","level":"Expert","trace":"PAC-EV-702"},{"title":"First Steps","cat":"Onboarding","crit":"Completed Initial Setup","users":"1,492","level":"Novice","trace":"PAC-EV-703"}];

const METRICS = [
    { label: "Mastery Level", value: "Enterprise", icon: GraduationCap, iconColor: "text-cyan-500", desc: "Organization average", descColor: "text-cyan-400" },
    { label: "Milestones Unlocked", value: "14.2K", icon: Trophy, iconColor: "text-amber-500", desc: "Platform wide" },
    { label: "Power Users", value: "24%", icon: Zap, iconColor: "text-emerald-500", desc: "Mastered all workflows" },
    { label: "Engagement Score", value: "A+", icon: Smile, iconColor: "text-blue-500", desc: "Executive rating" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Personal Achievement Center"
        description="Encourages platform confidence through professional mastery milestones."
        icon={Award}
        iconColor="text-cyan-500"
        backHref="/adoption"
        backLabel="Adoption Command Center"
        searchPlaceholder="Search Adoption Logs..."
        exportLabel="Export Report"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Learning & Adoption Activity" headers={["Achievement Title", "Category", "Unlock Criteria", "Users Unlocked", "Mastery Level", "Evidence"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.title}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.cat}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.crit}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.users}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.level}</td>

                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Record Audited" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
