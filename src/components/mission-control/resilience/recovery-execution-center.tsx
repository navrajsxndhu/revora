"use client";

import React from "react";
import { PlayCircle, ShieldCheck, AlertTriangle } from "lucide-react";

export function RecoveryExecutionCenter() {
  const executions = [
    { id: "REC-9912", plan: "DRP-CLOUD-REGION-01", trigger: "EXERCISE", status: "RUNNING", stage: "VALIDATION" },
    { id: "REC-9911", plan: "DRP-DB-CORRUPTION", trigger: "AUTOMATED", status: "COMPLETED", stage: "VERIFIED" },
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 bg-slate-900/80">
        <h2 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-sans">Recovery Execution Engine</h2>
      </div>
      <div className="p-4 flex-1 overflow-auto space-y-3">
        {executions.map((e, i) => (
          <div key={i} className="border border-slate-800 bg-slate-950 p-3 rounded">
            <div className="flex justify-between items-center mb-2">
              <div className="text-xs font-mono text-indigo-400 font-bold">{e.id}</div>
              <span className="text-[9px] font-mono bg-slate-800 px-1 py-0.5 rounded text-slate-300">TRIGGER: {e.trigger}</span>
            </div>
            <div className="text-[10px] text-slate-400 font-mono mb-3">PLAN: {e.plan}</div>
            <div className="flex justify-between items-center text-[10px] font-mono">
              <span className="text-slate-500">STAGE: {e.stage}</span>
              <span className={`flex items-center ${e.status === 'RUNNING' ? 'text-amber-400' : 'text-emerald-400'}`}>
                {e.status === 'RUNNING' ? <PlayCircle className="w-3 h-3 mr-1 animate-pulse" /> : <ShieldCheck className="w-3 h-3 mr-1" />}
                {e.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
