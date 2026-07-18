"use client";

import React from "react";
import { ActivitySquare, Database, AlertCircle, CheckCircle } from "lucide-react";

export function ObservabilityOverview() {
  return (
    <div className="grid grid-cols-5 gap-4">
      <div className="bg-slate-900 border border-slate-800 p-4 rounded flex items-center justify-between">
        <div>
          <div className="text-[10px] text-slate-500 font-mono mb-1">OBSERVABILITY INDEX</div>
          <div className="text-xl font-bold text-emerald-400 font-mono">99.8</div>
        </div>
        <ActivitySquare className="text-emerald-500 w-6 h-6" />
      </div>
      <div className="bg-slate-900 border border-slate-800 p-4 rounded flex items-center justify-between">
        <div>
          <div className="text-[10px] text-slate-500 font-mono mb-1">ACTIVE METRICS</div>
          <div className="text-xl font-bold text-slate-200 font-mono">8,452</div>
        </div>
        <Database className="text-slate-500 w-6 h-6" />
      </div>
      <div className="bg-slate-900 border border-slate-800 p-4 rounded flex items-center justify-between">
        <div>
          <div className="text-[10px] text-slate-500 font-mono mb-1">ACTIVE ALERTS</div>
          <div className="text-xl font-bold text-slate-200 font-mono">14</div>
        </div>
        <AlertCircle className="text-amber-500 w-6 h-6" />
      </div>
      <div className="bg-slate-900 border border-slate-800 p-4 rounded flex items-center justify-between">
        <div>
          <div className="text-[10px] text-slate-500 font-mono mb-1">TELEMETRY HEALTH</div>
          <div className="text-xl font-bold text-emerald-400 font-mono">OPTIMAL</div>
        </div>
        <CheckCircle className="text-emerald-500 w-6 h-6" />
      </div>
      <div className="bg-slate-900 border border-slate-800 p-4 rounded flex items-center justify-between">
        <div>
          <div className="text-[10px] text-slate-500 font-mono mb-1">VALIDATION COVERAGE</div>
          <div className="text-xl font-bold text-emerald-400 font-mono">100%</div>
        </div>
        <CheckCircle className="text-emerald-500 w-6 h-6" />
      </div>
    </div>
  );
}
