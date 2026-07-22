import React from 'react';

export function CapitalAllocationTable({ allocations }: { allocations: unknown[] }) {
  return (
    <table className="w-full text-left text-sm text-zinc-400">
      <thead className="bg-zinc-900/50 text-xs uppercase tracking-wider text-zinc-500 border-b border-zinc-800">
        <tr>
          <th className="px-4 py-3 font-medium">Service</th>
          <th className="px-4 py-3 font-medium">Capital</th>
          <th className="px-4 py-3 font-medium">Priority</th>
          <th className="px-4 py-3 font-medium">Risk</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-zinc-800/50">
        {allocations.length === 0 ? (
          <tr>
            <td colSpan={4} className="px-4 py-8 text-center text-zinc-600">No allocations found.</td>
          </tr>
        ) : (
          allocations.map(alloc => (
            <tr key={alloc.id} className="hover:bg-zinc-900/30 transition-colors">
              <td className="px-4 py-3 font-mono text-zinc-300">{alloc.service}</td>
              <td className="px-4 py-3 font-mono text-emerald-400">{alloc.allocatedCapital}</td>
              <td className="px-4 py-3">
                <span className={`px-2 py-0.5 rounded text-[10px] font-medium tracking-wide ${
                  alloc.governancePriority === 'FROZEN' ? 'bg-red-500/10 text-red-400' :
                  alloc.governancePriority === 'HIGH_VELOCITY' ? 'bg-emerald-500/10 text-emerald-400' :
                  'bg-zinc-800 text-zinc-300'
                }`}>
                  {alloc.governancePriority}
                </span>
              </td>
              <td className="px-4 py-3 text-xs">{alloc.exhaustionRisk}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}
