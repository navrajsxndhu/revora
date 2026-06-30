import React from "react";

export function GlobalTrends({ mttrMinutes, recoverySuccessRate, status }: { mttrMinutes: number, recoverySuccessRate: number, status: string }) {
  if (status === 'INSUFFICIENT_DATA') {
    return (
      <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 text-slate-400 text-sm">
        Insufficient global workspace data to generate deterministic benchmarks. Privacy isolation rules enforced.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-6 mb-10">
      <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
        <h3 className="text-slate-400 text-sm mb-2">Global Median MTTR</h3>
        <div className="text-3xl font-light text-slate-100">{mttrMinutes}m</div>
        <p className="text-xs text-slate-500 mt-2">Across all benchmarked workspaces</p>
      </div>
      <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
        <h3 className="text-slate-400 text-sm mb-2">Global Recovery Success</h3>
        <div className="text-3xl font-light text-slate-100">{recoverySuccessRate}%</div>
        <p className="text-xs text-slate-500 mt-2">Automated orchestration success rate</p>
      </div>
    </div>
  );
}
