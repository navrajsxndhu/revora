"use client";

import React from "react";
import { Server, Database, Cloud } from "lucide-react";

export function EnterpriseCapacity() {
  const capacities = [
    { resource: "COMPUTE_TIER_1", type: "INFRASTRUCTURE", total: "10,000 vCPU", allocated: "6,500", available: "3,500", status: "OPTIMAL", icon: <Server className="w-3 h-3 text-slate-400 mr-2" /> },
    { resource: "STORAGE_TIER_1", type: "INFRASTRUCTURE", total: "50 PB", allocated: "42 PB", available: "8 PB", status: "WARNING", icon: <Database className="w-3 h-3 text-slate-400 mr-2" /> },
    { resource: "CLOUD_REGION_EU", type: "ENVIRONMENT", total: "100%", allocated: "45%", available: "55%", status: "OPTIMAL", icon: <Cloud className="w-3 h-3 text-slate-400 mr-2" /> },
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 bg-slate-900/80 flex justify-between items-center">
        <h2 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-sans">Enterprise Capacity</h2>
      </div>
      <div className="p-4 flex-1 overflow-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-800 text-[10px] font-mono text-slate-500 uppercase">
              <th className="pb-2 font-medium">Resource</th>
              <th className="pb-2 font-medium">Type</th>
              <th className="pb-2 font-medium">Total</th>
              <th className="pb-2 font-medium">Available</th>
              <th className="pb-2 font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="text-xs font-mono text-slate-300">
            {capacities.map((c, i) => (
              <tr key={i} className="border-b border-slate-800/50 hover:bg-slate-800/20 transition-colors">
                <td className="py-2 flex items-center">
                  {c.icon}
                  <span className="text-slate-200 font-bold">{c.resource}</span>
                </td>
                <td className="py-2 text-[10px] text-slate-400">{c.type}</td>
                <td className="py-2 text-[10px] text-slate-400">{c.total}</td>
                <td className="py-2 text-[10px] text-indigo-400 font-bold">{c.available}</td>
                <td className="py-2">
                  <span className={`text-[9px] px-1 py-0.5 rounded border ${c.status === 'OPTIMAL' ? 'border-emerald-900 text-emerald-400 bg-emerald-950/30' : 'border-amber-900 text-amber-400 bg-amber-950/30'}`}>
                    {c.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
