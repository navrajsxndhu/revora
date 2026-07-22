import React from "react";

export function ResilienceOptimizerPanel({ recommendation }: { recommendation: unknown }) {
  if (!recommendation) return null;

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 mb-6">
      <h2 className="text-xl font-medium text-slate-100 mb-4">Resilience Optimizer</h2>
      <div className={`p-4 rounded border ${recommendation.status === 'WARNING' ? 'bg-amber-950/30 border-amber-900/50 text-amber-200' : 'bg-emerald-950/30 border-emerald-900/50 text-emerald-200'}`}>
        <div className="text-sm font-semibold mb-1">System State: {recommendation.status}</div>
        <p className="text-sm text-slate-300">{recommendation.action}</p>
      </div>
    </div>
  );
}

export function AutonomousRoutingFeed() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
      <h2 className="text-xl font-medium text-slate-100 mb-4 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse inline-block"></span>
        Nervous System Stream
      </h2>
      <div className="text-sm text-slate-500 italic">
        Listening for topology rebalances, active migrations, and recovery routing changes...
      </div>
    </div>
  );
}
