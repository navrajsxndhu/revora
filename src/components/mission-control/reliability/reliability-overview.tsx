"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Activity } from "lucide-react";

interface ReliabilityOverviewProps {
  overview: any;
}

export function ReliabilityOverview({ overview }: ReliabilityOverviewProps) {
  if (!overview) return null;

  return (
    <Card className="border-emerald-900/50 bg-emerald-950/10">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <Activity className="h-4 w-4 text-emerald-500" />
          Reliability Overview
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center mt-2">
          <div className="flex flex-col">
            <span className="text-xs text-slate-400">Global Score</span>
            <span className="text-3xl font-bold font-mono text-emerald-400">{overview.globalScore}%</span>
          </div>
          <div className="flex flex-col items-end gap-1 text-xs">
            <span className="flex items-center gap-2 text-slate-300">
              Status: <span className="text-emerald-400 font-mono px-2 py-0.5 rounded bg-emerald-950 border border-emerald-900">{overview.status}</span>
            </span>
            <span className="flex items-center gap-2 text-slate-300">
              Active Incidents: <span className="text-slate-400 font-mono">{overview.activeIncidents}</span>
            </span>
            <span className="flex items-center gap-2 text-slate-300">
              Budget At Risk: <span className="text-emerald-400 font-mono">{overview.budgetAtRisk ? 'YES' : 'NO'}</span>
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
