import React from "react";
import Link from "next/link";
import { ArrowLeft, Landmark, FileText, Globe2, Building2, AlertTriangle, CheckCircle2, FileCheck2 } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function RegulatoryComplianceCenter() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        {/* Header */}
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <div className="mb-4">
              <Link href="/legal" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Legal Operations
              </Link>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Regulatory Compliance Center</h1>
            <p className="text-slate-400">Unified governance over statutory obligations and regulatory filings.</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-amber-600 hover:bg-amber-500 rounded-md text-sm font-medium transition-colors text-white">
            <FileCheck2 className="w-4 h-4" /> Log Regulatory Filing
          </button>
        </header>

        {/* Global KPIs */}
        <div className="grid grid-cols-3 gap-6 shrink-0">
          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group hover:border-emerald-500/50 transition-colors">
            <div className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-2 flex items-center justify-between">
              Data Privacy (GDPR/CCPA)
              <Globe2 className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-4xl font-black text-white mb-2">100%</div>
            <div className="text-sm font-medium text-emerald-400">All DSARs Resolved within SLA</div>
          </div>
          
          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group hover:border-blue-500/50 transition-colors">
            <div className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-2 flex items-center justify-between">
              Financial Regulations (SOX)
              <Building2 className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-4xl font-black text-white mb-2">Compliant</div>
            <div className="text-sm font-medium text-blue-400">Q2 Controls Validated</div>
          </div>

          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group hover:border-amber-500/50 transition-colors">
            <div className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-2 flex items-center justify-between">
              Industry Specific (HIPAA)
              <Landmark className="w-4 h-4 text-amber-500" />
            </div>
            <div className="text-4xl font-black text-white mb-2">Warning</div>
            <div className="text-sm font-medium text-amber-400">1 BAA Agreement Pending Review</div>
          </div>
        </div>

        {/* Regulatory Filings Table */}
        <div className="flex-1 min-h-0 pb-12">
          <PremiumTable 
            title="Regulatory Obligations & Filings" 
            headers={["Regulatory Body", "Framework / Law", "Obligation Type", "Deadline", "Responsible Counsel", "Status", "Evidentiary Proof"]}
          >
            {[
              { body: "European Data Protection Board", law: "GDPR Article 35", type: "Data Protection Impact Assessment", dead: "2026-07-30", counsel: "Privacy Office", status: "Overdue", trace: "REG-EU-941" },
              { body: "Securities & Exchange Commission", law: "Sarbanes-Oxley Act", type: "Quarterly Financial Control Attestation", dead: "2026-08-15", counsel: "Corporate Legal", status: "In Progress", trace: "REG-US-102" },
              { body: "Department of Health", law: "HIPAA Privacy Rule", type: "Business Associate Agreement (Vendor X)", dead: "2026-08-01", counsel: "Healthcare Compliance", status: "In Progress", trace: "REG-US-114" },
              { body: "Information Commissioner's Office", law: "UK GDPR", type: "Annual Registration Fee", dead: "2026-05-15", counsel: "Privacy Office", status: "Filed & Confirmed", trace: "REG-UK-084" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group">
                <td className="py-4 px-5 font-medium text-slate-200 text-sm">
                  <div className="flex items-center gap-2">
                    <Landmark className="w-4 h-4 text-amber-400" />
                    {row.body}
                  </div>
                </td>
                <td className="py-4 px-5">
                  <span className={`px-2 py-1 rounded text-xs font-bold border w-max block ${
                    row.law.includes('GDPR') ? 'bg-emerald-900/20 text-emerald-400 border-emerald-900/50' : 
                    row.law.includes('HIPAA') ? 'bg-purple-900/20 text-purple-400 border-purple-900/50' :
                    'bg-blue-900/20 text-blue-400 border-blue-900/50'
                  }`}>
                    {row.law}
                  </span>
                </td>
                <td className="py-4 px-5 text-sm text-slate-300">{row.type}</td>
                <td className="py-4 px-5 text-sm font-mono text-slate-400">{row.dead}</td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.counsel}</td>
                <td className="py-4 px-5">
                  <span className={`text-sm font-medium flex items-center gap-1 ${
                    row.status === 'Filed & Confirmed' ? 'text-emerald-500' :
                    row.status === 'Overdue' ? 'text-rose-500' : 'text-amber-500'
                  }`}>
                    {row.status === 'Filed & Confirmed' && <CheckCircle2 className="w-4 h-4" />}
                    {row.status === 'Overdue' && <AlertTriangle className="w-4 h-4" />}
                    {row.status}
                  </span>
                </td>
                <td className="py-4 px-5">
                  <EvidenceBadge evidenceId={row.trace} timestamp="Filing Confirmed" />
                </td>
              </tr>
            ))}
          </PremiumTable>
        </div>

      </div>
    </div>
  );
}
