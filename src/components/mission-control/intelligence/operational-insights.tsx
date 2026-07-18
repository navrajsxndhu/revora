"use client";

import React, { useEffect, useState } from "react";
import { BrainCircuit, AlertTriangle, Info } from "lucide-react";

export function OperationalInsights() {
  const [insights, setInsights] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/intelligence/insights")
      .then(res => res.json())
      .then(d => {
        setInsights(d.insights || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const data = insights.length > 0 ? insights : [
    { title: "Recurring incident pattern in Payment API", desc: "Correlated 4 recent incidents to same dependency (auth-redis-cluster).", sev: "HIGH", rel: "auth-redis-cluster" },
    { title: "Escalating cloud costs in Data Lake", desc: "Storage costs increased 42% over last 30 days without proportional read access.", sev: "MEDIUM", rel: "DataLake-Prod" },
    { title: "Declining deployment success rate", desc: "Frontend releases failing frequently due to end-to-end test flakiness.", sev: "LOW", rel: "Releases" },
  ];

  if (loading) return <div className="h-full border border-slate-800 bg-slate-900/50 flex items-center justify-center text-slate-500 font-mono text-xs">LOADING INSIGHTS...</div>;

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 flex justify-between items-center bg-slate-900/80">
        <div className="flex items-center space-x-2">
          <BrainCircuit className="w-4 h-4 text-amber-400" />
          <h2 className="text-sm font-bold text-slate-200 uppercase tracking-wider font-sans">Operational Insights</h2>
        </div>
      </div>
      <div className="flex-1 overflow-auto p-4 space-y-3">
        {data.map((ins, i) => (
          <div key={i} className="border border-slate-800 bg-slate-950 p-3 rounded hover:border-slate-700 transition-colors">
            <div className="flex items-start space-x-3">
              {ins.sev === 'HIGH' ? <AlertTriangle className="w-4 h-4 text-rose-500 mt-0.5 flex-shrink-0" /> : <Info className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" />}
              <div>
                <div className="text-sm font-sans font-medium text-slate-200">{ins.title}</div>
                <div className="text-xs font-sans text-slate-400 mt-1">{ins.desc}</div>
                <div className="flex items-center mt-2 space-x-3 text-[10px] font-mono">
                  <span className={`${ins.sev === 'HIGH' ? 'text-rose-400' : 'text-slate-400'}`}>SEVERITY: {ins.sev}</span>
                  <span className="text-slate-500">SYSTEM: {ins.rel}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
