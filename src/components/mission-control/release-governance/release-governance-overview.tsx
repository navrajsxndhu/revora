"use client";
import React from "react";
import { Activity, Shield, CheckCircle, Clock } from "lucide-react";

export function ReleaseGovernanceOverview() {
  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="bg-slate-900 border border-slate-800 p-4 flex items-center justify-between">
        <div>
          <div className="text-[10px] text-slate-500 font-mono mb-1">ENTERPRISE RELEASE INDEX</div>
          <div className="text-xl font-bold text-emerald-400 font-mono">99.9</div>
        </div>
        <Activity className="text-emerald-500 w-6 h-6" />
      </div>
      <div className="bg-slate-900 border border-slate-800 p-4 flex items-center justify-between">
        <div>
          <div className="text-[10px] text-slate-500 font-mono mb-1">PRODUCTION DEPLOYMENTS</div>
          <div className="text-xl font-bold text-slate-200 font-mono">142</div>
        </div>
        <CheckCircle className="text-indigo-400 w-6 h-6" />
      </div>
      <div className="bg-slate-900 border border-slate-800 p-4 flex items-center justify-between">
        <div>
          <div className="text-[10px] text-slate-500 font-mono mb-1">PENDING APPROVALS</div>
          <div className="text-xl font-bold text-slate-200 font-mono">3</div>
        </div>
        <Clock className="text-amber-500 w-6 h-6" />
      </div>
      <div className="bg-slate-900 border border-slate-800 p-4 flex items-center justify-between">
        <div>
          <div className="text-[10px] text-slate-500 font-mono mb-1">VALIDATION COVERAGE</div>
          <div className="text-xl font-bold text-emerald-400 font-mono">100%</div>
        </div>
        <Shield className="text-emerald-500 w-6 h-6" />
      </div>
    </div>
  );
}
