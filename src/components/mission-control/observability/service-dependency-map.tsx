"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Waypoints } from "lucide-react";

interface ServiceDependencyMapProps {
  dependencies: any[];
}

export function ServiceDependencyMap({ dependencies }: ServiceDependencyMapProps) {
  if (!dependencies) return null;

  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <Waypoints className="h-4 w-4 text-emerald-400" />
          Dependency Map
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3 mt-2">
          {dependencies.map((dep, idx) => (
            <div key={idx} className="p-2 bg-slate-950/50 rounded border border-slate-800 flex flex-col gap-1">
              <span className="text-xs font-semibold text-slate-200 border-b border-slate-800/50 pb-1">{dep.service}</span>
              <div className="flex flex-wrap gap-1 mt-1">
                {dep.targets.map((target: string, tIdx: number) => (
                  <span key={tIdx} className="font-mono text-[9px] px-1.5 py-0.5 rounded border border-slate-700 text-slate-400 bg-slate-800/30">
                    → {target}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
