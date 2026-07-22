import React from "react";

export function AntiPatternFeed({ patterns }: { patterns: unknown[] }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 mb-6">
      <h2 className="text-xl font-medium text-slate-100 mb-4 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse inline-block"></span>
        Detected Anti-Patterns
      </h2>
      {patterns.length === 0 ? (
        <p className="text-sm text-slate-500">No anti-patterns detected.</p>
      ) : (
        <div className="space-y-4">
          {patterns.map(p => (
            <div key={p.id} className="p-4 bg-slate-950 border border-rose-900/50 rounded">
              <div className="flex justify-between items-center mb-2">
                <div className="text-sm font-semibold text-rose-300">{p.patternType}</div>
                <div className="text-xs px-2 py-1 bg-rose-900/50 text-rose-400 rounded font-bold">{p.severity}</div>
              </div>
              <p className="text-xs text-slate-400 mb-2">{p.recommendation}</p>
              <div className="text-[10px] text-slate-500 font-mono bg-black/50 p-2 rounded">
                Evidence: {p.evidence}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
