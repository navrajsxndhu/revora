import React from 'react';

interface EvidenceBadgeProps {
  evidenceId: string;
  executionId?: string;
  timestamp: string;
}

export function EvidenceBadge({ evidenceId, executionId, timestamp }: EvidenceBadgeProps) {
  return (
    <div className="inline-flex flex-col gap-1 p-3 bg-slate-900 border border-slate-800 rounded-md text-xs font-mono">
      <div className="flex items-center gap-2 text-slate-300">
        <svg className="w-3.5 h-3.5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>EVD: {evidenceId}</span>
      </div>
      {executionId && (
        <div className="flex items-center gap-2 text-slate-500 pl-5.5">
          <span>EXC: {executionId}</span>
        </div>
      )}
      <div className="flex items-center gap-2 text-slate-600 pl-5.5 text-[10px]">
        <span>{timestamp}</span>
      </div>
    </div>
  );
}
