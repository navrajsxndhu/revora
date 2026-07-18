"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { CalendarRange } from "lucide-react";

interface ReleaseWindowsProps {
  windows: any[];
}

export function ReleaseWindows({ windows }: ReleaseWindowsProps) {
  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <CalendarRange className="h-4 w-4 text-emerald-400" />
          Deployment Windows
        </CardTitle>
      </CardHeader>
      <CardContent>
        {windows && windows.length > 0 ? (
          <div className="space-y-3 mt-2">
            {windows.map((win, idx) => (
              <div key={idx} className="p-2 bg-slate-950/50 rounded border border-slate-800 flex flex-col gap-1">
                <div className="flex justify-between items-center border-b border-slate-800/50 pb-1">
                  <span className="text-xs font-semibold text-slate-300">{win.windowType}</span>
                  <span className={`px-1.5 py-0.5 rounded font-mono text-[10px] ${win.enforceBlackout ? 'bg-rose-950/50 text-rose-400 border border-rose-800/50' : 'bg-emerald-950/50 text-emerald-400 border border-emerald-800/50'}`}>
                    {win.enforceBlackout ? 'BLACKOUT' : 'ACTIVE'}
                  </span>
                </div>
                <div className="flex flex-col text-[10px] text-slate-500 font-mono mt-1">
                  <span>Start: {new Date(win.startTime).toLocaleString()}</span>
                  <span>End: {new Date(win.endTime).toLocaleString()}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-sm text-slate-500 italic mt-4">
            No specific windows constrained for this release.
          </div>
        )}
      </CardContent>
    </Card>
  );
}
