"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { GitCommit } from "lucide-react";

interface IncidentTimelineProps {
  timeline: unknown[];
}

export function IncidentTimeline({ timeline }: IncidentTimelineProps) {
  if (!timeline || timeline.length === 0) return null;

  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <GitCommit className="h-4 w-4 text-indigo-400" />
          Deterministic Timeline
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative border-l border-slate-800 ml-3 space-y-4 mt-2">
          {timeline.map((event, idx) => (
            <div key={idx} className="relative pl-4">
              <div className="absolute w-2 h-2 bg-indigo-500 rounded-full -left-[4.5px] top-1.5" />
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-slate-300">{event.eventType}</span>
                <span className="text-[10px] text-slate-500 mt-0.5">{event.description}</span>
                <div className="flex justify-between items-center mt-1">
                  <span className="text-[9px] font-mono text-slate-600 bg-slate-950 px-1 py-0.5 rounded border border-slate-800">
                    {event.sourceSubsystem}
                  </span>
                  <span className="text-[9px] font-mono text-slate-600">
                    {new Date(event.timestamp).toLocaleTimeString()}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
