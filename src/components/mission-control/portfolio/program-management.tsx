"use client";

import React from "react";
import { GitBranch, Activity } from "lucide-react";

export function ProgramManagement() {
  const programs = [
    { name: "AWS Migration", portfolio: "PF-CLOUD", increment: "PI-4", owner: "ENG_OPS", health: "ON_TRACK" },
    { name: "Identity Mesh", portfolio: "PF-SEC", increment: "PI-4", owner: "IAM_TEAM", health: "AT_RISK" },
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 bg-slate-900/80">
        <h2 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-sans">Program Management</h2>
      </div>
      <div className="p-4 flex-1 overflow-auto space-y-3">
        {programs.map((p, i) => (
          <div key={i} className="flex justify-between items-center border border-slate-800 bg-slate-950 p-3 rounded">
            <div className="flex items-center space-x-3">
              <GitBranch className="w-4 h-4 text-indigo-400" />
              <div>
                <div className="text-xs text-slate-200 font-mono font-bold">{p.name}</div>
                <div className="text-[9px] text-slate-500 font-mono">PORTFOLIO: {p.portfolio} | PI: {p.increment}</div>
              </div>
            </div>
            <div className="text-right flex flex-col items-end">
              <div className={`text-[9px] font-mono px-1 border rounded mb-1 ${p.health === 'ON_TRACK' ? 'border-emerald-900 text-emerald-400' : 'border-amber-900 text-amber-400'}`}>
                {p.health}
              </div>
              <div className="text-[9px] text-slate-400 font-mono">OWNER: {p.owner}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
