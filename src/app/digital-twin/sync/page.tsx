import React from "react";
import Link from "next/link";
import { ArrowLeft, RefreshCw, Activity, Database, AlertCircle, CheckCircle2, ShieldCheck, Zap } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";
import { EvidenceBadge } from "@/components/ui/evidence-badge";

export default function TwinSynchronizationCenter() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        {/* Header */}
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <div className="mb-4">
              <Link href="/digital-twin" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Digital Twin
              </Link>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Twin Synchronization Center</h1>
            <p className="text-slate-400">Monitoring data freshness, topological updates, and latency between the live enterprise and the virtual twin.</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-md text-sm font-medium transition-colors text-white shadow-[0_0_15px_rgba(79,70,229,0.3)]">
            <RefreshCw className="w-4 h-4" /> Force Global Sync
          </button>
        </header>

        {/* Global KPIs */}
        <div className="grid grid-cols-4 gap-4 shrink-0">
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 shadow-[0_0_15px_rgba(16,185,129,0.05)] border-emerald-900/30 bg-emerald-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Global Synchronization
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">99.8%</div>
            <div className="text-xs text-emerald-400">Total Systems Synced</div>
          </div>
          
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 shadow-[0_0_15px_rgba(99,102,241,0.05)] border-indigo-900/30 bg-indigo-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Average Latency
              <Activity className="w-4 h-4 text-indigo-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">1.2s</div>
            <div className="text-xs text-indigo-400">Real-time Data Stream</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-rose-900/30 bg-rose-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Failed Sync Events
              <AlertCircle className="w-4 h-4 text-rose-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">2</div>
            <div className="text-xs text-rose-400">Requires manual verification</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-blue-900/30 bg-blue-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Constitutional Integrity
              <ShieldCheck className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">Verified</div>
            <div className="text-xs text-blue-400">No unauthorized drift</div>
          </div>
        </div>

        {/* Sync Table */}
        <div className="flex-1 min-h-0 pb-12">
          <PremiumTable 
            title="Module Synchronization Telemetry" 
            headers={["Enterprise Module / Subsystem", "Data Strategy", "Last Synchronized", "Health Status", "Constitutional Trace"]}
          >
            {[
              { mod: "Cloud Infrastructure (CMDB)", strat: "Event-Driven (Real-time)", sync: "Just now", status: "Healthy", trace: "SYNC-EV-010" },
              { mod: "Financial Ledgers (FinOps)", strat: "Transaction Stream", sync: "2s ago", status: "Healthy", trace: "SYNC-EV-011" },
              { mod: "Supply Chain Topology", strat: "Batch Updates (Hourly)", sync: "45m ago", status: "Healthy", trace: "SYNC-EV-012" },
              { mod: "Human Capital Directory", strat: "Daily Sync", sync: "14h ago", status: "Healthy", trace: "SYNC-EV-013" },
              { mod: "Legacy Analytics Subsystem", strat: "API Polling (5m)", sync: "Failed (Timeout)", status: "Degraded", trace: "SYNC-EV-014" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group">
                <td className="py-4 px-5 font-medium text-slate-200 text-sm">
                  <div className="flex items-center gap-2">
                    <Database className="w-4 h-4 text-slate-500" />
                    {row.mod}
                  </div>
                </td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.strat}</td>
                <td className="py-4 px-5 text-sm font-mono text-slate-300">
                   {row.sync.includes('Failed') ? <span className="text-rose-400">{row.sync}</span> : row.sync}
                </td>
                <td className="py-4 px-5">
                  <span className={`px-2 py-1 rounded text-xs font-bold border w-max block ${
                    row.status === 'Healthy' ? 'bg-emerald-900/20 text-emerald-400 border-emerald-900/50' : 
                    'bg-rose-900/20 text-rose-400 border-rose-900/50'
                  }`}>
                    <div className="flex items-center gap-1">
                       {row.status === 'Healthy' ? <Zap className="w-3 h-3" /> : <AlertCircle className="w-3 h-3" />}
                       {row.status}
                    </div>
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
