"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Server } from "lucide-react";

interface CapacityPlanningProps {
  capacity: any;
}

export function CapacityPlanning({ capacity }: CapacityPlanningProps) {
  if (!capacity) return null;

  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <Server className="h-4 w-4 text-indigo-400" />
          Capacity Planning
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3 mt-2">
          <div className="flex justify-between items-center text-xs border-b border-slate-800/50 pb-1">
            <span className="text-slate-400">Compute Utilization</span>
            <span className="font-mono text-slate-300">{capacity.computeUtilization}</span>
          </div>
          <div className="flex justify-between items-center text-xs border-b border-slate-800/50 pb-1">
            <span className="text-slate-400">Compute Headroom</span>
            <span className="font-mono text-emerald-400">{capacity.computeHeadroom}</span>
          </div>
          <div className="flex justify-between items-center text-xs border-b border-slate-800/50 pb-1">
            <span className="text-slate-400">Storage Utilization</span>
            <span className="font-mono text-slate-300">{capacity.storageUtilization}</span>
          </div>
          <div className="flex justify-between items-center text-xs border-b border-slate-800/50 pb-1">
            <span className="text-slate-400">Storage Headroom</span>
            <span className="font-mono text-emerald-400">{capacity.storageHeadroom}</span>
          </div>
          <div className="flex justify-between items-center text-xs">
            <span className="text-slate-400">Growth Rate</span>
            <span className="font-mono text-amber-400">{capacity.growthRate}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
