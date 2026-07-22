"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { History } from "lucide-react";

interface OptimizationLedgerTableProps {
  evidence: unknown[];
}

export function OptimizationLedgerTable({ evidence }: OptimizationLedgerTableProps) {
  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <History className="h-4 w-4 text-slate-400" />
          Adaptation Ledger
        </CardTitle>
      </CardHeader>
      <CardContent>
        {evidence && evidence.length > 0 ? (
          <div className="space-y-4 mt-2">
            {evidence.slice(0, 3).map((entry, idx) => (
              <div key={idx} className="p-3 bg-slate-950/50 rounded border border-slate-800 space-y-2">
                <div className="flex justify-between items-center border-b border-slate-800 pb-2">
                  <span className="text-xs font-mono text-slate-400">{entry.adaptationType}</span>
                  <span className="text-xs text-slate-500">{new Date(entry.createdAt).toLocaleDateString()}</span>
                </div>
                <div className="text-xs text-slate-300">
                  <span className="text-slate-500">From: </span>
                  {entry.previousConfiguration}
                </div>
                <div className="text-xs text-emerald-400">
                  <span className="text-slate-500">To: </span>
                  {entry.optimizedConfiguration}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-sm text-slate-500 italic mt-4">
            No mathematical adaptations recorded yet.
          </div>
        )}
      </CardContent>
    </Card>
  );
}
