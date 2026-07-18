"use client";

import React from "react";
import { ShieldAlert } from "lucide-react";

export function KnowledgeGaps() {
  const gaps = [
    { type: "MISSING_RUNBOOK", target: "SV-Auth-Service", risk: "HIGH" },
    { type: "UNLINKED_DECISION", target: "DEC-098", risk: "MEDIUM" }
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 bg-slate-900/80">
        <h2 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-sans">Coverage Gaps</h2>
      </div>
      <div className="p-4 flex-1 overflow-auto space-y-2">
        {gaps.map((gap, i) => (
          <div key={i} className="flex justify-between items-center p-2 border border-slate-800 bg-slate-950 rounded">
            <div>
              <div className="text-[10px] text-slate-300 font-mono font-bold flex items-center"><ShieldAlert className={`w-3 h-3 mr-2 ${gap.risk === 'HIGH' ? 'text-rose-400' : 'text-amber-400'}`} />{gap.target}</div>
              <div className="text-[9px] text-slate-500 font-mono">{gap.type}</div>
            </div>
            <div className={`text-[8px] font-mono px-1 rounded border ${gap.risk === 'HIGH' ? 'border-rose-900 text-rose-400 bg-rose-950/30' : 'border-amber-900 text-amber-400 bg-amber-950/30'}`}>
              {gap.risk}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
