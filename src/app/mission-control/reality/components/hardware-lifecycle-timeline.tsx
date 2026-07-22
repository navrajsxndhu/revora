import React from 'react';

export function HardwareLifecycleTimeline({ records }: { records: unknown[] }) {
  if (records.length === 0) return <p className="text-sm text-zinc-500">No hardware records.</p>;

  return (
    <div className="relative border-l border-zinc-800 ml-4 pl-6 space-y-6">
      {records.map(record => (
        <div key={record.id} className="relative">
          <div className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-zinc-900 border border-zinc-700" />
          <h3 className="text-sm font-medium text-zinc-200">{record.infrastructureClass}</h3>
          <p className="text-xs text-zinc-500 font-mono mt-1">Recorded: {new Date(record.recordedAt).toLocaleDateString()}</p>
          <div className="mt-3 p-3 bg-zinc-900/40 rounded border border-zinc-800 text-sm space-y-1">
            <div className="flex justify-between">
              <span className="text-zinc-400">Health</span>
              <span className="text-emerald-400">{record.lifecycleHealth.toFixed(1)}%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-400">Maint. Debt</span>
              <span className="text-rose-400">{record.maintenanceDebt.toFixed(1)}%</span>
            </div>
            <div className="pt-1 text-xs text-zinc-500">
              Impact: {record.survivabilityImpact}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
