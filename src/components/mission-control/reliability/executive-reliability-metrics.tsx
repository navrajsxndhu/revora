"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BarChart4 } from "lucide-react";

interface ExecutiveReliabilityMetricsProps {
  metrics: unknown;
}

export function ExecutiveReliabilityMetrics({ metrics }: ExecutiveReliabilityMetricsProps) {
  if (!metrics) return null;

  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <BarChart4 className="h-4 w-4 text-emerald-400" />
          Executive Metrics
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 mt-2">
          <div className="flex flex-col border-b border-slate-800/50 pb-2">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider">Compliance</span>
            <span className="font-mono text-lg text-emerald-400">{metrics.sloCompliance}</span>
          </div>
          <div className="flex flex-col border-b border-slate-800/50 pb-2">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider">MTTR</span>
            <span className="font-mono text-lg text-emerald-400">{metrics.mttr}</span>
          </div>
          <div className="flex flex-col border-b border-slate-800/50 pb-2">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider">Deploy Success</span>
            <span className="font-mono text-lg text-slate-200">{metrics.deploymentSuccess}</span>
          </div>
          <div className="flex flex-col border-b border-slate-800/50 pb-2">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider">Budget Health</span>
            <span className="font-mono text-lg text-emerald-400">{metrics.errorBudgetHealth}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider">Capacity Health</span>
            <span className="font-mono text-lg text-emerald-400">{metrics.capacityHealth}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
