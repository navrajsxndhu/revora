"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Search } from "lucide-react";

interface RootCauseEvidenceProps {
  evidence: unknown[];
}

export function RootCauseEvidence({ evidence }: RootCauseEvidenceProps) {
  if (!evidence || evidence.length === 0) return null;

  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <Search className="h-4 w-4 text-emerald-400" />
          Deterministic Evidence
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3 mt-2">
          {evidence.map((ev, idx) => (
            <div key={idx} className="p-2 bg-slate-950/50 rounded border border-slate-800 flex flex-col gap-1">
              <div className="flex justify-between items-center border-b border-slate-800/50 pb-1">
                <span className="text-xs font-semibold text-slate-300">{ev.evidenceType}</span>
                <span className="font-mono text-[9px] text-slate-500">Ref: {ev.referenceId}</span>
              </div>
              <p className="text-[10px] text-slate-400 font-mono mt-1 leading-tight">
                {ev.deterministicProof}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
