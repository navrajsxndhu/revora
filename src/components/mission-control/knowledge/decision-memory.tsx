"use client";

import React from "react";
import { BrainCircuit, GitMerge, FileCheck } from "lucide-react";

export function DecisionMemory() {
  const decisions = [
    { id: "DEC-110", context: "Migrate Auth to OIDC", outcome: "APPROVED", gov: "GOV-882", evidence: "Architecture Board v2" },
    { id: "DEC-111", context: "Deprecate Redis Cache Cluster", outcome: "REJECTED", gov: "GOV-883", evidence: "Capacity Risk Alert" }
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 bg-slate-900/80">
        <h2 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-sans">Immutable Decision Memory</h2>
      </div>
      <div className="p-4 flex-1 overflow-auto space-y-3">
        {decisions.map((dec, i) => (
          <div key={i} className="border-l-2 border-indigo-500 pl-3 py-1 mb-3">
            <div className="flex justify-between items-center mb-1">
              <span className="text-[10px] text-slate-300 font-mono font-bold flex items-center"><BrainCircuit className="w-3 h-3 mr-1 text-slate-500" />{dec.id}: {dec.context}</span>
              <span className={`text-[9px] font-mono ${dec.outcome === 'APPROVED' ? 'text-emerald-400' : 'text-rose-400'}`}>{dec.outcome}</span>
            </div>
            <div className="text-[9px] text-slate-500 font-mono flex items-center">
              <FileCheck className="w-3 h-3 mr-1" /> {dec.evidence} | <GitMerge className="w-3 h-3 ml-2 mr-1" /> {dec.gov}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
