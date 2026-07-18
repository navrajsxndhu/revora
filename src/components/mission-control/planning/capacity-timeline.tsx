"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export function CapacityTimeline() {
  const timeline = [
    { time: "09:00:00Z", action: "DEMAND_SUBMITTED", details: "Project: Global Expansion" },
    { time: "09:05:00Z", action: "CAPACITY_ASSESSED", details: "Result: SUFFICIENT" },
    { time: "09:12:00Z", action: "VALIDATION_PASSED", details: "Governance & Identity OK" },
    { time: "09:15:00Z", action: "CAPACITY_RESERVED", target: "ALLOC-0921" },
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 bg-slate-900/80">
        <h2 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-sans">Capacity Timeline</h2>
      </div>
      <div className="p-4 flex-1 overflow-auto relative">
        <div className="absolute left-4 top-4 bottom-4 w-px bg-slate-800"></div>
        <div className="space-y-4 relative z-10">
          {timeline.map((t, i) => (
            <div key={i} className="flex items-start space-x-3">
              <div className="w-2 h-2 rounded-full bg-indigo-500 mt-1.5 ring-4 ring-slate-900"></div>
              <div>
                <div className="flex items-center text-[10px] font-mono text-slate-500 mb-0.5">
                  <span>{t.time}</span>
                  <ArrowRight className="w-2 h-2 mx-1" />
                  <span className="text-slate-300 font-bold">{t.action}</span>
                </div>
                <div className="text-[9px] font-mono text-slate-400">{t.details || t.target}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
