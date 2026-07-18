"use client";

import React from "react";
import { ShieldCheck, Database, Network } from "lucide-react";

export function RecoveryValidationCenter() {
  const validations = [
    { target: "REC-9912", domain: "DIGITAL_TWIN", status: "PASSED", icon: <ShieldCheck className="w-3 h-3 text-emerald-400" /> },
    { target: "REC-9912", domain: "TOPOLOGY", status: "PASSED", icon: <Network className="w-3 h-3 text-emerald-400" /> },
    { target: "REC-9912", domain: "CMDB", status: "PENDING", icon: <Database className="w-3 h-3 text-amber-400" /> },
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 bg-slate-900/80">
        <h2 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-sans">Recovery Validation</h2>
      </div>
      <div className="p-4 flex-1 overflow-auto space-y-2">
        {validations.map((v, i) => (
          <div key={i} className="flex items-center justify-between border-b border-slate-800/50 pb-2">
            <div className="flex items-center space-x-2 text-[10px] font-mono">
              {v.icon}
              <span className="text-indigo-400">{v.target}</span>
              <span className="text-slate-500">{v.domain}</span>
            </div>
            <span className={`text-[9px] font-mono ${v.status === 'PASSED' ? 'text-emerald-400' : 'text-amber-400'}`}>
              {v.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
