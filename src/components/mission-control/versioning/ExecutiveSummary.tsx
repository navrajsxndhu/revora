import React from 'react';
import { Activity, Shield, CheckCircle } from 'lucide-react';

export function ExecutiveSummary() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded p-4 flex flex-col">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-slate-200 text-sm font-semibold flex items-center gap-2">
          <Shield className="w-4 h-4 text-emerald-500" />
          Executive Summary
        </h3>
        <Activity className="w-4 h-4 text-slate-500" />
      </div>
      <div className="text-xs text-slate-400 mt-2">
        Deterministic telemetry online.
      </div>
    </div>
  );
}
