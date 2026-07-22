"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BookOpen } from "lucide-react";

interface OptimizationLedgerProps {
  ledgerEntries: any[];
}

export function OptimizationLedger({ ledgerEntries }: OptimizationLedgerProps) {
  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <BookOpen className="h-4 w-4 text-slate-400" />
          Optimization Ledger History
        </CardTitle>
      </CardHeader>
      <CardContent>
        {ledgerEntries && ledgerEntries.length > 0 ? (
          <div className="space-y-3 mt-2">
            {ledgerEntries.map((entry, idx) => (
              <div key={idx} className="p-3 bg-slate-950/50 rounded border border-slate-800 flex flex-col gap-2">
                <div className="flex justify-between items-center border-b border-slate-800/50 pb-1">
                  <span className="text-xs font-semibold text-slate-300">{entry.optimizationObjective}</span>
                  <span className="text-[10px] text-slate-500 font-mono">{new Date(entry.createdAt).toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-500">Selected Config:</span>
                  <span className="text-emerald-400 font-mono">{entry.selectedConfiguration}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-500">Score Achieved:</span>
                  <span className="text-slate-300 font-mono">{entry.optimizationScore.toFixed(2)}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-sm text-slate-500 italic mt-4">
            No optimization history found in ledger.
          </div>
        )}
      </CardContent>
    </Card>
  );
}
