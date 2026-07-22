"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { LineChart } from "lucide-react";

interface ParetoFrontierPanelProps {
  candidates: any[];
}

export function ParetoFrontierPanel({ candidates }: ParetoFrontierPanelProps) {
  // A pseudo-visualization of the Pareto frontier using HTML elements to represent plotted bounds
  return (
    <Card className="border-slate-800 bg-slate-900/50 h-full">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <LineChart className="h-4 w-4 text-emerald-400" />
          Pareto Optimal Frontier
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative h-48 w-full border-l-2 border-b-2 border-slate-700 mt-4 rounded-bl-sm flex items-end">
          <span className="absolute -left-6 top-0 text-xs text-slate-500 -rotate-90 origin-left">Objective Score</span>
          <span className="absolute bottom-[-24px] right-0 text-xs text-slate-500">Survivability Impact</span>
          
          {candidates && candidates.map((c, i) => {
            // Mock plotting logic for the pseudo-chart
            const bottom = Math.min(Math.max((c.objectiveScore / 100) * 100, 10), 90);
            const left = Math.min(Math.max(((c.survivabilityImpact + 20) / 40) * 100, 10), 90);
            const isWinner = c.ranking === 1;

            return (
              <div 
                key={i}
                className={`absolute w-3 h-3 rounded-full -ml-1.5 -mb-1.5 ${isWinner ? 'bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]' : c.constitutionalCompliance ? 'bg-indigo-400' : 'bg-rose-500'}`}
                style={{ bottom: `${bottom}%`, left: `${left}%` }}
                title={`${c.candidateName}: Score ${c.objectiveScore}, Surv ${c.survivabilityImpact}`}
              />
            )
          })}
        </div>
        <div className="flex justify-between items-center mt-8 text-xs text-slate-400">
          <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-emerald-400"></div> Optimal</div>
          <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-indigo-400"></div> Valid</div>
          <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-rose-500"></div> Invalid</div>
        </div>
      </CardContent>
    </Card>
  );
}
