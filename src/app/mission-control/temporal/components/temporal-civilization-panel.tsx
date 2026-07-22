import React from 'react';

export function TemporalCivilizationPanel({ drift }: { drift: any }) {
  if (!drift) return <p className="text-sm text-zinc-500">No drift data available.</p>;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-6 border border-zinc-800 bg-zinc-900/40 rounded-xl">
      <div>
        <span className="block text-zinc-500 text-xs uppercase tracking-wider mb-2">Drift Score</span>
        <span className="text-3xl font-serif text-rose-400">{drift.driftScore.toFixed(1)}</span>
      </div>
      <div>
        <span className="block text-zinc-500 text-xs uppercase tracking-wider mb-2">Survivability Decay</span>
        <span className="text-xl font-light text-zinc-300 mt-2 block">-{drift.survivabilityDecay.toFixed(1)}/yr</span>
      </div>
      <div>
        <span className="block text-zinc-500 text-xs uppercase tracking-wider mb-2">Governance Erosion</span>
        <span className="text-xl font-light text-zinc-300 mt-2 block">-{drift.governanceErosionRate.toFixed(1)}/yr</span>
      </div>
    </div>
  );
}
