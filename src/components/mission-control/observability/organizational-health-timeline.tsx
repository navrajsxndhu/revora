"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { LineChart } from "lucide-react";

interface OrganizationalHealthTimelineProps {
  timeline: unknown[];
}

export function OrganizationalHealthTimeline({ timeline }: OrganizationalHealthTimelineProps) {
  if (!timeline) return null;

  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <LineChart className="h-4 w-4 text-emerald-400" />
          Organizational Health Timeline
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-end h-24 mt-2 px-2 border-b border-slate-800/50 pb-2">
          {timeline.map((point, idx) => (
            <div key={idx} className="flex flex-col items-center gap-1">
              <div 
                className="w-8 bg-emerald-500/50 rounded-t border-t border-emerald-400" 
                style={{ height: `${point.score}%` }}
              ></div>
              <span className="text-[9px] text-slate-400 uppercase tracking-wider">{point.date}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
