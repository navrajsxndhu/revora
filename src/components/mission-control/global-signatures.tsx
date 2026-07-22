import React from "react";

export function GlobalSignatures({ signatures }: { signatures: unknown[] }) {
  if (signatures.length === 0) return null;

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 mb-10">
      <h2 className="text-xl font-medium text-slate-100 mb-6">Most Common Failure Signatures</h2>
      <div className="space-y-6">
        {signatures.map(sig => (
          <div key={sig.signature} className="border-b border-slate-800 pb-6 last:border-0 last:pb-0">
            <h3 className="text-lg font-mono text-rose-400 mb-2">{sig.signature}</h3>
            <div className="grid grid-cols-3 gap-4 text-sm mb-4">
              <div>
                <span className="text-slate-500 block">Global Occurrences</span>
                <span className="text-slate-200">{sig.globalOccurrences}</span>
              </div>
              <div>
                <span className="text-slate-500 block">Recovery Success</span>
                <span className="text-emerald-400">{sig.recoverySuccessRate}%</span>
              </div>
            </div>
            <div className="bg-slate-950 p-4 rounded border border-slate-800">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">Most Effective Remediation</span>
              <p className="text-slate-300 text-sm">{sig.mostEffectiveRemediation}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
