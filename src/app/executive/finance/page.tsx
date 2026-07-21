import React from "react";
import Link from "next/link";
import { ArrowLeft, DollarSign, TrendingUp, TrendingDown, Target, Building2, Layers } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";

export default function ExecutiveFinanceDashboard() {
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
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Executive Financial Overview</h1>
            <p className="text-slate-400">Board-level transparency into enterprise Total Cost of Ownership (TCO).</p>
          </div>
        </header>

        {/* Global Executive KPIs */}
        <div className="grid grid-cols-4 gap-6 shrink-0">
          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group hover:border-emerald-500/50 transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl -z-10 group-hover:bg-emerald-500/10 transition-colors"></div>
            <div className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-2 flex items-center justify-between">
              Annual Operating Plan
              <Target className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-4xl font-black text-white mb-2">$12.4M</div>
            <div className="text-sm font-medium text-emerald-400 flex items-center gap-1">
               <TrendingDown className="w-3 h-3" /> 2.1% under projected run-rate
            </div>
          </div>
          
          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group hover:border-rose-500/50 transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/5 rounded-full blur-3xl -z-10 group-hover:bg-rose-500/10 transition-colors"></div>
            <div className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-2 flex items-center justify-between">
              Total Cloud Spend (YTD)
              <Layers className="w-4 h-4 text-rose-500" />
            </div>
            <div className="text-4xl font-black text-white mb-2">$4.1M</div>
            <div className="text-sm font-medium text-rose-400 flex items-center gap-1">
               <TrendingUp className="w-3 h-3" /> 5.4% over AWS Commitments
            </div>
          </div>

          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group hover:border-blue-500/50 transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl -z-10 group-hover:bg-blue-500/10 transition-colors"></div>
            <div className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-2 flex items-center justify-between">
              SaaS & Vendor TCO
              <Building2 className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-4xl font-black text-white mb-2">$2.8M</div>
            <div className="text-sm font-medium text-slate-400 flex items-center gap-1">
               Across 142 Active Vendors
            </div>
          </div>

          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group hover:border-amber-500/50 transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-3xl -z-10 group-hover:bg-amber-500/10 transition-colors"></div>
            <div className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-2 flex items-center justify-between">
              Captured Savings
              <DollarSign className="w-4 h-4 text-amber-500" />
            </div>
            <div className="text-4xl font-black text-white mb-2">$842K</div>
            <div className="text-sm font-medium text-amber-400 flex items-center gap-1">
               Via Auto-Shutdown & Reserved Instances
            </div>
          </div>
        </div>

        {/* Financial Rankings */}
        <div className="flex-1 min-h-0 grid grid-cols-2 gap-8 pb-12">
          <div className="flex flex-col">
            <PremiumTable 
              title="Top Department Expenditures" 
              headers={["Department", "YTD Spend", "Budget Variance"]}
            >
              {[
                { dept: "Platform Engineering", spend: "$4.2M", var: "+2.1%" },
                { dept: "Data & Analytics", spend: "$2.8M", var: "-1.4%" },
                { dept: "Sales Operations", spend: "$1.5M", var: "+8.2%" },
                { dept: "Marketing", spend: "$900K", var: "-4.5%" },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-slate-800/30 transition-colors">
                  <td className="py-4 px-5 font-medium text-slate-200 text-sm">{row.dept}</td>
                  <td className="py-4 px-5 text-sm font-mono text-slate-300 font-bold">{row.spend}</td>
                  <td className="py-4 px-5">
                    <span className={`px-2 py-1 rounded text-xs font-bold border w-max block ${
                      row.var.startsWith('+') ? 'bg-rose-900/20 text-rose-400 border-rose-900/50' : 'bg-emerald-900/20 text-emerald-400 border-emerald-900/50'
                    }`}>
                      {row.var}
                    </span>
                  </td>
                </tr>
              ))}
            </PremiumTable>
          </div>

          <div className="flex flex-col">
            <PremiumTable 
              title="Top Vendor Run-Rates" 
              headers={["Vendor", "Category", "Annual Run-Rate"]}
            >
              {[
                { name: "Amazon Web Services", cat: "Cloud Infrastructure", arr: "$3.4M" },
                { name: "Datadog", cat: "Observability", arr: "$840K" },
                { name: "Salesforce", cat: "CRM", arr: "$650K" },
                { name: "Microsoft 365", cat: "Productivity", arr: "$420K" },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-slate-800/30 transition-colors">
                  <td className="py-4 px-5 font-medium text-slate-200 text-sm">{row.name}</td>
                  <td className="py-4 px-5 text-sm text-slate-400">{row.cat}</td>
                  <td className="py-4 px-5 text-sm font-mono text-slate-300 font-bold">{row.arr}</td>
                </tr>
              ))}
            </PremiumTable>
          </div>
        </div>

      </div>
    </div>
  );
}
