import React from "react";
import Link from "next/link";
import { ArrowLeft, Search, FileCode2, CheckCircle2, ShieldAlert, BookOpen, Download, Server, Cloud, Database } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function TechnologyStandards() {
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
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Technology Standards</h1>
            <p className="text-slate-400">Enterprise governance for approved technologies, frameworks, and architectural patterns.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="relative">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input type="text" placeholder="Search Standards..." className="bg-slate-900 border border-slate-700 rounded-md pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-indigo-500 w-80 transition-colors" />
             </div>
             <button className="flex items-center gap-2 px-4 py-2 bg-indigo-700 hover:bg-indigo-600 rounded-md text-sm font-medium transition-colors text-white">
               <FileCode2 className="w-4 h-4" /> Propose Standard
             </button>
          </div>
        </header>

        {/* Global KPIs */}
        <div className="grid grid-cols-4 gap-4 shrink-0">
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 shadow-[0_0_15px_rgba(99,102,241,0.05)] border-indigo-900/30 bg-indigo-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Approved Technologies
              <CheckCircle2 className="w-4 h-4 text-indigo-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">86</div>
            <div className="text-xs text-indigo-400">Maintained in Tech Radar</div>
          </div>
          
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-emerald-900/30 bg-emerald-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Reference Architectures
              <BookOpen className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">24</div>
            <div className="text-xs text-emerald-400">Validated deployment patterns</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-amber-900/30 bg-amber-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Containment / Phasing Out
              <ShieldAlert className="w-4 h-4 text-amber-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">14</div>
            <div className="text-xs text-amber-400">Restricted for new projects</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-rose-900/30 bg-rose-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Deprecated
              <ShieldAlert className="w-4 h-4 text-rose-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">32</div>
            <div className="text-xs text-rose-400">Requires immediate migration</div>
          </div>
        </div>

        {/* Standards Table */}
        <div className="flex-1 min-h-0 pb-12">
          <PremiumTable 
            title="Enterprise Technology Radar" 
            headers={["Technology / Stack", "Category", "Governance Status", "Version Constraint", "Primary Owner", "Policy Trace"]}
          >
            {[
              { name: "Next.js (React)", cat: "Frontend Web", status: "Adopt (Standard)", ver: ">= 14.0", owner: "Web Architecture", trace: "STD-EV-3001" },
              { name: "Golang", cat: "Backend Microservices", status: "Adopt (Standard)", ver: ">= 1.21", owner: "Core Services", trace: "STD-EV-3002" },
              { name: "Apache Kafka", cat: "Event Streaming", status: "Adopt (Standard)", ver: "Confluent Cloud", owner: "Data Engineering", trace: "STD-EV-3003" },
              { name: "AngularJS (1.x)", cat: "Frontend Web", status: "Deprecated (Migrate)", ver: "All", owner: "Web Architecture", trace: "STD-EV-3004" },
              { name: "Oracle DB", cat: "Relational Database", status: "Contain (No New Apps)", ver: "19c", owner: "DBA Group", trace: "STD-EV-3005" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group cursor-pointer">
                <td className="py-4 px-5">
                   <div className="flex flex-col gap-1">
                     <span className="font-mono text-indigo-400 text-sm flex items-center gap-2">
                       <FileCode2 className="w-4 h-4 text-slate-500" />
                       {row.name}
                     </span>
                   </div>
                </td>
                <td className="py-4 px-5 text-sm text-slate-300">
                   {row.cat}
                </td>
                <td className="py-4 px-5">
                  <span className={`text-xs font-bold px-2 py-1 rounded border w-max block flex items-center gap-1 ${
                    row.status.includes('Adopt') ? 'bg-emerald-900/20 text-emerald-400 border-emerald-900/50' : 
                    row.status.includes('Contain') ? 'bg-amber-900/20 text-amber-400 border-amber-900/50' :
                    'bg-rose-900/20 text-rose-400 border-rose-900/50'
                  }`}>
                    {row.status.includes('Adopt') && <CheckCircle2 className="w-3 h-3" />}
                    {(row.status.includes('Contain') || row.status.includes('Deprecated')) && <ShieldAlert className="w-3 h-3" />}
                    {row.status}
                  </span>
                </td>
                <td className="py-4 px-5 text-sm font-mono text-slate-400">
                   {row.ver}
                </td>
                <td className="py-4 px-5 text-sm text-slate-300">
                   {row.owner}
                </td>
                <td className="py-4 px-5">
                  <EvidenceBadge evidenceId={row.trace} timestamp="Approved" />
                </td>
              </tr>
            ))}
          </PremiumTable>
        </div>

      </div>
    </div>
  );
}
