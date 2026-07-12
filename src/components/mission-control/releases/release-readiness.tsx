"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Gauge } from "lucide-react";

interface ReleaseReadinessProps {
  readiness: any;
}

export function ReleaseReadiness({ readiness }: ReleaseReadinessProps) {
  if (!readiness) return null;

  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <Gauge className="h-4 w-4 text-emerald-400" />
          Structural Readiness Profile
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center justify-center py-4">
          <div className="text-4xl font-mono font-bold text-emerald-400">{readiness.score}%</div>
          <span className="text-xs text-slate-500 uppercase tracking-wider mt-1">Readiness Quotient</span>
        </div>
        <div className="space-y-2 mt-2 border-t border-slate-800/50 pt-3">
          <div className="flex justify-between items-center text-xs">
            <span className="text-slate-400">Planning Complete</span>
            <span className={`font-mono ${readiness.planningComplete ? 'text-emerald-400' : 'text-rose-400'}`}>{readiness.planningComplete ? 'YES' : 'NO'}</span>
          </div>
          <div className="flex justify-between items-center text-xs">
            <span className="text-slate-400">Assurance Verified</span>
            <span className={`font-mono ${readiness.assuranceVerified ? 'text-emerald-400' : 'text-rose-400'}`}>{readiness.assuranceVerified ? 'YES' : 'NO'}</span>
          </div>
          <div className="flex justify-between items-center text-xs">
            <span className="text-slate-400">Integration Healthy</span>
            <span className={`font-mono ${readiness.integrationHealthy ? 'text-emerald-400' : 'text-rose-400'}`}>{readiness.integrationHealthy ? 'YES' : 'NO'}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
