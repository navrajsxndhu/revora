"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Eye } from "lucide-react";

interface PerceptionIntegrityGridProps {
  data: {
    integrityScore: number;
    blindSpotIndex: number;
    synchronizationDrift: number;
  } | null;
}

export function PerceptionIntegrityGrid({ data }: PerceptionIntegrityGridProps) {
  if (!data) return null;

  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <Eye className="h-4 w-4 text-emerald-400" />
          Perception Integrity
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-3 mt-2">
          <div className="flex flex-col gap-1 p-3 bg-slate-950/50 rounded border border-slate-800">
            <span className="text-xs text-slate-500">Integrity Score</span>
            <span className="text-xl font-mono text-emerald-400">{data.integrityScore.toFixed(1)}</span>
          </div>
          <div className="flex flex-col gap-1 p-3 bg-slate-950/50 rounded border border-slate-800">
            <span className="text-xs text-slate-500">Blind Spot Index</span>
            <span className="text-xl font-mono text-rose-400">{data.blindSpotIndex.toFixed(1)}</span>
          </div>
          <div className="flex flex-col gap-1 p-3 bg-slate-950/50 rounded border border-slate-800">
            <span className="text-xs text-slate-500">Sync Drift</span>
            <span className="text-xl font-mono text-amber-400">{data.synchronizationDrift.toFixed(1)}%</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
