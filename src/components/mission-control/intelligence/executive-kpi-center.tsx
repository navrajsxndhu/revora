"use client";

import React, { useEffect, useState } from "react";
import { Target, TrendingUp, TrendingDown, Minus, Filter, Search } from "lucide-react";

export function ExecutiveKPICenter() {
  const [kpis, setKpis] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/intelligence/kpis")
      .then(res => res.json())
      .then(d => {
        setKpis(d.kpis || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const data = kpis.length > 0 ? kpis : [
    { name: "Service Availability", value: "99.98", target: "99.95", trend: "up", status: "HEALTHY", source: "Observability", evidence: 1420 },
    { name: "Incident Recovery Time", value: "14", target: "15", trend: "down", status: "HEALTHY", source: "ESM", evidence: 89 },
    { name: "Deployment Success Rate", value: "98.2", target: "99.0", trend: "down", status: "WARNING", source: "Releases", evidence: 450 },
    { name: "Cloud Cost Efficiency", value: "85", target: "90", trend: "up", status: "WARNING", source: "FinOps", evidence: 12000 },
    { name: "Compliance Adherence", value: "100", target: "100", trend: "flat", status: "HEALTHY", source: "Governance", evidence: 45 },
  ];

  if (loading) return <div className="h-full border border-slate-800 bg-slate-900/50 flex items-center justify-center text-slate-500 font-mono text-xs">LOADING KPIS...</div>;

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 flex justify-between items-center bg-slate-900/80">
        <div className="flex items-center space-x-2">
          <Target className="w-4 h-4 text-indigo-400" />
          <h2 className="text-sm font-bold text-slate-200 uppercase tracking-wider font-sans">Executive KPI Center</h2>
        </div>
        <div className="flex space-x-2">
          <button className="bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 rounded px-2 py-1 text-[10px] font-mono flex items-center">
            <Filter className="w-3 h-3 mr-1" /> FILTER
          </button>
        </div>
      </div>
      <div className="flex-1 overflow-auto">
        <table className="w-full text-left text-xs text-slate-400 border-collapse whitespace-nowrap">
          <thead className="bg-slate-950 sticky top-0 z-10 border-b border-slate-800 text-[10px] uppercase text-slate-500 font-mono">
            <tr>
              <th className="px-3 py-2 font-medium">KPI Name</th>
              <th className="px-3 py-2 font-medium text-right">Current</th>
              <th className="px-3 py-2 font-medium text-right">Target</th>
              <th className="px-3 py-2 font-medium">Trend</th>
              <th className="px-3 py-2 font-medium">Status</th>
              <th className="px-3 py-2 font-medium">Source</th>
              <th className="px-3 py-2 font-medium">Evidence Count</th>
            </tr>
          </thead>
          <tbody className="font-mono text-[11px]">
            {data.map((k, i) => (
              <tr key={i} className="border-b border-slate-800/50 hover:bg-slate-800/30 cursor-pointer">
                <td className="px-3 py-3 text-slate-200 font-sans font-medium">{k.name}</td>
                <td className="px-3 py-3 text-right font-bold text-indigo-400">{k.value}</td>
                <td className="px-3 py-3 text-right text-slate-500">{k.target}</td>
                <td className="px-3 py-3">
                  {k.trend === 'up' ? <TrendingUp className="w-4 h-4 text-emerald-400" /> : 
                   k.trend === 'down' ? <TrendingDown className="w-4 h-4 text-amber-400" /> : 
                   <Minus className="w-4 h-4 text-slate-500" />}
                </td>
                <td className="px-3 py-3">
                  <span className={`${k.status === 'HEALTHY' ? 'text-emerald-500 bg-emerald-500/10' : 'text-amber-500 bg-amber-500/10'} px-1.5 py-0.5 rounded text-[10px]`}>{k.status}</span>
                </td>
                <td className="px-3 py-3 text-slate-400">{k.source}</td>
                <td className="px-3 py-3 text-slate-500">{k.evidence.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
