"use client";

import React from "react";
import { DollarSign, ShieldAlert } from "lucide-react";

export function InvestmentCenter() {
  const investments = [
    { portfolio: "Cloud Transformation", allocated: 12000000, utilized: 9500000, status: "OPTIMAL" },
    { portfolio: "Zero Trust Architecture", allocated: 8500000, utilized: 4200000, status: "ON_TRACK" },
    { portfolio: "Global Data Mesh", allocated: 15000000, utilized: 14800000, status: "AT_RISK" }
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 bg-slate-900/80">
        <h2 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-sans">Investment Center</h2>
      </div>
      <div className="p-4 flex-1 overflow-auto space-y-4">
        {investments.map((inv, i) => {
          const percent = Math.min((inv.utilized / inv.allocated) * 100, 100);
          return (
            <div key={i}>
              <div className="flex justify-between items-center mb-1">
                <span className="text-[10px] text-slate-300 font-mono font-bold flex items-center">
                  <DollarSign className="w-3 h-3 text-indigo-400 mr-1" />{inv.portfolio}
                </span>
                <span className={`text-[9px] font-mono ${inv.status === 'AT_RISK' ? 'text-amber-400' : 'text-emerald-400'}`}>{inv.status}</span>
              </div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-[9px] text-slate-500 font-mono">Utilized: ${(inv.utilized / 1000000).toFixed(1)}M / ${(inv.allocated / 1000000).toFixed(1)}M</span>
                <span className="text-[9px] text-slate-400 font-mono">{percent.toFixed(0)}%</span>
              </div>
              <div className="h-1.5 w-full bg-slate-800 rounded overflow-hidden">
                <div className={`h-full ${percent > 95 ? 'bg-amber-500' : 'bg-emerald-500'}`} style={{ width: `${percent}%` }}></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
