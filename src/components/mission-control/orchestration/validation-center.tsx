"use client";

import React from "react";
import { ShieldCheck, Database, Copy, Network } from "lucide-react";

export function ValidationCenter() {
  const validations = [
    { target: "EXEC-9021", domain: "DIGITAL_TWIN", passed: true, icon: <Copy className="w-4 h-4 text-emerald-400" /> },
    { target: "EXEC-9021", domain: "GOVERNANCE", passed: true, icon: <ShieldCheck className="w-4 h-4 text-emerald-400" /> },
    { target: "EXEC-9020", domain: "CMDB", passed: true, icon: <Database className="w-4 h-4 text-emerald-400" /> },
    { target: "EXEC-9019", domain: "TOPOLOGY", passed: true, icon: <Network className="w-4 h-4 text-emerald-400" /> },
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 bg-slate-900/80">
        <h2 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-sans">Constitutional Validation</h2>
      </div>
      <div className="p-4 flex-1 overflow-auto space-y-2">
        {validations.map((v, i) => (
          <div key={i} className="flex items-center justify-between p-2 rounded border border-slate-800 bg-slate-950">
            <div className="flex items-center space-x-3">
              {v.icon}
              <div>
                <div className="text-[10px] text-slate-400 font-mono">{v.target}</div>
                <div className="text-xs font-mono text-slate-200">{v.domain}</div>
              </div>
            </div>
            <span className="text-[10px] text-emerald-400 font-mono border border-emerald-900/50 bg-emerald-950/30 px-1 rounded">PASSED</span>
          </div>
        ))}
      </div>
    </div>
  );
}
