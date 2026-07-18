"use client";

import React, { useEffect, useState } from "react";
import { Activity, CheckCircle, XCircle } from "lucide-react";

export function TopologyHealthDashboard() {
  const [health, setHealth] = useState<any>(null);

  useEffect(() => {
    fetch("/api/topology/health")
      .then(res => res.json())
      .then(d => setHealth(d))
      .catch(() => setHealth({}));
  }, []);

  const data = health || {
    completeness: 99.9,
    brokenRelationships: 0,
    orphanAssets: 2,
    circularDependencies: 0,
    staleRecords: 14,
    discoveryHealth: "OPTIMAL",
    coverage: "98.5%",
    integrityScore: 99.2
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 to-indigo-950/20 border border-slate-800 h-full p-4 flex flex-col">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-sm font-bold text-slate-200 uppercase tracking-wider font-sans">Topology Integrity</h2>
          <div className="text-[10px] font-mono text-slate-500 mt-1">GRAPH HEALTH & COVERAGE</div>
        </div>
        <div className="text-2xl font-bold text-emerald-400 flex items-center">
          <Activity className="w-5 h-5 mr-2" /> {data.integrityScore}%
        </div>
      </div>

      <div className="grid grid-cols-2 gap-x-4 gap-y-3 flex-1 content-center">
        <div className="flex justify-between items-center text-[10px] font-mono border-b border-slate-800/50 pb-1">
          <span className="text-slate-400">Broken Links</span>
          {data.brokenRelationships === 0 ? <CheckCircle className="w-3 h-3 text-emerald-500" /> : <span className="text-rose-400">{data.brokenRelationships}</span>}
        </div>
        <div className="flex justify-between items-center text-[10px] font-mono border-b border-slate-800/50 pb-1">
          <span className="text-slate-400">Orphan Assets</span>
          {data.orphanAssets === 0 ? <CheckCircle className="w-3 h-3 text-emerald-500" /> : <span className="text-amber-400">{data.orphanAssets}</span>}
        </div>
        <div className="flex justify-between items-center text-[10px] font-mono border-b border-slate-800/50 pb-1">
          <span className="text-slate-400">Circular Deps</span>
          {data.circularDependencies === 0 ? <CheckCircle className="w-3 h-3 text-emerald-500" /> : <span className="text-rose-400">{data.circularDependencies}</span>}
        </div>
        <div className="flex justify-between items-center text-[10px] font-mono border-b border-slate-800/50 pb-1">
          <span className="text-slate-400">Stale Records</span>
          <span className="text-amber-400">{data.staleRecords}</span>
        </div>
        <div className="flex justify-between items-center text-[10px] font-mono border-b border-slate-800/50 pb-1 col-span-2">
          <span className="text-slate-400">Discovery Coverage</span>
          <span className="text-emerald-400 font-bold">{data.coverage}</span>
        </div>
      </div>
    </div>
  );
}
