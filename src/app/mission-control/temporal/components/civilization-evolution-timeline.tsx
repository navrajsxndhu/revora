import React from 'react';

export function CivilizationEvolutionTimeline({ records }: { records: any[] }) {
  if (records.length === 0) return <p className="text-sm text-zinc-500">No evolution records.</p>;

  return (
    <div className="relative border-l border-zinc-800 ml-4 pl-6 space-y-6">
      {records.map(record => (
        <div key={record.id} className="relative">
          <div className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-zinc-900 border border-zinc-700" />
          <h3 className="text-sm font-medium text-zinc-200">{record.operationalEpoch}</h3>
          <p className="text-xs text-zinc-500 font-mono mt-1">Recorded: {new Date(record.recordedAt).toLocaleDateString()}</p>
          <div className="mt-3 p-3 bg-zinc-900/40 rounded border border-zinc-800 text-sm space-y-1">
            <div className="flex justify-between">
              <span className="text-zinc-400">Transition</span>
              <span className="text-zinc-200">{record.resilienceTransition}</span>
            </div>
            <div className="flex justify-between mt-2 pt-2 border-t border-zinc-800/50">
              <span className="text-zinc-400">Impact</span>
              <span className={record.survivabilityImpact > 0 ? 'text-emerald-400' : 'text-rose-400'}>
                {record.survivabilityImpact > 0 ? '+' : ''}{record.survivabilityImpact.toFixed(1)}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
