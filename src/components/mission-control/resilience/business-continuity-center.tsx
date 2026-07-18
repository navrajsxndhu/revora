"use client";

import React from "react";
import { Briefcase, AlertCircle } from "lucide-react";

export function BusinessContinuityCenter() {
  const plans = [
    { service: "GLOBAL_PAYMENTS", criticality: "TIER_1", rto: "15m", owner: "FIN_OPS", status: "VERIFIED" },
    { service: "IDENTITY_GRAPH", criticality: "TIER_1", rto: "5m", owner: "SEC_OPS", status: "VERIFIED" },
    { service: "ANALYTICS_WAREHOUSE", criticality: "TIER_3", rto: "24h", owner: "DATA_ENG", status: "NEEDS_REVIEW" },
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 bg-slate-900/80 flex justify-between items-center">
        <h2 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-sans">Business Continuity</h2>
        <span className="text-[9px] text-slate-500 font-mono border border-slate-700 px-1 rounded">BCP REGISTRY</span>
      </div>
      <div className="p-4 flex-1 overflow-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-800 text-[10px] font-mono text-slate-500 uppercase">
              <th className="pb-2 font-medium">Service</th>
              <th className="pb-2 font-medium">Criticality</th>
              <th className="pb-2 font-medium">RTO</th>
              <th className="pb-2 font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="text-xs font-mono text-slate-300">
            {plans.map((p, i) => (
              <tr key={i} className="border-b border-slate-800/50 hover:bg-slate-800/20 transition-colors">
                <td className="py-2 flex items-center">
                  <Briefcase className="w-3 h-3 text-slate-400 mr-2" />
                  <span className="text-slate-200 font-bold">{p.service}</span>
                </td>
                <td className={`py-2 text-[10px] ${p.criticality === 'TIER_1' ? 'text-rose-400' : 'text-slate-400'}`}>{p.criticality}</td>
                <td className="py-2 text-[10px] text-slate-400">{p.rto}</td>
                <td className="py-2">
                  <span className={`text-[9px] px-1 py-0.5 rounded border ${p.status === 'VERIFIED' ? 'border-emerald-900 text-emerald-400 bg-emerald-950/30' : 'border-amber-900 text-amber-400 bg-amber-950/30'}`}>
                    {p.status}
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
