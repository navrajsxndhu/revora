"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Archive } from "lucide-react";

interface ChangeHistoryProps {
  history: unknown[];
}

export function ChangeHistory({ history }: ChangeHistoryProps) {
  if (!history || history.length === 0) return null;

  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <Archive className="h-4 w-4 text-slate-400" />
          Change History
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3 mt-2">
          {history.map((hist, idx) => (
            <div key={idx} className="p-2 bg-slate-950/50 rounded border border-slate-800 flex flex-col gap-1">
              <div className="flex justify-between items-center border-b border-slate-800/50 pb-1">
                <span className="text-xs font-semibold text-slate-300">{hist.title}</span>
                <span className="font-mono text-[9px] px-1 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                  {hist.status}
                </span>
              </div>
              <div className="flex justify-between items-center mt-1">
                <span className="text-[10px] text-slate-500 font-mono">{new Date(hist.date).toLocaleDateString()}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
