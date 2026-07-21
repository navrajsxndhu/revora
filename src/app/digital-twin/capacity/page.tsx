import React from "react";
import Link from "next/link";
import { ArrowLeft, TrendingUp, Cpu, Server, Factory, Users, Download, ArrowUpRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function PredictiveCapacityPlanning() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        {/* Header */}
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <div className="mb-4">
              <Link href="/digital-twin" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Digital Twin
              </Link>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Predictive Capacity Planning</h1>
            <p className="text-slate-400">Deterministic mathematical forecasting for infrastructure, workforce, and supply chain demands. (No autonomous AI predictions).</p>
          </div>
          <div className="flex items-center gap-4">
             <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-md text-sm font-medium transition-colors text-slate-200">
               <Download className="w-4 h-4" /> Export Forecasts
             </button>
             <div className="flex items-center gap-2 px-4 py-2 bg-emerald-900/40 border border-emerald-900/50 rounded-md text-sm font-medium text-emerald-400">
               <ShieldCheck className="w-4 h-4" /> Deterministic Mode Active
             </div>
          </div>
        </header>

        {/* Global KPIs */}
        <div className="grid grid-cols-4 gap-4 shrink-0">
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 shadow-[0_0_15px_rgba(16,185,129,0.05)] border-emerald-900/30 bg-emerald-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Cloud Infrastructure Margin
              <Server className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">+14%</div>
            <div className="text-xs text-emerald-400">Headroom projected (6 mo)</div>
          </div>
          
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 shadow-[0_0_15px_rgba(244,63,94,0.05)] border-rose-900/30 bg-rose-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Manufacturing Shortfall
              <Factory className="w-4 h-4 text-rose-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">12,000 U</div>
            <div className="text-xs text-rose-400">Projected Q4 deficit</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Workforce Optimization
              <Users className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">Balanced</div>
            <div className="text-xs text-slate-500">Resource capacity nominal</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Model Integrity
              <Cpu className="w-4 h-4 text-purple-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">100%</div>
            <div className="text-xs text-purple-400">Mathematically verified</div>
          </div>
        </div>

        {/* Capacity Table */}
        <div className="flex-1 min-h-0 pb-12">
          <PremiumTable 
            title="Deterministic Forecast Registry" 
            headers={["Planning Domain", "Forecast Metric", "Projected Trend (6 Mo)", "Algorithm Trace", "Confidence Link"]}
          >
            {[
              { domain: "Cloud Compute (AWS)", metric: "vCPU Utilization (Global)", trend: "Linear Increase (+8%)", trace: "Linear Regression (R²=0.94)", link: "CAP-EV-701", status: "Nominal" },
              { domain: "Storage Expansion", metric: "Petabytes Allocated", trend: "Exponential (+24%)", trace: "Exponential Growth (Base 1.4)", link: "CAP-EV-702", status: "Warning" },
              { domain: "European Manufacturing", metric: "Throughput (Units/Hr)", trend: "Capacity Capped (Flat)", trace: "Constraint-Based Solver", link: "CAP-EV-703", status: "Critical" },
              { domain: "Engineering Headcount", metric: "FTE Allocation", trend: "Stable (+2%)", trace: "Attrition/Hire Balance", link: "CAP-EV-704", status: "Nominal" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group">
                <td className="py-4 px-5 font-medium text-slate-200 text-sm">
                  <div className="flex items-center gap-2">
                     {row.domain.includes('Cloud') && <Server className="w-4 h-4 text-emerald-500" />}
                     {row.domain.includes('Storage') && <Database className="w-4 h-4 text-amber-500" />}
                     {row.domain.includes('Manufacturing') && <Factory className="w-4 h-4 text-rose-500" />}
                     {row.domain.includes('Headcount') && <Users className="w-4 h-4 text-blue-500" />}
                     {row.domain}
                  </div>
                </td>
                <td className="py-4 px-5 text-sm text-slate-300">{row.metric}</td>
                <td className="py-4 px-5">
                   <div className="flex items-center gap-2 text-sm font-medium">
                      <TrendingUp className={`w-4 h-4 ${
                         row.status === 'Critical' ? 'text-rose-500' :
                         row.status === 'Warning' ? 'text-amber-500' : 'text-emerald-500'
                      }`} />
                      <span className={
                         row.status === 'Critical' ? 'text-rose-400' :
                         row.status === 'Warning' ? 'text-amber-400' : 'text-emerald-400'
                      }>{row.trend}</span>
                   </div>
                </td>
                <td className="py-4 px-5 text-sm font-mono text-slate-400">{row.trace}</td>
                <td className="py-4 px-5">
                  <EvidenceBadge evidenceId={row.link} timestamp="Computed" />
                </td>
              </tr>
            ))}
          </PremiumTable>
        </div>

      </div>
    </div>
  );
}
