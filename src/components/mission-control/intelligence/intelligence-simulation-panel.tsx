"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Activity } from "lucide-react";

interface IntelligenceSimulationPanelProps {
  simulation: unknown;
}

export function IntelligenceSimulationPanel({ simulation }: IntelligenceSimulationPanelProps) {
  if (!simulation) return null;

  const isNegative = simulation.survivabilityDelta < 0;

  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <Activity className="h-4 w-4 text-blue-400" />
          Organizational Stress Simulation
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="p-3 bg-slate-950 rounded border border-slate-800 mt-2 space-y-3 text-sm">
          <div className="flex justify-between items-center border-b border-slate-800/50 pb-2">
            <span className="text-slate-400">Stress Scenario</span>
            <span className="text-rose-400 font-mono text-[10px] uppercase font-bold tracking-wider">{simulation.scenario.replace(/_/g, ' ')}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-400">Projected Org Health</span>
            <span className="text-amber-400 font-mono">{simulation.projectedHealth.toFixed(1)}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-400">Survivability Delta</span>
            <span className={`font-mono ${isNegative ? 'text-rose-400' : 'text-emerald-400'}`}>{simulation.survivabilityDelta > 0 ? '+' : ''}{simulation.survivabilityDelta.toFixed(1)}%</span>
          </div>
          <p className="text-[10px] text-slate-500 italic mt-2 uppercase tracking-wide">
            Simulates structural impacts on organizational health to predict systemic resilience under extreme pressure.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
