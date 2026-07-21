import React from "react";
import Link from "next/link";
import { ArrowLeft, Presentation, Download, Share2, BarChart4, TrendingUp, ShieldAlert, Users, Database, Globe, Briefcase } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";

export default function BoardWorkspace() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        {/* Header */}
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <div className="mb-4">
              <Link href="/executive/situation-room" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Situation Room
              </Link>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Board Meeting Workspace</h1>
            <p className="text-slate-400">Presentation layer aggregating constitutional data across all enterprise modules for Board of Directors review.</p>
          </div>
          <div className="flex items-center gap-4">
             <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-700 hover:bg-slate-800 rounded-md text-sm font-medium transition-colors text-slate-200">
               <Share2 className="w-4 h-4" /> Share Access
             </button>
             <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-md text-sm font-medium transition-colors text-white shadow-[0_0_15px_rgba(37,99,235,0.3)]">
               <Download className="w-4 h-4" /> Export Board Pack (PDF)
             </button>
          </div>
        </header>

        {/* Board Pack Preview Grid */}
        <div className="grid grid-cols-4 gap-6 shrink-0">
          {/* Financial Summary */}
          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group hover:border-emerald-500/50 transition-colors">
            <div className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-4 flex items-center justify-between">
              Financial Health
              <TrendingUp className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="space-y-4">
               <div>
                  <div className="text-xs text-slate-500 mb-1">Total Enterprise Value (TEV)</div>
                  <div className="text-2xl font-black text-white">$1.24B</div>
               </div>
               <div>
                  <div className="text-xs text-slate-500 mb-1">ARR</div>
                  <div className="text-xl font-bold text-white">$420.5M</div>
               </div>
               <div className="text-xs font-medium text-emerald-400 mt-2 bg-emerald-900/20 px-2 py-1 rounded w-max border border-emerald-900/50">
                 +14% YoY Growth
               </div>
            </div>
          </div>

          {/* Risk & Compliance Summary */}
          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group hover:border-rose-500/50 transition-colors">
            <div className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-4 flex items-center justify-between">
              Risk & Compliance
              <ShieldAlert className="w-4 h-4 text-rose-500" />
            </div>
            <div className="space-y-4">
               <div>
                  <div className="text-xs text-slate-500 mb-1">Enterprise Risk Score</div>
                  <div className="text-2xl font-black text-white">72/100</div>
               </div>
               <div>
                  <div className="text-xs text-slate-500 mb-1">Open Critical Risks</div>
                  <div className="text-xl font-bold text-rose-400">3</div>
               </div>
               <div className="text-xs font-medium text-amber-400 mt-2 bg-amber-900/20 px-2 py-1 rounded w-max border border-amber-900/50">
                 Monitor Supply Chain
               </div>
            </div>
          </div>

          {/* Product & Market */}
          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group hover:border-blue-500/50 transition-colors">
            <div className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-4 flex items-center justify-between">
              Product Portfolio
              <Database className="w-4 h-4 text-blue-500" />
            </div>
            <div className="space-y-4">
               <div>
                  <div className="text-xs text-slate-500 mb-1">Active Products</div>
                  <div className="text-2xl font-black text-white">42</div>
               </div>
               <div>
                  <div className="text-xs text-slate-500 mb-1">R&D Investment (Q3)</div>
                  <div className="text-xl font-bold text-white">$14.2M</div>
               </div>
               <div className="text-xs font-medium text-blue-400 mt-2 bg-blue-900/20 px-2 py-1 rounded w-max border border-blue-900/50">
                 Revora OS v2.5 Launching
               </div>
            </div>
          </div>

          {/* ESG & Workforce */}
          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group hover:border-purple-500/50 transition-colors">
            <div className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-4 flex items-center justify-between">
              Workforce & ESG
              <Globe className="w-4 h-4 text-purple-500" />
            </div>
            <div className="space-y-4">
               <div>
                  <div className="text-xs text-slate-500 mb-1">Global Headcount</div>
                  <div className="text-2xl font-black text-white">4,280</div>
               </div>
               <div>
                  <div className="text-xs text-slate-500 mb-1">ESG Rating</div>
                  <div className="text-xl font-bold text-emerald-400">A+</div>
               </div>
               <div className="text-xs font-medium text-purple-400 mt-2 bg-purple-900/20 px-2 py-1 rounded w-max border border-purple-900/50">
                 CSRD Filing Prep Underway
               </div>
            </div>
          </div>
        </div>

        {/* Strategic Agenda Table */}
        <div className="flex-1 min-h-0 pb-12">
          <PremiumTable 
            title="Q3 Board Meeting Agenda & Decision Log" 
            headers={["Agenda Item", "Domain Presenter", "Time Allocation", "Required Outcome", "Status"]}
          >
            {[
              { item: "Q2 Financial Performance Review", domain: "CFO (Finance)", time: "45 mins", outcome: "Review & Acknowledge", status: "Prepared" },
              { item: "Approval: $15M Cloud Migration to AWS", domain: "CTO / CIO", time: "30 mins", outcome: "Formal Board Approval", status: "Requires Vote", icon: <Briefcase className="w-4 h-4 text-blue-500" /> },
              { item: "Enterprise Risk & Compliance Briefing", domain: "CRO / CCO", time: "30 mins", outcome: "Review Risk Mitigations", status: "Prepared" },
              { item: "European Market Expansion (DACH) Strategy", domain: "CEO / CSO", time: "60 mins", outcome: "Approve Capital Allocation", status: "Requires Vote", icon: <Briefcase className="w-4 h-4 text-blue-500" /> },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors">
                <td className="py-4 px-5 font-medium text-slate-200 text-sm">
                  <div className="flex items-center gap-2">
                     {row.icon ? row.icon : <Presentation className="w-4 h-4 text-slate-500" />}
                     {row.item}
                  </div>
                </td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.domain}</td>
                <td className="py-4 px-5 text-sm font-mono text-slate-300">{row.time}</td>
                <td className="py-4 px-5 text-sm text-slate-300">{row.outcome}</td>
                <td className="py-4 px-5">
                  <span className={`px-2 py-1 rounded text-xs font-bold border w-max block ${
                    row.status.includes('Requires') ? 'bg-amber-900/20 text-amber-400 border-amber-900/50' : 
                    'bg-emerald-900/20 text-emerald-400 border-emerald-900/50'
                  }`}>
                    {row.status}
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
