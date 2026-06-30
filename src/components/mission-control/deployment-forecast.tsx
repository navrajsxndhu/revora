import React from "react";
import { RolloutStrategy } from "@/lib/predictive/rollout-simulator";

export function DeploymentForecast({ simulations }: { simulations: any[] }) {
  if (simulations.length === 0) return null;

  const getStrategyColor = (strategy: RolloutStrategy) => {
    switch (strategy) {
      case 'SAFE_DIRECT_DEPLOY': return 'text-emerald-400 border-emerald-900 bg-emerald-950/20';
      case 'CANARY_REQUIRED': return 'text-amber-400 border-amber-900 bg-amber-950/20';
      case 'PARTIAL_ROLLOUT_REQUIRED': return 'text-blue-400 border-blue-900 bg-blue-950/20';
      case 'MANUAL_APPROVAL_REQUIRED': return 'text-orange-400 border-orange-900 bg-orange-950/20';
      case 'DEPLOYMENT_BLOCKED': return 'text-rose-400 border-rose-900 bg-rose-950/20';
    }
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 mb-10">
      <h2 className="text-xl font-medium text-slate-100 mb-2">Simulated Rollout Risk</h2>
      <p className="text-slate-400 text-sm mb-6">Deterministic pre-deployment simulations based on historical rollback frequencies.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {simulations.map(sim => (
          <div key={sim.serviceName} className="p-5 border border-slate-800 rounded bg-slate-950 flex flex-col justify-between">
            <div>
              <h3 className="text-base font-medium text-slate-200 mb-4">{sim.serviceName}</h3>
              <div className="space-y-3 mb-6">
                <div>
                  <span className="text-slate-500 text-xs block uppercase tracking-wider mb-1">Historical Rollback Rate</span>
                  <span className="text-slate-300 font-mono text-sm">{(sim.rollbackFrequency * 100).toFixed(1)}%</span>
                </div>
                <div>
                  <span className="text-slate-500 text-xs block uppercase tracking-wider mb-1">Simulated Incident Risk</span>
                  <div className="w-full bg-slate-800 rounded-full h-1.5 mt-2">
                    <div className="bg-rose-500 h-1.5 rounded-full" style={{ width: `${sim.simulatedIncidentProbability}%` }}></div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className={`px-3 py-2 text-xs font-semibold rounded border mb-2 ${getStrategyColor(sim.recommendation)}`}>
                {sim.recommendation.replace(/_/g, ' ')}
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">{sim.reason}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
