"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BarChart4 } from "lucide-react";

interface ExecutivePlatformMetricsProps {
  metrics: unknown;
}

export function ExecutivePlatformMetrics({ metrics }: ExecutivePlatformMetricsProps) {
  if (!metrics) return null;

  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <BarChart4 className="h-4 w-4 text-emerald-400" />
          Executive Platform Metrics
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 mt-2">
          <div className="flex flex-col border-b border-slate-800/50 pb-2">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider">Success Rate</span>
            <span className="font-mono text-lg text-emerald-400">{metrics.successRate}</span>
          </div>
          <div className="flex flex-col border-b border-slate-800/50 pb-2">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider">Avg Time</span>
            <span className="font-mono text-lg text-slate-200">{metrics.avgTime}</span>
          </div>
          <div className="flex flex-col border-b border-slate-800/50 pb-2">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider">Violations</span>
            <span className={`font-mono text-lg ${metrics.violations > 0 ? 'text-rose-400' : 'text-emerald-400'}`}>
              {metrics.violations}
            </span>
          </div>
          <div className="flex flex-col border-b border-slate-800/50 pb-2">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider">Utilization</span>
            <span className="font-mono text-lg text-emerald-400">{metrics.utilization}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider">Adoption</span>
            <span className="font-mono text-lg text-emerald-400">{metrics.adoption}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider">Self-Service</span>
            <span className="font-mono text-lg text-indigo-400">{metrics.selfServiceRatio}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
