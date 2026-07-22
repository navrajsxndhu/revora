"use client";

import React, { useEffect, useState } from "react";
import { Briefcase, ChevronRight } from "lucide-react";

export function BusinessCapabilityMap() {
  const [caps, setCaps] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/topology/business-capabilities")
      .then(res => res.json())
      .then(d => {
        setCaps(d.capabilities || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const data = caps.length > 0 ? caps : [
    { id: "CAP-01", name: "Customer Identity & Access", owner: "Security Org", health: "OPTIMAL", apps: 4, services: 12, cost: "$12.4k/mo" },
    { id: "CAP-02", name: "Core Payment Processing", owner: "FinOps", health: "OPTIMAL", apps: 2, services: 8, cost: "$45.2k/mo" },
    { id: "CAP-03", name: "Logistics & Routing", owner: "Operations", health: "DEGRADED", apps: 6, services: 24, cost: "$8.1k/mo" },
    { id: "CAP-04", name: "Enterprise Analytics", owner: "Data Eng", health: "OPTIMAL", apps: 3, services: 15, cost: "$22.5k/mo" },
  ];

  if (loading) return <div className="h-full border border-slate-800 bg-slate-900/50 flex items-center justify-center text-slate-500 font-mono text-xs">LOADING CAPABILITIES...</div>;

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 flex justify-between items-center bg-slate-900/80">
        <div className="flex items-center space-x-2">
          <Briefcase className="w-4 h-4 text-indigo-400" />
          <h2 className="text-sm font-bold text-slate-200 uppercase tracking-wider font-sans">Business Capability Map</h2>
        </div>
      </div>
      <div className="flex-1 overflow-auto p-4 space-y-3">
        {data.map((c: any) => (
          <div key={c.id} className="border border-slate-800 rounded bg-slate-950 p-3 hover:border-slate-700 cursor-pointer transition-colors group">
            <div className="flex justify-between items-start mb-2">
              <div className="flex items-center space-x-2">
                <span className="text-[10px] font-mono text-indigo-400 bg-indigo-400/10 px-1.5 py-0.5 rounded border border-indigo-500/20">{c.id}</span>
                <span className="text-sm text-slate-200 font-sans font-medium">{c.name}</span>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-indigo-400 transition-colors" />
            </div>
            
            <div className="flex space-x-6 text-[10px] font-mono text-slate-400">
              <div>Owner: <span className="text-slate-200">{c.owner}</span></div>
              <div>Apps: <span className="text-slate-200">{c.apps}</span></div>
              <div>Services: <span className="text-slate-200">{c.services}</span></div>
              <div>
                Health: <span className={`${c.health === 'OPTIMAL' ? 'text-emerald-400' : 'text-amber-400'}`}>{c.health}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
