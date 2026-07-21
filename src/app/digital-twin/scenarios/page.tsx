import React from "react";
import Link from "next/link";
import { ArrowLeft, Play, Activity, Target, ShieldAlert, Cpu, Workflow, Layers, PlusCircle, Briefcase } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";

export default function StrategicScenarioSimulator() {
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
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Strategic Scenario Simulator</h1>
            <p className="text-slate-400">Safely simulate enterprise-scale executive decisions and forecast their deterministic impacts across all domains.</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-md text-sm font-medium transition-colors text-white">
            <PlusCircle className="w-4 h-4" /> Define New Scenario
          </button>
        </header>

        {/* Global KPIs */}
        <div className="grid grid-cols-3 gap-6 shrink-0">
          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group hover:border-indigo-500/50 transition-colors">
            <div className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-2 flex items-center justify-between">
              Simulated Scenarios
              <Activity className="w-4 h-4 text-indigo-500" />
            </div>
            <div className="text-4xl font-black text-white mb-2">24</div>
            <div className="text-sm font-medium text-indigo-400">YTD Executed Models</div>
          </div>
          
          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group hover:border-emerald-500/50 transition-colors">
            <div className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-2 flex items-center justify-between">
              High Confidence
              <Target className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-4xl font-black text-white mb-2">92%</div>
            <div className="text-sm font-medium text-emerald-400 flex items-center gap-1">
               Deterministic Projection Accuracy
            </div>
          </div>

          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 relative overflow-hidden group hover:border-amber-500/50 transition-colors">
            <div className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-2 flex items-center justify-between">
              Active Executive Decisions
              <Briefcase className="w-4 h-4 text-amber-500" />
            </div>
            <div className="text-4xl font-black text-white mb-2">4</div>
            <div className="text-sm font-medium text-amber-400">Currently requiring simulations</div>
          </div>
        </div>

        {/* Scenarios Table */}
        <div className="flex-1 min-h-0 pb-12">
          <PremiumTable 
            title="Strategic Simulation Library (Read-Only Execution)" 
            headers={["Scenario Configuration", "Primary Variables", "Projected Enterprise Impact", "Execution Engine", "Actions"]}
          >
            {[
              { id: "SCN-2026-081", title: "Open New APAC Regional Office (Tokyo)", vars: "+150 FTEs, +1 Facility", impact: "$8.4M Capex, +12% APAC Rev", engine: "Deterministic Financials", state: "Ready" },
              { id: "SCN-2026-082", title: "Global Azure Migration (Phase 1)", vars: "Migrate 40% Workloads", impact: "-15% AWS Spend, High Risk", engine: "Cloud Infrastructure Model", state: "Executing" },
              { id: "SCN-2026-083", title: "Acquire 'DataStream' Vendor", vars: "$112M Capital Outlay", impact: "+45% Data Platform Cap", engine: "M&A Integration Engine", state: "Completed" },
              { id: "SCN-2026-084", title: "Mandate Supply Chain ESG Audit", vars: "Tier 1 & 2 Suppliers", impact: "High Procurement Delay", engine: "ESG & Compliance Model", state: "Ready" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors group">
                <td className="py-4 px-5 font-medium text-slate-200 text-sm">
                  <div className="flex flex-col">
                    <span className="font-mono text-xs text-indigo-400 mb-0.5">{row.id}</span>
                    <span className="font-bold">{row.title}</span>
                  </div>
                </td>
                <td className="py-4 px-5 text-sm font-mono text-slate-400">{row.vars}</td>
                <td className="py-4 px-5 text-sm text-slate-300">
                   <div className="flex items-start gap-2">
                      <Workflow className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      {row.impact}
                   </div>
                </td>
                <td className="py-4 px-5 text-sm text-slate-400">{row.engine}</td>
                <td className="py-4 px-5">
                   {row.state === 'Ready' && (
                     <button className="flex items-center gap-1 px-3 py-1.5 bg-indigo-900/40 text-indigo-400 border border-indigo-900/50 hover:bg-indigo-900/60 rounded text-xs font-bold transition-colors">
                       <Play className="w-3 h-3" /> Run Simulation
                     </button>
                   )}
                   {row.state === 'Executing' && (
                     <span className="px-3 py-1.5 bg-slate-800 text-slate-400 border border-slate-700 rounded text-xs font-bold flex items-center gap-1 w-max">
                       <Activity className="w-3 h-3 animate-pulse" /> Executing...
                     </span>
                   )}
                   {row.state === 'Completed' && (
                     <button className="flex items-center gap-1 px-3 py-1.5 bg-emerald-900/20 text-emerald-400 border border-emerald-900/50 hover:bg-emerald-900/40 rounded text-xs font-bold transition-colors">
                       View Results &rarr;
                     </button>
                   )}
                </td>
              </tr>
            ))}
          </PremiumTable>
        </div>

      </div>
    </div>
  );
}
