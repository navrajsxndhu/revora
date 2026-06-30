import React from "react";

export function ReliabilityBudgetCard({ budget, state }: { budget: number, state: string }) {
  const getStateStyle = () => {
    switch(state) {
      case 'SAFE': return 'text-emerald-400 bg-emerald-950/30 border-emerald-900/50';
      case 'WATCHLIST': return 'text-amber-400 bg-amber-950/30 border-amber-900/50';
      case 'RESTRICTED': return 'text-orange-400 bg-orange-950/30 border-orange-900/50';
      case 'FROZEN': return 'text-rose-400 bg-rose-950/30 border-rose-900/50';
      default: return 'text-slate-400 bg-slate-800 border-slate-700';
    }
  };

  return (
    <div className={`border rounded-lg p-6 ${getStateStyle()}`}>
      <h3 className="text-sm font-medium uppercase tracking-wider mb-2 opacity-80">Reliability Budget</h3>
      <div className="flex items-end gap-3 mb-2">
        <span className="text-5xl font-light">{budget}</span>
        <span className="text-sm mb-1 opacity-70">/ 100</span>
      </div>
      <div className="text-xs font-semibold uppercase tracking-widest opacity-90">
        Status: {state}
      </div>
    </div>
  );
}
