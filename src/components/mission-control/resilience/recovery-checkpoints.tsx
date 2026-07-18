"use client";

import React from "react";
import { Save, Lock } from "lucide-react";

export function RecoveryCheckpoints() {
  const checkpoints = [
    { execution: "REC-9912", stage: "PRE_FAILOVER", hash: "8f4a2b", time: "5m ago" },
    { execution: "REC-9911", stage: "POST_RECOVERY", hash: "2d1c9e", time: "1d ago" },
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 bg-slate-900/80">
        <h2 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-sans">Recovery Checkpoints</h2>
      </div>
      <div className="p-4 flex-1 overflow-auto space-y-3">
        {checkpoints.map((cp, i) => (
          <div key={i} className="flex justify-between items-center border-b border-slate-800 pb-2">
            <div>
              <div className="text-[10px] font-mono text-indigo-400 mb-1">{cp.execution}</div>
              <div className="text-[9px] font-mono text-slate-500">STAGE: {cp.stage}</div>
            </div>
            <div className="text-right">
              <div className="flex items-center justify-end text-[9px] font-mono text-slate-400 mb-1">
                <Save className="w-3 h-3 mr-1" /> {cp.hash}
              </div>
              <div className="text-[9px] font-mono text-slate-600">{cp.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
