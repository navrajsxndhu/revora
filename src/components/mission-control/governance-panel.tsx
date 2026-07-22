import React from "react";

export function GovernancePanel({ events }: { events: unknown[] }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
      <h2 className="text-xl font-medium text-slate-100 mb-6">Governance Audit Trail</h2>
      <div className="space-y-4">
        {events.length === 0 ? (
          <p className="text-sm text-slate-500">No recent governance actions.</p>
        ) : (
          events.map(ev => (
            <div key={ev.id} className="border-b border-slate-800/50 pb-4 last:border-0 last:pb-0">
              <div className="flex justify-between items-start mb-2">
                <span className="text-sm font-semibold text-slate-300">{ev.serviceName}</span>
                <span className="text-xs text-slate-500">{new Date(ev.createdAt).toLocaleString()}</span>
              </div>
              <div className="text-xs font-mono text-indigo-400 mb-1">{ev.actionType}</div>
              <p className="text-xs text-slate-400 leading-relaxed">{ev.reasoning}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
