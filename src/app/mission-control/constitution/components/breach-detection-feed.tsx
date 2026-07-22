import React from 'react';

export function BreachDetectionFeed({ breaches }: { breaches: unknown[] }) {
  return (
    <div className="space-y-3">
      {breaches.map(breach => (
        <div key={breach.id} className="p-4 rounded-lg border border-red-900/30 bg-red-950/10 flex flex-col space-y-2">
          <div className="flex justify-between items-start">
            <h4 className="text-sm font-mono text-zinc-200">{breach.violationType}</h4>
            <span className="text-[10px] uppercase font-bold tracking-wider text-rose-500 bg-rose-950/50 px-2 py-0.5 rounded">
              {breach.severity}
            </span>
          </div>
          <p className="text-xs text-zinc-400">{breach.governanceContext}</p>
          <div className="text-xs text-zinc-500 pt-2 border-t border-red-900/20">
            Impact: {breach.operationalImpact}
          </div>
        </div>
      ))}
    </div>
  );
}
