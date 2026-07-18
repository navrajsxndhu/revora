"use client";

import React from "react";
import { Wrench, CheckCircle } from "lucide-react";

export function RecoveryPlans() {
  const plans = [
    { failure: "AZ-EAST-1 OUTAGE", duration: "12m", steps: 8, automated: true },
    { failure: "AUTH DB CORRUPTION", duration: "45m", steps: 14, automated: false },
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 bg-slate-900/80">
        <h2 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-sans">Recovery Playbooks</h2>
      </div>
      <div className="p-4 flex-1 overflow-auto space-y-3">
        {plans.map((p, i) => (
          <div key={i} className="flex items-center justify-between border-b border-slate-800 pb-2">
            <div className="flex items-center space-x-3">
              <Wrench className="w-4 h-4 text-indigo-400" />
              <div>
                <div className="text-xs text-slate-200 font-mono font-bold">RECOV: {p.failure}</div>
                <div className="text-[10px] text-slate-500 font-mono">{p.steps} STEPS | EST: {p.duration}</div>
              </div>
            </div>
            {p.automated ? (
              <CheckCircle className="w-4 h-4 text-emerald-500" />
            ) : (
              <span className="text-[9px] text-amber-500 font-mono border border-amber-900/50 bg-amber-950/30 px-1 rounded">MANUAL</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
