import React from "react";
import Link from "next/link";
import { ArrowLeft, Search, BarChart3, TrendingUp, Download, PieChart, Activity, Cpu, Code2, Globe, Cloud } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function ArchitectureAnalytics() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        {/* Header */}
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <div className="mb-4">
              <Link href="/architecture" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Architecture Command Center
              </Link>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Architecture Analytics</h1>
            <p className="text-slate-400">Executive intelligence for capability maturity, technology adoption, and modernization velocity.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="relative">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input type="text" placeholder="Search Metrics..." className="bg-slate-900 border border-slate-700 rounded-md pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-fuchsia-500 w-80 transition-colors" />
             </div>
             <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-md text-sm font-medium transition-colors text-slate-200">
               <Download className="w-4 h-4" /> Export Report
             </button>
          </div>
        </header>

        {/* Global KPIs */}
        <div className="grid grid-cols-4 gap-4 shrink-0">
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 shadow-[0_0_15px_rgba(217,70,239,0.05)] border-fuchsia-900/30 bg-fuchsia-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Modernization Velocity
              <Activity className="w-4 h-4 text-fuchsia-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">18.4%</div>
            <div className="text-xs text-fuchsia-400">Legacy to Cloud Native YoY</div>
          </div>
          
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-blue-900/30 bg-blue-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Cloud Migration Progress
              <Cloud className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">68%</div>
            <div className="text-xs text-blue-400">Target: 85% by Q4</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-emerald-900/30 bg-emerald-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Standardization Score
              <Code2 className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">82/100</div>
            <div className="text-xs text-emerald-400">Compliance with tech standards</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-amber-900/30 bg-amber-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Application Rationalization
              <PieChart className="w-4 h-4 text-amber-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">-4.2%</div>
            <div className="text-xs text-amber-400">Reduction in total applications</div>
          </div>
        </div>

        {/* Analytics Table */}
        <div className="flex-1 min-h-0 pb-12">
          <PremiumTable 
            title="Strategic Capability Metrics" 
            headers={["Business Domain", "Total Apps", "Cloud Native %", "Tech Debt Est.", "Maturity Score", "Analytics Trace"]}
          >
            {[
              { domain: "Commerce & Digital", apps: "142", cloud: "94%", debt: "$1.2M", score: "88/100", trace: "ANX-EA-801" },
              { domain: "Supply Chain & Logistics", apps: "86", cloud: "45%", debt: "$12.4M", score: "62/100", trace: "ANX-EA-802" },
              { domain: "Finance & Accounting", apps: "44", cloud: "22%", debt: "$18.5M", score: "54/100", trace: "ANX-EA-803" },
              { domain: "Human Resources", apps: "18", cloud: "100%", debt: "$0.4M", score: "92/100", trace: "ANX-EA-804" },
              { domain: "Manufacturing Ops", apps: "215", cloud: "15%", debt: "$10.0M", score: "48/100", trace: "ANX-EA-805" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group cursor-pointer">
                <td className="py-4 px-5">
                   <div className="flex items-center gap-2 font-medium text-fuchsia-400 text-sm">
                     <Globe className="w-4 h-4 text-slate-500" />
                     {row.domain}
                   </div>
                </td>
                <td className="py-4 px-5 text-sm font-mono text-slate-300">
                   {row.apps}
                </td>
                <td className="py-4 px-5 text-sm font-mono">
                   <span className={row.cloud.includes('9') || row.cloud.includes('100') ? 'text-emerald-400' : row.cloud.includes('4') ? 'text-amber-400' : 'text-rose-400'}>
                     {row.cloud}
                   </span>
                </td>
                <td className="py-4 px-5 text-sm font-mono">
                   <span className={row.debt.includes('18') || row.debt.includes('12') || row.debt.includes('10') ? 'text-rose-400' : 'text-slate-400'}>
                     {row.debt}
                   </span>
                </td>
                <td className="py-4 px-5">
                  <span className={`text-xs font-bold px-2 py-1 rounded block w-max ${
                    row.score.includes('8') || row.score.includes('9') ? 'bg-emerald-900/20 text-emerald-400 border border-emerald-900/50' : 
                    row.score.includes('6') ? 'bg-amber-900/20 text-amber-400 border border-amber-900/50' :
                    'bg-rose-900/20 text-rose-400 border border-rose-900/50'
                  }`}>
                    {row.score}
                  </span>
                </td>
                <td className="py-4 px-5">
                  <EvidenceBadge evidenceId={row.trace} timestamp="Aggregated" />
                </td>
              </tr>
            ))}
          </PremiumTable>
        </div>

      </div>
    </div>
  );
}
