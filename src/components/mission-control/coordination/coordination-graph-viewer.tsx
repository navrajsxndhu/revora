"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Workflow } from "lucide-react";

interface CoordinationGraphViewerProps {
  graph: unknown;
}

export function CoordinationGraphViewer({ graph }: CoordinationGraphViewerProps) {
  if (!graph) return null;

  return (
    <Card className="border-slate-800 bg-slate-900/50 h-full">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <Workflow className="h-4 w-4 text-emerald-400" />
          Macroscopic Coordination Graph
        </CardTitle>
      </CardHeader>
      <CardContent>
        {graph.edges && graph.edges.length > 0 ? (
          <div className="relative mt-4 space-y-4">
            {graph.edges.map((edge: unknown, idx: number) => {
              const sourceNode = graph.nodes.find((n: unknown) => n.id === edge.sourceId);
              const targetNode = graph.nodes.find((n: unknown) => n.id === edge.targetId);

              return (
                <div key={idx} className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 text-xs">
                    <div className="px-2 py-1 bg-slate-950 border border-slate-800 rounded font-mono text-slate-300 w-1/3 truncate" title={sourceNode?.reference}>
                      {sourceNode?.reference || edge.sourceId}
                    </div>
                    <div className="flex-1 h-px bg-slate-700 relative group">
                      <div className="absolute right-0 -top-1 w-2 h-2 border-t border-r border-slate-700 rotate-45 transform translate-x-1" />
                    </div>
                    <div className="px-2 py-1 bg-slate-950 border border-slate-800 rounded font-mono text-slate-300 w-1/3 truncate" title={targetNode?.reference}>
                      {targetNode?.reference || edge.targetId}
                    </div>
                  </div>
                  <div className="text-center w-full">
                    <span className="text-[9px] text-rose-500 uppercase font-bold tracking-wider bg-slate-900 px-1 rounded">
                      {edge.edgeType.replace(/_/g, ' ')}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-sm text-slate-500 italic mt-4">
            No coordination edges mapped.
          </div>
        )}
      </CardContent>
    </Card>
  );
}
