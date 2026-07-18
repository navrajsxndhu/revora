"use client";

import React from "react";
import { BarChart2 } from "lucide-react";

export function MetricsCenter() {
  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 bg-slate-900/80">
        <h2 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-sans">Metrics Center</h2>
      </div>
      <div className="p-4 flex-1 overflow-auto flex items-center justify-center text-slate-500 font-mono text-xs">
        <BarChart2 className="w-4 h-4 mr-2" /> Metrics governed
      </div>
    </div>
  );
}
