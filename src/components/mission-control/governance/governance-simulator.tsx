"use client";

import React, { useState } from "react";
import { Play, Sliders, Database, ArrowRight, ShieldAlert } from "lucide-react";

export function GovernanceSimulator() {
  const [simulating, setSimulating] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleSimulate = () => {
    setSimulating(true);
    // Call the simulate API
    fetch("/api/governance/simulate", { method: 'POST', body: JSON.stringify({ policyId: "draft-1" }) })
      .then(res => res.json())
      .then(d => {
        setResult(d.result || {
          complianceDelta: "+1.2%",
          riskDelta: "-$45K",
          coverageDelta: "+5%",
          blockedDeploys: 14,
          affectedDomains: ["FinOps", "Platform"]
        });
        setSimulating(false);
      })
      .catch(() => {
        // Fallback for preview
        setResult({
          complianceDelta: "+1.2%",
          riskDelta: "-$45K",
          coverageDelta: "+5%",
          blockedDeploys: 14,
          affectedDomains: ["FinOps", "Platform"]
        });
        setSimulating(false);
      });
  };

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-4 border-b border-slate-800 flex justify-between items-center bg-slate-900/80">
        <div className="flex items-center space-x-2">
          <Sliders className="w-4 h-4 text-indigo-400" />
          <h2 className="text-sm font-bold text-slate-200 uppercase tracking-wider font-sans">Policy Simulator</h2>
        </div>
      </div>
      <div className="flex-1 p-6 flex flex-col">
        {!result ? (
          <div className="flex-1 bg-slate-950 rounded border border-slate-800 p-4 flex flex-col items-center justify-center text-center">
            <Database className="w-10 h-10 text-slate-600 mb-3" />
            <p className="text-sm text-slate-400 font-sans max-w-sm mb-4">Select a drafted policy to simulate its operational impact against historical deployments and state.</p>
            <select className="bg-slate-800 border border-slate-700 text-slate-300 text-xs font-mono rounded px-3 py-2 w-full max-w-xs focus:outline-none focus:border-indigo-500 mb-4">
              <option>Draft: Stricter PII Data Handling</option>
              <option>Draft: Accelerate Tier 3 Approvals</option>
            </select>
            <button 
              onClick={handleSimulate}
              disabled={simulating}
              className="bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-800 text-white text-xs font-medium font-sans px-4 py-2 rounded flex items-center transition-colors">
              {simulating ? <span className="animate-pulse">SIMULATING...</span> : <><Play className="w-3 h-3 mr-2" /> DRY RUN</>}
            </button>
          </div>
        ) : (
          <div className="flex-1 flex flex-col">
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-800">
              <div className="text-sm text-slate-300 font-medium font-sans">Simulation Results</div>
              <button onClick={() => setResult(null)} className="text-xs text-indigo-400 hover:underline">Reset</button>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-slate-950 border border-slate-800 p-3 rounded">
                <div className="text-[10px] text-slate-500 font-mono mb-1">COMPLIANCE IMPACT</div>
                <div className="text-lg font-bold text-emerald-400 flex items-center">
                  {result.complianceDelta}
                </div>
              </div>
              <div className="bg-slate-950 border border-slate-800 p-3 rounded">
                <div className="text-[10px] text-slate-500 font-mono mb-1">RISK EXPOSURE</div>
                <div className="text-lg font-bold text-emerald-400 flex items-center">
                  {result.riskDelta}
                </div>
              </div>
              <div className="bg-slate-950 border border-slate-800 p-3 rounded">
                <div className="text-[10px] text-slate-500 font-mono mb-1">HISTORICAL BLOCK RATE</div>
                <div className="text-lg font-bold text-rose-400 flex items-center">
                  {result.blockedDeploys} Deploys
                </div>
              </div>
              <div className="bg-slate-950 border border-slate-800 p-3 rounded">
                <div className="text-[10px] text-slate-500 font-mono mb-1">CONTROL COVERAGE</div>
                <div className="text-lg font-bold text-indigo-400 flex items-center">
                  {result.coverageDelta}
                </div>
              </div>
            </div>

            <div className="bg-rose-950/20 border border-rose-900/50 p-3 rounded flex items-start mt-auto">
              <ShieldAlert className="w-4 h-4 text-rose-500 mr-2 flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-xs text-rose-400 font-medium mb-1 font-sans">Operational Warning</div>
                <div className="text-[10px] text-slate-400 font-sans">
                  Implementing this policy would have blocked {result.blockedDeploys} historical deployments. Affected domains: {result.affectedDomains.join(', ')}.
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
