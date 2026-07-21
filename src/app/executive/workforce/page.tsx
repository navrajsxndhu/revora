import React from "react";
import Link from "next/link";
import { ArrowLeft, Users, TrendingDown, Target, Building2, Briefcase, Award } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";

export default function ExecutiveWorkforceDashboard() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        {/* Header */}
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <div className="mb-4">
              <Link href="/workforce" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Human Capital
              </Link>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Executive Workforce Board</h1>
            <p className="text-slate-400">Board-level transparency into total headcount, attrition trends, and strategic talent distribution.</p>
          </div>
        </header>

        {/* Global Executive KPIs */}
        <div className="grid grid-cols-4 gap-6 shrink-0">
          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group hover:border-blue-500/50 transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl -z-10 group-hover:bg-blue-500/10 transition-colors"></div>
            <div className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-2 flex items-center justify-between">
              Total Headcount
              <Users className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-4xl font-black text-white mb-2">14,284</div>
            <div className="text-sm font-medium text-emerald-400 flex items-center gap-1">
               +1.2% YTD Growth
            </div>
          </div>
          
          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group hover:border-emerald-500/50 transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl -z-10 group-hover:bg-emerald-500/10 transition-colors"></div>
            <div className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-2 flex items-center justify-between">
              Total Capacity
              <Building2 className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-4xl font-black text-white mb-2">94%</div>
            <div className="text-sm font-medium text-slate-400 flex items-center gap-1">
               Global Utilization Rate
            </div>
          </div>

          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group hover:border-amber-500/50 transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-3xl -z-10 group-hover:bg-amber-500/10 transition-colors"></div>
            <div className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-2 flex items-center justify-between">
              Voluntary Attrition
              <TrendingDown className="w-4 h-4 text-amber-500" />
            </div>
            <div className="text-4xl font-black text-white mb-2">4.2%</div>
            <div className="text-sm font-medium text-amber-400 flex items-center gap-1">
               Elevated in Engineering
            </div>
          </div>

          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group hover:border-rose-500/50 transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/5 rounded-full blur-3xl -z-10 group-hover:bg-rose-500/10 transition-colors"></div>
            <div className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-2 flex items-center justify-between">
              Open Positions
              <Briefcase className="w-4 h-4 text-rose-500" />
            </div>
            <div className="text-4xl font-black text-white mb-2">412</div>
            <div className="text-sm font-medium text-slate-400 flex items-center gap-1">
               Avg Time to Fill: 42 days
            </div>
          </div>
        </div>

        {/* Workforce Matrices */}
        <div className="flex-1 min-h-0 grid grid-cols-2 gap-8 pb-12">
          <div className="flex flex-col">
            <PremiumTable 
              title="Strategic Talent Distribution" 
              headers={["Business Unit", "Headcount", "Utilization", "Trend"]}
            >
              {[
                { name: "Global Engineering & Platform", count: "4,102", util: "98%", trend: "Hiring" },
                { name: "Sales & Field Operations", count: "3,840", util: "92%", trend: "Stable" },
                { name: "Customer Success & Support", count: "2,910", util: "88%", trend: "Reducing" },
                { name: "Product & Design", count: "1,204", util: "96%", trend: "Hiring" },
                { name: "Corporate Operations (G&A)", count: "2,228", util: "90%", trend: "Stable" },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-slate-800/30 transition-colors">
                  <td className="py-4 px-5 font-medium text-slate-200 text-sm">{row.name}</td>
                  <td className="py-4 px-5 text-sm font-mono text-slate-300">{row.count}</td>
                  <td className="py-4 px-5 text-sm font-mono text-slate-400">{row.util}</td>
                  <td className="py-4 px-5">
                    <span className={`px-2 py-1 rounded text-xs font-bold border w-max block ${
                      row.trend === 'Hiring' ? 'bg-emerald-900/20 text-emerald-400 border-emerald-900/50' : 
                      row.trend === 'Reducing' ? 'bg-rose-900/20 text-rose-400 border-rose-900/50' :
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
              title="Pending Executive Approvals" 
              headers={["Approval Type", "Subject", "Sponsor"]}
            >
              {[
                { type: "Executive Compensation", subject: "SVP Engineering Package", sponsor: "Comp Committee" },
                { type: "Senior Promotion", subject: "Chief Information Security Officer", sponsor: "CEO" },
                { type: "Workforce Restructuring", subject: "EMEA Sales Consolidation", sponsor: "CRO" },
                { type: "Headcount Expansion", subject: "Q4 AI Research Team (+40)", sponsor: "CTO" },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-slate-800/30 transition-colors">
                  <td className="py-4 px-5 font-medium text-amber-400 text-sm">{row.type}</td>
                  <td className="py-4 px-5 text-sm text-slate-300">{row.subject}</td>
                  <td className="py-4 px-5 text-sm text-slate-400">{row.sponsor}</td>
                </tr>
              ))}
            </PremiumTable>
          </div>
        </div>

      </div>
    </div>
  );
}
