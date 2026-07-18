"use client";

import React from "react";
import { Activity, ShieldAlert } from "lucide-react";

export function ExecutionHealthDashboard() {
  const metrics = [
    { label: "Execution Success", value: "99.8%", optimal: true },
    { label: "Queue Latency", value: "14ms", optimal: true },
    { label: "Validation Pass Rate", value: "99.1%", optimal: true },
    { label: "Blocked Executions", value: "12", optimal: false },
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 bg-slate-900/80 flex justify-between items-center">
        <h2 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-sans">Execution Health</h2>
      </div>
      <div className="p-4 flex-1 flex flex-col justify-center space-y-4">
        {metrics.map((m, i) => (
          <div key={i} className="flex justify-between items-center border-b border-slate-800/50 pb-2">
            <span className="text-xs font-mono text-slate-400">{m.label}</span>
            <div className="flex items-center space-x-2">
              <span className={`text-sm font-mono font-bold ${m.optimal ? 'text-emerald-400' : 'text-amber-400'}`}>{m.value}</span>
              {m.optimal ? <Activity className="w-3 h-3 text-emerald-500" /> : <ShieldAlert className="w-3 h-3 text-amber-500" />}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
