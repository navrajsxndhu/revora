"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Activity } from "lucide-react";

interface ImpactAssessmentProps {
  impact: unknown;
}

export function ImpactAssessment({ impact }: ImpactAssessmentProps) {
  if (!impact) return null;

  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <Activity className="h-4 w-4 text-amber-400" />
          Impact Assessment
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3 mt-2">
          <div className="flex justify-between items-center text-xs border-b border-slate-800/50 pb-1">
            <span className="text-slate-400">Services</span>
            <span className="font-mono text-slate-300">{impact.services.length}</span>
          </div>
          <div className="flex justify-between items-center text-xs border-b border-slate-800/50 pb-1">
            <span className="text-slate-400">Infrastructure</span>
            <span className="font-mono text-slate-300">{impact.infrastructure.length}</span>
          </div>
          <div className="flex justify-between items-center text-xs border-b border-slate-800/50 pb-1">
            <span className="text-slate-400">Treasury Impact</span>
            <span className="font-mono text-amber-400">${impact.treasury.toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center text-xs border-b border-slate-800/50 pb-1">
            <span className="text-slate-400">Dependencies</span>
            <span className="font-mono text-slate-300">{impact.dependencies}</span>
          </div>
          <div className="flex justify-between items-center text-xs">
            <span className="text-slate-400">Recovery Complexity</span>
            <span className={`font-mono ${impact.recoveryComplexity === 'HIGH' ? 'text-rose-400' : 'text-emerald-400'}`}>
              {impact.recoveryComplexity}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
