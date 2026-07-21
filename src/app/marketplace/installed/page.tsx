import React from "react";
import Link from "next/link";
import { ArrowLeft, Search, DownloadCloud, PlayCircle, StopCircle, RefreshCw, AlertTriangle, ShieldAlert, Cpu } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function InstalledExtensionsCenter() {
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
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Installed Extensions Center</h1>
            <p className="text-slate-400">The constitutional management console for installed enterprise applications.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="relative">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input type="text" placeholder="Search Installed Apps..." className="bg-slate-900 border border-slate-700 rounded-md pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-emerald-500 w-80 transition-colors" />
             </div>
             <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-md text-sm font-medium transition-colors text-slate-200">
               <RefreshCw className="w-4 h-4" /> Check for Updates
             </button>
          </div>
        </header>

        {/* Global KPIs */}
        <div className="grid grid-cols-4 gap-4 shrink-0">
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 shadow-[0_0_15px_rgba(16,185,129,0.05)] border-emerald-900/30 bg-emerald-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Running Instances
              <PlayCircle className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">139</div>
            <div className="text-xs text-emerald-400">Healthy execution state</div>
          </div>
          
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-amber-900/30 bg-amber-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Updates Available
              <DownloadCloud className="w-4 h-4 text-amber-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">12</div>
            <div className="text-xs text-amber-400">Pending review & install</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-rose-900/30 bg-rose-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Policy Violations
              <ShieldAlert className="w-4 h-4 text-rose-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">0</div>
            <div className="text-xs text-rose-400">Strict constitutional adherence</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-blue-900/30 bg-blue-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Avg CPU Overhead
              <Cpu className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">1.2%</div>
            <div className="text-xs text-blue-400">Low platform impact</div>
          </div>
        </div>

        {/* Installed Extensions Table */}
        <div className="flex-1 min-h-0 pb-12">
          <PremiumTable 
            title="Installed Application Registry" 
            headers={["Extension ID", "Runtime Version", "Resource Profile", "Execution State", "Update Status", "Runtime Trace"]}
          >
            {[
              { id: "ext.salesforce.core", ver: "v4.2.1", res: "CPU: 0.4% / Mem: 42MB", state: "Running", update: "Up to date", trace: "RUN-EXT-201" },
              { id: "ext.workday.hrsync", ver: "v2.1.0", res: "CPU: 0.1% / Mem: 18MB", state: "Running", update: "Up to date", trace: "RUN-EXT-202" },
              { id: "ext.legacy.sap.bridge", ver: "v1.0.4", res: "CPU: 0.0% / Mem: 0MB", state: "Disabled", update: "v1.1 Available", trace: "RUN-EXT-203" },
              { id: "ext.finance.forecaster", ver: "v3.0.0", res: "CPU: 12.4% / Mem: 1.2GB", state: "Running", update: "Pending Human Sign", trace: "RUN-EXT-204" },
              { id: "ext.slack.notifications", ver: "v5.2.0", res: "CPU: 0.2% / Mem: 12MB", state: "Running", update: "Up to date", trace: "RUN-EXT-205" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group cursor-pointer">
                <td className="py-4 px-5 font-mono text-sm text-blue-400">
                  <Link href={`/marketplace/extensions/${row.id}`} className="hover:underline">
                    {row.id}
                  </Link>
                </td>
                <td className="py-4 px-5 text-sm font-mono text-slate-400">
                   {row.ver}
                </td>
                <td className="py-4 px-5 text-sm font-mono text-slate-400">
                   {row.res}
                </td>
                <td className="py-4 px-5">
                   <div className="flex items-center gap-2 text-sm font-medium">
                      {row.state === 'Running' ? <PlayCircle className="w-4 h-4 text-emerald-500" /> : <StopCircle className="w-4 h-4 text-rose-500" />}
                      <span className={row.state === 'Running' ? 'text-emerald-400' : 'text-rose-400'}>{row.state}</span>
                   </div>
                </td>
                <td className="py-4 px-5">
                  <span className={`text-xs font-bold px-2 py-1 rounded border w-max block flex items-center gap-1 ${
                    row.update.includes('Up to date') ? 'bg-emerald-900/20 text-emerald-400 border-emerald-900/50' : 
                    row.update.includes('Pending') ? 'bg-amber-900/20 text-amber-400 border-amber-900/50' :
                    'bg-blue-900/20 text-blue-400 border-blue-900/50'
                  }`}>
                    {row.update.includes('Available') && <DownloadCloud className="w-3 h-3" />}
                    {row.update.includes('Pending') && <AlertTriangle className="w-3 h-3" />}
                    {row.update}
                  </span>
                </td>
                <td className="py-4 px-5">
                  <EvidenceBadge evidenceId={row.trace} timestamp="Live" />
                </td>
              </tr>
            ))}
          </PremiumTable>
        </div>

      </div>
    </div>
  );
}
