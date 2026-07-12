"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BrainCircuit } from "lucide-react";

interface ExecutiveIntelligenceDashboardProps {
  score: number;
}

export function ExecutiveIntelligenceDashboard({ score }: ExecutiveIntelligenceDashboardProps) {
  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <BrainCircuit className="h-4 w-4 text-indigo-400" />
          Executive Intelligence Summary
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2 mt-2">
          <p className="text-xs text-slate-400">
            This operational intelligence model is constructed deterministically from 20 isolated subsystem primitives across the entire organizational stack. No probabilistic AI analytics are used.
          </p>
          <div className="flex justify-between items-center p-2 bg-slate-950/50 rounded border border-slate-800 mt-2">
            <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500">Global Executive Confidence</span>
            <span className="text-sm font-mono text-emerald-400">{score.toFixed(1)}%</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
