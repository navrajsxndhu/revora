"use client";

import React from 'react';

interface DiffChange {
  type: string;
  file: string;
  details: string;
}

export function DeploymentDiff({ diffJson }: { diffJson: string | null }) {
  if (!diffJson) return <p className="text-slate-500 text-sm">No deployment diff available.</p>;

  let parsed: { changes: DiffChange[] } | null = null;
  try {
    parsed = JSON.parse(diffJson);
  } catch (e) {
    return <p className="text-slate-500 text-sm">Failed to parse diff.</p>;
  }

  if (!parsed || !parsed.changes || parsed.changes.length === 0) {
    return <p className="text-slate-500 text-sm">No significant changes detected.</p>;
  }

  const getColorForType = (type: string) => {
    switch (type) {
      case 'ENV_CHANGE': return 'text-amber-400 bg-amber-400/10 border-amber-400/20';
      case 'DEPENDENCY_CHANGE': return 'text-purple-400 bg-purple-400/10 border-purple-400/20';
      default: return 'text-blue-400 bg-blue-400/10 border-blue-400/20';
    }
  };

  return (
    <div className="bg-slate-950 border border-slate-800 rounded-lg p-4 font-mono text-xs">
      <div className="space-y-3">
        {parsed.changes.map((change, idx) => (
          <div key={idx} className="flex flex-col space-y-1 pb-3 border-b border-slate-800 last:border-0 last:pb-0">
            <div className="flex items-center space-x-2">
              <span className={`px-2 py-0.5 rounded border ${getColorForType(change.type)}`}>
                {change.type}
              </span>
              <span className="text-slate-300 font-semibold">{change.file}</span>
            </div>
            <span className="text-slate-400 pl-1">{change.details}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
