"use client";

import React from "react";
import { CheckSquare, XSquare } from "lucide-react";

export function PortfolioValidation() {
  const validations = [
    { domain: "GOVERNANCE", passed: true, msg: "Policies aligned" },
    { domain: "IDENTITY", passed: true, msg: "IAM boundaries verified" },
    { domain: "CAPACITY", passed: false, msg: "Compute short by 4,000 cores" },
    { domain: "FINOPS", passed: true, msg: "Budgets approved" }
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 bg-slate-900/80">
        <h2 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-sans">Execution Validation</h2>
      </div>
      <div className="p-4 flex-1 overflow-auto space-y-2">
        {validations.map((v, i) => (
          <div key={i} className="flex items-center p-2 border border-slate-800 bg-slate-950 rounded">
            {v.passed ? <CheckSquare className="w-4 h-4 text-emerald-500 mr-3" /> : <XSquare className="w-4 h-4 text-rose-500 mr-3" />}
            <div>
              <div className={`text-[10px] font-mono font-bold ${v.passed ? 'text-slate-300' : 'text-rose-400'}`}>{v.domain}</div>
              <div className="text-[9px] text-slate-500 font-mono">{v.msg}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
