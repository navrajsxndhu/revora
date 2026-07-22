import React from "react";
import { Scale, FileSignature, ShieldCheck, Lock, Clock } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"pol":"No unmasked PII in lower envs","class":"Dev/Staging Databases","enf":"Hard Block (CI/CD)","prev":"142","gov":"Verified","trace":"DGB-EV-901"},{"pol":"All APIs must have an Owner","class":"Service Endpoints","enf":"Deployment Reject","prev":"412","gov":"Verified","trace":"DGB-EV-902"},{"pol":"Financial data requires Tier 1 Cert","class":"Executive Reports","enf":"Read-Access Block","prev":"14","gov":"Verified","trace":"DGB-EV-903"}];

const METRICS = [
    { label: "Active Policies", value: "42", icon: FileSignature, iconColor: "text-indigo-500", desc: "Data governance rules", descColor: "text-indigo-400" },
    { label: "Policy Coverage", value: "100%", icon: ShieldCheck, iconColor: "text-emerald-500", desc: "Across all assets" },
    { label: "Exceptions Granted", value: "0", icon: Lock, iconColor: "text-blue-500", desc: "Zero tolerance" },
    { label: "Audit Readiness", value: "Immediate", icon: Clock, iconColor: "text-emerald-500", desc: "Real-time compliance" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Data Governance Board"
        description="Constitutional oversight body that reviews dataset certification and strictly enforces privacy standards."
        icon={Scale}
        iconColor="text-indigo-400"
        backHref="/data-fabric"
        backLabel="Data Fabric Hub"
        searchPlaceholder="Search Data Assets..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Data Governance Records" headers={["Data Policy", "Target Asset Class", "Enforcement Logic", "Violations Prevented", "Governance", "Trace"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.pol}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.class}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.enf}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.prev}</td>
                <td className="py-4 px-5"><StatusBadge status={row.gov} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Governed" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
