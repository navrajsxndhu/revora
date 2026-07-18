"use client";

import React, { useEffect, useState } from "react";
import { AlertTriangle, ShieldCheck } from "lucide-react";

export function StrategicRiskDashboard() {
  const [risks, setRisks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/intelligence/strategic-risks")
      .then(res => res.json())
      .then(d => {
        setRisks(d.risks || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const data = risks.length > 0 ? risks : [
    { title: "Single Availability Zone Dependency", area: "Infrastructure", impact: "HIGH", owner: "Platform Eng", status: "MITIGATING", policy: "POL-REL-01" },
    { title: "Unencrypted PII Data Lake", area: "Security", impact: "CRITICAL", owner: "CISO", status: "OPEN", policy: "POL-SEC-12" },
    { title: "Third-party Identity Provider Vendor Lock", area: "Identity", impact: "MEDIUM", owner: "IAM Team", status: "ACCEPTED", policy: "POL-ID-04" },
  ];

  if (loading) return <div className="h-full border border-slate-800 bg-slate-900/50 flex items-center justify-center text-slate-500 font-mono text-xs">LOADING RISKS...</div>;

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 flex justify-between items-center bg-slate-900/80">
        <div className="flex items-center space-x-2">
          <AlertTriangle className="w-4 h-4 text-amber-400" />
          <h2 className="text-sm font-bold text-slate-200 uppercase tracking-wider font-sans">Strategic Risk Dashboard</h2>
        </div>
      </div>
      <div className="flex-1 overflow-auto">
        <table className="w-full text-left text-xs text-slate-400 border-collapse whitespace-nowrap">
          <thead className="bg-slate-950 sticky top-0 z-10 border-b border-slate-800 text-[10px] uppercase text-slate-500 font-mono">
            <tr>
              <th className="px-3 py-2 font-medium">Strategic Risk</th>
              <th className="px-3 py-2 font-medium">Impact & Area</th>
              <th className="px-3 py-2 font-medium">Status & Owner</th>
            </tr>
          </thead>
          <tbody className="font-mono text-[11px]">
            {data.map((r, i) => (
              <tr key={i} className="border-b border-slate-800/50 hover:bg-slate-800/30">
                <td className="px-3 py-2">
                  <div className="text-slate-300 font-sans font-medium">{r.title}</div>
                  <div className="text-[9px] text-indigo-400 flex items-center mt-0.5"><ShieldCheck className="w-3 h-3 mr-1" /> {r.policy}</div>
                </td>
                <td className="px-3 py-2">
                  <span className={`${r.impact === 'CRITICAL' ? 'text-rose-500' : r.impact === 'HIGH' ? 'text-amber-500' : 'text-emerald-500'} font-bold`}>{r.impact}</span>
                  <div className="text-[9px] text-slate-500">{r.area}</div>
                </td>
                <td className="px-3 py-2">
                  <div className="text-slate-300">{r.status}</div>
                  <div className="text-[9px] text-slate-500">{r.owner}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
