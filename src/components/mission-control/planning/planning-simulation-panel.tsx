"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Activity } from "lucide-react";

interface PlanningSimulationPanelProps {
  simulation: any;
}

export function PlanningSimulationPanel({ simulation }: PlanningSimulationPanelProps) {
  if (!simulation) return null;

  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <Activity className="h-4 w-4 text-blue-400" />
          Pre-Adoption Simulation
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="p-3 bg-slate-950 rounded border border-slate-800 mt-2 space-y-3 text-sm">
          <div className="flex justify-between items-center border-b border-slate-800/50 pb-2">
            <span className="text-slate-400">Projected Completion</span>
            <span className="text-indigo-400 font-mono font-medium">{new Date(simulation.projectedCompletion).toLocaleDateString()}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-400">Survivability Projection</span>
            <span className="text-emerald-400 font-mono font-medium">{simulation.survivabilityProjection}%</span>
          </div>
          <p className="text-xs text-slate-500 italic mt-2">
            This simulation iterates through the assembled plan timeline, generating estimated execution impact maps covering treasury and constitutional survivability.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
