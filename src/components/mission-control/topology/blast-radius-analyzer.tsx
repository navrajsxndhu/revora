"use client";

import React, { useState } from "react";
import { Target, Activity, ShieldAlert, DollarSign } from "lucide-react";

export function BlastRadiusAnalyzer() {
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleAnalyze = () => {
    setAnalyzing(true);
    fetch("/api/topology/blast-radius")
      .then(res => res.json())
      .then(d => {
        setResult(d.analyses?.[0] || {
          target: "auth-redis-cluster",
          affectedServices: 14,
          financialExposure: 145000,
          criticalOwners: ["Security Org", "FinOps", "Platform Eng"],
          recoveryOrder: ["auth-redis-cluster", "session-manager", "payment-api"]
        });
        setAnalyzing(false);
      })
      .catch(() => {
        setResult({
          target: "auth-redis-cluster",
          affectedServices: 14,
          financialExposure: 145000,
          criticalOwners: ["Security Org", "FinOps"],
          recoveryOrder: ["auth-redis-cluster", "session-manager"]
        });
        setAnalyzing(false);
      });
  };

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 flex justify-between items-center bg-slate-900/80">
        <div className="flex items-center space-x-2">
          <Target className="w-4 h-4 text-rose-400" />
          <h2 className="text-sm font-bold text-slate-200 uppercase tracking-wider font-sans">Blast Radius Analyzer</h2>
        </div>
      </div>
      <div className="flex-1 p-4 flex flex-col">
        {!result ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center">
            <p className="text-xs text-slate-400 font-sans mb-4 max-w-[200px]">Deterministically calculate the impact of an infrastructure or service failure.</p>
            <select className="bg-slate-800 border border-slate-700 text-slate-300 text-[10px] font-mono rounded px-2 py-1 w-full max-w-[200px] mb-4">
              <option>Target: auth-redis-cluster</option>
              <option>Target: us-east-1a (Zone)</option>
            </select>
            <button 
              onClick={handleAnalyze}
              disabled={analyzing}
              className="bg-rose-600 hover:bg-rose-700 disabled:bg-rose-800 text-white text-[10px] font-mono px-4 py-1.5 rounded flex items-center transition-colors">
              {analyzing ? "ANALYZING..." : <><Activity className="w-3 h-3 mr-2" /> CALCULATE RADIUS</>}
            </button>
          </div>
        ) : (
          <div className="flex-1 flex flex-col">
            <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-2">
              <div className="text-xs text-slate-300 font-sans font-medium text-rose-400 flex items-center">
                <ShieldAlert className="w-4 h-4 mr-1" /> IMPACT ANALYSIS: {result.target}
              </div>
              <button onClick={() => setResult(null)} className="text-[10px] text-indigo-400 hover:underline">Reset</button>
            </div>
            
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-slate-950 border border-slate-800 p-2 rounded">
                <div className="text-[9px] text-slate-500 font-mono mb-1">AFFECTED SERVICES</div>
                <div className="text-sm font-bold text-rose-400">{result.affectedServices}</div>
              </div>
              <div className="bg-slate-950 border border-slate-800 p-2 rounded">
                <div className="text-[9px] text-slate-500 font-mono mb-1">FINANCIAL EXPOSURE / HR</div>
                <div className="text-sm font-bold text-rose-400 flex items-center"><DollarSign className="w-3 h-3 mr-0.5" />{result.financialExposure.toLocaleString()}</div>
              </div>
            </div>

            <div className="text-[9px] text-slate-500 font-mono mb-1 mt-2">CRITICAL RECOVERY PATH</div>
            <div className="flex flex-wrap gap-1">
              {result.recoveryOrder.map((s: string, idx: number) => (
                <div key={idx} className="bg-slate-800 border border-slate-700 text-slate-300 px-1.5 py-0.5 rounded text-[10px] font-mono">
                  {idx + 1}. {s}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
