"use client";

import React from "react";
import { BrainCircuit, Activity, ShieldCheck, Target, Link2 } from "lucide-react";

export function ExecutiveIntelligenceDashboard() {
  return (
    <div className="bg-gradient-to-br from-slate-900 to-indigo-950/20 border border-slate-800 rounded-lg p-6">
      <div className="flex justify-between items-start mb-6 border-b border-slate-800 pb-4">
        <div>
          <h2 className="text-lg font-bold text-slate-100 flex items-center font-sans">
            <BrainCircuit className="w-5 h-5 mr-2 text-indigo-400" />
            Executive Intelligence Command
          </h2>
          <p className="text-xs font-mono text-slate-400 mt-1">SINGLE SOURCE OF OPERATIONAL TRUTH</p>
        </div>
        <div className="px-3 py-1 bg-indigo-900/30 border border-indigo-800/50 rounded text-[10px] font-mono text-indigo-300 flex items-center shadow-[0_0_10px_rgba(99,102,241,0.2)]">
          <span className="w-2 h-2 rounded-full bg-indigo-400 mr-2 animate-pulse"></span>
          REAL-TIME EVIDENCE
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <div className="bg-slate-950/80 border border-slate-800/80 rounded p-4 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-500/5 rounded-bl-full"></div>
          <div className="text-[10px] font-mono text-slate-500 mb-2">ENTERPRISE HEALTH</div>
          <div className="text-2xl font-bold text-emerald-400 mb-1">98.5%</div>
          <div className="text-[10px] text-emerald-500 flex items-center font-mono">
            <Activity className="w-3 h-3 mr-1" /> Stable
          </div>
        </div>

        <div className="bg-slate-950/80 border border-slate-800/80 rounded p-4">
          <div className="text-[10px] font-mono text-slate-500 mb-2">STRATEGIC GOALS</div>
          <div className="text-2xl font-bold text-slate-200 mb-1">3/3</div>
          <div className="text-[10px] text-emerald-500 flex items-center font-mono">
            On Track
          </div>
        </div>
        
        <div className="bg-slate-950/80 border border-slate-800/80 rounded p-4">
          <div className="text-[10px] font-mono text-slate-500 mb-2">ACTIVE RISKS</div>
          <div className="text-2xl font-bold text-amber-400 mb-1">3</div>
          <div className="text-[10px] text-amber-500 flex items-center font-mono">
            Requires Attention
          </div>
        </div>

        <div className="bg-slate-950/80 border border-slate-800/80 rounded p-4">
          <div className="text-[10px] font-mono text-slate-500 mb-2">CORRELATIONS</div>
          <div className="text-2xl font-bold text-indigo-400 mb-1">1.4k</div>
          <div className="text-[10px] text-indigo-500 flex items-center font-mono">
            Evidence Linked
          </div>
        </div>

        <div className="bg-slate-950/80 border border-slate-800/80 rounded p-4">
          <div className="text-[10px] font-mono text-slate-500 mb-2">DECISIONS LOGGED</div>
          <div className="text-2xl font-bold text-slate-200 mb-1">12</div>
          <div className="text-[10px] text-slate-500 flex items-center font-mono">
            Last 30 days
          </div>
        </div>

        <div className="bg-slate-950/80 border border-slate-800/80 rounded p-4 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-500/5 rounded-bl-full"></div>
          <div className="text-[10px] font-mono text-slate-500 mb-2">GOVERNANCE ALIGN</div>
          <div className="text-2xl font-bold text-emerald-400 mb-1">100%</div>
          <div className="text-[10px] text-emerald-500 flex items-center font-mono">
            <ShieldCheck className="w-3 h-3 mr-1" /> Compliant
          </div>
        </div>
      </div>
    </div>
  );
}
