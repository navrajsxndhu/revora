"use client";

import React from "react";
import { AlertTriangle, Lock } from "lucide-react";

export function ConstraintCenter() {
  const constraints = [
    { id: "CONST-001", type: "BUDGET", target: "Q3_CAPEX", limit: "$5.2M", status: "ACTIVE" },
    { id: "CONST-002", type: "MAINTENANCE", target: "EU_WEST_1", limit: "AUG 15-18", status: "PENDING" },
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 bg-slate-900/80">
        <h2 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-sans">Capacity Constraints</h2>
      </div>
      <div className="p-4 flex-1 overflow-auto space-y-3">
        {constraints.map((c, i) => (
          <div key={i} className="border border-slate-800 bg-slate-950 p-2 rounded">
            <div className="flex justify-between items-center mb-2">
              <div className="text-[10px] font-mono text-amber-400 font-bold flex items-center">
                <AlertTriangle className="w-3 h-3 mr-2" />
                {c.id}
              </div>
              <span className="text-[9px] font-mono text-slate-500 border border-slate-700 px-1 rounded">{c.type}</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-[9px] font-mono">
              <div className="text-slate-400">TARGET: <span className="text-slate-200">{c.target}</span></div>
              <div className="text-slate-400 text-right">LIMIT: <span className="text-rose-400">{c.limit}</span></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
