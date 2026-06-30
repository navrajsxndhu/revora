import React from "react";

export function EvolutionTimeline({ events }: { events: any[] }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 mb-6">
      <h2 className="text-xl font-medium text-slate-100 mb-4">Governance Learning Timeline</h2>
      {events.length === 0 ? (
        <p className="text-sm text-slate-500">No learning events recorded yet.</p>
      ) : (
        <div className="space-y-4 max-h-[400px] overflow-y-auto">
          {events.map((ev, i) => (
            <div key={ev.id} className="relative pl-6 pb-4 border-l border-slate-700 last:border-0 last:pb-0">
              <div className="absolute left-[-5px] top-1 w-2.5 h-2.5 rounded-full bg-blue-500 ring-4 ring-slate-900"></div>
              <div className="text-sm font-semibold text-slate-200 mb-1">{ev.policyType}</div>
              <div className="flex gap-2 text-xs font-mono text-slate-400 mb-2">
                <span>{ev.previousValue.toFixed(2)}</span>
                <span>→</span>
                <span className="text-blue-400">{ev.newValue.toFixed(2)}</span>
              </div>
              <p className="text-xs text-slate-500 mb-2">{ev.reason}</p>
              <div className="text-[10px] text-slate-600 font-mono">
                Confidence: {(ev.confidenceScore * 100).toFixed(0)}%
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
