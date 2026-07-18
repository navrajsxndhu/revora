"use client";

import React from "react";
import { ShieldCheck, Activity, BatteryCharging, Zap } from "lucide-react";

export function ResilienceOverview() {
  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="bg-slate-900 border border-slate-800 p-4 rounded flex items-center justify-between">
        <div>
          <div className="text-[10px] text-slate-500 font-mono mb-1">RESILIENCE INDEX</div>
          <div className="text-xl font-bold text-emerald-400 font-mono">99.9</div>
        </div>
        <ShieldCheck className="text-emerald-500 w-6 h-6" />
      </div>
      <div className="bg-slate-900 border border-slate-800 p-4 rounded flex items-center justify-between">
        <div>
          <div className="text-[10px] text-slate-500 font-mono mb-1">RECOVERY READINESS</div>
          <div className="text-xl font-bold text-slate-200 font-mono">98.4</div>
        </div>
        <Activity className="text-slate-500 w-6 h-6" />
      </div>
      <div className="bg-slate-900 border border-slate-800 p-4 rounded flex items-center justify-between">
        <div>
          <div className="text-[10px] text-slate-500 font-mono mb-1">FAILOVER CAPACITY</div>
          <div className="text-xl font-bold text-emerald-400 font-mono">OPTIMAL</div>
        </div>
        <BatteryCharging className="text-emerald-500 w-6 h-6" />
      </div>
      <div className="bg-slate-900 border border-slate-800 p-4 rounded flex items-center justify-between">
        <div>
          <div className="text-[10px] text-slate-500 font-mono mb-1">ACTIVE EXERCISES</div>
          <div className="text-xl font-bold text-indigo-400 font-mono">2</div>
        </div>
        <Zap className="text-indigo-500 w-6 h-6 animate-pulse" />
      </div>
    </div>
  );
}
