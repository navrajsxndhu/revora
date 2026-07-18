"use client";

import React from "react";
import { Lock, Unlock } from "lucide-react";

export function ExecutionLocks() {
  const locks = [
    { target: "PROD_DB_WRITE", type: "RELEASE_LOCK", active: true },
    { target: "IAM_POLICY_ROOT", type: "SECURITY_LOCK", active: true },
    { target: "K8S_NAMESPACE_PAYMENT", type: "INFRA_LOCK", active: false },
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 bg-slate-900/80">
        <h2 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-sans">Execution Locks</h2>
      </div>
      <div className="p-4 flex-1 overflow-auto space-y-3">
        {locks.map((l, i) => (
          <div key={i} className="flex items-center justify-between border-b border-slate-800 pb-2">
            <div className="flex items-center space-x-2">
              {l.active ? <Lock className="w-4 h-4 text-rose-500" /> : <Unlock className="w-4 h-4 text-slate-500" />}
              <div>
                <div className="text-[11px] font-mono text-slate-200">{l.target}</div>
                <div className="text-[9px] font-mono text-slate-500">{l.type}</div>
              </div>
            </div>
            {l.active ? (
              <span className="text-[9px] text-rose-400 font-mono">LOCKED</span>
            ) : (
              <span className="text-[9px] text-slate-500 font-mono">OPEN</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
