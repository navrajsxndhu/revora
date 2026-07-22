import React from "react";

export function RegionalHealthGrid({ regions }: { regions: unknown[] }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 mb-6">
      <h2 className="text-xl font-medium text-slate-100 mb-4">Regional Infrastructure Health</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {regions.length === 0 ? (
          <p className="text-sm text-slate-500">No regional data tracked.</p>
        ) : (
          regions.map(r => (
            <div key={r.region} className={`border rounded p-4 ${r.overallState === 'HEALTHY' ? 'border-emerald-900/50 bg-emerald-950/20' : r.overallState === 'FAILING' ? 'border-rose-900/50 bg-rose-950/20' : 'border-amber-900/50 bg-amber-950/20'}`}>
              <div className="text-sm font-semibold mb-2 font-mono tracking-tight text-slate-200">{r.region}</div>
              <div className="flex gap-3 text-xs">
                <span className="text-emerald-400">H: {r.healthy}</span>
                <span className="text-amber-400">D: {r.degraded}</span>
                <span className="text-rose-400">F: {r.failing}</span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
