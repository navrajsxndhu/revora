"use client";

import React from "react";
import { Activity, ShieldAlert, CheckCircle } from "lucide-react";

export function QualityCenter() {
  const quality = [
    { dataset: "Global Customer Profile", score: 99.9, failed: 0, status: "PASS" },
    { dataset: "Transaction Ledger (EU)", score: 92.5, failed: 12, status: "WARN" }
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 bg-slate-900/80">
        <h2 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-sans">Data Quality Center</h2>
      </div>
      <div className="p-4 flex-1 overflow-auto space-y-3">
        {quality.map((q, i) => (
          <div key={i} className="border border-slate-800 bg-slate-950 p-3 rounded flex justify-between items-center">
            <div>
              <div className="text-[10px] text-slate-300 font-mono font-bold flex items-center mb-1"><Activity className="w-3 h-3 mr-2 text-indigo-400" />{q.dataset}</div>
              <div className="text-[9px] text-slate-500 font-mono">Failed Checks: {q.failed}</div>
            </div>
            <div className="text-right">
              <div className={`text-[10px] font-mono font-bold mb-1 ${q.score > 98 ? 'text-emerald-400' : 'text-amber-400'}`}>{q.score}%</div>
              <div className={`text-[8px] font-mono flex items-center justify-end ${q.status === 'PASS' ? 'text-emerald-500' : 'text-amber-500'}`}>
                {q.status === 'PASS' ? <CheckCircle className="w-3 h-3 mr-1" /> : <ShieldAlert className="w-3 h-3 mr-1" />}{q.status}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
