"use client";

import React, { useEffect, useState } from "react";
import { AppWindow, CheckCircle, Activity } from "lucide-react";

export function ApplicationPortfolio() {
  const [apps, setApps] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/topology/applications")
      .then(res => res.json())
      .then(d => {
        setApps(d.applications || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const data = apps.length > 0 ? apps : [
    { name: "Revora Identity UI", tech: "Next.js / React", lifecycle: "Production", owner: "IAM Team", cost: "$400/mo", score: "99.2", status: "HEALTHY" },
    { name: "Legacy HR Portal", tech: "Java Spring", lifecycle: "Deprecated", owner: "HR IT", cost: "$2.1k/mo", score: "64.1", status: "DEGRADED" },
    { name: "Fraud Detection Engine", tech: "Python FastApi", lifecycle: "Beta", owner: "Risk Data", cost: "$5.4k/mo", score: "92.0", status: "HEALTHY" },
  ];

  if (loading) return <div className="h-full border border-slate-800 bg-slate-900/50 flex items-center justify-center text-slate-500 font-mono text-xs">LOADING APPS...</div>;

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 flex justify-between items-center bg-slate-900/80">
        <div className="flex items-center space-x-2">
          <AppWindow className="w-4 h-4 text-indigo-400" />
          <h2 className="text-sm font-bold text-slate-200 uppercase tracking-wider font-sans">Application Portfolio</h2>
        </div>
      </div>
      <div className="flex-1 overflow-auto">
        <table className="w-full text-left text-xs text-slate-400 border-collapse whitespace-nowrap">
          <thead className="bg-slate-950 sticky top-0 z-10 border-b border-slate-800 text-[10px] uppercase text-slate-500 font-mono">
            <tr>
              <th className="px-3 py-2 font-medium">Application</th>
              <th className="px-3 py-2 font-medium">Stack & Lifecycle</th>
              <th className="px-3 py-2 font-medium">Score</th>
              <th className="px-3 py-2 font-medium">Cost (Mo)</th>
            </tr>
          </thead>
          <tbody className="font-mono text-[11px]">
            {data.map((a, i) => (
              <tr key={i} className="border-b border-slate-800/50 hover:bg-slate-800/30 cursor-pointer">
                <td className="px-3 py-2">
                  <div className="text-slate-300 font-sans font-medium">{a.name}</div>
                  <div className="text-[9px] text-slate-500">{a.owner}</div>
                </td>
                <td className="px-3 py-2">
                  <div className="text-slate-400">{a.tech}</div>
                  <div className="text-[9px] text-indigo-400">{a.lifecycle}</div>
                </td>
                <td className="px-3 py-2">
                  <span className={`${parseFloat(a.score) > 90 ? 'text-emerald-400' : 'text-amber-400'} font-bold flex items-center`}>
                    <Activity className="w-3 h-3 mr-1" /> {a.score}
                  </span>
                </td>
                <td className="px-3 py-2 text-slate-400">{a.cost}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
