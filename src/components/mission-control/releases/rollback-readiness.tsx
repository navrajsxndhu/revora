"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { History } from "lucide-react";

export function RollbackReadiness() {
  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <History className="h-4 w-4 text-emerald-400" />
          Rollback Readiness
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center justify-center py-4">
          <span className="text-2xl font-mono font-bold tracking-widest text-emerald-400">
            SECURED
          </span>
          <span className="text-xs text-slate-500 mt-2 text-center">Previous deployment footprint preserved. Instant reversion available.</span>
        </div>
      </CardContent>
    </Card>
  );
}
