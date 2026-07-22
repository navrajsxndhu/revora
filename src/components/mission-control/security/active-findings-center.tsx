"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { AlertOctagon } from "lucide-react";

interface ActiveFindingsCenterProps {
  findings: any[];
}

export function ActiveFindingsCenter({ findings }: ActiveFindingsCenterProps) {
  if (!findings) return null;

  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <AlertOctagon className="h-4 w-4 text-rose-500" />
          Active Findings
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 mt-2">
          {findings.map((finding, idx) => (
            <div key={idx} className="p-2 bg-slate-950/50 rounded border border-slate-800/50 flex flex-col gap-1">
              <div className="flex justify-between items-center">
                <span className="text-xs font-semibold text-slate-200">{finding.impact}</span>
                <span className={`font-mono text-[9px] px-1.5 py-0.5 rounded border ${
                  finding.severity === 'HIGH' ? 'border-rose-900 text-rose-400 bg-rose-950/30' : 'border-amber-900 text-amber-400 bg-amber-950/30'
                }`}>
                  {finding.severity}
                </span>
              </div>
              <div className="flex justify-between items-center text-[10px] text-slate-400">
                <span>Target: <span className="text-slate-300 font-mono">{finding.target}</span></span>
                <span className="font-mono text-slate-500">{finding.status}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
