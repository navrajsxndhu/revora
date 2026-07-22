import React from "react";

export function AdaptiveGovernancePanel({ rolloutStrategy }: { rolloutStrategy: any }) {
  if (!rolloutStrategy) return null;

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 mb-6">
      <h2 className="text-xl font-medium text-slate-100 mb-4">Adaptive Rollout Intelligence</h2>
      <div className="p-4 bg-slate-950 border border-slate-800 rounded">
        <div className="flex justify-between items-center mb-4">
          <div className="text-sm font-semibold text-slate-200">Recommended Strategy</div>
          <div className="text-xs px-2 py-1 bg-blue-900/50 text-blue-400 rounded font-bold">{rolloutStrategy.strategy}</div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="text-xs text-slate-500 mb-1">Canary Size</div>
            <div className="text-sm text-slate-300 font-mono">{rolloutStrategy.canarySize}%</div>
          </div>
          <div>
            <div className="text-xs text-slate-500 mb-1">Observation Window</div>
            <div className="text-sm text-slate-300 font-mono">{rolloutStrategy.observationMinutes} min</div>
          </div>
        </div>
      </div>
    </div>
  );
}
