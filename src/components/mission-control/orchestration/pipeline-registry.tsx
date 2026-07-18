"use client";

import React from "react";
import { GitMerge, Settings } from "lucide-react";

export function PipelineRegistry() {
  const pipelines = [
    { name: "CORE_PLATFORM_V3", env: "PROD", health: "OPTIMAL", success: "99.9%" },
    { name: "PAYMENT_GATEWAY", env: "STAGING", health: "OPTIMAL", success: "98.5%" },
    { name: "IDENTITY_GRAPH", env: "PROD", health: "DEGRADED", success: "94.2%" },
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 bg-slate-900/80">
        <h2 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-sans">Pipeline Registry</h2>
      </div>
      <div className="p-4 flex-1 overflow-auto space-y-3">
        {pipelines.map((p, i) => (
          <div key={i} className="flex justify-between items-center border border-slate-800 bg-slate-950 p-2 rounded hover:bg-slate-800/30 transition-colors">
            <div className="flex items-center space-x-3">
              <GitMerge className="w-4 h-4 text-slate-400" />
              <div>
                <div className="text-xs text-slate-200 font-mono font-bold">{p.name}</div>
                <div className="text-[10px] text-slate-500 font-mono">ENV: {p.env}</div>
              </div>
            </div>
            <div className="text-right">
              <div className={`text-[10px] font-mono ${p.health === 'OPTIMAL' ? 'text-emerald-400' : 'text-amber-400'}`}>{p.health}</div>
              <div className="text-[9px] text-slate-500 font-mono">SR: {p.success}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
