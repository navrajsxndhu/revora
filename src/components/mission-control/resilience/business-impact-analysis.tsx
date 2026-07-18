"use client";

import React from "react";
import { TrendingDown, AlertOctagon } from "lucide-react";

export function BusinessImpactAnalysis() {
  const impacts = [
    { service: "PAYMENTS_API", financial: "HIGH", operational: "CRITICAL", customer: "CRITICAL" },
    { service: "REPORTING_DB", financial: "LOW", operational: "MEDIUM", customer: "LOW" },
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 bg-slate-900/80">
        <h2 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-sans">Business Impact Analysis</h2>
      </div>
      <div className="p-4 flex-1 overflow-auto space-y-3">
        {impacts.map((imp, i) => (
          <div key={i} className="border border-slate-800 bg-slate-950 p-2 rounded">
            <div className="text-xs font-mono text-slate-200 font-bold mb-2 flex items-center">
              <AlertOctagon className="w-3 h-3 mr-2 text-indigo-400" />
              {imp.service}
            </div>
            <div className="grid grid-cols-3 gap-2 text-center text-[9px] font-mono">
              <div className="bg-slate-900 p-1 rounded border border-slate-800">
                <div className="text-slate-500 mb-1">FINANCIAL</div>
                <div className={imp.financial === 'HIGH' ? 'text-rose-400' : 'text-amber-400'}>{imp.financial}</div>
              </div>
              <div className="bg-slate-900 p-1 rounded border border-slate-800">
                <div className="text-slate-500 mb-1">OPERATIONAL</div>
                <div className={imp.operational === 'CRITICAL' ? 'text-rose-500' : 'text-amber-400'}>{imp.operational}</div>
              </div>
              <div className="bg-slate-900 p-1 rounded border border-slate-800">
                <div className="text-slate-500 mb-1">CUSTOMER</div>
                <div className={imp.customer === 'CRITICAL' ? 'text-rose-500' : 'text-slate-400'}>{imp.customer}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
