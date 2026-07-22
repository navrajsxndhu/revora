"use client";

import React, { useEffect, useState } from "react";
import { GitFork, ArrowDown, ArrowUp } from "lucide-react";

export function ServiceTopology() {
  const [services, setServices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/topology/services")
      .then(res => res.json())
      .then(d => {
        setServices(d.services || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const data = services.length > 0 ? services : [
    { name: "auth-service", tier: "Tier 1", upstream: 2, downstream: 14, status: "HEALTHY", owner: "Security" },
    { name: "payment-api", tier: "Tier 1", upstream: 4, downstream: 3, status: "HEALTHY", owner: "FinOps" },
    { name: "invoice-worker", tier: "Tier 2", upstream: 1, downstream: 0, status: "DEGRADED", owner: "Finance" },
    { name: "notification-hub", tier: "Tier 2", upstream: 8, downstream: 1, status: "HEALTHY", owner: "Platform" },
    { name: "user-profile-db", tier: "Tier 1", upstream: 1, downstream: 5, status: "HEALTHY", owner: "Data Eng" },
  ];

  if (loading) return <div className="h-full border border-slate-800 bg-slate-900/50 flex items-center justify-center text-slate-500 font-mono text-xs">LOADING TOPOLOGY...</div>;

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 flex justify-between items-center bg-slate-900/80">
        <div className="flex items-center space-x-2">
          <GitFork className="w-4 h-4 text-indigo-400" />
          <h2 className="text-sm font-bold text-slate-200 uppercase tracking-wider font-sans">Service Topology</h2>
        </div>
      </div>
      <div className="flex-1 overflow-auto">
        <table className="w-full text-left text-xs text-slate-400 border-collapse whitespace-nowrap">
          <thead className="bg-slate-950 sticky top-0 z-10 border-b border-slate-800 text-[10px] uppercase text-slate-500 font-mono">
            <tr>
              <th className="px-3 py-2 font-medium">Service Name</th>
              <th className="px-3 py-2 font-medium">Tier</th>
              <th className="px-3 py-2 font-medium text-center">Upstream (Consumes)</th>
              <th className="px-3 py-2 font-medium text-center">Downstream (Consumers)</th>
              <th className="px-3 py-2 font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="font-mono text-[11px]">
            {data.map((s: unknown, i: number) => (
              <tr key={i} className="border-b border-slate-800/50 hover:bg-slate-800/30 cursor-pointer">
                <td className="px-3 py-2">
                  <div className="text-slate-300 font-sans font-medium">{s.name}</div>
                  <div className="text-[9px] text-slate-500">{s.owner}</div>
                </td>
                <td className="px-3 py-2 text-slate-500">{s.tier}</td>
                <td className="px-3 py-2 text-center">
                  <div className="flex items-center justify-center space-x-1 text-slate-400 bg-slate-800 px-2 py-0.5 rounded w-12 mx-auto">
                    <ArrowUp className="w-3 h-3 text-emerald-400" /> <span>{s.upstream}</span>
                  </div>
                </td>
                <td className="px-3 py-2 text-center">
                  <div className="flex items-center justify-center space-x-1 text-slate-400 bg-slate-800 px-2 py-0.5 rounded w-12 mx-auto">
                    <ArrowDown className="w-3 h-3 text-indigo-400" /> <span>{s.downstream}</span>
                  </div>
                </td>
                <td className="px-3 py-2">
                  <span className={`${s.status === 'HEALTHY' ? 'text-emerald-400' : 'text-amber-400'}`}>{s.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
