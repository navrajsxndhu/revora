import React from "react";

export function OperationsTimeline({ events }: { events: unknown[] }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
      <h2 className="text-xl font-medium text-slate-100 mb-6">Unified Operations Timeline</h2>
      <div className="space-y-4">
        {events.length === 0 ? (
          <p className="text-sm text-slate-500">No operational history available.</p>
        ) : (
          events.map(ev => (
            <div key={ev.id} className="relative pl-6 pb-4 border-l border-slate-800 last:border-0 last:pb-0">
              <span className="absolute left-[-5px] top-1 w-2.5 h-2.5 rounded-full bg-slate-600"></span>
              <div className="flex justify-between items-start mb-1">
                <span className="text-xs font-mono text-indigo-400">{ev.type}</span>
                <span className="text-xs text-slate-500">{new Date(ev.timestamp).toLocaleString()}</span>
              </div>
              <p className="text-sm text-slate-300">{ev.message}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
