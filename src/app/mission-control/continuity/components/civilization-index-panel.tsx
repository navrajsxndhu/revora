import React from 'react';

export function CivilizationIndexPanel({ snapshot }: { snapshot: any }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 border border-zinc-800 bg-zinc-900/40 rounded-xl">
      <div>
        <span className="block text-zinc-500 text-xs uppercase tracking-wider mb-2">Civilization Score</span>
        <span className="text-3xl font-serif text-zinc-100">{snapshot.civilizationIndex.toFixed(1)}</span>
      </div>
      <div>
        <span className="block text-zinc-500 text-xs uppercase tracking-wider mb-2">Continuity Class</span>
        <span className="text-xl font-light text-blue-400 mt-2 block">{snapshot.continuityClass}</span>
      </div>
      <div>
        <span className="block text-zinc-500 text-xs uppercase tracking-wider mb-2">Survivability Horizon</span>
        <span className="text-3xl font-light text-emerald-400">{snapshot.survivabilityHorizon}</span>
      </div>
      <div>
        <span className="block text-zinc-500 text-xs uppercase tracking-wider mb-2">Inst. Stability</span>
        <span className="text-3xl font-light text-zinc-300">{snapshot.institutionalStability.toFixed(1)}%</span>
      </div>
    </div>
  );
}
