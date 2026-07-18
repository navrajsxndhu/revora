"use client";

import React, { useEffect, useState } from "react";
import { FileSignature, Clock, AlertTriangle } from "lucide-react";

export function PolicyExceptions() {
  const [exceptions, setExceptions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/governance/exceptions")
      .then(res => res.json())
      .then(d => {
        setExceptions(d.exceptions || []);
        setLoading(false);
      })
      .catch(e => {
        console.error(e);
        setLoading(false);
      });
  }, []);

  const data = exceptions.length > 0 ? exceptions : [
    { id: "EXC-082", policy: "POL-001", justification: "Critical launch constraint", approvedBy: "CTO", expires: "2026-07-15", status: "ACTIVE", impact: "ACCEPTED", expired: false },
    { id: "EXC-083", policy: "POL-014", justification: "Legacy DB migration delay", approvedBy: "CISO", expires: "2026-06-30", status: "EXPIRED", impact: "MITIGATED", expired: true },
    { id: "EXC-084", policy: "POL-003", justification: "Q3 Marketing Campaign", approvedBy: "VP Eng", expires: "2026-08-01", status: "ACTIVE", impact: "ACCEPTED", expired: false },
  ];

  if (loading) {
    return <div className="h-64 border border-slate-800 bg-slate-900/50 flex items-center justify-center text-slate-500 font-mono text-xs">LOADING EXCEPTIONS...</div>;
  }

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-4 border-b border-slate-800 flex justify-between items-center bg-slate-900/80">
        <div className="flex items-center space-x-2">
          <FileSignature className="w-4 h-4 text-indigo-400" />
          <h2 className="text-sm font-bold text-slate-200 uppercase tracking-wider font-sans">Policy Exceptions</h2>
        </div>
      </div>
      <div className="flex-1 overflow-auto p-4 space-y-4">
        {data.map(e => (
          <div key={e.id} className={`border rounded p-3 ${e.expired ? 'border-rose-800/50 bg-rose-950/20' : 'border-slate-800 bg-slate-950'}`}>
            <div className="flex justify-between items-start mb-2">
              <div className="flex items-center space-x-2">
                <span className="text-[10px] font-mono text-amber-400 bg-amber-400/10 px-1 rounded">{e.id}</span>
                <span className="text-[10px] text-slate-400 border border-slate-700 px-1 rounded">{e.policy}</span>
              </div>
              <span className={`text-[10px] flex items-center font-mono ${e.expired ? 'text-rose-400' : 'text-slate-500'}`}>
                {e.expired ? <AlertTriangle className="w-3 h-3 mr-1" /> : <Clock className="w-3 h-3 mr-1" />}
                Exp: {e.expires}
              </span>
            </div>
            <div className="text-xs text-slate-300 font-sans mb-3">{e.justification}</div>
            <div className="flex justify-between items-center text-[10px] font-mono border-t border-slate-800/50 pt-2">
              <span className="text-slate-500">Appr: <span className="text-slate-300">{e.approvedBy}</span></span>
              <span className={`px-1 rounded ${e.impact === 'ACCEPTED' ? 'text-amber-400 bg-amber-400/10' : 'text-emerald-400 bg-emerald-400/10'}`}>
                {e.impact}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
