import React from "react";
import Link from "next/link";
import { ArrowLeft, Search, Download, BarChart2, TrendingUp, Cpu, Network, Zap, Users, ShieldCheck, Box } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function MLOpsAnalytics() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        {/* Header */}
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <div className="mb-4">
              <Link href="/ml-platform" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to ML Command Center
              </Link>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">MLOps Analytics</h1>
            <p className="text-slate-400">Executive intelligence for Machine Learning operational efficiency and infrastructure utilization.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="relative">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input type="text" placeholder="Search Metrics..." className="bg-slate-900 border border-slate-700 rounded-md pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-purple-500 w-72 transition-colors" />
             </div>
             <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-md text-sm font-medium transition-colors text-slate-200">
               <Download className="w-4 h-4" /> Export Report
             </button>
          </div>
        </header>

        {/* Global KPIs */}
        <div className="grid grid-cols-4 gap-4 shrink-0">
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 shadow-[0_0_15px_rgba(168,85,247,0.05)] border-purple-900/30 bg-purple-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Model Adoption Rate
              <TrendingUp className="w-4 h-4 text-purple-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">+24%</div>
            <div className="text-xs text-purple-400">Month over month</div>
          </div>
          
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-blue-900/30 bg-blue-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Compute Cost (30d)
              <Cpu className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">$420k</div>
            <div className="text-xs text-blue-400">Optimized across clusters</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-emerald-900/30 bg-emerald-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Experiment Velocity
              <Network className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">142</div>
            <div className="text-xs text-emerald-400">Runs per week (avg)</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-amber-900/30 bg-amber-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Time to Production
              <Zap className="w-4 h-4 text-amber-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">12 Days</div>
            <div className="text-xs text-amber-400">Idea to governed deployment</div>
          </div>
        </div>

        {/* Analytics Table */}
        <div className="flex-1 min-h-0 pb-12">
          <PremiumTable 
            title="Top Consumed AI Services" 
            headers={["Model Service", "Inference Volume (30d)", "Compute Spend", "Error Rate", "Performance (P95)", "Analytics Trace"]}
          >
            {[
              { svc: "fraud_detect_realtime", vol: "142M requests", spend: "$84,200", err: "0.01%", lat: "18ms", trace: "ANX-ML-101" },
              { svc: "llm_doc_summarizer", vol: "12M requests", spend: "$120,400", err: "0.05%", lat: "850ms", trace: "ANX-ML-102" },
              { svc: "product_recommendation", vol: "84M requests", spend: "$45,000", err: "0.10%", lat: "35ms", trace: "ANX-ML-103" },
              { svc: "customer_churn_predictor", vol: "2.4M requests", spend: "$1,200", err: "0.00%", lat: "24ms", trace: "ANX-ML-104" },
              { svc: "supply_chain_forecast", vol: "420k requests", spend: "$12,000", err: "N/A", lat: "145ms", trace: "ANX-ML-105" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group cursor-pointer">
                <td className="py-4 px-5 font-medium text-slate-200 text-sm">
                  <div className="flex items-center gap-2">
                     <BarChart2 className="w-4 h-4 text-purple-500" />
                     {row.svc}
                  </div>
                </td>
                <td className="py-4 px-5 text-sm font-mono text-slate-300">
                   {row.vol}
                </td>
                <td className="py-4 px-5 text-sm font-mono text-slate-400">
                   {row.spend}
                </td>
                <td className="py-4 px-5 text-sm font-mono">
                   <span className={row.err === 'N/A' ? 'text-slate-500' : row.err.includes('0.10') ? 'text-rose-400' : 'text-emerald-400'}>{row.err}</span>
                </td>
                <td className="py-4 px-5 text-sm font-mono">
                   <span className={row.lat === 'N/A' || row.lat === 'Async' ? 'text-slate-500' : row.lat.includes('850') ? 'text-amber-400' : 'text-emerald-400'}>{row.lat}</span>
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
