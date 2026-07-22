"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Undo2 } from "lucide-react";

interface RollbackCenterProps {
  rollback: unknown;
}

export function RollbackCenter({ rollback }: RollbackCenterProps) {
  if (!rollback) return null;

  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <Undo2 className="h-4 w-4 text-amber-500" />
          Rollback Readiness
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-3 mt-2">
          <div className="flex justify-between items-center border-b border-slate-800/50 pb-2">
            <span className="text-xs text-slate-400">Readiness Level</span>
            <span className="font-mono text-[10px] text-emerald-400 font-bold">{rollback.readiness}</span>
          </div>
          <div className="flex justify-between items-center border-b border-slate-800/50 pb-2">
            <span className="text-xs text-slate-400">Recovery Checkpoints</span>
            <span className="font-mono text-[10px] text-slate-300">{rollback.checkpoints}</span>
          </div>
          <div className="flex justify-between items-center border-b border-slate-800/50 pb-2">
            <span className="text-xs text-slate-400">Estimated Recovery Time</span>
            <span className="font-mono text-[10px] text-amber-400">{rollback.recoveryDuration}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs text-slate-400">Historical Recovery Success</span>
            <span className="font-mono text-[10px] text-emerald-400">{rollback.recoverySuccess}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
