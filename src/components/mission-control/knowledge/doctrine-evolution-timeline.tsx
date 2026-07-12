"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { History } from "lucide-react";

interface DoctrineEvolutionTimelineProps {
  data: {
    activeDoctrines: number;
    supersededDoctrines: number;
    lineageDepth: number;
    evidence: string[];
  } | null;
}

export function DoctrineEvolutionTimeline({ data }: DoctrineEvolutionTimelineProps) {
  if (!data) return null;

  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <History className="h-4 w-4 text-cyan-400" />
          Doctrine Lineage Depth
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 mt-2">
          <div className="flex justify-between items-center p-3 bg-slate-950/50 rounded border border-slate-800">
            <span className="text-sm text-slate-400">Active Doctrines</span>
            <span className="text-xl font-mono text-cyan-400">{data.activeDoctrines}</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-slate-950/50 rounded border border-slate-800">
            <span className="text-sm text-slate-400">Superseded Doctrines</span>
            <span className="text-xl font-mono text-slate-500">{data.supersededDoctrines}</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-slate-950/50 rounded border border-slate-800">
            <span className="text-sm text-slate-400">Max Lineage Depth</span>
            <span className="text-xl font-mono text-indigo-400">v{data.lineageDepth}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
