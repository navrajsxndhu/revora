"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Fingerprint } from "lucide-react";

interface ReleaseEvidenceProps {
  evidence: any[];
}

export function ReleaseEvidence({ evidence }: ReleaseEvidenceProps) {
  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <Fingerprint className="h-4 w-4 text-slate-400" />
          Execution Evidence
        </CardTitle>
      </CardHeader>
      <CardContent>
        {evidence && evidence.length > 0 ? (
          <div className="space-y-3 mt-2">
            {evidence.map((ev, idx) => (
              <div key={idx} className="p-2 bg-slate-950/50 rounded border border-slate-800 flex flex-col gap-1">
                <div className="flex justify-between items-center border-b border-slate-800/50 pb-1">
                  <span className="text-xs font-semibold text-slate-300">{ev.evidenceType}</span>
                  <span className="text-[10px] text-slate-500 font-mono">{new Date(ev.recordedAt).toLocaleString()}</span>
                </div>
                <div className="flex flex-col gap-1 text-xs">
                  <span className="text-slate-500">Ref: <span className="text-indigo-400 font-mono">{ev.referenceId}</span></span>
                  <span className="text-slate-500">Hash: <span className="text-slate-400 font-mono text-[10px]">{ev.validationHash}</span></span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-sm text-slate-500 italic mt-4">
            No execution evidence recorded.
          </div>
        )}
      </CardContent>
    </Card>
  );
}
