"use client";

import React from "react";
import { Gauge } from "lucide-react";

export function TelemetryRegistry() {
  const telemetry = [
    { source: "Payment Gateway", component: "PostgreSQL Database", owner: "Core Finance", health: "HEALTHY", validation: "PASSED" },
    { source: "Identity Service", component: "Redis Cache", owner: "Security Team", health: "HEALTHY", validation: "PASSED" }
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 bg-slate-900/80">
        <h2 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-sans">Telemetry Registry</h2>
      </div>
      <div className="p-4 flex-1 overflow-auto space-y-3">
        {telemetry.map((tel, i) => (
          <div key={i} className="border border-slate-800 bg-slate-950 p-3 rounded">
            <div className="flex justify-between items-center mb-2">
              <div className="text-xs text-slate-200 font-mono font-bold flex items-center"><Gauge className="w-3 h-3 text-indigo-400 mr-2" />{tel.source}</div>
              <div className="text-[9px] font-mono border rounded px-1 border-emerald-900 text-emerald-400 bg-emerald-950/30">
                {tel.health}
              </div>
            </div>
            <div className="text-[9px] font-mono text-slate-400">
              COMP: {tel.component} <br />
              OWNR: {tel.owner} <br />
              VLDN: {tel.validation}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
