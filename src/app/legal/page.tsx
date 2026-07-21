import React from "react";
import Link from "next/link";
import { Scale, FileSignature, Landmark, Briefcase, Users, FileCheck2, Search, ArrowRight } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";

export default function LegalOperationsCenter() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        {/* Header */}
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Legal Operations Command Center</h1>
            <p className="text-slate-400">Enterprise governance over contracts, regulations, and corporate legal obligations.</p>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/executive/legal" className="flex items-center gap-2 px-4 py-2 bg-rose-900/20 text-rose-400 border border-rose-900/50 hover:bg-rose-900/30 rounded-md text-sm font-medium transition-colors">
              <Scale className="w-4 h-4" /> Executive Legal Board
            </Link>
          </div>
        </header>

        {/* Global KPIs */}
        <div className="grid grid-cols-4 gap-4 shrink-0">
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Active Contracts
              <FileSignature className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">1,204</div>
            <div className="text-xs text-emerald-400">14 Renewals in 30 days</div>
          </div>
          
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 shadow-[0_0_15px_rgba(245,158,11,0.05)] border-amber-900/30 bg-amber-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Regulatory Obligations
              <Landmark className="w-4 h-4 text-amber-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">42</div>
            <div className="text-xs text-amber-400">2 Deadlines approaching</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Pending Reviews
              <Briefcase className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">18</div>
            <div className="text-xs text-blue-400">Awaiting Counsel Approval</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Legal Hold Status
              <FileCheck2 className="w-4 h-4 text-slate-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">Clear</div>
            <div className="text-xs text-slate-500">No active discovery holds</div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8 flex-1 min-h-0">
          
          {/* Quick Links / Menu */}
          <div className="col-span-1 bg-slate-900/40 border border-slate-800 rounded-2xl p-6 flex flex-col gap-2 overflow-y-auto">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Legal Frameworks</h3>
            
            <Link href="/legal/contracts" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors group">
              <div className="w-8 h-8 rounded bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                <FileSignature className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-sm text-slate-200 group-hover:text-emerald-400 transition-colors">Enterprise Contract Registry</div>
                <div className="text-xs text-slate-500">MSAs, NDAs, Licensing</div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-emerald-400 transition-colors" />
            </Link>

            <Link href="/legal/regulations" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors group">
              <div className="w-8 h-8 rounded bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                <Landmark className="w-4 h-4 text-amber-400" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-sm text-slate-200 group-hover:text-amber-400 transition-colors">Regulatory Compliance</div>
                <div className="text-xs text-slate-500">GDPR, SOX, HIPAA obligations</div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-amber-400 transition-colors" />
            </Link>

            <Link href="/legal/approvals" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors group">
              <div className="w-8 h-8 rounded bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                <FileCheck2 className="w-4 h-4 text-blue-400" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-sm text-slate-200 group-hover:text-blue-400 transition-colors">Legal Approvals</div>
                <div className="text-xs text-slate-500">Counsel & Executive signatures</div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-blue-400 transition-colors" />
            </Link>
            
            <div className="mt-8 relative">
               <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
               <input type="text" placeholder="Search Contracts & Filings..." className="w-full bg-slate-900 border border-slate-700 rounded-md pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors" />
            </div>
          </div>

          {/* Critical Items Table */}
          <div className="col-span-2 overflow-hidden flex flex-col">
            <PremiumTable 
              title="Action Required" 
              headers={["Item Type", "Entity / Subject", "Deadline", "Status"]}
            >
              {[
                { type: "Contract Renewal", subj: "DataDog Master Services Agreement", dead: "2026-08-15", status: "Awaiting Review" },
                { type: "Regulatory Filing", subj: "EU GDPR Data Protection Impact Assessment", dead: "2026-07-30", status: "Overdue" },
                { type: "Legal Review", subj: "Q3 Partnership Contract - Acme Corp", dead: "2026-08-01", status: "In Progress" },
                { type: "Contract Expiration", subj: "Legacy Office Lease (London)", dead: "2026-07-28", status: "Pending Action" },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-slate-800/30 transition-colors">
                  <td className="py-4 px-5 font-medium text-slate-200 text-sm">{row.type}</td>
                  <td className="py-4 px-5 text-sm text-slate-300">{row.subj}</td>
                  <td className="py-4 px-5 text-sm font-mono text-slate-400">{row.dead}</td>
                  <td className="py-4 px-5">
                    <span className={`px-2 py-1 rounded text-xs font-bold border w-max block ${
                      row.status === 'Overdue' ? 'bg-rose-900/20 text-rose-400 border-rose-900/50' : 
                      row.status === 'Pending Action' ? 'bg-amber-900/20 text-amber-400 border-amber-900/50' :
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
