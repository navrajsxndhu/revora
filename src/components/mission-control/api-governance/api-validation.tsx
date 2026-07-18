"use client";

import React from "react";
import { CheckCircle } from "lucide-react";

export function ApiValidation() {
  const validations = [
    { rule: "Identity Validation", passed: true },
    { rule: "Security Validation", passed: true },
    { rule: "Contract Validation", passed: true },
    { rule: "Schema Validation", passed: true }
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 bg-slate-900/80">
        <h2 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-sans">API Validation</h2>
      </div>
      <div className="p-4 flex-1 overflow-auto space-y-2">
        {validations.map((v, i) => (
          <div key={i} className="flex items-center p-2 border border-slate-800 bg-slate-950 rounded">
            <CheckCircle className="w-4 h-4 text-emerald-500 mr-3" />
            <div className="text-[10px] font-mono font-bold text-slate-300">{v.rule}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
