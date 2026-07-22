"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Activity } from "lucide-react";

interface OptimizationSimulationPanelProps {
  simulation: unknown;
}

export function OptimizationSimulationPanel({ simulation }: OptimizationSimulationPanelProps) {
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
            <span className="text-slate-400">Projected Improvement</span>
            <span className="text-emerald-400 font-mono font-medium">{simulation.projectedImprovement}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-400">Constitutional Status</span>
            <span className={`px-2 py-0.5 rounded font-mono text-[10px] uppercase tracking-wider ${simulation.simulationResult === 'CONSTITUTIONALLY_SAFE' ? 'bg-emerald-950 border border-emerald-900 text-emerald-400' : 'bg-rose-950 border border-rose-900 text-rose-400'}`}>
              {simulation.simulationResult.replace(/_/g, ' ')}
            </span>
          </div>
          <p className="text-xs text-slate-500 italic mt-2">
            This simulation verifies that the optimal configuration does not inadvertently breach systemic constraints before the plan is formally executed.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
