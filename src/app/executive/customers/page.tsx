import React from "react";
import Link from "next/link";
import { ArrowLeft, Users, TrendingUp, Target, HeartHandshake, DollarSign, Activity } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";

export default function ExecutiveCustomerDashboard() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        {/* Header */}
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <div className="mb-4">
              <Link href="/customers" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to CRM Operations
              </Link>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Executive Customer Board</h1>
            <p className="text-slate-400">Board-level transparency into Net Revenue Retention, pipeline velocity, and strategic account health.</p>
          </div>
        </header>

        {/* Global Executive KPIs */}
        <div className="grid grid-cols-4 gap-6 shrink-0">
          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group hover:border-emerald-500/50 transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl -z-10 group-hover:bg-emerald-500/10 transition-colors"></div>
            <div className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-2 flex items-center justify-between">
              Net Revenue Retention
              <TrendingUp className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-4xl font-black text-white mb-2">124%</div>
            <div className="text-sm font-medium text-emerald-400 flex items-center gap-1">
               Top quartile performance
            </div>
          </div>
          
          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group hover:border-blue-500/50 transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl -z-10 group-hover:bg-blue-500/10 transition-colors"></div>
            <div className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-2 flex items-center justify-between">
              Active Enterprise Ops
              <Users className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-4xl font-black text-white mb-2">842</div>
            <div className="text-sm font-medium text-slate-400 flex items-center gap-1">
               Strategic & Key Accounts
            </div>
          </div>

          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group hover:border-amber-500/50 transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-3xl -z-10 group-hover:bg-amber-500/10 transition-colors"></div>
            <div className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-2 flex items-center justify-between">
              At-Risk ARR
              <Activity className="w-4 h-4 text-amber-500" />
            </div>
            <div className="text-4xl font-black text-white mb-2">$4.2M</div>
            <div className="text-sm font-medium text-amber-400 flex items-center gap-1">
               3 Strategic renewals flagged
            </div>
          </div>

          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group hover:border-rose-500/50 transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/5 rounded-full blur-3xl -z-10 group-hover:bg-rose-500/10 transition-colors"></div>
            <div className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-2 flex items-center justify-between">
              Q3 Revenue Pipeline
              <DollarSign className="w-4 h-4 text-rose-500" />
            </div>
            <div className="text-4xl font-black text-white mb-2">$84M</div>
            <div className="text-sm font-medium text-slate-400 flex items-center gap-1">
               3.2x Coverage Ratio
            </div>
          </div>
        </div>

        {/* Customer Matrices */}
        <div className="flex-1 min-h-0 grid grid-cols-2 gap-8 pb-12">
          <div className="flex flex-col">
            <PremiumTable 
              title="Strategic Accounts (Tier 1)" 
              headers={["Customer Account", "ARR", "Health Score", "Trend"]}
            >
              {[
                { name: "Acme Global Industries", arr: "$2.4M", health: "98/100", trend: "Expanding" },
                { name: "Stark Enterprises", arr: "$1.8M", health: "94/100", trend: "Stable" },
                { name: "Wayne Technologies", arr: "$1.4M", health: "72/100", trend: "At Risk" },
                { name: "Globex Corporation", arr: "$1.2M", health: "88/100", trend: "Stable" },
                { name: "Soylent Corp", arr: "$940K", health: "92/100", trend: "Expanding" },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-slate-800/30 transition-colors">
                  <td className="py-4 px-5 font-medium text-slate-200 text-sm">{row.name}</td>
                  <td className="py-4 px-5 text-sm font-mono text-emerald-400/80">{row.arr}</td>
                  <td className="py-4 px-5 text-sm font-mono text-slate-300">{row.health}</td>
                  <td className="py-4 px-5">
                    <span className={`px-2 py-1 rounded text-xs font-bold border w-max block ${
                      row.trend === 'Expanding' ? 'bg-emerald-900/20 text-emerald-400 border-emerald-900/50' : 
                      row.trend === 'At Risk' ? 'bg-rose-900/20 text-rose-400 border-rose-900/50' :
                      'bg-blue-900/20 text-blue-400 border-blue-900/50'
                    }`}>
                      {row.trend}
                    </span>
                  </td>
                </tr>
              ))}
            </PremiumTable>
          </div>

          <div className="flex flex-col">
            <PremiumTable 
              title="Pending Executive Revenue Approvals" 
              headers={["Opportunity / Request", "Financial Impact", "Sponsor"]}
            >
              {[
                { type: "Enterprise Discount Exception (40%)", impact: "$1.2M ACV Reduction", sponsor: "VP Sales EMEA" },
                { type: "Custom Service SLA (99.999%)", impact: "High Financial Liability", sponsor: "CRO" },
                { type: "Multi-Year Price Lock", impact: "$8.4M TCV", sponsor: "Dir. Strategic Accounts" },
                { type: "Non-Standard Indemnification", impact: "High Risk", sponsor: "General Counsel" },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-slate-800/30 transition-colors">
                  <td className="py-4 px-5 font-medium text-amber-400 text-sm">{row.type}</td>
                  <td className="py-4 px-5 text-sm font-mono text-slate-400">{row.impact}</td>
                  <td className="py-4 px-5 text-sm text-slate-300">{row.sponsor}</td>
                </tr>
              ))}
            </PremiumTable>
          </div>
        </div>

      </div>
    </div>
  );
}
