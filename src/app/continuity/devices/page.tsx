import React from "react";
import { Monitor, Laptop, ShieldCheck, Users2, XCircle } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"id":"MacBook-Pro-US84","plat":"macOS 15","role":"Engineering Lead","post":"Encrypted, EDR Active","status":"Optimal","trace":"DIC-EV-501"},{"id":"iPhone-15-US84","plat":"iOS 18","role":"Engineering Lead","post":"MDM Managed","status":"Optimal","trace":"DIC-EV-502"},{"id":"Unknown-Android","plat":"Android 14","role":"Contractor","post":"Missing VPN","status":"Blocked","trace":"DIC-EV-503"}];

const METRICS = [
    { label: "Active Devices", value: "142K", icon: Laptop, iconColor: "text-indigo-500", desc: "Enrolled endpoints", descColor: "text-indigo-400" },
    { label: "Trusted Devices", value: "99.8%", icon: ShieldCheck, iconColor: "text-emerald-500", desc: "MDM compliant" },
    { label: "Average / User", value: "2.4", icon: Users2, iconColor: "text-blue-500", desc: "Multi-device density" },
    { label: "Revoked Access", value: "14", icon: XCircle, iconColor: "text-rose-500", desc: "Lost/Stolen devices" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Device Intelligence Center"
        description="Provides insight into enterprise device usage, ensuring mobility remains transparent and secure."
        icon={Monitor}
        iconColor="text-indigo-500"
        backHref="/continuity"
        backLabel="RMDCOS Command Center"
        searchPlaceholder="Search Continuity Logs..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Multi-Device Continuity Metrics" headers={["Device Identity", "Platform OS", "Owner Role", "Security Posture", "Status", "Trace"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.id}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.plat}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.role}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.post}</td>
                <td className="py-4 px-5"><StatusBadge status={row.status} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Verified Sync" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
