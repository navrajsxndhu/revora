"use client";

import React from "react";
import { Activity, Briefcase, TrendingUp, DollarSign } from "lucide-react";

export function PortfolioOverview() {
  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="bg-slate-900 border border-slate-800 p-4 rounded flex items-center justify-between">
        <div>
          <div className="text-[10px] text-slate-500 font-mono mb-1">ENTERPRISE PORTFOLIO INDEX</div>
          <div className="text-xl font-bold text-emerald-400 font-mono">99.9</div>
        </div>
        <Activity className="text-emerald-500 w-6 h-6" />
      </div>
      <div className="bg-slate-900 border border-slate-800 p-4 rounded flex items-center justify-between">
        <div>
          <div className="text-[10px] text-slate-500 font-mono mb-1">ACTIVE PROGRAMS</div>
          <div className="text-xl font-bold text-slate-200 font-mono">14</div>
        </div>
        <Briefcase className="text-slate-500 w-6 h-6" />
      </div>
      <div className="bg-slate-900 border border-slate-800 p-4 rounded flex items-center justify-between">
        <div>
          <div className="text-[10px] text-slate-500 font-mono mb-1">BUSINESS VALUE DELIVERED</div>
          <div className="text-xl font-bold text-emerald-400 font-mono">$45M</div>
        </div>
        <TrendingUp className="text-emerald-500 w-6 h-6" />
      </div>
      <div className="bg-slate-900 border border-slate-800 p-4 rounded flex items-center justify-between">
        <div>
          <div className="text-[10px] text-slate-500 font-mono mb-1">INVESTMENT UTILIZATION</div>
          <div className="text-xl font-bold text-indigo-400 font-mono">92%</div>
        </div>
        <DollarSign className="text-indigo-500 w-6 h-6" />
      </div>
    </div>
  );
}
