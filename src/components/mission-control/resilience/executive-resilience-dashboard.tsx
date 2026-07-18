"use client";

import React from "react";
import { ShieldCheck, Activity, Globe } from "lucide-react";

export function ExecutiveResilienceDashboard() {
  return (
    <div className="bg-gradient-to-br from-slate-900 to-emerald-950/20 border border-slate-800 rounded p-6">
      <div className="flex justify-between items-start mb-6 border-b border-slate-800 pb-4">
        <div>
          <h2 className="text-lg font-bold text-slate-100 flex items-center font-sans">
            <Globe className="w-5 h-5 mr-2 text-emerald-400" />
            Enterprise Resilience & Recovery Center
          </h2>
          <p className="text-[10px] font-mono text-slate-400 mt-1 uppercase tracking-wider">Business Continuity / Disaster Recovery Kernel</p>
        </div>
        <div className="px-3 py-1 bg-emerald-900/30 border border-emerald-800/50 rounded text-[10px] font-mono text-emerald-400 flex items-center">
          <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse"></span>
          BCP ACTIVE
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <div className="bg-slate-950/80 border border-slate-800/80 rounded p-4 relative overflow-hidden">
          <div className="text-[10px] font-mono text-slate-500 mb-2">RESILIENCE INDEX</div>
          <div className="text-2xl font-bold text-emerald-400 mb-1 font-mono">99.9</div>
          <div className="text-[10px] text-emerald-500 flex items-center font-mono">
            <ShieldCheck className="w-3 h-3 mr-1" /> Enterprise Secure
          </div>
        </div>

        <div className="bg-slate-950/80 border border-slate-800/80 rounded p-4">
          <div className="text-[10px] font-mono text-slate-500 mb-2">RECOVERY READINESS</div>
          <div className="text-2xl font-bold text-slate-200 mb-1 font-mono">98.4</div>
          <div className="text-[10px] text-indigo-400 flex items-center font-mono">
            <Activity className="w-3 h-3 mr-1" /> High Readiness
          </div>
        </div>

        <div className="bg-slate-950/80 border border-slate-800/80 rounded p-4">
          <div className="text-[10px] font-mono text-slate-500 mb-2">BCP COVERAGE</div>
          <div className="text-2xl font-bold text-emerald-400 mb-1 font-mono">100%</div>
          <div className="text-[10px] text-emerald-500 flex items-center font-mono">
            Tier 1 Services
          </div>
        </div>

        <div className="bg-slate-950/80 border border-slate-800/80 rounded p-4">
          <div className="text-[10px] font-mono text-slate-500 mb-2">FAILOVER CAPACITY</div>
          <div className="text-2xl font-bold text-slate-200 mb-1 font-mono">100%</div>
          <div className="text-[10px] text-slate-500 flex items-center font-mono">
            Geographic Redundancy
          </div>
        </div>

        <div className="bg-slate-950/80 border border-slate-800/80 rounded p-4">
          <div className="text-[10px] font-mono text-slate-500 mb-2">EXERCISE COMPLETION</div>
          <div className="text-2xl font-bold text-emerald-400 mb-1 font-mono">95%</div>
          <div className="text-[10px] text-emerald-500 flex items-center font-mono">
            Quarterly Target Met
          </div>
        </div>

        <div className="bg-slate-950/80 border border-slate-800/80 rounded p-4 relative overflow-hidden">
          <div className="text-[10px] font-mono text-slate-500 mb-2">RECOVERY SUCCESS</div>
          <div className="text-2xl font-bold text-emerald-400 mb-1 font-mono">100%</div>
          <div className="text-[10px] text-emerald-500 flex items-center font-mono">
            Historical Verifications
          </div>
        </div>
      </div>
    </div>
  );
}
