"use client";

import React, { useEffect, useState } from "react";
import { AlertTriangle, ChevronRight, Link2, ExternalLink } from "lucide-react";

export function EnterpriseRiskRegister() {
  const [risks, setRisks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/governance/risks")
      .then(res => res.json())
      .then(d => {
        setRisks(d.risks || []);
        setLoading(false);
      })
      .catch(e => {
        console.error(e);
        setLoading(false);
      });
  }, []);

  const data = risks.length > 0 ? risks : [
    { id: "RSK-901", name: "Cloud Provider Single Region Dependency", category: "Infrastructure", impact: "CRITICAL", likelihood: "HIGH", exposure: "$1.2M", owner: "Platform Team", mitigation: "Multi-region failover", status: "OPEN", reviewDate: "2026-08-01", domains: ["CMDB", "Reliability", "FinOps"] },
    { id: "RSK-902", name: "Unpatched Vulnerabilities in Legacy Auth", category: "Security", impact: "HIGH", likelihood: "MEDIUM", exposure: "$450K", owner: "SecOps", mitigation: "Decommissioning in Q3", status: "MITIGATING", reviewDate: "2026-07-20", domains: ["Security", "Releases"] },
    { id: "RSK-903", name: "Key Person Dependency in SRE Team", category: "Operational", impact: "MEDIUM", likelihood: "HIGH", exposure: "$120K", owner: "VP Eng", mitigation: "Cross-training initiative", status: "OPEN", reviewDate: "2026-09-15", domains: ["Incidents", "Workflows"] },
  ];

  if (loading) {
    return <div className="h-64 border border-slate-800 bg-slate-900/50 flex items-center justify-center text-slate-500 font-mono text-xs">LOADING RISKS...</div>;
  }

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-4 border-b border-slate-800 flex justify-between items-center bg-slate-900/80">
        <div className="flex items-center space-x-2">
          <AlertTriangle className="w-4 h-4 text-rose-400" />
          <h2 className="text-sm font-bold text-slate-200 uppercase tracking-wider font-sans">Enterprise Risk Register</h2>
        </div>
      </div>
      <div className="flex-1 overflow-auto">
        <table className="w-full text-left text-xs text-slate-400 border-collapse whitespace-nowrap">
          <thead className="bg-slate-950 sticky top-0 z-10 border-b border-slate-800 text-[10px] uppercase text-slate-500 font-mono">
            <tr>
              <th className="px-3 py-2 font-medium">Risk ID</th>
              <th className="px-3 py-2 font-medium">Name</th>
              <th className="px-3 py-2 font-medium">Category</th>
              <th className="px-3 py-2 font-medium">Impact</th>
              <th className="px-3 py-2 font-medium">Likelihood</th>
              <th className="px-3 py-2 font-medium">Exposure</th>
              <th className="px-3 py-2 font-medium">Owner</th>
              <th className="px-3 py-2 font-medium">Mitigation</th>
              <th className="px-3 py-2 font-medium">Status</th>
              <th className="px-3 py-2 font-medium">Review</th>
              <th className="px-3 py-2 font-medium">Domains</th>
            </tr>
          </thead>
          <tbody className="font-mono text-[11px]">
            {data.map((r) => (
              <tr key={r.id} className="border-b border-slate-800/50 hover:bg-slate-800/30">
                <td className="px-3 py-2 text-indigo-400">{r.id}</td>
                <td className="px-3 py-2 text-slate-300 font-sans font-medium truncate max-w-[200px]" title={r.name}>{r.name}</td>
                <td className="px-3 py-2 text-slate-500">{r.category}</td>
                <td className="px-3 py-2">
                  <span className={`${
                    r.impact === 'CRITICAL' ? 'text-rose-500 bg-rose-500/10' :
                    r.impact === 'HIGH' ? 'text-orange-400 bg-orange-400/10' :
                    r.impact === 'MEDIUM' ? 'text-amber-400 bg-amber-400/10' : 'text-blue-400 bg-blue-400/10'
                  } px-1.5 py-0.5 rounded`}>{r.impact}</span>
                </td>
                <td className="px-3 py-2 text-slate-400">{r.likelihood}</td>
                <td className="px-3 py-2 text-slate-400">{r.exposure}</td>
                <td className="px-3 py-2 text-slate-500">{r.owner}</td>
                <td className="px-3 py-2 text-slate-500 truncate max-w-[150px]">{r.mitigation}</td>
                <td className="px-3 py-2">
                  <span className={`${
                    r.status === 'OPEN' ? 'text-rose-400' :
                    r.status === 'MITIGATING' ? 'text-amber-400' : 'text-emerald-400'
                  }`}>{r.status}</span>
                </td>
                <td className="px-3 py-2 text-slate-500">{r.reviewDate}</td>
                <td className="px-3 py-2">
                  <div className="flex gap-1">
                    {r.domains.map((dom: string) => (
                      <span key={dom} className="text-[9px] bg-slate-800 text-slate-300 px-1 py-0.5 rounded border border-slate-700 flex items-center">
                        {dom} <ExternalLink className="w-2 h-2 ml-1 opacity-50"/>
                      </span>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
