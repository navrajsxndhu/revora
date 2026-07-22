"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { History } from "lucide-react";

interface SecurityAuditTimelineProps {
  audit: unknown[];
}

export function SecurityAuditTimeline({ audit }: SecurityAuditTimelineProps) {
  if (!audit) return null;

  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <History className="h-4 w-4 text-slate-400" />
          Audit Timeline
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3 mt-2 border-l border-slate-800 ml-2 pl-4">
          {audit.map((event, idx) => (
            <div key={idx} className="relative">
              <div className="absolute -left-[21px] top-1.5 h-2 w-2 rounded-full bg-slate-600 border border-slate-900"></div>
              <div className="flex flex-col gap-1">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-semibold text-slate-200">{event.event}</span>
                  <span className="font-mono text-[9px] text-slate-500">{event.timestamp}</span>
                </div>
                <div className="text-[10px] text-slate-400">
                  <span className="font-mono">{event.actor}</span> → <span className="text-slate-300">{event.resource}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
