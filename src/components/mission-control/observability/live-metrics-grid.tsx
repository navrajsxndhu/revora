"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Activity } from "lucide-react";

interface LiveMetricsGridProps {
  metrics: unknown[];
}

export function LiveMetricsGrid({ metrics }: LiveMetricsGridProps) {
  if (!metrics) return null;

  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <Activity className="h-4 w-4 text-emerald-400" />
          Live Metrics
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-4 gap-2 mt-2">
          {metrics.map((metric, idx) => (
            <div key={idx} className="p-2 bg-slate-950/50 rounded border border-slate-800 flex flex-col gap-1">
              <span className="text-[10px] font-semibold text-slate-400">{metric.name}</span>
              <span className="font-mono text-sm text-slate-200">{metric.value}</span>
              <span className={`text-[9px] font-mono ${metric.trend.startsWith('+') ? 'text-amber-400' : (metric.trend.startsWith('-') ? 'text-emerald-400' : 'text-slate-500')}`}>
                {metric.trend}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
