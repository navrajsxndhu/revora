import React from 'react';

export function RegionalPressureGrid({ zone }: { zone: any }) {
  const isSaturated = zone.deploymentCongestion === 'SATURATED';
  const color = isSaturated ? 'border-red-900/50 bg-red-950/20' : 'border-zinc-800 bg-zinc-900/40';

  return (
    <div className={`p-4 border rounded-lg ${color}`}>
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-mono text-sm text-zinc-300">{zone.region}</h3>
        <span className={`text-xs uppercase tracking-wider ${isSaturated ? 'text-red-400' : 'text-zinc-500'}`}>
          {zone.deploymentCongestion}
        </span>
      </div>
      
      <div className="space-y-2">
        <div>
          <div className="flex justify-between text-xs text-zinc-500 mb-1">
            <span>Pressure Score</span>
            <span>{zone.pressureScore.toFixed(1)}</span>
          </div>
          <div className="w-full bg-zinc-800 h-1 rounded-full">
            <div className="bg-orange-500 h-1 rounded-full" style={{ width: `${Math.min(100, zone.pressureScore)}%` }} />
          </div>
        </div>
        
        <div>
          <div className="flex justify-between text-xs text-zinc-500 mb-1">
            <span>Instability Density</span>
            <span>{(zone.instabilityDensity * 100).toFixed(0)}%</span>
          </div>
          <div className="w-full bg-zinc-800 h-1 rounded-full">
            <div className="bg-rose-500 h-1 rounded-full" style={{ width: `${Math.min(100, zone.instabilityDensity * 100)}%` }} />
          </div>
        </div>
      </div>
    </div>
  );
}
