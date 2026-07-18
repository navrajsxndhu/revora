"use client";

import React from "react";
import { AlertTriangle, TrendingDown, DollarSign } from "lucide-react";

export function ImpactAnalysis() {
  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 bg-slate-900/80 flex justify-between items-center">
        <h2 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-sans">Impact Assessment</h2>
        <span className="text-[10px] text-rose-400 font-mono border border-rose-900/50 bg-rose-950/30 px-1 rounded">CRITICAL</span>
      </div>
      <div className="p-4 flex-1 flex flex-col space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <div className="border border-slate-800 bg-slate-950 p-2 rounded">
            <div className="text-[9px] text-slate-500 font-mono mb-1">FINANCIAL EXPOSURE</div>
            <div className="text-sm font-bold text-rose-400 font-mono flex items-center">
              <DollarSign className="w-3 h-3 mr-1" /> 145,000 / hr
            </div>
          </div>
          <div className="border border-slate-800 bg-slate-950 p-2 rounded">
            <div className="text-[9px] text-slate-500 font-mono mb-1">SLA PENALTY RISK</div>
            <div className="text-sm font-bold text-amber-400 font-mono flex items-center">
              <TrendingDown className="w-3 h-3 mr-1" /> 12.5%
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div className="text-[10px] text-slate-500 font-mono mb-2">DOMAIN CASCADE</div>
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-slate-300">Identity Graph</span>
              <span className="text-rose-400 text-[10px]">HIGH IMPACT</span>
            </div>
            <div className="w-full bg-slate-800 h-1 rounded"><div className="bg-rose-500 h-1 rounded w-[85%]"></div></div>

            <div className="flex justify-between text-xs font-mono">
              <span className="text-slate-300">Core Network</span>
              <span className="text-amber-400 text-[10px]">MODERATE</span>
            </div>
            <div className="w-full bg-slate-800 h-1 rounded"><div className="bg-amber-500 h-1 rounded w-[45%]"></div></div>

            <div className="flex justify-between text-xs font-mono">
              <span className="text-slate-300">Customer Gateway</span>
              <span className="text-emerald-400 text-[10px]">MINIMAL</span>
            </div>
            <div className="w-full bg-slate-800 h-1 rounded"><div className="bg-emerald-500 h-1 rounded w-[10%]"></div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
