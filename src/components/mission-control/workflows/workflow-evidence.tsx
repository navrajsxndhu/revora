"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { FileCheck } from "lucide-react";

interface WorkflowEvidenceProps {
  evidence: any;
}

export function WorkflowEvidence({ evidence }: WorkflowEvidenceProps) {
  if (!evidence) return null;

  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <FileCheck className="h-4 w-4 text-emerald-400" />
          Immutable Evidence Trail
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3 mt-2">
          {evidence.map((ev: any, idx: number) => (
            <div key={idx} className="flex flex-col p-2 bg-slate-950/50 rounded border border-slate-800">
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs font-semibold text-slate-300">{ev.trigger}</span>
                <span className="text-[10px] text-slate-500">{ev.timestamp}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-mono text-slate-400">Ref: {ev.evidence}</span>
                <span className="text-[10px] font-mono text-emerald-400">{ev.validation}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
