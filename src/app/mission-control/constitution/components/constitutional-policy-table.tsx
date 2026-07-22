import React from 'react';

export function ConstitutionalPolicyTable({ policies }: { policies: unknown[] }) {
  return (
    <table className="w-full text-left text-sm text-zinc-400">
      <thead className="bg-zinc-900/50 text-xs uppercase tracking-wider text-zinc-500 border-b border-zinc-800">
        <tr>
          <th className="px-4 py-3 font-medium">Policy Type</th>
          <th className="px-4 py-3 font-medium">Enforcement</th>
          <th className="px-4 py-3 font-medium">Immutable Hash</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-zinc-800/50">
        {policies.length === 0 ? (
          <tr>
            <td colSpan={3} className="px-4 py-8 text-center text-zinc-600">No constitutional policies defined.</td>
          </tr>
        ) : (
          policies.map(policy => (
            <tr key={policy.id} className="hover:bg-zinc-900/30 transition-colors">
              <td className="px-4 py-3 font-mono text-zinc-300">{policy.policyType}</td>
              <td className="px-4 py-3">
                <span className={`px-2 py-0.5 rounded text-[10px] font-medium tracking-wide ${
                  policy.enforcementLevel === 'BLOCKING' ? 'bg-rose-500/10 text-rose-400' : 'bg-zinc-800 text-zinc-300'
                }`}>
                  {policy.enforcementLevel}
                </span>
              </td>
              <td className="px-4 py-3 font-mono text-xs text-zinc-500 truncate max-w-[200px]">{policy.immutableHash}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}
