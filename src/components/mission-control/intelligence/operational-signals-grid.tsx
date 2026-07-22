"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ActivitySquare } from "lucide-react";

interface OperationalSignalsGridProps {
  signals: unknown[];
}

export function OperationalSignalsGrid({ signals }: OperationalSignalsGridProps) {
  return (
    <Card className="border-slate-800 bg-slate-900/50 h-full">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <ActivitySquare className="h-4 w-4 text-indigo-400" />
          Deterministic Operational Signals
        </CardTitle>
      </CardHeader>
      <CardContent>
        {signals && signals.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
            {signals.map((sig, idx) => (
              <div key={idx} className="p-3 bg-slate-950/50 rounded border border-slate-800 flex flex-col gap-2 relative overflow-hidden">
                <div className="absolute top-0 right-0 px-2 py-0.5 bg-slate-800 text-[9px] uppercase tracking-wider text-slate-400 rounded-bl">
                  {sig.signalCategory}
                </div>
                <div className="flex flex-col mt-3">
                  <span className="text-xs font-semibold text-slate-200">{sig.signalName.replace(/_/g, ' ')}</span>
                  <span className="text-xl font-mono text-indigo-400 mt-1">{sig.signalValue}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-sm text-slate-500 italic mt-4">
            No operational signals extracted.
          </div>
        )}
      </CardContent>
    </Card>
  );
}
