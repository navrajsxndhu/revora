"use client";

import React from "react";
import { GitBranch, Box, ShieldAlert } from "lucide-react";

export function WorkflowOrchestrator() {
  const workflows = [
    { name: "ZERO_TRUST_DEPLOY", type: "SECURITY", gates: 4 },
    { name: "INFRA_SCALE_OUT", type: "INFRASTRUCTURE", gates: 2 },
    { name: "EMERGENCY_PATCH", type: "INCIDENT", gates: 1 },
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 bg-slate-900/80">
        <h2 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-sans">Workflow Topology</h2>
      </div>
      <div className="p-4 flex-1 overflow-auto space-y-3">
        {workflows.map((w, i) => (
          <div key={i} className="border-b border-slate-800 pb-2">
            <div className="flex justify-between items-center mb-1">
              <div className="flex items-center space-x-2">
                <GitBranch className="w-4 h-4 text-indigo-400" />
                <span className="text-xs text-slate-200 font-mono font-bold">{w.name}</span>
              </div>
              <span className="text-[9px] text-slate-500 font-mono border border-slate-700 px-1 rounded">{w.type}</span>
            </div>
            <div className="text-[10px] text-slate-500 font-mono flex items-center">
              VALIDATION GATES: <span className="text-emerald-400 ml-1">{w.gates}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
