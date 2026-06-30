import React from 'react';

export function GovernanceEntropyChart({ snapshots }: { snapshots: any[] }) {
  if (snapshots.length === 0) return <p className="text-sm text-zinc-500">No entropy history available.</p>;

  return (
    <div className="space-y-4">
      {snapshots.map(snapshot => (
        <div key={snapshot.id} className="flex justify-between items-center text-sm border-b border-zinc-800/50 pb-2">
          <div className="font-mono text-zinc-400">
            {new Date(snapshot.capturedAt).toLocaleDateString()}
          </div>
          <div className="flex items-center space-x-4">
            <span className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded ${
              snapshot.governanceDrift === 'ENTROPIC' ? 'bg-red-500/10 text-red-400' :
              snapshot.governanceDrift === 'STABLE' ? 'bg-emerald-500/10 text-emerald-400' :
              'bg-zinc-800 text-zinc-300'
            }`}>
              {snapshot.governanceDrift}
            </span>
            <div className="w-32 bg-zinc-800 h-2 rounded-full overflow-hidden">
              <div 
                className={`h-full ${snapshot.entropyScore > 50 ? 'bg-rose-500' : 'bg-emerald-500'}`} 
                style={{ width: `${snapshot.entropyScore}%` }} 
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
