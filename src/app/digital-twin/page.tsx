import React from "react";
import Link from "next/link";
import { ArrowRight, Hexagon, Network, Activity, RefreshCw, Cpu, Database, History, TrendingUp, Layers } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";

export default function DigitalTwinCommandCenter() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        {/* Header */}
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Enterprise Digital Twin Command Center</h1>
            <p className="text-slate-400">Deterministic virtual representation of the organization for safe scenario modeling and strategic simulation.</p>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/digital-twin/scenarios" className="flex items-center gap-2 px-4 py-2 bg-indigo-900/40 text-indigo-400 border border-indigo-900/50 hover:bg-indigo-900/60 rounded-md text-sm font-medium transition-colors">
              <Activity className="w-4 h-4" /> Run Strategic Simulation
            </Link>
          </div>
        </header>

        {/* Global KPIs */}
        <div className="grid grid-cols-4 gap-4 shrink-0">
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 shadow-[0_0_15px_rgba(99,102,241,0.05)] border-indigo-900/30 bg-indigo-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Enterprise Health Index
              <Hexagon className="w-4 h-4 text-indigo-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">94.2%</div>
            <div className="text-xs text-indigo-400">Based on Live Telemetry</div>
          </div>
          
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Active Simulations
              <Activity className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">3</div>
            <div className="text-xs text-emerald-500">Executing Deterministically</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-blue-900/30 bg-blue-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Twin Accuracy Score
              <Database className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">99.9%</div>
            <div className="text-xs text-blue-400">Deviation Within Threshold</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-purple-900/30 bg-purple-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Synchronization Status
              <RefreshCw className="w-4 h-4 text-purple-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">Synced</div>
            <div className="text-xs text-purple-400">Last update: 2s ago</div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8 flex-1 min-h-0">
          
          {/* Quick Links / Menu */}
          <div className="col-span-1 bg-slate-900/40 border border-slate-800 rounded-2xl p-6 flex flex-col gap-2 overflow-y-auto">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Digital Twin Capabilities</h3>
            
            <Link href="/digital-twin/models" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors group">
              <div className="w-8 h-8 rounded bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                <Database className="w-4 h-4 text-blue-400" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-sm text-slate-200 group-hover:text-blue-400 transition-colors">Enterprise Models Registry</div>
                <div className="text-xs text-slate-500">Governed digital assets</div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-blue-400 transition-colors" />
            </Link>

            <Link href="/digital-twin/scenarios" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors group">
              <div className="w-8 h-8 rounded bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0">
                <Activity className="w-4 h-4 text-indigo-400" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-sm text-slate-200 group-hover:text-indigo-400 transition-colors">Strategic Simulator</div>
                <div className="text-xs text-slate-500">Scenario analysis & impact</div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-indigo-400 transition-colors" />
            </Link>

            <Link href="/digital-twin/dependencies" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors group">
              <div className="w-8 h-8 rounded bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
                <Network className="w-4 h-4 text-purple-400" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-sm text-slate-200 group-hover:text-purple-400 transition-colors">Dependency Engine</div>
                <div className="text-xs text-slate-500">Cross-domain cascades</div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-purple-400 transition-colors" />
            </Link>

            <Link href="/digital-twin/capacity" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors group">
              <div className="w-8 h-8 rounded bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                <TrendingUp className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-sm text-slate-200 group-hover:text-emerald-400 transition-colors">Capacity Planning</div>
                <div className="text-xs text-slate-500">Deterministic forecasting</div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-emerald-400 transition-colors" />
            </Link>

            <Link href="/digital-twin/history" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors group">
              <div className="w-8 h-8 rounded bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                <History className="w-4 h-4 text-amber-400" />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-sm text-slate-200 group-hover:text-amber-400 transition-colors">Historical Replay</div>
                <div className="text-xs text-slate-500">Time-travel via Evidence Ledger</div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-amber-400 transition-colors" />
            </Link>
          </div>

          {/* Active Enterprise Operations Feed */}
          <div className="col-span-2 overflow-hidden flex flex-col">
            <PremiumTable 
              title="Pending Strategic Simulations" 
              headers={["Simulation Scenario", "Target Domain", "Requester", "Status"]}
            >
              {[
                { init: "Global Infrastructure Migration to Azure", area: "FinOps & Cloud", owner: "Chief Technology Officer", status: "Executing" },
                { init: "Acquisition: 'DataStream' Vendor Topology", area: "M&A Integration", owner: "Chief Executive Officer", status: "Pending Verification" },
                { init: "15% Workforce Reduction (EU Division)", area: "Human Capital", owner: "Chief Operating Officer", status: "Draft (Restricted)" },
                { init: "New Supply Chain Routing (Tariff Avoidance)", area: "Procurement", owner: "Chief Supply Chain Officer", status: "Completed" },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-slate-800/30 transition-colors">
                  <td className="py-4 px-5 font-medium text-slate-200 text-sm">
                    <div className="flex items-center gap-2">
                       <Layers className="w-4 h-4 text-slate-500" />
                       {row.init}
                    </div>
                  </td>
                  <td className="py-4 px-5 text-sm text-slate-300">{row.area}</td>
                  <td className="py-4 px-5 text-sm text-slate-400">{row.owner}</td>
                  <td className="py-4 px-5">
                    <span className={`px-2 py-1 rounded text-xs font-bold border w-max block ${
                      row.status.includes('Restricted') || row.status.includes('Pending') ? 'bg-rose-900/20 text-rose-400 border-rose-900/50' : 
                      row.status === 'Executing' ? 'bg-indigo-900/20 text-indigo-400 border-indigo-900/50' :
                      'bg-emerald-900/20 text-emerald-400 border-emerald-900/50'
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
