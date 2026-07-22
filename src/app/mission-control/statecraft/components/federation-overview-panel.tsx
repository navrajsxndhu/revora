import React from 'react';

export function FederationOverviewPanel({ federation }: { federation: any }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 border border-zinc-800 bg-zinc-900/40 rounded-xl">
      <div>
        <span className="block text-zinc-500 text-xs uppercase tracking-wider mb-2">Federation</span>
        <span className="text-xl font-serif text-zinc-100">{federation.federationName}</span>
      </div>
      <div>
        <span className="block text-zinc-500 text-xs uppercase tracking-wider mb-2">Stability</span>
        <span className="text-3xl font-light text-emerald-400">{federation.federationStability.toFixed(1)}</span>
      </div>
      <div>
        <span className="block text-zinc-500 text-xs uppercase tracking-wider mb-2">Treasury Mode</span>
        <span className="text-sm font-mono text-zinc-300 mt-3 block">{federation.treasuryCoordinationLevel}</span>
      </div>
      <div>
        <span className="block text-zinc-500 text-xs uppercase tracking-wider mb-2">Active Treaties</span>
        <span className="text-3xl font-light text-blue-400">{federation.treatyCount}</span>
      </div>
    </div>
  );
}
