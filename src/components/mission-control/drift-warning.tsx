import React from "react";

export function DriftWarning({ driftWarnings }: { driftWarnings: unknown[] }) {
  if (driftWarnings.length === 0) return null;

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 mb-10">
      <h2 className="text-xl font-medium text-slate-100 mb-2">Architectural Drift Forecast</h2>
      <p className="text-slate-400 text-sm mb-6">Deterministic warnings of accelerating blast radii and increasing service coupling.</p>
      
      <div className="space-y-4">
        {driftWarnings.map(warning => (
          <div key={warning.service} className="p-4 bg-amber-950/20 border border-amber-900/50 rounded flex gap-4 items-start">
            <span className="text-amber-500 mt-0.5">⚠️</span>
            <div>
              <h3 className="text-sm font-medium text-amber-500 mb-1">{warning.service}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {warning.warning}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
