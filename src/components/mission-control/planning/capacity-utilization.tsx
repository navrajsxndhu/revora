"use client";

import React from "react";
import { Activity } from "lucide-react";

export function CapacityUtilization() {
  const utilization = [
    { resource: "COMPUTE_CLUSTER_A", usage: 82 },
    { resource: "STORAGE_TIER_1", usage: 94 },
    { resource: "NETWORK_BACKBONE", usage: 45 },
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 bg-slate-900/80">
        <h2 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-sans">Capacity Utilization</h2>
      </div>
      <div className="p-4 flex-1 overflow-auto space-y-4">
        {utilization.map((u, i) => (
          <div key={i}>
            <div className="flex justify-between text-[10px] font-mono mb-1">
              <span className="text-slate-400 flex items-center"><Activity className="w-3 h-3 mr-1" /> {u.resource}</span>
              <span className={u.usage > 90 ? 'text-rose-400' : 'text-emerald-400'}>{u.usage}%</span>
            </div>
            <div className="w-full bg-slate-950 rounded h-1.5 border border-slate-800">
              <div 
                className={`h-full rounded ${u.usage > 90 ? 'bg-rose-500' : u.usage > 75 ? 'bg-amber-500' : 'bg-emerald-500'}`} 
                style={{ width: `${u.usage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
