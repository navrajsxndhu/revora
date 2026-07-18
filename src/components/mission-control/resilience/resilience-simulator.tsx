"use client";

import React, { useState } from "react";
import { ShieldAlert, Loader2 } from "lucide-react";

export function ResilienceSimulator() {
  const [simulating, setSimulating] = useState(false);

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col items-center justify-center p-6 text-center">
      <div className="mb-4">
        <div className="text-sm font-bold text-slate-200 uppercase font-sans mb-1">Disaster Simulator</div>
        <div className="text-[10px] font-mono text-slate-500">TEST RECOVERY CAPABILITY</div>
      </div>
      <select className="bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300 p-2 rounded w-full max-w-sm mb-4">
        <option>SCENARIO: Complete Region Failure</option>
        <option>SCENARIO: Ransomware Isolation</option>
        <option>SCENARIO: Database Corruption</option>
      </select>
      <button 
        onClick={() => { setSimulating(true); setTimeout(() => setSimulating(false), 2000); }}
        disabled={simulating}
        className="bg-rose-900/50 hover:bg-rose-900/80 border border-rose-800 text-rose-200 font-mono text-xs px-4 py-2 rounded flex items-center transition-colors disabled:opacity-50">
        {simulating ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <ShieldAlert className="w-4 h-4 mr-2" />}
        {simulating ? "SIMULATING DISASTER..." : "SIMULATE DISASTER"}
      </button>
    </div>
  );
}
