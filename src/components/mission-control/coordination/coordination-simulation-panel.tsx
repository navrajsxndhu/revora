"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Activity } from "lucide-react";

interface CoordinationSimulationPanelProps {
  simulation: unknown;
}

export function CoordinationSimulationPanel({ simulation }: CoordinationSimulationPanelProps) {
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
            <span className="text-slate-400">Coordination Feasibility</span>
            <span className="text-emerald-400 font-mono text-[10px] uppercase font-bold tracking-wider">{simulation.coordinationFeasibility.replace(/_/g, ' ')}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-400">Contention Probability</span>
            <span className="text-indigo-400 font-mono">{simulation.contentionProbability}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-400">Survivability Projection</span>
            <span className="text-emerald-400 font-mono">{simulation.survivabilityProjection}%</span>
          </div>
          <p className="text-xs text-slate-500 italic mt-2">
            Simulates the execution of the entire cross-plan coordinated timeline to mathematically prove execution viability before resource locking.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
