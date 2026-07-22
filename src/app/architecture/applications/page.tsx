import React from "react";
import Link from "next/link";
import { ArrowLeft, Search, Box, Download, AlertTriangle, ShieldCheck, Database, LayoutDashboard, Cloud, Trash2, HeartPulse } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function ApplicationPortfolio() {
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
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Enterprise Application Portfolio</h1>
            <p className="text-slate-400">Governed inventory of all enterprise applications, tracking lifecycle status, ownership, and tech stack.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="relative">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input type="text" placeholder="Search Applications..." className="bg-slate-900 border border-slate-700 rounded-md pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-emerald-500 w-80 transition-colors" />
             </div>
             <button className="flex items-center gap-2 px-4 py-2 bg-emerald-700 hover:bg-emerald-600 rounded-md text-sm font-medium transition-colors text-white">
               <Box className="w-4 h-4" /> Register Application
             </button>
          </div>
        </header>

        {/* Global KPIs */}
        <div className="grid grid-cols-4 gap-4 shrink-0">
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 shadow-[0_0_15px_rgba(16,185,129,0.05)] border-emerald-900/30 bg-emerald-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Active Applications
              <HeartPulse className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">1,245</div>
            <div className="text-xs text-emerald-400">Maintained in production</div>
          </div>
          
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-blue-900/30 bg-blue-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Cloud Native
              <Cloud className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">68%</div>
            <div className="text-xs text-blue-400">Migrated to target architecture</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-amber-900/30 bg-amber-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Mission Critical (Tier 1)
              <ShieldCheck className="w-4 h-4 text-amber-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">184</div>
            <div className="text-xs text-amber-400">Requires 99.99% availability</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-rose-900/30 bg-rose-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Legacy / Retiring
              <Trash2 className="w-4 h-4 text-rose-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">112</div>
            <div className="text-xs text-rose-400">Scheduled for decommissioning</div>
          </div>
        </div>

        {/* Applications Table */}
        <div className="flex-1 min-h-0 pb-12">
          <PremiumTable 
            title="Application Inventory" 
            headers={["App ID / Name", "Criticality Tier", "Primary Tech Stack", "Lifecycle Status", "Business Owner", "Governance Trace"]}
          >
            {[
              { id: "APP-0094", name: "Revora Identity Broker", tier: "Tier 1", tech: "Go / Kubernetes", status: "Active (Standard)", owner: "Identity Team", trace: "APP-EV-2001" },
              { id: "APP-0142", name: "Legacy Mainframe Billing", tier: "Tier 1", tech: "COBOL / DB2", status: "Retiring", owner: "Finance Systems", trace: "APP-EV-2002" },
              { id: "APP-0551", name: "Global HR Portal", tier: "Tier 2", tech: "React / Node.js", status: "Active (Standard)", owner: "HR Operations", trace: "APP-EV-2003" },
              { id: "APP-0822", name: "Supply Chain Analytics v2", tier: "Tier 3", tech: "Python / Spark", status: "Planned (Dev)", owner: "Supply Chain", trace: "APP-EV-2004" },
              { id: "APP-1099", name: "On-Prem File Share", tier: "Tier 4", tech: "Windows Server", status: "Legacy (Risk)", owner: "IT Support", trace: "APP-EV-2005" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group cursor-pointer">
                <td className="py-4 px-5">
                   <div className="flex flex-col gap-1">
                     <span className="font-mono text-emerald-400 text-sm flex items-center gap-2">
                       <Box className="w-4 h-4 text-slate-500" />
                       {row.id}
                     </span>
                     <span className="text-xs text-slate-400 pl-6">{row.name}</span>
                   </div>
                </td>
                <td className="py-4 px-5">
                   <span className={`text-xs font-bold px-2 py-1 rounded border w-max block flex items-center gap-1 ${
                    row.tier === 'Tier 1' ? 'bg-amber-900/20 text-amber-400 border-amber-900/50' : 
                    'bg-slate-800 text-slate-400 border-slate-700'
                  }`}>
                     {row.tier === 'Tier 1' && <ShieldCheck className="w-3 h-3" />}
                     {row.tier}
                   </span>
                </td>
                <td className="py-4 px-5 text-sm font-mono text-slate-300">
                  <div className="flex items-center gap-2">
                    <Database className="w-4 h-4 text-slate-500" />
                    {row.tech}
                  </div>
                </td>
                <td className="py-4 px-5">
                  <span className={`text-xs font-bold px-2 py-1 rounded border w-max block flex items-center gap-1 ${
                    row.status.includes('Active') ? 'bg-emerald-900/20 text-emerald-400 border-emerald-900/50' : 
                    row.status.includes('Retiring') || row.status.includes('Risk') ? 'bg-rose-900/20 text-rose-400 border-rose-900/50' :
                    'bg-blue-900/20 text-blue-400 border-blue-900/50'
                  }`}>
                    {row.status.includes('Risk') && <AlertTriangle className="w-3 h-3" />}
                    {row.status}
                  </span>
                </td>
                <td className="py-4 px-5 text-sm text-slate-300">
                   {row.owner}
                </td>
                <td className="py-4 px-5">
                  <EvidenceBadge evidenceId={row.trace} timestamp="Registered" />
                </td>
              </tr>
            ))}
          </PremiumTable>
        </div>

      </div>
    </div>
  );
}
