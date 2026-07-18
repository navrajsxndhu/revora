"use client";

import React, { useState } from "react";
import { Play, TrendingDown, Target, Zap } from "lucide-react";

export function IntelligenceSimulator() {
  const [simulating, setSimulating] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleSimulate = () => {
    setSimulating(true);
    fetch("/api/intelligence/simulate", { method: 'POST', body: JSON.stringify({ action: "BUDGET_REDUCTION", targetId: "Platform Eng" }) })
      .then(res => res.json())
      .then(d => {
        setResult(d.result || {
          action: "BUDGET_REDUCTION",
          targetId: "Platform Eng",
          enterpriseHealthImpact: -2.5,
          affectedKPIs: ["Deployment Success Rate", "Service Availability"],
          operationalRisks: ["Elevated incident recovery time due to reduced staffing"],
          governanceStatus: "Requires Executive Override",
          finopsImpact: "+$45,000/mo Savings"
        });
        setSimulating(false);
      })
      .catch(() => {
        setResult({
          action: "BUDGET_REDUCTION",
          targetId: "Platform Eng",
          enterpriseHealthImpact: -2.5,
          affectedKPIs: ["Deployment Success Rate", "Service Availability"],
          operationalRisks: ["Elevated incident recovery time due to reduced staffing"],
          governanceStatus: "Requires Executive Override",
          finopsImpact: "+$45,000/mo Savings"
        });
        setSimulating(false);
      });
  };

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 flex justify-between items-center bg-slate-900/80">
        <div className="flex items-center space-x-2">
          <Zap className="w-4 h-4 text-indigo-400" />
          <h2 className="text-sm font-bold text-slate-200 uppercase tracking-wider font-sans">Intelligence Simulator</h2>
        </div>
      </div>
      <div className="flex-1 p-4 flex flex-col">
        {!result ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center">
            <select className="bg-slate-800 border border-slate-700 text-slate-300 text-[10px] font-mono rounded px-2 py-1 w-full mb-4 max-w-[250px]">
              <option>Simulate: 10% Budget Reduction (Platform Eng)</option>
              <option>Simulate: Mandate Zero Trust for all apps</option>
            </select>
            <button 
              onClick={handleSimulate}
              disabled={simulating}
              className="bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-800 text-white text-[10px] font-mono px-4 py-1.5 rounded flex items-center transition-colors">
              {simulating ? "SIMULATING..." : <><Play className="w-3 h-3 mr-2" /> EXECUTE SCENARIO</>}
            </button>
          </div>
        ) : (
          <div className="flex-1 flex flex-col">
            <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-2">
              <div className="text-xs text-slate-300 font-sans font-medium">Scenario Outcome</div>
              <button onClick={() => setResult(null)} className="text-[10px] text-indigo-400 hover:underline">Reset</button>
            </div>
            
            <div className="grid grid-cols-2 gap-3 flex-1 content-start">
              <div className="bg-slate-950 border border-slate-800 p-2 rounded">
                <div className="text-[9px] text-slate-500 font-mono mb-1">HEALTH IMPACT</div>
                <div className="text-sm font-bold text-rose-400 flex items-center"><TrendingDown className="w-3 h-3 mr-1" /> {result.enterpriseHealthImpact}%</div>
              </div>
              <div className="bg-slate-950 border border-slate-800 p-2 rounded">
                <div className="text-[9px] text-slate-500 font-mono mb-1">FINANCIAL IMPACT</div>
                <div className="text-sm font-bold text-emerald-400">{result.finopsImpact}</div>
              </div>
              <div className="bg-slate-950 border border-slate-800 p-2 rounded col-span-2">
                <div className="text-[9px] text-slate-500 font-mono mb-1">AFFECTED KPIS</div>
                <div className="text-xs font-mono text-slate-300">{result.affectedKPIs.join(", ")}</div>
              </div>
              <div className="bg-slate-950 border border-slate-800 p-2 rounded col-span-2">
                <div className="text-[9px] text-slate-500 font-mono mb-1">GOVERNANCE</div>
                <div className="text-xs font-bold text-amber-400">{result.governanceStatus}</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
