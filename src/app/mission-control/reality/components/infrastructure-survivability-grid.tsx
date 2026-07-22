import React from 'react';

export function InfrastructureSurvivabilityGrid({ snapshots }: { snapshots: any[] }) {
  if (snapshots.length === 0) return <p className="text-sm text-zinc-500">No infrastructure data available.</p>;

  return (
    <>
      {snapshots.map(snapshot => (
        <div key={snapshot.id} className="p-4 bg-zinc-900/30 border border-zinc-800 rounded">
          <div className="flex justify-between items-center mb-4">
            <span className="font-mono text-zinc-200">{snapshot.region}</span>
            <span className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded ${
              snapshot.survivabilityScore > 80 ? 'bg-emerald-500/10 text-emerald-400' :
              snapshot.survivabilityScore > 50 ? 'bg-orange-500/10 text-orange-400' :
              'bg-red-500/10 text-red-400'
            }`}>
              {snapshot.survivabilityScore.toFixed(1)}
            </span>
          </div>
          <div className="space-y-2 text-xs">
            <div className="flex justify-between text-zinc-400">
              <span>Energy Reliability</span>
              <span>{snapshot.energyReliability.toFixed(1)}%</span>
            </div>
            <div className="flex justify-between text-zinc-400">
              <span>Concentration Risk</span>
              <span>{snapshot.infrastructureConcentration.toFixed(1)}%</span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
