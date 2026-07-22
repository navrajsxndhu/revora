import React from "react";
import { Megaphone, CheckCircle2, TrendingDown, FileSignature } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"title":"Critical Security Patch: Mandatory Restart","auth":"CISO","aud":"Global (All)","ack":"94%","gov":"Approved","trace":"EBG-EV-501"},{"title":"Updated PTO Policy 2027","auth":"VP HR","aud":"Global (All)","ack":"88%","gov":"Approved","trace":"EBG-EV-502"},{"title":"New CRM Vendor Evaluation","auth":"Sales Ops","aud":"Sales Dept","ack":"100%","gov":"Completed","trace":"EBG-EV-503"}];

const METRICS = [
    { label: "Active Broadcasts", value: "3", icon: Megaphone, iconColor: "text-cyan-500", desc: "Enterprise wide announcements", descColor: "text-cyan-400" },
    { label: "Ack Rate", value: "98%", icon: CheckCircle2, iconColor: "text-emerald-500", desc: "Verified reading completion" },
    { label: "Noise Reduction", value: "-84%", icon: TrendingDown, iconColor: "text-blue-500", desc: "Compared to email blasts" },
    { label: "Mandatory Reads", value: "1", icon: FileSignature, iconColor: "text-rose-500", desc: "Requires signature" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Enterprise Broadcast Governance"
        description="High-priority organizational announcements with verifiable delivery tracking and acknowledgement."
        icon={Megaphone}
        iconColor="text-cyan-500"
        backHref="/collaboration"
        backLabel="RCCOS Command Center"
        searchPlaceholder="Search Communications..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Collaboration & Communication Metrics" headers={["Broadcast Title", "Authorizer", "Target Audience", "Ack Rate", "Governance", "Execution ID"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.title}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.auth}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.aud}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.ack}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.gov}</td>

                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Record Audited" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
