"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Lock } from "lucide-react";

interface ConstraintBoundaryViewerProps {
  constraints: unknown[];
}

export function ConstraintBoundaryViewer({ constraints }: ConstraintBoundaryViewerProps) {
  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <Lock className="h-4 w-4 text-amber-400" />
          Optimization Constraints
        </CardTitle>
      </CardHeader>
      <CardContent>
        {constraints && constraints.length > 0 ? (
          <div className="space-y-2 mt-2">
            {constraints.map((c, idx) => (
              <div key={idx} className="p-2 bg-slate-950/50 rounded border border-slate-800 flex flex-col gap-1">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-medium text-slate-300">{c.constraintType}</span>
                  <span className="text-xs font-mono text-amber-400">Lim: {c.mathematicalLimit}</span>
                </div>
                <div className="text-[10px] text-slate-500 font-mono">
                  Source: {c.sourceReference}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-sm text-slate-500 italic mt-4">
            No constraints bounding this space.
          </div>
        )}
      </CardContent>
    </Card>
  );
}
