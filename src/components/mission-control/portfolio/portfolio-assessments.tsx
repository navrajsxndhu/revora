"use client";

import React from "react";
import { ClipboardCheck, Search } from "lucide-react";

export function PortfolioAssessments() {
  const assessments = [
    { target: "PF-CLOUD", type: "ARCHITECTURE_REVIEW", score: 95, date: "2026-07-01", status: "PASSED" },
    { target: "PF-SEC", type: "SECURITY_COMPLIANCE", score: 88, date: "2026-07-05", status: "PASSED_WITH_WARNING" }
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 bg-slate-900/80">
        <h2 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-sans">Strategic Assessments</h2>
      </div>
      <div className="p-4 flex-1 overflow-auto space-y-3">
        {assessments.map((a, i) => (
          <div key={i} className="border border-slate-800 bg-slate-950 p-2.5 rounded flex justify-between items-center">
            <div>
              <div className="text-[10px] text-slate-300 font-mono font-bold flex items-center mb-0.5"><ClipboardCheck className="w-3 h-3 mr-1.5 text-indigo-400" />{a.target}</div>
              <div className="text-[9px] text-slate-500 font-mono">{a.type} | {a.date}</div>
            </div>
            <div className="text-right">
              <div className="text-[10px] text-emerald-400 font-mono font-bold mb-0.5">{a.score}/100</div>
              <div className={`text-[8px] font-mono px-1 rounded border ${a.status.includes('WARNING') ? 'border-amber-900 text-amber-400' : 'border-emerald-900 text-emerald-400'}`}>{a.status}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
