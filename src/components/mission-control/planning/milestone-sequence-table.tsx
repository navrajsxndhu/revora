"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ListOrdered } from "lucide-react";

interface MilestoneSequenceTableProps {
  milestones: any[];
}

export function MilestoneSequenceTable({ milestones }: MilestoneSequenceTableProps) {
  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <ListOrdered className="h-4 w-4 text-emerald-400" />
          Milestone Sequence
        </CardTitle>
      </CardHeader>
      <CardContent>
        {milestones && milestones.length > 0 ? (
          <div className="space-y-2 mt-2">
            {milestones.sort((a,b) => a.executionOrder - b.executionOrder).map((m, idx) => (
              <div key={idx} className="p-2 rounded border bg-slate-950/50 border-slate-800 flex items-center gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center text-xs font-mono text-slate-400">
                  {m.executionOrder}
                </div>
                <div className="flex-1 flex justify-between items-center">
                  <span className="text-sm font-medium text-slate-300">{m.name}</span>
                  <span className="text-xs font-mono text-slate-500">{m.id}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-sm text-slate-500 italic mt-4">
            No milestones defined in sequence.
          </div>
        )}
      </CardContent>
    </Card>
  );
}
