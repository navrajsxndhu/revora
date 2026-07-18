"use client";

import React from "react";

export function RecoveryReadiness() {
  const readiness = [
    { domain: "INFRASTRUCTURE", score: 99.1 },
    { domain: "DATA_SERVICES", score: 95.5 },
    { domain: "IDENTITY", score: 100 },
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 bg-slate-900/80">
        <h2 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-sans">Recovery Readiness</h2>
      </div>
      <div className="p-4 flex-1 overflow-auto space-y-4">
        {readiness.map((r, i) => (
          <div key={i}>
            <div className="flex justify-between text-[10px] font-mono mb-1">
              <span className="text-slate-400">{r.domain}</span>
              <span className={r.score > 98 ? 'text-emerald-400' : 'text-amber-400'}>{r.score}%</span>
            </div>
            <div className="w-full bg-slate-950 rounded h-1">
              <div 
                className={`h-1 rounded ${r.score > 98 ? 'bg-emerald-500' : 'bg-amber-500'}`} 
                style={{ width: `${r.score}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
