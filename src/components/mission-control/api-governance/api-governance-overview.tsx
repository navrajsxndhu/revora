"use client";

import React from "react";
import { Link2, ShieldCheck, FileCheck, CheckCircle } from "lucide-react";

export function ApiGovernanceOverview() {
  return (
    <div className="grid grid-cols-5 gap-4">
      <div className="bg-slate-900 border border-slate-800 p-4 rounded flex items-center justify-between">
        <div>
          <div className="text-[10px] text-slate-500 font-mono mb-1">API INDEX</div>
          <div className="text-xl font-bold text-emerald-400 font-mono">99.2</div>
        </div>
        <Link2 className="text-emerald-500 w-6 h-6" />
      </div>
      <div className="bg-slate-900 border border-slate-800 p-4 rounded flex items-center justify-between">
        <div>
          <div className="text-[10px] text-slate-500 font-mono mb-1">REGISTERED APIS</div>
          <div className="text-xl font-bold text-slate-200 font-mono">314</div>
        </div>
        <Link2 className="text-slate-500 w-6 h-6" />
      </div>
      <div className="bg-slate-900 border border-slate-800 p-4 rounded flex items-center justify-between">
        <div>
          <div className="text-[10px] text-slate-500 font-mono mb-1">CONTRACT COMPLIANCE</div>
          <div className="text-xl font-bold text-indigo-400 font-mono">99%</div>
        </div>
        <FileCheck className="text-indigo-500 w-6 h-6" />
      </div>
      <div className="bg-slate-900 border border-slate-800 p-4 rounded flex items-center justify-between">
        <div>
          <div className="text-[10px] text-slate-500 font-mono mb-1">AUTH COVERAGE</div>
          <div className="text-xl font-bold text-emerald-400 font-mono">100%</div>
        </div>
        <ShieldCheck className="text-emerald-500 w-6 h-6" />
      </div>
      <div className="bg-slate-900 border border-slate-800 p-4 rounded flex items-center justify-between">
        <div>
          <div className="text-[10px] text-slate-500 font-mono mb-1">POLICY COMPLIANCE</div>
          <div className="text-xl font-bold text-emerald-400 font-mono">100%</div>
        </div>
        <CheckCircle className="text-emerald-500 w-6 h-6" />
      </div>
    </div>
  );
}
