"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Wrench } from "lucide-react";

interface RecoveryCenterProps {
  recovery: any;
}

export function RecoveryCenter({ recovery }: RecoveryCenterProps) {
  if (!recovery) return null;

  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <Wrench className="h-4 w-4 text-amber-400" />
          Recovery Center
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-3 mt-2">
          <div className="flex justify-between items-center text-xs">
            <span className="text-slate-400">Rollback Readiness</span>
            <span className={`font-mono ${recovery.rollbackReadiness ? 'text-emerald-400' : 'text-rose-400'}`}>
              {recovery.rollbackReadiness ? 'VERIFIED' : 'UNAVAILABLE'}
            </span>
          </div>
          <div className="flex justify-between items-center text-xs">
            <span className="text-slate-400">Estimated Completion</span>
            <span className="font-mono text-slate-300">{recovery.estimatedCompletion}</span>
          </div>
          
          <div className="space-y-2 mt-2">
            <span className="text-xs text-slate-400">Recovery Plan Stages:</span>
            <div className="flex flex-wrap gap-1">
              {recovery.stages.map((stage: string, idx: number) => (
                <span key={idx} className="px-1.5 py-0.5 rounded font-mono text-[9px] bg-slate-950 text-slate-400 border border-slate-800">
                  {idx + 1}. {stage}
                </span>
              ))}
            </div>
          </div>

          <div className="w-full bg-slate-950 rounded-full h-1.5 mt-2 border border-slate-800 overflow-hidden">
            <div className="bg-amber-500 h-1.5" style={{ width: `${recovery.progress}%` }}></div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
