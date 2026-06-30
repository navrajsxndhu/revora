'use client';
import React, { useState } from "react";

export function RollbackPropagation({ rollbacks, onManualTrigger }: { rollbacks: any[], onManualTrigger: () => void }) {
  const [loading, setLoading] = useState(false);

  const trigger = async () => {
    setLoading(true);
    await onManualTrigger();
    setLoading(false);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-medium text-slate-100">Global Rollback Coordination</h2>
        <button onClick={trigger} disabled={loading} className="text-xs bg-rose-600 hover:bg-rose-500 text-white px-3 py-1.5 rounded transition-colors disabled:opacity-50">
          {loading ? "Triggering..." : "Manual Global Rollback"}
        </button>
      </div>
      <div className="space-y-4">
        {rollbacks.length === 0 ? (
          <p className="text-sm text-slate-500">No active global rollbacks.</p>
        ) : (
          rollbacks.map(r => (
            <div key={r.id} className="border border-slate-800 bg-slate-950 p-4 rounded">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-semibold text-slate-200">{r.serviceName}</span>
                <span className="text-xs px-2 py-1 bg-amber-900/50 text-amber-400 rounded border border-amber-800/50">{r.status}</span>
              </div>
              <p className="text-xs text-slate-400">Deployment ID: <span className="font-mono">{r.deploymentId}</span></p>
              <div className="mt-3 text-xs text-slate-500">
                Target Regions: {JSON.parse(r.targetRegions).join(", ")}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
