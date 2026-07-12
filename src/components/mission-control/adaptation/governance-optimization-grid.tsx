"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { SlidersHorizontal } from "lucide-react";

interface GovernanceOptimizationGridProps {
  data: {
    optimizationCategory: string;
    projectedImprovement: number;
    parametersTuned: Record<string, string>;
  } | null;
}

export function GovernanceOptimizationGrid({ data }: GovernanceOptimizationGridProps) {
  if (!data) return null;

  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <SlidersHorizontal className="h-4 w-4 text-blue-400" />
          Governance Optimization
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 mt-2 md:grid-cols-2">
          <div className="flex flex-col gap-1 p-3 bg-slate-950/50 rounded border border-slate-800">
            <span className="text-xs text-slate-500">Active Category</span>
            <span className="text-sm font-medium text-blue-400">{data.optimizationCategory.replace(/_/g, ' ')}</span>
          </div>
          <div className="flex flex-col gap-1 p-3 bg-slate-950/50 rounded border border-slate-800">
            <span className="text-xs text-slate-500">Projected Improvement</span>
            <span className="text-xl font-mono text-emerald-400">+{data.projectedImprovement.toFixed(1)}%</span>
          </div>
        </div>

        <div className="mt-4 p-3 bg-slate-950/50 rounded border border-slate-800">
          <div className="text-xs text-slate-500 mb-2">Parameters Tuned</div>
          {Object.entries(data.parametersTuned).length > 0 ? (
            <div className="space-y-2">
              {Object.entries(data.parametersTuned).map(([key, val]) => (
                <div key={key} className="flex justify-between text-sm">
                  <span className="text-slate-400">{key}</span>
                  <span className="text-slate-200 font-mono">{val}</span>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-sm text-slate-500 italic">No parameters actively tuning.</div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
