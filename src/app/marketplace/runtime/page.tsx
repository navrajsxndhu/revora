import React from "react";
import Link from "next/link";
import { ArrowLeft, PlayCircle, Search, Download, Cpu, Activity, Zap, HardDrive, ShieldAlert, CheckCircle2 } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function ExtensionRuntimeMonitor() {
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
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Extension Runtime Monitor</h1>
            <p className="text-slate-400">Observability dashboard for CPU, Memory, API usage, and policy evaluations across extensions.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="relative">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input type="text" placeholder="Search Runtime Traces..." className="bg-slate-900 border border-slate-700 rounded-md pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-emerald-500 w-80 transition-colors" />
             </div>
             <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-md text-sm font-medium transition-colors text-slate-200">
               <Download className="w-4 h-4" /> Export Telemetry
             </button>
          </div>
        </header>

        {/* Global KPIs */}
        <div className="grid grid-cols-4 gap-4 shrink-0">
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 shadow-[0_0_15px_rgba(16,185,129,0.05)] border-emerald-900/30 bg-emerald-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Overall Health Score
              <Activity className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">99.8%</div>
            <div className="text-xs text-emerald-400">Extension runtime stability</div>
          </div>
          
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-blue-900/30 bg-blue-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Global CPU Allocation
              <Cpu className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">14.2%</div>
            <div className="text-xs text-blue-400">Across 139 active extensions</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-indigo-900/30 bg-indigo-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Memory Consumption
              <HardDrive className="w-4 h-4 text-indigo-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">4.2 GB</div>
            <div className="text-xs text-indigo-400">Sandboxed isolation pool</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-purple-900/30 bg-purple-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              API Calls (24h)
              <Zap className="w-4 h-4 text-purple-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">14.2M</div>
            <div className="text-xs text-purple-400">Governed internal invocations</div>
          </div>
        </div>

        {/* Runtime Table */}
        <div className="flex-1 min-h-0 pb-12">
          <PremiumTable 
            title="Real-Time Execution Telemetry" 
            headers={["Extension ID", "CPU / Memory Usage", "API Latency (p95)", "Policy Evaluations", "Runtime State", "Trace Link"]}
          >
            {[
              { id: "ext.salesforce.core", usage: "CPU: 4.1% / Mem: 142MB", lat: "42 ms", pol: "100% Pass", state: "Nominal", trace: "RUN-TEL-901" },
              { id: "ext.workday.hrsync", usage: "CPU: 1.2% / Mem: 84MB", lat: "18 ms", pol: "100% Pass", state: "Nominal", trace: "RUN-TEL-902" },
              { id: "ext.finance.forecaster", usage: "CPU: 84.1% / Mem: 2.1GB", lat: "1240 ms", pol: "100% Pass", state: "Degraded (CPU Spike)", trace: "RUN-TEL-903" },
              { id: "ext.slack.notifications", usage: "CPU: 0.1% / Mem: 12MB", lat: "8 ms", pol: "100% Pass", state: "Nominal", trace: "RUN-TEL-904" },
              { id: "ext.legacy.sap.bridge", usage: "CPU: 0.0% / Mem: 0MB", lat: "N/A", pol: "Blocked (Egress)", state: "Terminated (Policy)", trace: "RUN-TEL-905" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group cursor-pointer">
                <td className="py-4 px-5 font-mono text-sm text-blue-400">
                  <div className="flex items-center gap-2">
                     <PlayCircle className="w-4 h-4 text-slate-500" />
                     {row.id}
                  </div>
                </td>
                <td className="py-4 px-5 text-sm font-mono text-slate-300">
                   <span className={row.usage.includes('84.1%') ? 'text-amber-400' : 'text-slate-300'}>{row.usage}</span>
                </td>
                <td className="py-4 px-5 text-sm font-mono text-slate-400">
                   <span className={row.lat.includes('1240') ? 'text-rose-400' : 'text-emerald-400'}>{row.lat}</span>
                </td>
                <td className="py-4 px-5 text-sm font-mono">
                   <span className={row.pol.includes('Blocked') ? 'text-rose-400' : 'text-emerald-400'}>{row.pol}</span>
                </td>
                <td className="py-4 px-5">
                  <span className={`text-xs font-bold px-2 py-1 rounded border w-max block flex items-center gap-1 ${
                    row.state === 'Nominal' ? 'bg-emerald-900/20 text-emerald-400 border-emerald-900/50' : 
                    row.state.includes('Terminated') ? 'bg-rose-900/20 text-rose-400 border-rose-900/50' :
                    'bg-amber-900/20 text-amber-400 border-amber-900/50'
                  }`}>
                    {row.state === 'Nominal' && <CheckCircle2 className="w-3 h-3" />}
                    {row.state.includes('Terminated') && <ShieldAlert className="w-3 h-3" />}
                    {row.state}
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
