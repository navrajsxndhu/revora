"use client";

import React from "react";

export function PlanningHealthDashboard() {
  const healthMetrics = [
    { name: "CAPACITY_COVERAGE", score: 100 },
    { name: "UTILIZATION_HEALTH", score: 95 },
    { name: "INFRASTRUCTURE_READINESS", score: 98 },
    { name: "CONSTRAINT_HEALTH", score: 100 },
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 bg-slate-900/80">
        <h2 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-sans">Planning Health Dashboard</h2>
      </div>
      <div className="p-4 flex-1 overflow-auto space-y-4">
        {healthMetrics.map((m, i) => (
          <div key={i}>
            <div className="flex justify-between text-[10px] font-mono mb-1">
              <span className="text-slate-400">{m.name}</span>
              <span className={m.score > 98 ? 'text-emerald-400' : 'text-amber-400'}>{m.score}%</span>
            </div>
            <div className="w-full bg-slate-950 rounded h-1">
              <div 
                className={`h-1 rounded ${m.score > 98 ? 'bg-emerald-500' : 'bg-amber-500'}`} 
                style={{ width: `${m.score}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
