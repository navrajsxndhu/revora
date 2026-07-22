import React from 'react';

export function ReliabilityBudgetPanel({ budget }: { budget: unknown }) {
  const exhaustionColor = 
    budget.exhaustionRisk === 'CRITICAL' ? 'text-red-500 border-red-900/50 bg-red-950/20' :
    budget.exhaustionRisk === 'UNSAFE' ? 'text-orange-500 border-orange-900/50 bg-orange-950/20' :
    budget.exhaustionRisk === 'AGGRESSIVE' ? 'text-yellow-500 border-yellow-900/50 bg-yellow-950/20' :
    'text-emerald-500 border-emerald-900/50 bg-emerald-950/20';

  return (
    <div className={`p-4 border rounded-lg flex flex-col space-y-3 ${exhaustionColor}`}>
      <div className="flex justify-between items-center">
        <h3 className="font-mono text-sm font-semibold">{budget.service}</h3>
        <span className="text-xs uppercase tracking-wider">{budget.exhaustionRisk}</span>
      </div>
      <div className="grid grid-cols-3 gap-4 text-sm mt-2">
        <div>
          <span className="block text-zinc-500 text-xs uppercase mb-1">Capital</span>
          <span className="font-mono">{budget.currentBudget}</span>
        </div>
        <div>
          <span className="block text-zinc-500 text-xs uppercase mb-1">Burn Velocity</span>
          <span className="font-mono">{budget.burnRate.toFixed(2)}/day</span>
        </div>
        <div>
          <span className="block text-zinc-500 text-xs uppercase mb-1">Deploy Quota</span>
          <span className="font-mono">{budget.deploymentQuota}</span>
        </div>
      </div>
    </div>
  );
}
