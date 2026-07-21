import React from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, AlertTriangle, ShieldAlert, Activity, GitMerge } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function DataQualityCenter() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        {/* Header */}
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <div className="mb-4">
              <Link href="/data-platform" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Data Platform
              </Link>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Data Quality Center</h1>
            <p className="text-slate-400">Constitutional validation rules ensuring pipeline integrity. Violations trigger Runtime halts.</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 rounded-md text-sm font-medium transition-colors">
            <CheckCircle2 className="w-4 h-4" /> Define Quality Rule
          </button>
        </header>

        {/* Validation Ledger */}
        <div className="flex-1 min-h-0 pb-12">
          <PremiumTable 
            title="Recent Validation Traces" 
            headers={["Execution ID", "Pipeline", "Dataset", "Failing Rule", "Drop %", "Action Taken"]}
          >
            {[
              { id: "VAL-EX-992", pipe: "PL-HR-INGEST", dataset: "Employee_Health_Records", rule: "Missing PII Masking", drop: "100%", action: "Pipeline Halted" },
              { id: "VAL-EX-991", pipe: "PL-LOG-STREAM", dataset: "Website_Clickstream", rule: "Schema Drift Detected", drop: "12%", action: "Rows Dropped" },
              { id: "VAL-EX-990", pipe: "PL-FIN-REPORT", dataset: "Financial_Transactions_Q4", rule: "None", drop: "0%", action: "Certified" },
              { id: "VAL-EX-989", pipe: "PL-CRM-SYNC", dataset: "Global_Customer_Master", rule: "Duplicate Primary Keys", drop: "0.2%", action: "Rows Dropped" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors">
                <td className="py-4 px-5 font-medium text-slate-200">
                  <EvidenceBadge evidenceId={row.id} timestamp="Tracked" />
                </td>
                <td className="py-4 px-5 text-sm text-slate-300">
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-slate-500" /> {row.pipe}
                  </div>
                </td>
                <td className="py-4 px-5 text-sm text-slate-400 font-mono">{row.dataset}</td>
                <td className="py-4 px-5">
                  <span className={`text-sm font-medium ${row.rule === 'None' ? 'text-emerald-500' : 'text-rose-400 flex items-center gap-1'}`}>
                    {row.rule !== 'None' && <AlertTriangle className="w-3 h-3" />}
                    {row.rule}
                  </span>
                </td>
                <td className="py-4 px-5 text-sm font-mono text-slate-400">{row.drop}</td>
                <td className="py-4 px-5">
                  <span className={`px-2 py-1 rounded text-xs font-medium border flex items-center gap-1 w-max ${
                    row.action === 'Certified'
                      ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' 
                      : row.action === 'Pipeline Halted'
                        ? 'bg-rose-500/10 text-rose-400 border-rose-500/20'
                        : 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                  }`}>
                    {row.action === 'Certified' && <CheckCircle2 className="w-3 h-3" />}
                    {row.action === 'Pipeline Halted' && <ShieldAlert className="w-3 h-3" />}
                    {row.action}
                  </span>
                </td>
              </tr>
            ))}
          </PremiumTable>
        </div>

      </div>
    </div>
  );
}
