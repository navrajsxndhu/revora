"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { RotateCcw } from "lucide-react";

interface RollbackPlanViewerProps {
  rollback: any;
}

export function RollbackPlanViewer({ rollback }: RollbackPlanViewerProps) {
  if (!rollback) return null;

  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <RotateCcw className="h-4 w-4 text-orange-400" />
          Deterministic Rollback Strategy
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="p-3 bg-slate-950/50 rounded border border-slate-800 mt-2 space-y-2">
          <div className="flex justify-between items-center border-b border-slate-800 pb-2">
            <span className="text-sm text-slate-400">Rollback Version</span>
            <span className="text-sm font-mono text-orange-400">{rollback.rollbackVersion}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-slate-400">Recovery Strategy</span>
            <span className="text-sm font-medium text-slate-200">{rollback.recoveryStrategy.replace(/_/g, ' ')}</span>
          </div>
          <div className="text-xs text-slate-500 italic mt-2">
            Rollback plan is deterministically generated and preserved for immediate inversion prior to execution start.
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
