"use client";

import React from "react";
import { CheckCircle, Clock } from "lucide-react";

export function StrategicInitiatives() {
  const initiatives = [
    { id: "INIT-801", name: "Multi-Region DB Failover", capability: "RESILIENCE", status: "EXECUTING", capacity: "RESERVED", gov: "APPROVED" },
    { id: "INIT-802", name: "OIDC Federation", capability: "IDENTITY", status: "PLANNING", capacity: "PENDING", gov: "REVIEW" },
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 bg-slate-900/80">
        <h2 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-sans">Strategic Initiatives</h2>
      </div>
      <div className="p-4 flex-1 overflow-auto space-y-3">
        {initiatives.map((init, i) => (
          <div key={i} className="border-b border-slate-800 pb-3">
            <div className="flex justify-between items-center mb-1">
              <span className="text-[10px] font-mono text-indigo-400 font-bold">{init.id}: {init.name}</span>
              <span className="text-[9px] font-mono text-slate-400 border border-slate-700 px-1 rounded">{init.capability}</span>
            </div>
            <div className="flex justify-between items-center mt-2">
              <div className="flex space-x-2">
                <span className={`text-[9px] font-mono flex items-center ${init.capacity === 'RESERVED' ? 'text-emerald-400' : 'text-amber-400'}`}>
                  CAP: {init.capacity}
                </span>
                <span className="text-slate-600 text-[9px] font-mono">|</span>
                <span className={`text-[9px] font-mono flex items-center ${init.gov === 'APPROVED' ? 'text-emerald-400' : 'text-amber-400'}`}>
                  GOV: {init.gov}
                </span>
              </div>
              <span className="text-[9px] flex items-center text-slate-300 font-mono font-bold">
                {init.status === 'EXECUTING' ? <Activity className="w-3 h-3 mr-1 text-emerald-400" /> : <Clock className="w-3 h-3 mr-1 text-amber-400" />} {init.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Ensure Activity icon is imported
import { Activity } from "lucide-react";
