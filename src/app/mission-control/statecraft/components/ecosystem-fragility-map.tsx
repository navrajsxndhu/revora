import React from 'react';

export function EcosystemFragilityMap({ dependencies }: { dependencies: any[] }) {
  if (dependencies.length === 0) return <p className="text-sm text-zinc-500">No ecosystem dependencies mapped.</p>;

  return (
    <div className="space-y-4">
      {dependencies.map(dep => (
        <div key={dep.id} className="p-4 rounded bg-zinc-900/30 border border-zinc-800">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-zinc-200">{dep.dependencyType}</span>
            <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded ${
              dep.survivabilityImpact === 'SYSTEMIC_RISK' ? 'bg-rose-500/10 text-rose-400' :
              dep.survivabilityImpact === 'FRAGILE' ? 'bg-orange-500/10 text-orange-400' :
              'bg-emerald-500/10 text-emerald-400'
            }`}>
              {dep.survivabilityImpact}
            </span>
          </div>
          <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
            <div 
              className={`h-full ${dep.fragilityScore > 50 ? 'bg-rose-500' : 'bg-emerald-500'}`} 
              style={{ width: `${dep.fragilityScore}%` }} 
            />
          </div>
          <div className="text-xs text-zinc-500 mt-2">Concentration: {(dep.dependencyConcentration * 100).toFixed(0)}%</div>
        </div>
      ))}
    </div>
  );
}
