"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { HeartPulse } from "lucide-react";

interface IncidentHealthMetricsProps {
  health: any;
}

export function IncidentHealthMetrics({ health }: IncidentHealthMetricsProps) {
  if (!health) return null;

  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <HeartPulse className="h-4 w-4 text-emerald-400" />
          Organizational Maturity
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 mt-2">
          <div className="flex flex-col border-b border-slate-800/50 pb-2">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider">MTTD</span>
            <span className="font-mono text-lg text-slate-200">{health.mttd}</span>
          </div>
          <div className="flex flex-col border-b border-slate-800/50 pb-2">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider">MTTR</span>
            <span className="font-mono text-lg text-slate-200">{health.mttr}</span>
          </div>
          <div className="flex flex-col border-b border-slate-800/50 pb-2">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider">Frequency</span>
            <span className="font-mono text-lg text-amber-400">{health.frequency}</span>
          </div>
          <div className="flex flex-col border-b border-slate-800/50 pb-2">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider">Rollback Success</span>
            <span className="font-mono text-lg text-emerald-400">{health.rollbackSuccess}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider">Recovery Success</span>
            <span className="font-mono text-lg text-emerald-400">{health.recoverySuccess}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider">Repeat Rate</span>
            <span className="font-mono text-lg text-rose-400">{health.repeatRate}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
