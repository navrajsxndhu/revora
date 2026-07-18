"use client";

import React from "react";
import { Activity, ServerCog, ShieldCheck, Cpu } from "lucide-react";

export function OrchestrationOverview() {
  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="bg-slate-900 border border-slate-800 p-4 rounded flex items-center justify-between">
        <div>
          <div className="text-[10px] text-slate-500 font-mono mb-1">ACTIVE EXECUTIONS</div>
          <div className="text-xl font-bold text-indigo-400 font-mono">142</div>
        </div>
        <Cpu className="text-indigo-500 w-6 h-6 animate-pulse" />
      </div>
      <div className="bg-slate-900 border border-slate-800 p-4 rounded flex items-center justify-between">
        <div>
          <div className="text-[10px] text-slate-500 font-mono mb-1">RUNNING PIPELINES</div>
          <div className="text-xl font-bold text-slate-200 font-mono">24</div>
        </div>
        <ServerCog className="text-slate-500 w-6 h-6" />
      </div>
      <div className="bg-slate-900 border border-slate-800 p-4 rounded flex items-center justify-between">
        <div>
          <div className="text-[10px] text-slate-500 font-mono mb-1">QUEUE HEALTH</div>
          <div className="text-xl font-bold text-emerald-400 font-mono">OPTIMAL</div>
        </div>
        <Activity className="text-emerald-500 w-6 h-6" />
      </div>
      <div className="bg-slate-900 border border-slate-800 p-4 rounded flex items-center justify-between">
        <div>
          <div className="text-[10px] text-slate-500 font-mono mb-1">COMPLIANCE INDEX</div>
          <div className="text-xl font-bold text-emerald-400 font-mono">100%</div>
        </div>
        <ShieldCheck className="text-emerald-500 w-6 h-6" />
      </div>
    </div>
  );
}
