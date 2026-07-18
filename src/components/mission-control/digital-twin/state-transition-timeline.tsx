"use client";

import React from "react";
import { GitCommit, ArrowRight } from "lucide-react";

export function StateTransitionTimeline() {
  const transitions = [
    { id: "TR-9001", type: "RELEASE", target: "PAYMENT_API", time: "10:15:00Z" },
    { id: "TR-9002", type: "CONFIG", target: "GLOBAL_ROUTER", time: "10:18:22Z" },
    { id: "TR-9003", type: "IDENTITY", target: "ADMIN_ROLE", time: "10:45:10Z" },
    { id: "TR-9004", type: "INCIDENT", target: "AUTH_GATEWAY", time: "11:02:05Z" },
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 bg-slate-900/80">
        <h2 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-sans">State Transitions</h2>
      </div>
      <div className="p-4 flex-1 overflow-auto relative">
        <div className="absolute left-6 top-4 bottom-4 w-px bg-slate-800"></div>
        <div className="space-y-4 relative z-10">
          {transitions.map((t, i) => (
            <div key={i} className="flex items-start space-x-4">
              <div className="w-5 h-5 rounded-full bg-slate-950 border border-slate-700 flex items-center justify-center mt-0.5">
                <GitCommit className="w-3 h-3 text-slate-400" />
              </div>
              <div className="flex-1 bg-slate-950 border border-slate-800 p-2 rounded">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[10px] font-mono text-indigo-400">{t.id}</span>
                  <span className="text-[9px] font-mono text-slate-500">{t.time}</span>
                </div>
                <div className="text-xs font-mono text-slate-300 flex items-center">
                  <span className="text-slate-500 mr-2">{t.type}</span>
                  <ArrowRight className="w-3 h-3 text-slate-600 mr-2" />
                  {t.target}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
