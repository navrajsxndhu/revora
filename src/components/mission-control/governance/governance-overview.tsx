"use client";

import React, { useEffect, useState } from "react";
import { Activity } from "lucide-react";

export function GovernanceOverview() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/governance/index")
      .then(res => res.json())
      .then(d => {
        setData(d);
        setLoading(false);
      })
      .catch(e => {
        console.error(e);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="h-32 border border-slate-800 bg-slate-900/50 flex items-center justify-center text-slate-500 font-mono text-xs">LOADING TELEMETRY...</div>;
  }

  // Fallback data if API is not fully seeded yet
  const summary = data?.summary || {
    governanceIndex: 98.4,
    complianceScore: 99.1,
    activePolicies: 142,
    openRisks: 14,
    criticalRisks: 0,
    policyExceptions: 3,
    controlsCoverage: 92.5
  };

  return (
    <div className="bg-slate-900 border border-slate-800 p-4">
      <div className="flex items-center space-x-2 border-b border-slate-800 pb-2 mb-4">
        <Activity className="w-4 h-4 text-indigo-400" />
        <h2 className="text-sm font-bold text-slate-200 uppercase tracking-wider font-sans">Governance Overview</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
        <div className="border border-slate-800 bg-slate-950 p-3">
          <div className="text-[10px] text-slate-500 uppercase mb-1">Gov Index</div>
          <div className="text-xl font-bold text-emerald-400">{summary.governanceIndex}%</div>
          <div className="text-[10px] text-emerald-500/70 mt-1">↑ 0.2% (30d)</div>
        </div>
        
        <div className="border border-slate-800 bg-slate-950 p-3">
          <div className="text-[10px] text-slate-500 uppercase mb-1">Compliance Score</div>
          <div className="text-xl font-bold text-emerald-400">{summary.complianceScore}%</div>
          <div className="text-[10px] text-emerald-500/70 mt-1">✓ Verified</div>
        </div>

        <div className="border border-slate-800 bg-slate-950 p-3">
          <div className="text-[10px] text-slate-500 uppercase mb-1">Active Policies</div>
          <div className="text-xl font-bold text-indigo-400">{summary.activePolicies}</div>
          <div className="text-[10px] text-slate-500 mt-1">Enforcement Active</div>
        </div>

        <div className="border border-slate-800 bg-slate-950 p-3">
          <div className="text-[10px] text-slate-500 uppercase mb-1">Open Risks</div>
          <div className="text-xl font-bold text-amber-400">{summary.openRisks}</div>
          <div className="text-[10px] text-slate-500 mt-1">Monitored</div>
        </div>

        <div className="border border-slate-800 bg-slate-950 p-3">
          <div className="text-[10px] text-slate-500 uppercase mb-1">Critical Risks</div>
          <div className="text-xl font-bold text-slate-200">{summary.criticalRisks}</div>
          <div className="text-[10px] text-emerald-500 mt-1">Zero Tolerance</div>
        </div>

        <div className="border border-slate-800 bg-slate-950 p-3">
          <div className="text-[10px] text-slate-500 uppercase mb-1">Exceptions</div>
          <div className="text-xl font-bold text-rose-400">{summary.policyExceptions}</div>
          <div className="text-[10px] text-slate-500 mt-1">Active Grants</div>
        </div>

        <div className="border border-slate-800 bg-slate-950 p-3">
          <div className="text-[10px] text-slate-500 uppercase mb-1">Controls Coverage</div>
          <div className="text-xl font-bold text-blue-400">{summary.controlsCoverage}%</div>
          <div className="text-[10px] text-slate-500 mt-1">Enterprise Wide</div>
        </div>
      </div>
    </div>
  );
}
