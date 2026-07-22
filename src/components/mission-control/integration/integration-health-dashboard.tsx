"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ActivitySquare } from "lucide-react";

interface IntegrationHealthDashboardProps {
  healthStats: any;
}

export function IntegrationHealthDashboard({ healthStats }: IntegrationHealthDashboardProps) {
  if (!healthStats) return null;

  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <ActivitySquare className="h-4 w-4 text-emerald-400" />
          Integration Health Matrix
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 mt-2">
          <div className="flex flex-col gap-1 p-2 bg-slate-950/50 rounded border border-slate-800/50">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">System Uptime</span>
            <span className="text-lg font-mono text-emerald-400">{healthStats.uptimePercentage}%</span>
          </div>
          <div className="flex flex-col gap-1 p-2 bg-slate-950/50 rounded border border-slate-800/50">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Payload Latency</span>
            <span className="text-lg font-mono text-amber-400">{healthStats.latencyMs}ms</span>
          </div>
          <div className="flex flex-col gap-1 p-2 bg-slate-950/50 rounded border border-slate-800/50">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Active Connections</span>
            <span className="text-lg font-mono text-indigo-400">{healthStats.activeConnections}</span>
          </div>
          <div className="flex flex-col gap-1 p-2 bg-slate-950/50 rounded border border-slate-800/50">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Sync Integrity</span>
            <span className="text-lg font-mono text-emerald-400">100%</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
