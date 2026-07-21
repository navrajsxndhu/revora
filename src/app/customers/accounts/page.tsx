import React from "react";
import Link from "next/link";
import { ArrowLeft, Users, Search, ShieldCheck, Building2, Download, ArrowUpRight } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function CustomerRegistry() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        {/* Header */}
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <div className="mb-4">
              <Link href="/customers" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to CRM Operations
              </Link>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Enterprise Customer Registry</h1>
            <p className="text-slate-400">The constitutional ledger for all organizational accounts, bound to RuntimeExecution.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="relative">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input type="text" placeholder="Search Accounts..." className="bg-slate-900 border border-slate-700 rounded-md pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-blue-500 w-64 transition-colors" />
             </div>
             <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-md text-sm font-medium transition-colors text-slate-200">
               <Download className="w-4 h-4" /> Export Report
             </button>
          </div>
        </header>

        {/* Customer Table */}
        <div className="flex-1 min-h-0 pb-12">
          <PremiumTable 
            title="Enterprise Accounts" 
            headers={["Account ID", "Customer Name", "Account Tier", "Account Executive", "Total ARR", "Status", "Account Record"]}
          >
            {[
              { id: "ACC-00104", name: "Acme Global Industries", tier: "Tier 1 (Strategic)", ae: "Sarah Jenkins", arr: "$2.4M", status: "Active", trace: "ACC-EV-112" },
              { id: "ACC-00192", name: "Wayne Technologies", tier: "Tier 1 (Strategic)", ae: "Michael Chen", arr: "$1.4M", status: "At Risk", trace: "ACC-EV-114" },
              { id: "ACC-00244", name: "Globex Corporation", tier: "Tier 2 (Key)", ae: "Amanda Wallace", arr: "$1.2M", status: "Onboarding", trace: "ACC-EV-118" },
              { id: "ACC-00301", name: "Initech", tier: "Tier 3 (Standard)", ae: "David Miller", arr: "$420K", status: "Active", trace: "ACC-EV-122" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group cursor-pointer">
                <td className="py-4 px-5 font-mono text-sm text-slate-400">
                  {row.id}
                </td>
                <td className="py-4 px-5 font-medium text-slate-200 text-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-400">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold">{row.name}</div>
                      <Link href={`/customers/accounts/${row.id}`} className="text-xs text-blue-400 hover:text-blue-300 flex items-center gap-1 mt-0.5">
                        View Constitutional Profile <ArrowUpRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-5 text-sm text-slate-300">
                   {row.tier}
                </td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.ae}</td>
                <td className="py-4 px-5">
                   <span className="text-sm font-mono text-emerald-400/80">
                      {row.arr}
                   </span>
                </td>
                <td className="py-4 px-5">
                  <span className={`px-2 py-1 rounded text-xs font-bold border flex items-center gap-1 w-max ${
                    row.status === 'Active' ? 'bg-emerald-900/20 text-emerald-400 border-emerald-900/50' : 
                    row.status === 'Onboarding' ? 'bg-blue-900/20 text-blue-400 border-blue-900/50' :
                    'bg-rose-900/20 text-rose-400 border-rose-900/50'
                  }`}>
                    {row.status}
                  </span>
                </td>
                <td className="py-4 px-5">
                  <EvidenceBadge evidenceId={row.trace} timestamp="Account Verified" />
                </td>
              </tr>
            ))}
          </PremiumTable>
        </div>

      </div>
    </div>
  );
}
