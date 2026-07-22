"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Link2 } from "lucide-react";

interface IntelligenceCorrelationTableProps {
  correlations: unknown[];
}

export function IntelligenceCorrelationTable({ correlations }: IntelligenceCorrelationTableProps) {
  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <Link2 className="h-4 w-4 text-emerald-400" />
          Deterministic Operational Correlations
        </CardTitle>
      </CardHeader>
      <CardContent>
        {correlations && correlations.length > 0 ? (
          <div className="space-y-3 mt-2">
            {correlations.map((corr, idx) => (
              <div key={idx} className="p-3 bg-slate-950/50 rounded border border-slate-800 flex flex-col gap-2">
                <div className="flex items-center gap-2 text-xs">
                  <span className="px-2 py-0.5 bg-slate-900 text-indigo-400 border border-slate-800 rounded font-semibold">{corr.sourceSubsystem}</span>
                  <span className="text-slate-500">→</span>
                  <span className="px-2 py-0.5 bg-slate-900 text-emerald-400 border border-slate-800 rounded font-semibold">{corr.targetSubsystem}</span>
                </div>
                <div className="flex flex-col mt-1">
                  <span className="text-sm text-slate-300">{corr.correlationReason}</span>
                  <div className="flex items-center gap-1 mt-2">
                    <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Evidence:</span>
                    <span className="text-[10px] font-mono text-slate-400 bg-slate-900 px-1 rounded">{corr.evidenceReference}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-sm text-slate-500 italic mt-4">
            No intelligence correlations established.
          </div>
        )}
      </CardContent>
    </Card>
  );
}
