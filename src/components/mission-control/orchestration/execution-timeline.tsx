"use client";

import React from "react";
import { Zap, ArrowRight } from "lucide-react";

export function ExecutionTimeline() {
  const events = [
    { time: "10:15:00Z", action: "PIPELINE_START", exec: "EXEC-9021" },
    { time: "10:15:05Z", action: "VALIDATION_PASS", exec: "EXEC-9021" },
    { time: "10:15:10Z", action: "TASK_START", exec: "EXEC-9021" },
    { time: "10:16:00Z", action: "CHECKPOINT_SAVE", exec: "EXEC-9021" },
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 bg-slate-900/80">
        <h2 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-sans">Execution Timeline</h2>
      </div>
      <div className="p-4 flex-1 overflow-auto relative">
        <div className="absolute left-6 top-4 bottom-4 w-px bg-slate-800"></div>
        <div className="space-y-4 relative z-10">
          {events.map((e, i) => (
            <div key={i} className="flex items-start space-x-4">
              <div className="w-5 h-5 rounded-full bg-slate-950 border border-slate-700 flex items-center justify-center mt-0.5">
                <Zap className="w-3 h-3 text-slate-400" />
              </div>
              <div className="flex-1">
                <div className="flex items-center text-[9px] text-slate-500 font-mono mb-1">
                  <span>{e.time}</span>
                  <ArrowRight className="w-2 h-2 mx-2 text-slate-700" />
                  <span className="text-indigo-400">{e.exec}</span>
                </div>
                <div className="text-xs font-mono text-slate-300">{e.action}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
