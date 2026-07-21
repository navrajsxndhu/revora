import React from "react";
import Link from "next/link";
import { ArrowLeft, CloudCog, Search, FileSignature, CheckCircle2, RotateCcw, AlertCircle, Download, MonitorUp, Zap } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function EdgeFleetDeployments() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        {/* Header */}
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <div className="mb-4">
              <Link href="/edge" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Edge Command
              </Link>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Edge Deployment & Fleet Management</h1>
            <p className="text-slate-400">Governed management and rollout of software, firmware, and AI models to edge infrastructure.</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="relative">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input type="text" placeholder="Search Rollouts..." className="bg-slate-900 border border-slate-700 rounded-md pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-indigo-500 w-72 transition-colors focus:ring-1 focus:ring-indigo-500/50" />
             </div>
             <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-md text-sm font-medium transition-colors text-white">
               <MonitorUp className="w-4 h-4" /> Schedule Rollout
             </button>
          </div>
        </header>

        {/* Global KPIs */}
        <div className="grid grid-cols-4 gap-4 shrink-0">
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 shadow-[0_0_15px_rgba(99,102,241,0.05)] border-indigo-900/30 bg-indigo-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Active Deployments
              <CloudCog className="w-4 h-4 text-indigo-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">12</div>
            <div className="text-xs text-indigo-400">Firmware & Workloads Rolling</div>
          </div>
          
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-amber-900/30 bg-amber-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Pending Authorization
              <FileSignature className="w-4 h-4 text-amber-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">3</div>
            <div className="text-xs text-amber-400">Human signature required</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Completed (24h)
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">42</div>
            <div className="text-xs text-slate-500">Successfully finalized</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-rose-900/30 bg-rose-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Rollbacks Initiated
              <RotateCcw className="w-4 h-4 text-rose-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">1</div>
            <div className="text-xs text-rose-400">Automated health failure</div>
          </div>
        </div>

        {/* Deployments Table */}
        <div className="flex-1 min-h-0 pb-12">
          <PremiumTable 
            title="Global Rollout Operations" 
            headers={["Deployment ID", "Target Fleet / Topology", "Payload", "Progress & Health", "Approval State", "Governance Trace"]}
          >
            {[
              { id: "RLT-EDG-902", fleet: "EU-West Gateways (1,200 nodes)", payload: "OS Firmware v3.1.0", progress: "42% (Phased)", health: "Healthy", approval: "Authorized", trace: "DEP-EV-301" },
              { id: "RLT-EDG-903", fleet: "Detroit Assembly PLCs (84 nodes)", payload: "Control Logic Update 4.2", progress: "0% (Scheduled)", health: "N/A", approval: "Pending Human Sign", trace: "DEP-EV-302" },
              { id: "RLT-EDG-904", fleet: "Global Smart Cameras (4,000 nodes)", payload: "Computer Vision Model v2 (AI)", progress: "100%", health: "Healthy", approval: "Completed", trace: "DEP-EV-303" },
              { id: "RLT-EDG-905", fleet: "Point-of-Sale (US-East)", payload: "Security Patch KB9201", progress: "14%", health: "Degraded (High Latency)", approval: "Rolling Back", trace: "DEP-EV-304" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group cursor-pointer">
                <td className="py-4 px-5 font-mono text-xs text-indigo-400">
                   {row.id}
                </td>
                <td className="py-4 px-5 text-sm font-medium text-slate-200">
                   {row.fleet}
                </td>
                <td className="py-4 px-5 text-sm text-slate-400">
                   <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-slate-500" />
                      {row.payload}
                   </div>
                </td>
                <td className="py-4 px-5">
                   <div className="flex flex-col gap-1">
                     <div className="flex items-center justify-between text-xs">
                        <span className="font-mono text-slate-300">{row.progress}</span>
                        <span className={`font-bold ${
                          row.health === 'Healthy' ? 'text-emerald-500' :
                          row.health.includes('Degraded') ? 'text-rose-500' : 'text-slate-500'
                        }`}>{row.health}</span>
                     </div>
                     <div className="w-full bg-slate-800 rounded-full h-1.5">
                        <div className={`h-1.5 rounded-full ${
                          row.health.includes('Degraded') ? 'bg-rose-500' : 'bg-indigo-500'
                        }`} style={{ width: row.progress.split('%')[0] + '%' }}></div>
                     </div>
                   </div>
                </td>
                <td className="py-4 px-5">
                  <span className={`text-xs font-bold px-2 py-1 rounded border w-max block flex items-center gap-1 ${
                    row.approval === 'Authorized' || row.approval === 'Completed' ? 'bg-emerald-900/20 text-emerald-400 border-emerald-900/50' : 
                    row.approval.includes('Pending') ? 'bg-amber-900/20 text-amber-400 border-amber-900/50' :
                    'bg-rose-900/20 text-rose-400 border-rose-900/50'
                  }`}>
                    {row.approval.includes('Pending') && <FileSignature className="w-3 h-3" />}
                    {row.approval.includes('Rolling Back') && <RotateCcw className="w-3 h-3" />}
                    {row.approval}
                  </span>
                </td>
                <td className="py-4 px-5">
                  <EvidenceBadge evidenceId={row.trace} timestamp="Logged" />
                </td>
              </tr>
            ))}
          </PremiumTable>
        </div>

      </div>
    </div>
  );
}
