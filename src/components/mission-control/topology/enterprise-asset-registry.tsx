"use client";

import React, { useEffect, useState } from "react";
import { Server, Filter, Search, ChevronDown, Activity, ShieldAlert } from "lucide-react";

export function EnterpriseAssetRegistry() {
  const [assets, setAssets] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/topology/assets")
      .then(res => res.json())
      .then(d => {
        setAssets(d.assets || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const data = assets.length > 0 ? assets : [
    { id: "AST-4921", name: "auth-redis-cluster", type: "Database", owner: "Platform Eng", env: "Production", criticality: "CRITICAL", status: "ACTIVE", version: "7.0.4", health: "HEALTHY", linked: 14 },
    { id: "AST-4922", name: "payment-gateway-svc", type: "Microservice", owner: "FinOps", env: "Production", criticality: "CRITICAL", status: "ACTIVE", version: "v1.4.2", health: "HEALTHY", linked: 8 },
    { id: "AST-4923", name: "legacy-invoice-pdf", type: "Application", owner: "Finance", env: "Staging", criticality: "LOW", status: "DEPRECATED", version: "v0.9.1", health: "DEGRADED", linked: 2 },
    { id: "AST-4924", name: "k8s-worker-node-04", type: "Compute", owner: "Infrastructure", env: "Production", criticality: "HIGH", status: "ACTIVE", version: "v1.28.3", health: "HEALTHY", linked: 42 },
  ];

  if (loading) return <div className="h-full border border-slate-800 bg-slate-900/50 flex items-center justify-center text-slate-500 font-mono text-xs">LOADING ASSETS...</div>;

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 flex justify-between items-center bg-slate-900/80">
        <div className="flex items-center space-x-2">
          <Server className="w-4 h-4 text-indigo-400" />
          <h2 className="text-sm font-bold text-slate-200 uppercase tracking-wider font-sans">Enterprise Asset Registry</h2>
        </div>
        <div className="flex space-x-2">
          <div className="relative">
            <Search className="w-3 h-3 absolute left-2 top-2 text-slate-500" />
            <input type="text" placeholder="Search assets..." className="bg-slate-950 border border-slate-700 text-slate-300 text-[10px] font-mono rounded pl-7 pr-2 py-1.5 focus:outline-none focus:border-indigo-500 w-48" />
          </div>
          <button className="bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 rounded px-2 py-1 text-[10px] font-mono flex items-center">
            <Filter className="w-3 h-3 mr-1" /> FILTER
          </button>
        </div>
      </div>
      <div className="flex-1 overflow-auto">
        <table className="w-full text-left text-xs text-slate-400 border-collapse whitespace-nowrap">
          <thead className="bg-slate-950 sticky top-0 z-10 border-b border-slate-800 text-[10px] uppercase text-slate-500 font-mono">
            <tr>
              <th className="px-3 py-2 font-medium">Asset Name</th>
              <th className="px-3 py-2 font-medium">Type</th>
              <th className="px-3 py-2 font-medium">Owner & Env</th>
              <th className="px-3 py-2 font-medium">Criticality</th>
              <th className="px-3 py-2 font-medium">Health</th>
              <th className="px-3 py-2 font-medium">Links</th>
            </tr>
          </thead>
          <tbody className="font-mono text-[11px]">
            {data.map(i => (
              <tr key={i.id} className="border-b border-slate-800/50 hover:bg-slate-800/30 cursor-pointer">
                <td className="px-3 py-2">
                  <div className="text-slate-300 font-sans font-medium">{i.name}</div>
                  <div className="text-[9px] text-indigo-400">{i.id}</div>
                </td>
                <td className="px-3 py-2 text-slate-500">{i.type}</td>
                <td className="px-3 py-2">
                  <div className="text-slate-400">{i.owner}</div>
                  <div className="text-[9px] text-slate-500">{i.env}</div>
                </td>
                <td className="px-3 py-2">
                  <span className={`${
                    i.criticality === 'CRITICAL' ? 'text-rose-500 bg-rose-500/10' :
                    i.criticality === 'HIGH' ? 'text-amber-500 bg-amber-500/10' : 'text-emerald-500 bg-emerald-500/10'
                  } px-1.5 py-0.5 rounded text-[10px]`}>{i.criticality}</span>
                </td>
                <td className="px-3 py-2">
                  {i.health === 'HEALTHY' ? <Activity className="w-4 h-4 text-emerald-500" /> : <ShieldAlert className="w-4 h-4 text-amber-500" />}
                </td>
                <td className="px-3 py-2 text-slate-300 font-bold">{i.linked}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
