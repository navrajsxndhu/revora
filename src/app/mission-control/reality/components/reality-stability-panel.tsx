import React from 'react';

export function RealityStabilityPanel() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 border border-zinc-800 bg-zinc-900/40 rounded-xl">
      <div>
        <span className="block text-zinc-500 text-xs uppercase tracking-wider mb-2">Reality Score</span>
        <span className="text-3xl font-serif text-emerald-400">92.4</span>
      </div>
      <div>
        <span className="block text-zinc-500 text-xs uppercase tracking-wider mb-2">Continuity</span>
        <span className="text-xl font-light text-zinc-300 mt-2 block">PLANETARY</span>
      </div>
      <div>
        <span className="block text-zinc-500 text-xs uppercase tracking-wider mb-2">Grid Health</span>
        <span className="text-3xl font-light text-blue-400">Stable</span>
      </div>
      <div>
        <span className="block text-zinc-500 text-xs uppercase tracking-wider mb-2">Climate Risk</span>
        <span className="text-3xl font-light text-rose-400">Elevated</span>
      </div>
    </div>
  );
}
