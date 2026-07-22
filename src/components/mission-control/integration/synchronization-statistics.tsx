"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BarChart3 } from "lucide-react";

interface SynchronizationStatisticsProps {
  stats: unknown;
}

export function SynchronizationStatistics({ stats }: SynchronizationStatisticsProps) {
  if (!stats) return null;

  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <BarChart3 className="h-4 w-4 text-indigo-400" />
          Synchronization Statistics
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 mt-2">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Total Events</span>
            <span className="text-xl font-mono text-slate-200">{stats.totalEvents}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Validated</span>
            <span className="text-xl font-mono text-emerald-400">{stats.validatedEvents}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Blocked</span>
            <span className="text-xl font-mono text-rose-400">{stats.blockedEvents}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Data Completeness</span>
            <span className="text-xl font-mono text-indigo-400">{stats.completeness}%</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
