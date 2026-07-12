"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Layers } from "lucide-react";

interface ExecutionStageTableProps {
  stages: any[];
}

export function ExecutionStageTable({ stages }: ExecutionStageTableProps) {
  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <Layers className="h-4 w-4 text-emerald-400" />
          Execution Stage Sequence
        </CardTitle>
      </CardHeader>
      <CardContent>
        {stages && stages.length > 0 ? (
          <div className="space-y-3 mt-2">
            {stages.map((stage, idx) => (
              <div key={idx} className="p-3 bg-slate-950/50 rounded border border-slate-800 relative">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-medium text-slate-200">
                    <span className="text-slate-500 mr-2">[{stage.executionOrder}]</span>
                    {stage.stageName.replace(/_/g, ' ')}
                  </span>
                  <span className={`text-xs px-2 py-0.5 rounded font-mono ${
                    stage.validationStatus === 'PASSED' ? 'bg-emerald-950 text-emerald-400 border border-emerald-900' :
                    stage.validationStatus === 'PENDING' ? 'bg-amber-950 text-amber-400 border border-amber-900' :
                    'bg-rose-950 text-rose-400 border border-rose-900'
                  }`}>
                    {stage.validationStatus}
                  </span>
                </div>
                {stage.prerequisites && stage.prerequisites.length > 0 && (
                  <div className="text-xs text-slate-500 mt-2">
                    Prereqs: {stage.prerequisites.join(", ")}
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-sm text-slate-500 italic mt-4">
            No active execution stages compiled.
          </div>
        )}
      </CardContent>
    </Card>
  );
}
