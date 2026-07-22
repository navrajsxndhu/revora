import React from "react";
import Link from "next/link";
import { ArrowLeft, Search, Map, CheckCircle2, AlertTriangle, Layers, Target, ShieldCheck, Download, Users } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function BusinessCapabilityMap() {
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
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Business Capability Map</h1>
            <p className="text-slate-400">Constitutional registry for enterprise business capabilities, maturity tracking, and strategic alignment.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="relative">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input type="text" placeholder="Search Capabilities..." className="bg-slate-900 border border-slate-700 rounded-md pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-blue-500 w-80 transition-colors" />
             </div>
             <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-md text-sm font-medium transition-colors text-slate-200">
               <Download className="w-4 h-4" /> Export Capability Map
             </button>
          </div>
        </header>

        {/* Global KPIs */}
        <div className="grid grid-cols-4 gap-4 shrink-0">
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 shadow-[0_0_15px_rgba(59,130,246,0.05)] border-blue-900/30 bg-blue-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Total Capabilities
              <Layers className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">142</div>
            <div className="text-xs text-blue-400">Across L1 to L3 hierarchies</div>
          </div>
          
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-emerald-900/30 bg-emerald-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Optimized State
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">45%</div>
            <div className="text-xs text-emerald-400">At target maturity level</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-amber-900/30 bg-amber-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Strategic Value
              <Target className="w-4 h-4 text-amber-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">28</div>
            <div className="text-xs text-amber-400">Differentiating capabilities</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-rose-900/30 bg-rose-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              At Risk
              <AlertTriangle className="w-4 h-4 text-rose-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">12</div>
            <div className="text-xs text-rose-400">Requires immediate modernization</div>
          </div>
        </div>

        {/* Capabilities Table */}
        <div className="flex-1 min-h-0 pb-12">
          <PremiumTable 
            title="Enterprise Capability Registry" 
            headers={["Capability Name", "Hierarchy", "Business Owner", "Maturity", "Strategic Focus", "Governance Record"]}
          >
            {[
              { name: "Omnichannel Fulfillment", level: "L2 (Supply Chain)", owner: "VP Supply Chain", maturity: "Optimized", focus: "Differentiating", trace: "CAP-EV-1001" },
              { name: "Customer Identity Management", level: "L3 (Security)", owner: "CISO", maturity: "Managed", focus: "Core", trace: "CAP-EV-1002" },
              { name: "Legacy Mainframe Processing", level: "L2 (Operations)", owner: "SVP Operations", maturity: "Initial (At Risk)", focus: "Commodity", trace: "CAP-EV-1003" },
              { name: "AI-Driven Pricing Optimization", level: "L3 (Commerce)", owner: "VP Pricing", maturity: "Defined", focus: "Differentiating", trace: "CAP-EV-1004" },
              { name: "Global Treasury Management", level: "L1 (Finance)", owner: "Treasurer", maturity: "Optimized", focus: "Core", trace: "CAP-EV-1005" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group cursor-pointer">
                <td className="py-4 px-5">
                   <div className="flex flex-col gap-1">
                     <span className="font-mono text-blue-400 text-sm flex items-center gap-2">
                       <Map className="w-4 h-4 text-slate-500" />
                       {row.name}
                     </span>
                   </div>
                </td>
                <td className="py-4 px-5 text-sm font-mono text-slate-400">
                   {row.level}
                </td>
                <td className="py-4 px-5 text-sm text-slate-300">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-slate-500" />
                    {row.owner}
                  </div>
                </td>
                <td className="py-4 px-5">
                  <span className={`text-xs font-bold px-2 py-1 rounded border w-max block flex items-center gap-1 ${
                    row.maturity === 'Optimized' ? 'bg-emerald-900/20 text-emerald-400 border-emerald-900/50' : 
                    row.maturity.includes('Risk') ? 'bg-rose-900/20 text-rose-400 border-rose-900/50' :
                    'bg-blue-900/20 text-blue-400 border-blue-900/50'
                  }`}>
                    {row.maturity === 'Optimized' && <ShieldCheck className="w-3 h-3" />}
                    {row.maturity.includes('Risk') && <AlertTriangle className="w-3 h-3" />}
                    {row.maturity}
                  </span>
                </td>
                <td className="py-4 px-5 text-sm font-mono">
                   <span className={row.focus === 'Differentiating' ? 'text-amber-400' : 'text-slate-400'}>
                     {row.focus}
                   </span>
                </td>
                <td className="py-4 px-5">
                  <EvidenceBadge evidenceId={row.trace} timestamp="Validated" />
                </td>
              </tr>
            ))}
          </PremiumTable>
        </div>

      </div>
    </div>
  );
}
