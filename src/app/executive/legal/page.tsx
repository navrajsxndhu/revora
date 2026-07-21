import React from "react";
import Link from "next/link";
import { ArrowLeft, Scale, ShieldAlert, FileSignature, Landmark, Users } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";

export default function ExecutiveLegalDashboard() {
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
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Executive Legal Board</h1>
            <p className="text-slate-400">Board-level transparency into enterprise legal exposure, active litigation, and corporate compliance.</p>
          </div>
        </header>

        {/* Global Executive KPIs */}
        <div className="grid grid-cols-4 gap-6 shrink-0">
          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group hover:border-emerald-500/50 transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl -z-10 group-hover:bg-emerald-500/10 transition-colors"></div>
            <div className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-2 flex items-center justify-between">
              Active Contracts
              <FileSignature className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-4xl font-black text-white mb-2">1,204</div>
            <div className="text-sm font-medium text-slate-400 flex items-center gap-1">
               Across 14 jurisdictions
            </div>
          </div>
          
          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group hover:border-amber-500/50 transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-3xl -z-10 group-hover:bg-amber-500/10 transition-colors"></div>
            <div className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-2 flex items-center justify-between">
              Regulatory Standing
              <Landmark className="w-4 h-4 text-amber-500" />
            </div>
            <div className="text-4xl font-black text-white mb-2">Good</div>
            <div className="text-sm font-medium text-amber-400 flex items-center gap-1">
               2 minor filings pending
            </div>
          </div>

          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group hover:border-rose-500/50 transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/5 rounded-full blur-3xl -z-10 group-hover:bg-rose-500/10 transition-colors"></div>
            <div className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-2 flex items-center justify-between">
              Legal Exposure
              <Scale className="w-4 h-4 text-rose-500" />
            </div>
            <div className="text-4xl font-black text-white mb-2">$8.4M</div>
            <div className="text-sm font-medium text-rose-400 flex items-center gap-1">
               High-risk indemnity clauses
            </div>
          </div>

          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group hover:border-blue-500/50 transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl -z-10 group-hover:bg-blue-500/10 transition-colors"></div>
            <div className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-2 flex items-center justify-between">
              Active Litigation
              <ShieldAlert className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-4xl font-black text-white mb-2">3</div>
            <div className="text-sm font-medium text-slate-400 flex items-center gap-1">
               0 Material events
            </div>
          </div>
        </div>

        {/* Legal Matrices */}
        <div className="flex-1 min-h-0 grid grid-cols-2 gap-8 pb-12">
          <div className="flex flex-col">
            <PremiumTable 
              title="Top Enterprise Exposures" 
              headers={["Contract / Obligation", "Risk Level", "Financial Value"]}
            >
              {[
                { name: "Acme Corp Master Services Agreement", sev: "High", val: "$4.2M" },
                { name: "European Data Privacy Framework", sev: "Medium", val: "Statutory" },
                { name: "Global Cloud Services Vendor", sev: "Medium", val: "$3.8M" },
                { name: "Executive Stock Vesting Agreement", sev: "Low", val: "$1.4M" },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-slate-800/30 transition-colors">
                  <td className="py-4 px-5 font-medium text-slate-200 text-sm">{row.name}</td>
                  <td className="py-4 px-5">
                    <span className={`px-2 py-1 rounded text-xs font-bold border w-max block ${
                      row.sev === 'High' ? 'bg-rose-900/20 text-rose-400 border-rose-900/50' : 
                      row.sev === 'Medium' ? 'bg-amber-900/20 text-amber-400 border-amber-900/50' :
                      'bg-blue-900/20 text-blue-400 border-blue-900/50'
                    }`}>
                      {row.sev}
                    </span>
                  </td>
                  <td className="py-4 px-5 text-sm font-mono text-slate-400">{row.val}</td>
                </tr>
              ))}
            </PremiumTable>
          </div>

          <div className="flex flex-col">
            <PremiumTable 
              title="Pending Board-Level Approvals" 
              headers={["Action Item", "Sponsor", "Status"]}
            >
              {[
                { type: "Merger & Acquisition NDA", sponsor: "CFO Office", status: "Awaiting Signature" },
                { type: "Annual SEC 10-K Filing", sponsor: "General Counsel", status: "In Review" },
                { type: "Patent Registration (AI Engine)", sponsor: "CTO Office", status: "Drafting" },
                { type: "Strategic Partnership (EMEA)", sponsor: "VP Sales", status: "Negotiation" },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-slate-800/30 transition-colors">
                  <td className="py-4 px-5 font-medium text-amber-400 text-sm">{row.type}</td>
                  <td className="py-4 px-5 text-sm text-slate-300">{row.sponsor}</td>
                  <td className="py-4 px-5 text-sm font-mono text-slate-400">{row.status}</td>
                </tr>
              ))}
            </PremiumTable>
          </div>
        </div>

      </div>
    </div>
  );
}
