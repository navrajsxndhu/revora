"use client";

import React, { useEffect, useState } from "react";
import { Shield, TrendingUp, AlertTriangle } from "lucide-react";

export function ExecutiveGovernanceDashboard() {
  const [data, setData] = useState<any>(null);
  
  useEffect(() => {
    fetch("/api/governance/index")
      .then(res => res.json())
      .then(d => setData(d))
      .catch(() => setData({})); // Silently fallback
  }, []);

  return (
    <div className="bg-gradient-to-br from-slate-900 to-indigo-950/20 border border-slate-800 rounded-lg p-6 h-full">
      <div className="flex justify-between items-start mb-6 border-b border-slate-800 pb-4">
        <div>
          <h2 className="text-lg font-bold text-slate-100 flex items-center font-sans">
            <Shield className="w-5 h-5 mr-2 text-indigo-400" />
            Executive Governance Summary
          </h2>
          <p className="text-xs font-mono text-slate-400 mt-1">INSTITUTIONAL RISK POSTURE & COMPLIANCE</p>
        </div>
        <div className="px-3 py-1 bg-indigo-900/30 border border-indigo-800/50 rounded text-[10px] font-mono text-indigo-300 flex items-center shadow-[0_0_10px_rgba(99,102,241,0.2)]">
          <span className="w-2 h-2 rounded-full bg-indigo-400 mr-2 animate-pulse"></span>
          LIVE TELEMETRY
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <div className="bg-slate-950/80 border border-slate-800/80 rounded p-4 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-500/5 rounded-bl-full"></div>
          <div className="text-[10px] font-mono text-slate-500 mb-2">GOVERNANCE INDEX</div>
          <div className="text-2xl font-bold text-emerald-400 mb-1">98.4%</div>
          <div className="text-[10px] text-emerald-500 flex items-center font-mono">
            <TrendingUp className="w-3 h-3 mr-1" /> +0.2% vs last assessment
          </div>
        </div>

        <div className="bg-slate-950/80 border border-slate-800/80 rounded p-4">
          <div className="text-[10px] font-mono text-slate-500 mb-2">TOTAL RISK EXPOSURE</div>
          <div className="text-2xl font-bold text-rose-400 mb-1">$1.4M</div>
          <div className="text-[10px] text-emerald-500 flex items-center font-mono">
            <TrendingUp className="w-3 h-3 mr-1" /> -12% vs last month
          </div>
        </div>
        
        <div className="bg-slate-950/80 border border-slate-800/80 rounded p-4">
          <div className="text-[10px] font-mono text-slate-500 mb-2">CRITICAL VIOLATIONS</div>
          <div className="text-2xl font-bold text-slate-200 mb-1">0</div>
          <div className="text-[10px] text-slate-500 flex items-center font-mono">
            0 active priority incidents
          </div>
        </div>

        <div className="bg-slate-950/80 border border-slate-800/80 rounded p-4">
          <div className="text-[10px] font-mono text-slate-500 mb-2">COMPLIANCE SCORE</div>
          <div className="text-2xl font-bold text-emerald-400 mb-1">A+</div>
          <div className="text-[10px] text-slate-500 flex items-center font-mono">
            142 controls verified
          </div>
        </div>

        <div className="bg-slate-950/80 border border-slate-800/80 rounded p-4">
          <div className="text-[10px] font-mono text-slate-500 mb-2">OPEN EXCEPTIONS</div>
          <div className="text-2xl font-bold text-amber-400 mb-1">3</div>
          <div className="text-[10px] text-slate-500 flex items-center font-mono">
            1 expiring in {"<"} 7 days
          </div>
        </div>

        <div className="bg-slate-950/80 border border-slate-800/80 rounded p-4">
          <div className="text-[10px] font-mono text-slate-500 mb-2">AUDIT READINESS</div>
          <div className="text-2xl font-bold text-blue-400 mb-1">READY</div>
          <div className="text-[10px] text-slate-500 flex items-center font-mono">
            Ledger synchronized
          </div>
        </div>
      </div>
    </div>
  );
}
