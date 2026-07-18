"use client";

import React from "react";
import { FileCode2, ShieldCheck } from "lucide-react";

export function RecoveryPlanRegistry() {
  const plans = [
    { id: "DRP-CLOUD-REGION-01", version: "v4.2.1", coverage: "98%", status: "APPROVED" },
    { id: "DRP-DB-CORRUPTION", version: "v2.1.0", coverage: "100%", status: "APPROVED" },
    { id: "DRP-CYBER-ISOLATION", version: "v1.0.5", coverage: "85%", status: "DRAFT" },
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 bg-slate-900/80">
        <h2 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-sans">Recovery Plan Registry</h2>
      </div>
      <div className="p-4 flex-1 overflow-auto space-y-3">
        {plans.map((p, i) => (
          <div key={i} className="flex justify-between items-center border border-slate-800 bg-slate-950 p-2 rounded hover:bg-slate-800/30 transition-colors">
            <div className="flex items-center space-x-3">
              <FileCode2 className="w-4 h-4 text-indigo-400" />
              <div>
                <div className="text-xs text-slate-200 font-mono font-bold">{p.id}</div>
                <div className="text-[9px] text-slate-500 font-mono">VER: {p.version}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center justify-end mb-1">
                {p.status === 'APPROVED' ? <ShieldCheck className="w-3 h-3 text-emerald-400 mr-1" /> : null}
                <span className={`text-[9px] font-mono ${p.status === 'APPROVED' ? 'text-emerald-400' : 'text-slate-400'}`}>{p.status}</span>
              </div>
              <div className="text-[9px] text-slate-500 font-mono">COVERAGE: {p.coverage}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
