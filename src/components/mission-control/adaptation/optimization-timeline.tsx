"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ListTree } from "lucide-react";

interface OptimizationTimelineProps {
  evidence: unknown[];
}

export function OptimizationTimeline({ evidence }: OptimizationTimelineProps) {
  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <ListTree className="h-4 w-4 text-emerald-400" />
          Optimization Lineage
        </CardTitle>
      </CardHeader>
      <CardContent>
        {evidence && evidence.length > 0 ? (
          <div className="relative border-l border-slate-700 ml-3 mt-4 space-y-6">
            {evidence.slice(0, 4).map((entry, idx) => (
              <div key={idx} className="relative pl-6">
                <div className="absolute w-3 h-3 bg-emerald-500 rounded-full -left-[6.5px] top-1.5 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                <div className="text-sm font-medium text-slate-200">{entry.adaptationType.replace(/_/g, ' ')}</div>
                <div className="text-xs text-slate-500 mb-1">{new Date(entry.createdAt).toLocaleDateString()}</div>
                <div className="text-xs text-slate-400">
                  {entry.mathematicalEvidence}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-sm text-slate-500 italic mt-4">
            No optimization lineage recorded.
          </div>
        )}
      </CardContent>
    </Card>
  );
}
