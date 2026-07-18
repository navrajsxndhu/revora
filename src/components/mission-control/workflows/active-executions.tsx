"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Activity } from "lucide-react";

interface ActiveExecutionsProps {
  executions: any;
}

export function ActiveExecutions({ executions }: ActiveExecutionsProps) {
  if (!executions) return null;

  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <Activity className="h-4 w-4 text-emerald-400" />
          Execution Fleet
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-5 gap-4 mt-2">
          <div className="flex flex-col items-center border-r border-slate-800">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider">Running</span>
            <span className="font-mono text-2xl text-emerald-400">{executions.running}</span>
          </div>
          <div className="flex flex-col items-center border-r border-slate-800">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider">Waiting</span>
            <span className="font-mono text-2xl text-amber-400">{executions.waiting}</span>
          </div>
          <div className="flex flex-col items-center border-r border-slate-800">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider">Failed</span>
            <span className="font-mono text-2xl text-rose-500">{executions.failed}</span>
          </div>
          <div className="flex flex-col items-center border-r border-slate-800">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider">Completed</span>
            <span className="font-mono text-2xl text-slate-300">{executions.completed}</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider">Rolled Back</span>
            <span className="font-mono text-2xl text-slate-400">{executions.rolledBack}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
