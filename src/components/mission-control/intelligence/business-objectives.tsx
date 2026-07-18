"use client";

import React, { useEffect, useState } from "react";
import { Briefcase, CheckCircle, Clock } from "lucide-react";

export function BusinessObjectives() {
  const [objectives, setObjectives] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/intelligence/objectives")
      .then(res => res.json())
      .then(d => {
        setObjectives(d.objectives || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const data = objectives.length > 0 ? objectives : [
    { name: "Zero Trust Architecture Rollout", owner: "CISO", progress: 85, status: "ON_TRACK" },
    { name: "Cloud Cost Optimization", owner: "CFO", progress: 42, status: "AT_RISK" },
    { name: "Global Reliability Standard", owner: "CTO", progress: 98, status: "ON_TRACK" },
  ];

  if (loading) return <div className="h-full border border-slate-800 bg-slate-900/50 flex items-center justify-center text-slate-500 font-mono text-xs">LOADING OBJECTIVES...</div>;

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 flex justify-between items-center bg-slate-900/80">
        <div className="flex items-center space-x-2">
          <Briefcase className="w-4 h-4 text-indigo-400" />
          <h2 className="text-sm font-bold text-slate-200 uppercase tracking-wider font-sans">Business Objectives</h2>
        </div>
      </div>
      <div className="flex-1 overflow-auto p-4 space-y-4">
        {data.map((obj, i) => (
          <div key={i} className="border border-slate-800 bg-slate-950 p-3 rounded">
            <div className="flex justify-between items-start mb-2">
              <div className="text-sm font-sans font-medium text-slate-200">{obj.name}</div>
              <div className="text-[10px] text-slate-500 font-mono">OWNER: {obj.owner}</div>
            </div>
            <div className="flex items-center space-x-3 mt-3">
              <div className="flex-1 bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div className={`h-full ${obj.status === 'ON_TRACK' ? 'bg-emerald-500' : 'bg-amber-500'}`} style={{ width: `${obj.progress}%` }}></div>
              </div>
              <div className="text-[10px] font-mono text-slate-400 w-8">{obj.progress}%</div>
            </div>
            <div className="mt-2 flex items-center text-[9px] font-mono">
              {obj.status === 'ON_TRACK' ? (
                <span className="text-emerald-400 flex items-center"><CheckCircle className="w-3 h-3 mr-1" /> ON TRACK</span>
              ) : (
                <span className="text-amber-400 flex items-center"><Clock className="w-3 h-3 mr-1" /> AT RISK</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
