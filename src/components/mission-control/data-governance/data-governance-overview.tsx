"use client";

import React from "react";
import { Database, Activity, GitCommit, ShieldCheck, CheckCircle } from "lucide-react";

export function DataGovernanceOverview() {
  return (
    <div className="grid grid-cols-5 gap-4">
      <div className="bg-slate-900 border border-slate-800 p-4 rounded flex items-center justify-between">
        <div>
          <div className="text-[10px] text-slate-500 font-mono mb-1">METADATA INDEX</div>
          <div className="text-xl font-bold text-emerald-400 font-mono">98.7</div>
        </div>
        <Database className="text-emerald-500 w-6 h-6" />
      </div>
      <div className="bg-slate-900 border border-slate-800 p-4 rounded flex items-center justify-between">
        <div>
          <div className="text-[10px] text-slate-500 font-mono mb-1">GOVERNED DATASETS</div>
          <div className="text-xl font-bold text-slate-200 font-mono">1,402</div>
        </div>
        <Database className="text-slate-500 w-6 h-6" />
      </div>
      <div className="bg-slate-900 border border-slate-800 p-4 rounded flex items-center justify-between">
        <div>
          <div className="text-[10px] text-slate-500 font-mono mb-1">QUALITY SCORE</div>
          <div className="text-xl font-bold text-indigo-400 font-mono">96.5%</div>
        </div>
        <Activity className="text-indigo-500 w-6 h-6" />
      </div>
      <div className="bg-slate-900 border border-slate-800 p-4 rounded flex items-center justify-between">
        <div>
          <div className="text-[10px] text-slate-500 font-mono mb-1">LINEAGE COVERAGE</div>
          <div className="text-xl font-bold text-amber-400 font-mono">92%</div>
        </div>
        <GitCommit className="text-amber-500 w-6 h-6" />
      </div>
      <div className="bg-slate-900 border border-slate-800 p-4 rounded flex items-center justify-between">
        <div>
          <div className="text-[10px] text-slate-500 font-mono mb-1">RETENTION COMPLIANCE</div>
          <div className="text-xl font-bold text-emerald-400 font-mono">100%</div>
        </div>
        <ShieldCheck className="text-emerald-500 w-6 h-6" />
      </div>
    </div>
  );
}
