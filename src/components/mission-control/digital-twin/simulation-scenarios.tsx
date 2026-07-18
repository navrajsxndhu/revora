"use client";

import React from "react";
import { GitBranch, Box, ShieldAlert } from "lucide-react";

export function SimulationScenarios() {
  const scenarios = [
    { name: "GLOBAL_FAILOVER_TEST", type: "RESILIENCY", duration: "45m", icon: <GitBranch className="w-4 h-4 text-indigo-400" /> },
    { name: "ZERO_TRUST_MANDATE", type: "SECURITY", duration: "12m", icon: <ShieldAlert className="w-4 h-4 text-rose-400" /> },
    { name: "PLATFORM_MIGRATION_V3", type: "INFRASTRUCTURE", duration: "1h 20m", icon: <Box className="w-4 h-4 text-emerald-400" /> },
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 bg-slate-900/80">
        <h2 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-sans">Simulation Scenarios</h2>
      </div>
      <div className="p-4 flex-1 overflow-auto space-y-3">
        {scenarios.map((s, i) => (
          <div key={i} className="flex justify-between items-center border border-slate-800 bg-slate-950 p-2 rounded hover:bg-slate-800/30 cursor-pointer transition-colors">
            <div className="flex items-center space-x-3">
              {s.icon}
              <div>
                <div className="text-xs text-slate-200 font-mono font-bold">{s.name}</div>
                <div className="text-[10px] text-slate-500 font-mono">{s.type}</div>
              </div>
            </div>
            <div className="text-[10px] text-slate-400 font-mono text-right">
              EST: {s.duration}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
