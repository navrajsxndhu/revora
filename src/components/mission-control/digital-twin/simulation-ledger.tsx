"use client";

import React from "react";
import { Database, ShieldCheck, Zap } from "lucide-react";

export function SimulationLedger() {
  const ledger = [
    { action: "SIMULATION_VALIDATED", target: "SIM-8491", time: "10:22:01Z" },
    { action: "CHECKPOINT_CREATED", target: "CP-f8a9e2", time: "10:15:33Z" },
    { action: "IMPACT_CALCULATED", target: "SIM-8491", time: "10:15:10Z" },
    { action: "SIMULATION_STARTED", target: "SIM-8491", time: "10:14:05Z" },
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 bg-slate-900/80 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Database className="w-4 h-4 text-indigo-400" />
          <h2 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-sans">Digital Twin Ledger</h2>
        </div>
        <span className="text-[9px] font-mono text-emerald-400 border border-emerald-900/50 bg-emerald-950/30 px-1 rounded">IMMUTABLE</span>
      </div>
      <div className="p-4 flex-1 overflow-auto space-y-2">
        {ledger.map((l, i) => (
          <div key={i} className="flex justify-between items-center text-[10px] font-mono border-b border-slate-800/50 pb-2">
            <div className="flex items-center space-x-2">
              <Zap className="w-3 h-3 text-slate-500" />
              <span className="text-slate-300">{l.action}</span>
            </div>
            <div className="flex items-center space-x-3 text-slate-500">
              <span className="text-indigo-400">{l.target}</span>
              <span>{l.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
