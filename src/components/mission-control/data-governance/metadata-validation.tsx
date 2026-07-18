"use client";

import React from "react";
import { ShieldAlert, CheckCircle, XCircle } from "lucide-react";

export function MetadataValidation() {
  const validations = [
    { rule: "Governance Validation", passed: true },
    { rule: "Security Validation", passed: true },
    { rule: "Identity Validation", passed: true },
    { rule: "Lineage Validation", passed: false },
    { rule: "Quality Validation", passed: true }
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 bg-slate-900/80">
        <h2 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-sans">Metadata Validation</h2>
      </div>
      <div className="p-4 flex-1 overflow-auto space-y-2">
        {validations.map((v, i) => (
          <div key={i} className="flex items-center p-2 border border-slate-800 bg-slate-950 rounded">
            {v.passed ? <CheckCircle className="w-4 h-4 text-emerald-500 mr-3" /> : <XCircle className="w-4 h-4 text-rose-500 mr-3" />}
            <div className={`text-[10px] font-mono font-bold ${v.passed ? 'text-slate-300' : 'text-rose-400'}`}>{v.rule}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
