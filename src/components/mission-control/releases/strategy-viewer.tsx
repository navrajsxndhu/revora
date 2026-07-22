"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { GitMerge } from "lucide-react";

interface StrategyViewerProps {
  strategy: unknown;
}

export function StrategyViewer({ strategy }: StrategyViewerProps) {
  if (!strategy) return null;

  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <GitMerge className="h-4 w-4 text-emerald-400" />
          Rollout Strategy
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center justify-center py-2">
          <span className="text-xl font-mono font-bold tracking-widest text-emerald-400">
            {strategy.strategyType}
          </span>
          <span className="text-xs text-slate-500 mt-2 text-center">{strategy.description}</span>
        </div>
      </CardContent>
    </Card>
  );
}
