"use client";

import React from "react";
import { Activity, GitMerge, Settings, ShieldCheck } from "lucide-react";

export function DigitalTwinOverview() {
  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="bg-slate-900 border border-slate-800 p-4 rounded flex items-center justify-between">
        <div>
          <div className="text-[10px] text-slate-500 font-mono mb-1">TWIN SYNCHRONIZATION</div>
          <div className="text-xl font-bold text-emerald-400 font-mono">100%</div>
        </div>
        <Activity className="text-emerald-500 w-6 h-6" />
      </div>
      <div className="bg-slate-900 border border-slate-800 p-4 rounded flex items-center justify-between">
        <div>
          <div className="text-[10px] text-slate-500 font-mono mb-1">ACTIVE SIMULATIONS</div>
          <div className="text-xl font-bold text-indigo-400 font-mono">14</div>
        </div>
        <Settings className="text-indigo-500 w-6 h-6 animate-spin-slow" />
      </div>
      <div className="bg-slate-900 border border-slate-800 p-4 rounded flex items-center justify-between">
        <div>
          <div className="text-[10px] text-slate-500 font-mono mb-1">ENTERPRISE COVERAGE</div>
          <div className="text-xl font-bold text-slate-200 font-mono">99.4%</div>
        </div>
        <GitMerge className="text-slate-500 w-6 h-6" />
      </div>
      <div className="bg-slate-900 border border-slate-800 p-4 rounded flex items-center justify-between">
        <div>
          <div className="text-[10px] text-slate-500 font-mono mb-1">VALIDATION SUCCESS</div>
          <div className="text-xl font-bold text-emerald-400 font-mono">100%</div>
        </div>
        <ShieldCheck className="text-emerald-500 w-6 h-6" />
      </div>
    </div>
  );
}
