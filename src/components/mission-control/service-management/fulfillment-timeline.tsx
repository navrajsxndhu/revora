"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { History } from "lucide-react";

interface FulfillmentTimelineProps {
  timeline: any;
}

export function FulfillmentTimeline({ timeline }: FulfillmentTimelineProps) {
  if (!timeline) return null;

  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <History className="h-4 w-4 text-emerald-500" />
          Fulfillment Timeline
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4 mt-2">
          {timeline.map((event: any, idx: number) => (
            <div key={idx} className="flex flex-col gap-1 relative pl-4 border-l-2 border-emerald-900/50">
              <div className="absolute w-2 h-2 rounded-full bg-emerald-500 -left-[5px] top-1"></div>
              <div className="flex justify-between">
                <span className="text-xs text-slate-300 font-semibold">{event.step}</span>
                <span className="text-[10px] text-slate-500">{event.time}</span>
              </div>
              <div className="flex">
                <span className="text-[10px] text-emerald-400 font-mono">{event.status}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
