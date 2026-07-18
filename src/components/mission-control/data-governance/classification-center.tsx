"use client";

import React from "react";
import { Shield } from "lucide-react";

export function ClassificationCenter() {
  const classes = [
    { name: "PUBLIC", count: 420 },
    { name: "INTERNAL", count: 850 },
    { name: "CONFIDENTIAL", count: 110 },
    { name: "RESTRICTED", count: 15 },
    { name: "REGULATED", count: 7 }
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 bg-slate-900/80">
        <h2 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-sans">Data Classifications</h2>
      </div>
      <div className="p-4 flex-1 overflow-auto space-y-2">
        {classes.map((cls, i) => (
          <div key={i} className="flex justify-between items-center p-2 border border-slate-800 bg-slate-950 rounded">
            <div className="text-[10px] text-slate-300 font-mono font-bold flex items-center"><Shield className="w-3 h-3 mr-2 text-indigo-400" />{cls.name}</div>
            <div className="text-[10px] text-emerald-400 font-mono font-bold">{cls.count} Assets</div>
          </div>
        ))}
      </div>
    </div>
  );
}
