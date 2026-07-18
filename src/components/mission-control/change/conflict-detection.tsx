"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";

interface ConflictDetectionProps {
  conflicts: any[];
}

export function ConflictDetection({ conflicts }: ConflictDetectionProps) {
  if (!conflicts) return null;

  return (
    <Card className="border-rose-900/50 bg-rose-950/10">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <AlertTriangle className="h-4 w-4 text-rose-500" />
          Conflict Detection
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3 mt-2">
          {conflicts.map((conflict, idx) => (
            <div key={idx} className="p-2 bg-slate-950/50 rounded border border-rose-900/30 flex flex-col gap-1">
              <div className="flex justify-between items-center border-b border-rose-900/30 pb-1">
                <span className="text-xs font-semibold text-rose-200">{conflict.type}</span>
                <span className={`font-mono text-[9px] px-1 py-0.5 rounded border ${
                  conflict.severity === 'HIGH' ? 'bg-rose-950 text-rose-400 border-rose-800' : 'bg-amber-950 text-amber-400 border-amber-800'
                }`}>
                  {conflict.severity}
                </span>
              </div>
              <p className="text-[10px] text-slate-400 font-mono mt-1">
                Target: {conflict.target}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
