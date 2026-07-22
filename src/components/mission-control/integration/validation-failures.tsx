"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { AlertOctagon } from "lucide-react";

interface ValidationFailuresProps {
  failures: unknown[];
}

export function ValidationFailures({ failures }: ValidationFailuresProps) {
  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <AlertOctagon className="h-4 w-4 text-rose-400" />
          Constitutional Validation Blockers
        </CardTitle>
      </CardHeader>
      <CardContent>
        {failures && failures.length > 0 ? (
          <div className="space-y-3 mt-2">
            {failures.map((fail, idx) => (
              <div key={idx} className="p-3 bg-slate-950/50 rounded border border-rose-800/30 flex flex-col gap-2">
                <div className="flex justify-between items-center border-b border-slate-800/50 pb-1">
                  <span className="text-xs font-semibold text-slate-300">{fail.eventType}</span>
                  <span className="text-[10px] text-rose-400 font-mono">BLOCKED</span>
                </div>
                <div className="flex flex-col gap-1 text-xs mt-1">
                  <span className="text-slate-500">Reason:</span>
                  <span className="text-slate-300">{fail.reason}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-sm text-slate-500 italic mt-4">
            Zero constitutional validation failures. All synchronized events comply with organizational governance.
          </div>
        )}
      </CardContent>
    </Card>
  );
}
