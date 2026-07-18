"use client";

import React from "react";
import { TrendingUp, Award } from "lucide-react";

export function BenefitRealization() {
  const benefits = [
    { initiative: "Multi-Region DB Failover", metric: "MTTR Reduction", target: "60%", actual: "65%", status: "EXCEEDED" },
    { initiative: "OIDC Federation", metric: "Login Latency", target: "200ms", actual: "180ms", status: "EXCEEDED" },
    { initiative: "Legacy Decommission", metric: "OpEx Savings", target: "$2M", actual: "$1.2M", status: "LAGGING" }
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 bg-slate-900/80">
        <h2 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-sans">Benefit Realization</h2>
      </div>
      <div className="p-4 flex-1 overflow-auto space-y-3">
        {benefits.map((b, i) => (
          <div key={i} className="flex justify-between items-center border border-slate-800 bg-slate-950 p-2.5 rounded">
            <div>
              <div className="text-[10px] text-slate-300 font-mono font-bold flex items-center mb-0.5"><Award className="w-3 h-3 mr-1.5 text-indigo-400" />{b.initiative}</div>
              <div className="text-[9px] text-slate-500 font-mono">Metric: {b.metric}</div>
            </div>
            <div className="text-right">
              <div className="text-[9px] font-mono text-slate-400 mb-0.5">T: {b.target} | A: <span className="text-slate-200 font-bold">{b.actual}</span></div>
              <div className={`inline-block px-1 border rounded text-[8px] font-mono ${b.status === 'EXCEEDED' ? 'border-emerald-900 text-emerald-400' : 'border-amber-900 text-amber-400'}`}>
                {b.status}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
