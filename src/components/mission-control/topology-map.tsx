import React from "react";

export function TopologyMap({ graph }: { graph: { nodes: any[], edges: any[] } }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 mb-6">
      <h2 className="text-xl font-medium text-slate-100 mb-4">Live Service Topology</h2>
      <div className="relative w-full h-64 border border-slate-800/50 bg-slate-950 rounded flex items-center justify-center overflow-hidden">
        {graph.nodes.length === 0 ? (
          <span className="text-slate-500 text-sm">Topology graph building...</span>
        ) : (
          <div className="flex gap-8 flex-wrap justify-center p-4">
            {graph.nodes.map(node => (
              <div key={node.id} className={`px-4 py-2 rounded-full border text-xs font-mono
                ${node.status === 'HEALTHY' ? 'border-emerald-900 bg-emerald-950 text-emerald-400' :
                  node.status === 'CRITICAL' ? 'border-rose-900 bg-rose-950 text-rose-400' :
                  'border-amber-900 bg-amber-950 text-amber-400'}`}>
                {node.id}
                {node.hasActiveDeployment && <span className="ml-2 inline-block w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>}
              </div>
            ))}
          </div>
        )}
      </div>
      <p className="text-xs text-slate-500 mt-4">Graph dynamically derived from deployment manifests and incident blast radii.</p>
    </div>
  );
}
