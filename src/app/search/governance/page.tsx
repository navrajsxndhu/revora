import React from "react";
import { ShieldCheck, Lock, FileCode, ClipboardList, CheckCircle2 } from "lucide-react";
import { PageShell } from "@/components/ui/page-shell";
import { ExecutiveHeader } from "@/components/ui/executive-header";
import { MetricGrid } from "@/components/ui/metric-grid";
import { PremiumTable } from "@/components/ui/premium-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

const TABLE_DATA = [{"pol":"Executive Salary Masking","target":"HR Records","rest":"Exclude from Index","auth":"VP HR","status":"Approved","trace":"SGB-EV-901"},{"pol":"M&A Project Sandbox","target":"Project \"Titan\"","rest":"Strict RBAC Whitelist","auth":"Legal Board","status":"Approved","trace":"SGB-EV-902"},{"pol":"Log PII Sanitization","target":"App Logs","rest":"Regex Redaction","auth":"Security Team","status":"Review Required","trace":"SGB-EV-903"}];

const METRICS = [
    { label: "Policy Adherence", value: "100%", icon: Lock, iconColor: "text-cyan-500", desc: "Zero data leakage", descColor: "text-cyan-400" },
    { label: "Active Policies", value: "42", icon: FileCode, iconColor: "text-blue-500", desc: "Search restriction rules" },
    { label: "Pending Exemptions", value: "2", icon: ClipboardList, iconColor: "text-amber-500", desc: "Awaiting board approval" },
    { label: "Index Audits", value: "Passed", icon: CheckCircle2, iconColor: "text-emerald-500", desc: "Daily cryptographic check" },
];

export default function Page() {
  return (
    <PageShell>
      <ExecutiveHeader
        title="Search Governance Board"
        description="Constitutional oversight managing search indices, exemptions, and sensitive knowledge visibility."
        icon={ShieldCheck}
        iconColor="text-cyan-500"
        backHref="/search"
        backLabel="RSKIOS Command Center"
        searchPlaceholder="Search Knowledge Context..."
        exportLabel="Export Ledger"
      />

      <MetricGrid metrics={METRICS} />

      <div className="flex-1 min-h-0 pb-12 flex flex-col gap-6">
        <PremiumTable title="Search & Discovery Metrics" headers={["Governance Policy", "Target Asset Class", "Restriction Type", "Authorizer", "Status", "Trace"]}>
          {TABLE_DATA.map((row: any, i: number) => (
            <tr key={i} className="hover:bg-slate-800/30 transition-colors duration-200 cursor-pointer border-b border-slate-800/50">
                <td className="py-4 px-5 text-sm text-slate-400">{row.pol}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.target}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.rest}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.auth}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.status}</td>

                <td className="py-4 px-5"><EvidenceBadge evidenceId={row.trace} timestamp="Verified Result" /></td>
            </tr>
          ))}
        </PremiumTable>
      </div>
    </PageShell>
  );
}
