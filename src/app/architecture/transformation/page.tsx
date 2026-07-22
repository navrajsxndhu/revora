import React from "react";
import Link from "next/link";
import { ArrowLeft, Search, Rocket, Activity, Target, ShieldCheck, Download, AlertTriangle, TrendingUp, CheckCircle2 } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function StrategicTransformation() {
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
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Strategic Transformation Portfolio</h1>
            <p className="text-slate-400">Executive oversight for digital transformation programs. Major decisions require human authorization.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="relative">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input type="text" placeholder="Search Programs..." className="bg-slate-900 border border-slate-700 rounded-md pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-purple-500 w-80 transition-colors" />
             </div>
             <button className="flex items-center gap-2 px-4 py-2 bg-purple-700 hover:bg-purple-600 rounded-md text-sm font-medium transition-colors text-white">
               <Rocket className="w-4 h-4" /> Propose Program
             </button>
          </div>
        </header>

        {/* Global KPIs */}
        <div className="grid grid-cols-4 gap-4 shrink-0">
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 shadow-[0_0_15px_rgba(168,85,247,0.05)] border-purple-900/30 bg-purple-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Active Programs
              <Activity className="w-4 h-4 text-purple-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">12</div>
            <div className="text-xs text-purple-400">Cross-functional initiatives</div>
          </div>
          
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-emerald-900/30 bg-emerald-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              On Track
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">8</div>
            <div className="text-xs text-emerald-400">Meeting delivery milestones</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-blue-900/30 bg-blue-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Total Investment
              <TrendingUp className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">$85M</div>
            <div className="text-xs text-blue-400">Allocated capital this FY</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-rose-900/30 bg-rose-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              At Risk (Red)
              <AlertTriangle className="w-4 h-4 text-rose-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">2</div>
            <div className="text-xs text-rose-400">Requires executive intervention</div>
          </div>
        </div>

        {/* Transformation Table */}
        <div className="flex-1 min-h-0 pb-12">
          <PremiumTable 
            title="Enterprise Transformation Programs" 
            headers={["Program Name", "Executive Sponsor", "Budget / Spend", "Status", "Completion", "Governance Seal"]}
          >
            {[
              { name: "Project Genesis (Cloud Migration)", sponsor: "CTO", spend: "$12M / $8.4M", status: "On Track", comp: "72%", trace: "TRN-EV-4001" },
              { name: "Omnichannel Commerce v3", sponsor: "CMO", spend: "$8M / $2.1M", status: "At Risk (Scope Creep)", comp: "18%", trace: "TRN-EV-4002" },
              { name: "Global ERP Consolidation", sponsor: "CFO", spend: "$35M / $34M", status: "Nearing Completion", comp: "95%", trace: "TRN-EV-4003" },
              { name: "Zero Trust Architecture Rollout", sponsor: "CISO", spend: "$15M / $5M", status: "On Track", comp: "45%", trace: "TRN-EV-4004" },
              { name: "AI Operations (AIOps) Integration", sponsor: "CIO", spend: "$4M / $1M", status: "Delayed", comp: "12%", trace: "TRN-EV-4005" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group cursor-pointer">
                <td className="py-4 px-5">
                   <div className="flex flex-col gap-1">
                     <span className="font-medium text-purple-400 text-sm flex items-center gap-2">
                       <Rocket className="w-4 h-4 text-slate-500" />
                       {row.name}
                     </span>
                   </div>
                </td>
                <td className="py-4 px-5 text-sm font-medium text-slate-300">
                   {row.sponsor}
                </td>
                <td className="py-4 px-5 text-sm font-mono text-slate-400">
                   {row.spend}
                </td>
                <td className="py-4 px-5">
                  <span className={`text-xs font-bold px-2 py-1 rounded border w-max block flex items-center gap-1 ${
                    row.status.includes('Track') || row.status.includes('Completion') ? 'bg-emerald-900/20 text-emerald-400 border-emerald-900/50' : 
                    row.status.includes('Risk') ? 'bg-rose-900/20 text-rose-400 border-rose-900/50' :
                    'bg-amber-900/20 text-amber-400 border-amber-900/50'
                  }`}>
                    {row.status.includes('Risk') && <AlertTriangle className="w-3 h-3" />}
                    {row.status}
                  </span>
                </td>
                <td className="py-4 px-5">
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500" style={{ width: row.comp }}></div>
                    </div>
                    <span className="text-xs font-mono text-slate-400">{row.comp}</span>
                  </div>
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
