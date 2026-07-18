"use client";

import React, { useEffect, useState } from "react";
import { AlertTriangle, ExternalLink } from "lucide-react";

export function IdentityRiskRegister() {
  const [risks, setRisks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/identity/risks")
      .then(res => res.json())
      .then(d => {
        setRisks(d.risks || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const data = risks.length > 0 ? risks : [
    { id: "IDR-001", title: "Orphaned API Credentials", severity: "CRITICAL", count: 4, policy: "POL-ID-04", status: "OPEN" },
    { id: "IDR-002", title: "Dormant Admin Accounts", severity: "HIGH", count: 2, policy: "POL-ID-12", status: "MITIGATING" },
    { id: "IDR-003", title: "Missing MFA on Contractors", severity: "HIGH", count: 18, policy: "POL-SEC-01", status: "OPEN" },
    { id: "IDR-004", title: "Excessive Over-provisioning", severity: "MEDIUM", count: 145, policy: "POL-ID-02", status: "OPEN" },
  ];

  if (loading) return <div className="h-full border border-slate-800 bg-slate-900/50 flex items-center justify-center text-slate-500 font-mono text-xs">LOADING RISKS...</div>;

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 flex justify-between items-center bg-slate-900/80">
        <div className="flex items-center space-x-2">
          <AlertTriangle className="w-4 h-4 text-rose-400" />
          <h2 className="text-sm font-bold text-slate-200 uppercase tracking-wider font-sans">Identity Risks</h2>
        </div>
      </div>
      <div className="flex-1 overflow-auto">
        <table className="w-full text-left text-xs text-slate-400 border-collapse whitespace-nowrap">
          <thead className="bg-slate-950 sticky top-0 z-10 border-b border-slate-800 text-[10px] uppercase text-slate-500 font-mono">
            <tr>
              <th className="px-3 py-2 font-medium">Risk</th>
              <th className="px-3 py-2 font-medium">Instances</th>
              <th className="px-3 py-2 font-medium">Severity</th>
            </tr>
          </thead>
          <tbody className="font-mono text-[11px]">
            {data.map(r => (
              <tr key={r.id} className="border-b border-slate-800/50 hover:bg-slate-800/30">
                <td className="px-3 py-2">
                  <div className="text-slate-300 font-sans font-medium">{r.title}</div>
                  <div className="text-[9px] text-slate-500 flex items-center mt-0.5 hover:text-indigo-400 cursor-pointer">
                    <ExternalLink className="w-2 h-2 mr-1" /> {r.policy}
                  </div>
                </td>
                <td className="px-3 py-2 text-slate-300">{r.count} detected</td>
                <td className="px-3 py-2">
                  <span className={`px-1.5 py-0.5 rounded text-[9px] ${r.severity === 'CRITICAL' ? 'text-rose-500 bg-rose-500/10' : r.severity === 'HIGH' ? 'text-amber-500 bg-amber-500/10' : 'text-blue-500 bg-blue-500/10'}`}>
                    {r.severity}
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
