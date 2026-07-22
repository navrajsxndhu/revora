"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BookMarked } from "lucide-react";

interface DecisionLedgerProps {
  ledger: any[];
}

export function DecisionLedger({ ledger }: DecisionLedgerProps) {
  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <BookMarked className="h-4 w-4 text-purple-400" />
          Immutable Decision Ledger
        </CardTitle>
      </CardHeader>
      <CardContent>
        {ledger && ledger.length > 0 ? (
          <div className="space-y-4 mt-2">
            {ledger.map((entry, idx) => (
              <div key={idx} className="p-3 bg-slate-950/50 rounded border border-slate-800 flex flex-col gap-2">
                <div className="flex justify-between items-center border-b border-slate-800 pb-2">
                  <span className="text-xs font-mono text-slate-400">{entry.decisionType}</span>
                  <span className="text-xs text-slate-500">{new Date(entry.createdAt).toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-300">Selected Option:</span>
                  <span className="text-sm font-medium text-emerald-400">{entry.selectedOption.replace(/_/g, ' ')}</span>
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  Score: <span className="font-mono text-slate-300">{entry.decisionScore.toFixed(1)}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-sm text-slate-500 italic mt-4">
            No decisions recorded in ledger.
          </div>
        )}
      </CardContent>
    </Card>
  );
}
