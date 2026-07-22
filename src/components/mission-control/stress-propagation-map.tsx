import React from "react";

export function StressPropagationMap({ nodes }: { nodes: unknown[] }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 mb-6">
      <h2 className="text-xl font-medium text-slate-100 mb-4 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse inline-block"></span>
        Topology Stress Propagation
      </h2>
      <div className="relative w-full h-64 border border-slate-800/50 bg-slate-950 rounded flex items-center justify-center overflow-hidden">
        {nodes.length === 0 ? (
          <span className="text-slate-500 text-sm">No stress detected in topology.</span>
        ) : (
          <div className="flex gap-8 flex-wrap justify-center p-4">
            {nodes.map(node => (
              <div key={node.id} className={`px-4 py-2 rounded-full border text-xs font-mono
                ${node.state === 'HEALTHY' ? 'border-emerald-900/50 bg-emerald-950/30 text-emerald-400' :
                  node.state === 'CRITICAL' ? 'border-rose-600 bg-rose-950/80 text-rose-300 shadow-[0_0_15px_rgba(225,29,72,0.3)]' :
                  'border-amber-700 bg-amber-950/60 text-amber-300'}`}>
                {node.id}
                <span className="ml-2 opacity-50">[{node.stressLevel}%]</span>
              </div>
            ))}
          </div>
        )}
      </div>
      <p className="text-xs text-slate-500 mt-4">Visualizing cumulative reliability debt and incident blast radius.</p>
    </div>
  );
}
