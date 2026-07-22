import React from "react";

export function MigrationTimeline({ migrations }: { migrations: unknown[] }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 mb-6">
      <h2 className="text-xl font-medium text-slate-100 mb-4">Proactive Load Migrations</h2>
      {migrations.length === 0 ? (
        <p className="text-sm text-slate-500">No migrations recommended or executed.</p>
      ) : (
        <div className="space-y-4">
          {migrations.map(m => (
            <div key={m.id} className="border border-slate-800 bg-slate-950 p-4 rounded relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-indigo-500"></div>
              <div className="flex justify-between items-center mb-2 pl-2">
                <span className="text-sm font-semibold text-slate-200">{m.serviceName}</span>
                <span className="text-xs px-2 py-1 bg-indigo-900/50 text-indigo-300 rounded border border-indigo-800/50">{m.status}</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400 pl-2 mb-2">
                <span className="line-through opacity-70">{m.sourceRegion}</span>
                <span>→</span>
                <span className="text-emerald-400 font-bold">{m.targetRegion}</span>
              </div>
              <p className="text-xs text-slate-500 pl-2">{m.reason}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
