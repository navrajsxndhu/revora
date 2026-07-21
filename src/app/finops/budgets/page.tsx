import React from "react";
import Link from "next/link";
import { ArrowLeft, TrendingUp, DollarSign, ArrowDownRight, ArrowUpRight, BarChart3, AlertTriangle } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function BudgetOptimizationCenter() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        {/* Header */}
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <div className="mb-4">
              <Link href="/finops" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to FinOps Center
              </Link>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Budget & Cost Optimization</h1>
            <p className="text-slate-400">Departmental budget tracking. All optimization actions require constitutional Human Approval.</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-700 hover:bg-slate-800 rounded-md text-sm font-medium transition-colors">
            <BarChart3 className="w-4 h-4" /> Export Forecast
          </button>
        </header>

        <div className="grid grid-cols-3 gap-8 flex-1 min-h-0">
          
          {/* Optimization Proposals Panel */}
          <div className="col-span-1 bg-slate-900/40 border border-slate-800 rounded-2xl p-6 flex flex-col gap-4 overflow-y-auto">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-emerald-500" /> Pending Optimizations
            </h3>
            
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 hover:border-emerald-500/50 transition-colors">
               <div className="flex justify-between items-start mb-2">
                 <h4 className="font-bold text-slate-200 text-sm">Rightsize EC2 Fleet</h4>
                 <span className="text-emerald-400 text-sm font-bold">-$14,500/mo</span>
               </div>
               <p className="text-xs text-slate-400 mb-4">Downscale 12x r5.4xlarge instances in staging to r5.xlarge based on P99 CPU metrics.</p>
               <button className="w-full py-2 bg-emerald-900/20 text-emerald-400 hover:bg-emerald-900/40 border border-emerald-900/50 rounded-lg text-xs font-semibold transition-colors">
                 Request Executive Approval
               </button>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 hover:border-emerald-500/50 transition-colors">
               <div className="flex justify-between items-start mb-2">
                 <h4 className="font-bold text-slate-200 text-sm">Purge Orphaned EBS</h4>
                 <span className="text-emerald-400 text-sm font-bold">-$3,200/mo</span>
               </div>
               <p className="text-xs text-slate-400 mb-4">Delete 142 unattached storage volumes older than 90 days.</p>
               <button className="w-full py-2 bg-emerald-900/20 text-emerald-400 hover:bg-emerald-900/40 border border-emerald-900/50 rounded-lg text-xs font-semibold transition-colors">
                 Request Executive Approval
               </button>
            </div>
            
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 hover:border-emerald-500/50 transition-colors">
               <div className="flex justify-between items-start mb-2">
                 <h4 className="font-bold text-slate-200 text-sm">Reclaim Figma Seats</h4>
                 <span className="text-emerald-400 text-sm font-bold">-$8,400/yr</span>
               </div>
               <p className="text-xs text-slate-400 mb-4">Revoke licenses for 158 users with 0 logins in the past 120 days.</p>
               <button className="w-full py-2 bg-emerald-900/20 text-emerald-400 hover:bg-emerald-900/40 border border-emerald-900/50 rounded-lg text-xs font-semibold transition-colors">
                 Request Executive Approval
               </button>
            </div>
          </div>

          {/* Department Budgets */}
          <div className="col-span-2 overflow-hidden flex flex-col">
            <PremiumTable 
              title="Allocated Department Budgets" 
              headers={["Department", "FY26 Budget", "YTD Spend", "Forecast", "Variance", "Governance"]}
            >
              {[
                { dept: "Platform Engineering", budget: "$4.5M", ytd: "$2.1M", fcst: "$4.8M", var: "+$300K", gov: "At Risk" },
                { dept: "Data & AI Group", budget: "$3.2M", ytd: "$1.4M", fcst: "$3.0M", var: "-$200K", gov: "Compliant" },
                { dept: "Customer Support", budget: "$1.8M", ytd: "$800K", fcst: "$1.7M", var: "-$100K", gov: "Compliant" },
                { dept: "Marketing & Sales", budget: "$1.2M", ytd: "$750K", fcst: "$1.4M", var: "+$200K", gov: "At Risk" },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-slate-800/30 transition-colors">
                  <td className="py-4 px-5 font-medium text-slate-200 text-sm">{row.dept}</td>
                  <td className="py-4 px-5 text-sm font-mono text-slate-400">{row.budget}</td>
                  <td className="py-4 px-5 text-sm font-mono text-slate-300 font-bold">{row.ytd}</td>
                  <td className="py-4 px-5 text-sm font-mono text-slate-400">{row.fcst}</td>
                  <td className="py-4 px-5 text-sm font-mono">
                    <span className={`flex items-center gap-1 ${row.var.startsWith('+') ? 'text-rose-400' : 'text-emerald-400'}`}>
                      {row.var.startsWith('+') ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                      {row.var}
                    </span>
                  </td>
                  <td className="py-4 px-5">
                    <span className={`px-2 py-1 rounded text-xs font-medium border flex items-center gap-1 w-max ${
                      row.gov === 'At Risk'
                        ? 'bg-rose-500/10 text-rose-400 border-rose-500/20' 
                        : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                    }`}>
                      {row.gov === 'At Risk' && <AlertTriangle className="w-3 h-3" />}
                      {row.gov}
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
