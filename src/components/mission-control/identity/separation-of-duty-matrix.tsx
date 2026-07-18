"use client";

import React, { useEffect, useState } from "react";
import { GitCompare, ShieldAlert } from "lucide-react";

export function SeparationOfDutyMatrix() {
  const [rules, setRules] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/identity/sod")
      .then(res => res.json())
      .then(d => {
        setRules(d.rules || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const data = rules.length > 0 ? rules : [
    { id: "SOD-01", rule: "Dev cannot approve Release", roles: ["Developer", "Release Mgr"], violations: 0 },
    { id: "SOD-02", rule: "SecOps cannot approve Exceptions", roles: ["Security Auditor", "Governance Auth"], violations: 0 },
    { id: "SOD-03", rule: "Finance cannot allocate Budget", roles: ["FinOps Analyst", "Budget Owner"], violations: 2 },
  ];

  if (loading) return <div className="h-full border border-slate-800 bg-slate-900/50 flex items-center justify-center text-slate-500 font-mono text-xs">LOADING SOD...</div>;

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 flex justify-between items-center bg-slate-900/80">
        <div className="flex items-center space-x-2">
          <GitCompare className="w-4 h-4 text-indigo-400" />
          <h2 className="text-sm font-bold text-slate-200 uppercase tracking-wider font-sans">Separation of Duty (SoD)</h2>
        </div>
      </div>
      <div className="flex-1 overflow-auto p-4 space-y-3">
        {data.map(r => (
          <div key={r.id} className={`border rounded p-3 ${r.violations > 0 ? 'border-rose-800/50 bg-rose-950/20' : 'border-slate-800 bg-slate-950'}`}>
            <div className="flex justify-between items-start mb-2">
              <span className="text-[10px] font-mono text-slate-500">{r.id}</span>
              <span className={`text-[10px] font-mono flex items-center ${r.violations > 0 ? 'text-rose-400' : 'text-emerald-400'}`}>
                {r.violations > 0 ? <><ShieldAlert className="w-3 h-3 mr-1" /> {r.violations} Violations</> : '0 Violations'}
              </span>
            </div>
            <div className="text-xs text-slate-200 font-sans font-medium mb-3">{r.rule}</div>
            <div className="flex items-center space-x-2 text-[10px] font-mono">
              <span className="bg-slate-800 text-slate-400 px-1.5 py-0.5 rounded">{r.roles[0]}</span>
              <span className="text-slate-600">!=</span>
              <span className="bg-slate-800 text-slate-400 px-1.5 py-0.5 rounded">{r.roles[1]}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
