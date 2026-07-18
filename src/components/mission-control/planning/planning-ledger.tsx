"use client";

import React from "react";
import { DatabaseBackup, Hash } from "lucide-react";

export function PlanningLedger() {
  const ledger = [
    { event: "ALLOCATION_CREATED", id: "ALLOC-0921", hash: "8f4a2b1c", time: "2h ago" },
    { event: "VALIDATION_COMPLETED", id: "ASSESS-GLOBAL-EXP", hash: "9e1c2d4a", time: "3h ago" },
    { event: "DEMAND_APPROVED", id: "REQ-4011", hash: "1b2c3d4e", time: "5h ago" },
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 bg-slate-900/80">
        <h2 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-sans">Planning Ledger</h2>
      </div>
      <div className="p-4 flex-1 overflow-auto space-y-2">
        {ledger.map((l, i) => (
          <div key={i} className="flex justify-between items-center text-[10px] font-mono border-b border-slate-800/50 pb-2">
            <div className="flex items-center space-x-2">
              <DatabaseBackup className="w-3 h-3 text-slate-500" />
              <div>
                <div className="text-emerald-400">{l.event}</div>
                <div className="text-slate-600">ID: {l.id}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-slate-400 flex items-center justify-end">
                <Hash className="w-2 h-2 mr-1" /> {l.hash}
              </div>
              <div className="text-slate-600">{l.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
