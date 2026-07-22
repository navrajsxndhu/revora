import React from "react";
import { History, Database, ShieldCheck, Download, FileSignature } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"id":"BI-E-8801","time":"2026-07-22T10:25:00Z","act":"CEO (Approved)","acti":"Authorized Q4 Hiring Freeze","gov":"Policy: Strategic Financial Decisions","trace":"EV-BI-8801"},{"id":"BI-E-8802","time":"2026-07-22T10:24:42Z","act":"System Generator","acti":"Published Weekly Revenue Flash","gov":"Policy: Automated Reporting","trace":"EV-BI-8802"},{"id":"BI-E-8803","time":"2026-07-22T10:21:10Z","act":"VP Sales (Updated)","acti":"Changed KPI Target: EMEA Growth to 15%","gov":"Policy: Target Governance","trace":"EV-BI-8803"}];

const METRICS = [
    { label: "BI Events Logged", value: "1.4M", icon: Database, iconColor: "text-indigo-500", desc: "Cryptographic records", descColor: "text-indigo-400" },
    { label: "Ledger Integrity", value: "Verified", icon: ShieldCheck, iconColor: "text-emerald-500", desc: "SHA-256 Validated" },
    { label: "Audit Pull Latency", value: "0.8s", icon: Download, iconColor: "text-blue-500", desc: "Instant compliance" },
    { label: "Exec Attestations", value: "4,102", icon: FileSignature, iconColor: "text-emerald-500", desc: "Cryptographically signed" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Business Intelligence Evidence Ledger"
        description="Immutable ledger recording every KPI change, strategic objective update, and executive decision."
        icon={History}
        iconColor="text-indigo-400"
        backHref="/business-intelligence"
        backLabel="BI Command Center"
        searchPlaceholder="Search Executive KPIs..."
        exportLabel="Export Report"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Strategic Intelligence" headers={["Event ID", "Timestamp", "Executive Actor", "Intelligence Action", "Constitutional Governance", "EvidenceBadge"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.id}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.time}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.act}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.acti}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.gov}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.trace}</td>


            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
