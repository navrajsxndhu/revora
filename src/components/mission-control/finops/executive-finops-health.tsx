"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Activity } from "lucide-react";

interface ExecutiveFinOpsHealthProps {
  health: any;
}

export function ExecutiveFinOpsHealth({ health }: ExecutiveFinOpsHealthProps) {
  if (!health) return null;

  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <Activity className="h-4 w-4 text-emerald-400" />
          Executive Health
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-3 mt-2">
          <div className="flex justify-between items-center border-b border-slate-800/50 pb-2">
            <span className="text-xs text-slate-400">Cost Efficiency</span>
            <span className="font-mono text-emerald-400">{health.efficiency}%</span>
          </div>
          <div className="flex justify-between items-center border-b border-slate-800/50 pb-2">
            <span className="text-xs text-slate-400">Budget Health</span>
            <span className="font-mono text-emerald-400">{health.budgetHealth}%</span>
          </div>
          <div className="flex justify-between items-center border-b border-slate-800/50 pb-2">
            <span className="text-xs text-slate-400">Optimization Progress</span>
            <span className="font-mono text-amber-400">{health.optimizationProgress}%</span>
          </div>
          <div className="flex justify-between items-center border-b border-slate-800/50 pb-2">
            <span className="text-xs text-slate-400">FinOps Governance</span>
            <span className="font-mono text-emerald-400">{health.governance}%</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs text-slate-400">Maturity</span>
            <span className="font-mono text-indigo-400 text-[10px]">{health.maturity}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
