"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ActivitySquare } from "lucide-react";

interface CoordinationHealthDashboardProps {
  healthStats: unknown;
}

export function CoordinationHealthDashboard({ healthStats }: CoordinationHealthDashboardProps) {
  if (!healthStats) return null;

  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <ActivitySquare className="h-4 w-4 text-emerald-400" />
          Coordination Health Matrix
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 mt-2">
          <div className="flex flex-col gap-1 p-2 bg-slate-950/50 rounded border border-slate-800/50">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Active Synchronization Threads</span>
            <span className="text-lg font-mono text-slate-200">{healthStats.activeThreads}</span>
          </div>
          <div className="flex flex-col gap-1 p-2 bg-slate-950/50 rounded border border-slate-800/50">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Systemic Deadlocks</span>
            <span className="text-lg font-mono text-emerald-400">{healthStats.deadlocks}</span>
          </div>
          <div className="flex flex-col gap-1 p-2 bg-slate-950/50 rounded border border-slate-800/50">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Nodes In Contention</span>
            <span className="text-lg font-mono text-amber-400">{healthStats.nodesInContention}</span>
          </div>
          <div className="flex flex-col gap-1 p-2 bg-slate-950/50 rounded border border-slate-800/50">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Federation Alignment</span>
            <span className="text-lg font-mono text-indigo-400">{healthStats.alignment}%</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
