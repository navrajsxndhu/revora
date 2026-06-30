import React from "react";

export function RegionalPressureGrid({ regions }: { regions: any[] }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 mb-6">
      <h2 className="text-xl font-medium text-slate-100 mb-4">Regional Pressure Forecast</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {regions.length === 0 ? (
          <p className="text-sm text-slate-500">No regional telemetry available.</p>
        ) : (
          regions.map(r => (
            <div key={r.region} className={`border rounded p-4 ${r.stressScore > 80 ? 'border-rose-900/50 bg-rose-950/20' : r.stressScore > 50 ? 'border-amber-900/50 bg-amber-950/20' : 'border-emerald-900/50 bg-emerald-950/20'}`}>
              <div className="text-sm font-semibold mb-2 font-mono tracking-tight text-slate-200">{r.region}</div>
              <div className="text-3xl font-light mb-2 text-slate-300">{Math.round(r.stressScore)}<span className="text-sm text-slate-500">/100</span></div>
              {r.predictedSaturation && (
                <div className="text-xs text-rose-400 font-mono mt-2 pt-2 border-t border-slate-800">
                  Saturation at: {new Date(r.predictedSaturation).toLocaleTimeString()}
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
