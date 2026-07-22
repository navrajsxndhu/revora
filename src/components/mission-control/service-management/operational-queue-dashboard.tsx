"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Users2 } from "lucide-react";

interface OperationalQueueDashboardProps {
  queues: unknown;
}

export function OperationalQueueDashboard({ queues }: OperationalQueueDashboardProps) {
  if (!queues) return null;

  return (
    <Card className="border-slate-800 bg-slate-900/50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
          <Users2 className="h-4 w-4 text-emerald-500" />
          Operational Queues
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3 mt-2">
          {queues.map((q: unknown, idx: number) => (
            <div key={idx} className="flex flex-col gap-2 p-2 border border-slate-800 rounded bg-slate-950/30">
              <div className="flex justify-between items-center">
                <span className="text-xs font-semibold text-slate-300">{q.name}</span>
                <span className="text-[10px] text-emerald-400 border border-emerald-900/50 px-1 rounded">SLA: {q.sla}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[10px] text-slate-500">Capacity: {q.active}/{q.capacity}</span>
                <span className="text-[10px] text-rose-400">Escalation: {q.escalation}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
