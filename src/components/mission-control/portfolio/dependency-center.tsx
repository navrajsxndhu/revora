"use client";

import React from "react";
import { Link, ShieldAlert } from "lucide-react";

export function DependencyCenter() {
  const deps = [
    { from: "INIT-801: Multi-Region DB", to: "INIT-405: NetMesh Topology", type: "BLOCKING", status: "RESOLVED" },
    { from: "INIT-802: OIDC Federation", to: "INIT-502: Legacy IAM Deprecation", type: "FINISH_TO_START", status: "PENDING" },
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 bg-slate-900/80">
        <h2 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-sans">Strategic Dependencies</h2>
      </div>
      <div className="p-4 flex-1 overflow-auto space-y-3">
        {deps.map((d, i) => (
          <div key={i} className="border border-slate-800 bg-slate-950 p-2.5 rounded">
            <div className="flex justify-between items-center mb-2">
              <span className={`text-[8px] font-mono px-1 rounded border ${d.type === 'BLOCKING' ? 'border-amber-900 text-amber-400' : 'border-indigo-900 text-indigo-400'}`}>{d.type}</span>
              <span className={`text-[8px] font-mono ${d.status === 'RESOLVED' ? 'text-emerald-400' : 'text-slate-400'}`}>{d.status}</span>
            </div>
            <div className="flex flex-col space-y-1">
              <div className="text-[9px] font-mono text-slate-300 font-bold truncate"><span className="text-slate-500 mr-1">FROM:</span> {d.from}</div>
              <div className="pl-4 flex items-center">
                <Link className="w-3 h-3 text-slate-600 mr-1" />
                <div className="text-[9px] font-mono text-slate-300 font-bold truncate"><span className="text-slate-500 mr-1">TO:</span> {d.to}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
