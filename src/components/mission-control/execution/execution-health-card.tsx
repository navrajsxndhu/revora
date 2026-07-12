"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Activity } from "lucide-react";

interface ExecutionHealthCardProps {
  health: {
    status: string;
    lastVerified: string;
  } | null;
}

export function ExecutionHealthCard({ health }: ExecutionHealthCardProps) {
  if (!health) return null;

  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <Activity className="h-4 w-4 text-emerald-400" />
          Execution Subsystem Health
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mt-2 space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm text-slate-400">Status</span>
            <span className="text-sm font-medium text-emerald-400 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              {health.status}
            </span>
          </div>
          <div className="flex justify-between items-center text-xs">
            <span className="text-slate-500">Last Verified</span>
            <span className="text-slate-400 font-mono">{health.lastVerified}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
