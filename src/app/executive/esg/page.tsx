import React from "react";
import Link from "next/link";
import { ArrowLeft, Leaf, Globe, Zap, AlertTriangle, ShieldCheck, TreePine, Droplets } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";

export default function ExecutiveESGDashboard() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        {/* Header */}
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <div className="mb-4">
              <Link href="/esg" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to ESG Operations
              </Link>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Executive ESG Board</h1>
            <p className="text-slate-400">Board-level transparency into enterprise sustainability targets, carbon reduction, and governance.</p>
          </div>
        </header>

        {/* Global Executive KPIs */}
        <div className="grid grid-cols-4 gap-6 shrink-0">
          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group hover:border-emerald-500/50 transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl -z-10 group-hover:bg-emerald-500/10 transition-colors"></div>
            <div className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-2 flex items-center justify-between">
              Enterprise ESG Score
              <Leaf className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-4xl font-black text-white mb-2">A+</div>
            <div className="text-sm font-medium text-emerald-400 flex items-center gap-1">
               Industry Leader (Top 5%)
            </div>
          </div>
          
          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group hover:border-blue-500/50 transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl -z-10 group-hover:bg-blue-500/10 transition-colors"></div>
            <div className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-2 flex items-center justify-between">
              Carbon Emissions
              <Globe className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-4xl font-black text-white mb-2">-14%</div>
            <div className="text-sm font-medium text-blue-400 flex items-center gap-1">
               Scope 1 & 2 Reduction (YTD)
            </div>
          </div>

          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group hover:border-amber-500/50 transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-3xl -z-10 group-hover:bg-amber-500/10 transition-colors"></div>
            <div className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-2 flex items-center justify-between">
              Renewable Energy
              <Zap className="w-4 h-4 text-amber-500" />
            </div>
            <div className="text-4xl font-black text-white mb-2">68%</div>
            <div className="text-sm font-medium text-amber-400 flex items-center gap-1">
               Global Facilities Transitioned
            </div>
          </div>

          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group hover:border-rose-500/50 transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/5 rounded-full blur-3xl -z-10 group-hover:bg-rose-500/10 transition-colors"></div>
            <div className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-2 flex items-center justify-between">
              Reporting Risks
              <AlertTriangle className="w-4 h-4 text-rose-500" />
            </div>
            <div className="text-4xl font-black text-white mb-2">1</div>
            <div className="text-sm font-medium text-rose-400 flex items-center gap-1">
               Pending Regulatory Disclosure
            </div>
          </div>
        </div>

        {/* ESG Matrices */}
        <div className="flex-1 min-h-0 grid grid-cols-2 gap-8 pb-12">
          <div className="flex flex-col">
            <PremiumTable 
              title="Strategic Sustainability Targets (2030 Goals)" 
              headers={["Initiative Pillar", "Target Objective", "Current Progress", "Status"]}
            >
              {[
                { name: "Net Zero Emissions", obj: "100% Scope 1, 2 Reduction", prog: "42% Achieved", status: "On Track" },
                { name: "Zero Waste to Landfill", obj: "95% Diversion Rate", prog: "88% Diversion", status: "Accelerating" },
                { name: "Water Stewardship", obj: "Net Positive Impact (NPI)", prog: "Baseline Set", status: "Behind Schedule" },
                { name: "Supply Chain Equity", obj: "100% Supplier ESG Audit", prog: "65% Audited", status: "On Track" },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-slate-800/30 transition-colors">
                  <td className="py-4 px-5 font-medium text-slate-200 text-sm">
                    <div className="flex items-center gap-2">
                       {i === 0 && <Globe className="w-4 h-4 text-blue-500" />}
                       {i === 1 && <TreePine className="w-4 h-4 text-emerald-500" />}
                       {i === 2 && <Droplets className="w-4 h-4 text-blue-400" />}
                       {i === 3 && <ShieldCheck className="w-4 h-4 text-purple-500" />}
                       {row.name}
                    </div>
                  </td>
                  <td className="py-4 px-5 text-sm font-mono text-slate-300">{row.obj}</td>
                  <td className="py-4 px-5 text-sm font-mono text-slate-400">{row.prog}</td>
                  <td className="py-4 px-5">
                    <span className={`px-2 py-1 rounded text-xs font-bold border w-max block ${
                      row.status === 'On Track' || row.status === 'Accelerating' ? 'bg-emerald-900/20 text-emerald-400 border-emerald-900/50' : 
                      row.status === 'Behind Schedule' ? 'bg-rose-900/20 text-rose-400 border-rose-900/50' :
                      'bg-blue-900/20 text-blue-400 border-blue-900/50'
                    }`}>
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </PremiumTable>
          </div>

          <div className="flex flex-col">
            <PremiumTable 
              title="Pending Executive ESG Approvals" 
              headers={["Strategic Request", "Impact Assessment", "Executive Sponsor"]}
            >
              {[
                { req: "Annual CSRD Disclosure", impact: "Public Regulatory Filing", sponsor: "Chief Sustainability Officer" },
                { req: "Carbon Offset Purchase ($2M)", impact: "Net Zero Alignment", sponsor: "Chief Financial Officer" },
                { req: "Solar Array Expansion (EU)", impact: "+15% Renewable Energy", sponsor: "VP Facilities" },
                { req: "New Supplier ESG Mandate", impact: "High Procurement Risk", sponsor: "Chief Supply Chain Officer" },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-slate-800/30 transition-colors">
                  <td className="py-4 px-5 font-medium text-amber-400 text-sm">
                    <div className="flex items-center gap-2">
                       <AlertTriangle className="w-4 h-4" />
                       {row.req}
                    </div>
                  </td>
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
