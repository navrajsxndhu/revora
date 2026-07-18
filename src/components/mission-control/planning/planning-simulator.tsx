"use client";

import React, { useState } from "react";
import { PlayCircle, Loader2 } from "lucide-react";

export function PlanningSimulator() {
  const [simulating, setSimulating] = useState(false);

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col items-center justify-center p-6 text-center">
      <div className="mb-4">
        <div className="text-sm font-bold text-slate-200 uppercase font-sans mb-1">Planning Simulator</div>
        <div className="text-[10px] font-mono text-slate-500">TEST ENTERPRISE CAPACITY</div>
      </div>
      <select className="bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300 p-2 rounded w-full max-w-sm mb-4">
        <option>SCENARIO: Enterprise Expansion Q3</option>
        <option>SCENARIO: Major Product Release</option>
        <option>SCENARIO: Cloud Region Addition</option>
      </select>
      <button 
        onClick={() => { setSimulating(true); setTimeout(() => setSimulating(false), 2000); }}
        disabled={simulating}
        className="bg-indigo-900/50 hover:bg-indigo-900/80 border border-indigo-800 text-indigo-200 font-mono text-xs px-4 py-2 rounded flex items-center transition-colors disabled:opacity-50">
        {simulating ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <PlayCircle className="w-4 h-4 mr-2" />}
        {simulating ? "SIMULATING DEMAND..." : "SIMULATE CAPACITY DEMAND"}
      </button>
    </div>
  );
}
