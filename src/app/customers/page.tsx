import React from "react";
import Link from "next/link";
import { Users, HeartHandshake, Briefcase, Activity, AlertTriangle, ArrowRight, Search, ShieldCheck } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";

export default function CustomerOperationsCenter() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        {/* Header */}
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Customer Operations Command Center</h1>
            <p className="text-slate-400">Enterprise governance over customer lifecycle, onboarding, and commercial success.</p>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/executive/customers" className="flex items-center gap-2 px-4 py-2 bg-emerald-900/20 text-emerald-400 border border-emerald-900/50 hover:bg-emerald-900/30 rounded-md text-sm font-medium transition-colors">
              <HeartHandshake className="w-4 h-4" /> Executive Customer Board
            </Link>
          </div>
        </header>

        {/* Global KPIs */}
        <div className="grid grid-cols-4 gap-4 shrink-0">
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Active Onboarding
              <Activity className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">42</div>
            <div className="text-xs text-blue-400">Enterprise Implementations</div>
          </div>
          
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 shadow-[0_0_15px_rgba(245,158,11,0.05)] border-amber-900/30 bg-amber-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Upcoming Renewals
              <Briefcase className="w-4 h-4 text-amber-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">18</div>
            <div className="text-xs text-amber-400">Within next 90 days</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Support Escalations
              <AlertTriangle className="w-4 h-4 text-rose-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">4</div>
            <div className="text-xs text-rose-400">Tier 1 Strategic Accounts</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Global SLA Status
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">99.99%</div>
            <div className="text-xs text-emerald-500">All contractual obligations met</div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8 flex-1 min-h-0">
          
          {/* Quick Links / Menu */}
          <div className="col-span-1 bg-slate-900/40 border border-slate-800 rounded-2xl p-6 flex flex-col gap-2 overflow-y-auto">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Customer Frameworks</h3>
            
            <Link href="/customers/accounts" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors group">
              <div className="w-8 h-8 rounded bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                <Users className="w-4 h-4 text-blue-400" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-sm text-slate-200 group-hover:text-blue-400 transition-colors">Enterprise Customer Registry</div>
                <div className="text-xs text-slate-500">Constitutional account ledger</div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-blue-400 transition-colors" />
            </Link>

            <Link href="/customers/revenue" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors group">
              <div className="w-8 h-8 rounded bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                <HeartHandshake className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-sm text-slate-200 group-hover:text-emerald-400 transition-colors">Revenue & Sales Operations</div>
                <div className="text-xs text-slate-500">Pipelines & Commercial Execution</div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-emerald-400 transition-colors" />
            </Link>
            
            <div className="mt-8 relative">
               <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
               <input type="text" placeholder="Search Accounts & Pipelines..." className="w-full bg-slate-900 border border-slate-700 rounded-md pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors" />
            </div>
          </div>

          {/* Actionable Requests Table */}
          <div className="col-span-2 overflow-hidden flex flex-col">
            <PremiumTable 
              title="Customer Action Queue" 
              headers={["Account", "Action Type", "Assigned Owner", "Status"]}
            >
              {[
                { acct: "Wayne Technologies", type: "Q3 Renewal Negotiation", owner: "Sarah Jenkins (AE)", status: "At Risk" },
                { acct: "Globex Corporation", type: "Enterprise Onboarding (Phase 2)", owner: "Implementation Team", status: "In Progress" },
                { acct: "Acme Global Industries", type: "Executive Business Review (EBR)", owner: "CSM Director", status: "Scheduled" },
                { acct: "Stark Enterprises", type: "Severity 1 Support Escalation", owner: "Support Engineering", status: "Escalated" },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-slate-800/30 transition-colors">
                  <td className="py-4 px-5 font-medium text-slate-200 text-sm">{row.acct}</td>
                  <td className="py-4 px-5 text-sm text-slate-300">{row.type}</td>
                  <td className="py-4 px-5 text-sm text-slate-400">{row.owner}</td>
                  <td className="py-4 px-5">
                    <span className={`px-2 py-1 rounded text-xs font-bold border w-max block ${
                      row.status === 'Escalated' || row.status === 'At Risk' ? 'bg-rose-900/20 text-rose-400 border-rose-900/50' : 
                      row.status === 'Scheduled' ? 'bg-amber-900/20 text-amber-400 border-amber-900/50' :
                      'bg-blue-900/20 text-blue-400 border-blue-900/50'
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
