"use client";

import React from "react";
import { ShieldCheck, ShieldAlert, FileWarning } from "lucide-react";

export function ValidationCenter() {
  const validations = [
    { rule: "GOV-042: Zero Trust Routing", domain: "NETWORK", passed: true },
    { rule: "SEC-109: IAM Least Privilege", domain: "IDENTITY", passed: true },
    { rule: "FIN-012: Budget Threshold", domain: "FINOPS", passed: false },
    { rule: "CMDB-008: Dependency Cycle", domain: "TOPOLOGY", passed: true },
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 bg-slate-900/80">
        <h2 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-sans">Constitutional Validation</h2>
      </div>
      <div className="p-4 flex-1 overflow-auto space-y-2">
        {validations.map((v, i) => (
          <div key={i} className={`flex items-center justify-between p-2 rounded border ${v.passed ? 'border-emerald-900/30 bg-emerald-950/10' : 'border-rose-900/30 bg-rose-950/10'}`}>
            <div className="flex items-center space-x-2">
              {v.passed ? <ShieldCheck className="w-4 h-4 text-emerald-500" /> : <ShieldAlert className="w-4 h-4 text-rose-500" />}
              <div>
                <div className="text-[11px] font-mono text-slate-200">{v.rule}</div>
                <div className="text-[9px] font-mono text-slate-500">{v.domain}</div>
              </div>
            </div>
            {!v.passed && (
              <div className="text-[10px] text-rose-400 font-mono flex items-center">
                <FileWarning className="w-3 h-3 mr-1" /> VIOLATION
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
