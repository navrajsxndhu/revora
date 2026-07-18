"use client";

import React from "react";
import { Compass, CheckCircle } from "lucide-react";

export function ExecutiveRoadmap() {
  const milestones = [
    { q: "Q1 2026", name: "Global Observability Mesh", status: "COMPLETED" },
    { q: "Q2 2026", name: "Self-Evolving Reliability", status: "COMPLETED" },
    { q: "Q3 2026", name: "Strategic Execution PPM", status: "IN_PROGRESS" },
    { q: "Q4 2026", name: "Autonomous Enterprise AGI", status: "PLANNED" },
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 bg-slate-900/80">
        <h2 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-sans">Executive Roadmap</h2>
      </div>
      <div className="p-4 flex-1 overflow-auto">
        <div className="relative border-l border-slate-700 ml-3 space-y-6">
          {milestones.map((m, i) => (
            <div key={i} className="relative pl-6">
              <div className={`absolute -left-2 top-0.5 w-4 h-4 rounded-full border-4 border-slate-900 ${m.status === 'COMPLETED' ? 'bg-emerald-500' : m.status === 'IN_PROGRESS' ? 'bg-indigo-500 animate-pulse' : 'bg-slate-600'}`}></div>
              <div className="text-[10px] font-mono text-slate-400 font-bold mb-1">{m.q}</div>
              <div className="text-xs text-slate-200 font-mono font-bold flex items-center">
                {m.name}
                {m.status === 'COMPLETED' && <CheckCircle className="w-3 h-3 ml-2 text-emerald-500" />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
