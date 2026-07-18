"use client";
import React from "react";
import { Server } from "lucide-react";

export function EnterpriseReleaseRegistry() {
  const releases = [
    { app: "Core Banking API", version: "v4.1.0", env: "Production", owner: "FinOps", strategy: "Canary", status: "ROLLING_OUT" },
    { app: "Identity Gateway", version: "v2.9.4", env: "Staging", owner: "SecOps", strategy: "Blue-Green", status: "VALIDATING" }
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 bg-slate-900/80">
        <h2 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-sans">Enterprise Release Registry</h2>
      </div>
      <div className="p-4 flex-1 overflow-auto space-y-2">
        {releases.map((rel, i) => (
          <div key={i} className="border border-slate-800 bg-slate-950 p-3 flex justify-between items-center">
            <div>
              <div className="text-xs text-slate-200 font-mono font-bold flex items-center">
                <Server className="w-3 h-3 text-indigo-400 mr-2" /> {rel.app} {rel.version}
              </div>
              <div className="text-[9px] text-slate-500 font-mono mt-1">
                ENV: {rel.env} | OWNR: {rel.owner} | STRATEGY: {rel.strategy}
              </div>
            </div>
            <div className="text-[9px] font-mono border border-emerald-900/50 bg-emerald-900/20 text-emerald-400 px-2 py-1">
              {rel.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
