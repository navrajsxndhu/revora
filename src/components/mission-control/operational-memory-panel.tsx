import React from "react";
import { HistoricalInsight } from "@/lib/benchmarks/operational-memory";

export function OperationalMemoryPanel({ insights }: { insights: HistoricalInsight | null }) {
  if (!insights || insights.previousOccurrences === 0) {
    return (
      <div className="bg-slate-900 border border-slate-800 p-5 rounded-lg">
        <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">Operational Memory</h3>
        <p className="text-sm text-slate-500 italic">No historical matching incidents found for this signature.</p>
      </div>
    );
  }

  return (
    <div className="bg-blue-950/20 border border-blue-900/40 p-5 rounded-lg">
      <div className="flex items-center space-x-2 mb-4">
        <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        <h3 className="text-sm font-bold text-blue-300 uppercase tracking-wider">Operational Memory</h3>
      </div>
      
      <div className="space-y-4 text-sm">
        <p className="text-slate-300">
          This failure pattern has occurred <span className="font-bold text-slate-100">{insights.previousOccurrences} times</span> previously.
        </p>

        <div className="grid grid-cols-2 gap-4 pt-2">
          <div className="bg-slate-900/50 p-3 rounded border border-slate-800/50">
            <span className="block text-[10px] text-slate-500 uppercase tracking-wider mb-1">Historical MTTR</span>
            <span className="text-lg font-mono text-slate-200">{insights.averageRecoveryTime}m</span>
          </div>
          <div className="bg-slate-900/50 p-3 rounded border border-slate-800/50">
            <span className="block text-[10px] text-slate-500 uppercase tracking-wider mb-1">Rollback Risk</span>
            <span className={`text-sm font-bold mt-1 block ${insights.rollbackTypicallyRequired ? 'text-red-400' : 'text-emerald-400'}`}>
              {insights.rollbackTypicallyRequired ? 'HIGH' : 'LOW'}
            </span>
          </div>
        </div>

        {insights.mostSuccessfulAction && (
          <div className="pt-2">
            <span className="block text-[10px] text-slate-500 uppercase tracking-wider mb-1">Historically Successful Action</span>
            <p className="text-emerald-400 bg-emerald-950/30 p-2 rounded text-xs border border-emerald-900/30">
              {insights.mostSuccessfulAction}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
