"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Camera } from "lucide-react";

interface SnapshotDashboardProps {
  snapshots: unknown;
}

export function SnapshotDashboard({ snapshots }: SnapshotDashboardProps) {
  if (!snapshots) return null;

  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <Camera className="h-4 w-4 text-emerald-400" />
          Snapshot Status
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-3 mt-2">
          <div className="flex justify-between items-center border-b border-slate-800/50 pb-2">
            <span className="text-xs text-slate-400">Total Relationships</span>
            <span className="font-mono text-slate-300">{snapshots.relationships.toLocaleString()}</span>
          </div>
          <div className="flex justify-between items-center border-b border-slate-800/50 pb-2">
            <span className="text-xs text-slate-400">Critical Assets</span>
            <span className="font-mono text-emerald-400">{snapshots.critical}</span>
          </div>
          <div className="flex justify-between items-center border-b border-slate-800/50 pb-2">
            <span className="text-xs text-slate-400">Topology Health</span>
            <span className="font-mono text-emerald-400">{snapshots.topologyHealth}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs text-slate-400">Availability</span>
            <span className="font-mono text-emerald-400 font-bold">{snapshots.availability}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
