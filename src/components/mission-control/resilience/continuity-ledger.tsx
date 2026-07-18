"use client";

import React from "react";
import { DatabaseBackup, Hash } from "lucide-react";

export function ContinuityLedger() {
  const ledger = [
    { event: "RECOVERY_VERIFIED", execution: "REC-9911", hash: "4a2b9f1d", time: "1d ago" },
    { event: "SERVICE_RESTORED", execution: "REC-9911", hash: "9e1c2d4a", time: "1d ago" },
    { event: "CHECKPOINT_CREATED", execution: "REC-9911", hash: "1b2c3d4e", time: "1d ago" },
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 bg-slate-900/80">
        <h2 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-sans">Continuity Ledger</h2>
      </div>
      <div className="p-4 flex-1 overflow-auto space-y-2">
        {ledger.map((l, i) => (
          <div key={i} className="flex justify-between items-center text-[10px] font-mono border-b border-slate-800/50 pb-2">
            <div className="flex items-center space-x-2">
              <DatabaseBackup className="w-3 h-3 text-slate-500" />
              <div>
                <div className="text-emerald-400">{l.event}</div>
                <div className="text-slate-600">EXEC: {l.execution}</div>
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
