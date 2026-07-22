import React from "react";
import { Palette, Image, EyeOff, Eye, Zap } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"id":"Revora Dark (Default)","cont":"8.4:1","targ":"Engineers, Analysts","eng":"Low (OLED Optimized)","state":"Active","trace":"ETS-EV-401"},{"id":"Executive Light","cont":"7.2:1","targ":"C-Suite, Daytime Ops","eng":"Medium","state":"Active","trace":"ETS-EV-402"},{"id":"High Contrast Mode","cont":"21:1","targ":"Accessibility Users","eng":"Variable","state":"Active","trace":"ETS-EV-403"}];

const METRICS = [
    { label: "Supported Themes", value: "8", icon: Image, iconColor: "text-orange-500", desc: "Active environment modes", descColor: "text-orange-400" },
    { label: "Dark Mode Adoption", value: "72%", icon: EyeOff, iconColor: "text-indigo-500", desc: "User preference" },
    { label: "Contrast Compliance", value: "100%", icon: Eye, iconColor: "text-emerald-500", desc: "WCAG AAA in High Contrast" },
    { label: "Theme Switch Time", value: "0ms", icon: Zap, iconColor: "text-blue-500", desc: "CSS Variables mapping" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Enterprise Theme System"
        description="Universal appearance governance supporting contrast modes, executive branding, and ambient light adjustments."
        icon={Palette}
        iconColor="text-orange-500"
        backHref="/design-language"
        backLabel="REDL Command Center"
        searchPlaceholder="Search Design Tokens..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Design Governance Metrics" headers={["Theme Identity", "Primary Contrast Ratio", "Target Persona", "Energy Impact", "State", "Trace"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.id}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.cont}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.targ}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.eng}</td>
                <td className="py-4 px-5"><StatusBadge status={row.state} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Verified Design" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
