"use client";

import React from 'react';
import { ApiTrace } from '@/lib/engine/execution-contracts';

interface TraceInspectorProps {
  trace: ApiTrace;
}

export function TraceInspector({ trace }: TraceInspectorProps) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 font-mono text-sm">
      <div className="flex justify-between items-center mb-4 border-b border-slate-800 pb-4">
        <div>
          <span className="text-slate-400 mr-2">NODE ID:</span>
          <span className="text-emerald-400">{trace.nodeId}</span>
        </div>
        <div>
          <span className="text-slate-400 mr-2">LATENCY:</span>
          <span className="text-amber-400">{trace.latencyMs}ms</span>
        </div>
      </div>

      <div className="mb-4">
        <h4 className="text-slate-500 mb-2 uppercase text-xs tracking-wider">Payload</h4>
        <div className="bg-slate-950 p-4 rounded border border-slate-800 overflow-x-auto">
          <pre className="text-slate-300 text-xs">
            {JSON.stringify(trace.requestPayload, null, 2)}
          </pre>
        </div>
      </div>

      {trace.status === 'ERROR' && (
        <div className="mt-4 border-t border-red-900/50 pt-4">
          <h4 className="text-red-500 mb-2 uppercase text-xs tracking-wider flex items-center">
            Execution Failure
          </h4>
          <p className="text-red-400 text-xs bg-red-950/30 p-3 rounded border border-red-900/50">
            {trace.errorMessage || "Unknown deterministic failure within node boundary."}
          </p>
        </div>
      )}
    </div>
  );
}
