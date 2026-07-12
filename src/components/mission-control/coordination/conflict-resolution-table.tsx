"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ShieldAlert } from "lucide-react";

interface ConflictResolutionTableProps {
  conflicts: any[];
}

export function ConflictResolutionTable({ conflicts }: ConflictResolutionTableProps) {
  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <ShieldAlert className="h-4 w-4 text-rose-400" />
          Pre-Execution Conflicts & Resolutions
        </CardTitle>
      </CardHeader>
      <CardContent>
        {conflicts && conflicts.length > 0 ? (
          <div className="space-y-3 mt-2">
            {conflicts.map((conflict, idx) => (
              <div key={idx} className="p-3 bg-slate-950/50 rounded border border-slate-800 flex flex-col gap-2">
                <div className="flex justify-between items-center border-b border-slate-800/50 pb-1">
                  <span className="text-xs font-semibold text-slate-300 break-words">{conflict.conflictType.replace(/_/g, ' ')}</span>
                  <span className={`text-[10px] font-bold tracking-wider px-2 py-0.5 rounded uppercase ${conflict.severity === 'CRITICAL' ? 'bg-rose-950 text-rose-500' : 'bg-amber-950 text-amber-500'}`}>
                    {conflict.severity}
                  </span>
                </div>
                <div className="flex flex-col mt-1">
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Mathematical Resolution Strategy</span>
                  <span className="text-xs font-mono text-emerald-400 mt-1">{conflict.resolutionStrategy}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-sm text-slate-500 italic mt-4">
            No coordination conflicts detected.
          </div>
        )}
      </CardContent>
    </Card>
  );
}
