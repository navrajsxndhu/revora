"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ShieldCheck } from "lucide-react";

interface EvidenceChainViewerProps {
  evidence: unknown[];
}

export function EvidenceChainViewer({ evidence }: EvidenceChainViewerProps) {
  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <ShieldCheck className="h-4 w-4 text-slate-400" />
          Constitutional Validation Chain
        </CardTitle>
      </CardHeader>
      <CardContent>
        {evidence && evidence.length > 0 ? (
          <div className="space-y-3 mt-2">
            {evidence.slice(0, 3).map((entry, idx) => (
              <div key={idx} className="p-3 bg-slate-950/50 rounded border border-slate-800 flex justify-between items-center">
                <div className="flex flex-col">
                  <span className="text-xs text-slate-400">Adaptation: {entry.adaptationType.replace(/_/g, ' ')}</span>
                  <span className="text-sm text-slate-200 mt-1">{entry.constitutionalValidation.replace(/_/g, ' ')}</span>
                </div>
                <ShieldCheck className="h-5 w-5 text-emerald-500/70" />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-sm text-slate-500 italic mt-4">
            No validation chains recorded.
          </div>
        )}
      </CardContent>
    </Card>
  );
}
