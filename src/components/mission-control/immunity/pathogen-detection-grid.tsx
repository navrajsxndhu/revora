"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BugOff } from "lucide-react";

interface PathogenDetectionGridProps {
  data: {
    pathogenScore: number;
    contaminationSeverity: number;
    propagationVelocity: number;
    classification: string;
  } | null;
}

export function PathogenDetectionGrid({ data }: PathogenDetectionGridProps) {
  if (!data) return null;

  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <BugOff className="h-4 w-4 text-orange-400" />
          Pathogen Detection
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2 mt-2">
          <div className="flex flex-col gap-1 p-3 bg-slate-950/50 rounded border border-slate-800">
            <span className="text-xs text-slate-500">Pathogen Score</span>
            <span className={`text-xl font-mono ${data.pathogenScore > 50 ? 'text-orange-400' : 'text-emerald-400'}`}>
              {data.pathogenScore.toFixed(1)}
            </span>
          </div>
          <div className="flex flex-col gap-1 p-3 bg-slate-950/50 rounded border border-slate-800">
            <span className="text-xs text-slate-500">Contamination</span>
            <span className={`text-xl font-mono ${data.contaminationSeverity > 50 ? 'text-rose-400' : 'text-slate-200'}`}>
              {data.contaminationSeverity.toFixed(1)}
            </span>
          </div>
        </div>
        <div className="mt-4 p-3 bg-slate-950/50 rounded border border-slate-800 flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-xs text-slate-500">Propagation Velocity</span>
            <span className="text-sm text-slate-300">{data.propagationVelocity.toFixed(2)}x</span>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-xs text-slate-500">State</span>
            <span className={`text-sm font-medium ${data.classification === 'ISOLATED' ? 'text-emerald-400' : 'text-orange-400'}`}>
              {data.classification.replace(/_/g, ' ')}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
