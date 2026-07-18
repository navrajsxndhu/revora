"use client";

import React, { useEffect, useState } from "react";
import { LayoutDashboard, Activity } from "lucide-react";

export function DepartmentScorecards() {
  const [scores, setScores] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/intelligence/scorecards")
      .then(res => res.json())
      .then(d => {
        setScores(d.scorecards || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const data = scores.length > 0 ? scores : [
    { dep: "Platform Engineering", score: 98.2, health: "OPTIMAL" },
    { dep: "Security Org", score: 99.5, health: "OPTIMAL" },
    { dep: "FinOps", score: 82.4, health: "DEGRADED" },
    { dep: "Governance & Risk", score: 100, health: "OPTIMAL" },
  ];

  if (loading) return <div className="h-full border border-slate-800 bg-slate-900/50 flex items-center justify-center text-slate-500 font-mono text-xs">LOADING SCORECARDS...</div>;

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 flex justify-between items-center bg-slate-900/80">
        <div className="flex items-center space-x-2">
          <LayoutDashboard className="w-4 h-4 text-indigo-400" />
          <h2 className="text-sm font-bold text-slate-200 uppercase tracking-wider font-sans">Department Scorecards</h2>
        </div>
      </div>
      <div className="flex-1 overflow-auto p-4 space-y-3">
        {data.map((s, i) => (
          <div key={i} className="flex justify-between items-center border-b border-slate-800 pb-2">
            <div>
              <div className="text-xs font-sans font-medium text-slate-200">{s.dep}</div>
              <div className={`text-[9px] font-mono mt-1 ${s.health === 'OPTIMAL' ? 'text-emerald-400' : 'text-amber-400'}`}>{s.health}</div>
            </div>
            <div className="text-sm font-bold font-mono text-slate-300 flex items-center">
              {s.score} <Activity className="w-3 h-3 ml-1 text-slate-500" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
