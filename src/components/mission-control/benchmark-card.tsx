import React from "react";
import { ReliabilityScore } from "@/lib/benchmarks/reliability-score";
import { ServiceRawMetrics } from "@/lib/benchmarks/service-benchmarks";

export function BenchmarkCard({ metrics, score }: { metrics: ServiceRawMetrics, score: ReliabilityScore }) {
  const getBadgeColors = (classification: string) => {
    switch (classification) {
      case "CRITICAL": return "bg-red-950/40 border-red-900 text-red-400";
      case "HIGH_RISK": return "bg-orange-950/40 border-orange-900 text-orange-400";
      case "WATCHLIST": return "bg-amber-950/40 border-amber-900 text-amber-400";
      default: return "bg-emerald-950/40 border-emerald-900 text-emerald-400";
    }
  };

  return (
    <div className={`border rounded-lg p-5 bg-slate-900 shadow-sm border-slate-800`}>
      <div className="flex justify-between items-start mb-4 border-b border-slate-800 pb-4">
        <div>
          <h3 className="text-lg font-bold text-slate-100">{metrics.serviceName}</h3>
          <p className="text-slate-400 text-sm mt-0.5">Overall Reliability: {score.score}/100</p>
        </div>
        <span className={`px-2.5 py-1 text-xs font-bold rounded border uppercase ${getBadgeColors(score.classification)}`}>
          {score.classification}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-slate-950 p-3 rounded border border-slate-800">
          <span className="block text-[10px] text-slate-500 uppercase tracking-wider mb-1">MTTR</span>
          <span className="text-xl font-mono text-slate-200">{Math.round(metrics.mttrMinutes)}m</span>
        </div>
        <div className="bg-slate-950 p-3 rounded border border-slate-800">
          <span className="block text-[10px] text-slate-500 uppercase tracking-wider mb-1">Avg Blast Radius</span>
          <span className="text-xl font-mono text-slate-200">{metrics.avgBlastRadius.toFixed(1)}</span>
        </div>
      </div>

      <div>
        <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Deterministic Reasoning</h4>
        <ul className="text-xs text-slate-300 space-y-1 list-disc list-inside">
          {score.reasoning.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
