"use client";

import React from "react";
import { Server, CheckCircle, ShieldAlert } from "lucide-react";

export function ArchitectureDecisions() {
  const adrs = [
    { id: "ADR-001", name: "Transition to Event Sourcing", status: "APPROVED", owner: "CHIEF_ARCHITECT", date: "2026-01-15", impact: "CORE_ORCHESTRATION" },
    { id: "ADR-002", name: "Deprecate Monolithic Gateway", status: "PROPOSED", owner: "PLATFORM_LEAD", date: "2026-07-10", impact: "API_ROUTING" }
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 bg-slate-900/80">
        <h2 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-sans">Architecture Decision Records</h2>
      </div>
      <div className="p-4 flex-1 overflow-auto space-y-3">
        {adrs.map((adr, i) => (
          <div key={i} className="border border-slate-800 bg-slate-950 p-3 rounded">
            <div className="flex justify-between items-center mb-2">
              <span className="text-[10px] text-slate-300 font-mono font-bold flex items-center"><Server className="w-3 h-3 mr-2 text-indigo-400" />{adr.id}: {adr.name}</span>
              <span className={`text-[8px] font-mono px-1 rounded border ${adr.status === 'APPROVED' ? 'border-emerald-900 text-emerald-400 bg-emerald-950/30' : 'border-amber-900 text-amber-400 bg-amber-950/30'}`}>{adr.status}</span>
            </div>
            <div className="text-[9px] text-slate-400 font-mono">Impact: <span className="text-indigo-400">{adr.impact}</span> | Own: {adr.owner} | Date: {adr.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
