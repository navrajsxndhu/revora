import { DiagnosticsResult } from "@/lib/incidents/diagnostics";

export function DiagnosticPanel({ diagnostics }: { diagnostics: DiagnosticsResult }) {
  return (
    <div className="bg-slate-900 border border-slate-800 p-5 rounded-lg mb-6">
      <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Automated Pre-Incident Diagnostics</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Core Failure Signature */}
        <div className="space-y-4">
          <div className="bg-black/30 p-4 rounded border border-black/20">
            <span className="text-xs text-slate-500 uppercase tracking-wider block mb-1">Failure Signature</span>
            <span className="font-mono text-sm text-red-400 font-bold">{diagnostics.failureSignature}</span>
          </div>

          <div className="bg-black/30 p-4 rounded border border-black/20">
            <span className="text-xs text-slate-500 uppercase tracking-wider block mb-1">Primary Trace Signal</span>
            <span className="text-sm text-slate-300 break-words">{diagnostics.traceSummary.primaryError}</span>
            {diagnostics.traceSummary.repeatedPatterns.length > 0 && (
              <div className="mt-3 pt-3 border-t border-slate-800/50">
                <span className="text-xs text-slate-500 block mb-1">Repeated Patterns Detected:</span>
                <ul className="list-disc pl-4 text-xs text-amber-400/80 space-y-1">
                  {diagnostics.traceSummary.repeatedPatterns.map((p, i) => <li key={i}>{p}</li>)}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Operational Context */}
        <div className="space-y-4">
          
          <div className="bg-black/30 p-4 rounded border border-black/20">
            <span className="text-xs text-slate-500 uppercase tracking-wider block mb-2">Historical Similarity</span>
            <ul className="space-y-2">
              {diagnostics.historicalRecoveryHints.map((hint, i) => (
                <li key={i} className="flex items-start text-sm text-emerald-400/90">
                  <svg className="w-4 h-4 shrink-0 mr-2 mt-0.5 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  <span>{hint}</span>
                </li>
              ))}
            </ul>
          </div>

          {(diagnostics.deploymentChanges.length > 0 || diagnostics.dependencyWarnings.length > 0) && (
            <div className="bg-black/30 p-4 rounded border border-black/20">
              {diagnostics.deploymentChanges.map((change, i) => (
                <div key={`dep-${i}`} className="mb-3 last:mb-0">
                  <span className="text-xs text-slate-500 uppercase tracking-wider block mb-1">Deployment Change ({change.risk} RISK)</span>
                  <span className="text-sm text-amber-400">{change.type}: {change.explanation}</span>
                </div>
              ))}
              
              {diagnostics.dependencyWarnings.map((warn, i) => (
                <div key={`warn-${i}`} className="mb-3 last:mb-0">
                   <span className="text-xs text-slate-500 uppercase tracking-wider block mb-1">Operational Warning</span>
                   <span className="text-sm text-amber-400">{warn}</span>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
