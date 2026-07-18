"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Link2 } from "lucide-react";

interface CorrelationMatrixProps {
  correlations: any[];
}

export function CorrelationMatrix({ correlations }: CorrelationMatrixProps) {
  if (!correlations) return null;

  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <Link2 className="h-4 w-4 text-fuchsia-400" />
          Correlation Matrix
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 mt-2">
          {correlations.map((corr, idx) => (
            <div key={idx} className="flex items-center justify-between p-2 bg-slate-950/50 rounded border border-slate-800">
              <span className="text-xs font-mono text-slate-400">{corr.source}</span>
              <span className="text-[10px] text-fuchsia-500 font-mono">→ {corr.confidence}% →</span>
              <span className="text-xs font-mono text-slate-300">{corr.target}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
