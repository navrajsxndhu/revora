"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Target } from "lucide-react";

interface GoalDefinitionTableProps {
  goals: any[];
}

export function GoalDefinitionTable({ goals }: GoalDefinitionTableProps) {
  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <Target className="h-4 w-4 text-emerald-400" />
          Planning Objectives
        </CardTitle>
      </CardHeader>
      <CardContent>
        {goals && goals.length > 0 ? (
          <div className="space-y-3 mt-2">
            {goals.map((goal, idx) => (
              <div key={idx} className="p-3 bg-slate-950/50 rounded border border-slate-800 flex flex-col gap-2">
                <div className="flex flex-col gap-1 border-b border-slate-800/50 pb-2">
                  <span className="text-sm font-medium text-slate-200">{goal.name}</span>
                  <span className="text-xs text-slate-500">{goal.description}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Target Metrics</span>
                  {goal.targetMetrics.map((m: any, midx: number) => (
                    <div key={midx} className="flex justify-between items-center text-xs">
                      <span className="text-slate-300 font-mono">{m.metric}</span>
                      <span className={`px-2 py-0.5 rounded border font-mono text-[10px] ${m.comparator === 'LESS_THAN' ? 'bg-amber-950 border-amber-900 text-amber-400' : 'bg-emerald-950 border-emerald-900 text-emerald-400'}`}>
                        {m.comparator === 'LESS_THAN' ? '<' : '>'} {m.targetValue}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-sm text-slate-500 italic mt-4">
            No active planning goals defined.
          </div>
        )}
      </CardContent>
    </Card>
  );
}
