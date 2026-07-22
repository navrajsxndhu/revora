import React from "react";
import { ShieldAlert, Fingerprint, Trash2, Lock, ShieldCheck } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"dom":"Employee Healthcare Data","class":"Restricted (HIPAA)","ac":"HR Benefits Team Only","ret":"7 Years post-termination","gov":"Verified","trace":"PCC-EV-601"},{"dom":"Customer Billing Addresses","class":"PII (GDPR/CCPA)","ac":"Billing & Support (Masked)","ret":"User Request or 5 Years","gov":"Verified","trace":"PCC-EV-602"},{"dom":"Corporate Blog Content","class":"Public","ac":"Anyone","ret":"Indefinite","gov":"Verified","trace":"PCC-EV-603"}];

const METRICS = [
    { label: "PII Elements", value: "1,402", icon: Fingerprint, iconColor: "text-indigo-500", desc: "Actively governed", descColor: "text-indigo-400" },
    { label: "Retention Purges", value: "14M", icon: Trash2, iconColor: "text-emerald-500", desc: "Records deleted (30d)" },
    { label: "Encryption", value: "100%", icon: Lock, iconColor: "text-blue-500", desc: "At rest & in transit" },
    { label: "Policy Violations", value: "0", icon: ShieldCheck, iconColor: "text-emerald-500", desc: "Hard enforcement" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Privacy & Classification Center"
        description="Governs enterprise information security through strict data classification and retention policies."
        icon={ShieldAlert}
        iconColor="text-indigo-400"
        backHref="/data-fabric"
        backLabel="Data Fabric Hub"
        searchPlaceholder="Search Data Assets..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Data Governance Records" headers={["Data Domain", "Classification Level", "Access Control", "Retention Policy", "Governance", "Execution ID"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.dom}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.class}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.ac}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.ret}</td>
                <td className="py-4 px-5"><StatusBadge status={row.gov} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Governed" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
