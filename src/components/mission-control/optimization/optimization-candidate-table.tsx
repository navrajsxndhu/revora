"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ListTree } from "lucide-react";

interface OptimizationCandidateTableProps {
  candidates: any[];
}

export function OptimizationCandidateTable({ candidates }: OptimizationCandidateTableProps) {
  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <ListTree className="h-4 w-4 text-indigo-400" />
          Explored Configurations
        </CardTitle>
      </CardHeader>
      <CardContent>
        {candidates && candidates.length > 0 ? (
          <div className="space-y-2 mt-2">
            {candidates.sort((a,b) => a.ranking - b.ranking).map((c, idx) => (
              <div key={idx} className={`p-3 rounded border flex flex-col gap-2 ${c.ranking === 1 ? 'bg-emerald-950/30 border-emerald-900/50' : 'bg-slate-950/50 border-slate-800'}`}>
                <div className="flex justify-between items-center border-b border-slate-800/50 pb-1">
                  <span className="text-sm font-mono font-medium text-slate-200">
                    <span className="text-slate-500 mr-2">#{c.ranking}</span>
                    {c.candidateName}
                  </span>
                  {c.ranking === 1 && <span className="text-[10px] uppercase tracking-wider text-emerald-400 font-bold">Optimal</span>}
                  {!c.constitutionalCompliance && <span className="text-[10px] uppercase tracking-wider text-rose-500 font-bold">Violates Constraints</span>}
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Obj Score</span>
                    <span className="text-slate-300 font-mono">{c.objectiveScore.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Surv Impact</span>
                    <span className={`font-mono ${c.survivabilityImpact >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                      {c.survivabilityImpact > 0 ? '+' : ''}{c.survivabilityImpact.toFixed(1)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-sm text-slate-500 italic mt-4">
            No candidates generated.
          </div>
        )}
      </CardContent>
    </Card>
  );
}
