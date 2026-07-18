"use client";

import React from "react";
import { Share2 } from "lucide-react";

export function KnowledgeGraph() {
  const relationships = [
    { source: "INC-2044", target: "RB-Failover-v2", type: "MITIGATION_RUNBOOK" },
    { source: "PF-CLOUD", target: "CAP-Core-Computing", type: "BUSINESS_CAPABILITY" },
    { source: "CHG-9901", target: "DEC-110", type: "GOVERNED_BY" }
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 bg-slate-900/80">
        <h2 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-sans">Knowledge Graph Relationships</h2>
      </div>
      <div className="p-4 flex-1 overflow-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-800 text-[9px] font-mono text-slate-500 uppercase">
              <th className="pb-2">Source Node</th>
              <th className="pb-2">Relationship Type</th>
              <th className="pb-2">Target Node</th>
            </tr>
          </thead>
          <tbody className="text-[9px] font-mono text-slate-300">
            {relationships.map((rel, i) => (
              <tr key={i} className="border-b border-slate-800/50">
                <td className="py-2 text-indigo-400">{rel.source}</td>
                <td className="py-2 text-slate-500 flex items-center"><Share2 className="w-3 h-3 mr-1" /> {rel.type}</td>
                <td className="py-2 text-emerald-400">{rel.target}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
