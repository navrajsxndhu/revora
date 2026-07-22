"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";

interface RiskProfileProps {
  risk: any;
}

export function RiskProfile({ risk }: RiskProfileProps) {
  if (!risk) return null;

  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <AlertTriangle className="h-4 w-4 text-amber-400" />
          Deterministic Risk Profile
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3 mt-2">
          <div className="flex justify-between items-center text-xs border-b border-slate-800/50 pb-1">
            <span className="text-slate-400">Blast Radius</span>
            <span className="font-mono text-amber-400">{risk.blastRadius}%</span>
          </div>
          <div className="flex justify-between items-center text-xs border-b border-slate-800/50 pb-1">
            <span className="text-slate-400">Rollback Complexity</span>
            <span className="font-mono text-emerald-400">{risk.rollbackComplexity}</span>
          </div>
          <div className="flex justify-between items-center text-xs border-b border-slate-800/50 pb-1">
            <span className="text-slate-400">Dependency Depth</span>
            <span className="font-mono text-slate-300">{risk.dependencyDepth} layers</span>
          </div>
          <div className="flex justify-between items-center text-xs border-b border-slate-800/50 pb-1">
            <span className="text-slate-400">Service Criticality</span>
            <span className="font-mono text-rose-400">{risk.serviceCriticality}%</span>
          </div>
          <div className="flex justify-between items-center text-xs border-b border-slate-800/50 pb-1">
            <span className="text-slate-400">Infrastructure Impact</span>
            <span className="font-mono text-amber-400">{risk.infrastructureImpact}%</span>
          </div>
          <div className="flex justify-between items-center text-xs">
            <span className="text-slate-400">Treasury Exposure</span>
            <span className="font-mono text-emerald-400">${risk.treasuryExposure.toFixed(2)}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
