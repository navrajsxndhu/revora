import React from "react";
import { Eye, Database, Fingerprint, CheckCircle2, ShieldCheck } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"asset":"Customer CRM Records","class":"High Risk (PII)","purp":"Sales & Marketing","limit":"7 Years","gov":"Verified","trace":"PDT-EV-301"},{"asset":"Application Error Logs","class":"Low Risk","purp":"Debugging / SRE","limit":"30 Days","gov":"Verified","trace":"PDT-EV-302"},{"asset":"Employee Salary Data","class":"Critical (Restricted)","purp":"Payroll","limit":"Indefinite","gov":"Verified","trace":"PDT-EV-303"}];

const METRICS = [
    { label: "Data Mapped", value: "100%", icon: Database, iconColor: "text-cyan-500", desc: "No shadow IT data", descColor: "text-cyan-400" },
    { label: "PII Elements", value: "42.8K", icon: Fingerprint, iconColor: "text-emerald-500", desc: "Actively governed fields" },
    { label: "Retention Compliance", value: "Verified", icon: CheckCircle2, iconColor: "text-blue-500", desc: "Automated pruning active" },
    { label: "Unclassified DBs", value: "0", icon: ShieldCheck, iconColor: "text-emerald-500", desc: "All assets owned" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Privacy & Data Transparency"
        description="Complete visibility into enterprise data retention, ownership, and classification."
        icon={Eye}
        iconColor="text-cyan-500"
        backHref="/trust"
        backLabel="RTSTOS Command Center"
        searchPlaceholder="Search Trust Logs..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Trust & Transparency Metrics" headers={["Data Asset", "Classification", "Primary Purpose", "Retention Limit", "Governance", "Trace"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.asset}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.class}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.purp}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.limit}</td>
                <td className="py-4 px-5"><StatusBadge status={row.gov} /></td>
                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Verified Runtime" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
