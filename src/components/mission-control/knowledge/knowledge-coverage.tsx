"use client";

import React from "react";
import { CheckCircle } from "lucide-react";

export function KnowledgeCoverage() {
  const coverages = [
    { domain: "CMDB & Topology", percent: 99 },
    { domain: "Execution Workflows", percent: 92 },
    { domain: "Resilience Plans", percent: 85 },
    { domain: "Governance Policies", percent: 100 }
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 bg-slate-900/80">
        <h2 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-sans">Enterprise Coverage</h2>
      </div>
      <div className="p-4 flex-1 overflow-auto space-y-4">
        {coverages.map((cov, i) => (
          <div key={i}>
            <div className="flex justify-between items-center mb-1">
              <span className="text-[10px] text-slate-300 font-mono font-bold flex items-center">
                <CheckCircle className="w-3 h-3 text-indigo-400 mr-1" />{cov.domain}
              </span>
              <span className="text-[9px] text-slate-400 font-mono">{cov.percent}%</span>
            </div>
            <div className="h-1.5 w-full bg-slate-800 rounded overflow-hidden">
              <div className={`h-full ${cov.percent < 90 ? 'bg-amber-500' : 'bg-emerald-500'}`} style={{ width: `${cov.percent}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
