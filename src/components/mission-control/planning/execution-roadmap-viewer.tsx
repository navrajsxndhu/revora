"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Route } from "lucide-react";

interface ExecutionRoadmapViewerProps {
  milestones: any[];
}

export function ExecutionRoadmapViewer({ milestones }: ExecutionRoadmapViewerProps) {
  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <Route className="h-4 w-4 text-emerald-400" />
          Execution Roadmap
        </CardTitle>
      </CardHeader>
      <CardContent>
        {milestones && milestones.length > 0 ? (
          <div className="relative mt-4 ml-4">
            <div className="absolute left-[-1px] top-2 bottom-2 w-px bg-slate-700" />
            <div className="space-y-6">
              {milestones.sort((a,b) => a.executionOrder - b.executionOrder).map((m, idx) => (
                <div key={idx} className="relative flex items-center gap-4">
                  <div className={`absolute -left-1.5 w-3 h-3 rounded-full border-2 border-slate-900 ${m.completionStatus === 'COMPLETED' ? 'bg-emerald-500' : m.completionStatus === 'IN_PROGRESS' ? 'bg-indigo-500' : 'bg-slate-500'}`} />
                  <div className="flex-1 p-2 rounded border bg-slate-950/50 border-slate-800 ml-4 flex flex-col gap-1">
                    <span className="text-sm font-medium text-slate-200">{m.name}</span>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500">Status: {m.completionStatus}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-sm text-slate-500 italic mt-4">
            No active execution roadmap.
          </div>
        )}
      </CardContent>
    </Card>
  );
}
