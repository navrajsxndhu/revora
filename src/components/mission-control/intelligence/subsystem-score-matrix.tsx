"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { LayoutGrid } from "lucide-react";

interface SubsystemScoreMatrixProps {
  components: unknown[];
}

export function SubsystemScoreMatrix({ components }: SubsystemScoreMatrixProps) {
  return (
    <Card className="border-slate-800 bg-slate-900/50 h-full">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <LayoutGrid className="h-4 w-4 text-slate-400" />
          Subsystem Score Matrix
        </CardTitle>
      </CardHeader>
      <CardContent>
        {components && components.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
            {components.map((comp, idx) => {
              const isHealthy = comp.score >= 90;
              const isWarning = comp.score >= 70 && comp.score < 90;
              return (
                <div key={idx} className="p-2 bg-slate-950/50 rounded border border-slate-800/50 flex flex-col gap-1">
                  <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider truncate">{comp.subsystem}</span>
                  <div className="flex justify-between items-baseline mt-1">
                    <span className={`text-lg font-mono ${isHealthy ? 'text-emerald-400' : isWarning ? 'text-amber-400' : 'text-rose-400'}`}>
                      {comp.score.toFixed(1)}
                    </span>
                    <span className="text-[9px] text-slate-500">wt: {(comp.weight * 100).toFixed(0)}%</span>
                  </div>
                  <div className="h-1 w-full bg-slate-900 rounded-full overflow-hidden mt-1">
                    <div 
                      className={`h-full rounded-full ${isHealthy ? 'bg-emerald-500' : isWarning ? 'bg-amber-500' : 'bg-rose-500'}`}
                      style={{ width: `${comp.score}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-sm text-slate-500 italic mt-4">
            No subsystem contributions found.
          </div>
        )}
      </CardContent>
    </Card>
  );
}
