"use client";

import React from "react";
import { FolderGit2, ShieldCheck, AlertTriangle } from "lucide-react";

export function EnterprisePortfolios() {
  const portfolios = [
    { id: "PF-CLOUD", name: "Cloud Transformation", sponsor: "CTO", theme: "MODERNIZATION", investment: "$12M", health: "OPTIMAL" },
    { id: "PF-SEC", name: "Zero Trust Architecture", sponsor: "CISO", theme: "SECURITY", investment: "$8.5M", health: "OPTIMAL" },
    { id: "PF-DATA", name: "Global Data Mesh", sponsor: "CDO", theme: "DATA_STRATEGY", investment: "$15M", health: "WARNING" },
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 bg-slate-900/80">
        <h2 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-sans">Enterprise Portfolios</h2>
      </div>
      <div className="p-4 flex-1 overflow-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-800 text-[10px] font-mono text-slate-500 uppercase">
              <th className="pb-2 font-medium">Portfolio</th>
              <th className="pb-2 font-medium">Sponsor</th>
              <th className="pb-2 font-medium">Theme</th>
              <th className="pb-2 font-medium">Investment</th>
              <th className="pb-2 font-medium">Health</th>
            </tr>
          </thead>
          <tbody className="text-xs font-mono text-slate-300">
            {portfolios.map((p, i) => (
              <tr key={i} className="border-b border-slate-800/50 hover:bg-slate-800/20 transition-colors">
                <td className="py-2 flex items-center">
                  <FolderGit2 className="w-3 h-3 text-slate-400 mr-2" />
                  <span className="text-slate-200 font-bold">{p.name}</span>
                </td>
                <td className="py-2 text-[10px] text-slate-400">{p.sponsor}</td>
                <td className="py-2 text-[10px] text-indigo-400">{p.theme}</td>
                <td className="py-2 text-[10px] text-slate-300 font-bold">{p.investment}</td>
                <td className="py-2 flex items-center">
                  {p.health === 'OPTIMAL' ? (
                    <span className="text-[9px] px-1 py-0.5 rounded border border-emerald-900 text-emerald-400 bg-emerald-950/30 flex items-center"><ShieldCheck className="w-2 h-2 mr-1" /> OPTIMAL</span>
                  ) : (
                    <span className="text-[9px] px-1 py-0.5 rounded border border-amber-900 text-amber-400 bg-amber-950/30 flex items-center"><AlertTriangle className="w-2 h-2 mr-1" /> WARNING</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
