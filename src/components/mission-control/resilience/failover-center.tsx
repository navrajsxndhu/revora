"use client";

import React from "react";
import { ServerCrash, ArrowRight } from "lucide-react";

export function FailoverCenter() {
  const failovers = [
    { target: "DB_PRIMARY_US_EAST", destination: "DB_REPLICA_US_WEST", status: "READY", validation: "PASSED" },
    { target: "API_GATEWAY_EU", destination: "API_GATEWAY_UK", status: "ACTIVE", validation: "PASSED" },
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 bg-slate-900/80">
        <h2 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-sans">Failover Control</h2>
      </div>
      <div className="p-4 flex-1 overflow-auto space-y-3">
        {failovers.map((f, i) => (
          <div key={i} className="border-b border-slate-800 pb-2">
            <div className="flex items-center text-[10px] font-mono text-slate-300 mb-2">
              <span className="text-rose-400">{f.target}</span>
              <ArrowRight className="w-3 h-3 mx-2 text-slate-600" />
              <span className="text-emerald-400">{f.destination}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[9px] font-mono text-slate-500 border border-slate-700 px-1 rounded">VAL: {f.validation}</span>
              <span className={`text-[10px] font-mono ${f.status === 'ACTIVE' ? 'text-indigo-400 font-bold' : 'text-slate-400'}`}>
                {f.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
