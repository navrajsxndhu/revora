import React from "react";
import { ShoppingBag, Award, Download, Timer, Lock } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"prod":"Core User Demographics (Masked)","pub":"Data Science Team","req":"1,420 Active Subscribers","cert":"Tier 1 (Executive)","status":"Certified","trace":"EDM-EV-701"},{"prod":"Q2 Regional Sales Rollup","pub":"Finance Dept","req":"84 Downloads","cert":"Tier 2 (Internal)","status":"Certified","trace":"EDM-EV-702"},{"prod":"Raw Network Traffic Logs","pub":"Security Ops","req":"Denied (4)","cert":"None (Restricted)","status":"Restricted","trace":"EDM-EV-703"}];

const METRICS = [
    { label: "Certified Products", value: "412", icon: Award, iconColor: "text-indigo-500", desc: "Ready for consumption", descColor: "text-indigo-400" },
    { label: "Data Requests", value: "14.2K", icon: Download, iconColor: "text-emerald-500", desc: "Monthly API/Report pulls" },
    { label: "Approval Latency", value: "4.2h", icon: Timer, iconColor: "text-blue-500", desc: "Avg request fulfillment" },
    { label: "Unauthorized Access", value: "0", icon: Lock, iconColor: "text-emerald-500", desc: "Governed delivery" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Enterprise Data Marketplace"
        description="Allows secure, governed discovery and sharing of certified datasets across the organization."
        icon={ShoppingBag}
        iconColor="text-indigo-400"
        backHref="/data-fabric"
        backLabel="Data Fabric Hub"
        searchPlaceholder="Search Data Assets..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Data Governance Records" headers={["Data Product", "Publisher", "Consumer Requests", "Certification", "Status", "Trace"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.prod}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.pub}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.req}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.cert}</td>
                <td className="py-4 px-5"><StatusBadge status={row.status} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Governed" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
