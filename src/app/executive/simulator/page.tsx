import React from "react";
import Link from "next/link";
import { ArrowLeft, Play, Activity, Target, Network, Layers, ShieldAlert, Cpu, Workflow } from "lucide-react";
import { PremiumTable } from "@/components/ui/premium-table";

export default function ImpactSimulator() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col h-[calc(100vh-4rem)]">
        
        {/* Header */}
        <header className="flex items-end justify-between border-b border-slate-900 pb-6 shrink-0">
          <div>
            <div className="mb-4">
              <Link href="/executive/situation-room" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Situation Room
              </Link>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Cross-Platform Impact Simulator</h1>
            <p className="text-slate-400">Deterministic visualization engine projecting the cascading effects of executive decisions before approval.</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-500 rounded-md text-sm font-medium transition-colors text-white">
            <Play className="w-4 h-4" /> Run New Simulation
          </button>
        </header>

        {/* Active Simulation Context */}
        <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 shrink-0 relative overflow-hidden">
           <div className="absolute top-0 left-0 w-1 h-full bg-purple-500"></div>
           <div className="flex justify-between items-start">
              <div>
                 <h2 className="text-xl font-bold text-white mb-1">Simulation: Increase AWS Budget by 20%</h2>
                 <p className="text-sm text-slate-400">Scenario analysis for proposed executive decision <span className="font-mono text-blue-400">DEC-2026-042</span></p>
              </div>
              <div className="flex items-center gap-2 bg-slate-950 px-3 py-1.5 rounded-full border border-slate-800">
                 <Activity className="w-4 h-4 text-emerald-500" />
                 <span className="text-xs font-bold text-slate-300">Simulation Complete (0.8s)</span>
              </div>
           </div>
        </div>

        {/* Global Impact Summary */}
        <div className="grid grid-cols-4 gap-4 shrink-0">
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-blue-900/30 bg-blue-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Primary Financial Impact
              <Target className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-2xl font-bold text-white mb-2">+$4.2M / yr</div>
            <div className="text-xs text-blue-400">Direct OPEX Increase</div>
          </div>
          
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-rose-900/30 bg-rose-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Secondary Risk (Compliance)
              <ShieldAlert className="w-4 h-4 text-rose-500" />
            </div>
            <div className="text-2xl font-bold text-white mb-2">High Risk</div>
            <div className="text-xs text-rose-400">Data Sovereignty (EU) Impact</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-emerald-900/30 bg-emerald-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Tertiary Benefit (Ops)
              <Cpu className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-2xl font-bold text-white mb-2">-15% Latency</div>
            <div className="text-xs text-emerald-400">Estimated Performance Gain</div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 border-purple-900/30 bg-purple-950/10">
            <div className="text-slate-400 text-sm font-medium mb-1 flex items-center justify-between">
              Cascading Systems
              <Network className="w-4 h-4 text-purple-500" />
            </div>
            <div className="text-2xl font-bold text-white mb-2">7 Modules</div>
            <div className="text-xs text-purple-400">Directly affected by change</div>
          </div>
        </div>

        {/* Deterministic Impact Graph */}
        <div className="flex-1 min-h-0 pb-12">
          <PremiumTable 
            title="Deterministic Cascading Effects (Read-Only Analysis)" 
            headers={["Affected Platform", "Module Vector", "Simulated Consequence", "Confidence"]}
          >
            {[
              { platform: "Enterprise FinOps Platform", vector: "Cloud Cost Intelligence", cons: "Monthly run-rate will exceed Q3 forecast by 14%.", conf: "100% (Deterministic)" },
              { platform: "GRC & Risk Platform", vector: "Compliance Engine", cons: "New workloads may violate GDPR Data Residency without explicit controls.", conf: "100% (Deterministic)" },
              { platform: "Supply Chain & Procurement", vector: "Vendor Operations", cons: "AWS Enterprise Agreement tier discount unlocked.", conf: "100% (Deterministic)" },
              { platform: "Enterprise ESG Platform", vector: "Carbon Emissions", cons: "Scope 3 emissions will increase by estimated 120 tCO2e.", conf: "92% (Calculated)" },
              { platform: "Human Capital Platform", vector: "Workforce Planning", cons: "No direct impact detected.", conf: "100% (Deterministic)" },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-800/30 transition-colors">
                <td className="py-4 px-5 font-medium text-slate-200 text-sm">
                  <div className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-slate-500" />
                    {row.platform}
                  </div>
                </td>
                <td className="py-4 px-5 text-sm font-mono text-slate-400">{row.vector}</td>
                <td className="py-4 px-5 text-sm text-slate-300">
                   <div className="flex items-start gap-2">
                      <Workflow className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                      {row.cons}
                   </div>
                </td>
                <td className="py-4 px-5">
                   <span className="text-xs font-mono text-purple-300 bg-purple-900/20 border border-purple-900/50 px-2 py-1 rounded">
                      {row.conf}
                   </span>
                </td>
              </tr>
            ))}
          </PremiumTable>
        </div>

      </div>
    </div>
  );
}
