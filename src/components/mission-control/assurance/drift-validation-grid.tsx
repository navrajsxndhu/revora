"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";

interface DriftValidationGridProps {
  drift: any;
}

export function DriftValidationGrid({ drift }: DriftValidationGridProps) {
  if (!drift) return null;

  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <AlertTriangle className="h-4 w-4 text-amber-400" />
          Operational Drift Detection
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="p-3 bg-slate-950/50 rounded border border-slate-800 mt-2 space-y-2">
          <div className="flex justify-between items-center border-b border-slate-800 pb-2">
            <span className="text-sm text-slate-400">Drift Category</span>
            <span className="text-sm font-medium text-amber-400">{drift.driftCategory.replace(/_/g, ' ')}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-slate-400">Severity</span>
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-amber-950 border border-amber-900 text-amber-400">
              {drift.severity}
            </span>
          </div>
          <div className="text-xs text-slate-500 italic mt-2">
            Drift detects latent post-execution side effects (e.g., slow treasury decay or survivability regression) that bypass immediate verification gates.
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
