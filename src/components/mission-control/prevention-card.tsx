import { ServiceInsight } from "@/lib/intelligence/stability-intelligence";

export function PreventionCard({ insight }: { insight: ServiceInsight }) {
  const getClassificationColor = (classification: string) => {
    switch (classification) {
      case 'HIGH_RISK': return 'border-red-900/50 bg-red-950/20 text-red-400';
      case 'DEGRADED': return 'border-orange-900/50 bg-orange-950/20 text-orange-400';
      case 'WATCH': return 'border-amber-900/50 bg-amber-950/20 text-amber-400';
      default: return 'border-emerald-900/50 bg-emerald-950/20 text-emerald-400';
    }
  };

  return (
    <div className={`p-5 rounded-lg border ${getClassificationColor(insight.classification)}`}>
      <div className="flex justify-between items-start mb-4">
        <div>
          <span className="text-xs uppercase font-semibold tracking-wider opacity-80 block mb-1">
            {insight.classification.replace('_', ' ')}
          </span>
          <h3 className="text-xl font-bold">{insight.service}</h3>
        </div>
        <div className="text-right">
          <span className="text-2xl font-bold opacity-90">{insight.riskScore}</span>
          <span className="text-xs opacity-60 block">Risk Score</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-5 opacity-90 text-sm">
        <div>
          <span className="opacity-70 block">Incidents</span>
          <span className="font-medium">{insight.incidentCount}</span>
        </div>
        <div>
          <span className="opacity-70 block">Avg MTTR</span>
          <span className="font-medium">{Math.round(insight.averageMTTR)}m</span>
        </div>
        <div>
          <span className="opacity-70 block">Blast Radius</span>
          <span className="font-medium">{insight.averageBlastRadius.toFixed(1)} downstream</span>
        </div>
        <div>
          <span className="opacity-70 block">Recovery Failures</span>
          <span className="font-medium">{(insight.recoveryFailureRate * 100).toFixed(0)}%</span>
        </div>
      </div>

      <div className="bg-black/30 p-4 rounded border border-black/20">
        <span className="text-xs font-semibold opacity-70 uppercase tracking-wider block mb-2">Deterministic Recommendation</span>
        <p className="text-sm font-medium leading-relaxed">{insight.recommendation}</p>
      </div>
    </div>
  );
}
