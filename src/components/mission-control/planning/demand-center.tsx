"use client";

import React from "react";
import { Clock, AlertCircle } from "lucide-react";

export function DemandCenter() {
  const demands = [
    { id: "REQ-4011", owner: "PROD_ENG", priority: "HIGH", capacity: "500 vCPU", status: "EVALUATING" },
    { id: "REQ-4012", owner: "DATA_SCI", priority: "CRITICAL", capacity: "20 GPU_A100", status: "PENDING_APPROVAL" },
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 bg-slate-900/80">
        <h2 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-sans">Demand Pipeline</h2>
      </div>
      <div className="p-4 flex-1 overflow-auto space-y-3">
        {demands.map((d, i) => (
          <div key={i} className="border-b border-slate-800 pb-2">
            <div className="flex justify-between items-center mb-1">
              <span className="text-[10px] font-mono text-slate-200 font-bold">{d.id}</span>
              <span className={`text-[9px] font-mono ${d.priority === 'CRITICAL' ? 'text-rose-400' : 'text-amber-400'}`}>PRIORITY: {d.priority}</span>
            </div>
            <div className="text-[10px] text-slate-500 font-mono mb-2">OWNER: {d.owner}</div>
            <div className="flex justify-between items-center">
              <span className="text-[10px] text-indigo-400 font-mono font-bold">{d.capacity}</span>
              <span className="text-[9px] flex items-center text-slate-400 font-mono">
                <Clock className="w-3 h-3 mr-1" /> {d.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
