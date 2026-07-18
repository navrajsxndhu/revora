"use client";

import React from "react";
import { Save, History } from "lucide-react";

export function ExecutionCheckpoints() {
  const checkpoints = [
    { execution: "EXEC-9021", hash: "a7c82f", time: "10m ago" },
    { execution: "EXEC-9019", hash: "d9e11b", time: "2h ago" },
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 bg-slate-900/80">
        <h2 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-sans">Execution Checkpoints</h2>
      </div>
      <div className="p-4 flex-1 overflow-auto space-y-3">
        {checkpoints.map((cp, i) => (
          <div key={i} className="flex items-center justify-between border-b border-slate-800 pb-2">
            <div className="flex items-center space-x-2">
              <Save className="w-4 h-4 text-slate-400" />
              <div>
                <div className="text-[11px] font-mono text-indigo-400">{cp.execution}</div>
                <div className="text-[9px] font-mono text-slate-500">HASH: {cp.hash}</div>
              </div>
            </div>
            <button className="text-[9px] text-slate-400 hover:text-slate-200 font-mono flex items-center transition-colors">
              <History className="w-3 h-3 mr-1" /> ROLLBACK
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
