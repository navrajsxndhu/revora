"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { LineChart } from "lucide-react";

interface ConvergenceChartProps {
  data: {
    convergenceScore: number;
    optimizationDelta: number;
    classification: string;
  } | null;
}

export function ConvergenceChart({ data }: ConvergenceChartProps) {
  if (!data) return null;

  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <LineChart className="h-4 w-4 text-emerald-400" />
          Mathematical Convergence
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 mt-2">
          <div className="flex justify-between items-center p-3 bg-slate-950/50 rounded border border-slate-800">
            <span className="text-sm text-slate-400">Convergence Score</span>
            <span className="text-xl font-mono text-emerald-400">{data.convergenceScore.toFixed(1)}</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-slate-950/50 rounded border border-slate-800">
            <span className="text-sm text-slate-400">Optimization Delta</span>
            <span className={`text-xl font-mono ${data.optimizationDelta >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
              {data.optimizationDelta > 0 ? '+' : ''}{data.optimizationDelta.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between items-center p-3 bg-slate-950/50 rounded border border-slate-800">
            <span className="text-sm text-slate-400">Classification</span>
            <span className="text-sm font-medium text-slate-300">{data.classification.replace(/_/g, ' ')}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
