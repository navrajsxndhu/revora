import React from "react";
import { Shield, Fingerprint, Activity, Clock, Link as LinkIcon, Server } from "lucide-react";
import { EvidenceBadge } from "./evidence-badge";

export function EvidenceInspector({ executionId, policies, timestamp, confidence }: { executionId: string, policies: string[], timestamp: string, confidence: number }) {
  return (
    <div className="flex flex-col h-full bg-slate-900/50 border-l border-slate-800 text-white">
      <div className="p-4 border-b border-slate-800 bg-slate-950 flex items-center justify-between">
        <h3 className="font-semibold text-sm flex items-center gap-2">
          <Fingerprint className="w-4 h-4 text-emerald-400" />
          Evidence Inspector
        </h3>
        <span className="text-[10px] uppercase tracking-wider font-bold text-slate-500">Read Only</span>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        
        {/* Primary Deterministic Badge */}
        <div>
          <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Runtime Execution Hash</label>
          <div className="p-4 bg-slate-950 border border-slate-800 rounded-lg shadow-inner">
            <EvidenceBadge evidenceId={executionId} timestamp={timestamp} />
          </div>
        </div>

        {/* Confidence Matrix */}
        <div>
          <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Telemetry Confidence</label>
          <div className="flex items-center gap-3">
            <div className="flex-1 h-2 bg-slate-800 rounded-full overflow-hidden">
              <div className={`h-full ${confidence > 95 ? 'bg-emerald-500' : 'bg-amber-500'}`} style={{ width: `${confidence}%` }}></div>
            </div>
            <span className="text-sm font-bold font-mono">{confidence}%</span>
          </div>
        </div>

        {/* Policy Graph */}
        <div>
          <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Policies Evaluated</label>
          <div className="space-y-2">
            {policies.map((p, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-slate-300 p-2 bg-slate-800/30 rounded border border-slate-700/50">
                <Shield className="w-3.5 h-3.5 text-blue-400" />
                {p}
              </div>
            ))}
          </div>
        </div>

        {/* Origin Systems */}
        <div>
          <label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Lineage Sources</label>
          <div className="grid grid-cols-2 gap-2">
            <div className="flex items-center justify-center gap-2 p-2 bg-slate-950 border border-slate-800 rounded text-xs text-slate-400">
              <Server className="w-3 h-3" /> Postgres
            </div>
            <div className="flex items-center justify-center gap-2 p-2 bg-slate-950 border border-slate-800 rounded text-xs text-slate-400">
              <Activity className="w-3 h-3" /> Datadog
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
