"use client";

import React from "react";
import { GitMerge } from "lucide-react";

export function DataLineage() {
  const relationships = [
    { source: "DB-Cust-EU", target: "API-Profile-V2", type: "DB_TO_API" },
    { source: "API-Profile-V2", target: "SVC-Marketing", type: "API_TO_SVC" },
    { source: "EVT-Checkout", target: "WKF-Order-Process", type: "EVENT_TO_WKF" }
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 bg-slate-900/80">
        <h2 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-sans">Deterministic Data Lineage</h2>
      </div>
      <div className="p-4 flex-1 overflow-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-800 text-[9px] font-mono text-slate-500 uppercase">
              <th className="pb-2">Source Asset</th>
              <th className="pb-2">Lineage Type</th>
              <th className="pb-2">Target Asset</th>
            </tr>
          </thead>
          <tbody className="text-[9px] font-mono text-slate-300">
            {relationships.map((rel, i) => (
              <tr key={i} className="border-b border-slate-800/50">
                <td className="py-2 text-indigo-400">{rel.source}</td>
                <td className="py-2 text-slate-500 flex items-center"><GitMerge className="w-3 h-3 mr-1" /> {rel.type}</td>
                <td className="py-2 text-emerald-400">{rel.target}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
