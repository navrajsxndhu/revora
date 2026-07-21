import React from "react";
import Link from "next/link";
import { ArrowLeft, FileWarning, ShieldAlert, AlertTriangle, ShieldCheck, DollarSign } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function RiskRegister() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        {/* Header */}
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <div className="mb-4">
              <Link href="/risk" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Risk Center
              </Link>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Enterprise Risk Register</h1>
            <p className="text-slate-400">The constitutional ledger for all enterprise risks. No risk may exist without an owner and an approved mitigation plan.</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-rose-600 hover:bg-rose-500 rounded-md text-sm font-medium transition-colors text-white">
            <FileWarning className="w-4 h-4" /> Log New Risk
          </button>
        </header>

        {/* Risk Register Table */}
        <div className="flex-1 min-h-0 pb-12">
          <PremiumTable 
            title="Active Organizational Risks" 
            headers={["Risk ID", "Description", "Owner", "Likelihood", "Impact", "Rating", "Status", "Audit"]}
          >
            {[
              { id: "RSK-091", desc: "Third-Party Data Breach Exposure", owner: "Security Team", like: "Medium", imp: "Critical", rate: "High", status: "Mitigation Overdue", trace: "RSK-EV-41" },
              { id: "RSK-104", desc: "Ransomware on Legacy Systems", owner: "Infrastructure", like: "High", imp: "High", rate: "Critical", status: "Mitigating", trace: "RSK-EV-42" },
              { id: "RSK-212", desc: "Non-Compliance with GDPR Article 32", owner: "Legal", like: "Low", imp: "Critical", rate: "Medium", status: "Mitigating", trace: "RSK-EV-43" },
              { id: "RSK-084", desc: "Single-Region Database Failure", owner: "Platform Eng", like: "Low", imp: "High", rate: "Low", status: "Risk Accepted", trace: "RSK-EV-44" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group">
                <td className="py-4 px-5 font-medium text-slate-200">
                  <div className="flex items-center gap-2 font-mono text-sm">
                    <FileWarning className="w-4 h-4 text-rose-400" />
                    {row.id}
                  </div>
                </td>
                <td className="py-4 px-5 text-sm text-slate-300">{row.desc}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.owner}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.like}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.imp}</td>
                <td className="py-4 px-5">
                  <span className={`px-2 py-1 rounded text-xs font-bold border w-max block ${
                    row.rate === 'Critical' ? 'bg-rose-900/20 text-rose-400 border-rose-900/50' : 
                    row.rate === 'High' ? 'bg-amber-900/20 text-amber-400 border-amber-900/50' :
                    row.rate === 'Medium' ? 'bg-blue-900/20 text-blue-400 border-blue-900/50' :
                    'bg-slate-800 text-slate-400 border-slate-700'
                  }`}>
                    {row.rate}
                  </span>
                </td>
                <td className="py-4 px-5">
                  <span className={`text-sm font-medium flex items-center gap-1 ${
                    row.status.includes('Overdue') ? 'text-rose-500' :
                    row.status.includes('Accepted') ? 'text-emerald-500' : 'text-blue-400'
                  }`}>
                    {row.status.includes('Overdue') && <AlertTriangle className="w-4 h-4" />}
                    {row.status.includes('Accepted') && <ShieldCheck className="w-4 h-4" />}
                    {row.status}
                  </span>
                </td>
                <td className="py-4 px-5">
                  <EvidenceBadge evidenceId={row.trace} timestamp="Risk Evaluation" />
                </td>
              </tr>
            ))}
          </PremiumTable>
        </div>

      </div>
    </div>
  );
}
