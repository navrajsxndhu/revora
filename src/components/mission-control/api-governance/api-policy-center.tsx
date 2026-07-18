"use client";

import React from "react";
import { Shield } from "lucide-react";

export function ApiPolicyCenter() {
  const policies = [
    { name: "Global Rate Limit (Tier 1)", scope: "ALL_EXTERNAL", status: "ENFORCED" },
    { name: "MTLS Requirement", scope: "FINANCE_DOMAIN", status: "ENFORCED" }
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 bg-slate-900/80">
        <h2 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-sans">API Policy Center</h2>
      </div>
      <div className="p-4 flex-1 overflow-auto space-y-2">
        {policies.map((pol, i) => (
          <div key={i} className="flex justify-between items-center p-2 border border-slate-800 bg-slate-950 rounded">
            <div>
              <div className="text-[10px] text-slate-300 font-mono font-bold flex items-center"><Shield className="w-3 h-3 mr-2 text-indigo-400" />{pol.name}</div>
              <div className="text-[9px] text-slate-500 font-mono">Scope: {pol.scope}</div>
            </div>
            <div className="text-[8px] font-mono px-1 rounded border border-emerald-900 text-emerald-400 bg-emerald-950/30">
              {pol.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
