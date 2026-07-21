import React from "react";
import Link from "next/link";
import { ArrowLeft, Network, Server, Cloud, Users, ShieldAlert, Zap, Factory, ArrowDown } from "lucide-react";

export default function EnterpriseDependencies() {
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
            <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Enterprise Dependency Engine</h1>
            <p className="text-slate-400">Visualizing cascading enterprise effects and cryptographically linked topology across constitutional domains.</p>
          </div>
          <div className="flex items-center gap-3">
             <div className="flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-700 rounded-md text-sm font-medium text-slate-400">
               <Network className="w-4 h-4 text-purple-500" /> Auto-Discovery Active
             </div>
          </div>
        </header>

        {/* Dependency Visualization Canvas */}
        <div className="flex-1 bg-slate-900/20 border border-slate-800 rounded-2xl p-8 relative overflow-hidden flex flex-col items-center justify-center min-h-[500px]">
           <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl -z-10"></div>
           
           <h3 className="text-xl font-bold text-slate-300 absolute top-8 left-8">Cascading Impact Analysis</h3>
           <p className="text-sm text-slate-500 absolute top-14 left-8">Simulated Trigger: <span className="font-mono text-blue-400">AWS Enterprise Discount Reduction</span></p>

           {/* Flow Diagram */}
           <div className="flex flex-col items-center gap-4 mt-8 w-full max-w-2xl">
              
              {/* Node 1 */}
              <div className="w-full bg-slate-900 border border-blue-900/50 rounded-xl p-4 flex items-center justify-between shadow-[0_0_15px_rgba(59,130,246,0.1)] relative z-10">
                 <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-900/40 flex items-center justify-center text-blue-400 border border-blue-500/30">
                       <Cloud className="w-5 h-5" />
                    </div>
                    <div>
                       <div className="font-bold text-white text-lg">FinOps Budget Engine</div>
                       <div className="text-sm text-slate-400">Cloud Spend Model</div>
                    </div>
                 </div>
                 <div className="text-right">
                    <div className="font-mono font-bold text-rose-400 text-lg">+18% Cost Increase</div>
                    <div className="text-xs text-slate-500">Trigger Origin</div>
                 </div>
              </div>

              <ArrowDown className="w-6 h-6 text-slate-700 -my-1 relative z-0" />

              {/* Node 2 */}
              <div className="w-full bg-slate-900 border border-emerald-900/50 rounded-xl p-4 flex items-center justify-between shadow-[0_0_15px_rgba(16,185,129,0.05)] relative z-10">
                 <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-emerald-900/40 flex items-center justify-center text-emerald-400 border border-emerald-500/30">
                       <Server className="w-5 h-5" />
                    </div>
                    <div>
                       <div className="font-bold text-white text-lg">Infrastructure Topology</div>
                       <div className="text-sm text-slate-400">Application Performance</div>
                    </div>
                 </div>
                 <div className="text-right">
                    <div className="font-mono font-bold text-amber-400 text-lg">Resource Throttling</div>
                    <div className="text-xs text-slate-500">Auto-Scaling Restricted</div>
                 </div>
              </div>

              <ArrowDown className="w-6 h-6 text-slate-700 -my-1 relative z-0" />

              {/* Node 3 */}
              <div className="w-full bg-slate-900 border border-purple-900/50 rounded-xl p-4 flex items-center justify-between shadow-[0_0_15px_rgba(168,85,247,0.05)] relative z-10">
                 <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-purple-900/40 flex items-center justify-center text-purple-400 border border-purple-500/30">
                       <Users className="w-5 h-5" />
                    </div>
                    <div>
                       <div className="font-bold text-white text-lg">Customer Experience</div>
                       <div className="text-sm text-slate-400">Enterprise Revenue Model</div>
                    </div>
                 </div>
                 <div className="text-right">
                    <div className="font-mono font-bold text-rose-400 text-lg">Latency Degradation</div>
                    <div className="text-xs text-slate-500">SLA Violation Risk</div>
                 </div>
              </div>

              <ArrowDown className="w-6 h-6 text-slate-700 -my-1 relative z-0" />

              {/* Node 4 (Apex Impact) */}
              <div className="w-full bg-rose-950/20 border border-rose-900/50 rounded-xl p-4 flex items-center justify-between shadow-[0_0_25px_rgba(244,63,94,0.1)] relative z-10">
                 <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-rose-900/40 flex items-center justify-center text-rose-400 border border-rose-500/30">
                       <ShieldAlert className="w-5 h-5" />
                    </div>
                    <div>
                       <div className="font-bold text-white text-lg">Executive Risk Score</div>
                       <div className="text-sm text-slate-400">Situation Room Alerting</div>
                    </div>
                 </div>
                 <div className="text-right">
                    <div className="font-mono font-bold text-rose-500 text-lg">Board Attention Required</div>
                    <div className="text-xs text-slate-500">Strategic Escalation</div>
                 </div>
              </div>

           </div>
           
           <div className="absolute bottom-8 right-8 text-sm text-slate-500 flex items-center gap-2">
              <Zap className="w-4 h-4 text-slate-600" /> Every dependency chain is cryptographically linked.
           </div>
        </div>

      </div>
    </div>
  );
}
