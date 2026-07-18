"use client";

import React, { useEffect, useState } from "react";
import { Flag, CheckCircle, CircleDashed } from "lucide-react";

export function StrategicInitiatives() {
  const [initiatives, setInitiatives] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/intelligence/initiatives")
      .then(res => res.json())
      .then(d => {
        setInitiatives(d.initiatives || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const data = initiatives.length > 0 ? initiatives : [
    { name: "Global IAM Migration", owner: "Platform Eng", status: "IN_PROGRESS", align: "Zero Trust Architecture" },
    { name: "Legacy DB Sunsetting", owner: "Data Eng", status: "PLANNING", align: "Cost Optimization" },
    { name: "Multi-Region Failover", owner: "Infrastructure", status: "COMPLETED", align: "Reliability Standard" },
  ];

  if (loading) return <div className="h-full border border-slate-800 bg-slate-900/50 flex items-center justify-center text-slate-500 font-mono text-xs">LOADING INITIATIVES...</div>;

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 flex justify-between items-center bg-slate-900/80">
        <div className="flex items-center space-x-2">
          <Flag className="w-4 h-4 text-indigo-400" />
          <h2 className="text-sm font-bold text-slate-200 uppercase tracking-wider font-sans">Strategic Initiatives</h2>
        </div>
      </div>
      <div className="flex-1 overflow-auto p-3 space-y-2">
        {data.map((init, i) => (
          <div key={i} className="flex items-center justify-between border border-slate-800 bg-slate-950 p-2 rounded">
            <div className="flex items-center space-x-3">
              {init.status === 'COMPLETED' ? <CheckCircle className="w-4 h-4 text-emerald-500" /> : <CircleDashed className="w-4 h-4 text-indigo-400" />}
              <div>
                <div className="text-xs font-sans font-medium text-slate-200">{init.name}</div>
                <div className="text-[9px] font-mono text-slate-500">Align: {init.align}</div>
              </div>
            </div>
            <div className="text-[10px] text-slate-400 font-mono">{init.owner}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
