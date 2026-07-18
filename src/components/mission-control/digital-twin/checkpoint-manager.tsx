"use client";

import React from "react";
import { MapPin, RotateCcw } from "lucide-react";

export function CheckpointManager() {
  const checkpoints = [
    { hash: "f8a9e2", time: "10 mins ago", env: "PRE-PROD", rollback: true },
    { hash: "b2c1f9", time: "2 hours ago", env: "PROD", rollback: false },
    { hash: "d7e4a1", time: "1 day ago", env: "PROD", rollback: true },
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 bg-slate-900/80">
        <h2 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-sans">Checkpoint Ledger</h2>
      </div>
      <div className="p-4 flex-1 overflow-auto space-y-3">
        {checkpoints.map((cp, i) => (
          <div key={i} className="flex items-center justify-between border-b border-slate-800 pb-2">
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-emerald-400" />
              <div>
                <div className="text-xs text-slate-200 font-mono">CP-{cp.hash}</div>
                <div className="text-[10px] text-slate-500 font-mono">{cp.time} | {cp.env}</div>
              </div>
            </div>
            {cp.rollback ? (
              <button className="flex items-center text-[10px] text-indigo-400 font-mono hover:text-indigo-300 transition-colors">
                <RotateCcw className="w-3 h-3 mr-1" /> REVERT
              </button>
            ) : (
              <span className="text-[10px] text-slate-600 font-mono uppercase">Locked</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
