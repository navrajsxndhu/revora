import React from "react";
import Link from "next/link";
import { Leaf, ArrowRight, Search, Zap, Globe, Target, ShieldAlert, BarChart } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";

export default function ESGOperationsCenter() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        {/* Header */}
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Sustainability Operations Command Center</h1>
            <p className="text-slate-400">Enterprise governance over carbon reduction initiatives, energy consumption, and compliance tracking.</p>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/executive/esg" className="flex items-center gap-2 px-4 py-2 bg-blue-900/20 text-blue-400 border border-blue-900/50 hover:bg-blue-900/30 rounded-md text-sm font-medium transition-colors">
              <Leaf className="w-4 h-4" /> Executive ESG Board
            </Link>
          </div>
        </header>

        {/* Global KPIs */}
        <div className="grid grid-cols-4 gap-4 shrink-0">
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 shadow-[0_0_15px_rgba(59,130,246,0.05)] border-blue-900/30 bg-blue-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Active ESG Initiatives
              <Target className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">24</div>
            <div className="text-xs text-blue-400">Sustainability Projects</div>
          </div>
          
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Carbon Emissions
              <Globe className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">1,420 tCO2e</div>
            <div className="text-xs text-emerald-500">Scope 1 & 2 (MTD)</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 shadow-[0_0_15px_rgba(244,63,94,0.05)] border-rose-900/30 bg-rose-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Compliance Risks
              <ShieldAlert className="w-4 h-4 text-rose-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">3</div>
            <div className="text-xs text-rose-400">Supplier Audit Failures</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Renewable Energy
              <Zap className="w-4 h-4 text-amber-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">4,200 MWh</div>
            <div className="text-xs text-slate-500">Clean Energy Consumed</div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8 flex-1 min-h-0">
          
          {/* Quick Links / Menu */}
          <div className="col-span-1 bg-slate-900/40 border border-slate-800 rounded-2xl p-6 flex flex-col gap-2 overflow-y-auto">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Sustainability Frameworks</h3>
            
            <Link href="/esg/registry" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors group">
              <div className="w-8 h-8 rounded bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                <Leaf className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-sm text-slate-200 group-hover:text-emerald-400 transition-colors">Enterprise ESG Registry</div>
                <div className="text-xs text-slate-500">Sustainability objectives & metrics</div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-emerald-400 transition-colors" />
            </Link>

            <Link href="/esg/reports" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors group">
              <div className="w-8 h-8 rounded bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                <BarChart className="w-4 h-4 text-blue-400" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-sm text-slate-200 group-hover:text-blue-400 transition-colors">ESG Reporting Governance</div>
                <div className="text-xs text-slate-500">Regulatory disclosures & audits</div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-blue-400 transition-colors" />
            </Link>
            
            <div className="mt-8 relative">
               <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
               <input type="text" placeholder="Search Initiatives & Policies..." className="w-full bg-slate-900 border border-slate-700 rounded-md pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors" />
            </div>
          </div>

          {/* Actionable Requests Table */}
          <div className="col-span-2 overflow-hidden flex flex-col">
            <PremiumTable 
              title="Sustainability Action Queue" 
              headers={["Initiative / Event", "Impact Area", "Assigned Owner", "Status"]}
            >
              {[
                { init: "Global Solar Transition (Phase 1)", area: "Energy (Scope 2)", owner: "Facilities Director", status: "In Progress" },
                { init: "Supplier ESG Audit (Tier 1)", area: "Supply Chain (Scope 3)", owner: "Procurement Lead", status: "Warning" },
                { init: "Zero-Waste Packaging Rollout", area: "Materials Management", owner: "Product Strategy", status: "Blocked" },
                { init: "Annual CSRD Reporting Data Collection", area: "Regulatory Governance", owner: "Compliance Manager", status: "On Track" },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-slate-800/30 transition-colors">
                  <td className="py-4 px-5 font-medium text-slate-200 text-sm">{row.init}</td>
                  <td className="py-4 px-5 text-sm text-slate-300">{row.area}</td>
                  <td className="py-4 px-5 text-sm text-slate-400">{row.owner}</td>
                  <td className="py-4 px-5">
                    <span className={`px-2 py-1 rounded text-xs font-bold border w-max block ${
                      row.status === 'Blocked' || row.status === 'Warning' ? 'bg-rose-900/20 text-rose-400 border-rose-900/50' : 
                      row.status === 'In Progress' ? 'bg-amber-900/20 text-amber-400 border-amber-900/50' :
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
    </div>
  );
}
