"use client";

import React from "react";
import { BookOpen, Activity } from "lucide-react";

export function RunbookCenter() {
  const runbooks = [
    { id: "RB-01", name: "PostgreSQL Primary Failover", version: "v2.1.0", coverage: "99%", exercise: "2026-06-30" },
    { id: "RB-02", name: "Kafka Broker Scaling", version: "v1.4.2", coverage: "85%", exercise: "2026-05-15" }
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 bg-slate-900/80">
        <h2 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-sans">Runbook Center</h2>
      </div>
      <div className="p-4 flex-1 overflow-auto space-y-3">
        {runbooks.map((rb, i) => (
          <div key={i} className="border border-slate-800 bg-slate-950 p-3 rounded flex justify-between items-center">
            <div>
              <div className="text-[10px] text-slate-300 font-mono font-bold flex items-center mb-1"><BookOpen className="w-3 h-3 mr-2 text-emerald-400" />{rb.name}</div>
              <div className="text-[9px] text-slate-500 font-mono">{rb.id} | Ver: {rb.version}</div>
            </div>
            <div className="text-right">
              <div className="text-[10px] text-emerald-400 font-mono font-bold mb-1">{rb.coverage} Cov</div>
              <div className="text-[8px] text-slate-500 font-mono flex items-center justify-end"><Activity className="w-3 h-3 mr-1" />{rb.exercise}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
