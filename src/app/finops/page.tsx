import React from "react";
import Link from "next/link";
import { ArrowLeft, DollarSign, Cloud, CreditCard, TrendingUp, AlertTriangle, ShieldCheck } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";

export default function FinOpsCommandCenter() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        {/* Header */}
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">FinOps Command Center</h1>
            <p className="text-slate-400">Executive financial governance. Cloud consumption and SaaS licensing bound to constitutional budgets.</p>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/finops/budgets" className="flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-700 hover:bg-slate-800 rounded-md text-sm font-medium transition-colors text-slate-300">
              <TrendingUp className="w-4 h-4" /> Budget Allocations
            </Link>
            <Link href="/executive/finance" className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-md text-sm font-medium transition-colors text-white">
              <DollarSign className="w-4 h-4" /> Executive Finance
            </Link>
          </div>
        </header>

        {/* Global KPIs */}
        <div className="grid grid-cols-4 gap-4 shrink-0">
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Total Cloud Spend (MTD)
              <Cloud className="w-4 h-4 text-slate-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">$842.4k</div>
            <div className="text-xs text-rose-400">Trending 12% over budget</div>
          </div>
          
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              SaaS License Utilization
              <CreditCard className="w-4 h-4 text-slate-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">86%</div>
            <div className="text-xs text-amber-400">14% Orphaned Subscriptions</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 shadow-[0_0_15px_rgba(34,197,94,0.05)] border-emerald-900/30 bg-emerald-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Identified Savings
              <DollarSign className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">$124.5k</div>
            <div className="text-xs text-emerald-400">Awaiting Executive Approval</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Financial Compliance
              <ShieldCheck className="w-4 h-4 text-slate-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">99.8%</div>
            <div className="text-xs text-blue-400">Evidenced Transactions</div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8 flex-1 min-h-0">
          
          {/* Quick Links / Menu */}
          <div className="col-span-1 bg-slate-900/40 border border-slate-800 rounded-2xl p-6 flex flex-col gap-2 overflow-y-auto">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Financial Vectors</h3>
            
            <Link href="/finops/cloud" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors group">
              <div className="w-8 h-8 rounded bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                <Cloud className="w-4 h-4 text-blue-400" />
              </div>
              <div>
                <div className="font-semibold text-sm text-slate-200 group-hover:text-blue-400 transition-colors">Cloud Cost Intelligence</div>
                <div className="text-xs text-slate-500">AWS, Azure & GCP Telemetry</div>
              </div>
            </Link>

            <Link href="/finops/licenses" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors group">
              <div className="w-8 h-8 rounded bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                <CreditCard className="w-4 h-4 text-emerald-400" />
              </div>
              <div>
                <div className="font-semibold text-sm text-slate-200 group-hover:text-emerald-400 transition-colors">SaaS License Governance</div>
                <div className="text-xs text-slate-500">Subscription waste tracking</div>
              </div>
            </Link>

            <Link href="/finops/budgets" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors group">
              <div className="w-8 h-8 rounded bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                <TrendingUp className="w-4 h-4 text-amber-400" />
              </div>
              <div>
                <div className="font-semibold text-sm text-slate-200 group-hover:text-amber-400 transition-colors">Budget & Optimization</div>
                <div className="text-xs text-slate-500">Department allocations</div>
              </div>
            </Link>
          </div>

          {/* Department Spend Table */}
          <div className="col-span-2 overflow-hidden flex flex-col">
            <PremiumTable 
              title="Department Spend Overview (MTD)" 
              headers={["Department", "Allocated Budget", "Current Spend", "Variance", "Status"]}
            >
              {[
                { dept: "Platform Engineering", budget: "$450,000", spend: "$485,200", var: "+7.8%", status: "Over Budget" },
                { dept: "Data & AI Group", budget: "$320,000", spend: "$298,400", var: "-6.7%", status: "On Track" },
                { third: true, dept: "Customer Support", budget: "$120,000", spend: "$95,100", var: "-20.7%", status: "Optimized" },
                { dept: "Marketing & Sales", budget: "$80,000", spend: "$82,500", var: "+3.1%", status: "Warning" },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-slate-800/30 transition-colors">
                  <td className="py-4 px-5 font-medium text-slate-200 text-sm">
                    {row.dept}
                  </td>
                  <td className="py-4 px-5 text-sm font-mono text-slate-400">{row.budget}</td>
                  <td className="py-4 px-5 text-sm font-mono font-bold text-slate-200">{row.spend}</td>
                  <td className="py-4 px-5 text-sm font-mono">
                    <span className={`${row.var.startsWith('+') ? 'text-rose-400' : 'text-emerald-400'}`}>
                      {row.var}
                    </span>
                  </td>
                  <td className="py-4 px-5">
                    <span className={`px-2 py-1 rounded text-xs font-medium border w-max block ${
                      row.status.includes('Over')
                        ? 'bg-rose-500/10 text-rose-400 border-rose-500/20' 
                        : row.status.includes('Warning')
                          ? 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                          : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
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
