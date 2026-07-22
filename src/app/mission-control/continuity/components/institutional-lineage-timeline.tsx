import React from 'react';

export function InstitutionalLineageTimeline({ lineages }: { lineages: unknown[] }) {
  return (
    <div className="relative border-l border-zinc-800 ml-4 pl-6 space-y-6">
      {lineages.map((lineage, idx) => (
        <div key={lineage.id} className="relative">
          <div className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-zinc-900 border border-zinc-700" />
          <h3 className="text-lg font-medium text-zinc-200">{lineage.operationalEra}</h3>
          <p className="text-xs text-zinc-500 font-mono mt-1">Recorded: {new Date(lineage.recordedAt).toLocaleDateString()}</p>
          <div className="mt-3 p-4 bg-zinc-900/40 rounded border border-zinc-800 text-sm space-y-2">
            <div className="flex justify-between">
              <span className="text-zinc-400">Resilience Score</span>
              <span className="text-emerald-400">{lineage.resilienceScore.toFixed(1)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-400">Treasury Survivability</span>
              <span className="text-blue-400">{(lineage.treasurySurvivability * 100).toFixed(1)}%</span>
            </div>
            <div className="pt-2 border-t border-zinc-800/50 text-zinc-300">
              Pattern: {lineage.governancePattern}
            </div>
          </div>
        </div>
      ))}
      {lineages.length === 0 && <p className="text-sm text-zinc-500">No operational lineage recorded.</p>}
    </div>
  );
}
