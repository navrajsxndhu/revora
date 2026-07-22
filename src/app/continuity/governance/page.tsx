import React from "react";
import { ShieldCheck, Search, XCircle, CheckCircle2, ClipboardList } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"pol":"No PII on Unmanaged Devices","scen":"Handoff to personal phone","act":"Block session transfer","inf":"42 (Auto-Blocked)","gov":"Verified","trace":"CGB-EV-901"},{"pol":"Require Biometrics","scen":"Resume executive dashboard","act":"FaceID/TouchID prompt","inf":"0","gov":"Verified","trace":"CGB-EV-902"},{"pol":"Maximum Offline Time","scen":"7+ days without sync","act":"Purge local cache","inf":"4","gov":"Verified","trace":"CGB-EV-903"}];

const METRICS = [
    { label: "Policy Checks", value: "14.2M", icon: Search, iconColor: "text-indigo-500", desc: "Device verifications", descColor: "text-indigo-400" },
    { label: "Blocked Handoffs", value: "142", icon: XCircle, iconColor: "text-rose-500", desc: "Security overrides" },
    { label: "Compliance", value: "100%", icon: CheckCircle2, iconColor: "text-emerald-500", desc: "MDM alignment" },
    { label: "Exceptions", value: "2", icon: ClipboardList, iconColor: "text-amber-500", desc: "Board approved offline use" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Continuity Governance Board"
        description="Constitutional oversight ensuring that device transitions never bypass enterprise security policies."
        icon={ShieldCheck}
        iconColor="text-indigo-500"
        backHref="/continuity"
        backLabel="RMDCOS Command Center"
        searchPlaceholder="Search Continuity Logs..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Multi-Device Continuity Metrics" headers={["Continuity Policy", "Target Scenario", "Enforcement Action", "Infractions", "Governance", "Execution ID"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.pol}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.scen}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.act}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.inf}</td>
                <td className="py-4 px-5"><StatusBadge status={row.gov} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Verified Sync" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
