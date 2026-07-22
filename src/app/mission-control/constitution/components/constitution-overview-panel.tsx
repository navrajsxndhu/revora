import React from 'react';

export function ConstitutionOverviewPanel({ constitution }: { constitution: unknown }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 border border-zinc-800 bg-zinc-900/40 rounded-xl">
      <div>
        <span className="block text-zinc-500 text-xs uppercase tracking-wider mb-2">Version</span>
        <span className="text-3xl font-light text-zinc-300">v{constitution.constitutionVersion}</span>
      </div>
      <div>
        <span className="block text-zinc-500 text-xs uppercase tracking-wider mb-2">Stability Score</span>
        <span className="text-3xl font-light text-emerald-400">{constitution.constitutionalStabilityScore.toFixed(1)}</span>
      </div>
      <div>
        <span className="block text-zinc-500 text-xs uppercase tracking-wider mb-2">Treasury Protection</span>
        <span className="text-xl font-light text-zinc-300 mt-2 block">{constitution.treasuryProtectionLevel}</span>
      </div>
      <div>
        <span className="block text-zinc-500 text-xs uppercase tracking-wider mb-2">Active Amendments</span>
        <span className="text-3xl font-light text-blue-400">{constitution.activeAmendmentCount}</span>
      </div>
    </div>
  );
}
