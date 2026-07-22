"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BarChart3 } from "lucide-react";

interface ExecutiveMetricsProps {
  metrics: any;
}

export function ExecutiveMetrics({ metrics }: ExecutiveMetricsProps) {
  if (!metrics) return null;

  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <BarChart3 className="h-4 w-4 text-emerald-400" />
          Executive Metrics
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 mt-2">
          <div className="flex flex-col border-b border-slate-800/50 pb-2">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider">Success Rate</span>
            <span className="font-mono text-lg text-emerald-400">{metrics.successRate}</span>
          </div>
          <div className="flex flex-col border-b border-slate-800/50 pb-2">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider">Failed</span>
            <span className="font-mono text-lg text-rose-400">{metrics.failed}</span>
          </div>
          <div className="flex flex-col border-b border-slate-800/50 pb-2">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider">Emergency</span>
            <span className="font-mono text-lg text-amber-400">{metrics.emergency}</span>
          </div>
          <div className="flex flex-col border-b border-slate-800/50 pb-2">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider">Avg Approval</span>
            <span className="font-mono text-lg text-slate-200">{metrics.avgApprovalTime}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider">Rollback Rate</span>
            <span className="font-mono text-lg text-emerald-400">{metrics.rollbackRate}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider">Lead Time</span>
            <span className="font-mono text-lg text-slate-200">{metrics.leadTime}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
