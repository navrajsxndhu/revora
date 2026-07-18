"use client";

import React from "react";
import { Server, Database, Cloud, Network } from "lucide-react";

export function EnterpriseState() {
  const states = [
    { name: "US-EAST-1", type: "REGION", health: "OPTIMAL", icon: <Cloud className="w-4 h-4 text-slate-400" /> },
    { name: "K8S-PROD-CLUSTER", type: "INFRA", health: "OPTIMAL", icon: <Server className="w-4 h-4 text-slate-400" /> },
    { name: "CORE-DB-MASTER", type: "DATABASE", health: "OPTIMAL", icon: <Database className="w-4 h-4 text-slate-400" /> },
    { name: "GLOBAL-GATEWAY", type: "NETWORK", health: "OPTIMAL", icon: <Network className="w-4 h-4 text-slate-400" /> },
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 bg-slate-900/80">
        <h2 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-sans">Enterprise Twin State</h2>
      </div>
      <div className="p-4 flex-1 overflow-auto space-y-3">
        {states.map((s, i) => (
          <div key={i} className="flex justify-between items-center border-b border-slate-800 pb-2">
            <div className="flex items-center space-x-3">
              {s.icon}
              <div>
                <div className="text-xs text-slate-200 font-mono font-bold">{s.name}</div>
                <div className="text-[10px] text-slate-500 font-mono">{s.type}</div>
              </div>
            </div>
            <div className="text-xs text-emerald-400 font-mono">{s.health}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
