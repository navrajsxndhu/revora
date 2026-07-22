import React from 'react';

export function ReliabilityTreasuryPanel({ snapshot }: { snapshot: unknown }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 border border-zinc-800 bg-zinc-900/40 rounded-xl">
      <div>
        <span className="block text-zinc-500 text-xs uppercase tracking-wider mb-2">Available Capital</span>
        <span className="text-3xl font-light text-emerald-400">{snapshot.availableCapital.toLocaleString()}</span>
      </div>
      <div>
        <span className="block text-zinc-500 text-xs uppercase tracking-wider mb-2">Reserved Capital</span>
        <span className="text-3xl font-light text-zinc-300">{snapshot.reservedCapital.toLocaleString()}</span>
      </div>
      <div>
        <span className="block text-zinc-500 text-xs uppercase tracking-wider mb-2">Debt Exposure</span>
        <span className="text-3xl font-light text-rose-400">{snapshot.debtExposure.toLocaleString()}</span>
      </div>
      <div>
        <span className="block text-zinc-500 text-xs uppercase tracking-wider mb-2">Global Burn Rate</span>
        <span className="text-3xl font-light text-orange-400">{snapshot.organizationalBurnRate.toFixed(1)}</span>
      </div>
      
      <div className="col-span-2 md:col-span-4 pt-4 mt-2 border-t border-zinc-800 flex justify-between items-center">
        <span className="text-sm text-zinc-400">Deployment Liquidity Ratio</span>
        <span className="font-mono text-sm">{snapshot.deploymentLiquidity.toFixed(2)}x</span>
      </div>
    </div>
  );
}
