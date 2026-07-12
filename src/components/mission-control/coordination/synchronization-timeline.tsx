"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

interface SynchronizationTimelineProps {
  timelineData: number[];
}

export function SynchronizationTimeline({ timelineData }: SynchronizationTimelineProps) {
  if (!timelineData || timelineData.length === 0) return null;

  return (
    <Card className="border-slate-800 bg-slate-900/50 h-full">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <TrendingUp className="h-4 w-4 text-indigo-400" />
          Synchronization Integrity Trajectory
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex h-32 items-end gap-1 mt-4">
          {timelineData.map((val, idx) => {
            const heightPercentage = Math.max(10, Math.min(100, val));
            return (
              <div key={idx} className="flex-1 flex flex-col justify-end items-center group relative">
                <div 
                  className="w-full bg-indigo-500/50 rounded-t-sm transition-all group-hover:bg-indigo-400"
                  style={{ height: `${heightPercentage}%` }}
                ></div>
                {/* Tooltip on hover */}
                <div className="absolute -top-8 bg-slate-800 text-slate-200 text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  {val.toFixed(1)}
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-between items-center text-xs text-slate-500 mt-2">
          <span>T-30d</span>
          <span>Present</span>
        </div>
      </CardContent>
    </Card>
  );
}
