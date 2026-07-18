"use client";

import React from "react";
import { Zap, ShieldCheck } from "lucide-react";

export function ResilienceExercises() {
  const exercises = [
    { id: "EX-REGION-FAIL", target: "US_EAST_1", status: "RUNNING", progress: "45%" },
    { id: "EX-RANSOMWARE", target: "STORAGE_TIER_2", status: "COMPLETED", progress: "100%" },
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 bg-slate-900/80">
        <h2 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-sans">Resilience Exercises</h2>
      </div>
      <div className="p-4 flex-1 overflow-auto space-y-3">
        {exercises.map((e, i) => (
          <div key={i} className="border border-slate-800 bg-slate-950 p-2 rounded">
            <div className="flex justify-between items-center mb-2">
              <div className="text-[10px] font-mono text-slate-200 font-bold flex items-center">
                {e.status === 'RUNNING' ? <Zap className="w-3 h-3 mr-2 text-indigo-400 animate-pulse" /> : <ShieldCheck className="w-3 h-3 mr-2 text-emerald-400" />}
                {e.id}
              </div>
              <span className={`text-[9px] font-mono ${e.status === 'RUNNING' ? 'text-indigo-400' : 'text-emerald-400'}`}>{e.status}</span>
            </div>
            <div className="flex justify-between text-[9px] font-mono text-slate-500">
              <span>TARGET: {e.target}</span>
              <span>PROG: {e.progress}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
