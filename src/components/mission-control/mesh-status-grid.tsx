import React from "react";

export function MeshStatusGrid({ federatedEvents }: { federatedEvents: unknown[] }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
      <h2 className="text-xl font-medium text-slate-100 mb-6">Federated Synchronization Log</h2>
      <div className="space-y-4 max-h-[500px] overflow-y-auto">
        {federatedEvents.length === 0 ? (
          <p className="text-sm text-slate-500">No federated events synced.</p>
        ) : (
          federatedEvents.map(ev => (
            <div key={ev.id} className="pb-4 border-b border-slate-800 last:border-0 last:pb-0">
              <div className="flex justify-between items-start mb-1">
                <span className="text-xs font-semibold text-slate-300">{ev.originRegion}</span>
                <span className="text-xs text-slate-500">{new Date(ev.timestamp).toLocaleString()}</span>
              </div>
              <div className="text-xs font-mono text-blue-400 mb-1">{ev.eventType}</div>
              <p className="text-xs text-slate-400 truncate max-w-full">{ev.payload}</p>
              <div className="text-[10px] text-slate-600 mt-2 font-mono truncate">SIG: {ev.signature}</div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
