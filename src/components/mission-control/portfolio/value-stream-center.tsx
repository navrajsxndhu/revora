"use client";

import React from "react";
import { GitMerge, ArrowRight } from "lucide-react";

export function ValueStreamCenter() {
  const streams = [
    { name: "Customer Identity", stages: ["Req", "Build", "Gov", "Deploy"], activeStage: 2, cT: "14d", flow: 85 },
    { name: "Core Banking Core", stages: ["Req", "Build", "Gov", "Deploy"], activeStage: 1, cT: "45d", flow: 60 }
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 bg-slate-900/80">
        <h2 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-sans">Value Stream Center</h2>
      </div>
      <div className="p-4 flex-1 overflow-auto space-y-4">
        {streams.map((vs, i) => (
          <div key={i} className="border border-slate-800 bg-slate-950 p-3 rounded">
            <div className="flex justify-between items-center mb-3">
              <div className="text-xs text-slate-200 font-mono font-bold flex items-center"><GitMerge className="w-4 h-4 mr-2 text-indigo-400" />{vs.name}</div>
              <div className="text-[9px] font-mono text-slate-400">Flow: <span className="text-emerald-400">{vs.flow}%</span> | CT: {vs.cT}</div>
            </div>
            <div className="flex items-center space-x-2">
              {vs.stages.map((st, j) => (
                <React.Fragment key={j}>
                  <div className={`px-2 py-1 text-[9px] font-mono rounded ${j < vs.activeStage ? 'bg-emerald-950/40 text-emerald-400 border border-emerald-900/50' : j === vs.activeStage ? 'bg-indigo-950/40 text-indigo-400 border border-indigo-900/50 animate-pulse' : 'bg-slate-800/40 text-slate-500 border border-slate-800'}`}>
                    {st}
                  </div>
                  {j < vs.stages.length - 1 && <ArrowRight className="w-3 h-3 text-slate-700" />}
                </React.Fragment>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
