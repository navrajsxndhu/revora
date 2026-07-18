"use client";

import React from "react";
import { ActivitySquare, Database, ArrowRightLeft, CheckCircle } from "lucide-react";

export function EventStreamingOverview() {
  return (
    <div className="grid grid-cols-5 gap-4">
      <div className="bg-slate-900 border border-slate-800 p-4 rounded flex items-center justify-between">
        <div>
          <div className="text-[10px] text-slate-500 font-mono mb-1">STREAMING INDEX</div>
          <div className="text-xl font-bold text-emerald-400 font-mono">99.5</div>
        </div>
        <ActivitySquare className="text-emerald-500 w-6 h-6" />
      </div>
      <div className="bg-slate-900 border border-slate-800 p-4 rounded flex items-center justify-between">
        <div>
          <div className="text-[10px] text-slate-500 font-mono mb-1">ACTIVE TOPICS</div>
          <div className="text-xl font-bold text-slate-200 font-mono">1,024</div>
        </div>
        <Database className="text-slate-500 w-6 h-6" />
      </div>
      <div className="bg-slate-900 border border-slate-800 p-4 rounded flex items-center justify-between">
        <div>
          <div className="text-[10px] text-slate-500 font-mono mb-1">ACTIVE QUEUES</div>
          <div className="text-xl font-bold text-slate-200 font-mono">512</div>
        </div>
        <Database className="text-slate-500 w-6 h-6" />
      </div>
      <div className="bg-slate-900 border border-slate-800 p-4 rounded flex items-center justify-between">
        <div>
          <div className="text-[10px] text-slate-500 font-mono mb-1">ROUTING INTEGRITY</div>
          <div className="text-xl font-bold text-emerald-400 font-mono">100%</div>
        </div>
        <ArrowRightLeft className="text-emerald-500 w-6 h-6" />
      </div>
      <div className="bg-slate-900 border border-slate-800 p-4 rounded flex items-center justify-between">
        <div>
          <div className="text-[10px] text-slate-500 font-mono mb-1">CONTRACT COMPLIANCE</div>
          <div className="text-xl font-bold text-emerald-400 font-mono">100%</div>
        </div>
        <CheckCircle className="text-emerald-500 w-6 h-6" />
      </div>
    </div>
  );
}
