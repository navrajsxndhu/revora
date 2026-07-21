import React from "react";
import Link from "next/link";
import { ArrowLeft, Blocks, Search, PlayCircle, PlusCircle, CheckCircle2, Layout, Database, Activity, GitCommit, SearchCode } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function LowCodeBuilder() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        {/* Header */}
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <div className="mb-4">
              <Link href="/marketplace" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Marketplace Command
              </Link>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Enterprise Low-Code Builder</h1>
            <p className="text-slate-400">A strictly declarative, policy-constrained visual application builder for enterprise users.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="relative">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input type="text" placeholder="Search Applications..." className="bg-slate-900 border border-slate-700 rounded-md pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-indigo-500 w-80 transition-colors" />
             </div>
             <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-md text-sm font-medium transition-colors text-white">
               <PlusCircle className="w-4 h-4" /> Create New App
             </button>
          </div>
        </header>

        {/* Global KPIs */}
        <div className="grid grid-cols-4 gap-4 shrink-0">
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 shadow-[0_0_15px_rgba(99,102,241,0.05)] border-indigo-900/30 bg-indigo-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Active Applications
              <Blocks className="w-4 h-4 text-indigo-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">384</div>
            <div className="text-xs text-indigo-400">Built via Low-Code UI</div>
          </div>
          
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-emerald-900/30 bg-emerald-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Policy Compliance
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">100%</div>
            <div className="text-xs text-emerald-400">Strictly declarative constraints</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-blue-900/30 bg-blue-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Component Library
              <Layout className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">1,204</div>
            <div className="text-xs text-blue-400">Approved Revora UI elements</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-amber-900/30 bg-amber-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Data Bindings
              <Database className="w-4 h-4 text-amber-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">4,192</div>
            <div className="text-xs text-amber-400">Active data connections</div>
          </div>
        </div>

        {/* Low Code Table */}
        <div className="flex-1 min-h-0 pb-12">
          <PremiumTable 
            title="Custom Enterprise Applications" 
            headers={["Application Name", "App Creator / Dept", "Required Privileges", "Runtime Status", "Constitutional State", "App Trace"]}
          >
            {[
              { app: "Internal Leave Request Portal", creator: "Sarah J. (HR)", priv: "Read Employee, Write Request", status: "Published", state: "Verified", trace: "APP-EV-601" },
              { app: "Vendor Risk Intake Form", creator: "Procurement Desk", priv: "Read Vendor, Write Risk", status: "Drafting", state: "Pending Audit", trace: "APP-EV-602" },
              { app: "IT Helpdesk Mini-Dashboard", creator: "IT Operations", priv: "Read Tickets", status: "Published", state: "Verified", trace: "APP-EV-603" },
              { app: "Exec Financial Summary", creator: "Office of the CFO", priv: "Read General Ledger (Critical)", status: "Pending Human Sign", state: "Blocked (Approval Reqd)", trace: "APP-EV-604" },
              { app: "Facilities Maintenance Logger", creator: "Building Ops", priv: "Write Log", status: "Published", state: "Verified", trace: "APP-EV-605" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group cursor-pointer">
                <td className="py-4 px-5">
                   <div className="flex items-center gap-2 font-medium text-slate-200 text-sm">
                      <Layout className="w-4 h-4 text-indigo-500" />
                      {row.app}
                   </div>
                </td>
                <td className="py-4 px-5 text-sm text-slate-400">
                   {row.creator}
                </td>
                <td className="py-4 px-5 text-sm font-mono text-slate-300">
                   <div className="flex items-center gap-2">
                      <SearchCode className="w-3 h-3 text-slate-500" />
                      {row.priv}
                   </div>
                </td>
                <td className="py-4 px-5">
                  <span className={`text-xs font-bold px-2 py-1 rounded border w-max block flex items-center gap-1 ${
                    row.status === 'Published' ? 'bg-emerald-900/20 text-emerald-400 border-emerald-900/50' : 
                    row.status === 'Drafting' ? 'bg-slate-800 text-slate-400 border-slate-700' :
                    'bg-amber-900/20 text-amber-400 border-amber-900/50'
                  }`}>
                    {row.status === 'Published' && <PlayCircle className="w-3 h-3" />}
                    {row.status}
                  </span>
                </td>
                <td className="py-4 px-5">
                  <span className={`text-xs font-bold px-2 py-1 rounded border w-max block flex items-center gap-1 ${
                    row.state === 'Verified' ? 'bg-blue-900/20 text-blue-400 border-blue-900/50' : 
                    row.state.includes('Blocked') ? 'bg-rose-900/20 text-rose-400 border-rose-900/50' :
                    'bg-amber-900/20 text-amber-400 border-amber-900/50'
                  }`}>
                    {row.state === 'Verified' && <CheckCircle2 className="w-3 h-3" />}
                    {row.state}
                  </span>
                </td>
                <td className="py-4 px-5">
                  <EvidenceBadge evidenceId={row.trace} timestamp="Recorded" />
                </td>
              </tr>
            ))}
          </PremiumTable>
        </div>

      </div>
    </div>
  );
}
