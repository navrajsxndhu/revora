"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { List } from "lucide-react";

interface ReliabilityLedgerProps {
  ledger: unknown[];
}

export function ReliabilityLedger({ ledger }: ReliabilityLedgerProps) {
  if (!ledger || ledger.length === 0) return null;

  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <List className="h-4 w-4 text-slate-400" />
          Reliability Ledger
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3 mt-2">
          {ledger.map((entry, idx) => (
            <div key={idx} className="p-2 bg-slate-950/50 rounded border border-slate-800 flex flex-col gap-1">
              <div className="flex justify-between items-center border-b border-slate-800/50 pb-1">
                <span className="text-xs font-semibold text-slate-300">{entry.event}</span>
                <span className={`font-mono text-[9px] px-1 py-0.5 rounded ${
                  entry.impact.startsWith('+') ? 'text-emerald-400 bg-emerald-950/50' : (entry.impact === '0.00%' ? 'text-slate-400 bg-slate-800/50' : 'text-rose-400 bg-rose-950/50')
                }`}>
                  {entry.impact}
                </span>
              </div>
              <div className="flex justify-between items-center mt-1">
                <span className="text-[9px] text-slate-500 font-mono">{new Date(entry.date).toLocaleString()}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
