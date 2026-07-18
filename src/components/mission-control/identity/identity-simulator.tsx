"use client";

import React, { useState } from "react";
import { Play, Activity, ShieldAlert } from "lucide-react";

export function IdentitySimulator() {
  const [simulating, setSimulating] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleSimulate = () => {
    setSimulating(true);
    fetch("/api/identity/simulate", { method: 'POST', body: JSON.stringify({ action: "REMOVE_PERM", targetId: "ROLE-003" }) })
      .then(res => res.json())
      .then(d => {
        setResult(d.result || {
          governanceImpact: "Compliant",
          securityImpact: "Elevated Risk",
          blockedDeploys: 0,
          affectedDomains: ["Platform", "Security"]
        });
        setSimulating(false);
      })
      .catch(() => {
        setResult({
          governanceImpact: "Compliant",
          securityImpact: "Reduced Risk",
          blockedDeploys: 12,
          affectedDomains: ["CMDB", "Releases"]
        });
        setSimulating(false);
      });
  };

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 flex justify-between items-center bg-slate-900/80">
        <div className="flex items-center space-x-2">
          <Activity className="w-4 h-4 text-indigo-400" />
          <h2 className="text-sm font-bold text-slate-200 uppercase tracking-wider font-sans">Identity Simulator</h2>
        </div>
      </div>
      <div className="flex-1 p-4 flex flex-col">
        {!result ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center">
            <p className="text-xs text-slate-400 font-sans mb-4 max-w-[200px]">Simulate the deterministic impact of an identity or role change.</p>
            <select className="bg-slate-800 border border-slate-700 text-slate-300 text-[10px] font-mono rounded px-2 py-1 w-full max-w-[200px] mb-4">
              <option>Action: Remove "deploy" from Developer</option>
              <option>Action: Revoke AWS Deploy Credential</option>
            </select>
            <button 
              onClick={handleSimulate}
              disabled={simulating}
              className="bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-800 text-white text-[10px] font-mono px-4 py-1.5 rounded flex items-center transition-colors">
              {simulating ? "SIMULATING..." : <><Play className="w-3 h-3 mr-2" /> DRY RUN</>}
            </button>
          </div>
        ) : (
          <div className="flex-1 flex flex-col">
            <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-2">
              <div className="text-xs text-slate-300 font-sans font-medium">Simulation Results</div>
              <button onClick={() => setResult(null)} className="text-[10px] text-indigo-400 hover:underline">Reset</button>
            </div>
            
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-slate-950 border border-slate-800 p-2 rounded">
                <div className="text-[9px] text-slate-500 font-mono mb-1">GOVERNANCE</div>
                <div className="text-sm font-bold text-emerald-400">{result.governanceImpact}</div>
              </div>
              <div className="bg-slate-950 border border-slate-800 p-2 rounded">
                <div className="text-[9px] text-slate-500 font-mono mb-1">SECURITY</div>
                <div className="text-sm font-bold text-emerald-400">{result.securityImpact}</div>
              </div>
              <div className="bg-slate-950 border border-slate-800 p-2 rounded col-span-2">
                <div className="text-[9px] text-slate-500 font-mono mb-1">PROJECTED BLOCKED EVENTS</div>
                <div className="text-sm font-bold text-rose-400">{result.blockedDeploys} Operations</div>
              </div>
            </div>

            {result.blockedDeploys > 0 && (
              <div className="bg-rose-950/20 border border-rose-900/50 p-2 rounded flex items-start mt-auto">
                <ShieldAlert className="w-3 h-3 text-rose-500 mr-2 flex-shrink-0 mt-0.5" />
                <div className="text-[10px] text-slate-400 font-sans">
                  Warning: Removing this permission interrupts {result.blockedDeploys} automated operations across {result.affectedDomains.join(', ')}.
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
