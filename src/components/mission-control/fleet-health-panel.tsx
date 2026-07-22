import React from "react";

export function FleetHealthPanel({ intelligence }: { intelligence: unknown }) {
  if (!intelligence) return null;
  
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 mb-6">
      <h2 className="text-xl font-medium text-slate-100 mb-4">Fleet Intelligence</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="border border-slate-800 bg-slate-950 p-4 rounded">
          <div className="text-sm text-slate-400 mb-1">Avg Reliability Debt</div>
          <div className="text-3xl font-light text-slate-200">{intelligence.avgReliabilityDebt}</div>
        </div>
        <div className="border border-slate-800 bg-slate-950 p-4 rounded">
          <div className="text-sm text-slate-400 mb-1">Frozen Services</div>
          <div className="text-3xl font-light text-rose-400">{intelligence.frozenServices}</div>
        </div>
        <div className="border border-slate-800 bg-slate-950 p-4 rounded">
          <div className="text-sm text-slate-400 mb-1">Restricted Rollouts</div>
          <div className="text-3xl font-light text-orange-400">{intelligence.restrictedServices}</div>
        </div>
      </div>
    </div>
  );
}
