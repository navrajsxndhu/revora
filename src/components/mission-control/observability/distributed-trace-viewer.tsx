"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Network } from "lucide-react";

interface DistributedTraceViewerProps {
  traces: any[];
}

export function DistributedTraceViewer({ traces }: DistributedTraceViewerProps) {
  if (!traces) return null;

  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <Network className="h-4 w-4 text-indigo-400" />
          Distributed Traces
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 mt-2">
          {traces.map((trace, idx) => (
            <div key={idx} className="p-2 bg-slate-950/50 rounded border border-slate-800 flex flex-col gap-1">
              <div className="flex justify-between items-center border-b border-slate-800/50 pb-1">
                <span className="text-xs font-mono text-slate-300">{trace.traceId}</span>
                <span className={`font-mono text-[9px] px-1 py-0.5 rounded border border-indigo-800 text-indigo-400 bg-indigo-950/30`}>
                  {trace.duration}
                </span>
              </div>
              <div className="text-[10px] text-slate-400 mt-1 font-mono break-all">
                {trace.path}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
