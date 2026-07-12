"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Sigma } from "lucide-react";

interface ObjectiveFunctionTableProps {
  objectives: any[];
}

export function ObjectiveFunctionTable({ objectives }: ObjectiveFunctionTableProps) {
  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <Sigma className="h-4 w-4 text-indigo-400" />
          Active Objective Functions
        </CardTitle>
      </CardHeader>
      <CardContent>
        {objectives && objectives.length > 0 ? (
          <div className="space-y-3 mt-2">
            {objectives.map((obj, idx) => (
              <div key={idx} className="p-3 bg-slate-950/50 rounded border border-slate-800 space-y-2">
                <div className="flex justify-between items-center border-b border-slate-800 pb-1">
                  <span className="text-sm font-medium text-slate-200">{obj.name}</span>
                  <span className="text-xs text-indigo-400 font-mono">Weight: {obj.weighting.toFixed(1)}</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400 font-mono break-all">{obj.formula}</span>
                  <span className={`px-2 py-0.5 rounded border ${obj.type === 'MAXIMIZE' ? 'bg-emerald-950 border-emerald-900 text-emerald-400' : 'bg-rose-950 border-rose-900 text-rose-400'}`}>
                    {obj.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-sm text-slate-500 italic mt-4">
            No active objective functions defined.
          </div>
        )}
      </CardContent>
    </Card>
  );
}
