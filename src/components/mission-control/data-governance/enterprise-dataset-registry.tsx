"use client";

import React from "react";
import { Database, CheckCircle } from "lucide-react";

export function EnterpriseDatasetRegistry() {
  const datasets = [
    { name: "Global Customer Profile", domain: "CUSTOMER", owner: "Chief Data Officer", class: "CONFIDENTIAL", status: "GOVERNED" },
    { name: "Transaction Ledger (EU)", domain: "FINANCE", owner: "VP Finance", class: "REGULATED", status: "GOVERNED" },
    { name: "Marketing Campaign Analytics", domain: "MARKETING", owner: "Marketing Analytics Lead", class: "INTERNAL", status: "PENDING_REVIEW" }
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 bg-slate-900/80">
        <h2 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-sans">Enterprise Dataset Registry</h2>
      </div>
      <div className="p-4 flex-1 overflow-auto space-y-3">
        {datasets.map((ds, i) => (
          <div key={i} className="border border-slate-800 bg-slate-950 p-3 rounded">
            <div className="flex justify-between items-center mb-2">
              <div className="text-xs text-slate-200 font-mono font-bold flex items-center"><Database className="w-3 h-3 text-indigo-400 mr-2" />{ds.name}</div>
              <div className={`text-[9px] font-mono border rounded px-1 ${ds.status === 'GOVERNED' ? 'border-emerald-900 text-emerald-400 bg-emerald-950/30' : 'border-amber-900 text-amber-400 bg-amber-950/30'}`}>
                {ds.status}
              </div>
            </div>
            <div className="flex justify-between items-center text-[9px] font-mono text-slate-400">
              <div>DOM: <span className="text-slate-300">{ds.domain}</span> | OWN: {ds.owner}</div>
              <div>CLS: {ds.class}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
