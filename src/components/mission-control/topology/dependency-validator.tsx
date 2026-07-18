"use client";

import React, { useEffect, useState } from "react";
import { ShieldCheck, ShieldAlert, CheckCircle } from "lucide-react";

export function DependencyValidator() {
  const [validation, setValidation] = useState<any>(null);

  useEffect(() => {
    fetch("/api/topology/simulate") // using simulate logic for validator demo
      .then(() => {
        setValidation({
          status: "COMPLIANT",
          brokenLinks: 0,
          circularDependencies: 0,
          missingOwners: 2,
          warnings: ["'legacy-invoice-pdf' missing active owner", "'k8s-worker-node-04' configuration drift detected"]
        });
      });
  }, []);

  return (
    <div className="bg-slate-900 border border-slate-800 h-full flex flex-col">
      <div className="p-3 border-b border-slate-800 flex justify-between items-center bg-slate-900/80">
        <div className="flex items-center space-x-2">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <h2 className="text-sm font-bold text-slate-200 uppercase tracking-wider font-sans">Dependency Validator</h2>
        </div>
        <span className="text-[9px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-1.5 py-0.5 rounded">COMPLIANT</span>
      </div>
      <div className="flex-1 overflow-auto p-4 flex flex-col justify-center space-y-3">
        <div className="flex items-center space-x-2 text-xs font-mono text-slate-400">
          <CheckCircle className="w-4 h-4 text-emerald-500" /> <span>0 Broken Relationships Detected</span>
        </div>
        <div className="flex items-center space-x-2 text-xs font-mono text-slate-400">
          <CheckCircle className="w-4 h-4 text-emerald-500" /> <span>0 Circular Dependencies Detected</span>
        </div>
        {validation?.warnings.map((w: string, i: number) => (
          <div key={i} className="flex items-start space-x-2 text-[10px] font-mono text-amber-400/80 bg-amber-950/20 p-2 border border-amber-900/30 rounded">
            <ShieldAlert className="w-3 h-3 mt-0.5 flex-shrink-0" />
            <span>{w}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
