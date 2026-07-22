"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ListTree } from "lucide-react";

interface ReleaseTimelineProps {
  checkpoints: any[];
}

export function ReleaseTimeline({ checkpoints }: ReleaseTimelineProps) {
  return (
    <Card className="border-slate-800 bg-slate-900/50 h-full">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <ListTree className="h-4 w-4 text-emerald-400" />
          Execution Timeline
        </CardTitle>
      </CardHeader>
      <CardContent>
        {checkpoints && checkpoints.length > 0 ? (
          <div className="space-y-4 mt-2">
            {checkpoints.map((cp, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className={`w-2 h-2 rounded-full ${cp.status === 'COMPLETED' ? 'bg-emerald-400' : cp.status === 'BLOCKED' ? 'bg-rose-400' : 'bg-slate-700'}`}></div>
                  {idx < checkpoints.length - 1 && <div className="w-0.5 h-full bg-slate-800 my-1"></div>}
                </div>
                <div className="flex flex-col -mt-1">
                  <span className="text-xs font-semibold text-slate-200">{cp.milestone.replace(/_/g, ' ')}</span>
                  <span className="text-[10px] text-slate-500 font-mono">
                    {cp.reachedAt ? new Date(cp.reachedAt).toLocaleString() : 'PENDING'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-sm text-slate-500 italic mt-4">
            No timeline checkpoints active.
          </div>
        )}
      </CardContent>
    </Card>
  );
}
