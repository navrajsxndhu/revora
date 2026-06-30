import React from "react";

export function ReliabilityDNACard({ dna }: { dna: any }) {
  if (!dna) return null;

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 mb-6">
      <h2 className="text-xl font-medium text-slate-100 mb-4">Reliability DNA</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-slate-950 border border-slate-800 rounded">
          <div className="text-xs text-slate-500 mb-1">MTTR Trend</div>
          <div className="text-xl text-slate-200">{dna.mttrTrend.toFixed(2)} min</div>
        </div>
        <div className="p-4 bg-slate-950 border border-slate-800 rounded">
          <div className="text-xs text-slate-500 mb-1">Rollback Acceleration</div>
          <div className="text-xl text-slate-200">{(dna.rollbackAcceleration * 100).toFixed(1)}%</div>
        </div>
        <div className="p-4 bg-slate-950 border border-slate-800 rounded">
          <div className="text-xs text-slate-500 mb-1">Blast Radius Growth</div>
          <div className="text-xl text-slate-200">{dna.blastRadiusGrowth.toFixed(2)}x</div>
        </div>
        <div className="p-4 bg-slate-950 border border-slate-800 rounded flex flex-col justify-center items-center">
          <div className="text-xs text-slate-500 mb-2">Tier</div>
          <div className={`text-sm px-3 py-1 rounded font-bold ${
            dna.reliabilityTier === 'STABLE' ? 'bg-emerald-900/50 text-emerald-400' :
            dna.reliabilityTier === 'CRITICAL' ? 'bg-rose-900/50 text-rose-400' :
            'bg-amber-900/50 text-amber-400'
          }`}>{dna.reliabilityTier}</div>
        </div>
      </div>
    </div>
  );
}
