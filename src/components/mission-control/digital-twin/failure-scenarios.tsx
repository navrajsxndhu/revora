"use client";

import React from "react";
import { AlertOctagon, Link2 } from "lucide-react";

export function FailureScenarios() {
  const failures = [
    { name: "AZ-EAST-1 OUTAGE", component: "INFRASTRUCTURE", impact: "CRITICAL" },
    { name: "AUTH DB CORRUPTION", component: "IDENTITY", impact: "HIGH" },
    { name: "PAYMENT API LATENCY", component: "SERVICE", impact: "MEDIUM" },
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 bg-slate-900/80">
        <h2 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-sans">Failure Scenarios</h2>
      </div>
      <div className="p-4 flex-1 overflow-auto space-y-3">
        {failures.map((f, i) => (
          <div key={i} className="border border-slate-800 bg-slate-950 p-2 rounded">
            <div className="flex justify-between items-center mb-1">
              <div className="flex items-center space-x-2">
                <AlertOctagon className="w-4 h-4 text-rose-500" />
                <span className="text-xs font-mono font-bold text-slate-200">{f.name}</span>
              </div>
              <span className={`text-[9px] font-mono px-1 rounded ${f.impact === 'CRITICAL' ? 'bg-rose-950/50 text-rose-400 border border-rose-900/50' : 'bg-amber-950/50 text-amber-400 border border-amber-900/50'}`}>{f.impact}</span>
            </div>
            <div className="text-[10px] text-slate-500 font-mono flex items-center justify-between">
              <span>TARGET: {f.component}</span>
              <button className="text-indigo-400 hover:text-indigo-300 flex items-center transition-colors">
                <Link2 className="w-3 h-3 mr-1" /> SIMULATE
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
