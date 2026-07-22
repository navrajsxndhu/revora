import React from 'react';

export function FutureContinuityGrid({ projections }: { projections: unknown[] }) {
  if (projections.length === 0) return <p className="text-sm text-zinc-500">No projections available.</p>;

  return (
    <>
      {projections.map(proj => (
        <div key={proj.id} className="p-4 bg-zinc-900/30 border border-zinc-800 rounded">
          <div className="flex justify-between items-center mb-4">
            <span className="font-mono text-zinc-200">{proj.projectionHorizon.replace('_', ' ')}</span>
            <span className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded ${
              proj.survivabilityForecast > 70 ? 'bg-emerald-500/10 text-emerald-400' :
              proj.survivabilityForecast > 40 ? 'bg-orange-500/10 text-orange-400' :
              'bg-red-500/10 text-red-400'
            }`}>
              {proj.survivabilityForecast.toFixed(1)}
            </span>
          </div>
          <div className="text-xs text-zinc-500">
            Class: <span className="text-zinc-300">{proj.continuityClass}</span>
          </div>
        </div>
      ))}
    </>
  );
}
