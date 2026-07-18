"use client";

import React from "react";
import { Users, Server } from "lucide-react";

export function ResourceRegistry() {
  const resources = [
    { name: "CORE_PLATFORM_TEAM", type: "ENGINEERING", owner: "ENG_OPS" },
    { name: "PAYMENTS_DB_CLUSTER", type: "INFRASTRUCTURE", owner: "DATA_ENG" },
    { name: "EU_WEST_1_VPC", type: "CLOUD", owner: "NET_OPS" },
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 bg-slate-900/80">
        <h2 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-sans">Resource Registry</h2>
      </div>
      <div className="p-4 flex-1 overflow-auto space-y-3">
        {resources.map((r, i) => (
          <div key={i} className="flex justify-between items-center border border-slate-800 bg-slate-950 p-2 rounded hover:bg-slate-800/30 transition-colors">
            <div className="flex items-center space-x-3">
              {r.type === 'ENGINEERING' ? <Users className="w-4 h-4 text-indigo-400" /> : <Server className="w-4 h-4 text-emerald-400" />}
              <div>
                <div className="text-xs text-slate-200 font-mono font-bold">{r.name}</div>
                <div className="text-[9px] text-slate-500 font-mono">TYPE: {r.type}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-[9px] text-slate-500 font-mono">OWNER</div>
              <div className="text-[10px] text-slate-400 font-mono font-bold">{r.owner}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
