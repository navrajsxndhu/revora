"use client";

import React, { useEffect, useState } from "react";
import { Brain, FileSignature, Presentation, ShieldCheck, Target, Activity } from "lucide-react";

export function IntelligenceOverview() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch("/api/intelligence/overview")
      .then(res => res.json())
      .then(d => setData(d))
      .catch(() => setData({}));
  }, []);

  const d = data || {
    healthIndex: 98.5,
    operationalIntegrity: "OPTIMAL",
    activeInsights: 42,
    decisionPackages: 12,
    strategicInitiatives: 8
  };

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col justify-center px-6">
      <div className="grid grid-cols-6 gap-6">
        <div className="flex items-center space-x-3 border-r border-slate-800 pr-4">
          <div className="bg-indigo-500/10 p-2 rounded">
            <Activity className="w-5 h-5 text-indigo-400" />
          </div>
          <div>
            <div className="text-[10px] text-slate-500 font-mono">ENTERPRISE HEALTH</div>
            <div className="text-xl font-bold text-slate-200">{d.healthIndex}%</div>
          </div>
        </div>

        <div className="flex items-center space-x-3 border-r border-slate-800 pr-4">
          <div className="bg-emerald-500/10 p-2 rounded">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
          </div>
          <div>
            <div className="text-[10px] text-slate-500 font-mono">OP. INTEGRITY</div>
            <div className="text-xl font-bold text-slate-200">{d.operationalIntegrity}</div>
          </div>
        </div>

        <div className="flex items-center space-x-3 border-r border-slate-800 pr-4">
          <div className="bg-amber-500/10 p-2 rounded">
            <Brain className="w-5 h-5 text-amber-400" />
          </div>
          <div>
            <div className="text-[10px] text-slate-500 font-mono">ACTIVE INSIGHTS</div>
            <div className="text-xl font-bold text-slate-200">{d.activeInsights}</div>
          </div>
        </div>

        <div className="flex items-center space-x-3 border-r border-slate-800 pr-4">
          <div className="bg-blue-500/10 p-2 rounded">
            <FileSignature className="w-5 h-5 text-blue-400" />
          </div>
          <div>
            <div className="text-[10px] text-slate-500 font-mono">DECISION PACKAGES</div>
            <div className="text-xl font-bold text-slate-200">{d.decisionPackages}</div>
          </div>
        </div>

        <div className="flex items-center space-x-3 border-r border-slate-800 pr-4">
          <div className="bg-rose-500/10 p-2 rounded">
            <Target className="w-5 h-5 text-rose-400" />
          </div>
          <div>
            <div className="text-[10px] text-slate-500 font-mono">INITIATIVES</div>
            <div className="text-xl font-bold text-slate-200">{d.strategicInitiatives}</div>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <div className="bg-emerald-500/10 p-2 rounded">
            <Presentation className="w-5 h-5 text-emerald-400" />
          </div>
          <div>
            <div className="text-[10px] text-slate-500 font-mono">GOVERNANCE ALIGN</div>
            <div className="text-xl font-bold text-emerald-400">100%</div>
          </div>
        </div>
      </div>
    </div>
  );
}
