import React from 'react';

export function OperationalDebtMap({ profile }: { profile: unknown }) {
  return (
    <div className="p-4 border border-zinc-800 bg-zinc-900/50 rounded-lg flex flex-col space-y-3">
      <div className="flex justify-between items-center">
        <h3 className="font-mono text-sm text-zinc-300">{profile.service}</h3>
        <span className="text-xs font-mono text-rose-400">Score: {profile.debtScore.toFixed(1)}</span>
      </div>
      <div className="w-full bg-zinc-800 rounded-full h-1.5 mt-2">
        <div 
          className="bg-rose-500 h-1.5 rounded-full" 
          style={{ width: `${Math.min(100, profile.debtScore)}%` }}
        />
      </div>
      <div className="flex justify-between text-xs text-zinc-500">
        <span>Decay: {profile.debtDecayRate}% / day</span>
        <span>Recovery Eff: {profile.recoveryEfficiency}%</span>
      </div>
    </div>
  );
}
