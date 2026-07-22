import React from 'react';

export function ClimateExposureTable({ zones }: { zones: unknown[] }) {
  return (
    <table className="w-full text-left text-sm text-zinc-400">
      <thead className="bg-zinc-900/50 text-xs uppercase tracking-wider text-zinc-500 border-b border-zinc-800">
        <tr>
          <th className="px-4 py-3 font-medium">Region</th>
          <th className="px-4 py-3 font-medium">Primary Risk</th>
          <th className="px-4 py-3 font-medium">Resilience</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-zinc-800/50">
        {zones.length === 0 ? (
          <tr>
            <td colSpan={3} className="px-4 py-8 text-center text-zinc-600">No active climate zones mapped.</td>
          </tr>
        ) : (
          zones.map(zone => (
            <tr key={zone.id} className="hover:bg-zinc-900/30 transition-colors">
              <td className="px-4 py-3 font-mono text-zinc-300">{zone.region}</td>
              <td className="px-4 py-3 font-mono text-xs">{zone.climateRiskType}</td>
              <td className="px-4 py-3">
                <span className={`px-2 py-0.5 rounded text-[10px] font-medium tracking-wide ${
                  zone.resilienceScore < 50 ? 'bg-rose-500/10 text-rose-400' : 'bg-emerald-500/10 text-emerald-400'
                }`}>
                  {zone.resilienceScore.toFixed(1)}
                </span>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}
