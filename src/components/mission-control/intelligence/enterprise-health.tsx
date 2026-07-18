"use client";

import React, { useEffect, useState } from "react";
import { Activity, ShieldCheck, HeartPulse } from "lucide-react";

export function EnterpriseHealth() {
  const [health, setHealth] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/intelligence/health")
      .then(res => res.json())
      .then(d => {
        setHealth(d.health || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const data = health.length > 0 ? health : [
    { domain: "Governance", index: 100, status: "OPTIMAL" },
    { domain: "Identity", index: 99.8, status: "OPTIMAL" },
    { domain: "Security", index: 99.1, status: "OPTIMAL" },
    { domain: "Reliability", index: 95.4, status: "WARNING" },
    { domain: "FinOps", index: 88.0, status: "DEGRADED" },
    { domain: "Infrastructure", index: 97.2, status: "OPTIMAL" },
  ];

  if (loading) return <div className="h-full border border-slate-800 bg-slate-900/50 flex items-center justify-center text-slate-500 font-mono text-xs">LOADING HEALTH...</div>;

  return (
    <div className="bg-gradient-to-br from-slate-900 to-indigo-950/20 border border-slate-800 h-full p-4 flex flex-col">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-sm font-bold text-slate-200 uppercase tracking-wider font-sans">Enterprise Health</h2>
          <div className="text-[10px] font-mono text-slate-500 mt-1">SUBSYSTEM INTEGRITY</div>
        </div>
        <div className="text-2xl font-bold text-emerald-400 flex items-center">
          <HeartPulse className="w-5 h-5 mr-2" /> 98.5%
        </div>
      </div>

      <div className="grid grid-cols-2 gap-x-4 gap-y-3 flex-1 content-center">
        {data.map((h, i) => (
          <div key={i} className="flex justify-between items-center text-[10px] font-mono border-b border-slate-800/50 pb-1">
            <span className="text-slate-400">{h.domain}</span>
            <span className={`${h.status === 'OPTIMAL' ? 'text-emerald-400' : h.status === 'WARNING' ? 'text-amber-400' : 'text-rose-400'}`}>{h.index}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
