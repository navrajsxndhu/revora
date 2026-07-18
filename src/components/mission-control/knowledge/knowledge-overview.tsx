"use client";

import React from "react";
import { Book, BrainCircuit, Activity, Database, ShieldAlert, FileText } from "lucide-react";

export function KnowledgeOverview() {
  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="bg-slate-900 border border-slate-800 p-4 rounded flex items-center justify-between">
        <div>
          <div className="text-[10px] text-slate-500 font-mono mb-1">KNOWLEDGE INDEX</div>
          <div className="text-xl font-bold text-emerald-400 font-mono">99.8</div>
        </div>
        <BrainCircuit className="text-emerald-500 w-6 h-6" />
      </div>
      <div className="bg-slate-900 border border-slate-800 p-4 rounded flex items-center justify-between">
        <div>
          <div className="text-[10px] text-slate-500 font-mono mb-1">DECISION COVERAGE</div>
          <div className="text-xl font-bold text-slate-200 font-mono">95%</div>
        </div>
        <Database className="text-slate-500 w-6 h-6" />
      </div>
      <div className="bg-slate-900 border border-slate-800 p-4 rounded flex items-center justify-between">
        <div>
          <div className="text-[10px] text-slate-500 font-mono mb-1">RUNBOOK READINESS</div>
          <div className="text-xl font-bold text-indigo-400 font-mono">98%</div>
        </div>
        <Book className="text-indigo-500 w-6 h-6" />
      </div>
      <div className="bg-slate-900 border border-slate-800 p-4 rounded flex items-center justify-between">
        <div>
          <div className="text-[10px] text-slate-500 font-mono mb-1">COVERAGE GAPS</div>
          <div className="text-xl font-bold text-amber-400 font-mono">3</div>
        </div>
        <ShieldAlert className="text-amber-500 w-6 h-6" />
      </div>
    </div>
  );
}
