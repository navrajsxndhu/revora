"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Activity } from "lucide-react";

interface ExecutiveServiceMetricsProps {
  metrics: any;
}

export function ExecutiveServiceMetrics({ metrics }: ExecutiveServiceMetricsProps) {
  if (!metrics) return null;

  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <Activity className="h-4 w-4 text-sky-400" />
          Executive Service Metrics
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-3 mt-2">
          <div className="flex justify-between items-center border-b border-slate-800/50 pb-2">
            <span className="text-xs text-slate-400">Total Requests</span>
            <span className="font-mono text-sky-400">{metrics.totalRequests}</span>
          </div>
          <div className="flex justify-between items-center border-b border-slate-800/50 pb-2">
            <span className="text-xs text-slate-400">Resolution Rate</span>
            <span className="font-mono text-emerald-400">{metrics.resolutionRate}</span>
          </div>
          <div className="flex justify-between items-center border-b border-slate-800/50 pb-2">
            <span className="text-xs text-slate-400">Approval Rate</span>
            <span className="font-mono text-emerald-400">{metrics.approvalRate}</span>
          </div>
          <div className="flex justify-between items-center border-b border-slate-800/50 pb-2">
            <span className="text-xs text-slate-400">SLA Compliance</span>
            <span className="font-mono text-emerald-400">{metrics.slaCompliance}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs text-slate-400">Maturity</span>
            <span className="font-mono text-indigo-400 text-[10px]">{metrics.serviceMaturity}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
