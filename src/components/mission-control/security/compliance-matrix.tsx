"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

interface ComplianceMatrixProps {
  compliance: unknown[];
}

export function ComplianceMatrix({ compliance }: ComplianceMatrixProps) {
  if (!compliance) return null;

  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <CheckCircle2 className="h-4 w-4 text-emerald-500" />
          Compliance Matrix
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 mt-2">
          {compliance.map((comp, idx) => (
            <div key={idx} className="flex justify-between items-center p-2 bg-slate-950/50 rounded border border-slate-800">
              <span className="text-xs font-semibold text-slate-300">{comp.framework}</span>
              <div className="flex flex-col text-right">
                <span className="font-mono text-[9px] text-emerald-400">{comp.status}</span>
                <span className="text-[10px] text-slate-500">{comp.evidence}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
