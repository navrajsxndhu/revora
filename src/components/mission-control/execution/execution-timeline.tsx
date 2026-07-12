"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ListTree } from "lucide-react";

interface ExecutionTimelineProps {
  timeline: {
    totalExecutions: number;
    completedExecutions: number;
    activeExecutions: number;
  } | null;
}

export function ExecutionTimeline({ timeline }: ExecutionTimelineProps) {
  if (!timeline) return null;

  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <ListTree className="h-4 w-4 text-blue-400" />
          Execution Volume Status
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 mt-2">
          <div className="flex justify-between items-center p-3 bg-slate-950/50 rounded border border-slate-800">
            <span className="text-sm text-slate-400">Total Executions</span>
            <span className="text-xl font-mono text-blue-400">{timeline.totalExecutions}</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-slate-950/50 rounded border border-slate-800">
            <span className="text-sm text-slate-400">Successfully Completed</span>
            <span className="text-xl font-mono text-emerald-400">{timeline.completedExecutions}</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-slate-950/50 rounded border border-slate-800">
            <span className="text-sm text-slate-400">Currently Active</span>
            <span className="text-xl font-mono text-amber-400">{timeline.activeExecutions}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
