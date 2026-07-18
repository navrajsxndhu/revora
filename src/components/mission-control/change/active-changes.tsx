"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ArrowRightLeft } from "lucide-react";

interface ActiveChangesProps {
  changes: any[];
}

export function ActiveChanges({ changes }: ActiveChangesProps) {
  if (!changes) return null;

  return (
    <Card className="border-indigo-900/50 bg-indigo-950/10">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <ArrowRightLeft className="h-4 w-4 text-indigo-500" />
          Active Changes
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3 mt-2">
          {changes.map((change, idx) => (
            <div key={idx} className="p-3 bg-slate-950/50 rounded border border-indigo-900/30 flex flex-col gap-2">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-sm font-semibold text-slate-200">{change.title}</h4>
                  <p className="text-xs text-slate-400 mt-1">Owner: <span className="text-slate-300">{change.owner}</span></p>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className={`px-2 py-0.5 rounded font-mono text-[10px] border ${
                    change.priority === 'CRITICAL' ? 'bg-rose-950 text-rose-400 border-rose-800' : 'bg-amber-950 text-amber-400 border-amber-800'
                  }`}>
                    {change.priority}
                  </span>
                  <span className="text-[10px] font-mono text-slate-500">{change.status}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
