"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { LineChart } from "lucide-react";

interface OrganizationalTrendTimelineProps {
  timelineData: number[];
}

export function OrganizationalTrendTimeline({ timelineData }: OrganizationalTrendTimelineProps) {
  if (!timelineData || timelineData.length === 0) return null;

  return (
    <Card className="border-slate-800 bg-slate-900/50 h-full">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <LineChart className="h-4 w-4 text-emerald-400" />
          Organizational Health Trajectory
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex h-32 items-end gap-1 mt-4">
          {timelineData.map((val, idx) => {
            const heightPercentage = Math.max(10, Math.min(100, val));
            const isHealthy = val >= 90;
            const isWarning = val >= 70 && val < 90;
            
            let barColor = 'bg-rose-500/50 group-hover:bg-rose-400';
            if (isHealthy) barColor = 'bg-emerald-500/50 group-hover:bg-emerald-400';
            else if (isWarning) barColor = 'bg-amber-500/50 group-hover:bg-amber-400';

            return (
              <div key={idx} className="flex-1 flex flex-col justify-end items-center group relative">
                <div 
                  className={`w-full rounded-t-sm transition-all ${barColor}`}
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
        <div className="flex justify-between items-center text-[10px] text-slate-500 mt-2 uppercase tracking-wider font-semibold">
          <span>T-30d</span>
          <span>Present</span>
        </div>
      </CardContent>
    </Card>
  );
}
