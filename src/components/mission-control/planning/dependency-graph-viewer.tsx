"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { GitCommit } from "lucide-react";

interface DependencyGraphViewerProps {
  dependencies: unknown[];
}

export function DependencyGraphViewer({ dependencies }: DependencyGraphViewerProps) {
  return (
    <Card className="border-slate-800 bg-slate-900/50 h-full">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <GitCommit className="h-4 w-4 text-indigo-400" />
          Directed Dependency Graph
        </CardTitle>
      </CardHeader>
      <CardContent>
        {dependencies && dependencies.length > 0 ? (
          <div className="relative mt-4 space-y-4">
            {dependencies.map((dep, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs">
                <div className="px-2 py-1 bg-slate-950 border border-slate-800 rounded font-mono text-slate-300">
                  {dep.sourceId}
                </div>
                <div className="flex-1 h-px bg-slate-700 relative">
                  <div className="absolute right-0 -top-1 w-2 h-2 border-t border-r border-slate-700 rotate-45 transform translate-x-1" />
                  <span className="absolute left-1/2 -top-4 -translate-x-1/2 text-[9px] text-rose-500 uppercase font-bold tracking-wider bg-slate-900 px-1 rounded">
                    {dep.type}
                  </span>
                </div>
                <div className="px-2 py-1 bg-slate-950 border border-slate-800 rounded font-mono text-slate-300">
                  {dep.targetId}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-sm text-slate-500 italic mt-4">
            No dependencies mapped.
          </div>
        )}
      </CardContent>
    </Card>
  );
}
