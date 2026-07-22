"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Zap } from "lucide-react";

interface ResourceOptimizationCenterProps {
  optimizations: any[];
}

export function ResourceOptimizationCenter({ optimizations }: ResourceOptimizationCenterProps) {
  if (!optimizations) return null;

  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <Zap className="h-4 w-4 text-indigo-400" />
          Optimization Center
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 mt-2">
          {optimizations.map((opt, idx) => (
            <div key={idx} className="flex justify-between items-center p-2 bg-slate-950/50 rounded border border-slate-800">
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-slate-300">{opt.type}</span>
                <span className="text-[9px] text-slate-500">{opt.resources} Resources Impacted</span>
              </div>
              <div className="flex flex-col text-right">
                <span className="font-mono text-[11px] text-emerald-400">+${opt.savings.toLocaleString()}/mo</span>
                <span className={`text-[9px] ${
                  opt.risk === 'NONE' ? 'text-emerald-500' : 
                  opt.risk === 'LOW' ? 'text-blue-400' : 'text-amber-400'
                }`}>Risk: {opt.risk}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
