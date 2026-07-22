import React from "react";

export function DebtWatchlist({ debtScores }: { debtScores: unknown[] }) {
  if (debtScores.length === 0) return null;

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 mb-10">
      <h2 className="text-xl font-medium text-slate-100 mb-2">Reliability Debt Watchlist</h2>
      <p className="text-slate-400 text-sm mb-6">Services exhibiting chronic instability and rolling rollback density.</p>
      
      <div className="space-y-4">
        {debtScores.map(score => (
          <div key={score.service} className="flex items-center justify-between p-4 bg-slate-950 border border-slate-800 rounded">
            <div>
              <h3 className="text-sm font-medium text-slate-200">{score.service}</h3>
              <p className="text-xs text-slate-500 mt-1">
                {score.metrics.incidentCount} recent incidents • {score.metrics.rollbacks} rollbacks
              </p>
            </div>
            <div className="flex items-center gap-4">
              <span className={`text-xs font-semibold px-2 py-1 rounded ${score.trend === 'ACCELERATING' ? 'bg-rose-950 text-rose-400' : 'bg-slate-800 text-slate-300'}`}>
                {score.trend}
              </span>
              <div className="text-right">
                <div className="text-lg font-mono text-slate-200">{score.debtScore}/100</div>
                <div className="text-[10px] text-slate-500 uppercase tracking-wide">Debt Score</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
