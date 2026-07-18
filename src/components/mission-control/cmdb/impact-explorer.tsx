"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Radar } from "lucide-react";

export function ImpactExplorer() {
  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <Radar className="h-4 w-4 text-purple-400" />
          Impact Explorer
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-32 flex flex-col items-center justify-center border border-dashed border-slate-700/50 rounded bg-slate-950/20">
          <span className="text-sm text-slate-500">Interactive Impact Radius</span>
          <span className="text-[10px] text-slate-600 mt-1">Select an asset to view downstream impact</span>
        </div>
      </CardContent>
    </Card>
  );
}
