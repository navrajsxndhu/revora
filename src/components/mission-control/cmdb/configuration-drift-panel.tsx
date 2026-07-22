"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";

interface ConfigurationDriftPanelProps {
  drift: any;
}

export function ConfigurationDriftPanel({ drift }: ConfigurationDriftPanelProps) {
  if (!drift) return null;

  return (
    <Card className="border-amber-900/50 bg-amber-950/10">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <AlertTriangle className="h-4 w-4 text-amber-500" />
          Configuration Drift
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-4 gap-4 mt-2">
          <div className="flex flex-col items-center border-r border-amber-900/30">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider">Missing</span>
            <span className="font-mono text-xl text-rose-400">{drift.missing}</span>
          </div>
          <div className="flex flex-col items-center border-r border-amber-900/30">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider">Changed</span>
            <span className="font-mono text-xl text-amber-400">{drift.changed}</span>
          </div>
          <div className="flex flex-col items-center border-r border-amber-900/30">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider">Orphaned</span>
            <span className="font-mono text-xl text-slate-400">{drift.orphaned}</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider">Severity</span>
            <span className="font-mono text-xl text-amber-500">{drift.severity}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
