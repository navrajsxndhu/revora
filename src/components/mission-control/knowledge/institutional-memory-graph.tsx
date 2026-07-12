"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Network } from "lucide-react";

interface InstitutionalMemoryGraphProps {
  data: {
    totalLinks: number;
    memoryDensity: number;
    graphStatus: string;
  } | null;
}

export function InstitutionalMemoryGraph({ data }: InstitutionalMemoryGraphProps) {
  if (!data) return null;

  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <Network className="h-4 w-4 text-purple-400" />
          Institutional Memory Graph
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center justify-center p-4">
          <div className="text-3xl font-bold text-slate-100 mb-1">
            {data.totalLinks}
          </div>
          <div className="text-xs text-slate-500 mb-4">Total Synaptic Links</div>

          <div className="w-full flex justify-between items-center text-sm p-3 bg-slate-950/50 rounded border border-slate-800 mb-2">
            <span className="text-slate-400">Memory Density</span>
            <span className="text-purple-400 font-mono">{data.memoryDensity.toFixed(1)}%</span>
          </div>

          <div className="w-full flex justify-between items-center text-sm p-3 bg-slate-950/50 rounded border border-slate-800">
            <span className="text-slate-400">Graph Status</span>
            <span className="text-slate-200 font-medium">{data.graphStatus.replace(/_/g, ' ')}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
