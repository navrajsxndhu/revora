"use client";

import React from "react";
import { FileText, CheckCircle } from "lucide-react";

export function PlanningAssessments() {
  const assessments = [
    { id: "ASSESS-GLOBAL-EXP", result: "CAPACITY_CONFIRMED", confidence: "98%", date: "2026-07-12" },
    { id: "ASSESS-DATA-LAKE", result: "CONSTRAINT_VIOLATION", confidence: "100%", date: "2026-07-10" },
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 bg-slate-900/80">
        <h2 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-sans">Planning Assessments</h2>
      </div>
      <div className="p-4 flex-1 overflow-auto space-y-3">
        {assessments.map((a, i) => (
          <div key={i} className="flex items-start justify-between border-b border-slate-800 pb-2">
            <div className="flex items-start space-x-2">
              <FileText className="w-4 h-4 text-slate-500 mt-0.5" />
              <div>
                <div className="text-[10px] font-mono text-slate-200 font-bold mb-1">{a.id}</div>
                <div className={`text-[9px] font-mono ${a.result === 'CAPACITY_CONFIRMED' ? 'text-emerald-400' : 'text-rose-400'}`}>{a.result}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-[9px] text-slate-500 font-mono mb-1">CONFIDENCE: {a.confidence}</div>
              <div className="text-[9px] text-slate-600 font-mono">{a.date}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
