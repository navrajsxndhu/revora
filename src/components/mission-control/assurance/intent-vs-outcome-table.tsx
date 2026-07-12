"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { GitCompare } from "lucide-react";

interface IntentVsOutcomeTableProps {
  intent: {
    objective: string;
    expectedOutcome: string;
  } | null;
  actuals: {
    latencyDelta: string;
    treasuryDelta: string;
    reliabilityDelta: string;
  } | null;
}

export function IntentVsOutcomeTable({ intent, actuals }: IntentVsOutcomeTableProps) {
  if (!intent || !actuals) return null;

  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <GitCompare className="h-4 w-4 text-purple-400" />
          Intent vs Measured Outcome
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4 mt-2">
          <div className="p-3 bg-slate-950/50 rounded border border-slate-800 space-y-2">
            <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold border-b border-slate-800 pb-1">Expected Intent</div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-400">Objective</span>
              <span className="font-medium text-slate-200">{intent.objective}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-400">Expected Outcome</span>
              <span className="font-medium text-purple-300">{intent.expectedOutcome}</span>
            </div>
          </div>

          <div className="p-3 bg-slate-950/50 rounded border border-slate-800 space-y-2">
            <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold border-b border-slate-800 pb-1">Measured Actuals</div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-400">Latency Delta</span>
              <span className={`font-mono ${actuals.latencyDelta.startsWith('-') ? 'text-emerald-400' : 'text-rose-400'}`}>
                {actuals.latencyDelta}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-400">Treasury Delta</span>
              <span className={`font-mono ${actuals.treasuryDelta.startsWith('+') ? 'text-emerald-400' : 'text-rose-400'}`}>
                {actuals.treasuryDelta}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-400">Reliability Delta</span>
              <span className={`font-mono ${actuals.reliabilityDelta.startsWith('+') ? 'text-emerald-400' : 'text-amber-400'}`}>
                {actuals.reliabilityDelta}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
