"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Activity } from "lucide-react";

interface ImpactMatrixProps {
  impact: unknown;
}

export function ImpactMatrix({ impact }: ImpactMatrixProps) {
  if (!impact) return null;

  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <Activity className="h-4 w-4 text-rose-400" />
          Impact Matrix
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3 mt-2">
          <div className="flex justify-between items-center text-xs border-b border-slate-800/50 pb-1">
            <span className="text-slate-400">Services</span>
            <span className="font-mono text-slate-300">{impact.services.length}</span>
          </div>
          <div className="flex justify-between items-center text-xs border-b border-slate-800/50 pb-1">
            <span className="text-slate-400">Regions</span>
            <span className="font-mono text-slate-300">{impact.regions.length}</span>
          </div>
          <div className="flex justify-between items-center text-xs border-b border-slate-800/50 pb-1">
            <span className="text-slate-400">Customers Affected</span>
            <span className="font-mono text-rose-400">{impact.customersAffected}</span>
          </div>
          <div className="flex justify-between items-center text-xs border-b border-slate-800/50 pb-1">
            <span className="text-slate-400">Treasury Burn</span>
            <span className="font-mono text-amber-400">${impact.treasuryBurn.toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center text-xs">
            <span className="text-slate-400">Reliability Hit</span>
            <span className="font-mono text-rose-400">-{impact.reliabilityHit}%</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
