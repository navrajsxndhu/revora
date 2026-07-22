"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Activity } from "lucide-react";

interface ExecutiveWorkflowMetricsProps {
  metrics: unknown;
}

export function ExecutiveWorkflowMetrics({ metrics }: ExecutiveWorkflowMetricsProps) {
  if (!metrics) return null;

  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <Activity className="h-4 w-4 text-emerald-400" />
          Executive Workflow Metrics
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-3 mt-2">
          <div className="flex justify-between items-center border-b border-slate-800/50 pb-2">
            <span className="text-xs text-slate-400">Total Workflows</span>
            <span className="font-mono text-emerald-400">{metrics.totalWorkflows}</span>
          </div>
          <div className="flex justify-between items-center border-b border-slate-800/50 pb-2">
            <span className="text-xs text-slate-400">Execution Success</span>
            <span className="font-mono text-emerald-400">{metrics.executionSuccess}%</span>
          </div>
          <div className="flex justify-between items-center border-b border-slate-800/50 pb-2">
            <span className="text-xs text-slate-400">Rollback Success</span>
            <span className="font-mono text-emerald-400">{metrics.rollbackSuccess}%</span>
          </div>
          <div className="flex justify-between items-center border-b border-slate-800/50 pb-2">
            <span className="text-xs text-slate-400">Governance Compliance</span>
            <span className="font-mono text-emerald-400">{metrics.governanceCompliance}%</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs text-slate-400">Maturity</span>
            <span className="font-mono text-indigo-400 text-[10px]">{metrics.workflowMaturity}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
