export function RecoveryHistory({ 
  service,
  confidenceContext
}: { 
  service: string, 
  confidenceContext: { 
    confidence: number; 
    level: string; 
    explanation: string; 
    historicalRecoveryCount: number; 
    lastSuccessfulRemediation: Date | null; 
  }
}) {
  return (
    <div className="bg-slate-900 border border-slate-800 p-5 rounded-lg mt-6">
      <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Historical Recovery Insights</h3>
      
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <span className="text-xs text-slate-500 block mb-1">Total Recovery Attempts</span>
          <span className="text-xl font-bold text-slate-200">{confidenceContext.historicalRecoveryCount}</span>
        </div>
        <div>
          <span className="text-xs text-slate-500 block mb-1">Confidence Score</span>
          <span className={`text-xl font-bold ${
            confidenceContext.level === 'HIGH' ? 'text-emerald-400' :
            confidenceContext.level === 'MODERATE' ? 'text-amber-400' : 'text-red-400'
          }`}>{confidenceContext.confidence}/100</span>
        </div>
      </div>

      <div className="mb-4">
        <span className="text-xs text-slate-500 block mb-1">Last Successful Remediation</span>
        <span className="text-sm font-medium text-slate-300">
          {confidenceContext.lastSuccessfulRemediation 
            ? confidenceContext.lastSuccessfulRemediation.toLocaleString() 
            : "Never / No Data"}
        </span>
      </div>

      <div className="bg-black/30 border border-black/20 p-3 rounded">
        <span className="text-xs font-semibold uppercase tracking-wider opacity-70 block mb-1">System Conclusion</span>
        <p className="text-sm text-slate-400">{confidenceContext.explanation}</p>
      </div>
    </div>
  );
}
