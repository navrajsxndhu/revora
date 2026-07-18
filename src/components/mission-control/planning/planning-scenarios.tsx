"use client";

import React from "react";
import { Copy, ArrowRight } from "lucide-react";

export function PlanningScenarios() {
  const scenarios = [
    { id: "SCEN-ACQUISITION", name: "Corp Acquisition Q4", impact: "HIGH", readiness: "EVALUATING" },
    { id: "SCEN-NEW-REGION", name: "Launch AP-SOUTH-2", impact: "MEDIUM", readiness: "APPROVED" },
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 bg-slate-900/80">
        <h2 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-sans">Planning Scenarios</h2>
      </div>
      <div className="p-4 flex-1 overflow-auto space-y-3">
        {scenarios.map((s, i) => (
          <div key={i} className="border border-slate-800 bg-slate-950 p-2 rounded">
            <div className="flex items-center mb-1">
              <Copy className="w-3 h-3 text-slate-500 mr-2" />
              <span className="text-[10px] font-mono text-slate-200 font-bold">{s.name}</span>
            </div>
            <div className="flex justify-between items-center text-[9px] font-mono mt-2">
              <span className="text-slate-500">ID: {s.id}</span>
              <span className={`px-1 rounded border ${s.readiness === 'APPROVED' ? 'text-emerald-400 border-emerald-900 bg-emerald-950/30' : 'text-amber-400 border-amber-900 bg-amber-950/30'}`}>
                {s.readiness}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
