"use client";

import React from "react";
import { Activity, Database, CheckCircle, Clock } from "lucide-react";

export function PlanningOverview() {
  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="bg-slate-900 border border-slate-800 p-4 rounded flex items-center justify-between">
        <div>
          <div className="text-[10px] text-slate-500 font-mono mb-1">CAPACITY INDEX</div>
          <div className="text-xl font-bold text-emerald-400 font-mono">99.9</div>
        </div>
        <Activity className="text-emerald-500 w-6 h-6" />
      </div>
      <div className="bg-slate-900 border border-slate-800 p-4 rounded flex items-center justify-between">
        <div>
          <div className="text-[10px] text-slate-500 font-mono mb-1">RESERVED CAPACITY</div>
          <div className="text-xl font-bold text-slate-200 font-mono">15%</div>
        </div>
        <Database className="text-slate-500 w-6 h-6" />
      </div>
      <div className="bg-slate-900 border border-slate-800 p-4 rounded flex items-center justify-between">
        <div>
          <div className="text-[10px] text-slate-500 font-mono mb-1">DEMAND REQUESTS</div>
          <div className="text-xl font-bold text-emerald-400 font-mono">12</div>
        </div>
        <Clock className="text-emerald-500 w-6 h-6" />
      </div>
      <div className="bg-slate-900 border border-slate-800 p-4 rounded flex items-center justify-between">
        <div>
          <div className="text-[10px] text-slate-500 font-mono mb-1">PLANNING READINESS</div>
          <div className="text-xl font-bold text-indigo-400 font-mono">OPTIMAL</div>
        </div>
        <CheckCircle className="text-indigo-500 w-6 h-6" />
      </div>
    </div>
  );
}
