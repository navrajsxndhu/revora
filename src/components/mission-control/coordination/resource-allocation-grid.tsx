"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Lock } from "lucide-react";

interface ResourceAllocationGridProps {
  resources: any[];
}

export function ResourceAllocationGrid({ resources }: ResourceAllocationGridProps) {
  return (
    <Card className="border-slate-800 bg-slate-900/50 h-full">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <Lock className="h-4 w-4 text-amber-400" />
          Resource Contention Locks
        </CardTitle>
      </CardHeader>
      <CardContent>
        {resources && resources.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
            {resources.map((res, idx) => (
              <div key={idx} className="p-3 bg-slate-950/50 rounded border border-slate-800 flex flex-col gap-2">
                <div className="flex justify-between items-center border-b border-slate-800/50 pb-1">
                  <span className="text-xs font-semibold text-slate-200 truncate">{res.resourceType.replace(/_/g, ' ')}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-500">Capacity Lock:</span>
                  <span className="text-amber-400 font-mono">{res.reservedCapacity}</span>
                </div>
                <div className="flex flex-col gap-1 mt-1">
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Temporal Window</span>
                  <span className="text-xs font-mono text-slate-300 bg-slate-900 p-1 rounded border border-slate-800 text-center">{res.reservationWindow}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-sm text-slate-500 italic mt-4">
            No resource locks active.
          </div>
        )}
      </CardContent>
    </Card>
  );
}
