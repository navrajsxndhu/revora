"use client";

import React from "react";
import { PieChart, ShieldCheck } from "lucide-react";

export function CapacityAllocations() {
  const allocations = [
    { id: "ALLOC-0921", initiative: "Q3_GLOBAL_EXPANSION", resources: "10,000 vCPU", window: "Q3 2026", status: "APPROVED" },
    { id: "ALLOC-0922", initiative: "DATA_LAKE_MIGRATION", resources: "5 PB STORAGE", window: "AUG 2026", status: "APPROVED" },
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 bg-slate-900/80">
        <h2 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-sans">Capacity Allocations</h2>
      </div>
      <div className="p-4 flex-1 overflow-auto space-y-3">
        {allocations.map((a, i) => (
          <div key={i} className="border border-slate-800 bg-slate-950 p-3 rounded">
            <div className="flex justify-between items-center mb-2">
              <div className="text-xs font-mono text-indigo-400 font-bold">{a.id}</div>
              <span className="text-[9px] font-mono text-emerald-400 flex items-center">
                <ShieldCheck className="w-3 h-3 mr-1" /> {a.status}
              </span>
            </div>
            <div className="text-[10px] text-slate-300 font-mono mb-2">INITIATIVE: {a.initiative}</div>
            <div className="flex justify-between items-center text-[10px] font-mono">
              <span className="text-slate-500 flex items-center"><PieChart className="w-3 h-3 mr-1" /> {a.resources}</span>
              <span className="text-slate-400 border border-slate-700 px-1 rounded">{a.window}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
