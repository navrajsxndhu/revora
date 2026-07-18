"use client";

import React, { useState } from "react";
import { Play, Loader2 } from "lucide-react";

export function DigitalTwinSimulator() {
  const [simulating, setSimulating] = useState(false);

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col items-center justify-center p-6 text-center">
      <div className="mb-4">
        <div className="text-sm font-bold text-slate-200 uppercase font-sans mb-1">Enterprise Simulator</div>
        <div className="text-[10px] font-mono text-slate-500">VALIDATE BEFORE EXECUTION</div>
      </div>
      <select className="bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300 p-2 rounded w-full max-w-sm mb-4">
        <option>SCENARIO: K8S Cluster V1.28 Upgrade</option>
        <option>SCENARIO: Enforce Strict IAM Policy</option>
      </select>
      <button 
        onClick={() => { setSimulating(true); setTimeout(() => setSimulating(false), 2000); }}
        disabled={simulating}
        className="bg-indigo-600 hover:bg-indigo-500 text-white font-mono text-xs px-4 py-2 rounded flex items-center transition-colors disabled:opacity-50">
        {simulating ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Play className="w-4 h-4 mr-2" />}
        {simulating ? "SIMULATING..." : "EXECUTE SIMULATION"}
      </button>
    </div>
  );
}
